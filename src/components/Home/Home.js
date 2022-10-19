import React, { useContext } from 'react';
import { AuthContext } from '../../UserContext/UserContext';

const Home = () => {
    const {user} =useContext(AuthContext)
    return (
        <div>
           <h1> This is home</h1>
           <h2>Welcome : {user?.email}</h2>
        </div>
    );
};

export default Home;