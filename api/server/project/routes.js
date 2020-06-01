import { Router } from 'express';
import ProjectController from './controller';

const router = Router();


router.post('/', function(req, res){
  ProjectController.addProject(req, res)
});

router.post('/assignee', function(req, res){
  ProjectController.addProjectAssignee(req, res)
});


export default router;