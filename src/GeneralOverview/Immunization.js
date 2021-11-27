import axios from "axios";

var immunizationJson;

export default class Immunization {
    /* static numOfImz;
    numOfImz = immunizationJson.length; */
    
    constructor(){
    };

    async getData(count){
        this.id             = immunizationJson[count].resource.id;
        this.vaccinecode    = immunizationJson[count].resource.vaccineCode.text;
        this.status         = immunizationJson[count].resource.status;
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
        console.log(Immunizations);

        return Immunizations;
    }
}