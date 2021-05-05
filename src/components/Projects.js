import ccvid from "../assets/cc.mkv"
import ftvid from "../assets/ft.mkv"
import wdwvid from "../assets/wdw.mkv"
import {ModalBodyContent} from "./ModalBodyContent"
import {Button} from "react-bootstrap"
import {FaRegEye, FaCode} from "react-icons/fa"
import {SassIcon, BootstrapIcon, HtmlIcon, ReactIcon, ReactReduxIcon, ReactRouterIcon, JavaScriptIcon, ExpoIcon, ReactNativeIcon} from "./TechIcons"

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

new ProjectInfo(ftvid,`This was a website that I built for a client that was looking to start their own clothing company. They needed their website to serve as a digital store front for their business. In order to access the My Account portion of the website I have set up a dummy account. To access this account enter "example@email.com" for the email address and "password" for the password when prompted.`, "https://github.com/RSnodgrass92/fun-thoughts","https://funthoughts.netlify.app/",

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

new ProjectInfo(wdwvid,"This is a mobile application that I built with a classmate using React Native. This app was built to serve as a quick reference guide for web developers. The article pages include links to the official documentation for each technology and links to other related Web Dev Wiki articles. Additionally the article pages include links to resources such as GitHub repositories for projects that have implemented the technology and video tutorials", "https://github.com/kweisse1/web-dev-wiki","https://expo.io/@rsnodgra92/projects/webdevwiki",
        <>
        <div className="container d-none d-xl-block">
            <div className="row text-center">
                <div className="col"><ReactNativeIcon/></div>
                <div className="col"><JavaScriptIcon/></div>
                
            </div>
            <div className="row text-center">
                <div className="col"><ReactReduxIcon/></div>
                <div className="col"><ExpoIcon/></div>
            </div>
        </div>

        <div className="container d-xl-none">
        <div className="row text-center">
            <div className="col"><ReactNativeIcon/></div>
            <div className="col"><JavaScriptIcon/></div>
            <div className="col"><ReactReduxIcon/></div>
            <div className="col"><ExpoIcon/></div>
        </div>
        </div>
        </>
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
                    <p className="col p-0 key-tech-modal-font-large d-none d-md-block d-lg-block d-xl-block">
                        {index.keyTech}
                    </p>
                    <p className="col p-0 key-tech-modal-font-small d-md-none d-lg-none d-xl-none">
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
            {index.demoLink?  <div className="col-6">
            <Button href={index.demoLink} target="_blank"  className="modal-btn-view" >Demo <FaRegEye /></Button>
            </div>: <></>}
            {index.codeLink?<div className="col-6">
            <Button href={index.codeLink} target="_blank" className="modal-btn-view">Code <FaCode /></Button>
            </div>:<></>
            }
        </div>
    </div>


}/>)