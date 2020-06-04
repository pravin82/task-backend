import { Router } from 'express';
import ProjectController from './controller';

const router = Router();


router.post('/', function(req, res){
  ProjectController.addProject(req, res)
});

router.get('/', function(req, res){
  ProjectController.getProjects(req, res)
});

export default router;