import axios from "axios";

export const putImmunization = async (json, id) => 
    await axios
        .put(`https://hapi.fhir.org/baseR4/Immunization/${id}`, json, {
            "ContentType": "application/fhir+json;charset=utf-8"
        })
        .catch((error) => { throw error });