import { Button, Form, Input, message } from 'antd'
import axios from 'axios';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';



const rules = [
    {
        required:true,
        message:'requried'
    }
]
function Login() {
    const navigate = useNavigate()
    
    const onfinish = async(values) => {
        
        try {
           
            const response = await axios.post('https://create-blog-app-rvsw.onrender.com/user/login',values)
            //console.log(response.data.success);
            
            if(response.data.success){
                message.success(response.data.message)
                localStorage.setItem('token',response.data.data)
                window.location.href = '/'
                //navigate('/')
            }
            else{
               throw new Error(response.data.message)
            }
        } catch (error) {
            
            message.error(error.message)
        }

    }
    useEffect(()=>{
        if(localStorage.getItem('token')){
            navigate('/')
        }
    },[])
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-96 p-2 bg-slate-200'>
            <h1 className='text-center font-medium text-2xl'>Login</h1>
            <Form layout='vertical' onFinish={onfinish}>
                <Form.Item label="Email" name='email' rules={rules}>
                    <Input placeholder='Email'/>
                </Form.Item>
                <Form.Item label="Password" name='password' rules={rules}>
                    <Input placeholder='password' type='password'/>
                </Form.Item>
                <Button type='primary' block htmlType='submit' className='my-2'>
                    Login
                </Button>
            </Form>
            <div className='mt-3'>
                <p>Don't have an account? <Link to='/register'>Register</Link></p>
            </div>
            <div className=''>
                <p>Skip Login <Link to='/'>Skip</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login