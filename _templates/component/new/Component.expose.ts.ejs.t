---
inject: true
append: true
# to: <%= path %>/../../index.ts
to: "<%= (type=='view' || type=='layout') ? `${path}/../../index.ts` : null %>"
skip_if: <%= name %>
---
export * from './<%= h.inflection.pluralize(type) %>/<%= name %>';