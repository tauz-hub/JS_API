# Use a imagem base oficial do Node.js
FROM node:14

# Crie e defina o diretório de trabalho da aplicação
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json (se disponível)
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante da aplicação
COPY . .

# Exponha a porta em que a aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]