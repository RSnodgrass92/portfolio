import {FaHtml5} from "react-icons/fa"
import {OverlayTrigger, Tooltip} from "react-bootstrap"



function renderTooltip(props) {
    return (
      <Tooltip id="html-tooltip" {...props}>
        Html5
      </Tooltip>
    );
  }


function HtmlIcon(props)
{ 
      
          return(
          
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 150, hide: 400 }}
                  overlay={renderTooltip}>
                  <FaHtml5/>
                </OverlayTrigger>
          );
    
}


export default HtmlIcon