type Options = {
    decimals?: number;
    fallback?: string;
};
declare function formatNumber(number: any, { decimals, fallback }?: Options): string;
export default formatNumber;
