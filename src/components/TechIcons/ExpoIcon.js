import {SiExpo} from "react-icons/si"
import {OverlayTrigger, Tooltip} from "react-bootstrap"



function renderTooltip(props) {
    return (
      <Tooltip id="bootstrap-tooltip" {...props}>
        Expo
      </Tooltip>
    );
  }


function ExpoIcon(props)
{ 
      
          return(
          
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 150, hide: 400 }}
                  overlay={renderTooltip}>
                  <SiExpo/>
                </OverlayTrigger>
          );
    
}


export default ExpoIcon