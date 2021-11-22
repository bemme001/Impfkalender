import axios from "axios";
import { useQuerry } from "react-query";

export const postData = async (json) =>
    await axios
        .post("https://hapi.fhir.org/base4/Immunization", json)
        .then((res) => res.data);

export const postImmunization = (json) =>
    useQuerry(["Immunization", json], () => postData(json));

