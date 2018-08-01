import http from 'http'
import config from './config'

const server = http.createServer((requestAnimationFrame, res) => {
    res.end('Hello World')
})

server.listen(config.port, config.hostname, () => {
    console.log(`Server Running on http://${config.hostname}:${config.port}/`)
})