import axios from "axios";

export const postImmunization = async (json) => {
    console.log(json)
    return await axios
        .post("https://hapi.fhir.org/baseR4/Immunization", json, {
            "ContentType": "application/fhir+json;charset=utf-8"
        })
        .then((res) => res.data);  
}