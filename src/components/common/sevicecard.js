const ServiceCard = (props) => {
    return (<>

        <div className="col-sm-4">
            <div className="cleaning_panel text-center">
                <img src={props.img} className="img-responsive" />
                <h4>{props.title}</h4>
                <div className="underline"></div>
                <p>{props.description}</p>
            </div>
        </div>

    </>)
}
export default ServiceCard;