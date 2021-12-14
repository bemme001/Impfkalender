import React from 'react';
import SRTableCell from './SRTableCell';

function diffInMonths(birthDate, immunDate) {
  let date1 = new Date(birthDate)
  let date2 = new Date(immunDate)
  let years = date2.getFullYear() - date1.getFullYear()
  let months = (years * 12) + (date2.getMonth() - date1.getMonth())
  return months
}

const SrTableRow = ({ vaccination, patient, immunizations }) => {
  return (
    <tr className="border border-white">
      <th scope="row" className="border border-gray">{vaccination.name}</th>
      {
        vaccination.times.map((e,index) => {
          // check if the cell is a close/open/space
          if (e.name === 'close') return <td key={index} colSpan={e.t_end - e.t_start} className="bg-grey" />
          if (e.name === 'open') return <td key={index} colSpan={e.t_end - e.t_start} className="bg-blue-light" />
          if (e.name === 'space') return <td key={index} className="w-1" />

          const immunisation = immunizations.find(i => i.pathogen === vaccination.name && i.immun === e.name)
          // first of all try to find vaccine
          if (immunisation && Object.keys(patient).length !== 0) {
            // calculate the date of vaccine
            const vaccineDateDiffInMonths = diffInMonths(patient.birthdate, immunisation.date)
            // calculate whether the vaccine was given on right time -> green, not -> orange
            const tileColor = vaccineDateDiffInMonths >= e.r_start && vaccineDateDiffInMonths <= e.r_end ? "green" : "orange";
            // spawn the table cell
            return <SRTableCell key={index} element={e} immunisation={immunisation} colors={tileColor} patient={patient}/>
          }

          // check if the patient should have been vaccinated
          if (Object.keys(patient).length !== 0) {
            const birthDateAndTodayDiffInMonths = diffInMonths(patient.birthdate, Date.now())
            if (birthDateAndTodayDiffInMonths > e.r_end) {
              return <td
                key={index}
                colSpan={e.t_end - e.t_start}
                className="bg-red">{e.name}
                <span className="comment"> {e.desc}</span>
              </td> // TODO: Refactor td into SRTableCell.js
            }
          }

          // or just show recommendation
          return <td key={index} colSpan={e.t_end - e.t_start} className="bg-blue">{e.name} <span className="comment">{e.desc}</span></td>
           // TODO: Refactor td into SRTableCell.js
        })
      }
    </tr>
  );
};

export default SrTableRow;