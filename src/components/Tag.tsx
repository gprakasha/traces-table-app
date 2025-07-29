import React from 'react';

interface TagProps {
    text: string;
    className?: string;
}

const Tag: React.FC<TagProps> = ({ text, className = '' }) => {
    return (
        <span className={`bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs ${className}`}>
            {text}
        </span>
    );
};

export { Tag };
