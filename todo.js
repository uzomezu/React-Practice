//Todo List
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div class="main">
        <h3 class="text-center">ToDo App</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">What needs to be done?</label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Add ToDo</button>
        </form>

        <TodoList items={this.state.items} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      console.log("empty");
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log(e.target.parentNode.parentNode);
    let list = e.target.parentNode.parentNode;
    let curElement = e.target.parentNode;
    list.removeChild(curElement);
  }
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <li key={item.id}>
            {item.text} <button onClick={this.handleClick}>X</button>
          </li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("root"));
