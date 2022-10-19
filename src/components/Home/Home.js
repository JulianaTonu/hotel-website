import React, { useContext } from 'react';
import { AuthContext } from '../../UserContext/UserContext';
// import Carousel from 'react-bootstrap/Carousel'; 
import './Home.css'

const Home = () => {
    const {user} =useContext(AuthContext)
    return (
        <div className=' text-center'>
           
           <p>Welcome : {user?.email}</p>
<div>
    <img src="https://img.freepik.com/free-photo/modern-luxury-bedroom-suite-bathroom_105762-1791.jpg?w=1060&t=st=1666167939~exp=1666168539~hmac=e29222e052eab41c04b30626a0e6b93a56505ad80a398fc85fdfcde3793a24ef" alt="" className="img"  />
</div>
           
        </div>
    );
};

export default Home;