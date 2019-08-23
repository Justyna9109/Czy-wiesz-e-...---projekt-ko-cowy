import React,{Component} from 'react';
import Questions from './question2.js'
import AnswerList from './answerList2.js';
import Score from './score2.js';
import Progress from './progress2.js';
import Picture from './picture2.js';

import Piramid from '../../images/ima.jpg';
import Heart from '../../images/ima1.jpg';
import Calcium from '../../images/ima2.jpg';
import Fats from '../../images/ima3.jpg';
import Dish from '../../images/ima4.jpg';
import Sacharoza from '../../images/ima5.jpg';
import Celuloza from '../../images/ima6.jpg';
import Witamin from '../../images/ima7.jpg';
import Mikro from '../../images/ima8.jpg';
import Eat from '../../images/ima9.jpg';

class Quiz2 extends Component{
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
                    question: "W diecie dzieci powinna się znaleźć odpowiednia ilość błonnika (włókna) pokarmowego. Normy żywienia podają, że ilość ta powinna kształtować się w granicach:",
                    answers: ["20-40 g/dzień","16-21 g/dzień","10-16 g/dzień","20-30 g/dzień"], correct: 2},
                {url:img1,
                    question: "… pobudza powstawanie czerwonych krwinek, reguluje wzrost i funkcjonowanie komórek, korzystnie wpływa na system nerwowy i mózg. O jakim związku chemicznym mowa?",
                    answers: ["magnez","witamina C","kwas foliowy","witamina D"], correct: 2},
                {url:img2,
                    question: "Czy tłuszcze występują w ludzkim organizmie jedynie w postaci tkanki tłuszczowej?",
                    answers: ["TAK", "NIE"], correct: 1},
                {url:img3,
                    question: "Jakie role pełni w organizmie człowieka woda?",
                    answers: ["reguluje temperaturę organizmu i bierze udział w reakcji oddychania komórkowego","pomaga w usuwaniu szkodliwych produktów przemiany materii i umożliwia przebieg reakcji chemicznych.","rozpuszcza większość związków i wypełnia układ pokarmowy."], correct: 1},
                {url:img4,
                    question: "Ile wynosi minimalna porcja warzyw i owoców, jaką powinniśmy dostarczać organizmowi codziennie?",
                    answers: ["około 100g","około 200g","około 350g","około 500g"], correct: 3},
                {url:img5,
                    question: "Które tłuszcze uważa się za szczególnie groźne?",
                    answers: ["ciekłe tłuszcze roślinne","NNKT","typu trans","tłuszcze zwierzęce"], correct: 2},
                {url:img6,
                    question: "Biały cukier to inaczej...",
                    answers: ["skrobia","glukoza","sacharoza","celuloza"], correct: 2},
                {url:img7,
                    question: "Potas jest podstawowym elektrolitem warunkującym m.in. prawidłową pracę serca. Podczas badania krwi stwierdzono u Ciebie obniżony poziom potasu? Wybierz zestaw produktów żywnościowych, które w sposób naturalny pozwolą Ci dostarczyć potas z dietą:",
                    answers: ["jabłka, maliny, dżem","pieczywo jasne, rodzynki, sery twarogowe","otręby, kasza gryczana, awokado"], correct: 2},
                {url:img8,
                    question: "Dzienne spożycie soli nie powinno przekraczać...",
                    answers: ["1 g","6 g","10 g","14 g"], correct: 1},
                {url:img9,
                    question: "Najbardziej zagrożonymi pacjentami, u których istnieje większe ryzyko wystąpienia glukozurii(cukromocz), są:",
                    answers: [" nadciśnieniowcy","diabetycy","pacjenci nowotworowi"], correct: 1},
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
export default Quiz2;