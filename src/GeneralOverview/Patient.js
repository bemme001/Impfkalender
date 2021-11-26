import axios from "axios";

var patientJson;

export default class Patient {

    constructor(){
    };

    async fetchPatient(id) {
        await axios.get("https://hapi.fhir.org/baseR4/Patient?_id=" + id)
            .then((response) => {
                patientJson = response.data.entry[0].resource;

                this.id             = id;
                this.uuid           = patientJson.identifier[0].value;
                this.name           = patientJson.name[0].text;
                if(patientJson.gender === 'female'){
                    this.gender = 'weiblich';
                }else {
                    this.gender = 'männlich';
                }
                this.birthdate      = patientJson.birthDate;
                this.line           = patientJson.address[0].line[0];
                this.postal         = patientJson.address[0].postalCode;
                this.city           = patientJson.address[0].city;
                this.telecom        = patientJson.telecom[0].value;
            });
    };

    static async create(id) {
        const o = new Patient();
        await o.fetchPatient(id);
        console.log(o);
        return o;
    }
}