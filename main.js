const express = require("express")
const app = express()
const exphbs = require("express-handlebars")



const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`)
})


app.use(express.json())
app.use("/assets", express.static(__dirname + "/assets"))
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"))

//seteando handlebars
app.engine(
    "handlebars",
    exphbs.engine({
        defaultLayout: "main",
        layoutsDir: `${__dirname}/views/mainLayout`,
        partialsDir:`${__dirname}/views/partials`
    })
)
app.set("view engine", "handlebars")


app.get("/", async (req, res) => {
    try {
        res.render("home")
    } catch (error) {
        res.status(500).send({
            error: `Algo salió mal... ${error}`,
            code: 500
        })
    }
})