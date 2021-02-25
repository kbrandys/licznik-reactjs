import React, { Component } from 'react';
import './Step.css';

class Step extends Component {

    updateStep = () => {
       this.props.stepMethod(this._inputStep.value);
   }

    render() {
        return (
            <div className="step">
                Krok: 
                <input ref={(data) => { this._inputStep = data} } onChange={this.updateStep} type="number" min="1" value={this.props.currentStepValue}/>
            </div>
        );
    }
}

export default Step;

