import { RoundedButton } from '../../atoms/RoundedButton';
import './AddUserModal.scoped.scss';

export type AddUserModalProps = {
    className?: string;
};
AddUserModal.defaultProps = {
    className: ''
};

export function AddUserModal({ className }: AddUserModalProps) {
    return (
        <div className={`AddUserModal ${className}`}>
            <div className="AddUserModal-body">
                <p className="AddUserModal-title">Add Menber</p>
            </div>
            <div className="AddUserModal-invitation">a</div>
            <div className="AddUserModal-choose">
                <div className="AddUserModal-choose-button">
                    <RoundedButton text="confirm" onClick={() => {}} />
                </div>
            </div>
        </div>
    );
}
