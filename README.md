# Dona Birita 🍺

## Contexto do Projeto 💡
Plataforma de entrega de bebidas para a distribuidora fictícia Dona Birita.

### Colegas que contribuiram para a execução do projeto 👥
- [@Victor Figueiredo Mendes](https://github.com/ImVictorM "github")
- [@Rafael Silva](https://github.com/RafaMI6 "github")
- [@Carolina Lima](https://github.com/cybersekh "github")
- [@Wlisses Fernando](https://github.com/wlis13 "github")

### Principais funcionalidades do aplicativo 🔧
#### Cliente:
- Realizar login;
- Realizar cadastro;
- Escolher itens para adicionar ao pedido;
- Fazer o pedido;
- Monitorizar o estado dos pedidos efetuados;
- Alterar status do pedido para "Entregue";
#### Vendedor:
- Realizar login;
- Rastrear pedidos;
- Alterar o status dos pedidos para "Preparando Pedidos" e "Saiu para entrega";
#### Administrador:
- Realizar login;
- Visualizar usuários;
- Cadastrar novos usuários;
- Excluir usuários;

### Conhecimento Adquirido 📖

Neste projeto, fomos capazes de:
- Desenvolver uma aplicação FullStack;
- Integrar front-end e back-end;
- Construir uma API REST;
- Organizar o código e a arquitetura geral da aplicação;
- Trabalhar em conjunto, utilizando reuniões diárias e Kanban;

## Main Technologies 🧰
<table>
    <caption align="center"><h3>Back-End</h3></caption>
    <thead>
        <tr>
            <th>JavaScript</th>
            <th>Express</th>
            <th>Sequelize</th>
            <th>Node.JS</th>
            <th>MySQL</th>
            <th>JWT</th>
            <th>Docker</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="center">
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
                    <img 
                         src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" 
                         alt="javascript" 
                         width="40" 
                         height="40"
                    /> 
                </a>
            </td>
            <td align="center">
                <a href="https://expressjs.com/" target="_blank">
                    <img
                        src="https://www.orafox.com/wp-content/uploads/2019/01/expressjs.png"
                        alt="express"
                        width="40"
                        height="40"
                    />
                </a>
            </td>
            <td align="center">
                <a href="https://sequelize.org/" target="_blank">
                    <img
                        src="https://sequelize.org/api/v6/image/brand_logo.png"
                        alt="sequelize"
                        width="40"
                        height="40"
                    />
                </a>
            </td>
            <td align="center">
                <a href="https://nodejs.org" target="_blank" rel="noreferrer"> 
                    <img 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" 
                        alt="nodejs" 
                        width="40" 
                        height="40"
                    /> 
                </a>
            </td>
            <td align="center">
                 <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> 
                     <img 
                         src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" 
                         alt="mysql" 
                         width="40" 
                         height="40"
                    /> 
                </a>
            </td>
            <td align="center">
                 <a href="https://www.npmjs.com/package/jsonwebtoken" target="_blank" rel="noreferrer"> 
                     <img 
                         src="https://jwt.io/img/pic_logo.svg" 
                         alt="jwt" 
                         width="40" 
                         height="40"
                    /> 
                </a>
            </td>
            <td align="center">
                <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> 
                    <img 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" 
                        alt="docker" 
                        width="40" 
                        height="40"
                    /> 
                </a>
            </td>
        </tr>
    </tbody>
</table>
<table>
    <caption align="center"><h3>Front-End</h3></caption>
    <thead>
        <tr>
            <th>JavaScript</th>
            <th>HTML5</th>
            <th>CSS3</th>
            <th>React</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="center">
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
                    <img 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" 
                        alt="javascript" 
                        width="40" 
                        height="40"
                    /> 
                </a>
            </td>
            <td align="center">
                <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> 
                    <img 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" 
                        alt="html5" 
                        width="40" 
                        height="40"
                    /> 
                </a>
            </td>
            <td align="center">
                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> 
                    <img 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" 
                        alt="css3" 
                        width="40" 
                        height="40"
                    /> 
                </a>
            </td>
            <td align="center">
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
                    <img 
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" 
                        alt="react" 
                        width="40" 
                        height="40"
                    /> 
                </a>
            </td>
        </tr>
    </tbody>
</table>
<table>

<!-- 
> Utiliza a API []()
 -->

---



## Rodando a aplicação ⚙️

- Porta padrão da API: `3001`
- Porta padrão do banco de dados: `3002`

1. Clone o repositório

```bash
git clone git@github.com:El1v/app-delivery.git
```

2. Instale as dependências 
```bash
  npm install
```

<details>
<summary><h4>🐋 Rodando com docker (recomendado)</h4></summary>
  
2. Inicie os containers

```bash
docker-compose up -d
```

3. Popule o banco de dados
```bash
npm run db:reset
```

4. Iniciar o back-end && front-end (utilizar o comando na raiz do projeto)
```bash
  npm start
```

5. Acesse a pagina no seu navegador: http://localhost:3000/

</details>

<details>
<summary><h4>🖥️ Rodando Localmente</h4></summary>

 > Você precisa ter node e MySQL instalado
 
3. Renomeie o arquivo `.env.example` para `.env` no diretório front-end e back-end (altere o arquivo como preferir)

4. Popule o banco de dados
```bash
npm run db:reset
```

5. Iniciar o back-end && front-end (utilizar o comando na raiz do projeto)
```bash
  npm start
```


