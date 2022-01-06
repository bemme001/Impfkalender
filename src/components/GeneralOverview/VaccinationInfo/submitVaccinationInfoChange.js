export function submitVaccinationInfoChange(immunization, patient) {
    const data = {
        resourceType: "Immunization",
        identifier: [{
            system: "urn:ietf:rfc:3986",
            value: patient.uuid
        }],
        status: immunization.status,
        vaccineCode: {
            text: immunization.vaccine
        },
        patient: {
            reference: `Patient/${patient.pid}`
        },
        occurrenceDateTime: immunization.date,
        site: {
            text: immunization.site
        },
        doseQuantity: {
            value: immunization.dose,
            system: "http://unitsofmeasure.org",
            code: "mL"
        },
        performer: {
            actor: {
                reference: 'Practitioner/2691497',
            }
        },
        note: {
            text: immunization.note
        },
        reasonCode: {
            text: immunization.reason
        },
        protocolApplied: {
            targetDisease: {
                text: immunization.disease
            },
            doseNumberString: immunization.immun
        }
    };

    const json = JSON.stringify(data);

    // ToDO sending json
    console.log('sending json', json);

    const success = true;
    return true;
}
