# Previsão do Tempo - React App

## Vamos começar

JavaScript + CSS + Bootstrap + React.js 

### Pré-requisitos

```
$ Git --version
>= v2.24.3

$ node --version
>= v12.18.3

$ Yarn --version
>= v1.22.5

```

### Componentes usados nessa aplicação

- current: componente usado para apresentar as informações do tempo
- hourly: componente usado para apresentar a informação do tempo por hora
- location: componente usado para apresentar a localização e a data
- searchbox: componente que contem o input box e o botão de pesquisa
- weekly: componente usado para apresentar a informação do tempo na semana

### Como pegar e/ou criar as API keys

**Google Maps API key:**
Por favor siga as instruções para a criação da API Key:<br>
[https://developers.google.com/maps/documentation/embed/get-api-key](https://developers.google.com/maps/documentation/embed/get-api-key)

**Openweathermap API key:**
Por favor siga as instruções para a criação da API Key:<br> 
[https://openweathermap.org/appid](https://openweathermap.org/appid)

**Unsplash API key:**
Por favor siga as instruções para a criação da API Key:<br>
[https://unsplash.com/documentation](https://unsplash.com/documentation)

### Assim que todas as chaves de API estiverem disponíveis, renomeie .env.sample para .env <br>e informe os valores apropriados para as seguintes variáveis:

REACT_APP_GOOGLE_MAPS_API_KEY=AAA<br>
REACT_APP_OPENWEATHERMAP_API_KEY=BBB<br>
REACT_APP_UNSPLASH_API_KEY=CCC

### Como capturar o projeto

```
Pelo terminal, selecione a pasta que deseja colocar o projeto e execute os seguintes comandos:

$ git clone https://github.com/marcelosoares/previsao-do-tempo.git
$ cd previsao-do-tempo/
$ cp .env.sample .env
```

### Iniciando a aplicação

```
$ yarn
```
O comando acima vai instalar todas as dependencias do projeto

### Executando a aplicação

```
$ yarn start
```
O comando acima vai iniciar a aplicação na porta: **4004**

### Publicando a aplicação em produção

Antes de executar os passos abaixo, crie o arquivo .env.production com as respectivas API's Keys.
```
$ cd previsao-do-tempo/
$ yarn
$ yarn build
```

**Como resultado:**<br>
Será criada a pasta build, na raiz do projeto, com o arquivo index.html, <br>todos os assets e demais arquivos necessários para produção.

### Construido com as seguintes dependências

* [React.js](https://reactjs.org/)
* [Yarn](https://yarnpkg.com/)
* [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/webpack/#importing-compiled-css)
* [Ant Design](https://github.com/ant-design/ant-design)
* [Axios](https://github.com/axios/axios)
* [React Geocode](https://github.com/shukerullah/react-geocode)
* [React Animated Weather](https://github.com/divyanshu013/react-animated-weather)

## LinkedIn

* **Marcelo Soares** - [LinkedIn](https://www.linkedin.com/in/mamsoares/)