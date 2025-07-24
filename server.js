const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRoutes');
const app = express();
app.use(express.json());

app.use('/', authRouter);

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error', err));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});
