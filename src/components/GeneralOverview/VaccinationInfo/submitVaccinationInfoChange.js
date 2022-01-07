import { putImmunization } from "../../../hooks/putImmunization";

export function submitVaccinationInfoChange(immunization, patient) {
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
                value: immunization.dose,
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
    putImmunization(data, immunization.id);

    const success = true;
    return true;
}
