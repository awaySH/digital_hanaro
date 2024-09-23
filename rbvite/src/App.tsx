import { useState } from 'react';
import Hello from './components/Hello';
import My from './components/My';

const SampleSession = {
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

type LoginUser = {
  id: number;
  name: string;
  password?: string;
};
type CartItem = { id: number; name: string; price: number };
export type Session = { loginUser: LoginUser | null; cart: CartItem[] };

function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);

  const plusCount = () => setCount(count + 1);
  const minusCount = () => setCount(count - 1);

  const logout = () => setSession({ ...session, loginUser: null });

  const login = (name: string, password: string) => {
    const id = Date.now();
    setSession({ ...session, loginUser: { id, name, password } });
  };

  console.log('Apppppp');

  return (
    <div className='flex min-h-screen flex-col justify-center bg-gray-100 py-6 sm:py-12'>
      <div className='relative py-3 sm:mx-auto sm:max-w-xl'>
        <div className='absolute inset-0 -skew-y-6 transform bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl'></div>
        <div className='relative bg-white px-4 py-10 shadow-xl sm:rounded-3xl sm:p-20'>
          <Hello
            name='홍길동'
            age={33}
            count={count}
            plusCount={plusCount}
            minusCount={minusCount}
          />
          <hr className='my-8 border-gray-300' />
          <pre className='font-mono text-sm text-gray-500'>
            {JSON.stringify(session.loginUser, null, 2)}
          </pre>
          <My session={session} logout={logout} login={login} />
          <div className='mt-10'>
            <button
              className='w-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-lg text-white shadow-md hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              onClick={() => {
                setCount((count) => count + 1);
                if (session.loginUser) session.loginUser.name = 'XXX' + count;
                console.table(session.loginUser);
              }}
            >
              App.count is {count}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
