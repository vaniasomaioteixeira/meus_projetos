
# Imagem base com Node.js
FROM node:22-alpine

# Define a pasta de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Informa que a aplicação utiliza a porta 5000
EXPOSE 5000

# Comando para iniciar a API
CMD ["npm", "start"]
