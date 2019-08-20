import React,{Component} from 'react';

class Carbohydrates extends Component{
    render() {
        return<section className='carbo'>
            <h1>Węglowodany</h1>
            <p>Zbudowane są z węgla, wodoru i tlenu. Określane są jako „cukry”, „sacharydy” lub
                „cukrowce” charakteryzują się słodkim smakiem. Ławo rozpuszczają się w wodzie.
                Zawierają kilka i więcej grup hydroksylowych oraz co najmniej jedną grupę karbonylową
                (aldehydową lub ketonową). Syntetyzowane są głównie przez rośliny w procesie fotosyntezy.
                Zwierzęta mogą syntetyzować niektóre węglowodany z tłuszczu i białka, ale większa część
                węglowodanów zwierzęcych jest pochodzenia roślinnego. Węglowodany są jednym z głównych źródeł energii
                (ze spalenia 1 g człowiek uzyskuje ok. 4 kcal).</p>
            <div className="division">
            <img className="divisionCarbo" src="src/images/image2.png"/>
            </div>
            <div className="source">
            <img src="src/images/image1.png"/>
            </div>
        </section>
    }
}

export default Carbohydrates;