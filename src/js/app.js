import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Leading from './leading.js';
import Navigation from './header.js';
import Section from './section.js';
import Nutrical from './nutrical.js';
import News from './news.js';
import Quiz from './Quiz/quiz.js'
import Quiz1 from './Quiz1/quiz1.js'
import Quiz2 from './Quiz2/quiz2.js'
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
                            <Route exact path='/' component={Section} />
                            <Route exact path='/leading' component={Leading} />
                            <Route exact path='/nutrical' component={Nutrical} />
                            <Route exact path='/piramida' component={Piramida} />
                            <Route exact path='/protein' component={Protein} />
                            <Route exact path='/carbohydrates' component={Carbohydrates} />
                            <Route exact path='/fats' component={Fats} />
                            <Route exact path='/fiber' component={Fiber} />
                            <Route exact path='/eatFiber' component={EatFiber} />
                            <Route exact path='/vitamin' component={Vitamin} />
                            <Route exact path='/mineral' component={Mineral} />
                            <Route exact path='/news' component={News} />
                            <Route exact path='/quiz' component={Quiz} />
                            <Route exact path='/quiz1' component={Quiz1} />
                            <Route exact path='/quiz2' component={Quiz2} />
                            <Route exact path='/product' component={Product} />
                        </Switch>
                        </section>
                    </>
                </HashRouter>
            </section>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("app"));

