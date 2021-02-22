import {FaBootstrap} from "react-icons/fa"
import {OverlayTrigger, Tooltip} from "react-bootstrap"



function renderTooltip(props) {
    return (
      <Tooltip id="bootstrap-tooltip" {...props}>
        Bootstrap
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
                  <FaBootstrap/>
                </OverlayTrigger>
          );
    
}


export default BootstrapIcon