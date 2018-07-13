import Component from "./Component";

export default class Text extends Component {
  constructor(config) {
    super(config);
    this.text = config.text || "";
    this.$el = document.createTextNode(this.text);
  }
}
