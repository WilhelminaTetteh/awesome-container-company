import React from 'react';
import { useForm } from 'react-hook-form';
const ContactForm = ({ onCloseButtonClick }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
		trigger,
	} = useForm();
	//On submission
	const onSubmit = (data) => {
		console.log(data);
		reset();
	};
	return (
		<div className='modal__container'>
			<button
				onClick={onCloseButtonClick}
				className='modal__button'
				type='button'
				aria-label='modal button'></button>
			{/* form */}

			<form className='form' onSubmit={handleSubmit(onSubmit)}>
				<h2 className='form__heading'>
					Leave your contacts and request, and our manager will reach
					out to you to establish our futher parntership!
				</h2>
				<div className='form__input-wrapper'>
					{errors.name ? (
						<span className='form__input-error'>
							{errors.name.message}
						</span>
					) : (
						<label className='form__input-label'>
							Personal or company name *
						</label>
					)}

					<input
						{...register('name', {
							required:
								'Personal or company name * (This field is required)',
						})}
						onKeyUp={() => {
							trigger('name');
						}}
						type='text'
						className={`form__input ${
							errors.name && 'form__invalid-border'
						}`}
					/>
				</div>
				<div className='form__input-wrapper'>
					{errors.email ? (
						<span className='form__input-error'>
							{errors.email.message}
						</span>
					) : (
						<label className='form__input-label'>Email *</label>
					)}

					<input
						{...register('email', {
							required: 'Email * (This field is required)',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Email * (Invalid email address)',
							},
						})}
						onKeyUp={() => {
							trigger('email');
						}}
						type='email'
						className={`form__input ${
							errors.email && 'form__invalid-border'
						}`}
					/>
				</div>
				<div className='form__input-wrapper'>
					<label className='form__input-label'>
						Your request / interest
					</label>
					<textarea
						{...register('message')}
						className='form__textarea'></textarea>
				</div>
				<button className='form__button'>Send</button>
			</form>
		</div>
	);
};

export default ContactForm;

// import React, { useState } from 'react';
// import FormInput from './FormInput';

// const ContactForm = ({ onCloseButtonClick }) => {
// 	const [values, setValues] = useState({
// 		name: '',
// 		email: '',
// 	});

// 	const inputs = [
// 		{
// 			id: 1,
// 			name: 'name',
// 			type: 'text',
// 			placeholder: 'Name',
// 			errorMessage:
// 				'Personal or company name * (This field is required)',
// 			label: 'Personal or company name *',
// 			required: true,
// 		},
// 		{
// 			id: 2,
// 			name: 'email',
// 			type: 'email',
// 			placeholder: 'Email',
// 			errorMessage: 'Email * (This field is required)',
// 			label: 'Email',
// 			required: true,
// 		},
// 	];

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		console.log('attempted to submit');
// 	};
// 	const onChange = (e) => {
// 		setValues({ ...values, [e.target.name]: e.target.value });
// 	};
// 	console.log(values);
// 	return (
// 		<div className='modal__container'>
// 			<button
// 				onClick={onCloseButtonClick}
// 				className='modal__button'
// 				type='button'
// 				aria-label='modal button'></button>
// 			{/* form */}
// 			<form className='form' action='' onSubmit={handleSubmit}>
// 				<h2 className='form__heading'>
// 					Leave your contacts and request, and our manager will reach
// 					out to you to establish our futher parntership!
// 				</h2>
// 				{inputs.map((input) => (
// 					<FormInput
// 						key={input.id}
// 						{...input}
// 						value={values[input.name]}
// 						onChange={onChange}
// 					/>
// 				))}

// 				<div className='form__input-wrapper'>
// 					<label className='form__input-label'>
// 						Your request / interest
// 					</label>
// 					<textarea
// 						className='form__textarea'
// 						name=''
// 						id=''
// 						cols='30'
// 						rows='10'></textarea>
// 				</div>
// 				<button className='form__button'>Send</button>
// 			</form>
// 		</div>
// 	);
// };

// export default ContactForm;
