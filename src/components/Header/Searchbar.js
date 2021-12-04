import { InputGroup, Button, Form } from "react-bootstrap";
import { useState } from "react"

const Searchbar = () => {
    const [ value, setValue ] = useState("")

    return (
        <Form>
            <InputGroup className="mb-3">
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
                    type="submit"
                    href={"/search:"+value}
                    disabled={!value}
                    value="Search"
                >
                Search
                </Button>
            </InputGroup>
        </Form>
    )
}

export default Searchbar