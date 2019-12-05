import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
	const [ userCredentials, setUserCredentials ] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		signUpStart({ displayName, email, password });
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignUpContainer>
			<SignUpTitle>У меня нет аккаунта</SignUpTitle>
			<span>Зарегистрироваться указав свой адрес электронной почты и пароль</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleChange}
					label="Имя пользователя"
					required
				/>
				<FormInput type="email" name="email" value={email} onChange={handleChange} label="Эл. адрес" required />
				<FormInput type="password" name="password" value={password} onChange={handleChange} label="Пароль" required />
				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleChange}
					label="Подтвердите пароль"
					required
				/>
				<CustomButton type="submit">Зарегистрироваться</CustomButton>
			</form>
		</SignUpContainer>
	);
};

export default SignUp;
