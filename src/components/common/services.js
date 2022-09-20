import ServiceCard from "./sevicecard";

const Services = () => {

    const serviceList = [{ id: 1, title: 'Kitchen Renovation', description: 'We are the professional kitchen renovation company for  Calgary & surrounding cities. We have been serving for more than 15 years for kitchen and bathroom renovation. We also provide painting jobs while house renovation.', img: 'images/kitchen-renno.jpg' },
    { id: 2, title: 'Kitchen Renovation', description: 'We are the professional kitchen renovation company for  Calgary & surrounding cities. We have been serving for more than 15 years for kitchen and bathroom renovation. We also provide painting jobs while house renovation.', img: 'images/kitchen-renno.jpg' },
    { id: 3, title: 'Kitchen Renovation', description: 'We are the professional kitchen renovation company for  Calgary & surrounding cities. We have been serving for more than 15 years for kitchen and bathroom renovation. We also provide painting jobs while house renovation.', img: 'images/kitchen-renno.jpg' },
    { id: 4, title: 'Kitchen Renovation', description: 'We are the professional kitchen renovation company for  Calgary & surrounding cities. We have been serving for more than 15 years for kitchen and bathroom renovation. We also provide painting jobs while house renovation.', img: 'images/kitchen-renno.jpg' }]
    return (<>
        <section className="service_panel">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="service_title">
                            <h2>Our Services</h2>
                            <div className="underline_2"></div>
                        </div>

                        {serviceList.map((item) => {
                            return (<ServiceCard key={item.id} title={item.title} img={item.img} description={item.description} />)
                        })}

                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default Services;