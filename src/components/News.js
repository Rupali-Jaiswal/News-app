import React from 'react'
import NewsItms from './NewsItms'
import Navbar from './Navbar'
import Loading from './Loading';
import { a } from 'react-router-dom';
import { useState, useEffect } from 'react';

const News = (props) => {
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(false)
    const [Page, setPage] = useState(1)
    const [title, settitle] = useState("TOP-HEADLINES")
    useEffect(() => {
        update()
    }, [])


    const update = async () => {
        setloading(true)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=1589668a8f794e4d8822352e6a2afd2c&page=${Page}&pageSize=30`
        let data = await fetch(url)
        let jsondata = await data.json()
        setarticles(jsondata.articles)
        setloading(false)
        settitle(props.title)
    }
    
    const pageChnge = async (p) => {
        setloading(true)
        let url = `https://newsapi.org/v2/everything?q=keyword&apiKey=1589668a8f794e4d8822352e6a2afd2c&page=${p}&pageSize=30`
        let data = await fetch(url)
        let jsondata = await data.json()
        setarticles(jsondata.articles)
        setloading(false)
        setPage(p)
    }
    const searchTopic = async (value) => {
        setloading(true)
        let url = `https://newsapi.org/v2/everything?q=${value}&apiKey=1589668a8f794e4d8822352e6a2afd2c&pageSize=24`
        let data = await fetch(url)
        let jsondata = await data.json()
        setarticles(jsondata.articles)
        setloading(false)
        settitle(value)
    }
    const NextPage=()=>{
         if(Page*24<articles.length())
         return false
        else
        return true
    }
    return (
        <div>
            <Navbar searchTopic={searchTopic} />
            <div className="container">
                <h1 style={{ display: "flex", justifyContent: "center", marginTop: "70px" }}>{title}</h1>
                {loading && <Loading />}
                <div className="container">
                    <div className="row">
                        {articles.map((x) => {
                            return <div className="col-md-4 my-3" key={x.url}>
                                <NewsItms urlToImage={x.urlToImage ? x.urlToImage : "https://source.unsplash.com/random/200x200?sig=1"} discription={(x.description && x.description != "[Removed]") ? x.description.slice(0, 90) : "See the Geminid meteor shower 2023 light up the sky in these amazing photos - Space.com".slice(0, 90)} title={(x.title && x.title != "[Removed]") ? x.title.slice(0,80) : "The meteor shower continues through the weekend.".slice(0, 80)} url={x.url ? x.url : "https://www.space.com/geminid-meteor-shower-amazing-photos-december-2023"} />
                            </div>
                        })
                        }
                    </div>
                </div>
                {!loading && <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class={Page==1? "page-item disabled":"page-item"}>
                            <a class="page-link" href='#' onClick={Page == 1 ? null : () => { pageChnge(Page - 1)}}>Previous</a>
                        </li>
                        <li class={Page==1? "page-item active":"page-item"}><a class="page-link" href="#" onClick={() => { pageChnge(1) }}>1</a></li>
                        <li class={Page==2? "page-item active":"page-item"}>
                            <a class="page-link" href="#" onClick={() => { pageChnge(2) }}>2</a>
                        </li>
                        <li class={Page==3? "page-item active":"page-item"}><a class="page-link" onClick={() => { pageChnge(3) }} href="#">3</a></li>
                        <li class={Page==3?"page-item disabled":"page-item" }>
                            <a class="page-link" onClick={() => { pageChnge(Page + 1) }} href="#">Next</a>
                        </li>
                    </ul>
                </nav>}
            </div >
        </div>
    )
}

export default News
News.defaultProps = {
    category: 'general',
    title: 'Top Headlines'
}