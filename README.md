# Backend Artificial Intelligence

Esta aplicação reconhece e compreende textos em imagens em mais de 50 idiomas diferentes e os processa de forma automatizada.
Esta aplicação está disponível Node.js com integração ao Google Vision API.

Os tipos de arquivos aceitos são apenas `jpeg, pjpeg e png` com no máximo `2mb`.

O Frontend desta aplicação se encontra disponível no repositório [Frontend Artificial Intelligence](https://github.com/viniiciusgds/Frontend-Artficial-Intelligence).

### Pré-requisitos

- Conta disponível no Google Cloud.
- Chave de acesso Google Vision API

### Configurações

- Altere o arquivo ApiKey.json disponível em `src/config` com os dados da sua chave de acesso.
- Esta aplicação roda na porta 3333, caso seja necessário utilizar outra porta, no arquivo .env, altere as variáveis ambiente `APP_URL` e `PORT` com a nova porta de utilização.

### Executando o App

Na raiz deste projeto, rode:

- `cd ./Backend-Artificial-Intelligence`
- ` yarn install` ou `npm install`
- `yarn start` ou `npm start`

### Endpoints

Esta aplicação contém os seguintes endpoints:

1.  **POST /image**

- **Headers:**
  - Content-Type: `multipart/form-data`
- **Body:**

  - image: `File`

- **Response:**

  - Quando os dados são válidos:

    - Status Code: **`200`**<br/>
      {<br/>
      "originalname": String,<br/>
      "size": Number,<br/>
      "key": String,<br/>
      "url": String,<br/>
      "text": String,<br/>
      "type": String<br/>
      }

  - Quando os dados são inválidos:

    - Status Code: **`500`**
