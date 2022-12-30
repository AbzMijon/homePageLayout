import React from "react";
import { useField } from "formik";
import './formik.scss';

function FormikTextArea(props:any) {
    
	const [field, meta, helpers] = useField(props.name);
    
	return (
        <div className='field'>
            <textarea className={meta.touched && meta.error ? 'formik__textarea formik__textarea--error' : 'formik__textarea'} {...props} {...field} />
            {meta.touched && meta.error && (
                <p className='field__error'>{meta.error}</p>
            )}
        </div>
	);
}

export default FormikTextArea;