// import express from 'express'
// import 'dotenv/config'
// import cors from 'cors'
// import connectDB from './configs/db.js'
// import adminRouter from './routes/adminRoutes.js'
// import blogRouter from './routes/blogRouter.js'

// const app = express()

// await connectDB()

// app.use(express.json())
// app.use(cors())
// app.use(express.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//   res.send('Server running 🚀')
// })

// app.use('/api/admin', adminRouter)
// app.use('/api/blog', blogRouter)

// const PORT = process.env.PORT || 3000
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// })


// export default app


import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

import connectDB from './configs/db.js'
import adminRouter from './routes/adminRoutes.js'
import blogRouter from './routes/blogRouter.js'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

await connectDB()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

// API routes
app.use('/api/admin', adminRouter)
app.use('/api/blog', blogRouter)

// Serve Vite dist folder
const clientBuildPath = path.join(__dirname, '../client/dist')
app.use(express.static(clientBuildPath))

// app.get('*', (req, res) => {
//   res.sendFile(path.join(clientBuildPath, 'index.html'))
// })
app.use((req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export default app