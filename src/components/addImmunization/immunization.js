export default class Immunization {
    constructor(uuid, pid, perf, note, reason, vaccine, status, date, site, dose, disease, immun){
        this.uuid     = uuid;          // Identifier des Patienten
        this.pid      = pid;           // ID des Patienten im System
        this.perf     = perf;          // ID des Arztes
        this.note     = note;          // Bemerkung
        this.vaccine  = vaccine;       // Code des Impfstoffes (siehe System)
        this.status   = status;        // Status der Impfung (enum completed, entered-in-error, not-done)
        this.date     = date;          // Datum der Impfung
        this.site     = site;          // Impfstelle
        this.dose     = dose;          // Dosis der Impfung (in ml)  
        this.reason   = reason;        // Impfgrund
        this.disease  = disease;       // Erreger
        this.immun    = immun;         // Immunisierungsgrad (bsp. G2)
        this.diseaseData = [
          "Diphtherie", "Hepatitis B", "Hibb – H. influenzae Typ b", "Influenza", "Masern",
          "Meningokokken C", "Herpes zoster", "HPV – Humane Papillomviren", "Mumps, Röteln", "Pertussis",
          "Pneumokokken", "Poliomyelitis", "Rotaviren", "Tetanus", "Varizellen"
        ];
    };
    create = () => {                   // returns: JSON gefühlt mit den Daten des Objektes
        return JSON.parse(`{
            "resourceType": "Immunization",
            "identifier": [ {
              "system": "urn:ietf:rfc:3986",
              "value": "${this.uuid}"
            } ],
            "status": "${this.status}",
            "vaccineCode": {
              "text": "${this.vaccine}"
            },
            "patient": {
              "reference": "Patient/${this.pid}"
            },
            "occurrenceDateTime": "${this.date}",
            "site": {
              "text": "${this.site}"
            },
            "doseQuantity": {
              "value": "${this.dose}",
              "system": "http://unitsofmeasure.org",
              "code": "mL"
            },
            "performer": {
              "actor": {
                "reference": "${this.perf}"
              }
            },
            "note": {
              "text": "${this.note}"
            },
            "reasonCode": {
              "text": "${this.reason}"
            },
            "protocolApplied": {
                "targetDisease": {
                  "text": "${this.disease}"
                },
                "doseNumberString": "${this.immun}"
            }
          }`);
    };
    toString = () => {
      console.log(this.uuid)
      console.log(this.pid)
      console.log(this.vaccine)
      console.log(this.status)
      console.log(this.date)
      console.log(this.site)
      console.log(this.dose)
      console.log(this.perf)
      console.log(this.note)
      console.log(this.reason)
      console.log(this.disease)
      console.log(this.immun)
  };
}