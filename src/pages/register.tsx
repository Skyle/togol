import Input from '../components/ui/Input';
import { useState } from 'react';
import Button from '../components/ui/Button';
import { useRegisterUserMutation } from '../services/todoApi';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../services/userSlice';
import TextLink from '../components/ui/TextLink';

export const Register = () => {
  const dispatch = useDispatch();
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
          registerUser({ name, password }).then((response: any) => {
            if (response.data.token) {
              dispatch(setToken(response.data.token));

              navigate('/');
            }
          });
        }}
      >
        SignUp
      </Button>
      <div>
        <p className='my-3'>Already have an accout? please</p>
        <TextLink route='/login'>Login</TextLink>
      </div>
    </div>
  );
};
