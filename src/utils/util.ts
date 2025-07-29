export const SubStringLength = 50;
export const formatSubString = (value: string, length: number = SubStringLength): string => {
    return value.length > length ? value.substring(0, length) + '...' : value;
};

export const safeJsonParse = (str: string) => {
    try {
        const parsed = JSON.parse(str);
        return typeof parsed === 'object' && parsed !== null ? parsed : null;
    } catch {
        return null;
    }
}

export const formatReadableDate = (
    dateInput: string | number | Date,
    locale: string = 'en-US',
    options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    }
): string => {
    if (!dateInput) return 'N/A';
    const date = new Date(dateInput);
    if (isNaN(date.getTime())) return 'Invalid date';
    return date.toLocaleString(locale, options);
};