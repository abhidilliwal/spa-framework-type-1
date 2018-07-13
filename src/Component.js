export default class Component {
  constructor(config = {}) {
    this.$mount = config.el;
    this.config = config;
  }
  mountTo($el) {
    let config = this.config;

    $el.appendChild(this.$el);

    if (typeof config.handlers === "object") {
      Object.keys(config.handlers).forEach(handlerName => {
        let callback = config.handlers[handlerName];
        this.attachEvent(handlerName, callback);
      });
    }
  }
}
