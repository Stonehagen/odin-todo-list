export const projectList = (() => {
  const projects = [];

  const getProjects = () => projects;

  const addProject = (project) => {
    projects.push(project);
  };

  const removeProject = (project, index) => {
    projects.forEach((p) => {
      if (p.title === project.title) {
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
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
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
