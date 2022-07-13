import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useLoginUserMutation } from '../services/todoItem';

type Props = {};

function LoginPage({}: Props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useLoginUserMutation();
  let navigate = useNavigate();
  return (
    <div className='flex flex-col'>
      <label>Name</label>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Name...'
      />
      <label>Password</label>
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password...'
      />
      <Button
        onClick={() => {
          loginUser({ name, password })
            .then((res: any) => {
              if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                navigate('/');
              }
            })
            .catch((err: any) => {
              if (err) {
                console.log('Login fail');
              }
            });
        }}
      >
        Login
      </Button>
      <p className='my-4'>
        Don't have an account? please
        <p className='my-2'>
          <Link className='font-medium hover:text-red-900' to='/register'>
            SignUp
          </Link>
        </p>
      </p>
    </div>
  );
}

export default LoginPage;
