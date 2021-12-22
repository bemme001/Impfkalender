import React from 'react';
import { Button } from "react-bootstrap";

const AgeTiles = ({ range, onClick, active }) => {
  return (
    <div className="mb-3 d-grid gap-2">
      <Button active={active} variant="outline-secondary" size="lg" onClick={onClick}>
        {range}
      </Button>
    </div>
  );
};

export default AgeTiles;