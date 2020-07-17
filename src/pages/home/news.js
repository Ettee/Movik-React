import React, { Component } from 'react'
import { connect } from "react-redux";
import * as action from "../../redux/action";
class News extends Component {
  constructor(props){
    super(props)
    this.props.getNews();
    this.state={
      articlesArr:[]
    }
  }
  getNews=()=>{
    let {news}=this.props
    let article={}
    let articlesArr=[]
    if(Object.entries(news).length > 0){
      if( typeof news.articles !=="undefined"){
        news.articles.slice(0,6).map(item=>{
          article=item
          articlesArr.push(article)
        })
      }
    }
    return articlesArr
  }
  renderNews=()=>{
    let news= this.getNews()
    let url=''
    return news.map(item=>{
      url="url(" + item.urlToImage+ ")"
      return(
        <div className="grid-item">
          <div className="card-grid-news">
            <a href={item.url} target="_blank">
              <div className="news-img">
                <div className="img" style={{backgroundImage: url}}></div>
              </div>
      <h2 className="news-title">{item.title}</h2>
            </a>
            <p className="news-descript">
              {item.description}
            </p>
          </div>
        </div>
      )
    })
    
  }
    render() {
        return (
              <section className="news-section" id="news-block">
                <h1 className="title-section">Tin mới</h1>
                <div className="container grid-block">
                  {/* react component block */}
                  {this.renderNews()}
                  {/* end react component block */}
                </div>
              </section>    
        )
    }
}
const mapStateToProps = state => {
  return {
    news: state.newsReducer.articles
    
  };
}
const mapDispatchToProps = dispatch => {
  return {
      getNews: () => {
          dispatch(action.actGetNews());
      },
      
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (News)
