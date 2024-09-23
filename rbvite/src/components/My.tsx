import { Session } from '../App.tsx';
import Login from './Login.tsx';
import Profile from './Profile.tsx';

type LoginFunction = (name: string, password: string) => void;

type Props = {
  session: Session;
  logout: () => void;
  login: (...args: Parameters<LoginFunction>) => void;
};

export default function My({ session, logout, login }: Props) {
  return (
    <>
      {session.loginUser ? (
        <Profile session={session} logout={logout} />
      ) : (
        <Login login={login} />
      )}
      <ul>
        {session.cart.map(({ id, name, price }) => (
          <li key={id}>
            {name} <small>({price.toLocaleString()})</small>
          </li>
        ))}
      </ul>
    </>
  );
}
