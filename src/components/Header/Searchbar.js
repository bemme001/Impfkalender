import { InputGroup, Button, Form } from "react-bootstrap";
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { BsSearch } from 'react-icons/bs';
import './searchbar.css';

const Searchbar = (props) => {
    const [ value, setValue ] = useState("")

  /*
  const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        <Link to={"/search:" + value}/>
      }
   }
   */


    return (
        <Form className="ms-2">
            <InputGroup size={props.inputSize}>
                <Button
                  variant={props.variantStyle}
                  id="patient_search_button"
                  type="button"
                  className={props.buttonStyleClass}
                  href={"/search:" + value}
                >
                  <BsSearch/>
                </Button>
                <Form.Control
                    placeholder="Name / ID des Patienten"
                    aria-label="Name / ID des Patienten"
                    aria-describedby="searchbar"
                    type="search"
                    className={props.formStyleClass}
                    onChange={(e) => {
                        isNaN(e.target.value)
                        ? setValue("name=" + e.target.value)
                        : setValue("_id=" + e.target.value)
                    }}
                />
            </InputGroup>
        </Form>
    )
}

export default Searchbar