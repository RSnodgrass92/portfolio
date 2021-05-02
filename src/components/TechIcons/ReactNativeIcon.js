import {RiReactjsLine} from "react-icons/ri"
import {OverlayTrigger, Tooltip} from "react-bootstrap"



function renderTooltip(props) {
    return (
      <Tooltip id="react-tooltip" {...props}>
        React Native
      </Tooltip>
    );
  }


function ReactNativeIcon(props)
{ 
      
          return(
          
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 150, hide: 400 }}
                  overlay={renderTooltip}>
                  <RiReactjsLine/>
                </OverlayTrigger>
          );
    
}


export default ReactNativeIcon