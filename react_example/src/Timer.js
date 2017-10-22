import React from 'react';

export default class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            elapse: 0
        };
        this.tick = this.tick.bind(this);
    }

    componentDidMount(){
        this.timer = setInterval(this.tick, 100);
    }

    componentWillMount(){
        clearInterval(this.timer);
    }

    tick(){
        this.setState({elapse: new Date() - this.props.start});
    }

    render(){
        let elapsed = Math.round(this.state.elapse/100);
        let seconds = (elapsed/10).toFixed(1);
        return (
            <h3> {seconds} seconds has passed </h3>
        )
    }
}