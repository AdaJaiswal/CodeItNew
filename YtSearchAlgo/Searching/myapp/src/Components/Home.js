import React from 'react'
import { useState, useEffect } from 'react'
import "../CSS/Common.css"
const Home = () => {
    const [keyword, setKeyword] = useState({ keyword: "" })
    const [gData, setgData] = useState([])
    function handleClick() {
        const searchBox = document.getElementById("searchBox")
        let data = {
            keyword: searchBox.value
        }
        setKeyword(data)
    }
    async function getData() {
        const video = await fetch("http://localhost:8000/getVid", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(keyword)
        })
        setgData(await video.json())
    }
    useEffect(() => {
        getData()
    }, [keyword])
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">CodTube</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <form className="d-flex w-75 ms-5" role="search">
                                <input id="searchBox" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success px-4" type="button" onClick={() => { handleClick() }}>Search</button>
                            </form>
                            <li className="nav-item ms-4">
                                <a href="http://localhost:3000/upload">

                                    <button type="button" className="btn btn-primary"> <i className="bi bi-upload pe-2"></i>Upload</button>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <div className='d-flex flex-row mt-3 flex-wrap ms-4' id="body">
                {gData.map((item, index) => {
                    return (
                        <div className="card wid m-2">
                            <img src={item.thumbnail} className=" card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.title.substring(0, 40)}</h5>
                                <p className="card-text">{item.description.substring(0, 100)}</p>
                                <a href={item.video} className="btn btn-primary">Watch Now</a>
                            </div>
                        </div>
                    )
                })

                }
            </div>

        </>
    )
}

export default Home