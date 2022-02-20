// Imports
import { stdout } from "process"
import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
// Start async function 
const start = async () => {
    
    try {
        // Const defines
        const PORT = process.env.PORT || 5000
        const app = await NestFactory.create(AppModule)

        app.enableCors()

        await app.listen(PORT, () => stdout.write(`Listening on port ${PORT}\n`))
    } catch (e) {
        stdout.write(`Error: ${e}\n`)
    }
}

// Call the function
start()