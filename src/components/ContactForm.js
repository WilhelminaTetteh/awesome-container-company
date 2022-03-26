import React from 'react';

const ContactForm = () => {
	return (
		<div
			className='modal'
			style={{
				backgroundColor: '#0000007d',
				display: 'flex',
				alignItems: 'center',
				height: '100%',
				width: '100%',
				position: 'fixed',
				top: '0',
				left: '0',
				zIndex: '6',
			}}>
			<div
				className='modal__container'
				style={{
					position: 'relative',
					width: '760px',
					height: '778px',
					backgroundColor: '#FFFFFF',
					boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
					borderRadius: '3px',
					margin: 'auto auto',
				}}>
				<button
					className='modal__button'
					type='button'
					aria-label='modal button'></button>
				{/* <form
            action='#'
            class='modal__form'
            method='POST'
            name='profile-form'
            novalidate>
            <h2 class='modal__form-heading'>
              Leave your contacts and request, and our manager will
              reach out to you to establish our futher parntership!
            </h2>
  
            <label for='#' class='contact__form__lable'>
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
  
            <button
              class='form__button form__button-save'
              type='submit'>
              Save
            </button>
          </form> */}
			</div>
		</div>
	);
};

export default ContactForm;
