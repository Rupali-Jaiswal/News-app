import React from 'react'

export default function NewsItms(props) {
    let { title, urlToImage, discription, url } = props
        return (
            <div>
                <div className="card" style={{ width: "18rem"}}>
                    <a href={url} style={{color:"black"}}>
                    <img className="card-img-top" src={urlToImage}style={{objectFit:"cover", height:"150px", overflow:"hidden" }} alt='' />
                    <div className="card-body">
                        <h6 className="card-title" style={{height:"50px"}}>{title}..</h6>
                        <p className="card-text"style={{height:"60px"}}>{discription}...</p>
                        <a href={url} className="btn btn-dark">See in Detail</a>
                    </div>
                    </a>
                </div>
            </div>
        )
}
