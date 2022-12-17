/* eslint-disable no-bitwise */
export const hash2Num = (str: string) => {
    const arr = str.split('');
    return arr.reduce(
        (hashCode, currentVal) =>
            currentVal.charCodeAt(0) +
            (hashCode << 6) +
            (hashCode << 16) -
            hashCode,
        0
    );
};
