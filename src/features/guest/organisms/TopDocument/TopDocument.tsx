import './TopDocument.scss';

import { Text1 } from '../../atoms/Text1';
import { Logo } from '../../atoms/Logo';

export type TopDocumentProps = {
    className?: string;
};
TopDocument.defaultProps = {
    className: ''
};

export function TopDocument({ className }: TopDocumentProps) {
    return (
        <div className={`TopDocument ${className}`}>
            <Text1>Optimize</Text1>
            <Text1>Organize</Text1>
            <Text1>Collaboration</Text1>
            <Logo />
            <Text1>
                Start new project
                <br />
                with Optleaf
            </Text1>
        </div>
    );
}
