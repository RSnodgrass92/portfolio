import {SiReactrouter} from "react-icons/si"
import {OverlayTrigger, Tooltip} from "react-bootstrap"



function renderTooltip(props) {
    return (
      <Tooltip id="react-router-tooltip" {...props}>
        React Router
      </Tooltip>
    );
  }


function ReactRouterIcon(props)
{ 
      
          return(
          
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 150, hide: 400 }}
                  overlay={renderTooltip}>
                  <SiReactrouter />
                </OverlayTrigger>
          );
    
}


export default ReactRouterIcon