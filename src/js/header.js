import React,{Component} from 'react';
import {
    NavLink,
} from 'react-router-dom';

class Navigation extends Component{
    render() {
        return (<>
                <div className='logo'>
                <h1><NavLink className='logotext' to="/">Czy wiesz, że ... ?</NavLink></h1>
                </div>
                <ul className="menu">
                    <li><NavLink exact className="anime" activeClassName="active" to="/Leading">Wartości odżywcze</NavLink></li>
                    <li><NavLink exact className="anime1" activeClassName="active" to="/Nutrical">Składniki odżywcze</NavLink></li>
                    <li><NavLink exact className="anime2" activeClassName="active" to="/News">Quiz</NavLink></li>
                    <li><NavLink exact className="anime3" activeClassName="active" to="/Product">Jak wybrać produkt?</NavLink></li>
                </ul>
            </>
        )
    }
}

export default Navigation;
