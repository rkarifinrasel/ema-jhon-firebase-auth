import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const {user,signOutUser}=useContext(AuthContext)
const handleSignOut=()=>{
    signOutUser()
    .then(result=>{
        console.log(result)
    })
    .catch(error=>{
        console.log(error.message)
    })
}
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
                {
                    user &&
                   
                        <span className='user-nameColor'>{user.email}<button onClick={handleSignOut}>Sign Out</button></span>
                        
                  
                    


                }
        
            </div>
        </nav>
    );
};

export default Header;