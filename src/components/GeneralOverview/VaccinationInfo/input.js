import { Form, Col, Row } from "react-bootstrap";

const date_toString = (date) => {
    const temp = date.split('-');
    return [temp[2], temp[1], temp[0]].join(".");
}

export function TextInput({ label, name, editable, value, onChange, placeholder, errors }) {
    const error = errors.hasOwnProperty(name);
    let message = null;
    if (error) {
        message = errors[name];
    }
    return (
        <FormularSpace label={label}>
            {editable
                ?
                <>
                    <Form.Control
                        type="text"
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        onChange={e => onChange(name, e.target.value)}
                        isInvalid={error}
                    />
                    <Form.Control.Feedback type="invalid">
                        {message}
                    </Form.Control.Feedback>
                </>
                :
                <Form.Label column sm={3} md={5} lg={3}>
                    {value}
                </Form.Label>
            }
        </FormularSpace>
    );
}

export function Dropdown({ label, name, editable, value, onChange, options, errors }) {
    const error = errors.hasOwnProperty(name);
    let message = null;
    if (error) {
        message = errors[name];
    }

    const option = options.find(o => {
        return o.value === value;
    });
    const text = option === undefined ? value : option.text;

    return (
        <FormularSpace label={label}>
            {editable
                ? <>
                    <Form.Select
                        aria-label="Status der Impfung"
                        name={name}
                        value={value}
                        onChange={(e) => {
                            onChange(name, e.target.value)
                        }}
                        isInvalid={error} >
                        {options.map((o, i) => {
                            return <option value={o.value} key={i}>{o.text}</option>
                        })}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                        {message}
                    </Form.Control.Feedback>
                </>
                :
                <Form.Label column sm={3} md={5} lg={3}>
                    {text}
                </Form.Label>
            }
        </FormularSpace>
    );
}

export function DateInput({ label, name, value, editable, onChange, errors }) {
    const error = errors.hasOwnProperty(name);
    let message = null;
    if (error) {
        message = errors[name];
    }
    return (
        <FormularSpace label={label}>
            {editable
                ? <>
                    <Form.Control
                        type="date"
                        value={value}
                        placeholder={new Date()}
                        onChange={e => onChange(name, e.target.value)}
                        name={name}
                        isInvalid={error} />
                    <Form.Control.Feedback type="invalid">
                        {message}
                    </Form.Control.Feedback>
                </>
                : <Form.Label column sm={3} md={5} lg={3}>{date_toString(value)}</Form.Label>
            }
        </FormularSpace>
    );
}

export function NumberInput({ label, name, editable, value, onChange, placeholder, errors }) {
    const error = errors.hasOwnProperty(name);
    let message = null;
    if (error) {
        message = errors[name];
    }
    return (
        <FormularSpace label={label}>
            {editable
                ? <>
                    <Form.Control
                        type="number"
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => onChange(name, e.target.value)}
                        name={name}
                        isInvalid={error}
                    />
                    <Form.Control.Feedback type="invalid">
                        {message}
                    </Form.Control.Feedback>
                </>
                :
                <Form.Label column sm={3} md={5} lg={3}>{value}</Form.Label>
            }
        </FormularSpace>
    );
}

export function FormularSpace({ children, label }) {
    return (
        <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3} md={5} lg={3}>
                {label}
            </Form.Label>
            <Col sm={9} md={7} lg={9}>
                {children}
            </Col>
        </Form.Group >
    );
}