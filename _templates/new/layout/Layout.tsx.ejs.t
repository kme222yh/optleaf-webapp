---
to: <%= path %>/<%= name %>.tsx
---
import './<%= style_file_name %>';

export type <%= name%>Props = {
    children: React.ReactNode
};

export function <%= name %>({children}: <%= name %>Props) {
    return (
        <div className='<%= name %>'>
            <header className='<%= name %>-header'>
                This is header.
            </header>

            <main className='<%= name %>-main'>
                {children}
            </main>

            <header className='<%= name %>-footer'>
                This is footer.
            </header>
        </div>
    );
}