import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import React, {useRef} from 'react';
import Getlastid from '../connect/getlastid';
import styles from './searchbar.module.css';
import axios from 'axios';

function Searchbar(){

    function handleclick(e) {
        e.preventDefault();
        const text = textBox.current.value;
        textBox.current.value = "";
        axios.post(`http://localhost:3001/text`,{
            id:Getlastid()+1,
            line:text
        }).then(Response => {

        });
    }

    

    const textBox = useRef(null);

    return (
        <form onSubmit={handleclick} className={styles.searchbar_form}>
            <textarea id={styles.textbox} ref={textBox}/>&nbsp;<input type="password" id={styles.password}/><button id={styles.button}>보내기</button><br/>
        </form>
        
    );
};

export default Searchbar;