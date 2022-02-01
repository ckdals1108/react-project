import React from 'react';
import Line from './line/line';
import styles from './board.module.css'

function Board(lastid) {
    return (
        <div className={styles.board_form}>
            <Line />
        </div>
    );
};

export default Board;