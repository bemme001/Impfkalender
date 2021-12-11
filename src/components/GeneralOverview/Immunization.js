import axios from "axios";

var immunizationJson;

export default class Immunization {

    constructor(id, pathogen, vaccine, status, immun, date, site, quantity, reason, note) {
        this.id                         = id;           //Resourcen ID
        this.pathogen                   = pathogen;     //Erreger
        this.vaccine                    = vaccine;      //Impfstoff
        this.status                     = status;       //Status
        this.immun                      = immun         //Immunisierung
        this.date                       = date;         //Datum
        this.site                       = site;         //Impfstelle
        this.quantity                   = quantity;     //Dosis
        this.reason                     = reason;       //Impfgrund
        this.note                       = note;         //Notiz
    }

    async getData(count){
        this.id                         = immunizationJson[count].resource.id;                  //Resourcen ID
        this.pathogen                   = immunizationJson[count].resource.protocolApplied[0]
            .targetDisease[0].text;                                                             //Erreger
        this.vaccine                    = immunizationJson[count].resource.vaccineCode.text;    //Impfstoff
        this.status                     = immunizationJson[count].resource.status;              //Status
        this.immun                      = immunizationJson[count].resource.protocolApplied[0]
            .doseNumberString;                                                                  //Immunisierung
        this.date                       = immunizationJson[count].resource.occurrenceDateTime;  //Datum
        this.site                       = immunizationJson[count].resource.site.text;           //Impfstelle
        this.quantity                   = immunizationJson[count].resource.doseQuantity.value
            + " " + immunizationJson[count].resource.doseQuantity.code;                         //Dosis
        this.reason                     = immunizationJson[count].resource.reasonCode ?
            immunizationJson[count].resource.reasonCode[0].text : "No Value";                   //Impfgrund
        this.note                       = immunizationJson[count].resource.note ?
            immunizationJson[count].resource.note[0].text : "No Value";                         //Notiz
    }

    static async fetchImmunization(uuid) {
        await axios.get("https://hapi.fhir.org/baseR4/Immunization?identifier=" + uuid + "&_count=1024")
            .then((response) => {
                immunizationJson = [];

                if(response.data.entry){
                    immunizationJson = response.data.entry;
                }
            });
    };

    static async create(uuid) {
        var Immunizations = [];
        await this.fetchImmunization(uuid);
        
        for(var i = 0; i < immunizationJson.length; i++){
            const o = new Immunization();
            await o.getData(i);
            Immunizations.push(o);
        }
        return Immunizations;
    }
}