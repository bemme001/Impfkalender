import { InputGroup, Button, Form } from "react-bootstrap";
import { useState } from "react"
import { Navigate } from "react-router-dom"

const Searchbar = () => {
    const [ value, setValue ] = useState("")

    return (
        
        <Form className="ms-2">
            <InputGroup>
                <InputGroup.Text id="searchbar">Patient</InputGroup.Text>
                <Form.Control
                    placeholder="Name / ID"
                    aria-label="Name / ID"
                    aria-describedby="searchbar"
                    type="input"
                    onChange={(e) => {
                        isNaN(e.target.value) 
                        ? setValue("name=" + e.target.value)
                        : setValue("_id=" + e.target.value)
                    }}
                />
                <Button 
                    variant="light"
                    id="patient_search_button"
                    type="button"
                    href={"/search:" + value}
                >
                Absenden
                </Button>
            </InputGroup>
        </Form>
    )
}

export default Searchbar