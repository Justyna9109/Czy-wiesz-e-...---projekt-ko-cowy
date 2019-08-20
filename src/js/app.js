import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Navigation from './header.js';
import Nutrical from './nutrical.js';
import News from './news.js';
import Product from './product.js'
import Piramida from './piramida.js'
import Protein from './bialka.js'
import Carbohydrates from './carbohydrates.js'
import Fats from './fats.js'
import Fiber from './fiber.js'
import EatFiber from './eatfiber.js'
import Vitamin from './vitamin.js'
import Mineral from './mineral.js'
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import './../sass/style.scss'; // adres do głównego pliku SASS

const App =()=> <Main/>;

class Main extends Component{
    render() {
        return(
            <section className="container">
                <HashRouter>
                    <>
                        <header>
                        <Navigation/>
                        </header>
                        <section className='sectionTwo'>
                        <Switch>
                            <Route extact path='/nutrical' component={Nutrical} />
                            <Route extact path='/piramida' component={Piramida} />
                            <Route extact path='/protein' component={Protein} />
                            <Route extact path='/carbohydrates' component={Carbohydrates} />
                            <Route extact path='/fats' component={Fats} />
                            <Route extact path='/fiber' component={Fiber} />
                            <Route extact path='/eatFiber' component={EatFiber} />
                            <Route extact path='/vitamin' component={Vitamin} />
                            <Route extact path='/mineral' component={Mineral} />
                            <Route extact path='/news' component={News} />
                            <Route extact path='/product' component={Product} />
                        </Switch>
                        </section>
                    </>
                </HashRouter>
            </section>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));

