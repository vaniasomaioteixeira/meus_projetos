import db from '../db/conn.js';

export class ProjectModel {
  // Método estático para cadastrar
  static async create(projeto) {
    const { nome, descricao, data_inicio, data_termino, tecnologias, observacao } = projeto;
    
    const query = `
      INSERT INTO projetos (nome, descricao, data_inicio, data_termino, tecnologias, observacao) 
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    
    const [resultado] = await db.execute(query, [
      nome, 
      descricao, 
      data_inicio, 
      data_termino, 
      tecnologias, 
      observacao
    ]);
    
    return { id: resultado.insertId, ...projeto };
  }

  // Método estático para listar
  static async findAll() {
    const query = 'SELECT * FROM projetos';
    const [linhas] = await db.query(query);
    return linhas;
  }
}