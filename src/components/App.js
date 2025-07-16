import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi: 0,
            ballPosition: { left: "0px", position : "absolute" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    };

   

    handleKeyDown(e) {
        if (e.key == "ArrowRight") {
            this.setState((prevState) => {
                const newPosition = prevState.posi + 5;
                return {
                    posi: newPosition,
                    ballPosition: { left: newPosition + "px" }
                }
            })
        }
    }


    buttonClickHandler() {
        this.setState({ renderBall: true })
    }

    renderBallOrButton() {
        if (this.state.renderBall) {
            return <div id = "ball" className="ball" style={{...this.state.ballPosition, position : "absolute"}}></div>
        } else {
            return <button className="start" onClick={this.buttonClickHandler} >Start</button>
        }
    }

    // bind ArrowRight keydown event
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown)
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
