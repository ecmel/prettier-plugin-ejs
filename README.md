# Prettier Plugin for EJS

This plugin formats [EJS](https://ejs.co/) markup in `html` files. It uses the default html parser and just marks EJS specific tags as comments.

## Installation

```sh
npm install --save-dev prettier-plugin-ejs
```

## Example

### Before

```html
<div>
  <!-- prettier-ignore -->
  <div>
    <% if (condition) { %> <% } else if (condition) { %> <% } %>
  </div>

  <!-- prettier-ignore -->
  <div>
    <%
      const a = 0;
    %>
  </div>

  <div class="<%= red %>"><%= 1 > 0 %></div>
  <textarea><%= text %></textarea>
  <code><%= text %></code>
  <pre><%= text %></pre>
</div>
```

### After

```html
<div>
  <div>
    <% if (condition) { %>
    <% } else if (condition) { %>
    <% } %>
  </div>

  <div>
    <%
      const a = 0;
    %>
  </div>

  <div class="<%= red %>"><%= 1 > 0 %></div>
  <textarea><%= text %></textarea>
  <code><%= text %></code>
  <pre><%= text %></pre>
</div>
```

## Note

Tags which contains the greater then symbol `>` are ignored.
