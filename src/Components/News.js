import React, { Component } from 'react'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {


    

    constructor(){
        super();
        this.state={
            articles:this.articles ?? []    ,
            loding:true,
            page:1,
            tA:"",
            pS:10
        }
    }
    updateNews=async()=>{
        this.props.setProgress(0);
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1d1abcbfa2174ab1ae9adf4cbf6581ef&page=${this.state.page}&pageSize=${this.state.pS}`;
        this.setState({loding:true})
        this.props.setProgress(30);
    let data= await fetch(url);
    let para= await data.json(); 
    this.props.setProgress(50);
    this.setState({articles :para.articles,
        tA:para.totalResults,
        loding:false}); 
        document.title=this.props.heading+"{"+ this.state.tA +"}" 

        this.props.setProgress(100);
    }
   async componentDidMount(){
    this.updateNews();
       
    }
   
   clickPrivous = async()=>{
    this.updateNews();
    
    this.setState({page:this.state.page-1,
                 });
    }
    clickNext = async()=>{
     

                       this.updateNews();
    
                       this.setState({page:this.state.page+1,
                                    });            

    }
    fetchMoreData=async()=>{
       
        this.setState({page:this.state.page+1,
        });  
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1d1abcbfa2174ab1ae9adf4cbf6581ef&page=${this.state.page}&pageSize=${this.state.pS}`;
        this.setState({loding:true})
    let data= await fetch(url);
    let para= await data.json(); 
    this.setState({articles :para.articles.concat(para.articles),
        tA:para.totalResults,
        loding:false}); 
      
    }
   

  render() {
   
    return (
        <div className="container my-3">
            <h2 className='text-center' style={{marginTop:"70px"}}>Monkey News from {this.props.heading} </h2>
           
           

          
          
          
        
            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={(this.state.articles.length!==this.state.tA) && <Spinner/>}
          loader={<Spinner/>}
        >
         
      
      <div className="container">
      <div className="row">
      {   this.state.articles.map((e)=>{ return <div key={e.url} className="col-md-4 my-3" >
        

         

        <div className="card">
        
        <div style={{position:"absolute", right:"0"}}> <span className="badge bg-danger">{e.source.name}</span></div>
        <img src={`${e.urlToImage?e.urlToImage:"https://images.indianexpress.com/2024/01/IND-AFG.png"}`} className="card-img-top" alt="..."/>
       
        <div className="card-body my-4 ">
            <h5 className="card-title">{e.title?e.title.slice(0,45):""}</h5>
            <p className="card-text">{e.description?e.description.slice(0,78):""}  </p>
            <p className="card-text"><small className="text-muted"> By {e.author?e.author:"Unknown"} on {new Date(e.publishedAt).toGMTString()} </small></p>
        
            <a href={e.url} target="_blank" rel="noreferrer" className="btn btn-sm btn-secondary ">Read More</a>
        </div>
        </div>

        </div>
           
        
            
            
        }
       
            
            )}
        
        </div>
          </div>
        
        </InfiniteScroll>
          
         
        
          
          
           
        </div>
      

      

     
    )
  }
}
