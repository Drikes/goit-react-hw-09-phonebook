import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

import './UserMenu.css'

export default function Navigation() {
    const isAuthenticated = useSelector(getIsAuthenticated)
    return (
        <ul className="navigation">
            <li> <NavLink
                    exact to={routes.home}
                    className="NavLink"
                    activeClassName="NavLink--active"
                >
                    Home
                </NavLink>
            </li>
            
            {isAuthenticated && (
                <li> <NavLink
                        to={routes.contacts}
                        className="NavLink"
                        activeClassName="NavLink--active"
                    >
                        Contacts
                    </NavLink>
                </li>
            ) }


        </ul>
    );   
}