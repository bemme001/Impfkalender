export const checkForms = (immunization, patient) => {
    const newErrors = {};
    const regexDose = new RegExp('[0-9]+((.|,)[0-9]+)?');
    const now = new Date().getTime();
    const immuDate = new Date(immunization.date).getTime();
    const birthday = new Date(patient.birthdate).getTime();

    if (immunization.disease === '') newErrors.disease = "Bitte wählen Sie einen Erreger aus.";
    if (immunization.vaccine === '') newErrors.vaccine = "Bitte geben Sie einen Impfstoff an.";
    if (immunization.vaccine && immunization.vaccine.length > 200) newErrors.vaccine = "Bitte geben Sie nicht mehr als 200 Zeichen ein."
    if (immunization.status === undefined) newErrors.status = "Bitte wählen Sie einen Impfstatus aus.";
    if (immunization.immun === '') newErrors.immun = "Bitte wählen Sie einen Immunisierungsgrad aus.";
    if (immunization.date === '') newErrors.date = "Bitte wählen Sie ein Datum aus.";
    if (immuDate > now) newErrors.date = "Bitte wählen Sie ein Datum aus, das nicht in der Zukunft liegt.";
    if (immuDate < birthday) newErrors.date = "Bitte wählen Sie ein Datum aus, an dem der Patient schon lebte.";
    if (immunization.site === '') newErrors.site = "Bitte geben Sie an wo Sie am Körper geimpft haben.";
    if (immunization.site && immunization.site.length > 200) newErrors.site = "Bitte geben Sie nicht mehr als 200 Zeichen ein."

    // Funktioniert nicht, sofern immunization.dose als Textinput ein ml hinzufuegt wird
    // if (immunization.dose && immunization.dose < 0) newErrors.dose = "Bitte geben Sie einen positiven Wert ein.";
    // if (immunization.dose === 0) newErrors.dose = "Bitte geben Sie an wie viel Imstoff (in ml) Sie verabreicht haben.";
    // if (!regexDose.test(immunization.dose)) newErrors.dose = "Bitte geben Sie eine Zahl ein."; //pattern="[0-9]+((.|,)[0-9]+)?"
    return newErrors;
}