import {ProjectCard} from "./ProjectCard"
import {useState} from "react"
import {Modal} from "react-bootstrap"
import {ModalBodyContent} from "./ModalBodyContent"
import g from "../assets/test.jpg"

const testCase=[<ModalBodyContent description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in augue eleifend ex vestibulum consectetur. Nulla sit amet lectus hendrerit, pellentesque magna tempor, molestie sem. Integer vitae justo lacus. Pellentesque ut risus odio. Donec tincidunt felis eget felis vulputate volutpat. Vestibulum vel lacus dolor. Vestibulum imperdiet, nibh vitae tristique condimentum, augue nisl lacinia massa, id hendrerit enim diam in felis. Nunc massa sapien, dignissim at blandit vitae, iaculis aliquet turpis." />]


export function Main(props)
{
    const [state, setState] = useState({

        isModalOpen: false,
        modalContent: testCase[0], 
        modalHeader: "", 
    })

    return (
        <>
        <div className="main">
            <div className="container">

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
                    <div className="col">
                         <ProjectCard image={g}/>
                    </div>
                    <div className="col">
                         <ProjectCard image={g}/>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col">
                         <ProjectCard image={g}/>
                    </div>
                    <div className="col">
                        <div onClick={()=>setState({...state, isModalOpen: true})}><ProjectCard image={g}/></div>
                    </div>
                </div>
            </div>
            <button onClick={()=>setState({...state, isModalOpen:true, modalHeader:"testing"})}>this is a test</button>
        </div>

        <Modal show={state.isModalOpen} centered size="lg">
            <Modal.Header className="modal-header-text">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-10">
                            <h2>{state.modalHeader}</h2>
                        </div>
                        <div className="col-2">
                        <button className="btn btn-light" onClick={()=>setState({...state, isModalOpen: false})}>x</button>
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