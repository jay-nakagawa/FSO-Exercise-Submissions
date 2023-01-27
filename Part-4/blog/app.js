const app = express()

const config = require('./utils/config')

const url = config.MONGODB_URI

mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

  module.exports = mongoose.model("Blog", blogSchema)