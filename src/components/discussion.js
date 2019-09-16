import React, { Component } from 'react'; 

export default class Dicussion extends Component{
    constructor(){
        super(); 
        this.state = {
            pageTitle: 'Discussion',
            currentTime: String(new Date())
        }; 
    }

    componentDidMount(){
        // counts the number of seconds since mounting 
        // Live time is daved inside a variable to an object and allows us to clear it later 
        this.liveTime = setInterval(() => {
            console.log("New Chat message");
            
            this.setState({currentTime: String(new Date())})
        },1000); 
    }

    componentWillUnmount(){
        // remove live time process when taking clearInterval off the page 
        clearInterval(this.liveTime); 
    }

   render() {
       const { pageTitle, currentTime } = this.state; // this destructuring allows us to not call this.state.pageTitle 

       return (
        <div> 
            <h1>{pageTitle}</h1>
            <div>{currentTime}</div>
            Discussion ... 
        </div>
       );
   }
}
