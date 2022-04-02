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
				<FormInput />
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
