import { Button, Form, Input, notification } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';


const USER_LOGIN = {
    username: 'admin',
    password: 'admin'
}

const LoginPage = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate();

    const handleFinish = () => {
        form.validateFields()
        .then((values) => {
            console.log(values);
            if(values.username === USER_LOGIN.username && values.password === USER_LOGIN.password) {
            navigate("/list")
                notification.success({message: 'Thành công', description: "Login thành công"})

            } else {
                 notification.error({ message: 'Thất bại', description: "Đăng nhập thất bại" })
            }
        })
        .catch((err) => console.error(err))
    }

    const handleReset = () => {
        form.resetFields();
    }
  return (
    <div style={{width: '350px'}}>
       <Form
        form={form}
        labelCol={{span: 8}} wrapperCol={{span: 16}} labelAlign='left'
        onFinish={handleFinish}
        >
            <Form.Item label={"User name"} name={'username'} rules={
                [
                    {required: true, message: 'Please enter username'}
                ]
            }>
                <Input placeholder='Username for you?' />
            </Form.Item>
            <Form.Item label={"Password"} name={'password'} rules={
                [
                    {required: true, message: "Please enter password"}
                ]
            }>
                <Input type='password' placeholder='Password cua you' />
            </Form.Item>
            <Form.Item>
                <Button htmlType='submit' type='primary'>Đăng nhập</Button>
                <Button type='dashed' onClick={handleReset} style={{marginLeft: "10px"}}>Reset</Button>
            </Form.Item>
       </Form>
    </div>
  )
}

export default LoginPage