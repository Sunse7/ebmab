import { Button } from '../button/Button';
import './style.scss';

export function LoginModal({handleClick, setUsername, setPassword}) {
  return (
    <section className='login'>
      <label htmlFor="username">Användarnamn</label>
      <input type="text" id='username' onChange={(e) => setUsername(e.target.value)}/>
      <label htmlFor="password">Lösenord</label>
      <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
      <Button text='Logga in' handleClick={handleClick} />
    </section>
  );
}
