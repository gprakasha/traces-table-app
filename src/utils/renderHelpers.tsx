import ObjectRender from "../components/ObjectRender";
import { formatSubString, safeJsonParse } from "./util";

export const renderCell = (value: any, type: 'json' | 'text' | 'date', SubStringLength: number = 50) => {
    if (!value) return 'N/A';
    switch (type) {
        case 'json':
            const parsed = safeJsonParse(value);
            return parsed ? <ObjectRender data={parsed} /> : <span>{formatSubString(value, SubStringLength)}</span >;
        case 'date':
            return new Date(value).toLocaleString();
        default:
            return formatSubString(String(value), SubStringLength);
    }
};