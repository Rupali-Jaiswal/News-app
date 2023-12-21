import React, { Component } from 'react'

export class NewsItms extends Component {
    render() {
        let { title, urlToImage, discription, url } = this.props
        return (
            <div>
                <div className="card" style={{ width: "18rem"}}>
                    <a href={url} style={{color:"black"}}>
                    <img className="card-img-top" src={urlToImage}style={{objectFit:"cover", height:"175px", overflow:"hidden" }} />
                    <div className="card-body">
                        <h5 className="card-title" style={{height:"45px"}}>{title}..</h5>
                        <p className="card-text"style={{height:"50px"}}>{discription}...</p>
                        <a href={url} className="btn btn-dark">See in Detail</a>
                    </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default NewsItms