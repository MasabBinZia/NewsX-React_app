import React from 'react'

  const NewsItem =(props)=> {
    
      let { title, description, imgurl, newsurl,author,date,source} = props;
        return (
            <div className="my-3">
                <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-primary" style={{zIndex:'1',left:'50%'}}>
                            {source}</span>
                    <img src={!imgurl?"https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80":imgurl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small>By-{!author?"Unkwon": author} on {new Date (date).toGMTString()} </small></p>
                        <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-outline-warning">Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem


