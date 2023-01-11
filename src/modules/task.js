export default class Task {
  static #count = 0;

  #id;

  #project;

  #title;

  #description;

  #dueDate;

  constructor(project, title, description, dueDate) {
    this.#project = project;
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#id = Task.#count;
    Task.incrementCount();
  }

  static #incrementCount = () => {
    Task.#count += 1;
  };

  get id() {
    return this.#id;
  }

  set project(p) {
    this.#project = p;
  }

  get project() {
    return this.#project;
  }

  set title(title) {
    this.#title = title;
  }

  get title() {
    return this.#title;
  }

  set description(description) {
    this.#description = description;
  }

  get description() {
    return this.#description;
  }

  set dueDate(dueDate) {
    this.#dueDate = dueDate;
  }

  get dueDate() {
    return this.#dueDate;
  }
}
