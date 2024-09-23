import { Session } from '../App.tsx';
// import Login from './Login.tsx';

type Props = {
  session: Session;
  logout: () => void;
};

export default function Profile({ session, logout }: Props) {
  return (
    <div>
      <h3>{session.loginUser?.name} Logined</h3>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}
