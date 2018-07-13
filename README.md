# SPA framework - type 1: All JS

This is one approach in which everything is written in JS, ReactJS stands on similar concept but with templating support (which looks pretty much like HTML)

Example API:

```js
let app = new Div({
  childrens: [
    new Text({
      text: "Buttons: "
    }),
    new Button({
      text: "something",
      handlers: {
        click: function(e) {
          alert("Hey there you clicked me!");
        }
      }
    }),
    new Button({
      text: "something"
    })
  ]
});
```