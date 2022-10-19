import React from 'react';
import './BookRoom.css'
import { Link } from 'react-router-dom';


const BookRoom = () => {
    return (
        <div className='container'>
            <h1 className='my-4 text-center  '>For booking please login yourself first.</h1>
            
      
            <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card">
      <img src="https://as2.ftcdn.net/v2/jpg/00/48/05/67/1000_F_48056790_Mziu2MGTp8vKnulRp67Jp3vWXpqhV4Gi.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Single Room</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <Link to='/booking'>
        <button className='btn btn-info'>Book Now</button>
        </Link>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?w=1060&t=st=1666170834~exp=1666171434~hmac=d7fbd315246b84d73b0c47115e608c07e21914deafc3e4011db43b4dc599d7d5" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Couple Room</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

        <Link to='/booking'>
        <button className='btn btn-info'>Book Now</button>
        </Link>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://img.freepik.com/premium-photo/hotel-room_321831-251.jpg?w=1060" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Family Room</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <Link to='/booking'>
        <button className='btn btn-info'>Book Now</button>
        </Link>
      </div>
    </div>
  </div>
  
</div>
   
        </div>
    );
};

export default BookRoom;