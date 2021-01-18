import React from 'react';
import '../css/User.css';
const User = () => {
    return (
        <>
            <h3>Pick A Weapon</h3>
            <div className='container' id='containerUser'>
                <h3>CHOOSE YOR WEAPON</h3>
                <div className='row'>
                    <div className='col-md-12'>
                        <input className='input' type='text' placeholder='Player 1 username'/>
                        <input className='input' type='text' placeholder='Player 2 username'/>
                    </div>
                    
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='button button1 d-inline' type='button'>X</div>
                        <div className='button button2 d-inline' type='button'>0</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User;