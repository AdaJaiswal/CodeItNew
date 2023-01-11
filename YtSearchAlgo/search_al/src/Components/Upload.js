import React from 'react'

const Upload = () => {

    async function handleClick() {
        const form = document.getElementsByClassName("formD")
        console.log(form, "agjbn")
        let data = {
            title: form[0].value,
            thumbnail: form[1].value,
            description: form[2].value,
            tags: form[3].value,
            video: form[4].value,
        }
        console.log(data, "akgj")
        await fetch(`http://localhost:8000/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    }
    return (
        <div>
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
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success px-4" type="submit">Search</button>
                            </form>
                            <li className="nav-item ms-4">
                                <a className="btn btn-primary px-3" href="http://localhost:3000/upload" role="button"><i
                                    className="bi bi-upload pe-2"></i>Upload</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <form className="row g-3 m-5">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Title</label>
                    <input type="text" className="form-control formD" id="title" />
                </div>
                <div className="col-md-6">
                    <label for="inputPassword4" className="form-label">Thumbnail-Link</label>
                    <input type="text" className="form-control formD" id="thumbnail" placeholder="https://" />
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Description</label>
                    <input type="text" className="form-control formD" id="description" placeholder="This video will ..." />
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label">Tags</label>
                    <input type="text" className="form-control formD" id="tags" placeholder="javascript, react, html" />
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label">Video-Link</label>
                    <input type="text" className="form-control formD" id="video" placeholder="https://" />
                </div>

                <div className="col-12">
                    <button type="reset" id="submit" className="btn btn-primary" onClick={() => { handleClick() }}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Upload