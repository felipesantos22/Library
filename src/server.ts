import "reflect-metadata"
import { AppDataSource } from "./data-source"
import app from "./app"
import "dotenv/config"

const PORT = process.env.PORT;

AppDataSource.initialize()
.then(() => { 
    app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
      })
})
.catch((error) => console.log(error))