import React, { Component } from 'react'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {


    articles= [ 
        
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "Sports Desk",
        "title": "India vs Afghanistan Live Streaming, 2nd T20: When and where to watch IND vs AFG match live?",
        "description": "India vs Afghanistan 2nd T20 Live Streaming: Virat Kohli returns to the T20 side as India look to seal 3-match series against Afghanistan.",
        "url": "https://indianexpress.com/article/sports/cricket/india-vs-afghanistan-live-streaming-2nd-t20-9108218/",
        "urlToImage": "https://images.indianexpress.com/2024/01/IND-AFG.png",
        "publishedAt": "2024-01-13T14:54:19Z",
        "content": "IND vs AFG 2nd T20 Live Streaming: India will look to seal the 3-match T20I series against Afghanistan when they take them on in the second match on Sunday at Indore. In the last match, Shivam Dube’s… [+1273 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "Sports Desk",
        "title": "‘Who’s Virat Kohli? A player?’: Ronaldo reacts after being asked about India cricketer",
        "description": "Kohli is the 13th most followed celebrity on Instagram with a follower count of 265 million.",
        "url": "https://indianexpress.com/article/sports/cricket/whos-virat-kohli-a-player-ronaldo-reacts-after-being-asked-about-india-cricketer-9106231/",
        "urlToImage": "https://images.indianexpress.com/2023/11/Virat-Kohli-2-2.jpg",
        "publishedAt": "2024-01-12T06:29:22Z",
        "content": "Indian cricket talisman Virat Kohli may have an army of followers on social media but there are still some corners of the world that he is not easily recognisable. According to Statista, Kohli is the… [+1588 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "Sports Desk",
        "title": "‘Virat Kohli and I have been texting for a few years’: Novak Djokovic opens up on bond with Indian cricketer",
        "description": "Virat Kohli also shared a funny anecdote about his first interaction with Novak Djokovic on direct messages.",
        "url": "https://indianexpress.com/article/sports/cricket/novak-djokovic-virat-kohli-texting-for-few-years-australian-open-bond-indian-cricket-team-9108664/",
        "urlToImage": "https://images.indianexpress.com/2024/01/KOHLI-AND-DJOKOVIC-CROP.png",
        "publishedAt": "2024-01-14T06:05:47Z",
        "content": "They have never met each other, but over the last few years, Virat Kohli and Novak Djokovic have forged a bond via text messages, both players have revealed. Recently, Djokovic gave a brief glimpse i… [+3421 chars]"
    },
    ]

    constructor(){
        super();
        this.state={
            articles:this.articles,
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
            <h2 className='text-center'>Monkey News from {this.props.heading} </h2>
           
        
        
           <div className="row ">
          
        
            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={(this.state.articles.length!==this.state.tA) && <Spinner/>}
          loader={<Spinner/>}
        >
          { 
        //   !this.state.loding && 
          
          this.state.articles.map((e)=>{ return <div key={e.url} className="  " >
            <div className='col-sm' >

           
            <div style={{position:"absolute", right:"0"}}> <span class="badge bg-danger">{e.source.name}</span></div>
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
        </InfiniteScroll>
          
         
        
          
          
           
        </div>


        {/* <div className='d-flex justify-content-between my-4'>

            <button  disabled={this.state.page<=1} type='button' className='float-left btn btn-dark' onClick={this.clickPrivous}>&laquo;Privious</button>
            <button disabled={this.state.page>=(this.state.tA/this.state.pS)}type='button' className="float-right btn btn-dark" onClick={this.clickNext}>Next &raquo;</button>
        </div> */}

      </div>
    )
  }
}
