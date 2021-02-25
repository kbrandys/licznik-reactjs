import React, { Component } from 'react';
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import Clock from './Clock';
import Step from './Step';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            step: 1,
        };
    }

    updateStep = (stepValue) => {
        this.setState({step: parseInt(stepValue)})
    }


    changeValue = (action) => {

        this.setState((prevState, prevProps) => {

            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {

                currentCounterValue += this.state.step;
            }

            else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            }
            else {
                currentCounterValue = 0;
            }

            return ({
                counterValue: currentCounterValue
            });

        });
    }

    toggleClock = () => {
        this.setState((prevState) => {
            return ({
                showClock: !prevState.showClock
            });
        })
    }

    render() {

        let clockElement = '';

        if (this.state.showClock) {
            clockElement = <Clock toggleClockMethod={this.toggleClock} />;
        } else {
            clockElement = <span onClick={this.toggleClock} className="show-clock">show clock</span>;
        }

        return (
            <div className="counter">
                Licznik:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} />
                <Step stepMethod={this.updateStep}
                currentStepValue={this.state.step}/>
                {clockElement}
            </div>
        );
    }
};

export default Counter;



















{/* class Counter extends Component { */ }

//     constructor(props) {
//         super(props);

//         this.state = {
//             counterValue: this.props.initValue
//         };
//     }

//     changeValue = (action) => { // ES6 method

//         this.setState((prevState, prevProps) => {

//             let currentCounterValue = prevState.counterValue;

//             if (action === 'add') {
//                 currentCounterValue += 1;
//             } else if (action === 'reinit') {
//                 currentCounterValue = prevProps.initValue;
//             } else {
//                 currentCounterValue = 0;
//             }

//             return({
//                 counterValue: currentCounterValue
//             });
//         });
//     }

//     render() {

//         return (
//             <div className="counter">
//                 Licznik:
//                 <Display displayValue={this.state.counterValue} />
//                 <ButtonsPanel buttonMethod={this.changeValue} />
//             </div>
//         );
//     }
// }


// export default Counter;








// class Counter extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             counterValue: 0,
//         }
//     }

//     changeValue = () => {
//         this.setState((prevState) => {
//             return ({
//                 counterValue: prevState.counterValue + 1,
//             })
//         });
//     }
//     render() {
//         return (
//             <div className="counter" >
//                 Licznik:
//                 <span className="value">{this.state.counterValue}</span>
//                 <button onClick={this.changeValue}>Add 1</button>
//             </div >
//         )
//     }
// }












// class Counter extends Component {
//     render() {
//         return (
//             <div className="counter" >
//                 Licznik:
//                 <span className="value">
//                     {this.props.initValue}
//                 </span>
//             </div >
//         )
//     }
// }







// class Counter extends Component {
//     render() {
//         let randomNumber = Math.floor(Math.random() * (108-1+1)+1);
//         return (
//             <div className="counter" >
//                 Licznik:
//                 <span className="value">
//                     {randomNumber}
//                 </span>
//             </div >
//         )
//     }
// }






// function Counter(props) {
//     let randomNumber = Math.floor(Math.random() * (108-1+1)+1);
//     return (
//         <div className = "counter" >
//         Counter:
//         <span className="value">
//             {randomNumber}
//         </span>
//         </div >
//     );
// }

