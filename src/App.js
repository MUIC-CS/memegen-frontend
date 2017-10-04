import React, {Component} from 'react';
import logo from './logo.svg';
import queryString from 'query-string'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      memetext: '',
      bg: 1,
      fontSize: 0,
      color: 0,
      x: 0,
      y: 0,
      path: ''
    };
    this.generateMeme = this.generateMeme.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name
    this.setState({
      [name]: value
    });
  }

  generateMeme(e) {
    const url = "/"
    this.setState({text: queryString.stringify(this.state)})
    console.log("something happen")
    e.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <h1>Meme generator</h1>
        <form onSubmit={this.generateMeme}>
          <p>
            Meme text:<input type="text" name="memetext" value={this.state.memetext} onChange={this.handleChange}></input>
          </p>
          <p>
            background:<input type="number" name="bg" value={this.state.bg} onChange={this.handleChange}></input>
          </p>
          <p>
            font size:<input type="number" name="fontSize" value={this.state.fontSize} onChange={this.handleChange}></input>
          </p>
          <p>
            face color:<input type="text" name="color" value={this.state.color} onChange={this.handleChange}></input>
          </p>
          <p>
            x:<input type="number" name="x" value={this.state.x} onChange={this.handleChange}></input>
          </p>
          <p>
            y:
            <input type="number" name="y" value={this.state.y} onChange={this.handleChange}></input>
          </p>
          <p>
            <input type="submit" value="Generate Meme"></input>
          </p>
        </form>

        <p>
          Return Image
        </p>
        <p>
          {this.state.text}
          <img src={this.state.path} alt="where is the image"></img>
        </p>
      </div>
    );
  }
}

export default App;
