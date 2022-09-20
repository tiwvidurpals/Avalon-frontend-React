import Footer from "../components/common/footer";
import Header from "../components/common/header";
import Navbar from "../components/common/navbar";
import Services from "../components/common/services";
import "../css/style.css";
// import "../css/responsive.css"

const Home = () => {
    return (<>


        <section>
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="4"></li>

                </ol>


                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <img src="images/aslider5.jpg" alt="" className="img-responsive" style={{ width: '100%' }} />
                        <div className="carousel-caption">

                        </div>
                    </div>
                    <div className="item">
                        <img src="images/aslider4.jpg" alt="" className="img-responsive" style={{ width: '100%' }} />
                        <div className="carousel-caption">

                        </div>
                    </div>

                    <div className="item">
                        <img src="images/aslider3.jpg" alt="" className="img-responsive" style={{ width: '100%' }} />
                        <div className="carousel-caption">

                        </div>
                    </div>

                    <div className="item">
                        <img src="images/aslider2.jpg" alt="" className="img-responsive" style={{ width: '100%' }} />
                        <div className="carousel-caption">

                        </div>
                    </div>

                    <div className="item">
                        <img src="images/aslider1.jpg" alt="" className="img-responsive" style={{ width: '100%' }} />
                        <div className="carousel-caption">

                        </div>
                    </div>




                </div>


                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section>

        <section className="inner_page">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="about_page">
                            <h2 className="page_title">Wel-come to Avalon - Kitchen & Bath Renovation</h2>
                            <hr />
                            <img src="images/welcome.jpg" className="img-responsive" />
                            <p>Welcome to Avalon- <strong>Kitchen & Bath Renovation</strong> & <strong>Construction</strong> Calgary. We are the <strong>professional company</strong> for <strong>kitchen & bath renovation</strong>, basement development &  renovation, <strong>house renovation</strong>, and remodeling, <strong>custom cabinetry</strong> and  <strong>general construction project management</strong>. We also <strong>offer</strong> new additions,<strong> exterior renovations</strong>, flooring,<strong> drywall </strong>and <strong>painting</strong>(interior & exterior).

                            </p>
                            <p>Avalon Kitchen & Bath provides <strong>cost-effective home renovations</strong>, general contractor services, <strong>home remodeling</strong> and <strong>design build services</strong>. We <strong>focus</strong> on <strong>your needs</strong>, resale value and <strong>investment goals</strong>. Over past 15 years, we have built affordable and luxury custom homes across Calgary.

                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Services />

        {/*         
        <section className="service_panel">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="service_title">
                            <h2>Our Services</h2>
                            <div className="underline_2"></div>
                        </div>
                        <div className="col-sm-4">
                            <div className="cleaning_panel text-center">
                                <img src="images/kitchen-renno.jpg" className="img-responsive"/>
                                <h4>Kitchen Renovation</h4>
                                <div className="underline"></div>
                                <p> We are the professional kitchen renovation company for  Calgary & surrounding cities. We have been serving for more than 15 years for kitchen and bathroom renovation. We also provide painting jobs while house renovation.
</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="cleaning_panel text-center">
                                <img src="images/bath-reno.jpg" className="img-responsive"/>
                                <h4>Bathroom Renovation & Construction</h4>
                                <div className="underline"></div>
                                <p>Avalon specilized in bathroom renovation and specilized in homes remodeling. We have been doing bathroom and kitchen renovation &  remodeling works for 15 years.</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="cleaning_panel text-center">
                                <img src="images/basement-reno.jpg" className="img-responsive"/>
                                <h4>Basement Renovation & Modeling</h4>
                                <div className="underline"></div>
                                <p>We have been working since 15 years for basement renovation and new home building. We builds new homes and remodel the old houses in Calgary and surrounding areas. We also work for additions as well. Please call us for quote.
</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="cleaning_panel text-center">
                                <img src="images/bath.jpg" className="img-responsive"/>
                                <h4>Basement/Kitchen/Bathroom</h4>
                                <div className="underline"></div>
                                <p>We provide basement, kitchen, bathroom renovations. If you need to renovate basement or kitchen or bathroom in your house.</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="cleaning_panel text-center">
                                <img src="images/add.jpg" className="img-responsive"/>
                                <h4>New Additions, Drywall & Exterior</h4>
                                <div className="underline"></div>
                                <p>We provide new additions, drywall and exterior renovation services. We have been doing these service for 15 years. Please callus for quote.

</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="cleaning_panel text-center">
                                <img src="images/painting.jpg" className="img-responsive"/>
                                <h4>Painting, Flooring & Vinyl Planks</h4>
                                <div className="underline"></div>
                                <p>We provide professional services for painting (interiro/exterior), flooring (carpet/tile/hardwood) and vinyl planks flooring.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

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
                                <p>Avalon is the best and professional kitchen and bathroom renovation company in Calgary. I decided to make changes in kitchen, Avalon did the best job, and completed professionally. </p>
                                <h4 className="test">- Johnson, SW Calgary</h4>
                            </div>
                            <div className="item  testimonial_des">
                                <p>A trusted company for renovation and construction. I like the way they renovate my bathroom. It is professionally completed my bathroom renovation. Superb job !</p>
                                <h4 className="test">- <a href="http://globalitechsystems.com">Ken, SE Calgary</a></h4>
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







    </>)
}
export default Home;
