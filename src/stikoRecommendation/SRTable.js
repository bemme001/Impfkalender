import React from 'react';
import {Col, Table} from "react-bootstrap";
import './SR.css';

const SRTable = () => {
  return (
    <Col>
      <Table bordered id="SRTable" className="align-middle">
        <thead className="align-middle">
        <tr className="text-center">
          <th scope="row" rowSpan={3} style={{borderRight: '1px solid #0d6efd'}}>Impfung</th>
          <th className="border border-primary">Alter in Wochen</th>
          <th colSpan={9} className="border border-primary">Alter in Monaten</th>
          <th className="w-1 border-right-blue"/>
          <th colSpan={11} className="border border-primary">Alter in Jahren</th>
        </tr>
        <tr className="border border-primary text-center">
          <th>6</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5-10</th>
          <th>11*</th>
          <th>12</th>
          <th>13-14</th>
          <th>15</th>
          <th>16-23</th>
          <th className="border border-white w-1 border-right-blue"/>
          <th>2-4</th>
          <th>5-6</th>
          <th>7-8</th>
          <th colSpan={2}>9-14</th>
          <th>15-16</th>
          <th>17</th>
          <th>ab 18</th>
          <th colSpan={2}>ab 60</th>
        </tr>
        <tr className="border border-primary text-center">
          <th/>
          <th/>
          <th colSpan={2}>U4</th>
          <th>U5</th>
          <th colSpan={2}>U6</th>
          <th/>
          <th/>
          <th>U7</th>
          <th className="border border-white w-1 border-right-blue"/>
          <th>U7a/U8</th>
          <th>U9</th>
          <th>U10</th>
          <th colSpan={2}>U11/J1</th>
          <th/>
          <th>J2</th>
          <th/>
          <th colSpan={2}/>
        </tr>
        </thead>
        <tbody>
        <tr className="border border-white">
          <th scope="row" className="border border-gray">Rotaviren</th>
          <td colSpan={2} className="bg-blue">G1 <span className="comment">a</span></td>
          <td className="bg-blue">G2</td>
          <td className="bg-blue">(G3)</td>
          <td colSpan={6} className="bg-grey"/>
          <td className="w-1"/>
          <td colSpan={10} className="bg-grey"/>
        </tr>
        <tr className="border border-white">
          <th scope="row" className="border border-gray">Tetanus</th>
          <td className="bg-grey"/>
          <td className="bg-blue">G1</td>
          <td className="bg-blue-light"/>
          <td className="bg-blue">G2</td>
          <td className="bg-blue-light"/>
          <td className="bg-blue">G3 <span className="comment">c</span></td>
          <td colSpan={4} className="bg-blue-light"/>
          <td className="w-1"/>
          <td className="bg-blue-light"/>
          <td className="bg-blue">A1</td>
          <td className="bg-blue-light"/>
          <td colSpan={3} className="bg-blue">A2</td>
          <td className="bg-blue-light"/>
          <td colSpan={3} className="bg-blue">A <span className="comment">e</span></td>
        </tr>
        <tr className="border border-white">
          <th scope="row" className="border border-gray">Diphtherie</th>
          <td className="bg-grey"/>
          <td className="bg-blue">G1</td>
          <td className="bg-blue-light"/>
          <td className="bg-blue">G2</td>
          <td className="bg-blue-light"/>
          <td className="bg-blue">G3 <span className="comment">c</span></td>
          <td colSpan={4} className="bg-blue-light"/>
          <td className="w-1"/>
          <td className="bg-blue-light"/>
          <td className="bg-blue">A1</td>
          <td className="bg-blue-light"/>
          <td colSpan={3} className="bg-blue">A2</td>
          <td className="bg-blue-light"/>
          <td colSpan={3} className="bg-blue">A <span className="comment">e</span></td>
        </tr>
        <tr className="border border-white">
          <th scope="row" className="border border-gray">Pertussis</th>
          <td className="bg-grey"/>
          <td className="bg-blue">G1</td>
          <td className="bg-blue-light"/>
          <td className="bg-blue">G2</td>
          <td className="bg-blue-light"/>
          <td className="bg-blue">G3 <span className="comment">c</span></td>
          <td colSpan={4} className="bg-blue-light"/>
          <td className="w-1"/>
          <td className="bg-blue-light"/>
          <td className="bg-blue">A1</td>
          <td className="bg-blue-light"/>
          <td colSpan={3} className="bg-blue">A2</td>
          <td className="bg-blue-light"/>
          <td className="bg-blue">A3 <span className="comment">e</span></td>
          <td colSpan={2} className="bg-blue-light"/>
        </tr>
        <tr className="border border-white">
          <th scope="row" className="border border-gray">Hib H. inf Type b</th>
          <td className="bg-grey"/>
          <td className="bg-blue">G1</td>
          <td className="bg-blue-light"/>
          <td className="bg-blue">G2</td>
          <td className="bg-blue-light"/>
          <td className="bg-blue">G3 <span className="comment">c</span></td>
          <td colSpan={4} className="bg-blue-light"/>
          <td className="w-1"/>
          <td className="bg-blue-light"/>
          <td colSpan={9} className="bg-grey"/>
        </tr>
        <tr className="border border-white">
          <th scope="row" className="border border-gray">Poliomyelitis</th>
          <td className="bg-grey"/>
          <td className="bg-blue">G1</td>
          <td className="bg-blue-light"/>
          <td className="bg-blue">G2</td>
          <td className="bg-blue-light"/>
          <td className="bg-blue">G3 <span className="comment">c</span></td>
          <td colSpan={4} className="bg-blue-light"/>
          <td className="w-1"/>
          <td colSpan={3} className="bg-blue-light"/>
          <td colSpan={3} className="bg-blue">A1</td>
          <td colSpan={4} className="bg-blue-light"/>
        </tr>
        <tr className="border border-white">
          <th scope="row" className="border border-gray">Hepatitis B</th>
          <td className="bg-grey"/>
          <td className="bg-blue">G1</td>
          <td className="bg-blue-light"/>
          <td className="bg-blue">G2</td>
          <td className="bg-blue-light"/>
          <td className="bg-blue">G3 <span className="comment">c</span></td>
          <td colSpan={4} className="bg-blue-light"/>
          <td className="w-1"/>
          <td colSpan={7} className="bg-blue-light"/>
          <td colSpan={3} className="bg-grey"/>
        </tr>
        <tr className="border border-white">
          <th scope="row" className="border border-gray">Pneumokokken</th>
          <td className="bg-grey"/>
          <td className="bg-blue">G1</td>
          <td className="bg-blue-light"/>
          <td className="bg-blue">G2</td>
          <td className="bg-blue-light"/>
          <td className="bg-blue">G3 <span className="comment">c</span></td>
          <td colSpan={4} className="bg-blue-light"/>
          <td className="w-1"/>
          <td colSpan={8} className="bg-grey"/>
          <td colSpan={2} className="bg-blue">S <span className="comment">g</span></td>
        </tr>
        <tr className="border border-white">
          <th scope="row" className="border border-gray">Meningokokken C</th>
          <td colSpan={6} className="bg-grey"/>
          <td className="bg-blue">G1</td>
          <td colSpan={3} className="bg-blue-light"/>
          <td className="w-1"/>
          <td colSpan={7} className="bg-blue-light"/>
          <td colSpan={3} className="bg-grey"/>
        </tr>
        <tr className="border border-white">
          <th scope="row" className="border border-gray">Masern</th>
          <td colSpan={5} className="bg-grey"/>
          <td className="bg-blue">G1</td>
          <td colSpan={2} className="bg-blue-light"/>
          <td className="bg-blue">G2</td>
          <td className="bg-blue-light"/>
          <td className="w-1"/>
          <td colSpan={7} className="bg-blue-light"/>
          <td className="bg-blue">S <span className="comment">f</span></td>
          <td colSpan={2} className="bg-grey"/>
        </tr>
        <tr className="border border-white">
          <th scope="row" className="border border-gray">Mumps, Röteln</th>
          <td colSpan={5} className="bg-grey"/>
          <td className="bg-blue">G1</td>
          <td colSpan={2} className="bg-blue-light"/>
          <td className="bg-blue">G2</td>
          <td className="bg-blue-light"/>
          <td className="w-1"/>
          <td colSpan={7} className="bg-blue-light"/>
          <td colSpan={3} className="bg-grey"/>
        </tr>
        <tr className="border border-white">
          <th scope="row" className="border border-gray">Varizellen</th>
          <td colSpan={5} className="bg-grey"/>
          <td className="bg-blue">G1</td>
          <td colSpan={2} className="bg-blue-light"/>
          <td className="bg-blue">G2</td>
          <td className="bg-blue-light"/>
          <td className="w-1"/>
          <td colSpan={7} className="bg-blue-light"/>
          <td colSpan={3} className="bg-grey"/>
        </tr>
        <tr className="border border-white">
          <th scope="row" className="border border-gray">HPV Humane Papillomviren</th>
          <td colSpan={10} className="bg-grey"/>
          <td className="w-1"/>
          <td colSpan={3} className="bg-grey"/>
          <td className="bg-blue">G1 <span className="comment">d</span></td>
          <td className="bg-blue">G2 <span className="comment">d</span></td>
          <td colSpan={2} className="bg-blue-light"/>
          <td colSpan={3} className="bg-grey"/>
        </tr>
        <tr className="border border-white">
          <th scope="row" className="border border-gray">Herpes zoster</th>
          <td colSpan={10} className="bg-grey"/>
          <td className="w-1"/>
          <td colSpan={8} className="bg-grey"/>
          <td className="bg-blue">G1 <span className="comment">h</span></td>
          <td className="bg-blue">G2 <span className="comment">h</span></td>
        </tr>
        <tr className="border border-white">
          <th scope="row" className="border border-gray">Herpes zoster</th>
          <td colSpan={10} className="bg-grey"/>
          <td className="w-1"/>
          <td colSpan={8} className="bg-grey"/>
          <td colSpan={2} className="bg-blue">S (jährlich)</td>
        </tr>
        </tbody>
      </Table>
    </Col>
  );
};

export default SRTable;