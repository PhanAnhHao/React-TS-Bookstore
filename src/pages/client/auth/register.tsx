import type { FormProps } from 'antd';
import { Button, Divider, Form, Input } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./register.scss";

type FieldType = {
    fullName: string;
    email: string;
    password: string;
    phone: string;
};


const RegisterPage = () => {

    const [isSubmit, setIsSubmit] = useState(false);

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    // const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    // };

    return (
        <div className='register-page'>
            <main className="main">
                <div className="container">
                    <section className='wrapper'>
                        <div className="heading">
                            <h2 className='text text-large'>Đăng kí tài khoản</h2>
                            <Divider />
                        </div>
                        <Form
                            name="form-register"
                            onFinish={onFinish}
                            autoComplete="off"
                        >
                            <Form.Item<FieldType>
                                labelCol={{ span: 24 }} // whole column
                                label="Họ tên"
                                name="fullName"
                                rules={[{ required: true, message: 'Vui lòng nhập họ tên của bạn!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item<FieldType>
                                labelCol={{ span: 24 }} // whole column
                                label="Email"
                                name="email"
                                rules={[
                                    { required: true, message: 'Vui lòng nhập email của bạn!' },
                                    { type: 'email', message: "Email không đúng định dạng!" }
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item<FieldType>
                                labelCol={{ span: 24 }} // whole column
                                label="Mật khẩu"
                                name="password"
                                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu của bạn!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item<FieldType>
                                labelCol={{ span: 24 }} // whole column
                                label="Phone"
                                name="phone"
                                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại của bạn!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item label={null}>
                                <Button type="primary" htmlType="submit" loading={isSubmit}>
                                    Submit
                                </Button>
                            </Form.Item>
                            <Divider>Or</Divider>
                            <p className="text text-normal" style={{ textAlign: "center" }}>
                                Đã có tài khoản ?
                                <span>
                                    <Link to='/login' > Đăng Nhập </Link>
                                </span>
                            </p>
                        </Form>
                    </section>
                </div>
            </main>
        </div>
    )
};

export default RegisterPage;