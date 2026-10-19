import { ProjectModel } from '../Models/ProjetoModel.js';

export default class ProjectController {
  // 1. Método estático para cadastrar o projeto
  static async cadastrar(req, res) {
    try {
      const { nome, descricao, data_inicio, data_termino, tecnologias, observacao } = req.body;

      if (!nome) {
        return res.status(400).json({ erro: 'O nome do projeto é obrigatório!' });
      }

      const novoProjeto = await ProjectModel.create({
        nome,
        descricao,
        data_inicio,
        data_termino,
        tecnologias,
        observacao
      });

      return res.status(201).json({
        mensagem: 'Projeto cadastrado com sucesso!',
        projeto: novoProjeto
      });
    } catch (erro) {
      console.error(erro);
      return res.status(500).json({ erro: 'Erro interno ao cadastrar o projeto.' });
    }
  }

  // 2. Método estático para listar os projetos
  static async listar(req, res) {
    try {
      const projetos = await ProjectModel.findAll();
      return res.status(200).json(projetos);
    } catch (erro) {
      console.error(erro);
      return res.status(500).json({ erro: 'Erro interno ao listar os projetos.' });
    }
  }
}