---
inject: true
to: <%= path %>/../../index.ts
skip_if: <%= name %>
append: true
---
export * from './layouts/<%= name %>';