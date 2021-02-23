import {ProjectCard} from "./ProjectCard"
import {useState} from "react"
import {Modal, Button} from "react-bootstrap"
import {ModalBodyContent} from "./ModalBodyContent"
import ccimg from "../assets/cc.PNG"
import ftimg from "../assets/ftPNG.PNG"
import ccvid from "../assets/cc.mkv"
import {modalFiller} from "./Projects"


const testCase=[<ModalBodyContent videoSrc={ccvid} description={

      <div className="container-fluid">
        <div className="row">
            <div className="container-fluid">
                <div className="row">
                    <div className="col p-0">
                        <strong><h2 className="section-title">Key Technologies Used</h2></strong>
                    </div>
                </div>
                <div className="row">
                        <strong><h2 className="section-title">Project Summary</h2></strong>
                </div>
            </div>
            
            <p>This is a website that I made for a local photographer. They primarily wanted their website to serve as a portfolio for their work and get in touch with prospective clients. They already had a website but It was a very generic one that was very much in the need of a facelift.</p>
        </div>
        <div className="row my-2">
            <a href="https://funthoughts.netlify.app/" target="_blank"><button className="btn btn-light col">View Demo</button></a>
        </div>
        <div className="row">
        <a href="https://github.com/" target="_blank"><button className="btn btn-light col">View Code</button></a>
        </div>
    </div>
} />]


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
                        <div className="cardHover" onClick={()=>setState({...state, isModalOpen: true, modalHeader:"Fun Thoughts Clothing Co.", modalContent:modalFiller[1]})}><ProjectCard image={ftimg}/></div>
                    </div>
                    <div className="col-12 col-xl-6">
                        <div className="cardHover" onClick={()=>setState({...state, isModalOpen: true, modalHeader:"Captured Creations Photography", modalContent:modalFiller[0]})}><ProjectCard image={ccimg}/></div>
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