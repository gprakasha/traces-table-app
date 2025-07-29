export type LogTraceType = {
    id: string;
    startedAt: number;
    endedAt: number;
    latency: number;
    name: string;
    status: "success" | "failure" | "pending" | "unknown";
    projectId: string;
    referenceId?: string | null;
    sessionId?: string | null;
    attributes?: Record<string, string | number | boolean | null> | null;
    tags?: string[] | null;
    spans: LogSpanType[];
}


export type LogSpanType = {
    id: string;
    logTraceId: string;
    referenceId?: string | null;
    parentReferenceId?: string | null;
    startedAt: number;
    endedAt: number;
    latency: number;
    name: string;
    status: "success" | "failure" | "pending" | "unknown";
    content: {
        input?: string;
        output?: string;
        metadata?: Record<string, string | number | boolean>;
    };
    parsedContent?: {
        inputTokens?: number;
        outputTokens?: number;
        cost?: number;
        model?: string;
    } | null;
    sessionId?: string | null;
    attributes?: Record<string, string | number | boolean | null> | null;
    tags?: string[] | null;
}
export type TracesType = LogTraceType[];