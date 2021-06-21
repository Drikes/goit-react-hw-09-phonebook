import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserEmail, logout } from '../../redux/auth';
import noAvatar from '../../image/icons-user-no-avatar.png';

import './UserMenu.css'


export default function UserMenu() {

  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);

    const onLogout = useCallback(() => dispatch(logout()), [dispatch]);

  return (
    <div className="UserMenu">        
        <img src={noAvatar} alt="" width="30" />   
        <span>{email}</span>
        <button type="button" onClick={onLogout} className="btn">Sign out</button>
    </div>   
  )
}
