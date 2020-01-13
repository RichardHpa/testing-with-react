// @flow
import React, { Component } from 'react';
import './App.css';
import courses from '../data/courses.json';
import Grid from './listings/Grid';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {courses};
    }

    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="blue lighten-2">
                        <div className="nav-wrapper">
                            <a href="./" className="brand-logo center">Courses</a>
                        </div>
                        </nav>
                </div>
                <div>
                    <Grid items={this.state.courses}/>
                </div>
            </div>
        );
    }
}
