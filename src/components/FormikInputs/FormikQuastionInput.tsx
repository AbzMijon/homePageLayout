import React from "react";
import { useField } from "formik";
import './formik.scss';

function LoginFormikInput(props:any) {
    
	const [field, meta, helpers] = useField(props.name);
    
	return (
        <div className='field'>
            <input className={meta.touched && meta.error ? 'formik__input formik__input--error' : 'formik__input'} {...props} {...field} />
            {meta.touched && meta.error && (
                <p className='field__error'>{meta.error}</p>
            )}
        </div>
	);
}

export default LoginFormikInput;