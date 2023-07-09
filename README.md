# APIRestfull 
### An basic API

You can access the API Reference here: https://documenter.getpostman.com/view/28143552/2s93zH2eb2

> In the root folder of project you can use the *convertme-users.json* to import the requests on your postman software.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
```

Create at root folder the `.env` file with the application port and database info (mysql/aurora), follow the `.env.example` in the root folder.

### Create database container

Change the database credentials in the docker-composer file at root folder, and run the follow command:

```bash
$ docker-compose up
```
### Run server

Follow the scripts on the *package.json* you can run the application with the follow command

```bash
$ npm run start:dev
```

---

Made with ☕ and 🤯 by [Thiego Moura](https://thiegomoura.github.io/me/)