import React, { Component } from 'react';
import dummy from "../../../db/data.json";
import styles from './line.module.css'

class Line extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            line : [], 
        }
    };

    componentDidMount() {
        fetch("http://localhost:3001/text")
        .then(res => {
            return res.json();
        })
        .then(data => {
            this.setState({line:this.state.line.concat(data)});
        })
    }
    
    render() {
        return (
            <div className={styles.list_form}>
                <ul>
                    {this.state.line.map(line =>(
                        [<li key={line.id}>{line.line}</li>,<br/>]
                    ))}
                </ul>
            </div>
        );
    };
}

export default Line;