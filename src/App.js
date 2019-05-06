import React, {Component} from "react"
import ReactDOM from "react-dom"

// import {Firts} from "component/first"
console.log("wtf");

import {foot} from "./component/x"

console.log(foot());


var keySet = new Set();

//export default App;
//ReactDOM.render(<App />, document.getElementById("app"));

/** functions **/
const foo = user => user? `${user.name} ${user.lastName}` : "Stranger"

/** vars **/
const user = {
  name : "Illya",
  lastName : "Koshkin"
}

/** components */

/* NOTES:
  just like vue.js multiline template should be wrapped into wraping tag
  since the syntax is so ugly wrap the whole clusterfuck into a ()
*/
const element = (
  <div>
    <h1>Hello {foo(user)}!</h1>
    <div>What a lame way to programm</div>
  </div>
)

const element2 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

// this will generate this
// <h1 class='greeting'>Hello World!</h1>
//ReactDOM.render(element2, document.getElementById("app"));

// so far you know only how to render a single component
/*------------------------------------------------------------------*/

//this is a react component
function Welcome(props) {
  return <h1>Weclome {props.name}!</h1>
}

// use ES6
// NOTE: use of 'this'
// NOTE: looks like directive alternative
class Welcome2 extends React.Component {
  render() {
    return <h1>Weclome {this.props.name}!</h1>
  }
}


class App extends React.Component {
  render() {
    return <div> {/* wrapper */}
        <Welcome2 name="Alina" />
        <Welcome2 name="Illya" />
        <Welcome2 name="Vasia" />
    </div>
  }
}

//ReactDOM.render(<App/>, document.getElementById("app"));


//move this out later
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(<Clock date={new Date()} />, document.getElementById('app'))
// }

// setInterval(tick, 1000);


//setInterval(ReactDOM.render(<Clock date={new Date()}/>, document.getElementById('app')), 1000)

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date : new Date()}
  }
  componentDidMount() {
    // make a function that changes the of date every second

    this.timerID = setInterval(() => this.setState({date : new Date()}), 1000);
  }

  componentWillUnmount() {
    // console.log("this fires")
    // clearInterval(this.timerID);
  }
  render () {
    return (
      <div>
        <h1> Time: {this.state.date.toLocaleTimeString()} </h1>
      </div>
    )
  }
}

// const x = () => {
//   return (
//     <div></div>
//   ) 
// }


ReactDOM.render(<Clock/>, document.getElementById('app'))
