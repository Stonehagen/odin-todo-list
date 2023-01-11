export const projectList = (() => {
  const projects = [];

  const getProjects = () => projects;

  const addProject = (project) => {
    projects.push(project);
  };

  const removeProject = (project, index) => {
    projects.forEach((p) => {
      if (p.getId() === project.getId()) {
        projects.splice(index, index);
      }
    });
  };

  return {
    getProjects,
    addProject,
    removeProject,
  };
})();

export class Project {
  static #count = 0;

  #id;

  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.#id = Project.#count;
    Project.incrementCount();
  }

  static incrementCount = () => {
    Project.#count += 1;
  };

  getId() {
    return this.#id;
  }

  setTitle(title) {
    this.title = title;
  }

  setDescription(description) {
    this.description = description;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }
}
