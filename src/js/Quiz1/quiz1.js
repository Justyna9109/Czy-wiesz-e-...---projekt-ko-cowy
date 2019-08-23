import React,{Component} from 'react';
import Questions from './question1.js'
import AnswerList from './answerList1.js';
import Score from './score1.js';
import Progress from './progress1.js';
import Picture from './picture1.js';

import Piramid from '../../images/imag.jpg';
import Heart from '../../images/imag1.jpeg';
import Calcium from '../../images/imag2.jpg';
import Fats from '../../images/imag3.jpg';
import Dish from '../../images/imag4.jpg';
import Sacharoza from '../../images/imag5.jpg';
import Celuloza from '../../images/imag6.jpg';
import Witamin from '../../images/imag7.jpg';
import Mikro from '../../images/imag8.jpg';
import Eat from '../../images/imag9.jpg';

class Quiz1 extends Component{
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        this.checkAnswer = this.checkAnswer.bind(this);
        this.resetQuiz = this.resetQuiz.bind(this);
    }

    getInitialState() {
        const img = <img className="quizImg" src={ Piramid } />;
        const img1 = <img className="quizImg" src={ Heart } />;
        const img2 = <img className="quizImg" src={ Calcium } />;
        const img3 = <img className="quizImg" src={ Fats } />;
        const img4 = <img className="quizImg" src={ Dish } />;
        const img5 = <img className="quizImg" src={ Sacharoza } />;
        const img6 = <img className="quizImg" src={ Celuloza } />;
        const img7 = <img className="quizImg" src={ Witamin } />;
        const img8 = <img className="quizImg" src={ Mikro } />;
        const img9 = <img className="quizImg" src={ Eat } />;

        return {
            questionData: [
                {url:img,
                    question: "Prawidłowa wartość ciśnienia tętniczego powinna wynosić:",
                    answers: ["100/80 mmHg","130/70 mmHg","120/80 mmHg","90/50 mmHg"], correct: 2},
                {url:img1,
                    question: "Maślanka, kefir, jogurt naturalny – czym charakteryzują się te produkty?",
                    answers: ["są ciężkostrawne","powodują gorsze gojenie się ran, odleżyn, oparzeń","są doskonałym źródłem wapnia i są odpowiednie dla osób niemogących spożywać mleka","są produktami o wysokiej zawartości cukrów"], correct: 2},
                {url:img2,
                    question: "Zamiana cukru białego na cukier brązowy:",
                    answers: ["jest korzystna, gdyż cukier brązowy jest zdrowszy, bo ma dodatek witamin","ma znaczenie, ponieważ może wspomagać walkę z otyłością, bo ma mniej kalorii","nie ma różnicy w zamianie, bo i tak w efekcie końcowym uzyskuje się sacharozę (cukier prosty), który sprzyja rozwojowi wielu chorób"], correct: 2},
                {url:img3,
                    question: "Częstym zjawiskiem jest, że wraz z wiekiem przybywa nam tkanki tłuszczowej, mimo tego że „jemy, jak zawsze”. W takim wypadku należy:",
                    answers: ["jak najszybciej ograniczyć produkty pełnoziarniste (chleb, bułki), mleko i słodycze","po prostu jeść trochę mniej niż dotychczas, jedząc różnorodne produkty spożywcze, dlatego że nasz metabolizm zwalnia, a tym samym nasz organizm potrzebuje trochę mniej kalorii do prawidłowego funkcjonowania","wyeliminować gluten i laktozę z diety"], correct: 1},
                {url:img4,
                    question: "Który z wymienionych rodzajów olejów roślinnych zawiera największą ilość kwasów omega-3, określanych mianem „zdrowych tłuszczów”",
                    answers: ["olej słonecznikowy","olej lniany","oliwa z oliwek","olej rzepakowy"], correct: 1},
                {url:img5,
                    question: "Przewlekłe, nieleczone zaparcia mogą prowadzić do rozwoju raka jelita grubego, ponieważ:",
                    answers: ["zbite resztki pokarmowe to komórki nowotworowe","powoduje to zmniejszenie ciśnienia osmotycznego krwi i apoptozy komórek wyściełających jelito grube","zalegające masy kałowe i toksyczne substancje chemiczne mogą uszkadzać błonę śluzową jelita grubego i wywołać stan zapalny, niedrożność, a tym samym dać początek rozwojowi nowotworu"], correct: 2},
                {url:img6,
                    question: "Interakcje między żywnością i lekami mogą nieodwracalnie zmniejszyć lub zwiększyć działanie leku. Leków nie należy popijać: ",
                    answers: ["sokiem pomidorowym","sokiem grejfrutowym","sokiem pomarańczowym","sokiem wieloowocowym"], correct: 1},
                {url:img7,
                    question: "Płatki owsiane, płatki jęczmienne, płatki gryczane, płatki ryżowe przygotowane na mleku/wodzie są świetnym sposobem na rozpoczęcie dnia, ponieważ:",
                    answers: ["dostarczają wszystkich niezbędnych mikro- i makroelementów"," mogą zastąpić leki","zawierają głównie takie składniki odżywcze, jak cukry złożone, które są bardzo dobrym źródłem energii na początek dnia, przy tym dostarczając witamin z grupy B, witaminy E, magnez, wapń czy potas, a także błonnik pokarmowy ułatwiający wypróżnianie"], correct: 2},
                {url:img8,
                    question: "Z czego zbudowane są białka:",
                    answers: ["z lipidów","z aminokwasów","z disoidów","z kwasów karboksylowych"], correct: 1},
                {url:img9,
                    question: "Twój lekarz stwierdził u ciebie niedokrwistość z niedoboru żelaza. Wskaż zestaw produktów żywnościowych, które powinieneś spożywać przy tym schorzeniu",
                    answers: ["warzywa i owoce","chude mięso (np. kurczak), ryby (np. tuńczyk), zielone warzywa (np. szpinak), warzywa strączkowe (np. soczewica) oraz spożywanie przy tym warzyw i owoców"," tłuste mięso (np. wieprzowina), mleko, masło","podroby mięsne, smalec, czekoladę mleczną"], correct: 1},
            ],
            progress: 0,
            score: 0
        };
    }

    checkAnswer(index) {
        var correct = this.state.questionData[this.state.progress].correct;
        var newScore = 0, newProgress =0;

        if (correct === index) {
            newScore = this.state.score + 1;
            this.setState({
                score: newScore
            });
            newProgress = this.state.progress + 1;
            this.setState({
                progress: newProgress
            });
        } else {
            newProgress = this.state.progress + 1;
            this.setState({
                progress: newProgress
            });
        }
    }

    resetQuiz() {
        this.setState({
            score: 0,
            progress: 0
        });
    }


    render() {
        var currentQuestion = this.state.questionData[this.state.progress];
        if (this.state.questionData.length > this.state.progress) {
            return (
                <div className="quizContainer">
                    <Picture pictureUrl={currentQuestion.url}/>
                    <div className="mainQuiz">
                        <Questions questionText={currentQuestion.question}/>
                        <AnswerList answers={currentQuestion.answers} answerCallback={this.checkAnswer}/>
                        <Score score={this.state.score}/><br/>
                        <Progress progress={this.state.progress} total={this.state.questionData.length}/>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="quizContainer">
                    <div className='quizEnd'>
                        <p className="quizQuestion1">Quiz Finished!</p>
                        <Score score={this.state.score}/><br/>
                        <div className='buttonQuiz'>
                            <button type="button" className="quizReset-btn" onClick={this.resetQuiz}>   Reset Quiz</button>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default Quiz1;