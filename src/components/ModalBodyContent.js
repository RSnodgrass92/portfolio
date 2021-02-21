import test from "../assets/test.jpg"
export function ModalBodyContent(props)
{
    return(
        <div className="container-fluid">
            <div className="row mt-3 align-items-center">
                <div className="col-12 col-lg-7 ">
                <img className="img img-fluid" src={test} />
                </div>
                <div className="col-12 col-lg-5" id="modal-description">{props.description}</div>
            </div>
        </div>
               
    )
}
