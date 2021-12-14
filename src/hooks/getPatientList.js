import axios from "axios";
import { useQuery } from 'react-query';

export const fetchPatientList = async (value) =>
    await axios
        .get(`http://hapi.fhir.org/baseR4/Patient?${value}&identifier=urn:uuid:6c26efa95b1f43e0962278947043491c&_count=1024`, {
            "ContentType": "application/fhir+json;charset=utf-8"
        })
        .then((res) => res.data);

export const GetPatientList = (value) =>
    useQuery(["getPlayer", value], () => fetchPatientList(value));