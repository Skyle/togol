import Input from '../components/ui/Input';
import { useState } from 'react';
import Button from '../components/ui/Button';
import { useRegisterUserMutation } from '../services/todoApi';

export const Register = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [registerUser] = useRegisterUserMutation();
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
          registerUser({ name, password });
        }}
      >
        Login
      </Button>
    </div>
  );
};
