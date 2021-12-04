import react from 'react';
import Patient from "../GeneralOverview/Patient";
import Immunization from "../GeneralOverview/Immunization";

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