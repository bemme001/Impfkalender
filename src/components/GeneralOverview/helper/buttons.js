import { Form, InputGroup } from "react-bootstrap";

export function VaccinationTypeFilter({ onChange }) {
    return (
        <InputGroup className='w-75'>
            <InputGroup.Text>Filterung nach Impfart</InputGroup.Text>
            <Form.Select
                aria-label="Filter example"
                onChange={onChange}
            >
                <option value="all">Alle anzeigen</option>
                <option value="standard">Standard</option>
                <option value="indikation">Indikation</option>
                <option value="reise">Reise</option>
            </Form.Select>
        </InputGroup>
    );
}