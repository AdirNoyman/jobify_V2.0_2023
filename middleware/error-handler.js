const errorHandlerMiddleware = (err, req, res, next) => {
	console.log(err);
	res.status(500).send({ msg: 'There was an error 😩' });
};

export default errorHandlerMiddleware;
