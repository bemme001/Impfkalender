import React from 'react';
import {Col, Row} from "react-bootstrap";
import './SR.css';

const SrTableDescription = () => {
  return (
    <Row>
      <Col sm={12} className="mb-3 mt-1">
        <button type="button" className="btn bg-blue rounded-0 mx-1 mb-2">Empfohlener Impfzeitpunkt</button>
        <button type="button" className="btn bg-blue-light rounded-0 mx-1 mb-2">Nachholimpfzeitraum</button>
        <button type="button" className="btn bg-orange rounded-0 mx-1 mb-2">nicht rechtzeitig verabreicht</button>
        <button type="button" className="btn bg-green rounded-0 mx-1 mb-2">rechtzeitig verabreicht</button>
        <button type="button" className="btn bg-red rounded-0 mx-1 mb-2">nicht verabreicht</button>
      </Col>

      <Col sm={3}>
        <p className="fs-7">
          <span className="fw-bold">Erläuterungen</span><br />
          <span className="fw-bold">G</span> Grundimmunisierung<br />
          (in bis zu 3 Teilimpfungen G1 – G3)<br />
          <span className="fw-bold">A</span> Auffrischimpfung<br />
          <span className="fw-bold">S</span> Standardimpfung
        </p>
      </Col>
      <Col sm={9}>
        <p className="fs-7">
          <span className="fw-bold">a</span> Erste Impfstoffdosis bereits ab dem Alter von 6 Wochen, je nach verwendetem Impfstoff 2 bzw. 3
          Impfstoffdosen im Abstand von mind. 4 Wochen<br />
          <span className="fw-bold">b</span> Frühgeborene: zusätzliche Impfstoffdosis im Alter von 3 Monaten, d. h. insgesamt 4 Impfstoffdosen<br />
          <span className="fw-bold">c</span> Mindestabstand zur vorangegangenen Dosis: 6 Monate<br />
          <span className="fw-bold">d</span> Zwei Impfstoffdosen im Abstand von mind. 5 Monaten, bei Nachholimpfung beginnend im Alter &#10095; 14 Jahren oder
          bei einem Impfabstand von &#10094; 5 Monaten zwischen 1. und 2. Dosis ist eine 3. Dosis erforderlich<br />
          <span className="fw-bold">e</span> Td-Auffrischimpfung alle 10 Jahre. Nächste fällige Td-Impfung einmalig als Tdap- bzw. bei entsprechender
          Indikation als Tdap-IPV-Kombinationsimpfung<br />
          <span className="fw-bold">f</span> Einmalige Impfung mit einem MMR-Impfstoff für alle nach 1970 geborenen Personen  18 Jahre mit unklarem
          Impfstatus, ohne Impfung oder mit nur einer Impfung in der Kindheit<br />
          <span className="fw-bold">g</span> Impfung mit dem 23-valenten Polysaccharid-Impfstoff<br />
          <span className="fw-bold">h</span> Zweimalige Impfung mit dem adjuvantierten Herpes-zoster-Totimpfstoff im Abstand von mindestens 2 bis maximal
          6 Monaten<br />
          <span className="fw-bold">*</span> Impfungen können auf mehrere Impftermine verteilt werden. MMR und V können am selben Termin oder in
          4-wöchigem Abstand gegeben werden<br />
        </p>
      </Col>
    </Row>
  );
};

export default SrTableDescription;