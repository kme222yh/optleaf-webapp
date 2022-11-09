---
to: <%= path %>/<%= name %>.tsx
---
import './index.scss';

<% if (have_props) { -%><% if (have_default_props) { -%>
export type <%= name%>Props = {
    val?: any
};
<%= name%>.defaultProps = {
    val: null
};
<% } else { -%>
export type <%= name%>Props = {
    val: any
};
<% } -%><% } -%>


export function <%= name %>(<% if (have_props) { -%>{val}: <%= name %>Props<% } -%>) {
    return (
        <div className='<%= name %>'>
            This is <%= name %> component.
        </div>
    );
}