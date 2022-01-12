export default class Patient {

    async fetchPatient(id) {
        /*await axios.get("https://hapi.fhir.org/baseR4/Patient?_id=" + id)
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
            });*/

    };

    async inputPatient(patient) {

        this.id             = patient.id;
        this.uuid           = patient.identifier[0].value;
        this.name           = patient.name[0].text;
        if(patient.gender === 'female'){
            this.gender = 'weiblich';
        }else {
            this.gender = 'männlich';
        }
        this.birthdate      = patient.birthDate;
        this.line           = patient.address[0].line[0];
        this.postal         = patient.address[0].postalCode;
        this.city           = patient.address[0].city;
        this.telecom        = patient.telecom[0].value;

    };

    static async create(patient) {
        const o = new Patient();
        await o.inputPatient(patient);
        return o;
    }

}