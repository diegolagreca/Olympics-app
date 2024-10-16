import React from 'react';
import { useAuth } from './AuthContext';
import LogOffButton from './LogOffButton';

const Header = () => {
    const { isAuthenticated, currentUser } = useAuth();

    return (
        <div className="navbar-end">
            {isAuthenticated && (
                <div className="navbar-item">
                    <p>Bienvenido, {currentUser?.username}</p>
                    <LogOffButton />
                </div>
            )}
        </div>

    );
};

export default Header;
