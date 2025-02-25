const dotenv = require('dotenv')
dotenv.config()

const config = {
        DB_URL:process.env.URL || "mongodb+srv://amitkv93047:test1234@cluster1.cg7fa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1",
        PORT : process.env.PORT || 7000
}

module.exports = config