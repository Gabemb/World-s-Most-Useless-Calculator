import React from 'react';

import Gifs from './Gifs';

import Operators from './functions.js';
import Buttons from './buttons.js';

const Calculator = React.createClass({
	getInitialState(){
		return {current: 0, total: [], operator: null, gifs: null}
	},
	updateCurrent(event){
		let button = event.target.innerHTML;
		let input = document.getElementById('inp').innerHTML;

		//this first if statement is checking whether the current I pressed is one of the number buttons ( 0-9 )
		//did you know NaN still evaluates as a number? Isn't JavaScript fantastic!?!?
		//it sets the value displayed in our input box to number(s) just clicked
		if (typeof parseInt(button) === "number" && !isNaN(parseInt(button)) ) {
				this.setState({current: this.state.current !== 0 ? this.state.current + "" + button : button});
			}

		//these sets of if/else statements are checking for any operator buttons pressed
		//because of the way I set up my previous if statment I'm forced to reset the current value in our input box back to 0
		//also the reason why I need to use `parseInt()`
		//I concat the current value in our input box with the `total` array inside of our state.
		//I'm also saving which operator button was clicked into our state
		else if (button === "+") {
			this.setState({current: 0, total: [parseInt(this.state.current), ...this.state.total], operator: "+"});
		}
		else if (button === "-") {
			this.setState({current: 0, total: [parseInt(this.state.current), ...this.state.total], operator: "-"});
		}
		else if (button === "÷") {
			this.setState({current: 0, total: [parseInt(this.state.current), ...this.state.total], operator: "÷"});
		}
		else if (button === "X") {
			this.setState({current: 0, total: [parseInt(this.state.current), ...this.state.total], operator: "X"});
		}

		//I'm importing an object called `Operators` with basic math functions inside of it for use in this if statment
		//Here we're checking the operator saved in our state currently is and then call on the appropriate function in our `Operators` object
		//more copious use of `parseInt()` because of how I set up my first if statement
		//I'm creating a custom JSX element to be rendered only when the "=" button is clicked.
 		else if(button === "=") {
			switch (this.state.operator) {
				case "+":
					let sum = this.state.total.reduce( (total = 0, val) => total += parseInt(val));
					this.setState({current: Operators.add(sum, parseInt(input)), total: [], operator: null, gifs: <Gifs search={Operators.add(sum, parseInt(input))} /> });
					break;
				case "-":
					let sub = this.state.total.reduce( (total = 0, val) => total -= parseInt(val));
					this.setState({current: Operators.sub(sub, parseInt(input)), total: [], operator: null, gifs: <Gifs search={Operators.sub(sub, parseInt(input))} /> });
					break;
				case "÷":
					let div = this.state.total.reduce( (total = 0, val) => total /= parseInt(val));
					this.setState({current: Operators.div(div, parseInt(input)), total: [], operator: null, gifs: <Gifs search={Operators.div(div, parseInt(input))} /> });
					break;
				case "X":
					let mult = this.state.total.reduce( (total = 0, val) => total *= parseInt(val));
					this.setState({current: Operators.mult(mult, parseInt(input)), total: [], operator: null, gifs: <Gifs search={Operators.mult(mult, parseInt(input))} /> });
					break;

			}
		}

		//resets our state back to it's default state. Woo! Tabula rasa!
		else if (button === "C") {
			this.setState({current: 0, total: [], operator: null, search: "", gifs: null});
		}

	},
	render() {
		console.log("CURRENT", this.state.current)
		console.log("TOTAL ARRAY", this.state.total)
		console.log("OPERATOR", this.state.operator)
		return (
			<div className="calculator">

				{this.state.gifs}

				<div className="inputrow">
					<div id="inp" className="input">{this.state.current}</div>
				</div>

				<br />

				<div className="firstrow">
					{ Buttons.firstRow.map( (sym, idx) => sym === "÷" ? 

						<div id="divide" className="buttons operator" onClick={this.updateCurrent} key={idx} >{sym}</div> : 

					<div onClick={this.updateCurrent} className="buttons first" key={idx}>{sym}</div> )}
				</div>

				<br />

				<div className="secondrow">
					<div onClick={this.updateCurrent} className="buttons">7</div> 
					<div onClick={this.updateCurrent} className="buttons">8</div> 
					<div onClick={this.updateCurrent} className="buttons">9</div>
					<div onClick={this.updateCurrent} className="buttons operator">X</div>
				</div>

				<br />

				<div className="thirdrow">
					<div onClick={this.updateCurrent} className="buttons">4</div> 
					<div onClick={this.updateCurrent} className="buttons">5</div> 
					<div onClick={this.updateCurrent} className="buttons">6</div>
					<div onClick={this.updateCurrent} className="buttons operator">-</div>
				</div>

				<br />

				<div className="fourthrow">
					<div onClick={this.updateCurrent} className="buttons">1</div>
					<div onClick={this.updateCurrent} className="buttons">2</div>
					<div onClick={this.updateCurrent} className="buttons">3</div>
					<div onClick={this.updateCurrent} className="buttons operator">+</div>
				</div>

				<br />

				<div className="fifthrow">
					<div onClick={this.updateCurrent} className="zero">0</div>
					<div className="buttons">.</div>
					<div onClick={this.updateCurrent} className="buttons operator">=</div>

				</div>

			</div>
		)
	}
})

// <div onClick={this.updateCurrent} className="buttons first">C</div>
					// <div className="buttons first">+ -</div>
					// <div className="buttons first">%</div>
					// <div id="divide" className="buttons operator" onClick={this.updateCurrent} >&#247;</div>

export default Calculator;