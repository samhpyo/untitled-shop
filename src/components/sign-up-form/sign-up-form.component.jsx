/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from "react"
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword} = formFields;

const handleSubmit = async(e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        alert('passwords do not match')
        return
    }
    try {
        const response = await createAuthUserWithEmailAndPassword(email, password)
        console.log(response)
    } catch(error) {
        console.log('error', error)
    }
}

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({...formFields, [name]: value})
    };

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label> Display Name </label>
                <input type='text' required onChange={handleChange} name= 'displayName' value={displayName}/>

                <label> Email </label>
                <input type='email' required onChange={handleChange} name= 'email' value={email}/>

                <label> Password </label>
                <input type='password' required onChange={handleChange} name= 'password' value={password}/>

                <label> Confirm Password </label>
                <input type='password' required onChange={handleChange} name= 'confirmPassword' value={confirmPassword}/>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm