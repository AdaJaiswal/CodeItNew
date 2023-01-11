import React, { useEffect, useState } from 'react'
import "../CSS/Common.css"
const Home = () => {
    // const body = document.getElementById("body")
    // console.log(searchBox.value)
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
        const video = await fetch(`http://localhost:8000/getVid`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(keyword)
        });
        setgData(await video.json())
    }
    useEffect(() => {
        getData()
    }, [keyword])
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">CodTube</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0  w-100">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="http://localhost:3000/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <form className="d-flex w-75 ms-5" role="search">
                                <input className="form-control me-2" type="search" id="searchBox" placeholder="Search"
                                    aria-label="Search" />
                                <button className="btn btn-outline-success px-4" id="sBtn" type="button" onClick={() => { handleClick() }}>Search</button>
                            </form>
                            <li className="nav-item ms-4">
                                <a className="btn btn-primary px-3" href="http://localhost:3000/upload" role="button"><i
                                    className="bi bi-upload pe-2"></i>Upload</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="d-flex flex-row  mt-3 flex-wrap ms-4" id="body">

                {gData.map((item, index) => {
                    return (
                        <div key={item._id + index + 2} className="card m-2 mt-3 wid">
                            <img key={item._id + index + 2} src={item.thumbnail} className="card-img-top" alt="..." />
                            <div key={item._id + index + 3} className="card-body">
                                <h5 key={item._id + index + 4} className="card-title">{item.title.substring(0, 40)}...</h5>
                                <p key={item._id + index + 5} className="card-text">{item.description.substring(0, 100)}...</p>
                                <a key={item._id + index + 6} href={item.video} className="btn btn-primary">Watch Now</a>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default Home