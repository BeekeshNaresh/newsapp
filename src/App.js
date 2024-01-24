
import './App.css';
import React, { Component } from 'react'
import News from './Components/News';
import Navbar from './Components/Navbar';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
 
 

 
  constructor(props){
    super(props);
    this.state={country:"in",
    category:"sports",

  }
  }
   // Function to receive data from the child component
   handleChildData = (data) => {
    this.setState({country:data.country,
    category:data.category});
    alert("getData")
  };
  
  state={
    progress:0
 

  }
  setProgress=(progress)=>{
this.setState({progress:progress})

  }

  render() {
   
    
    return (
      <div>
        <BrowserRouter>
        <Navbar  news={this.state}/>
        <LoadingBar
        color='#f11946'
        height="2px"
        progress={this.state.progress}
        
       
      />
        <Routes>
        
        <Route  path="/" element={<News setProgress={this.setProgress}  key="general" heading="General" country="in" category="general" />}/>
        <Route path="/home" element={<News setProgress={this.setProgress}   key="general" heading="General" country="in" category="general"  />}/>
        <Route path="/business" element={<News setProgress={this.setProgress}   key="business" heading="Business" country="in" category="business"  />}/>
        <Route path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment"  heading="Entertainment" country="in" category="entertainment" />}/>
        <Route path="/health" element={<News setProgress={this.setProgress}   key="health" heading="Health" country="in" category="health"  />}/>
        <Route path="/science" element={<News setProgress={this.setProgress}   key="science" heading="Science" country="in" category="science"  />}/>
        <Route path="/sports" element={<News setProgress={this.setProgress}   key="sports" heading="Sports" country="in" category="sports"  />}/>
        <Route path="/technology" element={<News setProgress={this.setProgress}  key="technology" heading="Technology" country="in" category="technology"  />}/>
       
       
        </Routes>
       </BrowserRouter>
        
        
       </div>
     
    )
  }
}




