import React from "react"
import { navigate } from 'gatsby-link'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
}
  
export default () => (
<Layout>
<SEO title="Contact 2" />
  <Formik
    initialValues={{
      name: '',
      email: '',
      message: '',
    }}
    onSubmit={      
		(values, actions) => {
			fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: encode({ "form-name": "contact-demo", ...values })
				})
				.then(() => navigate('/thanks/'))
				.catch(() => {
					alert('Error');
				})
				.finally(() => actions.setSubmitting(false))
		}
	}
    validate={values => {
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		const errors = {};
		if(!values.name) {
			errors.name = 'Name Required'
		}
		if(!values.email || !emailRegex.test(values.email)) {
			errors.email = 'Valid Email Required'
		}
		if(!values.message) {
			errors.message = 'Message Required'
		}      return errors;
	}}  
  >
  {() => (
    <Form name="contact-demo" data-netlify={true} >
		<p>
		  <label htmlFor="name">Your name: </label>
		  <br />
		  <Field name="name" />
		  <ErrorMessage name="name" />
		</p>  
		<p>
		  <label htmlFor="email">Your email: </label>
		  <br />
		  <Field name="email" />
		  <ErrorMessage name="email" />
		</p>
		<p>
		  <label htmlFor="message">Message: </label>
		  <br />
		  <Field name="message" component="textarea"/>
		  <ErrorMessage name="message" />
		</p>
		<p>
		  <button type="submit">Send</button>
		</p>
    </Form>
  )}
  </Formik>
  <Link to="/">Go to home page</Link> <br />
  </Layout>
  
)