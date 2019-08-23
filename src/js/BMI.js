import React, {Component} from "react";

class AddTwoNumbers extends Component{
    state={
        numberA:'',
        numberB:''

    };
    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value,
        });
    };


    render() {
        const numberA = Number(this.state.numberA);
        const numberB = Number(this.state.numberB);

        let res;
        let rest;
        // lub można użyć
        //if(isNaN(num1) || isNaN(num2))
        if(numberA !== numberA || numberB !== numberB){
            res = "podaj dwie liczby"
        }else{
            res =(numberA / (numberB * numberB)).toFixed(2);
        }

        return(
            <form className='bmi'>
                <input value ={this.state.numberA} onChange={ this.handleChange } name='numberA' type="text" placeholder="podaj wagę (kg)"/>
                <p>-------------------------------------------------</p>
                <input value ={this.state.numberB} onChange={ this.handleChange } name='numberB' type="text" placeholder='podaj wzrost (m)'/>
                <h1>{res}</h1>
                <h3>Zakres wartości BMI</h3>
                <ul className="wartosc">
                <li> mniejsze niż 16,0 – wygłodzenie</li>
                <li>16,0–16,99 – wychudzenie</li>
                <li>17,0–18,49 – niedowagę</li>
                <li>18,5–24,99 – wartość prawidłową</li>
                <li>25,0–29,99 – nadwagę</li>
                <li>30,0–34,99 – I stopień otyłości</li>
                <li>35,0–39,99 – II stopień otyłości (otyłość kliniczna)</li>
                    <li>≥ 40,0 – III stopień otyłości (otyłość skrajna)</li></ul>

            </form>
        )
    }
}

export default AddTwoNumbers;