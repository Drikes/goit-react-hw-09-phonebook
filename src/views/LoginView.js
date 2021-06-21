import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth';


export default function LoginView() {
  
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = useCallback(event => {
    setEmail(event.target.value);
  }, []);

  const handleChangePassword = useCallback(event => {
    setPassword(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      dispatch(login({ email, password }));

      setEmail('');
      setPassword('');
    },
    [dispatch, email, password],
  );

  return (
    <section className="sectionForm">

      <form onSubmit={handleSubmit} className="Form">
        <div>
          <h1>Login</h1>
        </div>
        <label className="Label">Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
        />
            
        <label className="Label">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
          autoComplete="off"
        />

        <button type="submit" className="btn btnForm">Log in</button>
      </form>
    </section>
  )
  
}
