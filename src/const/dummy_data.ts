import type { TracesType } from "../type/traces";

export const traces: TracesType = [
    {
        "id": "af30b67e-44b8-47b0-99fc-929fe427bab6",
        "startedAt": 1752233021145,
        "endedAt": 1752233022620,
        "latency": 1475,
        "name": "Trace-af30b67e",
        "status": "failure",
        "projectId": "0e2d6085-e1ae-4370-87a3-0a03087a85d5",
        "referenceId": null,
        "sessionId": "64baf557-4b04-47a8-955c-efe80ebe3448",
        "attributes": {
            "attr0": false
        },
        "tags": [
            "system",
            "batch",
            "user-triggered"
        ],
        "spans": [
            {
                "id": "efda3b87-a007-4bdb-9e9c-c6f240ea3a2c",
                "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752233022411,
                "endedAt": 1752233022494,
                "latency": 83,
                "name": "Span-efda3b87",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 482\"}",
                    "output": "{\"resp\": \"ok 35\"}",
                    "metadata": {
                        "step": 2
                    }
                },
                "parsedContent": null,
                "sessionId": "64baf557-4b04-47a8-955c-efe80ebe3448",
                "attributes": null,
                "tags": null
            },
            {
                "id": "9f6515f5-70bb-4352-8b56-1aeb2cc7c8fe",
                "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752233021158,
                "endedAt": 1752233022176,
                "latency": 1018,
                "name": "Span-9f6515f5",
                "status": "success",
                "content": {
                    "output": "{\"resp\": \"ok 542\"}"
                },
                "parsedContent": {
                    "inputTokens": 1579,
                    "model": "llama-2"
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "07285290-d9d0-4213-8fa8-6b76ff133d5e",
                "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
                "referenceId": "8b0e4ceb-e71c-4dd5-86f3-c00be44ba06e",
                "parentReferenceId": null,
                "startedAt": 1752233021394,
                "endedAt": 1752233022042,
                "latency": 648,
                "name": "Span-07285290",
                "status": "failure",
                "content": {
                    "output": "{\"resp\": \"ok 357\"}"
                },
                "parsedContent": {
                    "inputTokens": 1547,
                    "outputTokens": 126
                },
                "sessionId": "64baf557-4b04-47a8-955c-efe80ebe3448",
                "attributes": null,
                "tags": null
            },
            {
                "id": "be7ccc26-e5a4-4d5b-85b9-23b36c454617",
                "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
                "referenceId": "df0f2394-07cb-4520-895b-ed27637d3908",
                "parentReferenceId": "8b0e4ceb-e71c-4dd5-86f3-c00be44ba06e",
                "startedAt": 1752233021422,
                "endedAt": 1752233022032,
                "latency": 610,
                "name": "Span-be7ccc26",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 344\"}"
                },
                "parsedContent": {
                    "inputTokens": 1380
                },
                "sessionId": "64baf557-4b04-47a8-955c-efe80ebe3448",
                "attributes": {},
                "tags": null
            },
            {
                "id": "50e020a4-f03d-4261-a244-8ca4b3cf69a1",
                "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
                "referenceId": "adb89c62-6328-4335-9e54-56bd45224bc0",
                "parentReferenceId": "df0f2394-07cb-4520-895b-ed27637d3908",
                "startedAt": 1752233022200,
                "endedAt": 1752233022225,
                "latency": 25,
                "name": "Span-50e020a4",
                "status": "pending",
                "content": {},
                "parsedContent": {
                    "inputTokens": 876,
                    "cost": 0.04209
                },
                "sessionId": "64baf557-4b04-47a8-955c-efe80ebe3448",
                "attributes": null,
                "tags": null
            },
            {
                "id": "91e96dc2-765d-4811-aa2d-49c121c77c84",
                "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
                "referenceId": "00d52dcd-c684-42c6-a676-f10da0a909e6",
                "parentReferenceId": null,
                "startedAt": 1752233021569,
                "endedAt": 1752233022604,
                "latency": 1035,
                "name": "Span-91e96dc2",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 586\"}",
                    "output": "{\"resp\": \"ok 809\"}"
                },
                "parsedContent": null,
                "sessionId": "64baf557-4b04-47a8-955c-efe80ebe3448",
                "attributes": null,
                "tags": null
            },
            {
                "id": "7b58f08a-0be6-462d-93c8-ee107c68fd28",
                "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752233021327,
                "endedAt": 1752233022202,
                "latency": 875,
                "name": "Span-7b58f08a",
                "status": "pending",
                "content": {
                    "output": "{\"resp\": \"ok 893\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": {
                    "spanAttr0": true
                },
                "tags": [
                    "user-triggered"
                ]
            },
            {
                "id": "41d12383-7da8-49a2-9655-4b7359203e4e",
                "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752233022302,
                "endedAt": 1752233022619,
                "latency": 317,
                "name": "Span-41d12383",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 9\"}",
                    "output": "{\"resp\": \"ok 774\"}"
                },
                "parsedContent": null,
                "sessionId": "64baf557-4b04-47a8-955c-efe80ebe3448",
                "attributes": {
                    "spanAttr0": false,
                    "spanAttr1": 22
                },
                "tags": null
            },
            {
                "id": "7ec5fd7d-763a-4ba3-a361-bc9ea83e0a24",
                "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
                "referenceId": "5baed57c-b2bc-4316-924b-9013d5a3a225",
                "parentReferenceId": "adb89c62-6328-4335-9e54-56bd45224bc0",
                "startedAt": 1752233021366,
                "endedAt": 1752233021414,
                "latency": 48,
                "name": "Span-7ec5fd7d",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 694\"}"
                },
                "parsedContent": {
                    "inputTokens": 1989,
                    "cost": 0.01858
                },
                "sessionId": "64baf557-4b04-47a8-955c-efe80ebe3448",
                "attributes": null,
                "tags": null
            },
            {
                "id": "3d641e53-e5ee-4f28-be56-c4eee7b26e94",
                "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752233021266,
                "endedAt": 1752233022383,
                "latency": 1117,
                "name": "Span-3d641e53",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 873\"}",
                    "output": "{\"resp\": \"ok 671\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": {
                    "spanAttr0": 49
                },
                "tags": [
                    "retry",
                    "system"
                ]
            },
            {
                "id": "6dcd3933-96fe-41df-89d5-96328eb76c12",
                "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752233022004,
                "endedAt": 1752233022543,
                "latency": 539,
                "name": "Span-6dcd3933",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 39\"}",
                    "output": "{\"resp\": \"ok 465\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": [
                    "system"
                ]
            },
            {
                "id": "03441818-8394-4e2b-89cf-0208d1c470d0",
                "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752233021475,
                "endedAt": 1752233022304,
                "latency": 829,
                "name": "Span-03441818",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 434\"}",
                    "output": "{\"resp\": \"ok 584\"}",
                    "metadata": {
                        "step": 4
                    }
                },
                "parsedContent": {
                    "inputTokens": 597,
                    "outputTokens": 1487,
                    "cost": 0.04768,
                    "model": "gpt-4"
                },
                "sessionId": "64baf557-4b04-47a8-955c-efe80ebe3448",
                "attributes": {
                    "spanAttr0": 24
                },
                "tags": null
            }
        ]
    },
    {
        "id": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
        "startedAt": 1752408874763,
        "endedAt": 1752408875034,
        "latency": 271,
        "name": "Trace-98c271d8",
        "status": "failure",
        "projectId": "bcadd4ec-1e04-4c7b-b4e0-e3fa864ec8da",
        "referenceId": "b8aa7580-f653-4e48-b647-872c42f25da5",
        "sessionId": "2e703c18-ecdd-42f4-a024-0231ef69a32b",
        "attributes": null,
        "tags": [
            "user-triggered"
        ],
        "spans": [
            {
                "id": "8333106c-8e5b-427e-9b7c-191878c1ea23",
                "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
                "referenceId": "0bd440e8-621c-4b56-a7e1-bb2f83283ee2",
                "parentReferenceId": null,
                "startedAt": 1752408874816,
                "endedAt": 1752408874893,
                "latency": 77,
                "name": "Span-8333106c",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 269\"}",
                    "output": "{\"resp\": \"ok 673\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": {},
                "tags": null
            },
            {
                "id": "189cb916-7d91-4fe8-af96-dd83cb8d359d",
                "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
                "referenceId": "0f5aa94f-fd06-4757-aa0c-93189b694e82",
                "parentReferenceId": null,
                "startedAt": 1752408874816,
                "endedAt": 1752408874953,
                "latency": 137,
                "name": "Span-189cb916",
                "status": "success",
                "content": {
                    "output": "{\"resp\": \"ok 365\"}"
                },
                "parsedContent": null,
                "sessionId": "2e703c18-ecdd-42f4-a024-0231ef69a32b",
                "attributes": {
                    "spanAttr0": false
                },
                "tags": [
                    "system"
                ]
            },
            {
                "id": "9f30ee05-bb03-4f80-b05b-f48e7dd777f3",
                "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
                "referenceId": "390bfda3-86fe-4f52-a1a2-b4cdcb8b946a",
                "parentReferenceId": "0f5aa94f-fd06-4757-aa0c-93189b694e82",
                "startedAt": 1752408874841,
                "endedAt": 1752408874936,
                "latency": 95,
                "name": "Span-9f30ee05",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 172\"}",
                    "output": "{\"resp\": \"ok 474\"}"
                },
                "parsedContent": {
                    "inputTokens": 613,
                    "outputTokens": 419,
                    "cost": 0.02649,
                    "model": "gpt-3.5-turbo"
                },
                "sessionId": null,
                "attributes": null,
                "tags": [
                    "user-triggered",
                    "api"
                ]
            },
            {
                "id": "e3adde3b-66c6-4344-a2f6-8fd5ea5df305",
                "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
                "referenceId": "bec0b87c-c3f4-4073-8b7b-46fbfb51ccbc",
                "parentReferenceId": "390bfda3-86fe-4f52-a1a2-b4cdcb8b946a",
                "startedAt": 1752408874836,
                "endedAt": 1752408874990,
                "latency": 154,
                "name": "Span-e3adde3b",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 8\"}",
                    "output": "{\"resp\": \"ok 554\"}"
                },
                "parsedContent": {
                    "inputTokens": 1067,
                    "outputTokens": 1550,
                    "cost": 0.04259
                },
                "sessionId": "2e703c18-ecdd-42f4-a024-0231ef69a32b",
                "attributes": null,
                "tags": null
            },
            {
                "id": "cd37b408-3d89-433b-b6d0-cfde820f1ae8",
                "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
                "referenceId": "6bf10a06-d3d3-4624-9f3d-c1d45f6fe3de",
                "parentReferenceId": "0bd440e8-621c-4b56-a7e1-bb2f83283ee2",
                "startedAt": 1752408874867,
                "endedAt": 1752408874981,
                "latency": 114,
                "name": "Span-cd37b408",
                "status": "failure",
                "content": {
                    "output": "{\"resp\": \"ok 742\"}"
                },
                "parsedContent": {
                    "inputTokens": 1050
                },
                "sessionId": "2e703c18-ecdd-42f4-a024-0231ef69a32b",
                "attributes": null,
                "tags": null
            },
            {
                "id": "9916776d-5041-4a67-adfd-ea240fc88588",
                "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752408874851,
                "endedAt": 1752408874973,
                "latency": 122,
                "name": "Span-9916776d",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 342\"}"
                },
                "parsedContent": {
                    "inputTokens": 1863,
                    "cost": 0.03281
                },
                "sessionId": null,
                "attributes": {
                    "spanAttr0": 48,
                    "spanAttr1": true
                },
                "tags": null
            },
            {
                "id": "2676ef5c-57b1-4ae9-9a55-9089205685e3",
                "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
                "referenceId": "3f492bc0-3ace-43f5-88d1-bcb77de969c1",
                "parentReferenceId": null,
                "startedAt": 1752408874919,
                "endedAt": 1752408874962,
                "latency": 43,
                "name": "Span-2676ef5c",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 626\"}",
                    "output": "{\"resp\": \"ok 443\"}"
                },
                "parsedContent": {
                    "inputTokens": 1669,
                    "outputTokens": 1663,
                    "cost": 0.02562
                },
                "sessionId": "2e703c18-ecdd-42f4-a024-0231ef69a32b",
                "attributes": {},
                "tags": null
            },
            {
                "id": "57b71c0f-8fc2-4490-ad48-2ef15ead7722",
                "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752408874901,
                "endedAt": 1752408874954,
                "latency": 53,
                "name": "Span-57b71c0f",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 377\"}",
                    "output": "{\"resp\": \"ok 378\"}"
                },
                "parsedContent": {
                    "inputTokens": 1810,
                    "outputTokens": 1388,
                    "cost": 0.01894,
                    "model": "claude-2"
                },
                "sessionId": "2e703c18-ecdd-42f4-a024-0231ef69a32b",
                "attributes": null,
                "tags": null
            },
            {
                "id": "a184608c-af31-425d-be3b-2f1ee87f459b",
                "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
                "referenceId": "9db71fda-7f4b-47e8-a0a2-ed5632108da9",
                "parentReferenceId": null,
                "startedAt": 1752408875000,
                "endedAt": 1752408875019,
                "latency": 19,
                "name": "Span-a184608c",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 873\"}",
                    "output": "{\"resp\": \"ok 980\"}"
                },
                "parsedContent": null,
                "sessionId": "2e703c18-ecdd-42f4-a024-0231ef69a32b",
                "attributes": null,
                "tags": null
            },
            {
                "id": "eea2b565-2ad9-416e-b997-6e1dd3c3ce07",
                "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
                "referenceId": "7aa3b36b-2a33-4703-9e4b-4a75abb2b064",
                "parentReferenceId": "3f492bc0-3ace-43f5-88d1-bcb77de969c1",
                "startedAt": 1752408874839,
                "endedAt": 1752408875005,
                "latency": 166,
                "name": "Span-eea2b565",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 654\"}"
                },
                "parsedContent": {
                    "outputTokens": 1261,
                    "cost": 0.04198
                },
                "sessionId": "2e703c18-ecdd-42f4-a024-0231ef69a32b",
                "attributes": null,
                "tags": null
            },
            {
                "id": "b954df1d-8efe-4303-926a-17bd0ac1288d",
                "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
                "referenceId": "73c1bfdc-e7f2-44af-8de3-ba4b4f7456ba",
                "parentReferenceId": "7aa3b36b-2a33-4703-9e4b-4a75abb2b064",
                "startedAt": 1752408874791,
                "endedAt": 1752408874833,
                "latency": 42,
                "name": "Span-b954df1d",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 462\"}",
                    "output": "{\"resp\": \"ok 688\"}",
                    "metadata": {
                        "step": 4
                    }
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            }
        ]
    },
    {
        "id": "75ec2f6f-a1d9-4408-8f8e-aa3761b112d0",
        "startedAt": 1752259575056,
        "endedAt": 1752259578996,
        "latency": 3940,
        "name": "Trace-75ec2f6f",
        "status": "unknown",
        "projectId": "973f56e4-1609-4609-ada3-f01bca344ba4",
        "referenceId": "7995bfc5-4699-4f7a-898d-25db7fa6b769",
        "sessionId": "27acb1e2-07ec-483a-85bf-4bbba95c2a0c",
        "attributes": {
            "attr0": 33,
            "attr1": false,
            "attr2": true
        },
        "tags": null,
        "spans": [
            {
                "id": "b8be2e8e-0226-426b-bfe3-80a95ffa76c4",
                "logTraceId": "75ec2f6f-a1d9-4408-8f8e-aa3761b112d0",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752259577526,
                "endedAt": 1752259577784,
                "latency": 258,
                "name": "Span-b8be2e8e",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 787\"}",
                    "output": "{\"resp\": \"ok 108\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "f28bb3c5-3847-46d1-b0d0-d5976c575f85",
                "logTraceId": "75ec2f6f-a1d9-4408-8f8e-aa3761b112d0",
                "referenceId": "5bd69ead-b1cd-4b61-8732-fc1026821d82",
                "parentReferenceId": null,
                "startedAt": 1752259577224,
                "endedAt": 1752259578579,
                "latency": 1355,
                "name": "Span-f28bb3c5",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 905\"}",
                    "output": "{\"resp\": \"ok 549\"}"
                },
                "parsedContent": {
                    "cost": 0.02577
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "3044f16e-06e8-458a-ab4b-ed8e00398bde",
                "logTraceId": "75ec2f6f-a1d9-4408-8f8e-aa3761b112d0",
                "referenceId": "cc99c0ae-c3d3-44f3-b5e6-35a3d2b37069",
                "parentReferenceId": "5bd69ead-b1cd-4b61-8732-fc1026821d82",
                "startedAt": 1752259578240,
                "endedAt": 1752259578379,
                "latency": 139,
                "name": "Span-3044f16e",
                "status": "pending",
                "content": {
                    "output": "{\"resp\": \"ok 331\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": {
                    "spanAttr0": true,
                    "spanAttr1": false
                },
                "tags": null
            },
            {
                "id": "cdae4b33-133a-41a2-873f-87c0baf522e4",
                "logTraceId": "75ec2f6f-a1d9-4408-8f8e-aa3761b112d0",
                "referenceId": "8e75daed-b1e6-4601-bc68-23ed03173951",
                "parentReferenceId": "cc99c0ae-c3d3-44f3-b5e6-35a3d2b37069",
                "startedAt": 1752259578669,
                "endedAt": 1752259578784,
                "latency": 115,
                "name": "Span-cdae4b33",
                "status": "pending",
                "content": {
                    "output": "{\"resp\": \"ok 234\"}",
                    "metadata": {
                        "step": 4
                    }
                },
                "parsedContent": {
                    "inputTokens": 627,
                    "outputTokens": 1640,
                    "cost": 0.01282,
                    "model": "gpt-3.5-turbo"
                },
                "sessionId": null,
                "attributes": null,
                "tags": [
                    "api"
                ]
            },
            {
                "id": "97c13ea3-18df-415d-8f2d-fa1f0e29eb1b",
                "logTraceId": "75ec2f6f-a1d9-4408-8f8e-aa3761b112d0",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752259578547,
                "endedAt": 1752259578953,
                "latency": 406,
                "name": "Span-97c13ea3",
                "status": "pending",
                "content": {
                    "output": "{\"resp\": \"ok 375\"}"
                },
                "parsedContent": {
                    "outputTokens": 989,
                    "cost": 0.0371
                },
                "sessionId": null,
                "attributes": {
                    "spanAttr0": 7,
                    "spanAttr1": false
                },
                "tags": null
            },
            {
                "id": "f6afba44-c29c-438d-b5d0-8ae26be067a0",
                "logTraceId": "75ec2f6f-a1d9-4408-8f8e-aa3761b112d0",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752259576620,
                "endedAt": 1752259578277,
                "latency": 1657,
                "name": "Span-f6afba44",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 414\"}"
                },
                "parsedContent": null,
                "sessionId": "27acb1e2-07ec-483a-85bf-4bbba95c2a0c",
                "attributes": {},
                "tags": null
            }
        ]
    },
    {
        "id": "18b1e427-57f0-48c2-8ad3-f843acd845df",
        "startedAt": 1752596237986,
        "endedAt": 1752596239916,
        "latency": 1930,
        "name": "Trace-18b1e427",
        "status": "unknown",
        "projectId": "bcadd4ec-1e04-4c7b-b4e0-e3fa864ec8da",
        "referenceId": null,
        "sessionId": "7e550a13-0172-4e53-96f5-28340fc323b8",
        "attributes": {
            "attr0": false,
            "attr1": false,
            "attr2": true
        },
        "tags": null,
        "spans": [
            {
                "id": "041b36aa-7b95-41df-bb49-01e11ff45708",
                "logTraceId": "18b1e427-57f0-48c2-8ad3-f843acd845df",
                "referenceId": "3f9ee814-6efb-4c01-8866-78195a6fb9fb",
                "parentReferenceId": null,
                "startedAt": 1752596238754,
                "endedAt": 1752596239136,
                "latency": 382,
                "name": "Span-041b36aa",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 471\"}",
                    "output": "{\"resp\": \"ok 415\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": [
                    "system",
                    "user-triggered"
                ]
            },
            {
                "id": "34bc6952-5c34-4ce1-a3dc-a005d911538b",
                "logTraceId": "18b1e427-57f0-48c2-8ad3-f843acd845df",
                "referenceId": "850417fc-4f3c-4195-9e4b-2174792b4ed9",
                "parentReferenceId": null,
                "startedAt": 1752596239601,
                "endedAt": 1752596239668,
                "latency": 67,
                "name": "Span-34bc6952",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 461\"}",
                    "output": "{\"resp\": \"ok 93\"}"
                },
                "parsedContent": {
                    "inputTokens": 1108,
                    "outputTokens": 1456,
                    "cost": 0.02561
                },
                "sessionId": "7e550a13-0172-4e53-96f5-28340fc323b8",
                "attributes": null,
                "tags": [
                    "system",
                    "batch"
                ]
            },
            {
                "id": "459c45f4-5854-401b-9794-15230d25b794",
                "logTraceId": "18b1e427-57f0-48c2-8ad3-f843acd845df",
                "referenceId": "08e10c09-ae11-4f3a-8c94-bf073642213a",
                "parentReferenceId": "850417fc-4f3c-4195-9e4b-2174792b4ed9",
                "startedAt": 1752596238258,
                "endedAt": 1752596238503,
                "latency": 245,
                "name": "Span-459c45f4",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 668\"}",
                    "output": "{\"resp\": \"ok 931\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "1f7811cc-c738-4b1b-b83c-c417f40083a8",
                "logTraceId": "18b1e427-57f0-48c2-8ad3-f843acd845df",
                "referenceId": "b2dede31-fb62-4fd3-8900-1537365dcc2e",
                "parentReferenceId": "3f9ee814-6efb-4c01-8866-78195a6fb9fb",
                "startedAt": 1752596239740,
                "endedAt": 1752596239891,
                "latency": 151,
                "name": "Span-1f7811cc",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 893\"}",
                    "output": "{\"resp\": \"ok 303\"}",
                    "metadata": {
                        "step": 3
                    }
                },
                "parsedContent": null,
                "sessionId": "7e550a13-0172-4e53-96f5-28340fc323b8",
                "attributes": null,
                "tags": null
            },
            {
                "id": "b5703122-7cd6-410a-8890-490ebc89e1f4",
                "logTraceId": "18b1e427-57f0-48c2-8ad3-f843acd845df",
                "referenceId": "9017b496-e9b9-444c-a216-8508128787a5",
                "parentReferenceId": "850417fc-4f3c-4195-9e4b-2174792b4ed9",
                "startedAt": 1752596238884,
                "endedAt": 1752596239911,
                "latency": 1027,
                "name": "Span-b5703122",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 716\"}",
                    "output": "{\"resp\": \"ok 377\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            }
        ]
    },
    {
        "id": "7828f4ef-aa0a-4a3f-a5c2-1cc90a70e737",
        "startedAt": 1750311743521,
        "endedAt": 1750311744751,
        "latency": 1230,
        "name": "Trace-7828f4ef",
        "status": "success",
        "projectId": "973f56e4-1609-4609-ada3-f01bca344ba4",
        "referenceId": null,
        "sessionId": "ab3cf4d5-5632-485b-bab9-12663d4c2bcb",
        "attributes": null,
        "tags": null,
        "spans": [
            {
                "id": "b98d298b-41f9-4f4e-8fc5-bf7dafb62f86",
                "logTraceId": "7828f4ef-aa0a-4a3f-a5c2-1cc90a70e737",
                "referenceId": "b99dbdd3-cbe3-476d-8b4e-42d79f628591",
                "parentReferenceId": null,
                "startedAt": 1750311743539,
                "endedAt": 1750311744250,
                "latency": 711,
                "name": "Span-b98d298b",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 300\"}",
                    "output": "{\"resp\": \"ok 411\"}"
                },
                "parsedContent": {
                    "inputTokens": 980,
                    "outputTokens": 161,
                    "model": "gpt-4"
                },
                "sessionId": "ab3cf4d5-5632-485b-bab9-12663d4c2bcb",
                "attributes": {},
                "tags": null
            },
            {
                "id": "0cd8a8f6-3dcf-4785-a0d8-fadaa089c51f",
                "logTraceId": "7828f4ef-aa0a-4a3f-a5c2-1cc90a70e737",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1750311744613,
                "endedAt": 1750311744692,
                "latency": 79,
                "name": "Span-0cd8a8f6",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 762\"}",
                    "output": "{\"resp\": \"ok 726\"}"
                },
                "parsedContent": {
                    "outputTokens": 456,
                    "cost": 0.0313
                },
                "sessionId": null,
                "attributes": {
                    "spanAttr0": 28,
                    "spanAttr1": true
                },
                "tags": null
            },
            {
                "id": "91886403-7f33-4c2f-bda4-27959db973f9",
                "logTraceId": "7828f4ef-aa0a-4a3f-a5c2-1cc90a70e737",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1750311744080,
                "endedAt": 1750311744494,
                "latency": 414,
                "name": "Span-91886403",
                "status": "success",
                "content": {
                    "metadata": {
                        "step": 3
                    }
                },
                "parsedContent": null,
                "sessionId": "ab3cf4d5-5632-485b-bab9-12663d4c2bcb",
                "attributes": null,
                "tags": null
            },
            {
                "id": "3f1d82c0-e5df-4275-b5de-521a22917ffd",
                "logTraceId": "7828f4ef-aa0a-4a3f-a5c2-1cc90a70e737",
                "referenceId": "c9b554e2-861f-4aae-9d76-28c5482131d9",
                "parentReferenceId": "b99dbdd3-cbe3-476d-8b4e-42d79f628591",
                "startedAt": 1750311744357,
                "endedAt": 1750311744685,
                "latency": 328,
                "name": "Span-3f1d82c0",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 779\"}",
                    "output": "{\"resp\": \"ok 77\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": {},
                "tags": null
            },
            {
                "id": "43e8348f-67bf-4900-a0fa-915b18785a57",
                "logTraceId": "7828f4ef-aa0a-4a3f-a5c2-1cc90a70e737",
                "referenceId": "9ae0479a-84d9-422c-af61-63d291470923",
                "parentReferenceId": null,
                "startedAt": 1750311743859,
                "endedAt": 1750311744465,
                "latency": 606,
                "name": "Span-43e8348f",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 862\"}",
                    "output": "{\"resp\": \"ok 269\"}"
                },
                "parsedContent": null,
                "sessionId": "ab3cf4d5-5632-485b-bab9-12663d4c2bcb",
                "attributes": null,
                "tags": [
                    "api"
                ]
            },
            {
                "id": "ce08d478-bced-44f4-8619-9532a265ba39",
                "logTraceId": "7828f4ef-aa0a-4a3f-a5c2-1cc90a70e737",
                "referenceId": "04d0720d-0a01-4afb-a7ac-c4c2de3d1d11",
                "parentReferenceId": "c9b554e2-861f-4aae-9d76-28c5482131d9",
                "startedAt": 1750311744246,
                "endedAt": 1750311744480,
                "latency": 234,
                "name": "Span-ce08d478",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 181\"}",
                    "output": "{\"resp\": \"ok 179\"}"
                },
                "parsedContent": {
                    "inputTokens": 1232,
                    "outputTokens": 1092,
                    "cost": 0.01589
                },
                "sessionId": "ab3cf4d5-5632-485b-bab9-12663d4c2bcb",
                "attributes": null,
                "tags": null
            },
            {
                "id": "fa7e793b-26e3-4d65-998a-282e0294ffc5",
                "logTraceId": "7828f4ef-aa0a-4a3f-a5c2-1cc90a70e737",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1750311743686,
                "endedAt": 1750311744446,
                "latency": 760,
                "name": "Span-fa7e793b",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 124\"}"
                },
                "parsedContent": {
                    "inputTokens": 11
                },
                "sessionId": "ab3cf4d5-5632-485b-bab9-12663d4c2bcb",
                "attributes": null,
                "tags": null
            }
        ]
    },
    {
        "id": "6774e427-ffd0-48fe-9dca-4723200dcf6d",
        "startedAt": 1751339625446,
        "endedAt": 1751339629507,
        "latency": 4061,
        "name": "Trace-6774e427",
        "status": "failure",
        "projectId": "70273eed-b756-4ef5-b623-f6f625eb9ec9",
        "referenceId": null,
        "sessionId": "aa82dc45-c073-45d5-b19c-b22eb795ffc6",
        "attributes": {
            "attr0": "v0",
            "attr1": true,
            "attr2": false
        },
        "tags": null,
        "spans": [
            {
                "id": "64d25218-6b12-4328-ac55-8a7eb5da5634",
                "logTraceId": "6774e427-ffd0-48fe-9dca-4723200dcf6d",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751339628817,
                "endedAt": 1751339629306,
                "latency": 489,
                "name": "Span-64d25218",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 265\"}"
                },
                "parsedContent": {
                    "outputTokens": 1803,
                    "cost": 0.02502
                },
                "sessionId": "aa82dc45-c073-45d5-b19c-b22eb795ffc6",
                "attributes": null,
                "tags": null
            },
            {
                "id": "a9f08ffd-b9cc-46aa-8a98-2143e38d0677",
                "logTraceId": "6774e427-ffd0-48fe-9dca-4723200dcf6d",
                "referenceId": "31590d9e-5594-489d-978d-1f7c15b36176",
                "parentReferenceId": null,
                "startedAt": 1751339628688,
                "endedAt": 1751339629215,
                "latency": 527,
                "name": "Span-a9f08ffd",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 90\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "807e4869-ac1b-4dc5-9140-367dd868e08a",
                "logTraceId": "6774e427-ffd0-48fe-9dca-4723200dcf6d",
                "referenceId": "c316cfc2-898c-4f3a-b446-5e3c2f288946",
                "parentReferenceId": "31590d9e-5594-489d-978d-1f7c15b36176",
                "startedAt": 1751339626128,
                "endedAt": 1751339626644,
                "latency": 516,
                "name": "Span-807e4869",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 583\"}",
                    "output": "{\"resp\": \"ok 621\"}"
                },
                "parsedContent": {
                    "inputTokens": 1538,
                    "outputTokens": 295,
                    "cost": 0.03168
                },
                "sessionId": "aa82dc45-c073-45d5-b19c-b22eb795ffc6",
                "attributes": {
                    "spanAttr0": true
                },
                "tags": null
            },
            {
                "id": "7636a916-5a0a-4595-83f5-366e746146b7",
                "logTraceId": "6774e427-ffd0-48fe-9dca-4723200dcf6d",
                "referenceId": "642aec9d-919f-4850-b5de-9d7eb4566254",
                "parentReferenceId": null,
                "startedAt": 1751339626281,
                "endedAt": 1751339627323,
                "latency": 1042,
                "name": "Span-7636a916",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 437\"}",
                    "output": "{\"resp\": \"ok 100\"}",
                    "metadata": {
                        "step": 1
                    }
                },
                "parsedContent": null,
                "sessionId": "aa82dc45-c073-45d5-b19c-b22eb795ffc6",
                "attributes": null,
                "tags": null
            },
            {
                "id": "2b78815e-a92a-4f0f-99bc-3d58920ee3f2",
                "logTraceId": "6774e427-ffd0-48fe-9dca-4723200dcf6d",
                "referenceId": "a78f1f70-a173-409f-84aa-1eefc915d9a4",
                "parentReferenceId": null,
                "startedAt": 1751339626098,
                "endedAt": 1751339626286,
                "latency": 188,
                "name": "Span-2b78815e",
                "status": "pending",
                "content": {},
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": [
                    "api"
                ]
            },
            {
                "id": "f35c6787-4acc-4d63-ba69-82b3cef6dbf6",
                "logTraceId": "6774e427-ffd0-48fe-9dca-4723200dcf6d",
                "referenceId": "fefa22c3-ea2f-4349-893c-34bb8c33efd8",
                "parentReferenceId": null,
                "startedAt": 1751339627375,
                "endedAt": 1751339628591,
                "latency": 1216,
                "name": "Span-f35c6787",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 963\"}"
                },
                "parsedContent": null,
                "sessionId": "aa82dc45-c073-45d5-b19c-b22eb795ffc6",
                "attributes": null,
                "tags": [
                    "batch"
                ]
            },
            {
                "id": "643e2fd9-8195-4b6f-aedf-c50a9e30ed9d",
                "logTraceId": "6774e427-ffd0-48fe-9dca-4723200dcf6d",
                "referenceId": "000144f0-7b50-4442-a264-fe3eb0f1e6af",
                "parentReferenceId": "fefa22c3-ea2f-4349-893c-34bb8c33efd8",
                "startedAt": 1751339626147,
                "endedAt": 1751339628498,
                "latency": 2351,
                "name": "Span-643e2fd9",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 233\"}",
                    "output": "{\"resp\": \"ok 97\"}"
                },
                "parsedContent": {
                    "outputTokens": 1826,
                    "model": "claude-2"
                },
                "sessionId": null,
                "attributes": {
                    "spanAttr0": 31,
                    "spanAttr1": 6
                },
                "tags": [
                    "batch",
                    "system"
                ]
            },
            {
                "id": "0006fe40-ac46-4004-b2c1-308ce1c7f6da",
                "logTraceId": "6774e427-ffd0-48fe-9dca-4723200dcf6d",
                "referenceId": "6398bc9b-acf6-4165-ad3c-0b60a2d5a5bc",
                "parentReferenceId": null,
                "startedAt": 1751339626776,
                "endedAt": 1751339626889,
                "latency": 113,
                "name": "Span-0006fe40",
                "status": "pending",
                "content": {
                    "output": "{\"resp\": \"ok 636\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": {
                    "spanAttr0": false,
                    "spanAttr1": 41
                },
                "tags": null
            },
            {
                "id": "5145907f-61cc-484d-afc2-aa85560496aa",
                "logTraceId": "6774e427-ffd0-48fe-9dca-4723200dcf6d",
                "referenceId": "0ed5c98e-674c-43d8-a77b-5c75109598ab",
                "parentReferenceId": "31590d9e-5594-489d-978d-1f7c15b36176",
                "startedAt": 1751339626140,
                "endedAt": 1751339626593,
                "latency": 453,
                "name": "Span-5145907f",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 823\"}",
                    "metadata": {
                        "step": 2
                    }
                },
                "parsedContent": null,
                "sessionId": "aa82dc45-c073-45d5-b19c-b22eb795ffc6",
                "attributes": null,
                "tags": null
            }
        ]
    },
    {
        "id": "228c5a9b-2959-4de4-ac4d-423e075d3b1d",
        "startedAt": 1752474957432,
        "endedAt": 1752474958522,
        "latency": 1090,
        "name": "Trace-228c5a9b",
        "status": "failure",
        "projectId": "70273eed-b756-4ef5-b623-f6f625eb9ec9",
        "referenceId": null,
        "sessionId": null,
        "attributes": {
            "attr0": 34,
            "attr1": "v4"
        },
        "tags": null,
        "spans": [
            {
                "id": "9744b45f-780f-49f1-a2f3-ec9ffa3b11fa",
                "logTraceId": "228c5a9b-2959-4de4-ac4d-423e075d3b1d",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752474957619,
                "endedAt": 1752474958009,
                "latency": 390,
                "name": "Span-9744b45f",
                "status": "pending",
                "content": {},
                "parsedContent": null,
                "sessionId": null,
                "attributes": {
                    "spanAttr0": false
                },
                "tags": null
            },
            {
                "id": "6d4584ca-a257-4d8d-9b8b-582a4b09c6e5",
                "logTraceId": "228c5a9b-2959-4de4-ac4d-423e075d3b1d",
                "referenceId": "7939f360-ea74-408b-b474-29db13e5553c",
                "parentReferenceId": null,
                "startedAt": 1752474957813,
                "endedAt": 1752474958248,
                "latency": 435,
                "name": "Span-6d4584ca",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 523\"}",
                    "output": "{\"resp\": \"ok 356\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": []
            },
            {
                "id": "e73f9ac4-c85b-40ab-a110-d80e35311a93",
                "logTraceId": "228c5a9b-2959-4de4-ac4d-423e075d3b1d",
                "referenceId": "8777a88f-91a1-4a7a-9380-f22d5cbbbf0f",
                "parentReferenceId": "7939f360-ea74-408b-b474-29db13e5553c",
                "startedAt": 1752474958505,
                "endedAt": 1752474958506,
                "latency": 1,
                "name": "Span-e73f9ac4",
                "status": "success",
                "content": {},
                "parsedContent": {
                    "inputTokens": 25,
                    "cost": 0.03826
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "ff2c6e14-aa25-4c8d-b15b-6034be3b812a",
                "logTraceId": "228c5a9b-2959-4de4-ac4d-423e075d3b1d",
                "referenceId": "ba59f319-bc2d-4952-a930-f5b0eec021bc",
                "parentReferenceId": "8777a88f-91a1-4a7a-9380-f22d5cbbbf0f",
                "startedAt": 1752474957722,
                "endedAt": 1752474958241,
                "latency": 519,
                "name": "Span-ff2c6e14",
                "status": "success",
                "content": {
                    "output": "{\"resp\": \"ok 951\"}",
                    "metadata": {
                        "step": 3
                    }
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "748e0251-e50e-4f92-914f-ce99de5a301a",
                "logTraceId": "228c5a9b-2959-4de4-ac4d-423e075d3b1d",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752474958345,
                "endedAt": 1752474958520,
                "latency": 175,
                "name": "Span-748e0251",
                "status": "failure",
                "content": {
                    "output": "{\"resp\": \"ok 707\"}"
                },
                "parsedContent": {
                    "inputTokens": 1767,
                    "outputTokens": 1845
                },
                "sessionId": null,
                "attributes": {
                    "spanAttr0": false,
                    "spanAttr1": 47
                },
                "tags": []
            },
            {
                "id": "701a38b1-2146-48fe-a023-ace16a1e7c4b",
                "logTraceId": "228c5a9b-2959-4de4-ac4d-423e075d3b1d",
                "referenceId": "f25c2f89-9e7d-4994-bf89-0a9a6dbab2a2",
                "parentReferenceId": "ba59f319-bc2d-4952-a930-f5b0eec021bc",
                "startedAt": 1752474957498,
                "endedAt": 1752474958416,
                "latency": 918,
                "name": "Span-701a38b1",
                "status": "pending",
                "content": {
                    "output": "{\"resp\": \"ok 816\"}"
                },
                "parsedContent": {
                    "inputTokens": 866,
                    "outputTokens": 841,
                    "cost": 0.00401
                },
                "sessionId": null,
                "attributes": {
                    "spanAttr0": 13,
                    "spanAttr1": 28
                },
                "tags": null
            },
            {
                "id": "084a5865-eb40-4e0a-8e9c-bfc4057487f6",
                "logTraceId": "228c5a9b-2959-4de4-ac4d-423e075d3b1d",
                "referenceId": "c014c8b8-bf55-4ee0-a40a-49a67effd146",
                "parentReferenceId": "f25c2f89-9e7d-4994-bf89-0a9a6dbab2a2",
                "startedAt": 1752474957819,
                "endedAt": 1752474958468,
                "latency": 649,
                "name": "Span-084a5865",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 478\"}"
                },
                "parsedContent": {
                    "inputTokens": 1241,
                    "outputTokens": 1018,
                    "cost": 0.01481
                },
                "sessionId": null,
                "attributes": {},
                "tags": [
                    "api",
                    "system"
                ]
            },
            {
                "id": "89ca760b-623c-4e79-a805-7498ebdb7b92",
                "logTraceId": "228c5a9b-2959-4de4-ac4d-423e075d3b1d",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752474957968,
                "endedAt": 1752474958336,
                "latency": 368,
                "name": "Span-89ca760b",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 958\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": [
                    "system"
                ]
            },
            {
                "id": "ed02bee6-1301-45e9-b9f7-eaae47f40794",
                "logTraceId": "228c5a9b-2959-4de4-ac4d-423e075d3b1d",
                "referenceId": "b27fc271-43a4-4e23-9e78-95ad45350d74",
                "parentReferenceId": "c014c8b8-bf55-4ee0-a40a-49a67effd146",
                "startedAt": 1752474958145,
                "endedAt": 1752474958352,
                "latency": 207,
                "name": "Span-ed02bee6",
                "status": "pending",
                "content": {
                    "output": "{\"resp\": \"ok 993\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": {},
                "tags": null
            }
        ]
    },
    {
        "id": "a4125512-ed3a-4d93-91cb-ec607362cce0",
        "startedAt": 1751411265697,
        "endedAt": 1751411267806,
        "latency": 2109,
        "name": "Trace-a4125512",
        "status": "success",
        "projectId": "973f56e4-1609-4609-ada3-f01bca344ba4",
        "referenceId": "b93df07f-374a-4762-85ea-f45c23623f68",
        "sessionId": "52a4496b-3567-4f0b-9a68-286e7a7b4c30",
        "attributes": null,
        "tags": null,
        "spans": [
            {
                "id": "30c21284-d99f-4c13-84f0-00ba43f920d4",
                "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751411265697,
                "endedAt": 1751411267552,
                "latency": 1855,
                "name": "Span-30c21284",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 225\"}",
                    "output": "{\"resp\": \"ok 833\"}"
                },
                "parsedContent": {
                    "inputTokens": 1708
                },
                "sessionId": "52a4496b-3567-4f0b-9a68-286e7a7b4c30",
                "attributes": {
                    "spanAttr0": false,
                    "spanAttr1": true
                },
                "tags": null
            },
            {
                "id": "2759baef-1421-4fbd-a8ef-2b66f6c9fbbd",
                "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
                "referenceId": "28ca9528-433c-4916-b37f-89dab7a8c118",
                "parentReferenceId": null,
                "startedAt": 1751411267774,
                "endedAt": 1751411267806,
                "latency": 32,
                "name": "Span-2759baef",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 635\"}",
                    "output": "{\"resp\": \"ok 307\"}"
                },
                "parsedContent": {
                    "outputTokens": 710,
                    "cost": 0.03138
                },
                "sessionId": null,
                "attributes": null,
                "tags": []
            },
            {
                "id": "b0fc5400-b027-46f9-b928-54378bb90d0e",
                "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
                "referenceId": "6b88c441-0ff2-4ba2-9367-8a97b8411ef1",
                "parentReferenceId": null,
                "startedAt": 1751411267774,
                "endedAt": 1751411267778,
                "latency": 4,
                "name": "Span-b0fc5400",
                "status": "pending",
                "content": {},
                "parsedContent": null,
                "sessionId": "52a4496b-3567-4f0b-9a68-286e7a7b4c30",
                "attributes": null,
                "tags": null
            },
            {
                "id": "f1ffe4ef-c8e5-41bd-a7c6-4ab180a9b99d",
                "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
                "referenceId": "f69386a8-6430-4bc3-88dd-0fb7eb739e63",
                "parentReferenceId": "28ca9528-433c-4916-b37f-89dab7a8c118",
                "startedAt": 1751411266287,
                "endedAt": 1751411266485,
                "latency": 198,
                "name": "Span-f1ffe4ef",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 89\"}",
                    "output": "{\"resp\": \"ok 215\"}"
                },
                "parsedContent": {
                    "inputTokens": 79,
                    "cost": 0.02001
                },
                "sessionId": "52a4496b-3567-4f0b-9a68-286e7a7b4c30",
                "attributes": {
                    "spanAttr0": 5
                },
                "tags": null
            },
            {
                "id": "6cf48ad4-2a04-4495-9f56-4cc83fe9f752",
                "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
                "referenceId": "c5bc3b7d-2a27-4b2d-9e81-da2692eaf419",
                "parentReferenceId": "28ca9528-433c-4916-b37f-89dab7a8c118",
                "startedAt": 1751411267430,
                "endedAt": 1751411267775,
                "latency": 345,
                "name": "Span-6cf48ad4",
                "status": "failure",
                "content": {
                    "output": "{\"resp\": \"ok 422\"}",
                    "metadata": {
                        "step": 5
                    }
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "8ecd6b0b-676b-40ab-8ce7-ed4cfef5935a",
                "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
                "referenceId": "8788aa58-a343-4478-8e37-41e7efdeb0ed",
                "parentReferenceId": "f69386a8-6430-4bc3-88dd-0fb7eb739e63",
                "startedAt": 1751411265813,
                "endedAt": 1751411266071,
                "latency": 258,
                "name": "Span-8ecd6b0b",
                "status": "pending",
                "content": {
                    "output": "{\"resp\": \"ok 728\"}"
                },
                "parsedContent": {
                    "inputTokens": 1371,
                    "outputTokens": 315,
                    "cost": 0.04297,
                    "model": "claude-2"
                },
                "sessionId": "52a4496b-3567-4f0b-9a68-286e7a7b4c30",
                "attributes": null,
                "tags": []
            },
            {
                "id": "958aa307-9753-4757-94bd-d275f49e8e0f",
                "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
                "referenceId": "2fba76d2-7878-4021-9c64-c88bb00cbab7",
                "parentReferenceId": "f69386a8-6430-4bc3-88dd-0fb7eb739e63",
                "startedAt": 1751411267674,
                "endedAt": 1751411267751,
                "latency": 77,
                "name": "Span-958aa307",
                "status": "success",
                "content": {},
                "parsedContent": null,
                "sessionId": null,
                "attributes": {
                    "spanAttr0": true,
                    "spanAttr1": true
                },
                "tags": null
            },
            {
                "id": "ec9d5cb2-8cfd-431c-a208-408b7cd8f1c3",
                "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751411267424,
                "endedAt": 1751411267475,
                "latency": 51,
                "name": "Span-ec9d5cb2",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 96\"}",
                    "output": "{\"resp\": \"ok 834\"}",
                    "metadata": {
                        "step": 1
                    }
                },
                "parsedContent": {
                    "inputTokens": 58,
                    "outputTokens": 333,
                    "cost": 0.03827,
                    "model": "gpt-4"
                },
                "sessionId": null,
                "attributes": {
                    "spanAttr0": true
                },
                "tags": null
            },
            {
                "id": "1acff0ab-0375-4bf6-97e5-0f6c72de8e91",
                "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
                "referenceId": "0324019a-384d-4093-8fcf-a464623bd2cd",
                "parentReferenceId": null,
                "startedAt": 1751411265911,
                "endedAt": 1751411267654,
                "latency": 1743,
                "name": "Span-1acff0ab",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 920\"}",
                    "output": "{\"resp\": \"ok 804\"}"
                },
                "parsedContent": {
                    "inputTokens": 1212,
                    "outputTokens": 1818
                },
                "sessionId": "52a4496b-3567-4f0b-9a68-286e7a7b4c30",
                "attributes": null,
                "tags": null
            },
            {
                "id": "18d295ce-db49-478f-8f91-8b65f7653b98",
                "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751411267594,
                "endedAt": 1751411267708,
                "latency": 114,
                "name": "Span-18d295ce",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 342\"}",
                    "output": "{\"resp\": \"ok 603\"}",
                    "metadata": {
                        "step": 1
                    }
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": []
            },
            {
                "id": "7f2ed6e6-79a2-4363-9b4b-e9357874a97f",
                "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
                "referenceId": "bf766869-74d5-4134-bef4-da14ede9176d",
                "parentReferenceId": null,
                "startedAt": 1751411266346,
                "endedAt": 1751411266961,
                "latency": 615,
                "name": "Span-7f2ed6e6",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 452\"}",
                    "output": "{\"resp\": \"ok 313\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": []
            },
            {
                "id": "c9dbd580-b8df-4dbd-b5ce-7a3131244976",
                "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751411266957,
                "endedAt": 1751411267005,
                "latency": 48,
                "name": "Span-c9dbd580",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 691\"}",
                    "output": "{\"resp\": \"ok 829\"}"
                },
                "parsedContent": null,
                "sessionId": "52a4496b-3567-4f0b-9a68-286e7a7b4c30",
                "attributes": null,
                "tags": null
            },
            {
                "id": "f6c86b21-b338-45c4-8875-4359d05e0697",
                "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
                "referenceId": "3a31fcaf-fc16-4bd6-b6e6-f42914e6c17c",
                "parentReferenceId": "f69386a8-6430-4bc3-88dd-0fb7eb739e63",
                "startedAt": 1751411266003,
                "endedAt": 1751411266333,
                "latency": 330,
                "name": "Span-f6c86b21",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 952\"}",
                    "output": "{\"resp\": \"ok 461\"}"
                },
                "parsedContent": {
                    "outputTokens": 316,
                    "model": "llama-2"
                },
                "sessionId": "52a4496b-3567-4f0b-9a68-286e7a7b4c30",
                "attributes": {
                    "spanAttr0": false
                },
                "tags": null
            }
        ]
    },
    {
        "id": "95dd67ce-327e-4eb7-9433-8afa3dea5316",
        "startedAt": 1750488276727,
        "endedAt": 1750488278281,
        "latency": 1554,
        "name": "Trace-95dd67ce",
        "status": "pending",
        "projectId": "70273eed-b756-4ef5-b623-f6f625eb9ec9",
        "referenceId": "f617c2ea-0b1b-4704-9abc-58bb3bacef85",
        "sessionId": "bbf41e62-ca1d-47ed-8946-461816ad0a57",
        "attributes": null,
        "tags": null,
        "spans": [
            {
                "id": "b33486c9-665e-4d6d-af85-63ab0b955cd7",
                "logTraceId": "95dd67ce-327e-4eb7-9433-8afa3dea5316",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1750488277733,
                "endedAt": 1750488278145,
                "latency": 412,
                "name": "Span-b33486c9",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 556\"}",
                    "output": "{\"resp\": \"ok 578\"}"
                },
                "parsedContent": {
                    "inputTokens": 1394,
                    "outputTokens": 1133,
                    "cost": 0.01472
                },
                "sessionId": "bbf41e62-ca1d-47ed-8946-461816ad0a57",
                "attributes": {
                    "spanAttr0": false
                },
                "tags": null
            },
            {
                "id": "a33929db-4b1b-445a-add1-8d1136768937",
                "logTraceId": "95dd67ce-327e-4eb7-9433-8afa3dea5316",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1750488278095,
                "endedAt": 1750488278194,
                "latency": 99,
                "name": "Span-a33929db",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 661\"}",
                    "output": "{\"resp\": \"ok 958\"}"
                },
                "parsedContent": {
                    "outputTokens": 205,
                    "cost": 0.02817,
                    "model": "llama-2"
                },
                "sessionId": "bbf41e62-ca1d-47ed-8946-461816ad0a57",
                "attributes": null,
                "tags": null
            },
            {
                "id": "05158cc1-5872-49b9-9420-a43692024ee1",
                "logTraceId": "95dd67ce-327e-4eb7-9433-8afa3dea5316",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1750488277543,
                "endedAt": 1750488278091,
                "latency": 548,
                "name": "Span-05158cc1",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 587\"}",
                    "output": "{\"resp\": \"ok 382\"}"
                },
                "parsedContent": {
                    "inputTokens": 1503,
                    "outputTokens": 1484
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "9a663d8f-96c0-4f77-b81d-5921d2f3ec63",
                "logTraceId": "95dd67ce-327e-4eb7-9433-8afa3dea5316",
                "referenceId": "9205e125-e820-4b6f-a918-e804c118b976",
                "parentReferenceId": null,
                "startedAt": 1750488276923,
                "endedAt": 1750488277166,
                "latency": 243,
                "name": "Span-9a663d8f",
                "status": "success",
                "content": {
                    "output": "{\"resp\": \"ok 603\"}",
                    "metadata": {
                        "step": 3
                    }
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": {
                    "spanAttr0": false,
                    "spanAttr1": false
                },
                "tags": null
            },
            {
                "id": "be0b3048-e588-4f87-a2a9-4348aa79940c",
                "logTraceId": "95dd67ce-327e-4eb7-9433-8afa3dea5316",
                "referenceId": "ee0b0c8b-d026-45bc-83a7-0f0ceae1664a",
                "parentReferenceId": "9205e125-e820-4b6f-a918-e804c118b976",
                "startedAt": 1750488277465,
                "endedAt": 1750488277724,
                "latency": 259,
                "name": "Span-be0b3048",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 133\"}",
                    "output": "{\"resp\": \"ok 677\"}"
                },
                "parsedContent": {
                    "inputTokens": 711,
                    "outputTokens": 1277,
                    "cost": 0.02453,
                    "model": "llama-2"
                },
                "sessionId": null,
                "attributes": {
                    "spanAttr0": true
                },
                "tags": null
            }
        ]
    },
    {
        "id": "5e71f0ec-7b40-4ddb-9bee-09d39c0c3e71",
        "startedAt": 1752136642079,
        "endedAt": 1752136642815,
        "latency": 736,
        "name": "Trace-5e71f0ec",
        "status": "failure",
        "projectId": "70273eed-b756-4ef5-b623-f6f625eb9ec9",
        "referenceId": null,
        "sessionId": "07aa6fc8-762c-4b28-bff3-d8c973d4633c",
        "attributes": null,
        "tags": null,
        "spans": [
            {
                "id": "cc872fb8-ddf2-4333-b340-93080defe59d",
                "logTraceId": "5e71f0ec-7b40-4ddb-9bee-09d39c0c3e71",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752136642499,
                "endedAt": 1752136642756,
                "latency": 257,
                "name": "Span-cc872fb8",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 748\"}",
                    "metadata": {
                        "step": 5
                    }
                },
                "parsedContent": {
                    "outputTokens": 1262,
                    "cost": 0.01636
                },
                "sessionId": null,
                "attributes": null,
                "tags": [
                    "batch",
                    "user-triggered"
                ]
            },
            {
                "id": "d6eea53e-35ef-460d-9edf-09981c0f6c55",
                "logTraceId": "5e71f0ec-7b40-4ddb-9bee-09d39c0c3e71",
                "referenceId": "c9216573-ea13-479a-8f19-4a74b1616431",
                "parentReferenceId": null,
                "startedAt": 1752136642260,
                "endedAt": 1752136642451,
                "latency": 191,
                "name": "Span-d6eea53e",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 350\"}",
                    "output": "{\"resp\": \"ok 3\"}"
                },
                "parsedContent": null,
                "sessionId": "07aa6fc8-762c-4b28-bff3-d8c973d4633c",
                "attributes": null,
                "tags": null
            },
            {
                "id": "aded1a7c-7541-4540-a979-7f25baf379e2",
                "logTraceId": "5e71f0ec-7b40-4ddb-9bee-09d39c0c3e71",
                "referenceId": "d7f127f2-9d9b-42f2-8eef-4ec3bc2b4376",
                "parentReferenceId": "c9216573-ea13-479a-8f19-4a74b1616431",
                "startedAt": 1752136642249,
                "endedAt": 1752136642508,
                "latency": 259,
                "name": "Span-aded1a7c",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 820\"}",
                    "output": "{\"resp\": \"ok 75\"}"
                },
                "parsedContent": null,
                "sessionId": "07aa6fc8-762c-4b28-bff3-d8c973d4633c",
                "attributes": {
                    "spanAttr0": true
                },
                "tags": null
            },
            {
                "id": "ad391942-15f9-425b-bbc7-f9620983204a",
                "logTraceId": "5e71f0ec-7b40-4ddb-9bee-09d39c0c3e71",
                "referenceId": "2420bddb-cf00-4b77-a67d-782929ce2b7a",
                "parentReferenceId": null,
                "startedAt": 1752136642345,
                "endedAt": 1752136642496,
                "latency": 151,
                "name": "Span-ad391942",
                "status": "pending",
                "content": {},
                "parsedContent": {
                    "inputTokens": 1625,
                    "outputTokens": 219
                },
                "sessionId": "07aa6fc8-762c-4b28-bff3-d8c973d4633c",
                "attributes": null,
                "tags": null
            },
            {
                "id": "b7cc185f-9d63-4bb8-97ba-f98b5a55053e",
                "logTraceId": "5e71f0ec-7b40-4ddb-9bee-09d39c0c3e71",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752136642377,
                "endedAt": 1752136642703,
                "latency": 326,
                "name": "Span-b7cc185f",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 557\"}",
                    "output": "{\"resp\": \"ok 6\"}",
                    "metadata": {
                        "step": 5
                    }
                },
                "parsedContent": {
                    "outputTokens": 828,
                    "cost": 0.01579
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            }
        ]
    },
    {
        "id": "38c40ca5-53d5-4c40-b444-a06686dae1d4",
        "startedAt": 1751365025479,
        "endedAt": 1751365028730,
        "latency": 3251,
        "name": "Trace-38c40ca5",
        "status": "pending",
        "projectId": "baf9967a-c3b4-4e32-b23d-23d575471beb",
        "referenceId": null,
        "sessionId": "7be54e4f-e47e-4e04-a5e3-ce24a9fca5a6",
        "attributes": {
            "attr0": true,
            "attr1": true,
            "attr2": 45
        },
        "tags": null,
        "spans": [
            {
                "id": "4f7a2cb4-a4a3-4eb7-9359-db9eef3f15c2",
                "logTraceId": "38c40ca5-53d5-4c40-b444-a06686dae1d4",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751365028430,
                "endedAt": 1751365028477,
                "latency": 47,
                "name": "Span-4f7a2cb4",
                "status": "pending",
                "content": {},
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "64e11715-5762-457b-bf74-bc7dc800f9d2",
                "logTraceId": "38c40ca5-53d5-4c40-b444-a06686dae1d4",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751365027747,
                "endedAt": 1751365028216,
                "latency": 469,
                "name": "Span-64e11715",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 253\"}",
                    "output": "{\"resp\": \"ok 88\"}"
                },
                "parsedContent": {
                    "inputTokens": 86,
                    "outputTokens": 724,
                    "cost": 0.02737
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "67e24935-0ac4-48e1-8874-06030b288a09",
                "logTraceId": "38c40ca5-53d5-4c40-b444-a06686dae1d4",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751365027093,
                "endedAt": 1751365027402,
                "latency": 309,
                "name": "Span-67e24935",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 104\"}",
                    "output": "{\"resp\": \"ok 55\"}",
                    "metadata": {
                        "step": 1
                    }
                },
                "parsedContent": {
                    "inputTokens": 1473,
                    "outputTokens": 1632,
                    "cost": 0.03653
                },
                "sessionId": "7be54e4f-e47e-4e04-a5e3-ce24a9fca5a6",
                "attributes": null,
                "tags": null
            }
        ]
    },
    {
        "id": "8e459bec-5ae7-4bfe-b759-3a064612975b",
        "startedAt": 1752245342628,
        "endedAt": 1752245346536,
        "latency": 3908,
        "name": "Trace-8e459bec",
        "status": "failure",
        "projectId": "70273eed-b756-4ef5-b623-f6f625eb9ec9",
        "referenceId": "64c1c4fe-22e6-4395-9e27-b846b086b0aa",
        "sessionId": "de729e9a-4277-4484-b360-0d32c46c4040",
        "attributes": null,
        "tags": [
            "api"
        ],
        "spans": [
            {
                "id": "4a5ba936-cefd-4589-a463-8193fb3474c5",
                "logTraceId": "8e459bec-5ae7-4bfe-b759-3a064612975b",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752245342692,
                "endedAt": 1752245343363,
                "latency": 671,
                "name": "Span-4a5ba936",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 845\"}",
                    "output": "{\"resp\": \"ok 704\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": {
                    "spanAttr0": false,
                    "spanAttr1": true
                },
                "tags": null
            },
            {
                "id": "d7b1b49c-684d-46e1-9286-17bf6d161384",
                "logTraceId": "8e459bec-5ae7-4bfe-b759-3a064612975b",
                "referenceId": "b3637ea7-29fc-4206-82ef-0bcd5b066d79",
                "parentReferenceId": null,
                "startedAt": 1752245343493,
                "endedAt": 1752245346204,
                "latency": 2711,
                "name": "Span-d7b1b49c",
                "status": "pending",
                "content": {},
                "parsedContent": null,
                "sessionId": "de729e9a-4277-4484-b360-0d32c46c4040",
                "attributes": {
                    "spanAttr0": false
                },
                "tags": [
                    "api"
                ]
            },
            {
                "id": "a0a42a74-8293-4713-8de9-f964635c31f4",
                "logTraceId": "8e459bec-5ae7-4bfe-b759-3a064612975b",
                "referenceId": "6c52fc6f-7692-4396-8c59-a5bf1ccb5196",
                "parentReferenceId": null,
                "startedAt": 1752245342852,
                "endedAt": 1752245345107,
                "latency": 2255,
                "name": "Span-a0a42a74",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 997\"}",
                    "output": "{\"resp\": \"ok 174\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "f6b20cb4-b50e-4bc5-b939-bbe3fc288903",
                "logTraceId": "8e459bec-5ae7-4bfe-b759-3a064612975b",
                "referenceId": "9d3c9004-d8eb-4b21-ba17-75d79ab8e15f",
                "parentReferenceId": "b3637ea7-29fc-4206-82ef-0bcd5b066d79",
                "startedAt": 1752245344715,
                "endedAt": 1752245346030,
                "latency": 1315,
                "name": "Span-f6b20cb4",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 800\"}"
                },
                "parsedContent": {
                    "inputTokens": 325,
                    "outputTokens": 1383,
                    "cost": 0.02267
                },
                "sessionId": "de729e9a-4277-4484-b360-0d32c46c4040",
                "attributes": {},
                "tags": null
            },
            {
                "id": "fc809a1d-14bb-4e99-a751-1ed89d176628",
                "logTraceId": "8e459bec-5ae7-4bfe-b759-3a064612975b",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752245344718,
                "endedAt": 1752245344840,
                "latency": 122,
                "name": "Span-fc809a1d",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 483\"}",
                    "output": "{\"resp\": \"ok 474\"}",
                    "metadata": {
                        "step": 1
                    }
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": [
                    "system"
                ]
            },
            {
                "id": "50c1d5d5-e85b-4561-96bf-c8af1f6a2506",
                "logTraceId": "8e459bec-5ae7-4bfe-b759-3a064612975b",
                "referenceId": "609452c6-6268-4532-961a-dbb137f70297",
                "parentReferenceId": "6c52fc6f-7692-4396-8c59-a5bf1ccb5196",
                "startedAt": 1752245342630,
                "endedAt": 1752245346006,
                "latency": 3376,
                "name": "Span-50c1d5d5",
                "status": "pending",
                "content": {
                    "output": "{\"resp\": \"ok 611\"}"
                },
                "parsedContent": {
                    "inputTokens": 72,
                    "outputTokens": 608,
                    "cost": 0.01387,
                    "model": "gpt-4"
                },
                "sessionId": null,
                "attributes": {
                    "spanAttr0": 17,
                    "spanAttr1": true
                },
                "tags": null
            },
            {
                "id": "309595cf-983c-4dd7-bdde-b804034a0879",
                "logTraceId": "8e459bec-5ae7-4bfe-b759-3a064612975b",
                "referenceId": "8b9ced7a-c636-4d13-9e03-eb404494ad65",
                "parentReferenceId": null,
                "startedAt": 1752245344488,
                "endedAt": 1752245345162,
                "latency": 674,
                "name": "Span-309595cf",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 519\"}",
                    "output": "{\"resp\": \"ok 953\"}"
                },
                "parsedContent": {
                    "inputTokens": 779,
                    "outputTokens": 656,
                    "model": "claude-2"
                },
                "sessionId": "de729e9a-4277-4484-b360-0d32c46c4040",
                "attributes": null,
                "tags": null
            },
            {
                "id": "18a406af-12ad-4a70-8895-a846d2dfa9cf",
                "logTraceId": "8e459bec-5ae7-4bfe-b759-3a064612975b",
                "referenceId": "ed21bbef-8222-4f04-ada2-f37dfc913ec9",
                "parentReferenceId": "8b9ced7a-c636-4d13-9e03-eb404494ad65",
                "startedAt": 1752245345353,
                "endedAt": 1752245345898,
                "latency": 545,
                "name": "Span-18a406af",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 740\"}",
                    "output": "{\"resp\": \"ok 605\"}"
                },
                "parsedContent": {
                    "inputTokens": 1720,
                    "outputTokens": 1826,
                    "cost": 0.02719,
                    "model": "gpt-3.5-turbo"
                },
                "sessionId": null,
                "attributes": {},
                "tags": null
            },
            {
                "id": "bab221f9-cc16-4bfe-b054-c6751acabdbf",
                "logTraceId": "8e459bec-5ae7-4bfe-b759-3a064612975b",
                "referenceId": "66633486-8466-464d-b01e-2c278cfa62ed",
                "parentReferenceId": "ed21bbef-8222-4f04-ada2-f37dfc913ec9",
                "startedAt": 1752245346465,
                "endedAt": 1752245346521,
                "latency": 56,
                "name": "Span-bab221f9",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 757\"}",
                    "metadata": {
                        "step": 1
                    }
                },
                "parsedContent": {
                    "outputTokens": 480,
                    "cost": 0.0115
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            }
        ]
    },
    {
        "id": "852fbd9e-3f9e-4945-82ea-7f98f14608e2",
        "startedAt": 1752185088366,
        "endedAt": 1752185090950,
        "latency": 2584,
        "name": "Trace-852fbd9e",
        "status": "pending",
        "projectId": "bcadd4ec-1e04-4c7b-b4e0-e3fa864ec8da",
        "referenceId": null,
        "sessionId": null,
        "attributes": null,
        "tags": null,
        "spans": [
            {
                "id": "32258f24-375c-4767-a630-0873b74e3bc7",
                "logTraceId": "852fbd9e-3f9e-4945-82ea-7f98f14608e2",
                "referenceId": "e14efca4-a9e7-42d6-b7f5-777e395130b5",
                "parentReferenceId": null,
                "startedAt": 1752185090462,
                "endedAt": 1752185090567,
                "latency": 105,
                "name": "Span-32258f24",
                "status": "pending",
                "content": {
                    "output": "{\"resp\": \"ok 419\"}"
                },
                "parsedContent": {
                    "inputTokens": 177,
                    "outputTokens": 213,
                    "model": "gpt-4"
                },
                "sessionId": null,
                "attributes": {},
                "tags": [
                    "system",
                    "user-triggered"
                ]
            },
            {
                "id": "aadee105-88a9-4e28-b5d3-5e0b11cf0978",
                "logTraceId": "852fbd9e-3f9e-4945-82ea-7f98f14608e2",
                "referenceId": "faca5219-308e-4fb2-b5d3-52740d458106",
                "parentReferenceId": "e14efca4-a9e7-42d6-b7f5-777e395130b5",
                "startedAt": 1752185090809,
                "endedAt": 1752185090891,
                "latency": 82,
                "name": "Span-aadee105",
                "status": "failure",
                "content": {
                    "output": "{\"resp\": \"ok 497\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "6bb35b7d-8be2-496d-b7fb-3d45efacc3fa",
                "logTraceId": "852fbd9e-3f9e-4945-82ea-7f98f14608e2",
                "referenceId": "1275cf7c-e7b0-4493-8f82-3ccea8132552",
                "parentReferenceId": "e14efca4-a9e7-42d6-b7f5-777e395130b5",
                "startedAt": 1752185088448,
                "endedAt": 1752185090482,
                "latency": 2034,
                "name": "Span-6bb35b7d",
                "status": "pending",
                "content": {
                    "output": "{\"resp\": \"ok 324\"}",
                    "metadata": {
                        "step": 4
                    }
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": {
                    "spanAttr0": false,
                    "spanAttr1": 41
                },
                "tags": null
            },
            {
                "id": "d99fae41-f187-400c-a2cf-53c949b6e388",
                "logTraceId": "852fbd9e-3f9e-4945-82ea-7f98f14608e2",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752185089354,
                "endedAt": 1752185089734,
                "latency": 380,
                "name": "Span-d99fae41",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 650\"}",
                    "metadata": {
                        "step": 5
                    }
                },
                "parsedContent": {
                    "inputTokens": 1216,
                    "outputTokens": 476
                },
                "sessionId": null,
                "attributes": {
                    "spanAttr0": false,
                    "spanAttr1": false
                },
                "tags": null
            },
            {
                "id": "1d1ff7f4-450f-4981-ad09-8f9a255008a7",
                "logTraceId": "852fbd9e-3f9e-4945-82ea-7f98f14608e2",
                "referenceId": "423c9d87-47e1-4831-b031-c14f3e829ac9",
                "parentReferenceId": "e14efca4-a9e7-42d6-b7f5-777e395130b5",
                "startedAt": 1752185090408,
                "endedAt": 1752185090592,
                "latency": 184,
                "name": "Span-1d1ff7f4",
                "status": "pending",
                "content": {
                    "output": "{\"resp\": \"ok 114\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": {},
                "tags": null
            },
            {
                "id": "fc2ab8c7-0f25-4a9d-aaa8-9e81287fd9dc",
                "logTraceId": "852fbd9e-3f9e-4945-82ea-7f98f14608e2",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752185090525,
                "endedAt": 1752185090935,
                "latency": 410,
                "name": "Span-fc2ab8c7",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 739\"}",
                    "output": "{\"resp\": \"ok 339\"}"
                },
                "parsedContent": {
                    "inputTokens": 492,
                    "outputTokens": 1836,
                    "model": "gpt-3.5-turbo"
                },
                "sessionId": null,
                "attributes": {
                    "spanAttr0": true
                },
                "tags": null
            },
            {
                "id": "d3088798-5725-4c27-9d6b-cb1e96eca82f",
                "logTraceId": "852fbd9e-3f9e-4945-82ea-7f98f14608e2",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752185089912,
                "endedAt": 1752185090661,
                "latency": 749,
                "name": "Span-d3088798",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 616\"}",
                    "output": "{\"resp\": \"ok 124\"}",
                    "metadata": {
                        "step": 4
                    }
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "96a5aba4-799c-4468-96d5-30ae091d7e34",
                "logTraceId": "852fbd9e-3f9e-4945-82ea-7f98f14608e2",
                "referenceId": "5850b16a-787d-4e04-b17c-1f4a352fdafe",
                "parentReferenceId": "e14efca4-a9e7-42d6-b7f5-777e395130b5",
                "startedAt": 1752185090133,
                "endedAt": 1752185090535,
                "latency": 402,
                "name": "Span-96a5aba4",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 148\"}",
                    "output": "{\"resp\": \"ok 27\"}",
                    "metadata": {
                        "step": 4
                    }
                },
                "parsedContent": {
                    "inputTokens": 569
                },
                "sessionId": null,
                "attributes": {},
                "tags": null
            },
            {
                "id": "181b6cf4-3041-4d0e-9716-c73d916d59a6",
                "logTraceId": "852fbd9e-3f9e-4945-82ea-7f98f14608e2",
                "referenceId": "4fb280b6-d81a-4fc6-9fd2-01cb350a7e30",
                "parentReferenceId": "423c9d87-47e1-4831-b031-c14f3e829ac9",
                "startedAt": 1752185089546,
                "endedAt": 1752185090313,
                "latency": 767,
                "name": "Span-181b6cf4",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 404\"}",
                    "output": "{\"resp\": \"ok 773\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "d00d63d1-38c4-42d3-b310-4edbbe18037a",
                "logTraceId": "852fbd9e-3f9e-4945-82ea-7f98f14608e2",
                "referenceId": "492e5345-7ad2-4f34-b0d4-62d6b36fffca",
                "parentReferenceId": null,
                "startedAt": 1752185090020,
                "endedAt": 1752185090835,
                "latency": 815,
                "name": "Span-d00d63d1",
                "status": "failure",
                "content": {
                    "output": "{\"resp\": \"ok 558\"}"
                },
                "parsedContent": {
                    "inputTokens": 162,
                    "outputTokens": 1975
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            }
        ]
    },
    {
        "id": "21cbf71d-e2a2-438b-8f16-a4a36cf1b21f",
        "startedAt": 1751356763848,
        "endedAt": 1751356764432,
        "latency": 584,
        "name": "Trace-21cbf71d",
        "status": "pending",
        "projectId": "baf9967a-c3b4-4e32-b23d-23d575471beb",
        "referenceId": null,
        "sessionId": null,
        "attributes": null,
        "tags": [
            "batch",
            "api"
        ],
        "spans": [
            {
                "id": "aa45c1b8-fccb-46b6-9f76-a620dd51d36f",
                "logTraceId": "21cbf71d-e2a2-438b-8f16-a4a36cf1b21f",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751356764117,
                "endedAt": 1751356764229,
                "latency": 112,
                "name": "Span-aa45c1b8",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 234\"}",
                    "output": "{\"resp\": \"ok 202\"}"
                },
                "parsedContent": {
                    "inputTokens": 1735,
                    "outputTokens": 1397,
                    "model": "gpt-4"
                },
                "sessionId": null,
                "attributes": null,
                "tags": [
                    "system",
                    "batch"
                ]
            },
            {
                "id": "84ec4335-df1a-45df-8fdf-9e963223ea2c",
                "logTraceId": "21cbf71d-e2a2-438b-8f16-a4a36cf1b21f",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751356763962,
                "endedAt": 1751356764215,
                "latency": 253,
                "name": "Span-84ec4335",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 648\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": [
                    "batch"
                ]
            },
            {
                "id": "5c54b591-6cc7-4564-81d2-d217169c7554",
                "logTraceId": "21cbf71d-e2a2-438b-8f16-a4a36cf1b21f",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751356764017,
                "endedAt": 1751356764401,
                "latency": 384,
                "name": "Span-5c54b591",
                "status": "failure",
                "content": {},
                "parsedContent": {
                    "outputTokens": 1066,
                    "model": "llama-2"
                },
                "sessionId": null,
                "attributes": null,
                "tags": [
                    "user-triggered",
                    "retry"
                ]
            },
            {
                "id": "1b4bd025-e719-4c47-9980-e459041e7d20",
                "logTraceId": "21cbf71d-e2a2-438b-8f16-a4a36cf1b21f",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751356764098,
                "endedAt": 1751356764218,
                "latency": 120,
                "name": "Span-1b4bd025",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 516\"}",
                    "output": "{\"resp\": \"ok 246\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "04d9c778-3d84-4b2d-9564-6fc1795d7b71",
                "logTraceId": "21cbf71d-e2a2-438b-8f16-a4a36cf1b21f",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751356764356,
                "endedAt": 1751356764372,
                "latency": 16,
                "name": "Span-04d9c778",
                "status": "success",
                "content": {},
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "d072e5a1-8fca-4661-ad6d-dc9697afeefa",
                "logTraceId": "21cbf71d-e2a2-438b-8f16-a4a36cf1b21f",
                "referenceId": "40badfb3-5980-4ef9-8fd0-fe28b0f0fc2f",
                "parentReferenceId": null,
                "startedAt": 1751356764216,
                "endedAt": 1751356764225,
                "latency": 9,
                "name": "Span-d072e5a1",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 917\"}",
                    "output": "{\"resp\": \"ok 377\"}",
                    "metadata": {
                        "step": 4
                    }
                },
                "parsedContent": {
                    "inputTokens": 1236,
                    "outputTokens": 1161
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "a65850dd-cb8c-4aaa-84fa-814aef3299fa",
                "logTraceId": "21cbf71d-e2a2-438b-8f16-a4a36cf1b21f",
                "referenceId": "ee49c898-cd96-4565-b762-dba56222eb84",
                "parentReferenceId": "40badfb3-5980-4ef9-8fd0-fe28b0f0fc2f",
                "startedAt": 1751356764125,
                "endedAt": 1751356764311,
                "latency": 186,
                "name": "Span-a65850dd",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 433\"}",
                    "output": "{\"resp\": \"ok 50\"}"
                },
                "parsedContent": {
                    "inputTokens": 161,
                    "outputTokens": 548
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "7ed55be1-9919-4e30-8cf7-9d8da40f15da",
                "logTraceId": "21cbf71d-e2a2-438b-8f16-a4a36cf1b21f",
                "referenceId": "d87d26a8-e444-4527-aa4f-26b6b8b3aba1",
                "parentReferenceId": null,
                "startedAt": 1751356764174,
                "endedAt": 1751356764182,
                "latency": 8,
                "name": "Span-7ed55be1",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 236\"}",
                    "metadata": {
                        "step": 3
                    }
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "4e50f399-288e-4994-9059-28d241863650",
                "logTraceId": "21cbf71d-e2a2-438b-8f16-a4a36cf1b21f",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751356764398,
                "endedAt": 1751356764416,
                "latency": 18,
                "name": "Span-4e50f399",
                "status": "failure",
                "content": {
                    "output": "{\"resp\": \"ok 216\"}",
                    "metadata": {
                        "step": 3
                    }
                },
                "parsedContent": {
                    "inputTokens": 1316,
                    "outputTokens": 1783,
                    "cost": 0.02173,
                    "model": "gpt-4"
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "91ec7cf8-0a99-4093-8bc7-cde1a0942c21",
                "logTraceId": "21cbf71d-e2a2-438b-8f16-a4a36cf1b21f",
                "referenceId": "da53d655-e724-481d-a06d-dd320645be5f",
                "parentReferenceId": "ee49c898-cd96-4565-b762-dba56222eb84",
                "startedAt": 1751356764216,
                "endedAt": 1751356764315,
                "latency": 99,
                "name": "Span-91ec7cf8",
                "status": "success",
                "content": {},
                "parsedContent": {
                    "inputTokens": 970,
                    "outputTokens": 1280,
                    "model": "claude-2"
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "47af57d0-bc85-4ec6-a3a5-f5cbcca46a71",
                "logTraceId": "21cbf71d-e2a2-438b-8f16-a4a36cf1b21f",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751356764345,
                "endedAt": 1751356764351,
                "latency": 6,
                "name": "Span-47af57d0",
                "status": "failure",
                "content": {
                    "output": "{\"resp\": \"ok 610\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            }
        ]
    },
    {
        "id": "a7b9f17f-5890-4e0f-917f-4f0adde4dac6",
        "startedAt": 1751259697978,
        "endedAt": 1751259700610,
        "latency": 2632,
        "name": "Trace-a7b9f17f",
        "status": "success",
        "projectId": "baf9967a-c3b4-4e32-b23d-23d575471beb",
        "referenceId": null,
        "sessionId": "6c7fed54-61cb-449c-a7fe-3986b52a83f2",
        "attributes": null,
        "tags": null,
        "spans": [
            {
                "id": "94f1895b-dbdb-4526-bde5-ace336f7075d",
                "logTraceId": "a7b9f17f-5890-4e0f-917f-4f0adde4dac6",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751259698443,
                "endedAt": 1751259699538,
                "latency": 1095,
                "name": "Span-94f1895b",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 939\"}"
                },
                "parsedContent": {
                    "inputTokens": 1400,
                    "outputTokens": 385,
                    "cost": 0.01091
                },
                "sessionId": null,
                "attributes": null,
                "tags": [
                    "batch",
                    "api"
                ]
            },
            {
                "id": "f35d4b91-3b4f-47c6-8049-f4e42c4f2e00",
                "logTraceId": "a7b9f17f-5890-4e0f-917f-4f0adde4dac6",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751259699558,
                "endedAt": 1751259700159,
                "latency": 601,
                "name": "Span-f35d4b91",
                "status": "failure",
                "content": {
                    "output": "{\"resp\": \"ok 308\"}",
                    "metadata": {
                        "step": 1
                    }
                },
                "parsedContent": null,
                "sessionId": "6c7fed54-61cb-449c-a7fe-3986b52a83f2",
                "attributes": {
                    "spanAttr0": true,
                    "spanAttr1": true
                },
                "tags": null
            },
            {
                "id": "deb1732d-961a-44de-91cb-d4cfa364c9f9",
                "logTraceId": "a7b9f17f-5890-4e0f-917f-4f0adde4dac6",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751259699139,
                "endedAt": 1751259699410,
                "latency": 271,
                "name": "Span-deb1732d",
                "status": "failure",
                "content": {
                    "output": "{\"resp\": \"ok 989\"}",
                    "metadata": {
                        "step": 1
                    }
                },
                "parsedContent": {
                    "outputTokens": 1423,
                    "cost": 0.03029
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "2a92df43-0c47-4f9b-a047-94d529bb7749",
                "logTraceId": "a7b9f17f-5890-4e0f-917f-4f0adde4dac6",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751259698807,
                "endedAt": 1751259700582,
                "latency": 1775,
                "name": "Span-2a92df43",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 570\"}",
                    "output": "{\"resp\": \"ok 423\"}"
                },
                "parsedContent": null,
                "sessionId": "6c7fed54-61cb-449c-a7fe-3986b52a83f2",
                "attributes": null,
                "tags": null
            },
            {
                "id": "15e06870-03bf-420f-94cd-22ba8d3148cd",
                "logTraceId": "a7b9f17f-5890-4e0f-917f-4f0adde4dac6",
                "referenceId": "244b5238-2925-4a15-98ee-94801158c8a0",
                "parentReferenceId": null,
                "startedAt": 1751259698251,
                "endedAt": 1751259698847,
                "latency": 596,
                "name": "Span-15e06870",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 854\"}",
                    "metadata": {
                        "step": 3
                    }
                },
                "parsedContent": {
                    "inputTokens": 297,
                    "outputTokens": 406,
                    "cost": 0.01322
                },
                "sessionId": "6c7fed54-61cb-449c-a7fe-3986b52a83f2",
                "attributes": null,
                "tags": null
            },
            {
                "id": "3a219d55-0a43-4998-9d84-c433e883cc58",
                "logTraceId": "a7b9f17f-5890-4e0f-917f-4f0adde4dac6",
                "referenceId": "6596ecee-0ec6-49af-b886-f2fdbce0482a",
                "parentReferenceId": "244b5238-2925-4a15-98ee-94801158c8a0",
                "startedAt": 1751259698750,
                "endedAt": 1751259699109,
                "latency": 359,
                "name": "Span-3a219d55",
                "status": "failure",
                "content": {
                    "output": "{\"resp\": \"ok 278\"}",
                    "metadata": {
                        "step": 2
                    }
                },
                "parsedContent": {
                    "inputTokens": 1403,
                    "outputTokens": 1667
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "830b1fb2-4f33-4be8-b56c-ec3964191366",
                "logTraceId": "a7b9f17f-5890-4e0f-917f-4f0adde4dac6",
                "referenceId": "7f8b3c54-a705-4c39-9c62-7206db87175d",
                "parentReferenceId": "6596ecee-0ec6-49af-b886-f2fdbce0482a",
                "startedAt": 1751259700368,
                "endedAt": 1751259700443,
                "latency": 75,
                "name": "Span-830b1fb2",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 552\"}",
                    "output": "{\"resp\": \"ok 489\"}",
                    "metadata": {
                        "step": 3
                    }
                },
                "parsedContent": {
                    "inputTokens": 431,
                    "outputTokens": 227,
                    "cost": 0.03219
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "fce594c5-5b05-47e8-9573-1d97bd83e882",
                "logTraceId": "a7b9f17f-5890-4e0f-917f-4f0adde4dac6",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751259699912,
                "endedAt": 1751259699967,
                "latency": 55,
                "name": "Span-fce594c5",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 546\"}",
                    "output": "{\"resp\": \"ok 619\"}"
                },
                "parsedContent": {
                    "outputTokens": 663,
                    "cost": 0.03535
                },
                "sessionId": "6c7fed54-61cb-449c-a7fe-3986b52a83f2",
                "attributes": null,
                "tags": null
            },
            {
                "id": "b7d89074-0144-4483-87ca-369a1493267b",
                "logTraceId": "a7b9f17f-5890-4e0f-917f-4f0adde4dac6",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751259700497,
                "endedAt": 1751259700540,
                "latency": 43,
                "name": "Span-b7d89074",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 632\"}"
                },
                "parsedContent": {
                    "inputTokens": 716,
                    "cost": 0.005
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "b4e8960a-7ea2-48ef-aae6-3eb09fa65171",
                "logTraceId": "a7b9f17f-5890-4e0f-917f-4f0adde4dac6",
                "referenceId": "a53f7192-40b6-4b7c-9abf-bc6ee97f8f01",
                "parentReferenceId": "6596ecee-0ec6-49af-b886-f2fdbce0482a",
                "startedAt": 1751259698436,
                "endedAt": 1751259698917,
                "latency": 481,
                "name": "Span-b4e8960a",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 195\"}",
                    "output": "{\"resp\": \"ok 696\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "6fd596f6-549d-4d41-b361-f7a12eb38bac",
                "logTraceId": "a7b9f17f-5890-4e0f-917f-4f0adde4dac6",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751259700593,
                "endedAt": 1751259700604,
                "latency": 11,
                "name": "Span-6fd596f6",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 812\"}",
                    "output": "{\"resp\": \"ok 376\"}",
                    "metadata": {
                        "step": 3
                    }
                },
                "parsedContent": null,
                "sessionId": "6c7fed54-61cb-449c-a7fe-3986b52a83f2",
                "attributes": null,
                "tags": null
            },
            {
                "id": "5fdb982c-8086-4ab6-9818-410e25e70d7a",
                "logTraceId": "a7b9f17f-5890-4e0f-917f-4f0adde4dac6",
                "referenceId": "1d8e66cd-5bf6-4d66-ba4d-d085eaa46c70",
                "parentReferenceId": "6596ecee-0ec6-49af-b886-f2fdbce0482a",
                "startedAt": 1751259699180,
                "endedAt": 1751259700071,
                "latency": 891,
                "name": "Span-5fdb982c",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 364\"}"
                },
                "parsedContent": null,
                "sessionId": "6c7fed54-61cb-449c-a7fe-3986b52a83f2",
                "attributes": null,
                "tags": null
            }
        ]
    },
    {
        "id": "99193070-3d07-4a88-8c61-9ba5a40d0e60",
        "startedAt": 1751097727708,
        "endedAt": 1751097729866,
        "latency": 2158,
        "name": "Trace-99193070",
        "status": "success",
        "projectId": "baf9967a-c3b4-4e32-b23d-23d575471beb",
        "referenceId": null,
        "sessionId": null,
        "attributes": null,
        "tags": null,
        "spans": [
            {
                "id": "305c12c4-be38-41f4-a879-a17ff3056518",
                "logTraceId": "99193070-3d07-4a88-8c61-9ba5a40d0e60",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751097728662,
                "endedAt": 1751097728909,
                "latency": 247,
                "name": "Span-305c12c4",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 45\"}",
                    "output": "{\"resp\": \"ok 848\"}",
                    "metadata": {
                        "step": 4
                    }
                },
                "parsedContent": {
                    "inputTokens": 1281,
                    "outputTokens": 572
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "46b4b76c-09d5-4f7e-b463-24f3d2b89cd2",
                "logTraceId": "99193070-3d07-4a88-8c61-9ba5a40d0e60",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751097729796,
                "endedAt": 1751097729814,
                "latency": 18,
                "name": "Span-46b4b76c",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 364\"}",
                    "output": "{\"resp\": \"ok 811\"}"
                },
                "parsedContent": {
                    "inputTokens": 1302,
                    "outputTokens": 576,
                    "cost": 0.04994
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "8d416b63-188e-4670-b39b-8e9f11898e5d",
                "logTraceId": "99193070-3d07-4a88-8c61-9ba5a40d0e60",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751097729747,
                "endedAt": 1751097729757,
                "latency": 10,
                "name": "Span-8d416b63",
                "status": "pending",
                "content": {},
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "302603f8-23d4-4c49-97f9-10028994f15b",
                "logTraceId": "99193070-3d07-4a88-8c61-9ba5a40d0e60",
                "referenceId": "543b4d10-0fac-4b7a-8063-7454d2ea01c6",
                "parentReferenceId": null,
                "startedAt": 1751097729561,
                "endedAt": 1751097729631,
                "latency": 70,
                "name": "Span-302603f8",
                "status": "success",
                "content": {
                    "output": "{\"resp\": \"ok 824\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "684c13eb-df59-4750-af16-63160cd29034",
                "logTraceId": "99193070-3d07-4a88-8c61-9ba5a40d0e60",
                "referenceId": "4f5b1123-4e58-4617-a314-af4775916844",
                "parentReferenceId": "543b4d10-0fac-4b7a-8063-7454d2ea01c6",
                "startedAt": 1751097728688,
                "endedAt": 1751097729229,
                "latency": 541,
                "name": "Span-684c13eb",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 183\"}",
                    "metadata": {
                        "step": 4
                    }
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": {
                    "spanAttr0": 34,
                    "spanAttr1": 9
                },
                "tags": null
            },
            {
                "id": "aa18dca6-086b-4994-99f0-df1f1c1b3e1c",
                "logTraceId": "99193070-3d07-4a88-8c61-9ba5a40d0e60",
                "referenceId": "81daa172-f87f-425d-a9f2-80d105b27ca1",
                "parentReferenceId": "4f5b1123-4e58-4617-a314-af4775916844",
                "startedAt": 1751097729295,
                "endedAt": 1751097729332,
                "latency": 37,
                "name": "Span-aa18dca6",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 192\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": {
                    "spanAttr0": true
                },
                "tags": null
            },
            {
                "id": "c592611b-620b-4929-a678-2902296353ca",
                "logTraceId": "99193070-3d07-4a88-8c61-9ba5a40d0e60",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751097728709,
                "endedAt": 1751097728947,
                "latency": 238,
                "name": "Span-c592611b",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 92\"}",
                    "metadata": {
                        "step": 4
                    }
                },
                "parsedContent": {
                    "outputTokens": 1976,
                    "cost": 0.00729
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "ab931a35-e00c-4acd-87bb-ae85e5847297",
                "logTraceId": "99193070-3d07-4a88-8c61-9ba5a40d0e60",
                "referenceId": "c138d731-a57d-4078-b25d-ca4c55026f47",
                "parentReferenceId": "4f5b1123-4e58-4617-a314-af4775916844",
                "startedAt": 1751097728196,
                "endedAt": 1751097729612,
                "latency": 1416,
                "name": "Span-ab931a35",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 108\"}",
                    "output": "{\"resp\": \"ok 646\"}"
                },
                "parsedContent": {
                    "inputTokens": 765,
                    "outputTokens": 436,
                    "model": "gpt-3.5-turbo"
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "7426e80c-60af-44a5-9113-ce99ccd2252f",
                "logTraceId": "99193070-3d07-4a88-8c61-9ba5a40d0e60",
                "referenceId": "fa943f46-ef34-488c-9b1b-87a3ab9c622d",
                "parentReferenceId": "c138d731-a57d-4078-b25d-ca4c55026f47",
                "startedAt": 1751097729300,
                "endedAt": 1751097729821,
                "latency": 521,
                "name": "Span-7426e80c",
                "status": "pending",
                "content": {
                    "output": "{\"resp\": \"ok 117\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": {
                    "spanAttr0": false,
                    "spanAttr1": true
                },
                "tags": null
            },
            {
                "id": "f72e3ff9-346d-4c8b-b708-8232f8e95c21",
                "logTraceId": "99193070-3d07-4a88-8c61-9ba5a40d0e60",
                "referenceId": "61a5cf68-48a3-4d04-bafe-0c489a557627",
                "parentReferenceId": "c138d731-a57d-4078-b25d-ca4c55026f47",
                "startedAt": 1751097729838,
                "endedAt": 1751097729839,
                "latency": 1,
                "name": "Span-f72e3ff9",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 777\"}",
                    "output": "{\"resp\": \"ok 356\"}",
                    "metadata": {
                        "step": 5
                    }
                },
                "parsedContent": {
                    "outputTokens": 141,
                    "cost": 0.02855
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "149baead-2741-4caa-9772-f8cd6d2f9a79",
                "logTraceId": "99193070-3d07-4a88-8c61-9ba5a40d0e60",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751097728887,
                "endedAt": 1751097729615,
                "latency": 728,
                "name": "Span-149baead",
                "status": "failure",
                "content": {
                    "output": "{\"resp\": \"ok 27\"}"
                },
                "parsedContent": {
                    "inputTokens": 147,
                    "outputTokens": 1454,
                    "model": "llama-2"
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            }
        ]
    },
    {
        "id": "5a0c6371-5354-48bc-b19c-716ea287a939",
        "startedAt": 1751597037504,
        "endedAt": 1751597042235,
        "latency": 4731,
        "name": "Trace-5a0c6371",
        "status": "unknown",
        "projectId": "70273eed-b756-4ef5-b623-f6f625eb9ec9",
        "referenceId": null,
        "sessionId": "ab3cf4d5-5632-485b-bab9-12663d4c2bcb",
        "attributes": {
            "attr0": 30
        },
        "tags": [
            "system",
            "retry"
        ],
        "spans": [
            {
                "id": "35b8f200-094e-4103-a7cb-e392b65d8e29",
                "logTraceId": "5a0c6371-5354-48bc-b19c-716ea287a939",
                "referenceId": "c6300988-0aef-48da-a2e7-d03159dc71c4",
                "parentReferenceId": null,
                "startedAt": 1751597041785,
                "endedAt": 1751597041981,
                "latency": 196,
                "name": "Span-35b8f200",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 474\"}",
                    "output": "{\"resp\": \"ok 366\"}"
                },
                "parsedContent": {
                    "inputTokens": 1330,
                    "outputTokens": 455,
                    "cost": 0.00755
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "9c46746b-fb66-4520-9bad-77ffb1b13767",
                "logTraceId": "5a0c6371-5354-48bc-b19c-716ea287a939",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1751597038882,
                "endedAt": 1751597041026,
                "latency": 2144,
                "name": "Span-9c46746b",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 282\"}",
                    "output": "{\"resp\": \"ok 221\"}"
                },
                "parsedContent": null,
                "sessionId": "ab3cf4d5-5632-485b-bab9-12663d4c2bcb",
                "attributes": null,
                "tags": null
            }
        ]
    },
    {
        "id": "6acb250c-d4aa-418e-b978-e4ace02d0e8d",
        "startedAt": 1750791027270,
        "endedAt": 1750791030308,
        "latency": 3038,
        "name": "Trace-6acb250c",
        "status": "pending",
        "projectId": "bcadd4ec-1e04-4c7b-b4e0-e3fa864ec8da",
        "referenceId": null,
        "sessionId": "ab3cf4d5-5632-485b-bab9-12663d4c2bcb",
        "attributes": null,
        "tags": null,
        "spans": [
            {
                "id": "ec3391ab-f306-4478-a49c-f200ccfd87ce",
                "logTraceId": "6acb250c-d4aa-418e-b978-e4ace02d0e8d",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1750791027322,
                "endedAt": 1750791028839,
                "latency": 1517,
                "name": "Span-ec3391ab",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 586\"}",
                    "output": "{\"resp\": \"ok 612\"}"
                },
                "parsedContent": {
                    "inputTokens": 1531,
                    "outputTokens": 116,
                    "cost": 0.0278,
                    "model": "gpt-4"
                },
                "sessionId": null,
                "attributes": {
                    "spanAttr0": 33,
                    "spanAttr1": true
                },
                "tags": null
            },
            {
                "id": "74b51ee1-2dfe-4017-ad7f-536562e36287",
                "logTraceId": "6acb250c-d4aa-418e-b978-e4ace02d0e8d",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1750791029488,
                "endedAt": 1750791029764,
                "latency": 276,
                "name": "Span-74b51ee1",
                "status": "success",
                "content": {
                    "output": "{\"resp\": \"ok 469\"}",
                    "metadata": {
                        "step": 4
                    }
                },
                "parsedContent": {
                    "cost": 0.03761
                },
                "sessionId": null,
                "attributes": {
                    "spanAttr0": 38
                },
                "tags": [
                    "retry"
                ]
            },
            {
                "id": "090dc245-016a-4a22-ac53-f47e5b3fc251",
                "logTraceId": "6acb250c-d4aa-418e-b978-e4ace02d0e8d",
                "referenceId": "47d3e286-822f-451f-abb0-ac99309fc6ca",
                "parentReferenceId": null,
                "startedAt": 1750791029708,
                "endedAt": 1750791030090,
                "latency": 382,
                "name": "Span-090dc245",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 615\"}",
                    "output": "{\"resp\": \"ok 550\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "8985380b-46c5-4c87-b07a-0005dc633c90",
                "logTraceId": "6acb250c-d4aa-418e-b978-e4ace02d0e8d",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1750791027288,
                "endedAt": 1750791028487,
                "latency": 1199,
                "name": "Span-8985380b",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 23\"}",
                    "output": "{\"resp\": \"ok 430\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "f3f9f271-1acc-4b55-a7d8-fb5acce79ff1",
                "logTraceId": "6acb250c-d4aa-418e-b978-e4ace02d0e8d",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1750791027559,
                "endedAt": 1750791028878,
                "latency": 1319,
                "name": "Span-f3f9f271",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 177\"}",
                    "output": "{\"resp\": \"ok 721\"}"
                },
                "parsedContent": {
                    "inputTokens": 231,
                    "outputTokens": 118
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "56b98a60-dff4-40e2-bcee-8b77b8fb4d37",
                "logTraceId": "6acb250c-d4aa-418e-b978-e4ace02d0e8d",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1750791028302,
                "endedAt": 1750791028653,
                "latency": 351,
                "name": "Span-56b98a60",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 653\"}",
                    "output": "{\"resp\": \"ok 932\"}",
                    "metadata": {
                        "step": 5
                    }
                },
                "parsedContent": {
                    "outputTokens": 1681
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "d03e974a-f87b-44f0-b0e2-c8b938225fab",
                "logTraceId": "6acb250c-d4aa-418e-b978-e4ace02d0e8d",
                "referenceId": "565b0431-73c2-4951-944b-d0489e0ae7c2",
                "parentReferenceId": "47d3e286-822f-451f-abb0-ac99309fc6ca",
                "startedAt": 1750791027908,
                "endedAt": 1750791030201,
                "latency": 2293,
                "name": "Span-d03e974a",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 426\"}",
                    "output": "{\"resp\": \"ok 392\"}"
                },
                "parsedContent": {
                    "inputTokens": 801,
                    "outputTokens": 292
                },
                "sessionId": null,
                "attributes": {
                    "spanAttr0": true,
                    "spanAttr1": 39
                },
                "tags": null
            },
            {
                "id": "d932c75c-5ccc-4c8e-96e1-0e00bfc1f196",
                "logTraceId": "6acb250c-d4aa-418e-b978-e4ace02d0e8d",
                "referenceId": "fa5d77bb-27ae-4d2e-b445-f9c274ef513d",
                "parentReferenceId": "565b0431-73c2-4951-944b-d0489e0ae7c2",
                "startedAt": 1750791029488,
                "endedAt": 1750791029892,
                "latency": 404,
                "name": "Span-d932c75c",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 5\"}",
                    "metadata": {
                        "step": 2
                    }
                },
                "parsedContent": {
                    "outputTokens": 566
                },
                "sessionId": "ab3cf4d5-5632-485b-bab9-12663d4c2bcb",
                "attributes": null,
                "tags": null
            },
            {
                "id": "b7c57144-c458-45d0-97cd-530c93f873eb",
                "logTraceId": "6acb250c-d4aa-418e-b978-e4ace02d0e8d",
                "referenceId": "9841d32a-4e0e-44fa-95ac-a92091d32a30",
                "parentReferenceId": null,
                "startedAt": 1750791030033,
                "endedAt": 1750791030246,
                "latency": 213,
                "name": "Span-b7c57144",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 101\"}",
                    "output": "{\"resp\": \"ok 826\"}"
                },
                "parsedContent": {
                    "inputTokens": 1037,
                    "outputTokens": 36,
                    "cost": 0.02066
                },
                "sessionId": null,
                "attributes": null,
                "tags": [
                    "user-triggered"
                ]
            },
            {
                "id": "5569bed9-9c5a-4e16-bdac-9782eaa50b9a",
                "logTraceId": "6acb250c-d4aa-418e-b978-e4ace02d0e8d",
                "referenceId": "6794614b-c1f5-4c50-88fd-7655ab65eb19",
                "parentReferenceId": "565b0431-73c2-4951-944b-d0489e0ae7c2",
                "startedAt": 1750791030025,
                "endedAt": 1750791030027,
                "latency": 2,
                "name": "Span-5569bed9",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 15\"}",
                    "metadata": {
                        "step": 5
                    }
                },
                "parsedContent": {
                    "inputTokens": 1574,
                    "outputTokens": 1262
                },
                "sessionId": null,
                "attributes": {},
                "tags": null
            },
            {
                "id": "6d734a8f-8b27-4ac9-9b19-fa058bbf065a",
                "logTraceId": "6acb250c-d4aa-418e-b978-e4ace02d0e8d",
                "referenceId": "1659c24e-93fa-4be6-b421-719d4ef8d06a",
                "parentReferenceId": "fa5d77bb-27ae-4d2e-b445-f9c274ef513d",
                "startedAt": 1750791029076,
                "endedAt": 1750791030157,
                "latency": 1081,
                "name": "Span-6d734a8f",
                "status": "pending",
                "content": {
                    "output": "{\"resp\": \"ok 505\"}"
                },
                "parsedContent": {
                    "inputTokens": 312,
                    "outputTokens": 544
                },
                "sessionId": null,
                "attributes": {},
                "tags": null
            },
            {
                "id": "cbf8ea88-016d-4cc1-bcdd-3423bfbd6d07",
                "logTraceId": "6acb250c-d4aa-418e-b978-e4ace02d0e8d",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1750791029736,
                "endedAt": 1750791030205,
                "latency": 469,
                "name": "Span-cbf8ea88",
                "status": "success",
                "content": {},
                "parsedContent": null,
                "sessionId": null,
                "attributes": {},
                "tags": []
            }
        ]
    },
    {
        "id": "7b505a65-aebd-4ff8-8192-4121490e6c00",
        "startedAt": 1752051423097,
        "endedAt": 1752051424045,
        "latency": 948,
        "name": "Trace-7b505a65",
        "status": "pending",
        "projectId": "973f56e4-1609-4609-ada3-f01bca344ba4",
        "referenceId": null,
        "sessionId": "bbf41e62-ca1d-47ed-8946-461816ad0a57",
        "attributes": null,
        "tags": [
            "user-triggered"
        ],
        "spans": [
            {
                "id": "ad35c712-d608-4df9-9367-5e0c82abfe11",
                "logTraceId": "7b505a65-aebd-4ff8-8192-4121490e6c00",
                "referenceId": "f8d7009e-bf4a-4bd3-934d-9bd25a250958",
                "parentReferenceId": null,
                "startedAt": 1752051423989,
                "endedAt": 1752051424023,
                "latency": 34,
                "name": "Span-ad35c712",
                "status": "pending",
                "content": {
                    "output": "{\"resp\": \"ok 632\"}"
                },
                "parsedContent": {
                    "inputTokens": 1658,
                    "outputTokens": 1677,
                    "cost": 0.00566,
                    "model": "claude-2"
                },
                "sessionId": "bbf41e62-ca1d-47ed-8946-461816ad0a57",
                "attributes": {},
                "tags": null
            },
            {
                "id": "42016048-7d68-491b-9e34-8541addb45ca",
                "logTraceId": "7b505a65-aebd-4ff8-8192-4121490e6c00",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752051423730,
                "endedAt": 1752051423779,
                "latency": 49,
                "name": "Span-42016048",
                "status": "failure",
                "content": {
                    "input": "{\"prompt\": \"text 114\"}",
                    "output": "{\"resp\": \"ok 289\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "6c60a81b-ca03-46c7-a5d2-81131d39bf95",
                "logTraceId": "7b505a65-aebd-4ff8-8192-4121490e6c00",
                "referenceId": "eec98e20-b495-4903-8362-e7c4ec230256",
                "parentReferenceId": "f8d7009e-bf4a-4bd3-934d-9bd25a250958",
                "startedAt": 1752051423949,
                "endedAt": 1752051423993,
                "latency": 44,
                "name": "Span-6c60a81b",
                "status": "pending",
                "content": {
                    "output": "{\"resp\": \"ok 415\"}",
                    "metadata": {
                        "step": 1
                    }
                },
                "parsedContent": {
                    "inputTokens": 489,
                    "cost": 0.00712
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "9118f04e-346d-4cee-81ef-8c8ae6d4566d",
                "logTraceId": "7b505a65-aebd-4ff8-8192-4121490e6c00",
                "referenceId": "4f7d2840-094f-497b-93bc-84f5e681d5fa",
                "parentReferenceId": "eec98e20-b495-4903-8362-e7c4ec230256",
                "startedAt": 1752051423527,
                "endedAt": 1752051423807,
                "latency": 280,
                "name": "Span-9118f04e",
                "status": "failure",
                "content": {
                    "output": "{\"resp\": \"ok 379\"}",
                    "metadata": {
                        "step": 1
                    }
                },
                "parsedContent": null,
                "sessionId": "bbf41e62-ca1d-47ed-8946-461816ad0a57",
                "attributes": null,
                "tags": null
            },
            {
                "id": "79704ea0-c107-4008-a85f-756252d76736",
                "logTraceId": "7b505a65-aebd-4ff8-8192-4121490e6c00",
                "referenceId": "e6f200f3-0746-4a30-b56e-e2e36b8bc0d2",
                "parentReferenceId": "f8d7009e-bf4a-4bd3-934d-9bd25a250958",
                "startedAt": 1752051423299,
                "endedAt": 1752051423840,
                "latency": 541,
                "name": "Span-79704ea0",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 230\"}"
                },
                "parsedContent": {
                    "outputTokens": 673,
                    "cost": 0.0284
                },
                "sessionId": "bbf41e62-ca1d-47ed-8946-461816ad0a57",
                "attributes": {},
                "tags": null
            },
            {
                "id": "138423e4-28c7-4af3-93b5-4aed43797e7d",
                "logTraceId": "7b505a65-aebd-4ff8-8192-4121490e6c00",
                "referenceId": null,
                "parentReferenceId": null,
                "startedAt": 1752051423323,
                "endedAt": 1752051423390,
                "latency": 67,
                "name": "Span-138423e4",
                "status": "success",
                "content": {
                    "input": "{\"prompt\": \"text 245\"}",
                    "output": "{\"resp\": \"ok 381\"}"
                },
                "parsedContent": {
                    "inputTokens": 522,
                    "outputTokens": 844,
                    "cost": 0.03082,
                    "model": "claude-2"
                },
                "sessionId": null,
                "attributes": null,
                "tags": null
            },
            {
                "id": "40af906e-2b14-43b1-955a-24e70fbf4b74",
                "logTraceId": "7b505a65-aebd-4ff8-8192-4121490e6c00",
                "referenceId": "c91d3239-7829-4fc3-893e-39262e77a0ed",
                "parentReferenceId": null,
                "startedAt": 1752051423968,
                "endedAt": 1752051424018,
                "latency": 50,
                "name": "Span-40af906e",
                "status": "pending",
                "content": {
                    "input": "{\"prompt\": \"text 553\"}",
                    "output": "{\"resp\": \"ok 252\"}"
                },
                "parsedContent": null,
                "sessionId": null,
                "attributes": null,
                "tags": null
            }
        ]
    }
]