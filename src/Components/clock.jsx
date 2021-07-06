import React from "react";
import CurrentDate from "./date";
class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = { currentDate: new Date() };
    }

    componentDidMount() {
        this.timer=setInterval(() => this.tick(),1000);
    }

    tick() {
        this.setState({ currentDate: new Date() });
    }

    componentWillUnmount() { 
        clearInterval(this.timer);
    }

    render() {
        return (<div>
            <h1>Current time-{this.state.currentDate.toLocaleTimeString()}</h1>
            <CurrentDate date={this.state.currentDate}/>
        </div>);
    }
}

export default Clock;