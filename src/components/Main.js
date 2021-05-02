import {ProjectCard} from "./ProjectCard"
import {useState} from "react"
import {Modal, Button} from "react-bootstrap"
import {ModalBodyContent} from "./ModalBodyContent"
import ccimg from "../assets/cc.PNG"
import ftimg from "../assets/ftPNG.PNG"
import wdwimg from "../assets/wdw.PNG"
import {modalFiller} from "./Projects"


export function Main(props)
{
    const [state, setState] = useState({

        isModalOpen: false,
        modalContent: "", 
        modalHeader: "", 
    })
    
    return (
        <>
        <div className="main">
            <div className="container-fluid">

                <div className="row text-center">
                    <div className="col">
                     HELLO, I'm Ryan, I Build things for the web
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col">
                     Check out my recent work
                    </div>
                </div>

                <div className="row text-center">
                    
                    <div className="col-12 col-xl-6">
                        <h2 className="project-card-header-text">Fun Thoughts Clothing Co</h2>
                        <div className="cardHover" onClick={()=>setState({...state, isModalOpen: true, modalHeader:"Fun Thoughts Clothing Co.", modalContent:modalFiller[1]})}><ProjectCard image={ftimg}/></div>
                    </div>
                    <div className="col-12 col-xl-6">
                        <h2 className="project-card-header-text">Captured Creations Photography</h2>
                        <div className="cardHover" onClick={()=>setState({...state, isModalOpen: true, modalHeader:"Captured Creations Photography", modalContent:modalFiller[0]})}><ProjectCard image={ccimg}/></div>
                    </div>
                    <div className="col-12 col-xl-6 offset-xl-3">
                        <h2 className="project-card-header-text">Web Dev Wiki</h2>
                        <div className="cardHover" onClick={()=>setState({...state, isModalOpen: true, modalHeader:"Web Dev Wiki", modalContent:modalFiller[2]})}><ProjectCard image={wdwimg}/></div>
                    </div>
                </div>
            </div>
        </div>

        <Modal show={state.isModalOpen} centered size="xl">
            <Modal.Header className="modal-header-text" id="modal-head">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-10 d-none  d-lg-block d-xl-block">
                            <h2 className="modal-header-font-large">{state.modalHeader}</h2>
                        </div>
                        <div className="col-10 d-none d-md-block d-lg-none ">
                            <h2 className="modal-header-font-medium">{state.modalHeader}</h2>
                        </div>
                        <div className="col-9 d-md-none d-lg-none d-xl-none">
                            <h2 className="modal-header-font-small">{state.modalHeader}</h2>
                        </div>
                        <div className="col-3 col-md-2">
                        <button className="btn btn-danger" onClick={()=>setState({...state, isModalOpen: false})}>X</button>
                        </div>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body className="p-0">
            <div className="container">
                    <div className="row">
                        <div className="col">
                        {state.modalContent}
                        </div>
                    </div>
                </div>
 
            </Modal.Body>
        </Modal>

        </>
        
    )
}