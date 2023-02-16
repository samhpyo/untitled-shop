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
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
import { SignUpContainer } from "./sign-up-form.styles"

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword} = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

const handleSubmit = async(e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        alert('Passwords do not match')
        return
    }
    try {
        const {user} = await createAuthUserWithEmailAndPassword(email, password)
        await createUserDocumentFromAuth(user, {displayName})
        resetFormFields()
        alert('New account has been created')
    } catch(error) {
        switch(error.code) {
            case 'auth/weak-password': 
                alert('Password is to weak. Password should be at least 6 characters.')
                break
            case 'auth/email-already-in-use':
                alert('Cannot create user. Email is already in use')
                break
        }    
}
}

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({...formFields, [name]: value})
    };

    return (
        <SignUpContainer>
            <h2>Do not have an account?</h2>
            <span> Sign up with your email and password </span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' type='text' required onChange={handleChange} name= 'displayName' value={displayName}/>
                <FormInput label='Email' type='email' required onChange={handleChange} name= 'email' value={email}/>
                <FormInput label='Password' type='password' required onChange={handleChange} name= 'password' value={password}/>
                <FormInput label='Confirm Password' type='password' required onChange={handleChange} name= 'confirmPassword' value={confirmPassword}/>
                <Button type='submit'>Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm