import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignInContainer, SignInTitle, ButtonsBarContainer } from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [ userCredentials, setUserCredentials ] = useState({ email: '', password: '' });

	const { email, password } = userCredentials;

	const handleSubmit = async (event) => {
		event.preventDefault();

		emailSignInStart(email, password);
	};

	const handleChange = (event) => {
		const { value, name } = event.target;

		setUserCredentials({ ...userCredentials, [name]: value });
	};
	return (
		<SignInContainer>
			<SignInTitle>У меня уже есть аккаунт</SignInTitle>
			<span>Войти используя свой адрес электронной почты и пароль</span>

			<form onSubmit={handleSubmit}>
				<FormInput name="email" type="email" handleChange={handleChange} value={email} label="Эл. адрес" required />
				<FormInput
					name="password"
					type="password"
					value={password}
					handleChange={handleChange}
					label="Пароль"
					required
				/>
				<ButtonsBarContainer>
					<CustomButton type="submit"> Войти </CustomButton>
					<CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
						Войти через Facebook
					</CustomButton>
				</ButtonsBarContainer>
			</form>
		</SignInContainer>
	);
};

export default SignIn;
