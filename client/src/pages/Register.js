import React, { useState, useEffect } from 'react';
import { Alert, FormRow, Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appConetxt';

const initialState = {
	name: '',
	email: '',
	password: '',
	isMember: true,
};

const Register = () => {
	const [values, setValues] = useState(initialState);
	const { name, email, password, isMember } = values;
	// Global state and useNavigate
	const { isLoading, showAlert, displayAlert, clearAlert } = useAppContext();

	// Toggle member / guest
	const toggleMember = () => {
		setValues({ ...values, isMember: !isMember });
	};

	const handleChange = e => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		const { name, email, password, isMember } = values;
		if (!email || !password || (!isMember && !name)) {
			displayAlert();
			return;
		} else {
			clearAlert();
			console.log(values);
		}
	};

	return (
		<Wrapper className='full-page'>
			<form className='form' onSubmit={handleSubmit}>
				<Logo />
				<h3>{isMember ? 'Login' : 'Register'}</h3>
				{/* Alert Message */}
				{showAlert && <Alert />}
				{/* end Alert message*/}
				{/* name input */}
				{!isMember && (
					<FormRow
						type='text'
						name='name'
						value={values.name}
						handleChange={handleChange}
					/>
				)}
				{/* email input */}
				<FormRow
					type='email'
					name='email'
					value={email}
					handleChange={handleChange}
				/>
				{/* password input */}
				<FormRow
					type='password'
					name='password'
					value={password}
					handleChange={handleChange}
				/>
				<button type='submit' className='btn btn-block'>
					submit
				</button>
				<p>
					{isMember ? 'Not a member yet?' : 'Already a member?'}

					<button
						type='button'
						onClick={toggleMember}
						className='member-btn'>
						{isMember ? 'Register' : 'Login'}
					</button>
				</p>
			</form>
		</Wrapper>
	);
};

export default Register;
