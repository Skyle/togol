import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import TextLink from '../components/ui/TextLink';
import { useLoginUserMutation } from '../services/todoApi';
import { setToken } from '../services/userSlice';

function LoginPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useLoginUserMutation();
  let navigate = useNavigate();
  const dispatch = useDispatch();
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
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password...'
      />
      <Button
        onClick={() => {
          loginUser({ name, password })
            .then((res: any) => {
              if (res.data.token) {
                dispatch(setToken(res.data.token));
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
      <div>
        <p className='my-3'>Don't have an account? please</p>
        <TextLink route='/register'>SignUp</TextLink>
      </div>
    </div>
  );
}

export default LoginPage;
