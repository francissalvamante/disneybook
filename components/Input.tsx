import React from 'react'

const Input = ({ type, required, label, placeholder, id, classes, inputClasses, options, formField, handleChange }: {
  type: string,
  required: boolean,
  label: string,
  id: string,
  formField: string,
  handleChange: any,
  placeholder?: string,
  classes?: string,
  inputClasses?: string,
  options?: any[]
}) => {

  const buildInput = () => {
	switch (type) {
	  case 'text':
		return <input id={id} type={type} required={required} placeholder={placeholder} value={formField} onChange={handleChange} className='input'/>
	  case 'date':
		return <input id={id} type={type} required={required} className='input' value={formField} onChange={handleChange} />
	  case 'dropdown':
		return (
		  <select name={id} id={id} className={`input ${inputClasses}`} value={formField} onChange={handleChange}>
			<option value='' disabled>{id === 'state' ? 'State' : 'Choose an option'}</option>
			{options?.map((option) => (
			  <option value={option.short || option.name} key={option.id}>{option.short || option.name}</option>
			))}
		  </select>
		)
	}
  }

  return (
	<div className={`${classes}`}>
	  <label htmlFor={id} className='block text-base font-bold text-custom-gray-300'>{label} {required && <span
		className='text-error font-bold text-base'>*</span>}</label>
	  {buildInput()}
	</div>
  )
}
export default Input
