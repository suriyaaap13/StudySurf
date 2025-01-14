import React from 'react';
import RegisterLayout from '../../components/layout/RegisterLayout';
import onlineStudent from '../../../public/online-student.png';
import StudentIcon from '../../components/icons/StudentIcon';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";


export default function StudentSelectClass() {
    
  return (
    <RegisterLayout >
        <img src = {onlineStudent} className = "mt-16 mb-7"/>
        <StudentIcon/>
        <h2 className='text-xl'>Classroom</h2>
        
        
        
        <p className='text-xs text-gray-500 px-5 text-center my-4'>You are required to enter the classroom code that you would like to join be careful when with the class code</p>
        
        
        
        
        
        {/* Form that takes user Class code */}
        <Formik
            initialValues={{
                classCode: "",
            }}
            validationSchema={Yup.object({
                classCode: Yup.string().required("Please enter your class code")
            })}
            onSubmit={(values, { setSubmiting }) => {
                console.table(values);
                setSubmiting(false);
            }}
        >
            <Form className="w-full max-w-md px-7 flex flex-col my-7">
                <label
                className="mt-4 text-sm text-gray-500 w-full flex bg-white py-2 pl-2"
                htmlFor="fullName"
                >
                    Class Code<span>*</span>
                </label>
                <Field 
                    style={{ outline: "1px", outlineColor: "black" }}
                    name="classCode" 
                    type="text" 
                    className = "p-2"
                />
                <button
                    className=" py-4 mt-20 mx-auto w-1/2 bg-orange-400 text-white text-lg rounded-xl hover:bg-orange-500"
                    type="submit"
                >
                    Submit
                </button>
            </Form>
        </Formik>
        
    </RegisterLayout>
  )
}
