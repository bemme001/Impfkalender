class Immunization {
    constructor(uuid, pid, vaccine, status, date, site, route, dose, pract, note, reason, disease, immun){
        this.uuid     = uuid;          // Identifier des Patienten
        this.pid      = pid;           // ID des Patienten im System
        this.vaccine  = vaccine;       // Code des Impfstoffes (siehe System)
        this.status   = status;        // Status der Impfung (enum completed, entered-in-error, not-done)
        this.date     = date;          // Datum der Impfung
        this.site     = site;          // Code der Impfstelle (siehe System)
        this.route    = route;         // Code der Impfroute (siehe System)
        this.dose     = dose;          // Dosis der Impfung (in ml)
        this.pract    = pract;         // ID des Arztes
        this.note     = note;          // Bemerkung
        this.reason   = reason;        // Code für Impfgrund (siehe System)
        this.disease  = disease;       // Code des Erregers (siehe System)
        this.immun    = immun;         // Immunisierungsgrad (bsp. G2)

        create        = () => {        // returns: JSON gefühlt mit den Daten des Objektes
            return `{
                "resourceType": "Immunization",
                "identifier": [ {
                  "system": "urn:ietf:rfc:3986",
                  "value": "${this.uuid}"
                } ],
                "status": "${this.status}",
                "vaccineCode": {
                  "coding": [ {
                    "system": "http://hl7.org/fhir/valueset-vaccine-code.html",
                    "code": "${this.vaccine}"
                  } ]
                },
                "patient": {
                  "reference": "Patient/${this.pid}"
                },
                "occurrenceDateTime": "${this.date}",
                "site": {
                  "coding": [ {
                    "system": "https://www.hl7.org/fhir/v3/ActSite/cs.html",
                    "code": "${this.site}"
                  } ]
                },
                "route": {
                  "coding": [ {
                    "system": "https://www.hl7.org/fhir/v3/RouteOfAdministration/cs.html",
                    "code": "${this.route}"
                  } ]
                },
                "doseQuantity": {
                  "value": ${this.dose},
                  "system": "http://unitsofmeasure.org",
                  "code": "mL"
                },
                "performer": [ {
                  "actor": {
                    "reference": "Practitioner/${this.prac}"
                  }
                } ],
                "note": [ {
                  "text": "${this.note}"
                } ],
                "reasonCode": [ {
                  "coding": [ {
                    "system": "http://snomed.info/sct",
                    "code": "${this.reason}"
                  } ]
                } ],
                "protocolApplied": [ {
                    "targetDisease": [ {
                        "coding": [ {
                            "system": "http://snomed.info/sct",
                            "code": "${this.disease}",
                        } ]
                    } ],
                    "doseNumberString": "${this.immun}"
                } ]
              }`
        }
    }
}