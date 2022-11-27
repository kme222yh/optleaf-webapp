import './Leaf.scoped.scss';

export type LeafProps = {
    className?: string;
    fill?: boolean;
};
Leaf.defaultProps = {
    className: '',
    fill: false
};

export function Leaf({ className, fill }: LeafProps) {
    return (
        <svg
            className={`Leaf ${className}`}
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill={fill ? '' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.26391 12.5515C-0.188494 8.26908 2.10571 3.62007 6.38814 2.16767L10.8974 0.63834C12.2218 5.35204 9.63704 10.3305 4.94547 11.9217L2.00705 12.9182C1.70057 13.0222 1.36785 12.858 1.26391 12.5515Z"
            />
        </svg>
    );
}
