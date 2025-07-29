import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable, getSortedRowModel, type SortingState, type ExpandedState } from '@tanstack/react-table';
import { LogTraceSchema, type ValidatedLogTraceType } from '../../schema/schema';
import { TraceStatus, type LogSpanType, type LogTraceType, type TracesType } from '../../type/traces';
import { z } from 'zod';
import { formatReadableDate } from '../../utils/util';
import { SpanList } from '../SpanList';
import { useVirtualizer } from '@tanstack/react-virtual';
import './style.css';
import VisualizeTrace from '../visualizeTrace/VisualizeTrace';
import { renderCell } from '../../utils/renderHelpers';

const columnHelper = createColumnHelper<ValidatedLogTraceType & {
    cost: number;
    inputTokens: number;
    outputTokens: number;
    totalTokens: number;
    spanCount: number;
    firstSpanInput: string;
    lastSpanOutput: string;
    nonSuccessSpansCount: number;
}>();

const TraceTable = ({ traces }: {
    traces: TracesType
}) => {

    const tableContainerRef = useRef<HTMLDivElement>(null);

    const validatedTraces = useMemo(() => {
        return traces.map((trace) => {
            try {
                return LogTraceSchema.parse(trace);
            } catch (error) {
                if (error instanceof z.ZodError) {
                    console.error('Zod validation error:', error.issues);
                } else {
                    console.error('Unexpected error during validation:', error);
                }
                return null;
            }
        }).filter((trace): trace is LogTraceType => trace !== null);
    }, [traces]);

    const enrichedTraces = useMemo(() => {
        return validatedTraces.map((trace) => {
            const spans = trace.spans || [];
            const cost = spans.reduce((sum, span) => sum + (span.parsedContent?.cost || 0), 0);
            const inputTokens = spans.reduce((sum, span) => sum + (span.parsedContent?.inputTokens || 0), 0);
            const outputTokens = spans.reduce((sum, span) => sum + (span.parsedContent?.outputTokens || 0), 0);
            const totalTokens = inputTokens + outputTokens;
            const spanCount = spans.length;
            const firstSpanInput = spans[0]?.content?.input || '';
            const lastSpanOutput = spans[spans.length - 1]?.content?.output || '';
            const nonSuccessSpansCount = spans.filter((span) => span.status !== TraceStatus.SUCCESS).length;

            return {
                ...trace,
                cost,
                inputTokens,
                outputTokens,
                totalTokens,
                spanCount,
                firstSpanInput,
                lastSpanOutput,
                nonSuccessSpansCount,
            };
        });
    }, [validatedTraces]);

    const [sorting, setSorting] = useState<SortingState>([{ id: 'startedAt', desc: true }]);
    const [expanded, setExpanded] = useState<ExpandedState>({});
    const [selectedTrace, setSelectedTrace] = useState<ValidatedLogTraceType | null>(null);

    const columns = useMemo(() => [
        columnHelper.display({
            id: 'expander',
            header: () => null,
            size: 40,
            cell: ({ row }) => (
                <button
                    className="p-2 hover:bg-gray-100 rounded"
                    onClick={() => row.toggleExpanded()}
                    aria-label={row.getIsExpanded() ? 'Collapse row' : 'Expand row'}
                >
                    {row.getIsExpanded() ? '▼' : '▶'}
                </button>
            ),
        }),
        columnHelper.accessor('name', {
            header: 'Name',
            size: 200,
            cell: (info) => info.getValue(),
            sortingFn: 'alphanumeric',
        }),
        columnHelper.accessor('status', {
            header: 'Status',
            size: 120,
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor('attributes', {
            header: 'Attributes',
            size: 200,
            cell: (info) => renderCell(info.getValue() ? JSON.stringify(info.getValue()) : null, 'json'),
        }),
        columnHelper.accessor('tags', {
            header: 'Tags',
            size: 150,
            cell: (info) => info.getValue()?.length ? (
                <div className="flex flex-wrap gap-1">
                    {info.getValue()?.map((tag: string) => (
                        <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                            {tag}
                        </span>
                    ))}
                </div>
            ) : (
                <span className="text-gray-500">N/A</span>
            ),
            sortingFn: 'alphanumeric',
        }),
        columnHelper.accessor('cost', {
            header: 'Cost',
            size: 100,
            cell: (info) => <div>{info.getValue().toFixed(2)}</div>,
            sortingFn: 'basic',
        }),
        columnHelper.accessor('inputTokens', {
            header: 'Input Tokens',
            size: 120,
            cell: (info) => <div>{info.getValue()}</div>,
            sortingFn: 'basic',
        }),
        columnHelper.accessor('outputTokens', {
            header: 'Output Tokens',
            size: 120,
            cell: (info) => <div>{info.getValue()}</div>,
            sortingFn: 'basic',
        }),
        columnHelper.accessor('totalTokens', {
            header: 'Total Tokens',
            size: 120,
            cell: (info) => <div>{info.getValue()}</div>,
            sortingFn: 'basic',
        }),
        columnHelper.accessor('spanCount', {
            header: 'Span Count',
            size: 100,
            cell: (info) => <div>{info.getValue()}</div>,
            sortingFn: 'basic',
        }),
        columnHelper.accessor('firstSpanInput', {
            header: 'First Span Input',
            size: 200,
            cell: (info) => renderCell(info.getValue(), 'json'),
        }),
        columnHelper.accessor('lastSpanOutput', {
            header: 'Last Span Output',
            size: 200,
            cell: (info) => renderCell(info.getValue(), 'json'),
        }),
        columnHelper.accessor('nonSuccessSpansCount', {
            header: 'Non-Success Spans',
            size: 160,
            cell: (info) => <div>{info.getValue()}</div>,
            sortingFn: 'basic',
        }),
        columnHelper.accessor('id', {
            header: 'ID',
            size: 200,
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor('projectId', {
            header: 'Project ID',
            size: 200,
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor('referenceId', {
            header: 'Reference ID',
            size: 200,
            cell: (info) => info.getValue() || 'N/A',
        }),
        columnHelper.accessor('sessionId', {
            header: 'Session ID',
            size: 200,
            cell: (info) => info.getValue() || 'N/A',
        }),
        columnHelper.accessor('latency', {
            header: 'Latency (ms)',
            size: 120,
            cell: (info) => info.getValue(),
            sortingFn: 'basic',
        }),
        columnHelper.accessor('startedAt', {
            header: 'Started At',
            size: 200,
            cell: (info) => <div>{formatReadableDate(info.getValue())}</div>,
            sortingFn: 'datetime',
        }),
        columnHelper.accessor('endedAt', {
            header: 'Ended At',
            size: 200,
            cell: (info) => <div>{formatReadableDate(info.getValue())}</div>,
            sortingFn: 'datetime',
        }),
        columnHelper.display({
            id: 'actions',
            header: 'Actions',
            size: 150,
            cell: ({ row }) => (
                <button
                    onClick={() => setSelectedTrace(row.original)}
                    className="px-2 py-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded"
                    aria-label="View trace details"
                >
                    View Details
                </button>
            ),
        }),
    ], []);

    const onExpandedChange = (updater: unknown) => {
        setExpanded((old) => {
            const newExpanded = typeof updater === 'function' ? updater(old) : updater;
            return newExpanded;
        });
    };

    const table = useReactTable({
        data: enrichedTraces,
        columns,
        state: {
            sorting,
            expanded,
        },
        onSortingChange: setSorting,
        onExpandedChange: onExpandedChange,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getRowCanExpand: () => true,
    });

    const rowVirtualizer = useVirtualizer({
        count: table.getRowModel().rows.length,
        getScrollElement: () => tableContainerRef.current!,
        estimateSize: (index) => {
            const row = table.getRowModel().rows[index];
            if (row.getIsExpanded()) {
                const spanCount = row.original.spans?.length || 0;
                const baseHeight = 85;
                const perSpanHeight = 55;
                return baseHeight + (spanCount * perSpanHeight) + 20;
            }
            return 85;
        },
        overscan: 10,
        measureElement: (el) => el.getBoundingClientRect().height,
        useAnimationFrameWithResizeObserver: true,
    });

    const rowRefs = useRef<Map<string, HTMLDivElement>>(new Map());

    useLayoutEffect(() => {
        rowVirtualizer.measure();
    }, [enrichedTraces, expanded, rowVirtualizer]);

    return (
        <div ref={tableContainerRef} className="relative overflow-x-auto md:overflow-x-visible overflow-y-scroll" style={{ minHeight: '50vh', maxHeight: '100%' }} role="table" aria-label="Trace Table">
            <table className="w-full table-fixed text-left text-gray-700">
                <thead className="bg-gray-100 text-gray-600 uppercase font-semibold text-sm sm:text-xs sticky top-0">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th
                                    key={header.id}
                                    className="px-2 py-1 whitespace-nowrap cursor-pointer select-none"
                                    style={{ width: header.getSize() || 'auto' }}
                                    onClick={header.column.getToggleSortingHandler()}
                                    aria-sort={header.column.getIsSorted() ? (header.column.getIsSorted() === 'asc' ? 'ascending' : 'descending') : undefined}
                                >
                                    <div className="flex items-center gap-1">
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        {{
                                            asc: '↑',
                                            desc: '↓',
                                        }[header.column.getIsSorted() as string] ?? null}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
            </table>

            <div style={{ position: 'relative', height: rowVirtualizer.getTotalSize() }} className="w-full overflow-hidden">
                {rowVirtualizer.getVirtualItems().map((virtualRow) => {
                    const row = table.getRowModel().rows[virtualRow.index];
                    const spans = row.original.spans || [];

                    return (
                        <div
                            key={row.id}
                            ref={(el) => {
                                if (el) rowRefs.current.set(row.id, el);
                                rowVirtualizer.measureElement(el);
                            }}
                            className="border border-secondary"
                            style={{
                                position: 'absolute',
                                top: 0,
                                transform: `translateY(${virtualRow.start}px)`,
                                width: '100%',
                                height: `${virtualRow.size}px`,
                            }}
                        >
                            <table className="w-full table-fixed text-left text-gray-700 h-full">
                                <colgroup>
                                    {row.getVisibleCells().map(cell => (
                                        <col key={cell.id} style={{ width: cell.column.getSize() }} />
                                    ))}
                                </colgroup>
                                <tbody>
                                    <tr className="hover:bg-gray-300 transition-colors border-b border-gray-200">
                                        {row.getVisibleCells().map(cell => (
                                            <td
                                                key={cell.id}
                                                className="px-2 py-1 align-middle whitespace-nowrap"
                                                style={{ textAlign: cell.column.id === 'cost' || cell.column.id === 'latency' || cell.column.id.match(/Tokens|Span/) ? 'center' : 'left' }}
                                            >
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                    {row.getIsExpanded() && spans.length > 0 && (
                                        <tr className="bg-gray-100 ps-10">
                                            <td colSpan={row.getVisibleCells().length}>
                                                <SpanList spans={spans.sort((a, b) => a.startedAt - b.startedAt) as LogSpanType[]} />
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    );
                })}
            </div>

            {selectedTrace && (
                <div className="fixed inset-y-0 right-0 w-full md:w-1/3 bg-white shadow-2xl border-l border-gray-200 transform transition-transform duration-200 ease-in-out z-50">
                    <div className="p-4 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
                        <h5 className="text-md font-semibold">Trace Details</h5>
                        <button
                            onClick={() => setSelectedTrace(null)}
                            className="text-gray-500 hover:text-gray-700"
                            aria-label="Close details"
                        >
                            ✕
                        </button>
                    </div>
                    <div className="p-4 overflow-y-auto" style={{ height: 'calc(100vh - 64px)' }}>
                        <VisualizeTrace selectedTrace={selectedTrace as LogTraceType} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TraceTable;