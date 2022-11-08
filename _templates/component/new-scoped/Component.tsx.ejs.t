---
to: <%= path %>/<%= name %>.tsx
---
import './index.scss';

<% if (have_props) { -%>
export type <%= name%>Props = {
    val: any
};
<% } -%>


export function <%= name %>(<% if (have_props) { -%>{val}: <%= name %>Props<% } -%>) {
    return (
        <div className='<%= name %> <%= name %>_<%= timestamp %>'>
            This is <%= name %> component.
        </div>
    );
}