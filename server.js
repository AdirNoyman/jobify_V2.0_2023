import express from 'express';
import connectDB from './db/connect.js';
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

// Middleware

app.get('/', (req, res) => {
	res.send('<h1>Welcome! ๐๐ค</h1>');
});

app.get('*', (req, res) => {
	res.send('Not found ๐คจ!');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

const start = async () => {
	try {
		await connectDB(process.env.MONGODB_URL);
		app.listen(port, () =>
			console.log(`Server is listening on port ${port} ๐๐ค...`)
		);
	} catch (error) {
		console.log('Error connecting to the database:', error);
	}
};

start();
