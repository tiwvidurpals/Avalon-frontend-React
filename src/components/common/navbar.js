import { Link } from "react-router-dom";


const Navigation = () => {

    const openDropDown = () => {
        let element = document.getElementsByClassName("dropdown")[0];
        if (element.className === "dropdown") {
            element.className = "dropdown open";
        } else {
            element.className = "dropdown";
        }

    };

    return (<>
        <section className="menu-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="main-menu" id="main-menu">
                            <nav className="navbar navbar-default" role="navigation">

                                <div className="navbar-header pull-right">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div>


                                <div className="collapse navbar-collapse navbar-ex1-collapse">
                                    <ul className="nav navbar-nav navbar-left">
                                        <li className="active"><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About Us</Link></li>

                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={() => openDropDown()}>Our Services <b className="caret"></b></a>
                                            <ul className="dropdown-menu dropdown-menu-left">
                                                <li><Link to="/renovation">Kitchen & Bathroom Renovation</Link></li>
                                                <li><a href="basement-renovation.php">Basement Renovation</a></li>
                                                <li><a href="exterior-renovation.php">New Additions & Exterior Renovations</a></li>
                                                <li><a href="about.php">Home Renovation</a></li>


                                                <li><a href="flooring.php">Flooring (Carpet/Tile/Hardwood)</a></li>

                                                <li><a href="painting.php">Painting (Interior/Exterior)</a></li>

                                            </ul>
                                        </li>

                                        <li><Link to="/renovation">Renovation</Link></li>
                                        <li><Link to="/homeremodeling">House Remodeling</Link></li>


                                        <li><Link to="/gallery">Gallery</Link></li>

                                        <li><Link to="/contact" title="">Contact us</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    </>)
}
export default Navigation;