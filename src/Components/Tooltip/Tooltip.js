import React,{useState,useRef} from 'react';
import ProgressBar from '../ProgressBar';
import './Tooltip.css'

function Tooltip(props) {


    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const targetRef = useRef(null);
    const showTooltip = isHovered || isFocused;
  
    const handleClick = (e) => {
      e.preventDefault();
      if (targetRef.current) {
        targetRef.current.blur();
      }
    };
  
    return (
      <div className='tooltipWrapper'>
        <button className="tooltipTarget"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onClick={handleClick}
          ref={targetRef}
        >
        {props.children}
        </button>
        {showTooltip && (
          <div className='centerContainer'>
            <span className='tooltipBox'>
                <ProgressBar 
                    hovered = {isHovered}
                    carbConsumed={props.carbConsumed} 
                    fatConsumed={props.fatConsumed} 
                    proteinConsumed={props.proteinConsumed}  
                    carbTarget={props.carbTarget}  
                    fatTarget={props.fatTarget} 
                    proteinTarget={props.proteinTarget} />
            </span>
          </div>
        )}
      </div>
    );
  }
  
  export default Tooltip;