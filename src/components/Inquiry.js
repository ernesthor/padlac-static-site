import React from 'react'
import { Field, reduxForm } from 'redux-form'

import Captcha from './Captcha.js'

const required = value => (value ? undefined : 'Required!')
const chkbox = value => (value ? undefined : 'Please check the box!')
const alphabet = value =>
	value && /[^a-zA-Z ]/i.test(value)
		? 'Only alphabet characters'
		: undefined
const email = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? 'Invalid email address'
		: undefined

const number = value =>
	value && /[^0-9]/i.test(value)
		? 'Only numeric characters'
		: undefined
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
    <div>
      <input {...input} placeholder={label} type={type} className="form-control"/>
      {touched && ((error && <span className="mt-2 contact-gray">{error}</span>) || (warning && <span className="mt-2 contact-gray">{warning}</span>))}
    </div>
)

const SignUpForm = props => {
const { handleSubmit, pristine, submitting } = props
return (
		<div>
			<form method="POST" action="https://formspree.io/enquiries@padlacconstruction.com">
				<div className="form-group">
					<Field name="name" component={renderField} type="text" placeholder="Name"
					className="form-control" label="Name" validate={[required]} warn={alphabet }/>
				</div>
				<div className="form-group">
					<Field name="_replyto" component={renderField} type="email" placeholder="Email"
					className="form-control" label="Email" validate={[required, email]} />
				</div>
				<div className="form-group">
					<Field name="phoneNumber" component={renderField} type="text" placeholder="Mobile No."
					className="form-control" label="Mobile No." validate={[required, number]}/>
				</div>
				<div className="form-group">
					<Field name="Subject" component={renderField} type="text" placeholder="Subject"
					className="form-control" label="Subject" validate={[required]} warn={alphabet}/>
				</div>
				<div className="form-group">
					<Field name="message" component="textarea" type="text" placeholder="Message"
					className="form-control" label="Message" rows="7" validate={required}/>
				</div>
				<div className="form-group">
					<p> Please read our <a href="/terms" to="/terms"> Terms and Condition </a> and <a href="/privacy" to="/privacy"> Privacy Policy </a> to protect your information </p>
				</div>
				<div className="form-group row">
					<div className="col-xs-12 col-sm-6 col-md-6 form-captcha">
						<Field name="recaptcha" component={Captcha}
						className="form-control" validate={required} />
					</div>
					<div className="col-xs-12 col-sm-6 col-md-6">
						<button type="submit" disabled={pristine || submitting} color="light" className="signup-btn"> Send </button>
					</div>
				</div>
			</form>
		</div>
		)
}

export default reduxForm({
	form: 'SignUp'
})(SignUpForm)
