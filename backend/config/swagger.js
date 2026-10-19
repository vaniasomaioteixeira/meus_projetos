import swaggerAutogen from 'swagger-autogen';

const outputFile = './config/swagger-output.json';
const endpointsFiles = ['./Routes/ProjetoRoutes.js']; 

const doc = {
  info: {
    title: 'API de Projetos',
    description: 'Documentação gerada automaticamente com swagger-autogen',
  },
  host: 'localhost:5000',
  schemes: ['http'],
  basePath: '/Api', 
};

swaggerAutogen()(outputFile, endpointsFiles, doc);