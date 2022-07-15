import React from 'react'
import { Link } from "react-router-dom";
import book from "../../assets/book.jpg";
import "./Home.css";

function Home() {
   return (

      <div className='Container'>

         <div className='Content'>
            <div className='SubContent'>
               <h1>Book Catolog</h1>
               <p>Manage your Books with Ease</p>
               <button type='button' className='btn btn-outline-dark'>
                  <Link to='/register'>Get started</Link>
               </button>
               <img src={book} alt='profile' />
            </div>
         </div>
      </div>

   );
}
export default Home;