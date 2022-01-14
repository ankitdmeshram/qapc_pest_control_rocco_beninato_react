import React from 'react'

const HomeSlider = () => {
    return (
        <>
              <section className="gs-hero">
        <div className="container-fluid" style={{padding: "0"}}>
            <div id="carouselExampleControls" data-interval="3000" className="carousel slide gs-hero-slide"
                data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="gs-hero-box text-center">
                            <h1>
                                Pest Control Sevices
                            </h1>
                            <p>
                                including Durham, York Region, Toronto, Markham, Vaughan Richmond Hill, Pickering, Ajax,
                                Whitby and Uxbridge.
                            </p>
                            <a href="#contact" className="btn gs-btn">Contact Us</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="gs-hero-box text-center">
                            <h1>
                                Pest Control Sevices
                            </h1>
                            <p>
                                including Durham, York Region, Toronto, Markham, Vaughan Richmond Hill, Pickering, Ajax,
                                Whitby and Uxbridge.
                            </p>
                            <a href="#contact" className="btn gs-btn btn-lg">Contact Us</a>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </section>
        </>
    )
}

export default HomeSlider
