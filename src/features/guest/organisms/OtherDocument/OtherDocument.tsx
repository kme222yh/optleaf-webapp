import './OtherDocument.scss';

import { Text1 } from '../../atoms/Text1';
import { Logo } from '../../atoms/Logo';

export type OtherDocumentProps = {
    className?: string;
    children: React.ReactNode;
};
OtherDocument.defaultProps = {
    className: ''
};

export function OtherDocument({ className, children }: OtherDocumentProps) {
    return (
        <div className={`OtherDocument ${className}`}>
            <Logo />
            <Text1>{children}</Text1>
        </div>
    );
}
