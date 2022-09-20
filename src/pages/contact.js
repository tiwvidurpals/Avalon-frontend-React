import axios from "axios";
import { useState } from "react";

const Contact = () => {


    // Input Change Handling
    const [inputs, setInputs] = useState({
        fullName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    });

    console.log(inputs);
    const handleOnChange = (event) => {
        event.persist();

        setInputs((prev) => ({
            ...prev,
            [event.target.id]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios({
            method: "POST",
            url: "https://backend-construction.herokuapp.com/enquiry",
            data: inputs,
        })
            .then((r) => {
                console.log("hello");
            })
            .catch((r) => {
                console.log("error");
            });
    };
    return (<>
        <section>
            <h1>Test</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="contact_page">
                            <h2 className="page_title">Contact Us</h2>
                            <hr />
                        </div>
                        <div className="col-sm-8">
                            <div className="contact_form">
                                <form method="post" onSubmit={handleSubmit} name="form">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input name="name" id="fullName" onChange={handleOnChange} className="form-control contact_control" placeholder="Full Name" type="text" required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input name="address" id="address" onChange={handleOnChange} className="form-control contact_control" placeholder="Address" type="text" required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input name="email" id="email" onChange={handleOnChange} className="form-control contact_control" placeholder="E-mail" type="email" required />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input name="phone" id="phone" onChange={handleOnChange} className="form-control contact_control" placeholder="Contact No" type="text" required />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <textarea name="message" id="message" onChange={handleOnChange} className="form-control contact_control" rows="4" placeholder="Leave Your Message"></textarea>
                                        </div>
                                        <input name="submit" className="btn btn-contact" value="Send Message" type="submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="contact_detail">
                                <h4>Contact Detail</h4>
                                <p>Avalon- Kitchen & Bath Construction & Renovation</p>

                                <p>Address :  Calgary AB </p>
                                <p>Phone :  <a href="(403) 921-5533"> (403) 921-5533</a></p>
                                <p>Email :  <a href="info@avalonkb.com">info@avalonkb.com</a></p>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="google_map">

                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321303.3268833367!2d-114.35433702278333!3d51.012781987732566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C+AB!5e0!3m2!1sen!2sca!4v1513606919968" width="600" height="450" title="" frameborder="0" style={{ border: '0' }} allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>

    )

}
export default Contact;