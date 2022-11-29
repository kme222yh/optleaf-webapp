---
to: <%= path %>/<%= name %>.tsx
---
import './<%= scss %>';

export type <%= name%>Props = {
    className?: string;
};
<%= name%>.defaultProps = {
    className: ''
};

export function <%= name %>({ className }: <%= name %>Props) {
    return (
        <div className={`<%= name %> ${className}`}>
            This is <%= name %> component.
        </div>
    );
}