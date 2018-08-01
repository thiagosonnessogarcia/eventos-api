// config.js para adicionar itens de configuração JWT

module.exports = {
    jwtSecret: "MyS3cr3tK3Y", // serve para codifica e decodificar TOKENS
    jwtSession: { session: false} // session informa que a API não ira gerenciar a sessão
}