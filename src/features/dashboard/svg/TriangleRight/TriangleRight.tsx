import './TriangleRight.scoped.scss';

export type TriangleRightProps = {
    className?: string;
};
TriangleRight.defaultProps = {
    className: ''
};

export function TriangleRight({ className }: TriangleRightProps) {
    return (
        <svg
            className={`TriangleRight ${className}`}
            width="8"
            height="14"
            viewBox="0 0 8 14"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.43305 6.34535C7.75848 6.72112 7.75848 7.27888 7.43305 7.65465L2.25593 13.6327C1.64979 14.3326 0.499999 13.9039 0.499999 12.978L0.499999 1.02197C0.499999 0.096087 1.64979 -0.332586 2.25593 0.367317L7.43305 6.34535Z"
            />
        </svg>
    );
}
