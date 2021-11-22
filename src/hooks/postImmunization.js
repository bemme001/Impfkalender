import axios from "axios";
import { useQuery } from "react-query";

export const postData = async (json) =>
    await axios
        .post("https://hapi.fhir.org/base4/Immunization", json)
        .then((res) => res.data);

export const postImmunization = (json) =>
    useQuery(["Immunization", json], () => postData(json));

export default postImmunization;