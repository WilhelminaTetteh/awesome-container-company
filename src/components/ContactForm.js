import React from 'react';

const ContactForm = ({ onCloseButtonClick }) => {
	return (
		<div className='modal__container'>
			<button
				onClick={onCloseButtonClick}
				className='modal__button'
				type='button'
				aria-label='modal button'></button>

			{/* <form
				action='#'
				class='form'
				method='POST'
				name='profile-form'
				novalidate>
				<h2 class='form__heading'>
					Leave your contacts and request, and our manager will reach
					out to you to establish our futher parntership!
				</h2>

				<label for='#' class='form__lable'>
					<input
						id='profile-name'
						type='text'
						placeholder='Name'
						class='form__input form__input_type_title'
						name='title'
						required
						maxlength='40'
						minlength='2'
					/>
					<span id='profile-name-error' class='form__error'></span>
				</label>

				<label for='#' class='form__lable'>
					<input
						id='profile-text'
						type='text'
						placeholder='About me'
						class='form__input form__input_type_description'
						name='description'
						required
						maxlength='200'
						minlength='2'
					/>
					<span id='profile-text-error' class='form__error'></span>
				</label>

				<button class='form__button form__button-save' type='submit'>
					Save
				</button>
			</form> */}
		</div>
	);
};

export default ContactForm;
