import './TriangleDown.scoped.scss';

export type TriangleDownProps = {
    className?: string;
};
TriangleDown.defaultProps = {
    className: ''
};

export function TriangleDown({ className }: TriangleDownProps) {
    return (
        <svg
            className={`TriangleDown ${className}`}
            width="14"
            height="8"
            viewBox="0 0 14 8"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.65465 7.43306C7.27888 7.75848 6.72112 7.75848 6.34535 7.43305L0.367314 2.25593C-0.332589 1.64979 0.0960843 0.5 1.02197 0.5L12.978 0.499999C13.9039 0.499999 14.3326 1.64979 13.6327 2.25593L7.65465 7.43306Z"
            />
        </svg>
    );
}
