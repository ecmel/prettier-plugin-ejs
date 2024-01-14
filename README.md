# Prettier Plugin for EJS

This plugin formats [EJS](https://ejs.co/) markup in `html` files. It uses the default html parser and just marks EJS specific tags as comments.

## Installation

```sh
npm install --save-dev prettier-plugin-ejs
```

For Prettier v2, the plugin will be loaded automatically.

For Prettier v3, you'll need to manually load the plugin:

```sh
prettier --plugin=prettier-plugin-ejs --write .
```

Please check [Prettier Docs](https://prettier.io/docs/en/plugins.html) for other loading methods.

## Example

### Before

```html
<div>
  <!-- prettier-ignore -->
  <div>
    <% if (condition) { %> <% } else if (condition) { %> <% } %>
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

  <div class="<%= red %>"><%= 1 > 0 %></div>

  <textarea><%= text %></textarea>
  <code><%= text %></code>
  <pre><%= text %></pre>
</div>
```

## Nested Tag

```html
<td <% if (styleData) { %>
  style="<%= styleData %>" <% } %>>
  <%= data %>
  <%= data %>
</td>
```

## Note

Tags which contains the greater then symbol `>` are ignored.
