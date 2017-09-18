const mongojs = require('mongojs')

const envConnectionString = process.env.MONGODB_URI
const connectionsMap = {
  prod: `mongodb://${envConnectionString}`,
  dev: 'mongodb://localhost:27017/instabuddy'
}
const env = process.env.ENV || 'dev'
const connectionString = connectionsMap[env]
const db = mongojs(connectionString)

module.exports = db
