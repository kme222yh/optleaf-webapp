import './TeamMenu.scoped.scss';

export type TeamMenuProps = {
    className?: string;
    name: string;
    description: string;
    removeFn: () => {};
};
TeamMenu.defaultProps = {
    className: ''
};

export function TeamMenu({
    className,
    removeFn,
    name,
    description
}: TeamMenuProps) {
    return (
        <div className={`TeamMenu ${className}`}>
            <div className="TeamMenu-body">
                <div className="TeamMenu-info">
                    <p className="TeamMenu-name">{name}</p>
                    <p className="TeamMenu-description">{description}</p>
                </div>
                <div className="TeamMenu-control">
                    <div className="TeamMenu-remove">
                        <p className="TeamMenu-remove-title">
                            Remove from this project.
                        </p>
                        <p className="TeamMenu-remove-text">
                            This member will be removed. <br />
                            We cannot remove admin.
                        </p>
                        <button
                            className="TeamMenu-remove-button"
                            type="button"
                            onClick={removeFn}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
