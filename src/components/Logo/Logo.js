import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png'
const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt style={{display:'flex', justifyContent: 'center', alignItems:'center', height: 250, width: 250}} className="Tilt br2 shadow-2" options={{ max : 55 }} >
                    <div  className="Tilt-inner"> <img  alt= 'logo' src ={brain}/>  </div>
            </Tilt>
        </div>
    );
}

export default Logo;
