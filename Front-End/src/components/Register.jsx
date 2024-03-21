import { Button, Form, Input, message } from 'antd'
import axios from 'axios';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';



const rules = [
    {
        required:true,
        message:'requried'
    }
]
function Register() {
    const navigate = useNavigate()
   
    const onfinish = async(values) => {
        console.log("success",values);
        try {
           
            const response = await axios.post('https://create-blog-app-rvsw.onrender.com/user/register',values)
            
            console.log(response.data.success);
            if(response.data.success){
                message.success(response.data.message)
                navigate('/login')
            }
            else{
               throw new Error(response.data.message)
            }
        } catch (error) {
            
            message.error(error.message)
        }

    }
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-96 p-2 bg-slate-200'>
            <h1 className='text-center font-medium text-2xl'>Register</h1>
            <Form layout='vertical' onFinish={onfinish}>
                <Form.Item label="Name" name='name' rules={rules}>
                    <Input placeholder='Name'/>
                </Form.Item>
                <Form.Item label="Email" name='email' rules={rules}>
                    <Input placeholder='Email'/>
                </Form.Item>
                <Form.Item label="Password" name='password' rules={rules}>
                    <Input placeholder='password' type='password'/>
                </Form.Item>
                <Button type='primary' block htmlType='submit' className='my-2'>
                    Register
                </Button>
            </Form>
            <div className='mt-4'>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
            </div>
            
        </div>
    </div>
  )
}

export default Register