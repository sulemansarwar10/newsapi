import React, { useState, useEffect } from 'react'
//import card from './news.json'
import Loading from './loading'

import InfiniteScroll from 'react-infinite-scroll-component';


export default function News(props) {

    const [article, setarticle] = useState([]);
    const [totalresults, settotalresults] = useState(0)
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(true)
    //const article = card.articles;
    //console.log(article[1].title)
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // useEffect(() => {
    const updatenews = async () => {
        setloading(true);
        //const url =`https://newsapi.org/v2/everything?q=Apple&from=2021-08-31&sortBy=popularity&apiKey=${APIKEY}`;

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setloading(false);
        setarticle(parsedData.articles);
        console.log(parsedData.articles);
        settotalresults(parsedData.totalResults)
    }
    // }, [props.category])
    // //updatenews();

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NEWSAPI`;
        updatenews();
        // eslint-disable-next-line
    }, [props.category])


    const fetchData = async () => {

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setpage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()

        setarticle(article.concat(parsedData.articles));
        console.log(parsedData.articles);
        settotalresults(parsedData.totalResults)

    }

    console.log("art", totalresults)
    return (

        <>

            <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsAPI - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
          
          
            {loading && <Loading />}
          
            <InfiniteScroll
                dataLength={article.length} //This is important field to render the next data
                next={fetchData}
                hasMore={article.length !== totalresults}
                loader={<Loading />} >

                <div className="container mx-3">
                    <div className="row" >
                        {article.map((obj, ind) => {
                            return (

                                <div className="card mx-3 my-3" style={{ width: '18rem' }} key={ind}>
                                    <img src={obj.urlToImage ? obj.urlToImage : "nopic.png"} className="card-img-top" alt="..." />

                                    <div className="card-body">
                                        <h5 className="card-title">{obj.title}</h5>
                                        <p className="card-text">{obj.description}</p>
                                        <a href={obj.url} rel="noreferrer" target="_blank" className="btn btn-primary">View More</a>
                                    </div>
                                </div>


                            );


                        })
                        }
                    </div>
                </div>

            </InfiniteScroll>

</>
    );
}
