import Input from '../components/ui/Input';
import { useState } from 'react';
import Button from '../components/ui/Button';
import { useRegisterUserMutation } from '../services/todoApi';
import { Link, useNavigate } from 'react-router-dom';

export const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [registerUser] = useRegisterUserMutation();
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
          registerUser({ name, password }).then((response) => {
            if (response) {
              navigate('/');
            }
          });
        }}
      >
        SignUp
      </Button>
      <p className='my-4'>
        Already have an accout? please
        <p className='my-2'>
          <Link className='font-medium hover:text-red-900' to='/login'>
            Login
          </Link>
        </p>
      </p>
    </div>
  );
};
