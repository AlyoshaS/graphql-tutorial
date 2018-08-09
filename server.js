import express from 'express'

const server = express()

server.get('/', (req, res) => {
    res.send('<html><head><h1>Helloooo World!!</h1></head><body></body></html>')
})

server.listen(4000, () => {
    console.log('> listening on port 4000')
})