import {FaSass} from "react-icons/fa"
import {OverlayTrigger, Tooltip} from "react-bootstrap"



function renderTooltip(props) {
    return (
      <Tooltip id="sass-tooltip" {...props}>
        SASS
      </Tooltip>
    );
  }


function SassIcon(props)
{ 
      
          return(
          
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 150, hide: 400 }}
                  overlay={renderTooltip}>
                  <FaSass/>
                </OverlayTrigger>
          );
    
}


export default SassIcon