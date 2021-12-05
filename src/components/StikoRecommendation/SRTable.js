import React from 'react';
import {Col, Table} from "react-bootstrap";
import './SR.css';
import SrTableRow from "./SRTableRow";

const SRTable = ({recommendation, patient, immunizations}) => {
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
        {
          recommendation.map(element => {
            return <SrTableRow
              vaccination={element}
              patient={patient}
              immunizations={immunizations}/>
          })
        }
        </tbody>
      </Table>
    </Col>
  );
};

export default SRTable;