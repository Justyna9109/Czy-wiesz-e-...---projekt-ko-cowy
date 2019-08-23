import React,{Component} from 'react';
import Questions from './question.js'
import AnswerList from './answerList.js';
import Score from './score.js';
import Progress from './progress.js';
import Picture from './picture.js';

import Piramid from '../../images/piramida.png';
import Heart from '../../images/images1.jpg';
import Calcium from '../../images/images2.jpg';
import Fats from '../../images/images.jpg';
import Dish from '../../images/images3.jpg';
import Sacharoza from '../../images/images4.jpg';
import Celuloza from '../../images/images5.jpg';
import Witamin from '../../images/images8.jpg';
import Mikro from '../../images/images6.jpg';
import Eat from '../../images/images7.jpg';

class Quiz extends Component{
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
                {url:img, question: "Podstawą piramidy żywieniowej są:", answers: ["warzywa","nabiał","aktywność fizyczna","woda"], correct: 2},
                {url:img1, question: "Osoby cierpiące na nadciśnienie tętnicze powinny ograniczyć spożycie:", answers: ["nabiału","alkoholu","soli kuchennej","aktywności fizycznej"], correct: 2},
                {url:img2, question: "Najlepsze źródło wapnia – niezbędnego składnika mineralnego zmniejszającego ryzyko wystąpienia osteoporozy to", answers: ["wędliny","pieczywo","mleko i przetwory mleczne","warzywa"], correct: 2},
                {url:img3, question: "Tłuszcze widoczne to produkty:", answers: ["awokado","olej lniany","czekolada","wędliny"], correct: 1},
                {url:img4, question: "Najlepszym wyborem przygotowywania potraw jest:", answers: ["smażenie","gotowanie na wodzie i parze","wędzenie","grillowanie"], correct: 1},
                {url:img5, question: "Sacharoza należy do dwucukrów i składa się z:", answers: ["glukozy i galaktozy","2 cząsteczek glukozy","glukozy i fruktozy","galaktozy i fruktozy"], correct: 2},
                {url:img6, question: "Celuloza występuje w:", answers: ["owocach","ścianach komórkowych roślin","korzeniach warzyw","otrębach"], correct: 1},
                {url:img7, question: "Witaminy rozpuszczalne w tłuszczach to:", answers: ["A, D, K","A, B3, K ","D, K, E, A","B12, D, B6, A"], correct: 2},
                {url:img8, question: "Mikroelementy to:", answers: ["wapń, fosfor, jod","jod, mangan, chrom, selen","magnez, sód, potas","żelazo, miedź, fosfor"], correct: 1},
                {url:img9, question: "Zasada, że powinno się jeść częściej, ale mniejsze posiłki, np. 5x dziennie, zamiast większych porcji, jest słuszna, ponieważ:",
                    answers: ["Łatwiej wtedy o zapewnienie odpowiedniej ilości niezbędnych składników odżywczych","Wszystkie odpowiedzi są prawidłowe","Nie naraża to żołądka i innych organów wewnętrznych na przeciążenie","Sposób ten pozwala także ćwiczyć pamięć, zachować sprawność myślenia, koncentracji"], correct: 1},
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
export default Quiz;