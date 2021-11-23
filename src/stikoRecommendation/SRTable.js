import React from 'react';
import {Col, Table} from "react-bootstrap";
import './SR.css';

const SRTable = () => {
  return (
    <Col>
      <Table bordered id="SRTable">
        <tbody>
        <tr className="text-center">
          <th scope="row" rowSpan={3} style={{borderRight: '1px solid #0d6efd'}}>Impfung</th>
          <td className="border border-primary">Alter in Wochen</td>
          <td colSpan={9} className="border border-primary">Alter in Monaten</td>
          <td className="w-1 border-right-blue"/>
          <td colSpan={11} className="border border-primary">Alter in Jahren</td>
        </tr>
        <tr className="border border-primary text-center">
          <td>6</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5-10</td>
          <td>11*</td>
          <td>12</td>
          <td>13-14</td>
          <td>15</td>
          <td>16-23</td>
          <td className="border border-white w-1 border-right-blue"/>
          <td>2-4</td>
          <td>5-6</td>
          <td>7-8</td>
          <td colSpan={2}>9-14</td>
          <td>15-16</td>
          <td>17</td>
          <td>ab 18</td>
          <td colSpan={2}>ab 60</td>
        </tr>
        <tr className="border border-primary text-center">
          <td/>
          <td/>
          <td colSpan={2}>U4</td>
          <td>U5</td>
          <td colSpan={2}>U6</td>
          <td/>
          <td/>
          <td>U7</td>
          <td className="border border-white w-1 border-right-blue"/>
          <td>U7a/U8</td>
          <td>U9</td>
          <td>U10</td>
          <td colSpan={2}>U11/J1</td>
          <td/>
          <td>J2</td>
          <td/>
          <td colSpan={2}/>
        </tr>
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