// const mongoose = require('mongoose')

// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect("mongodb+srv://admani:283790@cluster0.psomssl.mongodb.net/?retryWrites=true&w=majority")

//         console.log('MongoDB Connected: ', conn.connection.host)
//     } catch (error) {
//         console.log(error);
//         process.exit(1)
//     }
// }

// module.exports = connectDB()

const mongoose = require('mongoose')
mongoose
.connect(process.env.MONGO_URI
    // , {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useFindAndModify: false,
    //     useCreateIndex: true
    // }
)
    .then(() => {
        console.log('MongoDB Connected')
    })
    .catch(error => console.log(error))