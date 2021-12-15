import mongoose from 'mongoose'

const db = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log(`Mongoose Connected ${conn.connection.host}`)
  } catch (err) {
    console.error(`Error: ${err.message}`)
    process.exit(1)
  }
}

export default db
