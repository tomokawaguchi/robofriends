import React from 'react';
import Card from './Card';


const CardList = ({ data }) => {
    // if(true) {
    //     throw new Error("Nooooo");
    // }
    return (
        <>
            {
                data.map((each, i) => {
                    return <Card key={i} id={each.id} name={each.name} email={each.email} />
                })
            }
        </>
    );
}

export default CardList;