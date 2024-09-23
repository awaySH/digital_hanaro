import { useState, FormEvent } from 'react';

type LoginFunction = (name: string, password: string) => void;

interface LoginProps {
  login: LoginFunction;
}

export default function Login({ login }: LoginProps) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(name, password);
    // 폼 제출 후 입력 필드 초기화
    setName('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        Name:{' '}
        <input
          type='text'
          placeholder='Name...'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        Password:{' '}
        <input
          type='password'
          placeholder='Password...'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit'>Sign in</button>
      </form>
    </>
  );
}
