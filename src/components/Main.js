import {ProjectCard} from "./ProjectCard"
import {useState} from "react"
import {Modal} from "react-bootstrap"
import ccimg from "../assets/cc.PNG"
import ftimg from "../assets/ftPNG.PNG"
import wdwimg from "../assets/wdw.PNG"
import {modalFiller} from "./Projects"
import {NavBar} from "./Navbar"
import {ContactCard} from "./ContactCard"
import {FaArrowCircleDown} from "react-icons/fa"

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
            
                <NavBar/>
                <div className="container">

                <div className="row d-none d-lg-block" id="start-msg-topline">
                    <div className="col offset-2">
                     <strong>Hello, I'm Ryan.</strong>
                    </div>
                </div>
                <div className="row d-lg-none" id="start-msg-topline-small">
                    <div className="col offset-2">
                     <strong>Hello, I'm Ryan.</strong>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col">
                      I build things for the web
                    </div>
                </div>

                <div className="row text-center" id="projects-msg-topline">
                    <div className="col">
                     Below are some of my <strong>recent projects.</strong> 
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col">
                     <strong>Click</strong> the links to find out more <FaArrowCircleDown />
                    </div>
                </div>
                </div>
                <div className="row text-center" id="projects-section">
                    <div className="col-12 col-xl-6">
                        <h2 className="project-card-header-text" onClick={()=>setState({...state, isModalOpen: true, modalHeader:"Fun Thoughts Clothing Co.", modalContent:modalFiller[1]})}><strong>Fun Thoughts Clothing Co</strong></h2>
                        <div className="cardHover" onClick={()=>setState({...state, isModalOpen: true, modalHeader:"Fun Thoughts Clothing Co.", modalContent:modalFiller[1]})}><ProjectCard image={ftimg}/></div>
                    </div>
                    <div className="col-12 col-xl-6">
                        <h2 className="project-card-header-text"onClick={()=>setState({...state, isModalOpen: true, modalHeader:"Captured Creations Photography", modalContent:modalFiller[0]})}><strong>Captured Creations Photography</strong></h2>
                        <div className="cardHover" onClick={()=>setState({...state, isModalOpen: true, modalHeader:"Captured Creations Photography", modalContent:modalFiller[0]})}><ProjectCard image={ccimg}/></div>
                    </div>
                    <div className="col-12 col-xl-6 offset-xl-3">
                        <h2 className="project-card-header-text" onClick={()=>setState({...state, isModalOpen: true, modalHeader:"Web Dev Wiki", modalContent:modalFiller[2]})}><strong>Web Dev Wiki</strong></h2>
                        <div className="cardHover" onClick={()=>setState({...state, isModalOpen: true, modalHeader:"Web Dev Wiki", modalContent:modalFiller[2]})}><ProjectCard image={wdwimg}/></div>
                    </div>
                </div>


                <div className="container">
                    <div className="row mt-5">
                        <div className="col" id="contactinfo">
                        <ContactCard/>
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
                        <button className="btn modal-btn-view" onClick={()=>setState({...state, isModalOpen: false})}>X</button>
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