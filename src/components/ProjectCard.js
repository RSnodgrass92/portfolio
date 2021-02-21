export function  ProjectCard (props)
{
    return(
        <>
        <div className="container mt-3">
            <div className="row my-1">
                <div className="col">
                    <img className="img img-fluid main-img-border" src={props.image} />
                </div>   
            </div>
        </div>
        </>
    )
}