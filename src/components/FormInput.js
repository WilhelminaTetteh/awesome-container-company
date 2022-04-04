import React from 'react';

const FormInput = () => {
	return (
		<div>
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
		</div>
	);
};

export default FormInput;

// import React from 'react';

// const FormInput = (props) => {
// 	const { label, errorMessage, onChange, id, ...inputProps } = props;

// 	return (
// 		<div>
// 			<div className='form__input-wrapper'>
// 				<label className='form__input-label'>{label}</label>
// 				<span className='form__input-error'>{errorMessage}</span>
// 				<input
// 					{...inputProps}
// 					onChange={onChange}
// 					type='text'
// 					className='form__input'
// 				/>
// 			</div>
// 		</div>
// 	);
// };

// export default FormInput;
// import React from 'react';

// const FormInput = () => {
// 	return (
// 		<div>
// 			<div className='form__input-wrapper'>
// 				<label className='form__input-label'>
// 					Personal or company name *
// 				</label>
// 				<span className='form__input-error'>
// 					Personal or company name * (This field is required)
// 				</span>
// 				<input type='text' className='form__input' />
// 			</div>
// 			{/* delete later */}
// 			<div className='form__input-wrapper'>
// 				<label className='form__input-label'>Email *</label>
// 				<span className='form__input-error'>
// 					Email * (This field is required)
// 				</span>
// 				<input type='text' className='form__input' />
// 			</div>
// 		</div>
// 	);
// };

// export default FormInput;
