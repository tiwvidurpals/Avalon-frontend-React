const Footer=() =>{
    return(<>


   <section className="info1">
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-sm-6">
                <div className="single">
                    <h1>Contact Info</h1>
                    <ul>
                        <li><p>Address : SW, Calgary AB , Canada</p></li>
                        <li><p>Phone : <a href="tel:(403) 921-5533">(403) 921-5533</a></p></li>
                        <li><p>Email : <a href="mailto:info@avalonkb.com">info@avalonkb.com</a></p></li>
                    </ul>
                </div>
            </div>

           <div className="col-md-3 col-sm-6">
                <div className="single">
                    <h1>Work Highlights</h1>
                    <li><a href="kitchen-bathroom-renovation.php">Kitchen & Bathroom Renovation</a></li>
                                              <li><a href="basement-renovation.php">Basement Renovation</a></li>
                                               <li><a href="exterior-renovation.php">New Additions & Exterior Renovations</a></li>
                                                <li><a href="about.php">Home Renovation</a></li>
                                                
                                                
                                                <li><a href="flooring.php">Flooring (Carpet/Tile/Hardwood)</a></li>
                                               
                                                <li><a href="painting.php">Painting (Interior/Exterior)</a></li>
                </div>
            </div>

           

            <div className="col-md-6 clear-both">
                <div className="contact_header">
                    <h3>Contact Form</h3>
                </div>
                <form method="post" action="<?= $_SERVER['PHP_SELF']; ?>" name="form">
                    <div className="col-sm-6">
                        <div className="single">
                            <input type="text" name="name" className="form-control footer-control" value="" placeholder="Full Name" required/>
                            <input type="text" name="phone" className="form-control footer-control" value="" placeholder="Phone Number" required/>
                            <input type="email" className="form-control footer-control" name="email" value="" placeholder="Email ID" required/>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="single">
                            <textarea name="message" rows="3" className="form-control footer-control" placeholder="Your Message"></textarea>
                            <input type="submit" name="submit" className="btn btn-send" value="Send Message"/>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-sm-12 border">
                <div className="col-sm-6">
                    <div className="copyright">
                        <h4>&COPY; Avalon - Kitchroom & Bathroom Renovation 2017. All Right Reserved</h4>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="develop pull-right">
                        <h4>
                            Designed & Powered By : <a target="_blank" href="http://globalitechsystems.com/">GiS Calgary</a></h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
     
    </>)
}
export default Footer;