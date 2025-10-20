const express = require("express")
const { router } = require('./src/routes/routes')
const app = express()
const PORT = 8081

app.use('/', router)

app.use(express.json())
app.listen(PORT, () => {
    console.log(`Servidor respondendo em http://localhost:${PORT}`);
})