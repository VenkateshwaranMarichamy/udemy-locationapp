import React from 'react'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component{

  // constructor(props){
  //   super(props);
  //   this.state = {latitude: null, errorMessage: '' };
  //  };

  state =  {latitude: null, errorMessage: '' };

  componentDidMount(){
    console.log("App Component was rendered")
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({latitude: position.coords.latitude}),
      err => this.setState({errorMessage: err.message})
    );
  }

  componentDidUpdate(){
    console.log("component updated")
  }
  
  renderContent(){
    if(this.state.errorMessage && !this.state.latitude){
      return <div>Error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.latitude){
      return <SeasonDisplay latitude={this.state.latitude} />
    }

    return(
      <Spinner message="Please accept the location access"/>  
    );
    };


  render(){
    return(
      <div className="border red">{this.renderContent()}</div>
    );
  }
}

export default App;
