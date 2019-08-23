import React from 'react';



const Progress = ({progress, total}) => {
    return (
        <span className="quizProgress">Question {progress + 1} of {total}</span>
    );
}


export default Progress