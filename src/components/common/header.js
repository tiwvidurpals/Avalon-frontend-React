const Header =() =>{
    return(<>
    

    <section className="top_header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className=" col-md-8 col-sm-8 col-xs-12">
                            <div className="address">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                <p> Calgary AB </p>
                            </div>
                            <div className="phone">
                                <i className="fa fa-phone-square"></i>
                                <p>(403) 921-5533</p>
                            </div>
                            <div className="email">
                                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                <p>info@avalonkb.com</p>
                            </div>

                        </div>
                        <div className=" col-md-4 col-sm-4 col-xs-12">
                            <div className="twitter">
                                <a href="#"><i className="fa fa-twitter-square"></i></a>
                            </div>

                            <div className="facebook">
                                <a href="#"><i className="fa fa-facebook-square"></i></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="logo_section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title col-sm-3">
                            <div className="logo">
                                <img src="images/logo.png" className="img-responsive" alt=""/>
                            </div>
                        </div>
                        <div className="title col-sm-6">
                            <div className="slogan text-center">
                            	
                                <h3> RENOVATION & CONSTRUCTION </h3>
                                <p>"Kitchen | Bathroom | Basement"</p>
                               
                            </div>
                        </div>
                        <div className="title col-sm-3">
                            <div className="acc">
                                <img src="images/bbb-logo.png" className="img-responsive"/>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default Header;