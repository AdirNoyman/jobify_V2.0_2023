import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const register = async (req, res, next) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		throw new BadRequestError('Please provide all required fields 🤨');
	}

	// Check if email already exists
	const userAlreadyExists = await User.findOne({ email });

	if (userAlreadyExists) {
		throw new BadRequestError('Email already in use 🤷🤨');
	}

	// Create user
	const user = await User.create({ name, email, password });
	res.status(StatusCodes.CREATED).json({
		msg: 'created user 🤓',
		data: user,
	});
	user.save();
};

const login = async (req, res) => {
	res.send('login user 🤓');
};

const updateUser = async (req, res) => {
	res.send('update user 🤓');
	user.save();
};

export { register, login, updateUser };
