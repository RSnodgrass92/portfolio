import {SiJavascript} from "react-icons/si"
import {OverlayTrigger, Tooltip} from "react-bootstrap"



function renderTooltip(props) {
    return (
      <Tooltip id="javascript-tooltip" {...props}>
        JavaScript
      </Tooltip>
    );
  }


function JavaScriptIcon(props)
{ 
      
          return(
          
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 150, hide: 400 }}
                  overlay={renderTooltip}>
                  <SiJavascript />
                </OverlayTrigger>
          );
    
}


export default JavaScriptIcon