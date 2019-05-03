import React, {Component} from "react";
import ReactDOM from "react-dom";
const json = require('./data.json');

var keySet = new Set()

const parse = json => {
  return Object.keys(json).map(key => {
    if(json[key] instanceof Object) return parse(json[key])
    else if(json[key] != "" && !keySet.has(key)) {
      keySet.add(key)
      return <tr><td>{key}</td><td>{json[key]}</td></tr>
    }
  })
}

// class App extends Component {
//   //parse(json)
//
//   render() {
//
//
//     return (
//         <table>
//           <tr>
//             <th>Property</th>
//             <th>Value</th>
//           </tr>
//             {parse(json.receivedOrder)}
//
//         </table>
//
//     );
//   }
//
//
// };

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

const element2 = {
  type : h1,
  props : {
    className : 'greeting',
    children: 'Hello, world!'
  }
}
// this will generate this
// <h1 class='greeting'>Hello World!</h1>



ReactDOM.render(element, document.getElementById("app"));
