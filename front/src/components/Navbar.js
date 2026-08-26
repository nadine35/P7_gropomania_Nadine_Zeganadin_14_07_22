import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UidContext } from './AppContext';
import Logout from './Log/Logout';

const Navbar = () => {
    const uid = useContext(UidContext);
    const userData = useSelector((state) => state.userReducer);

    return (
        <nav>
            <div className="nav-container">

                <div className="logo">
                    <NavLink to="/">
                        <div className="logo">
                            <h3>Groupomania</h3>

                            <div className="logo-react">
                                <img
                                    src="./img/icons/2000px-React-icon.svg_.webp"
                                    alt="logo react"
                                />
                            </div>
                        </div>
                    </NavLink>
                </div>

                {uid ? (
                    <ul className="nav-links">

                        <li>
                            <NavLink
                                className="family-link"
                                to="/family"
                            >
                                Ma famille
                            </NavLink>
                        </li>

                        <li className="welcome">
                            <NavLink to="/profil">
                                <h5>
                                    Bienvenue {userData.pseudo}
                                </h5>
                            </NavLink>
                        </li>

                        <Logout />

                    </ul>
                ) : (
                    <ul>
                        <li>
                            <NavLink to="/profil">
                                <img
                                    src="./img/icons/login.svg"
                                    alt="login"
                                />
                            </NavLink>
                        </li>
                    </ul>
                )}

            </div>
        </nav>
    );
};

export default Navbar;