import React,{Component} from 'react';
import {
    NavLink,
} from 'react-router-dom';

class Navigation extends Component{
    render() {
        return (<>
                <h1>Czy wiesz, że ... ?</h1>

                <ul className="menu">
                    <li><NavLink exact activeClassName="active" to="/Nutrical">Składniki odżywcze</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/News">Ciekawostki</NavLink></li>
                    <li><NavLink exact activeClassName="active" to="/Product">Jak wybrać produkt?</NavLink></li>
                </ul>
            </>
        )
    }
}

export default Navigation;
