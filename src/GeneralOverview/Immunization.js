import axios from "axios";

var immunizationJson;

export default class Immunization {
    /* static numOfImz;
    numOfImz = immunizationJson.length; */

    async getData(count){
        this.id             = immunizationJson[count].resource.id;                  //Resourcen ID
        this.vaccinecode    = immunizationJson[count].resource.vaccineCode.text;    //Erreger
        this.status         = immunizationJson[count].resource.status;              //Status der Impfung
        this.site           = immunizationJson[count].resource.site.text;           //Ort der Impfung
        this.route          = immunizationJson[count].resource.route.text;          //Art der Durchführung
        this.performer      = "Dr. Holiday"                                         //Arzt
        this.note           = immunizationJson[count].resource.note[0].text         //Notiz
        this.quantity       = immunizationJson[count].resource.doseQuantity.value + " " + immunizationJson[count].resource.doseQuantity.code
    }

    static async fetchImmunization(uuid) {
        await axios.get("https://hapi.fhir.org/baseR4/Immunization?identifier=" + uuid)
            .then((response) => {
                immunizationJson = response.data.entry;
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