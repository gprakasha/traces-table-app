export const ObjectRender = ({ data }: { data: object }) => {
    return (
        <div>
            {Object.entries(data).map(([key, value]) => (
                <div key={key}>
                    <strong>{key}:</strong> {String(value)}
                </div>
            ))}
        </div>
    );
};