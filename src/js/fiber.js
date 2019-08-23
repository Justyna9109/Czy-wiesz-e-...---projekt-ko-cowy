import React,{Component} from 'react';
import {
    Link,
} from 'react-router-dom';


class Fiber extends Component{
    render() {
        return <section className="fiber">
            <h1>Błonnik pokarmowy</h1>
            <p>Włókno pokarmowe, zwane również błonnikiem pokarmowym, to roślinne wielocukry i ligniny,
                oporne na działanie enzymów trawiennych przewodu pokarmowego człowieka.</p>
            <div className='pictureFiber'>
                <img src='src/images/image4.png'/>
            </div>
            <ul className='fiberss'><a className='fibers'> W błonniku można wyróżnić frakcje nierozpuszczalne i rozpuszczalne w wodzie,
                frakcje te różnią się działaniem fizjologicznym.</a>
                <li>Błonnik nierozpuszczalny (celuloza i lignina) - nie rozpuszcza się w wodzie, słabych kwasach i zasadach.
                    Frakcje nierozpuszczalne błonnika mają korzystny wpływ na chłonięcie wody i zwiększanie objętości stolca,
                    co z kolei pozytywnie wpływa na perystaltykę jelit i prawidłowe wypróżnienia.</li>
                <li>Błonnik rozpuszczalny to pektyny, gumy, hemicelułozy, beta-glukany i inne związki rozpuszczalne w wodzie.
                    Mogą one być degradowane przez mikroflorę jelita grubego do krótkołańcuchowych kwasów tłuszczowych.
                    Uważa się, że dostarczają one pewnych ilości energii.</li>
            </ul>
            <div className='pictureFiber2'>
                <img src='src/images/image5.jpg'/>
            </div>
            <Link className="eatfibre" to="/EatFiber"> Zalecane spożycie błonnika pokarmowego >  </Link>
        </section>
    }
}

export default Fiber;