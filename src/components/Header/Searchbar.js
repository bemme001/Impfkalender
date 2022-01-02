import { InputGroup, Button, Form } from "react-bootstrap";
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { BsSearch } from 'react-icons/bs';
import './searchbar.css';

const Searchbar = () => {
    const [ value, setValue ] = useState("")

    return (
        <Form className="ms-2">
          <InputGroup>
                <Form.Control
                    placeholder="Name / ID des Patienten"
                    aria-label="Name / ID des Patienten"
                    aria-describedby="searchbar"
                    type="search"
                    className="text-white transparent-input"
                    onChange={(e) => {
                        isNaN(e.target.value) 
                        ? setValue("name=" + e.target.value)
                        : setValue("_id=" + e.target.value)
                    }}
                />
                <Button
                    variant="outline-light"
                    id="patient_search_button"
                    type="button"
                    href={"/search:" + value}
                >
                <BsSearch/>
                </Button>
            </InputGroup>
        </Form>
    )
}

export default Searchbar