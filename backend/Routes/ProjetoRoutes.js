import { Router } from 'express';
import  ProjetoController  from '../Controllers/ProjetoController.js';

const router = Router();

router.post('/projetos', ProjetoController.cadastrar);


router.get('/projetos', ProjetoController.listar);

export default router;