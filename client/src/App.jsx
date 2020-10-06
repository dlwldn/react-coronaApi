import React, {Component} from 'react';
import axios from "axios";

class App extends Component {
  state = {
    data: '',
  }

  callApi = () => {
    axios.get("http://localhost:5000/").then((response) => {
        console.log(response.data.items.item[0]);
        this.setState({
          data: response.data.items.item[0].accDefRate
        })
    });
  }

  componentDidMount() {
    this.callApi()
  }

  
  render() {
    return (
      <div>
        <h3>{this.state.data === '' ? " 데이터를 불러오는 중입니다. " : this.state.data }</h3>
        <a href="http://localhost:5000/">dddd</a>
      </div>
    );
  }
  
}

export default App;
