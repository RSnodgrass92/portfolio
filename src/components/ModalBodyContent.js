
export function ModalBodyContent(props)
{
    return(
        <div className="container-fluid">
            <div className="row my-2 align-items-center">
                <div className="col-12 col-xl-8 ">
                <video className="modal-video"  autoPlay muted controls loop>
                    <source src={props.videoSrc} />
                </video>
                </div>
                <div className="col-12 col-xl-4" id="modal-description">{props.description}</div>
            </div>
        </div>
               
    )
}
