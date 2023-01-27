import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {
  
  constructor (props){
    super(props);
    this.state = {
      "manager" : '', 
      players   : [], 
      balance   : '',
      value     : '',
      message   : '',
    };
  }

  async componentDidMount(){
    const manager = // get manager address from contract
    const player  = // get players data from contract
    const balance = // get balance from contract

    this.setState({
      manager : manager,
      players : player,
      balance : balance,
    });
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();

    this.setState({ message : 'Waiting on transaction success .....' });

    // fill code for entering the lottery

    this.setState( {message: 'Congratulations!!! You have successfully entered the lottery!' })

  }

  onClick = async (event) => {
    const accounts = await web3.eth.getAccounts();
    this.setState({message : 'Picking a RANDOM winner........just hold on few secs.....'})

    // fill code for picking a winner
    

    this.setState({message : 'A winner has been picked! And he has recieved the money'})
  }

  render() {
    return (
      <div>
      <h2>Lottery contract - Shardeum</h2>
      <p>This contract is managed by {this.state.manager}</p>
      <p>There are currently {this.state.players.length} people entered, competing to win {web3.utils.fromWei(this.state.balance, 'ether')} SHM!!!</p>
      <hr/>
      <form onSubmit={this.onSubmit}>
        <h4>Want to try your luck?</h4>
        <div>
          <label>Amount of SHM to enter : </label>
          <input
            value={this.state.value}
            onChange={event => this.setState({ value : event.target.value })}
          />
        </div>
        <button>Enter</button>
      </form>
      <hr/>
      <h4>Ready to Pick a Winner? </h4>
      <button onClick={this.onClick} >Pick a Winner!</button>
      <hr/>
      <h3>{this.state.message}</h3>
    </div>
    );
  }
}



export default App;