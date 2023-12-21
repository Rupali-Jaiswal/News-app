import React, { Component } from 'react'
import NewsItms from './NewsItms'
import Navbar from './Navbar'
import Loading from './Loading';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export class News extends Component {
    static defaultProps={
        category:'general',
        title:'Top Headlines'
    }
    static propTypes = {
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            page:1,
            loading:true
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=1589668a8f794e4d8822352e6a2afd2c&page=${this.state.page}&pageSize=24`
        let data = await fetch(url)
        let jsondata = await data.json()
        this.setState({ articles: jsondata.articles, loading:false })
    }
    
    pageChnge= async (p)=> {
        this.setState({loading:true})
        let url = `https://newsapi.org/v2/everything?q=keyword&apiKey=1589668a8f794e4d8822352e6a2afd2c&page=${p}&pageSize=24`
        let data = await fetch(url)
        let jsondata = await data.json()
        this.setState({ articles: jsondata.articles ,page:p,loading:false})
    }
    searchTopic=async(value)=>{
        this.setState({loading:true})
        let url = `https://newsapi.org/v2/everything?q=${value}&apiKey=1589668a8f794e4d8822352e6a2afd2c&pageSize=24`
        let data = await fetch(url)
        let jsondata = await data.json()
        this.setState({ articles: jsondata.articles ,loading:false})
    }
    render() {
        return (
          <div>
            <Navbar searchTopic={this.searchTopic}/>
            <div className="container my-3">
                <h1 className='mt-4'>{this.props.title}</h1>
                {this.state.loading && <Loading/>}
                <div className="row">
                    {this.state.articles.map((x) => {
                        return <div className="col-md-4 my-3" key={x.url}>
                            <NewsItms urlToImage={x.urlToImage ? x.urlToImage : "https://source.unsplash.com/random/200x200?sig=1"} discription={(x.description && x.description != "[Removed]") ? x.description.slice(0, 60) : "See the Geminid meteor shower 2023 light up the sky in these amazing photos - Space.com".slice(0, 90)} title={(x.title && x.title != "[Removed]") ? x.title.slice(0, 40) : "The meteor shower continues through the weekend.".slice(0, 40)} url={x.url ? x.url : "https://www.space.com/geminid-meteor-shower-amazing-photos-december-2023"} />
                        </div>
                    })
                    }
                </div>
                {!this.state.loading &&<nav aria-label="Page navigation example" style={{display:"flex", justifyContent:"center"}}>
                    <ul className="pagination">
                        <li className="page-item" style={{ pointerEvents: this.state.page === 1 ? "none" : "auto"}}><Link className="page-link" to="#" onClick={this.state.page==1? null:()=>{this.pageChnge(this.state.page-1)}}>previous</Link></li>
                        <li className="page-item"><Link className="page-link" to="#" onClick={()=>{this.pageChnge(1)}}>1</Link></li>
                        <li className="page-item"><Link className="page-link" to="#" onClick={()=>{this.pageChnge(2)}}>2</Link></li>
                        <li className="page-item"><Link className="page-link" to="#" onClick={()=>{this.pageChnge(3)}}>3</Link></li>
                        <li className="page-item"><Link className="page-link" to="#" onClick={()=>{this.pageChnge(this.state.page+1)}}>Next</Link></li>
                    </ul>
                </nav>}
            </div >
          </div>
        )
    }
}

export default News