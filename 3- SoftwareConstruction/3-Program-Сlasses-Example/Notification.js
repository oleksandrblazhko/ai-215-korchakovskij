class Notification {
  type;
  topic;
  text;

  constructor({ type, topic, text }) {
    this.type = type;
    this.topic = topic;
    this.text = text;
  }

  get type() {
    return this.type;
  }

  get topic() {
    return this.topic;
  }

  get text() {
    return this.text;
  }

  set type(new_type) {
    this.type = new_type;
  }

  set topic(new_topic) {
    this.topic = new_topic;
  }

  set text(new_text) {
    this.text = new_text;
  }
}
