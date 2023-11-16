// import express from 'express';
// import mongoose from 'mongoose'; // Corrected spelling of 'mongoose'
// import cors from 'cors';
// import userRoutes from "./routes/users.js";
// import questionRoutes from "./routes/Questions.js";
// import answerRoutes from "./routes/Answers.js";
// //import connectDB from "./connectMongoDb.js";

// const app = express();

// app.use(express.json({ limit: "30mb", extended: true })); // Adjusted object syntax
// app.use(express.urlencoded({ limit: "30mb", extended: true })); // Adjusted object syntax
// app.use(cors());

// app.get('/', (req, res) => {
//     res.send("This is a stack overflow clone API");
// });
// app.use("/user", userRoutes);
// app.use("/questions", questionRoutes);
// app.use("/answer", answerRoutes);


// const PORT = process.env.PORT || 5000;
// const CONNECTION_URL = "mongodb+srv://vijaykumar_24:vijay12345678@developer-social-media.s0djtmm.mongodb.net/?retryWrites=true&w=majority"; // Add your MongoDB connection URL here

// mongoose
//     .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); })) // Adjusted template string syntax
//     .catch((err) => console.log(err.message));
    import express from "express";
    import cors from "cors";
    import dotenv from "dotenv";
    
    import userRoutes from "./routes/users.js";
    import questionRoutes from "./routes/Questions.js";
    import answerRoutes from "./routes/Answers.js";
    import connectDB from "./connectMongoDb.js";
    
    dotenv.config();
    connectDB();
    const app = express();
    app.use(express.json({ limit: "30mb", extended: true }));
    app.use(express.urlencoded({ limit: "30mb", extended: true }));
    app.use(cors());
    
    // app.use('/',(req, res) => {
    //     res.send("This is a stack overflow clone API")
    // })
    
    app.use("/user", userRoutes);
    app.use("/questions", questionRoutes);
    app.use("/answer", answerRoutes);
    
    const PORT = process.env.PORT || 5000;
    
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
    
