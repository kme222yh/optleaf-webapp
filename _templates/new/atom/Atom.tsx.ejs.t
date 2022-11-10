---
to: <%= path %>/<%= name %>.tsx
---
import './<%= style_file_name %>';

export type <%= name%>Props = {
    className?: string
};
<%= name%>.defaultProps = {
    className: ''
};

export function <%= name %>({className}: <%= name %>Props) {
    return (
        <div className={`<%= name %> ${className}`}>
            This is <%= name %> component.
        </div>
    );
}