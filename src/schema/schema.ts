import { z } from 'zod';
import { TraceStatus } from '../type/traces';

const statusEnum = z.enum(Object.values(TraceStatus));

const flexibleValue = z.union([
    z.string().max(1000),
    z.number(),
    z.boolean(),
    z.null(),
]);

export const LogSpanSchema = z.object({
    id: z.uuid(),
    logTraceId: z.uuid(),
    referenceId: z.uuid().nullable().optional(),
    parentReferenceId: z.uuid().nullable().optional(),
    startedAt: z.number(),
    endedAt: z.number(),
    latency: z.number(),
    name: z.string(),
    status: statusEnum,
    content: z.object({
        input: z.string().optional(),
        output: z.string().optional(),
        metadata: z.record(
            z.string(),
            flexibleValue
        ).nullable().optional(),
    }).nullable().optional(),
    parsedContent: z.object({
        inputTokens: z.number().optional(),
        outputTokens: z.number().optional(),
        cost: z.number().optional(),
        model: z.string().optional(),
    }).nullable().optional(),
    sessionId: z.uuid().nullable().optional(),
    attributes: z.record(z.string(), flexibleValue).nullable().optional(),
    tags: z.array(z.string().max(1000)).nullable().optional(),
});

export const LogTraceSchema = z.object({
    id: z.uuid(),
    startedAt: z.number(),
    endedAt: z.number(),
    latency: z.number(),
    name: z.string().max(4096),
    status: statusEnum,
    projectId: z.uuid(),
    referenceId: z.uuid().nullable().optional(),
    sessionId: z.uuid().nullable().optional(),
    attributes: z.record(z.string(), flexibleValue).nullable().optional(),
    tags: z.array(z.string().max(1000)).nullable().optional(),
    spans: z.array(z.lazy(() => LogSpanSchema)).optional(),
});

export type ValidatedLogTraceType = z.infer<typeof LogTraceSchema>;
export type ValidatedLogSpanType = z.infer<typeof LogSpanSchema>;
