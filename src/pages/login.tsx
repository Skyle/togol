import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useLoginUserMutation } from '../services/todoApi';

type Props = {};

function LoginPage({}: Props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useLoginUserMutation();
  let navigate = useNavigate();
  return (
    <div>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Name...'
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password...'
      />
      <Button
        onClick={() => {
          loginUser({ name, password }).then((res: any) => {
            if (res.data.token) {
              localStorage.setItem('token', res.data.token);
              navigate('/');
            }
          });
        }}
      >
        Login
      </Button>
    </div>
  );
}

export default LoginPage;
