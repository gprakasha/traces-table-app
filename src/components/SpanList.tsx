import { type LogSpanType } from '../type/traces';
import { RenderCell } from '../components/RenderCell';

const SpanRow = ({ span }: { span: LogSpanType }) => (
    <tr className="border-b border-surface-lowest">
        <td className="p-sm text-on-surface-base">{span.name}</td>
        <td className="p-sm text-on-surface-base">{span.status}</td>
        <td className="p-sm text-on-surface-base"><RenderCell value={span.content?.input} type="json" /></td>
        <td className="p-sm text-on-surface-base"><RenderCell value={span.content?.output} type="json" /></td>
        <td className="p-sm text-on-surface-base">{span.latency}ms</td>
        <td className="p-sm text-on-surface-base"><RenderCell value={span.startedAt} type='date' /></td>
    </tr>
);

export const SpanList = ({ spans }: {
    spans: LogSpanType[]
}) => {

    return (
        <div className="ps-xl p-md bg-surface-base font-sans">
            <table className="w-auto text-md">
                <thead>
                    <tr className="bg-surface-high">
                        {['Name', 'Status', 'Input', 'Output', 'Latency', 'Started At'].map((header) => (
                            <th key={header} className="p-sm text-on-surface-high">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {spans.map((span) => (
                        <SpanRow key={span.id} span={span} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};