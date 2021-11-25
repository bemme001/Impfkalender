import React from 'react';
import {Button} from "react-bootstrap";

const AgeTiles = ({ range}) => {
  return (
    <div className="mb-3 d-grid gap-2">
        <Button variant="outline-success" size="lg" >
            {range}
        </Button>{' '}
    </div>  
  );
};

export default AgeTiles;