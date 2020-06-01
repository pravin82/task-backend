import { Router } from 'express';
import ProjectController from './controller';

const router = Router();


router.post('/', function(req, res){
  ProjectController.addProject(req, res)
});

export default router;