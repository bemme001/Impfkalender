import React from 'react';
import { Button } from "react-bootstrap";

const AgeTiles = ({ range, onClick }) => {
  return (
    <div className="mb-3 d-grid gap-2">
      <Button variant="outline-secondary" size="lg" onClick={() => { onClick() }}>
        {range}
      </Button>
    </div>
  );
};

export default AgeTiles;