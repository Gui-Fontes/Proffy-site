//servidor
const express = require('express')
const server = express()

const {pageLanding,pageStudy,pageGiveClasses,saveClasses} = require('./pages')

//configurou nunjucks
const nunjucks = require('nunjucks')
const format = require('./utils/format')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server

    .use(express.urlencoded({ extended: true}))

    .use(express.static("public"))

    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    .listen(5000)//Iniciou server

//npm run dev (para fazer o server ficar rodando e se atualizar automaticamente)