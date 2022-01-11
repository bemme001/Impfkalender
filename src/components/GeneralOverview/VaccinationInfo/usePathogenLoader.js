import { useState, useEffect } from "react";

// const initialValue = {
//   id: "2696876",
//   pathogen: "Hibb – H. influenzae Typ trolololo",
//   vaccine: "test",
//   status: "completed",
//   immun: "G1",
//   date: "2021-11-20",
//   site: "Nase",
//   quantity: "100",
//   reason: "Drogen",
//   note: "my note"
// }

export function usePathogenLoader(initialValue, errors, setErrors) {
    const [pathogenOptions, setPathogenOptions] = useState(initialValue);
    useEffect(() => {
        fetch("http://localhost:3001/diseaseData")
            .then(res => {
                return res.json();
            })
            .then(data => {
                const result = data.map(item => {
                    return { value: item.name, text: item.name };
                });
                setPathogenOptions(result);
            })
            .catch(() => setErrors({ ...errors, "diseaseErr": "Erreger konnten nicht geladen werden!" })
            );
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return pathogenOptions;
}
