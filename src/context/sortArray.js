export const sortArray = (data, sortKey, sortOrder) => {
    return data.sort((a, b) => {
        if (typeof a[sortKey] === "string") {
            const value1 = a[sortKey]?.toUpperCase() || "";
            const value2 = b[sortKey]?.toUpperCase() || "";
            return sortOrder === "asc"
                ? value1 < value2
                    ? -1
                    : value1 > value2
                        ? 1
                        : 0
                : value1 < value2
                    ? 1
                    : value1 > value2
                        ? -1
                        : 0;
        }
        return sortOrder === "asc"
            ? a[sortKey] - b[sortKey]
            : b[sortKey] - a[sortKey];
    });
};
