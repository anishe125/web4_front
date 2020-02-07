import React, {Component} from 'react';
import {MyCity} from "./MyCity";
import Favorite from "./Favorite"

export class Page extends Component {
    render() {
        return (
            <div >
                <MyCity/>
                <Favorite/>
            </div>
        );
    }
}
