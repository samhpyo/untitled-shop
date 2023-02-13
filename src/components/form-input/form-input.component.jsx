/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */

import './form-input.styles.scss'

const FormInput = ({label, ...otherProps}) => {
    return (
        <div className='group'>
            <input className='form-input' {...otherProps} />
            {label && (
                <label className={`${otherProps.value.length ? 'shrink' : null} form-input-label`}> {label} </label>
                )
            }
        </div>
    )
}

export default FormInput