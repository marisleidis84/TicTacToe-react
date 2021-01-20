import React, { useRef, useState } from 'react';
import '../css/User.css';


const User = (props) => {
    const [user1, setUser1] = useState('');
    const [user2, setUser2] = useState('');


    const handleClick = e => {

        if (user1.trim() != '' && user2.trim() != '') {
            props.changeVisivility(false);
        }
    }


    const [inputValue, setInputValue] = useState("")

    const onChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    const onButtonClick = () => {
        console.log(inputValue)
    }

    return (
        <React.Fragment>

            <h3>Pick A Weapon</h3>
            <div className='container' id='containerUser'>
                <h3>CHOOSE YOR WEAPON</h3>
                <div className='row'>
                    <div className='col-md-12'>
                        <input className='input' type='text' placeholder='Player 1 username' id='input1' onChange={(e) => setUser1(e.target.value)} />
                        <input className='input' type='text' placeholder='Player 2 username' id='input2' onChange={(e) => setUser2(e.target.value)} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='button button1 d-inline' type='button' onClick={handleClick}>X</div>
                        <div className='button button2 d-inline' type='button' onClick={handleClick}>0</div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default User;