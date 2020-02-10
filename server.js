const http = require('http')

const PORT = process.env.PORT || 8080
const server = http.createServer((req, res) => {
    console.log('New Connection')

    res.end('Hello World!!!')
})

server.listen(PORT, () => console.log('Listening'))
