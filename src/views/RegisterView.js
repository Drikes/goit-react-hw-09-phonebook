import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/auth';


export default function RegisterView() {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback(event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn('error');
    }
  }, []);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      dispatch(signup({ name, email, password }));

      setName('');
      setEmail('');
      setPassword('');
    },
    [dispatch, name, email, password],
  );

  return (
    <section className="sectionForm">
      <div >

        <form onSubmit={handleSubmit} className="Form">
          <div>
            <h1>Registration</h1>
          </div>
          <label className="Label">Name</label>
              
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
            

          <label className="Label">Email</label>
              
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
            
          <label className="Label">Password</label>
              
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
            
          <button type="submit" className="btn btnForm">Submit</button>
        </form>

      </div>
    </section>
  )

}
