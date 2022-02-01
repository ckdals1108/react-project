import React from 'react';
import Searchbar from '../search/searchbar';
import Board from '../board/board';
import styles from './blog.module.css';

function Blog(){
    return (
        <div className={styles.board_grid}>
            <Searchbar />
            <Board />
        </div>
    );
};

export default Blog;