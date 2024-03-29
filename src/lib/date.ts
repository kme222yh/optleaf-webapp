export const formatDate = (date: string): string => {
    const d = new Date(date);
    return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
};

export const formatDateTime = (date: string): string => {
    const d = new Date(date);
    return `${formatDate(date)} ${d.getHours()}:${d.getMinutes()}`;
};
