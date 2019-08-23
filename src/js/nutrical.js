import React,{Component} from 'react';
import {
    Link,
} from 'react-router-dom';

class Nutrical extends Component {
    state={
        mouse:true,
        mouse1:true,
        mouse2:true,
        mouse3:true,
        mouse4:true,
        mouse5:true,
        mouse6:true,
}
    handleChange = e =>{
        this.setState({
            mouse: "#" + Math.floor(Math.random()*16777215).toString(16)
        })}

    handleChange1 = e =>{
        this.setState({
            mouse1: "#" + Math.floor(Math.random()*16777215).toString(16)
        })}

    handleChange2 = e =>{
        this.setState({
            mouse2: "#" + Math.floor(Math.random()*16777215).toString(16)
        })}

    handleChange3 = e =>{
        this.setState({
            mouse3: "#" + Math.floor(Math.random()*16777215).toString(16)
        })}

    handleChange4 = e =>{
        this.setState({
            mouse4: "#" + Math.floor(Math.random()*16777215).toString(16)
        })}

    handleChange5 = e =>{
        this.setState({
            mouse5: "#" + Math.floor(Math.random()*16777215).toString(16)
        })}

    handleChange6 = e =>{
        this.setState({
            mouse6: "#" + Math.floor(Math.random()*16777215).toString(16)
        })}
    render() {
        const style={
            color: this.state.mouse}
        const style1={
            color:this.state.mouse1}
        const style2={
            color:this.state.mouse2}
        const style3={
            color:this.state.mouse3}
        const style4={
            color:this.state.mouse4}
        const style5={
            color:this.state.mouse5}
        const style6={
            color:this.state.mouse6}

        return <div className="boxMain">
            <div  onMouseEnter={this.handleChange} className="box1" id="box">
                <Link style={style} className="piramida" to='/Piramida'>PIRAMIDA ŻYWIENIA </Link>
                <img className='nutri' src='/src/images/nutri.jpg'/>
            </div>

            <div  onMouseEnter={this.handleChange1} className="box2" id="box">
                <Link style={style1} className="bialka" to='/Protein'>BIAŁKA</Link>
                <img className='nutri1' src='/src/images/nutri1.jpg'/>
            </div>

            <div  onMouseEnter={this.handleChange2} className="box3" id='box'>
                <Link style={style2} to='/Carbohydrates'>WĘGLOWODANY</Link>
                <img className='nutri2' src='/src/images/nutri2.jpg'/>
            </div>

            <div  onMouseEnter={this.handleChange3} className="box4" id='box'>
                <Link style={style3} to='/Fats'>TŁUSZCZE</Link>
                <img className='nutri3' src='/src/images/nutri3.jpg'/>
            </div>

            <div  onMouseEnter={this.handleChange4} className="box5" id='box'>
                <Link style={style4} to='/Fiber'>BŁONNIK POKARMOWY</Link>
                <img className='nutri4' src='/src/images/nutri4.jpg'/>
            </div>

            <div  onMouseEnter={this.handleChange5} className="box6" id='box'>
                <Link style={style5} to='/Vitamin'>WITAMINY</Link>
                <img className='nutri5' src='/src/images/nutri5.jpg'/>
            </div>

            <div  onMouseEnter={this.handleChange6} className="box7" id='box'>
                <Link style={style6} to='/Mineral'>SKŁADNIKI MINERALNE</Link>
                <img className='nutri6' src='/src/images/nutri6.jpg'/>
            </div>

            </div>
    }
}

export default Nutrical;