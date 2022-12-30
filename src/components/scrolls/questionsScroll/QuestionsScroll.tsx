import React from 'react';
import './questionsScroll.scss';

import * as yup from 'yup';
import ok_mark_icon from '../../../assets/icons/ok_mark_icon.png';
import { Form, Formik } from 'formik';
import LoginFormikInput from '../../FormikInputs/FormikQuastionInput';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import FormikTextArea from '../../FormikInputs/FormikQuastionTextArea';


export const QuestionsScroll = () => {

    type initialFormValuesTypes = {
        name: string,
        email: string,
        message: string,
    }

    const initialFormValues:initialFormValuesTypes = {
        name: '',
        email: '',
        message: '',
    }

    const validateSchema = yup.object().shape({
        name: yup.string().required('Field is required!').min(3, 'Too short!').max(18, 'Too long!'),
        email: yup.string().required('Field is required!').min(4, 'unreliable password!').max(50, 'password is so loong..'),
        message: yup.string().required('Field is required!').min(5, 'Message too short!').max(300, 'Message too long!'),
    })

  return (
    <section className="questions">

        <div className="questions__wrapper">
            <div className="questions__content">

                <h1 className="questions__header main-header-big">
                    Ask a <span className='bg__border'>Question</span>
                </h1>

                <div className="questions__form">
                    <Formik initialValues={initialFormValues} validationSchema={validateSchema} onSubmit={(formValues) => console.log(formValues)}>
                        <Form className='form__main'>
                            <div className="form__inf">
                                <div className="form__input-wrap">
                                    <AiOutlineUser className='form__icon'/>
                                    <LoginFormikInput name='name' placeholder='Name'/>
                                </div>
                                <div className="form__input-wrap">
                                    <AiOutlineMail className='form__icon'/>
                                    <LoginFormikInput name='email' placeholder='Email'/>
                                </div>
                                <div className="form__textare-wrap">
                                    <AiOutlineMail className='form__icon form__icon-textarea'/>
                                    <FormikTextArea name='message' placeholder='Enter your message'/>
                                </div>
                            </div>
                            <button className='form__button' type='submit'> 
                                <AiOutlineMail className='form__icon-submit'/>
                                <p className='form__button--text'>Send</p> 
                            </button>
                        </Form>
                    </Formik>
                    <div className="questions__addition">
                        <div className="questions__addition--ok">
                            <img src={ok_mark_icon} alt="ok marker"/>
                        </div>
                        <p className="questions__addition--text">We will respond within one business day.</p>
                    </div>
                </div>
            </div>
            <div className="questions__message"></div>
        </div>
    </section>
  )
}
