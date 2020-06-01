import ProjectService from './service';
import Util from '../utils/utils';

const util = new Util();

class ProjectController {

  static async addProject(req, res) {
    const {name, body, assigner_id, status} = req.body;
    if (!(name && assigner_id && status)) {
      util.setError(400, 'Please provide all the fields');
      return util.send(res);
    }
    const newProject = req.body;
    try {
      const createdProject = await ProjectService.addProject(newProject);
      util.setSuccess(201, 'ProjectAdded!', createdProject);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async addProjectAssignee(req, res) {
    const {project_id, assignee_id }= req.body;
    if (!(assignee_id && project_id)) {
      util.setError(400, 'Please provide all the fields');
      return util.send(res);
    }
    const projectAssignee = req.body;
    try {
      const createdProAssignee = await ProjectService.addProjectAssignee(projectAssignee);
      util.setSuccess(201, 'Project Assignee Added!', createdProAssignee);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

}

export default ProjectController;