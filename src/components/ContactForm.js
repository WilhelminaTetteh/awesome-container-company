import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const ContactForm = ({
	onCloseButtonClick,
	onHandleContactSubmit,
}) => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		trigger,
	} = useForm();

	//On submission
	const onSubmit = (data) => {
		console.log(data);
		reset();
		// onHandleContactSubmit();
		setIsSubmitted(true);
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
				{isSubmitted ? (
					<div className='modal__success'>
						<h1 className='modal__success-text'>
							Thanks! We will get in touch with you soon!
						</h1>
					</div>
				) : (
					<>
						<h2 className='form__heading'>
							Leave your contacts and request, and our manager will
							reach out to you to establish our futher parntership!
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
					</>
				)}
			</form>
		</div>
	);
};

export default ContactForm;
