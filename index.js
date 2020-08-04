//let d = new Date();
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function Welcome(props) {
  return <h1>Welcome, {props.name} !</h1>;
}
const nameElement = <Welcome name="Kevin Mezu" />;
ReactDOM.render(nameElement, document.getElementById("myName"));
//import { FaReact } from "./node_modules/react-icons/fa/index";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnMount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <div>
        <h2>
          Today is {weekdays[this.state.date.getDay()]},{" "}
          {months[this.state.date.getUTCMonth()]} {this.state.date.getUTCDate()}
          , {this.state.date.getUTCFullYear()}
        </h2>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}
ReactDOM.render(<Clock />, document.getElementById("root"));

const userInput = document.getElementById("userInput").value;
