import React from 'react';


const Scroll = (props) => {
    
    return(
        <div style={{ overflowY: 'scroll', border: '2px solid #75c7db', margin: '30px', height: '700px' }} >
            {props.children}
        </div>
    );
}

export default Scroll;