export default class Task {
  static #count = 0;

  #id;

  #title;

  #description;

  #dueDate;

  constructor(title, description, dueDate) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#id = Task.#count;
    Task.#incrementCount();
  }

  static #incrementCount = () => {
    Task.#count += 1;
  };

  get id() {
    return this.#id;
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

export const newTask = (title) => new Task(title, '', '');
