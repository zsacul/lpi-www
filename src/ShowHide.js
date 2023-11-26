
import React, { useState } from 'react';

export const ShowHide = ({ showHideMore,dots,more }) => {
  const [isHidden, setIsHidden] = useState(false);

    const handleClick = () => {
        setIsHidden(!isHidden);
        showHideIn(isHidden);
    }
     
    function showHideIn(showHideMore) {
        var dots_e = document.getElementById(dots);
        var more_e = document.getElementById(more);

        if (isHidden) 
        {
          dots_e.style.display = "inline";
          more_e.style.display = "none";
        } 
          else 
        {
          dots_e.style.display = "none";
          more_e.style.display = "inline";
        }
    }

    return (
        <div>
            <button id={showHideMore} onClick={handleClick}>
                {isHidden ? 'Mniej...' : 'Więcej...'}
            </button>
        </div>
    );
}

export default ShowHide;