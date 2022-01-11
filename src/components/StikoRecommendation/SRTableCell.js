import React, { useState } from 'react';
import StikoPopup from './StikoPopup';

/**
 * @param element to display
 * @param immunisation data for popup to compare with stiko data
 * @param colors the color to spawn the cell with
 * @returns a td-element containing the immunizaition degree, 
 * some of which are clickable to view the stiko popup
 */
const SrTableCell = ({ element, immunisation, colors, patient }) => {
  const [showPopUp, switchPopUp] = useState(false);

  return <>{showPopUp
    ? <StikoPopup showPopUp={showPopUp} switchPopUp={() => switchPopUp()} infos={immunisation} colors={colors} element={element} patient={patient}/>
    : null}
    <td
        colSpan={element.t_end - element.t_start}
        className={"bg-" + colors} onClick={(e) => switchPopUp(e)}>
        {element.name}
        <span className="comment"> {element.desc}</span>
    </td>
  </>
}

export default SrTableCell;