import react from 'react';
import Patient from "../components/GeneralOverview/Patient";
import Immunization from "../components/GeneralOverview/Immunization";

export default async (state, action) => {

    switch (action.type) {
        case 'ADD_IMMUNIZATION':
            return {
                immunization: [action.payload, ...state.immunization]
            }
        default:
            return state;
    }
}