import React from 'react';

const SrTableRow = ({vaccination}) => {
  function diffInMonths(birthDate, immunDate) {
    let date1 = new Date(birthDate)
    let date2 = new Date(immunDate)
    let years = date2.getFullYear() - date1.getFullYear()
    let months = (years * 12) + (date2.getMonth() - date1.getMonth())
    return months
  }

  // const patient = {id: 1, birthdate: "1988-10-21"}
  const patient = {}
  const immunizations = [
    {id: 1, pathogen: "Rotaviren", status: "completed", immun: "G1", date: "1988-11-25"},
    {id: 2, pathogen: "Rotaviren", status: "completed", immun: "G2", date: "1989-06-05"},
    //{id: 2, pathogen: "Rotaviren", status: "completed", immun: "G3", date: "1989-06-05"},
  ]

  return (
    <tr className="border border-white">
      <th scope="row" className="border border-gray">{vaccination.name}</th>
      {
        vaccination.times.map(e => {
          // check if the cell is a close/open/space
          if (e.name === 'close')  return <td colSpan={e.t_end - e.t_start} className="bg-grey"/>
          if (e.name === 'open' )  return <td colSpan={e.t_end - e.t_start} className="bg-blue-light"/>
          if (e.name === 'space')  return <td className="w-1"/>

          const immunisation = immunizations.find(i => i.pathogen === vaccination.name && i.immun === e.name)
          // first of all try to find vaccine
          if (immunisation && Object.keys(patient).length !== 0) {
            // calculate the date of vaccine
            const vaccineDateDiffInMonths = diffInMonths(patient.birthdate, immunisation.date)
            // calculate whether the vaccine was given on right time -> green, not -> orange
            if (vaccineDateDiffInMonths >= e.r_start && vaccineDateDiffInMonths <= e.r_end) {
              return <td
                colSpan={e.t_end - e.t_start}
                className="bg-green">{e.name}
                <span className="comment"> {e.desc}</span>
              </td>
            } else {
              return <td
                colSpan={e.t_end - e.t_start}
                className="bg-orange">{e.name}
                <span className="comment"> {e.desc}</span>
              </td>
            }
          }

          // check if the patient should have been vaccinated
          if (Object.keys(patient).length !== 0) {
            const birthDateAndTodayDiffInMonths = diffInMonths(patient.birthdate, Date.now())
            if (birthDateAndTodayDiffInMonths > e.r_end) {
              return <td
                colSpan={e.t_end - e.t_start}
                className="bg-red">{e.name}
                <span className="comment"> {e.desc}</span>
              </td>
            }
          }

          // or just show recommendation
          return <td colSpan={e.t_end - e.t_start} className="bg-blue">{e.name} <span className="comment">{e.desc}</span></td>
        })
      }
    </tr>
  );
};

export default SrTableRow;