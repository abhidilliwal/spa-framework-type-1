import Component from "./Component";

function handlerClick(btn, cb) {
  console.log(btn);
  btn.$el.addEventListener("click", cb);
}

export default class Button extends Component {
  constructor(config = {}) {
    super(config);
    this.text = config.text || "button";
    this.$el = document.createElement("button");
    this.$el.textContent = `${this.text}`;
  }
  attachEvent(evName, cb) {
    switch (evName) {
      case "click":
        handlerClick(this, cb);
        break;
      default:
        return;
    }
  }
}
