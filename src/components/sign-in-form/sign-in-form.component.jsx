/* eslint-disable default-case */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react"
import { createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
        const response = await signInAuthUserWithEmailAndPassword(email, password)
        console.log(response)
        resetFormFields()
    } catch(error) {
        switch(error.code) {
            case 'auth/wrong-password': 
                alert('Incorrect Password. Please try again with a different password.');
                break
            case 'auth/user-not-found':
                alert('Email is not found. Please create a new account or try again with another email.');
                break
        }
}
}
const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
}

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({...formFields, [name]: value})
    };

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span> Sign in with your email and password </span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type='email' required onChange={handleChange} name= 'email' value={email}/>
                <FormInput label='Password' type='password' required onChange={handleChange} name= 'password' value={password}/>
                <div className='buttons-container'>
                <Button type='submit'>Sign In</Button>
                <Button type='button' buttonType='google' onClick={logGoogleUser}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm