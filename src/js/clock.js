import React, {Component} from "react";

class Clock extends Component {
    state = {
        date: new Date(),
    };

    componentDidMount() {
        this.id = setInterval(() => {
            this.setState({
                date: new Date(),
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.id);
    }

    render() {
        return (
            <section className='clock'>
                <ClockDate dateFromParent={ this.state.date }/>
                <ClockTime dateFromParent={ this.state.date } />
            </section>
        )
    }
}

class ClockTime extends Component {
    render() {
        return <h1>
            <ClockTimeHour date={this.props.dateFromParent}/>
            :
            <ClockTimeMinute date={this.props.dateFromParent}/>
            :
            <ClockTimeSecond date={this.props.dateFromParent}/>
        </h1>
    }
}

class ClockTimeHour extends Component{
    render() {
        return(
            <span>{this.props.date.getHours()}</span>
        )
    }
}
class ClockTimeMinute extends Component{
    render() {
        return(
            <span>{this.props.date.getMinutes()}</span>
        )
    }
}
class ClockTimeSecond extends Component{
    render() {
        return(
            <span>{this.props.date.getSeconds()}</span>
        )
    }
}

class ClockDate extends Component {
    render() {
        return <h1>
            <ClockDateDay time={this.props.dateFromParent}/>
            .
            <ClockDateMonth time={this.props.dateFromParent}/>
            .
            <ClockDateYear time={this.props.dateFromParent}/>


        </h1>
    }
}

class ClockDateYear extends Component{
    render() {
        return(
            <span>{ this.props.time.getFullYear()}</span>

        )
    }
}
class ClockDateMonth extends Component{
    render() {
        return(
            <span>0{this.props.time.getMonth()+1}</span>

        )
    }
}
class ClockDateDay extends Component{
    render() {
        return(
            <span>{ this.props.time.getDate()}</span>

        )
    }
}

export default Clock;