import { ObjectRender } from './ObjectRender';
import { formatSubString, safeJsonParse } from '../utils/util';

const RenderCell = ({
    value,
    type,
}: {
    value?: string | number;
    type: 'json' | 'date' | 'string';
}) => {
    if (!value) return 'N/A';
    
    switch (type) {
        case 'json':
            const parsed = safeJsonParse(value as string);
            if (parsed) return <ObjectRender data={parsed} />;
            return <span>{formatSubString(value as string, 50)}</span>;
        case 'date':
            return new Date(value).toLocaleString();
        default:
            return formatSubString(String(value), 50);
    }
};

export { RenderCell };