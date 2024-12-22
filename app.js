import React, { Component } from 'react';  
import './App.css';  

class App extends Component {  
  constructor(props) {  
    super(props);  
    this.state = {  
      person: {  
        fullName: 'John Doe',  
        bio: 'A passionate developer.',  
        imgSrc: 'https://via.placeholder.com/150',  
        profession: 'Software Engineer',  
      },  
      show: false,  
      interval: null,  
      secondsSinceMount: 0,  
    };  
  }  

  componentDidMount() {  
    // Start the interval to count seconds since component was mounted  
    const interval = setInterval(() => {  
      this.setState((prevState) => ({  
        secondsSinceMount: prevState.secondsSinceMount + 1,  
      }));  
    }, 1000);  

    this.setState({ interval });  
  }  

  componentWillUnmount() {  
    // Clear the interval when the component is unmounted  
    clearInterval(this.state.interval);  
  }  

  toggleShow = () => {  
    this.setState((prevState) => ({  
      show: !prevState.show,  
    }));  
  };  

  render() {  
    const { person, show, secondsSinceMount } = this.state;  

    return (  
      <div className="App">  
        <h1>Person Profile</h1>  
        <button onClick={this.toggleShow}>  
          {show ? 'Hide Profile' : 'Show Profile'}  
        </button>  
        {show && (  
          <div>  
            <h2>{person.fullName}</h2>  
            <p>{person.bio}</p>  
            <img src={person.imgSrc} alt={person.fullName} />  
            <p>Profession: {person.profession}</p>  
          </div>  
        )}  
        <p>Time since component mounted: {secondsSinceMount} seconds</p>  
      </div>  
    );  
  }  
}  

export default App;