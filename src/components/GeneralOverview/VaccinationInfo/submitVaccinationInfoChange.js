import { putImmunization } from "../../../hooks/putImmunization";

export async function submitVaccinationInfoChange(immunization, patient) {
    const data =
    {
        resourceType: "Immunization",
        id: immunization.id,
        identifier: [
            {
                system: "urn:ietf:rfc:3986",
                value: patient.uuid
            }
        ],
        status: immunization.status,
        vaccineCode: {
            text: immunization.vaccine
        },
        patient: {
            reference: `Patient/${patient.id}`
        },
        occurrenceDateTime: immunization.date,
        site: {
            text: immunization.site
        },
        doseQuantity: {
            value: immunization.quantity,
            system: "http://unitsofmeasure.org",
            code: "mL"
        },
        performer: [
            {
                actor: {
                    reference: "Practitioner/2691497"
                }
            }
        ],
        reasonCode: [
            {
                text: immunization.reason
            }
        ],
        protocolApplied: [
            {
                targetDisease: [
                    {
                        text: immunization.pathogen
                    }
                ],
                doseNumberString: immunization.immun
            }
        ],
        note: [
            {
                text: immunization.note
            }
        ]
    }

    try {
        await putImmunization(data, immunization.id);
        return true;
    }
    catch (error) {
        console.log(error);
        return false;
    }
}
