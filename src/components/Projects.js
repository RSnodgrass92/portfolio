import ccvid from "../assets/cc.mkv"
import {ModalBodyContent} from "./ModalBodyContent"
import {Button} from "react-bootstrap"
import {FaRegEye, FaCode} from "react-icons/fa"
import {SassIcon, BootstrapIcon, HtmlIcon, ReactIcon, ReactReduxIcon, ReactRouterIcon, JavaScriptIcon} from "./TechIcons"

const projectArr=[];

class ProjectInfo
{
    constructor(videoSrc, summary, codeLink, demoLink, keyTech)
    {
        this.videoSrc= videoSrc; 
        this.summary= summary; 
        this.codeLink= codeLink; 
        this.demoLink= demoLink;
        this.keyTech= keyTech;
    }

    add()
    {
        projectArr.push(this)
        return this; 
    }

    
}


new ProjectInfo(ccvid, 
    "This is a website that I made for a local photographer. They primarily wanted their website to serve as a portfolio for their work and get in touch with prospective clients. They already had a website but It was a very generic one that was very much in the need of a facelift.",
    
    "https://github.com/RSnodgrass92/captured-creations", 

    "https://capturedcreations.netlify.app/",

      <div className="container">
        <div className="row text-center">
            <div className="col"><SassIcon/></div>
            <div className="col"><BootstrapIcon/></div>
            <div className="col"><HtmlIcon /></div>
        </div>
      </div>
    ).add()

new ProjectInfo(ccvid,"this is a website I made for a local teeshirt company","https://funthoughts.netlify.app/", "https://github.com/RSnodgrass92/fun-thoughts", 

        <div className="container">
            <div className="row text-center">
                <div className="col"><ReactIcon/></div>
                <div className="col"><ReactReduxIcon/></div>
                <div className="col"><ReactRouterIcon/></div>
            </div>
            <div className="row text-center">
                <div className="col"><JavaScriptIcon/></div>
                <div className="col"><SassIcon/></div>
                <div className="col"><BootstrapIcon/></div>
            </div>
        </div>

).add()


export const modalFiller= projectArr.map(index=> <ModalBodyContent videoSrc={index.videoSrc} description={

<div className="container-fluid">
        <div className="row">
            <div className="container-fluid">
                <div className="row">
                    <div className="col p-0">
                        <strong><h2 className="section-title">Key Technologies Used</h2></strong>
                    </div>
                </div>
                <div className="row">
                    <p className="col p-0 key-tech-modal-font">
                        {index.keyTech}
                    </p>
                </div>
                <div className="row">
                        <strong><h2 className="section-title">Project Summary</h2></strong>
                </div>
                <div className="row">
                    <p className="col p-0">{index.summary}</p>
                </div>
            </div>
            
            
        </div>
        <div className="row my-2 text-center">
            <div className="col-6 col-xl-12">
            <Button href={index.demoLink} target="_blank" variant="primary" >View Demo <FaRegEye /></Button>
            </div>
            <div className="col-6 col-xl-12">
            <Button href={index.codeLink} target="_blank" variant="danger">View Code <FaCode /></Button>
            </div>
        </div>
    </div>


}/>)