
let GroceryList = (props) => (
  <ul>
    <li>{props.todos[0]}</li>
    <li>{props.todos[1]}</li>
    <li>{props.todos[2]}</li>
  </ul>
)

let App = () => (
  <div>
    <h3>Some clihe salutation</h3>
    <GroceryList todos={['Item1', 'Item2', 'Item3']}/>

  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));