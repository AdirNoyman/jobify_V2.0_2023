import mongoose from 'mongoose';
import validator from 'validator';
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Please provide a name 🤨'],
		minlength: 3,
		maxlength: 20,
		trim: true,
	},
	email: {
		type: String,
		required: [true, 'Please provide an email 🤨'],
		validate: {
			validator: validator.isEmail,
			message: 'Please provide a valid email 🤨',
		},
		trim: true,
		// Make sure the email is not already in use
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'Please provide a password 🤨'],
		trim: true,
		minlength: 6,
	},
	lastName: {
		type: String,
		minlength: 3,
		maxlength: 20,
		trim: true,
		default: 'lastName',
	},
	location: {
		type: String,
		minlength: 3,
		maxlength: 20,
		trim: true,
		default: 'my city',
	},
});

// Mongoose middleware function that will run before we save the document to the DB
UserSchema.pre('save', function () {
	console.log(this.password);
});

export default mongoose.model('User', UserSchema);
