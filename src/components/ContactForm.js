import React from 'react';
import FormInput from './FormInput';

const ContactForm = ({ onCloseButtonClick }) => {
	return (
		<div className='modal__container'>
			<button
				onClick={onCloseButtonClick}
				className='modal__button'
				type='button'
				aria-label='modal button'></button>
			{/* form */}
			<form className='form' action=''>
				<h2 className='form__heading'>
					Leave your contacts and request, and our manager will reach
					out to you to establish our futher parntership!
				</h2>
				<div className='form__input-wrapper'>
					<label className='form__input-label'>
						Personal or company name *
					</label>
					<span className='form__input-error'>
						Personal or company name * (This field is required)
					</span>
					<input type='text' className='form__input' />
				</div>
				{/* delete later */}
				<div className='form__input-wrapper'>
					<label className='form__input-label'>Email *</label>
					<span className='form__input-error'>
						Email * (This field is required)
					</span>
					<input type='text' className='form__input' />
				</div>
				<div className='form__input-wrapper'>
					<label className='form__input-label'>
						Your request / interest
					</label>
					<textarea
						className='form__textarea'
						name=''
						id=''
						cols='30'
						rows='10'></textarea>
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
