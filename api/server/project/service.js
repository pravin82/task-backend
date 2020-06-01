import database from '../src/models';

class ProjectService {
  
  static async addProject(newProject) {
    try {
      return await database.Project.create(newProject);
    } catch (error) {
      throw error;
    }
  }

  static async addProjectAssignee(projectAssignee) {
    try {
      return await database.projectAssignee.create(projectAssignee);
    } catch (error) {
      throw error;
    }
  }



  
}

export default ProjectService;