import {SiRedux} from "react-icons/si"
import {OverlayTrigger, Tooltip} from "react-bootstrap"



function renderTooltip(props) {
    return (
      <Tooltip id="react-redux-tooltip" {...props}>
        React Redux
      </Tooltip>
    );
  }


function ReactReduxIcon(props)
{ 
      
          return(
          
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 150, hide: 400 }}
                  overlay={renderTooltip}>
                  <SiRedux />
                </OverlayTrigger>
          );
    
}


export default ReactReduxIcon