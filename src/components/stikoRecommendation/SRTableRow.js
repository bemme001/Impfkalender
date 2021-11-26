import React from 'react';

const SrTableRow = ({vaccination}) => {
  return (
    <tr className="border border-white">
      <th scope="row" className="border border-gray">{vaccination.name}</th>
      {
        vaccination.times.map(e => {
          if (e.name === 'close') return <td colSpan={e.end - e.start} className="bg-grey"/>
          if (e.name === 'open')   return <td colSpan={e.end - e.start} className="bg-blue-light"/>
          if (e.name === 'space')  return <td className="w-1"/>
          return <td colSpan={e.end - e.start} className="bg-blue">{e.name} <span className="comment">{e.desc}</span></td>
        })
      }
    </tr>
  );
};

export default SrTableRow;