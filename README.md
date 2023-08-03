# Prettier Plugin for EJS

This plugin formats [EJS](https://ejs.co/) markup in `html` files. It uses the default html parser and just marks EJS specific tags as comments.

## Installation

```sh
npm install --save-dev prettier-plugin-ejs
```

This will be loaded by Prettier v2 but for Prettier v3, plugin should be manually loaded:

```sh
prettier --plugin=prettier-plugin-ejs --write .
```

Please check [Prettier Docs](https://prettier.io/docs/en/plugins.html) for other options.

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
