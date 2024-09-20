import { ReactNode, useState } from 'react';

type TitleProps = {
  text: string;
  name: string;
};

const Title = ({ text, name }: TitleProps) => (
  <h1>
    {text} {name}
  </h1>
);

const Body = ({ children }: { children: ReactNode }) => {
  console.log('second change');
  return <div className='blue'>{children}</div>;
};

export default function Hello() {
  const [myState, setMyState] = useState(0);
  let v = 1;
  console.log('first change');
  return (
    <>
      {/* <h1>Hello</h1> */}
      <Title text='나는야~!' name='React~~' />
      <Body>
        멋쟁이 서현이 {v} - {myState}
      </Body>
      <button
        onClick={() => {
          v++;
          setMyState(myState + 1);
          console.log(v);
        }}
      >
        Click Here!
      </button>
    </>
  );
}
