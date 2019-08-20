import React,{Component} from 'react';
import {
    Link,
} from 'react-router-dom';

class Nutrical extends Component {
    render() {
        return <div className="boxMain">
            <div className="box1" id="box"><Link to='/Piramida'>Piramida żywienia</Link></div>
            <div className="box2" id="box"><Link to='/Protein'>Białka</Link></div>
            <div className="box3" id='box'><Link to='/Carbohydrates'>Węglowodany</Link></div>
            <div className="box4" id='box'><Link to='/Fats'>Tłuszcze</Link></div>
            <div className="box5" id='box'><Link to='/Fiber'>Błonnik pokarmowy</Link></div>
            <div className="box6" id='box'><Link to='/Vitamin'>Witaminy</Link></div>
            <div className="box7" id='box'><Link to='/Mineral'>Składniki mineralne</Link></div>
            </div>
    }
}

export default Nutrical;