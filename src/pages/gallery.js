const Gallery = () => {
    return (<>
        <section className="service_panel">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="service_title">
                            <h2>Our Gallery</h2>
                            <div className="underline_2"></div>
                        </div>
                        <div className="col-sm-4">
                            <div className="cleaning_panel text-center">
                                <img src="images/1.jpg" className="img-responsive" />
                                <h4>Home Renovation</h4>

                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="cleaning_panel text-center">
                                <img src="images/2.jpg" className="img-responsive" />
                                <h4>Home Remodeling</h4>

                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="cleaning_panel text-center">
                                <img src="images/3.jpg" className="img-responsive" />
                                <h4>Kitchen & Cabinet</h4>

                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="cleaning_panel text-center">
                                <img src="images/4.jpg" className="img-responsive" />
                                <h4>Basement/Kitchen/Bathroom</h4>

                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="cleaning_panel text-center">
                                <img src="images/5.jpg" className="img-responsive" />
                                <h4>New Additions, Paintinga & Exterior</h4>

                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="cleaning_panel text-center">
                                <img src="images/6.jpg" className="img-responsive" />
                                <h4>Kitchcen & Lighting Renovation</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="testimonial_section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="testimonial_detail">
                            <h2>What Our Clients say</h2>
                            <div className="underline_2"></div>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <div id="carousel-example-generic1" className="carousel slide" data-ride="carousel">

                        <ol className="carousel-indicators testi_indicators">
                            <li data-target="#carousel-example-generic1" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-generic1" data-slide-to="1" className=""></li>
                        </ol>

                        <div className="carousel-inner">
                            <div className="item testimonial_des active">
                                <p>Best and professional construction and renovation company in Calgary. We are happy customer. We gave a kitchen renovation job and we found them professional and the job is done professionally. </p>
                                <h4 className="test">- Golden Restaurant, Calgary</h4>
                            </div>
                            <div className="item  testimonial_des">
                                <p>Very professionally completed my office flooring job. We are the happy customer</p>
                                <h4 className="test">- <a href="http://globalitechsystems.com">Global iTech Systems </a>- Software Development, Calgary</h4>
                            </div>

                        </div>

                        <a className="left carousel-control" href="#carousel-example-generic1" role="button" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#carousel-example-generic1" role="button" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    </>
    )
}
export default Gallery;