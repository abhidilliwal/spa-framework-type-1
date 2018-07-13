import Component from "./Component";

export default class Div extends Component {
  constructor(config) {
    super(config);

    this.$el = document.createElement("div");

    this.childrens = config.childrens || [];

    this.childrens.forEach(Comp => {
      Comp.mountTo(this.$el);
    });
  }

  r() {
    this.$mount.innerHTML = this.$el;
  }
}
