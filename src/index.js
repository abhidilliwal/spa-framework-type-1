import Button from "./Button";
import Text from "./Text";
import Div from "./Div";

var app = new Div({
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

app.mountTo(document.getElementById("app"));
