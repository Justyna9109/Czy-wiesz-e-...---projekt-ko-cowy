import React,{Component} from 'react';
import Zbozowe from './zbozowe.js'
import Nabial from './nabial.js'
import Mieso from './mieso.js'
import Owoce from './owoce.js'
class Leading extends Component{

    state = {
        text:""
    }

    handleChange = e => {
                this.setState({
                        text: e.target.value,
                })
        }

    render() {
        return <section className='leading'>
            <div className='leadpicture'>
                <img src="src/images/image10.jpg"/>
            </div>

            <div className="center">
                <select onChange={this.handleChange} value={this.state.text}>
                    <option></option>
                    <Zbozowe/>
                    <Nabial/>
                    <Mieso/>
                    <Owoce/>
                </select>
                <div className='optionproduct'>
                    <p className="options">{this.state.text}</p>
                </div>
            </div>
        </section>
    }

    }

export default Leading;
