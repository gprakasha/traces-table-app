import React, { useEffect, useRef, useState, useCallback } from 'react';
import CytoscapeComponent from 'react-cytoscapejs';
import dagre from 'cytoscape-dagre';
import cytoscape from 'cytoscape';
import type { ElementDefinition, Core } from 'cytoscape';
import type { LogTraceType } from '../../type/traces';

if (typeof window !== 'undefined') {
    cytoscape.use(dagre);
}

interface VisualizeTraceProps {
    selectedTrace: LogTraceType;
}

interface DagreLayoutOptions {
    name: 'dagre';
    rankDir?: 'TB' | 'LR' | 'BT' | 'RL';
    nodeSep?: number;
    edgeSep?: number;
    rankSep?: number;
}

const VisualizeTrace: React.FC<VisualizeTraceProps> = ({ selectedTrace }) => {
    const cyRef = useRef<Core | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [expandedNodes, setExpandedNodes] = useState<string[]>([]);

    const layoutOptions: DagreLayoutOptions = {
        name: 'dagre',
        rankDir: 'LR',
        nodeSep: 80,
        edgeSep: 30,
        rankSep: 120,
    };

    const transformTraceToElements = useCallback((trace: LogTraceType, expanded: string[]): ElementDefinition[] => {
        const elements: ElementDefinition[] = [];
        if (!trace) return elements;

        const rootId = trace.id;
        elements.push({
            data: { id: rootId, label: trace.name || 'Trace Root', width: 120, height: 50 },
            classes: 'root'
        });

        const processNode = (obj: any, parentId: string, path: string[] = []) => {
            Object.keys(obj).forEach((key) => {
                if (key === 'id') return;
                const currentPath = [...path, key].join('-');
                const nodeId = `${parentId}-${currentPath}`;
                const value = obj[key];
                const hasChildren = typeof value === 'object' && value !== null && Object.keys(value).length > 0;

                const width = Math.max(String(key).length * 10, 80);
                const height = hasChildren ? 50 : 40;

                elements.push({
                    data: { id: nodeId, label: key, width, height },
                    classes: hasChildren ? 'expandable' : 'leaf'
                });
                elements.push({
                    data: { source: parentId, target: nodeId }
                });

                if (hasChildren && expanded.includes(nodeId)) {
                    processNode(value, nodeId, [currentPath]);
                }
            });
        };

        processNode(trace, rootId, []);
        return elements;
    }, []);

    const [elements, setElements] = useState<ElementDefinition[]>([]);

    useEffect(() => {
        if (!selectedTrace) return;
        setElements(transformTraceToElements(selectedTrace, expandedNodes));
    }, [selectedTrace, expandedNodes, transformTraceToElements]);

    useEffect(() => {
        const cy = cyRef.current;
        if (!cy) return;

        const handleNodeClick = (event: cytoscape.EventObject) => {
            const nodeId = event.target.id();
            setExpandedNodes(prev =>
                prev.includes(nodeId)
                    ? prev.filter(id => id !== nodeId)
                    : [...prev, nodeId]
            );
        };

        cy.on('tap', 'node', handleNodeClick);
        return () => {
            cy.off('tap', 'node', handleNodeClick);
        };
    }, [elements]);

    useEffect(() => {
        const cy = cyRef.current;
        if (!cy) return;
        cy.resize();
        cy.layout(layoutOptions as any).run();
        const expanded = elements.filter(e => e.data && typeof e.data.id === 'string' && expandedNodes.includes(e.data.id));
        const expandedIds = expanded.map(e => e.data.id).filter((id): id is string => typeof id === 'string');
        if (expandedIds.length > 0) {
            // cy.fit(cy.nodes().filter(n => expandedIds.includes(n.id())), 80);
        } else {
            const collapsedParentIds = elements
                .filter(e => e.data && typeof e.data.id === 'string' && !expandedNodes.includes(e.data.id))
                .map(e => e.data.id)
                .filter((id): id is string => typeof id === 'string');

            // TODO: make it interactive & handle collapsed nodes by zooming in on them                
            // if (collapsedParentIds.length > 0) {
            //     cy.fit(cy.nodes().filter(n => collapsedParentIds.includes(n.id())), 80);
            // } else {
            //     cy.fit(undefined, 60);
            // }
        }
    }, [elements, layoutOptions, expandedNodes]);

    useEffect(() => {
        const handleResize = () => {
            if (cyRef.current && containerRef.current) {
                cyRef.current.resize();
                cyRef.current.fit(undefined, 40);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // TODO: use https://github.com/lukethacoder/cytoscape-css-variables to use CSS variables for styling
    const stylesheet = [
        {
            selector: 'node',
            style: {
                'label': 'data(label)',
                'text-valign': 'center',
                'text-halign': 'center',
                'color': '#fff',
                'text-outline-width': 1,
                'text-outline-color': '#333',
                'font-size': '12px',
                'font-family': 'Inter, sans-serif',
                'border-width': 2,
                'border-style': 'solid',
                'width': 'data(width)',
                'height': 'data(height)',
                'padding': '20px',
            },
        },
        {
            selector: 'node.expandable',
            style: {
                'shape': 'round-rectangle',
                'background-color': '#1F78B4',
                'border-color': '#0E4E7A',
            },
        },
        {
            selector: 'node.leaf',
            style: {
                'shape': 'ellipse',
                'background-color': '#33A02C',
                'border-color': '#1F5C1A',
            },
        },
        {
            selector: 'node.root',
            style: {
                'shape': 'diamond',
                'background-color': '#FF7F00',
                'border-color': '#B35000',
                'font-weight': 'bold',
                'font-size': '14px',
            },
        },
        {
            selector: 'edge',
            style: {
                'curve-style': 'bezier',
                'line-color': '#999',
                'target-arrow-color': '#999',
                'target-arrow-shape': 'triangle',
                'width': 1.5,
            },
        },
    ];

    return (
        <div
            ref={containerRef}
            className="w-full h-[95vh] min-h-[400px] bg-surface-base relative rounded-md flex items-center justify-center"
        >
            <CytoscapeComponent
                elements={elements}
                stylesheet={stylesheet}
                style={{ width: '100%', height: '100%' }}
                cy={(cy) => {
                    cyRef.current = cy;
                    cy.resize();
                    cy.fit(undefined, 40);
                }}
            />
        </div>
    );
};

export default VisualizeTrace;