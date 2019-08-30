import React from 'react';
import './Form.css';

const Form =  ({todo, myClick, myChange, myPress}) => {
    return (
        <div className="form">
            <input value={todo} onChange={myChange} onKeyPress={myPress} />
            <div className="create-button" onClick={myClick}>
                추가
            </div>
        </div>
    );
};

export default Form;