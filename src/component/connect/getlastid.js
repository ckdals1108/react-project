import React, { useEffect, useState } from 'react';

function Getlastid(){

    let lastid;

    fetch("http://localhost:3001/text")
    .then(res => {
        return res.json();
    })
    .then(data => {
        lastid = data[data.length-1].id
        console.log(lastid);
    });
    
    return lastid;
};

export default Getlastid;