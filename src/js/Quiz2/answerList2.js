import React from 'react';
import ListItem from '../Quiz2/listitem2.js';

const AnswerList = ({answers, answerCallback}) => {
    return (
        <ul className="quizAnswer-list">
            {answers.map(function(answer, index) {
                return (
                    <ListItem key={index} answerItem={answer} answerCallback={answerCallback} index={index} />
                )
            },this)}
        </ul>
    );
}


export default AnswerList;