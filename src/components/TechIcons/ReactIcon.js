import {FaReact} from "react-icons/fa"
import {OverlayTrigger, Tooltip} from "react-bootstrap"



function renderTooltip(props) {
    return (
      <Tooltip id="react-tooltip" {...props}>
        React
      </Tooltip>
    );
  }


function BootstrapIcon(props)
{ 
      
          return(
          
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 150, hide: 400 }}
                  overlay={renderTooltip}>
                  <FaReact />
                </OverlayTrigger>
          );
    
}


export default BootstrapIcon