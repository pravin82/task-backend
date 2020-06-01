import { Router } from 'express';
import UserController from './controller';

const router = Router();


router.post('/', function(req, res){
  UserController.addUser(req, res)
});

router.get('/', function(req, res){
  UserController.getUsers(req, res)
});



export default router;