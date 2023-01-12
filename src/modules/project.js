export const projectlist = (() => {
  const projects = [];
  let activeProject = 0;

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

  const setActiveProject = (id) => {
    activeProject = +id;
  };

  const getActiveProject = () => activeProject;

  const getActiceProjectObject = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    projects.find((project) => project.id === activeProject);

  return {
    getProjects,
    addProject,
    removeProject,
    setActiveProject,
    getActiveProject,
    getActiceProjectObject,
  };
})();

export class Project {
  static #count = 0;

  #id;

  #title;

  #tasks = [];

  constructor(title) {
    this.title = title;
    this.#id = Project.#count;
    Project.#incrementCount();
  }

  static #incrementCount = () => {
    Project.#count += 1;
  };

  get id() {
    return this.#id;
  }

  set title(title) {
    if (title === '') {
      this.#title = 'New Project';
      return;
    }
    this.#title = title;
  }

  get title() {
    return this.#title;
  }

  get tasks() {
    return this.#tasks;
  }

  addTask(task) {
    this.#tasks.push(task);
  }
}

export const newProject = (title) => {
  projectlist.addProject(new Project(title));
};
