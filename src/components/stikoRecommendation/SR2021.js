/*
* Description:
* "start" and "end" show when to vaccinate
*   1  - 6 week         11    - space
*   2  - 2 month        12    - 2-4 year
*   3  - 3 month        13    - 5-6 year
*   4  - 4 month        14    - 7-8 year
*   5  - 5-10 month     15,16 - 9-14 year
*   6  - 11 month       17    - 15-16 year
*   7  - 12 month       18    - 17 year
*   8  - 13-14 month    19    - ab 18 year
*   9  - 15 month       20,21 - ab 60 year
*   10 - 16-23 month
*
* The field "name":
*   close - gray color
*   space - white color
*   open  - light blue
*   another value - blue color
*/
const SR2021 = () => {
  return [
    {
      name: "Rotaviren",
      times: [
        {name: "G1", desc: "a", start: 0, end: 2},
        {name: "G2", desc: "", start: 2, end: 3},
        {name: "(G3)", desc: "", start: 3, end: 4},
        {name: "close", desc: "", start: 4, end: 10},
        {name: "space"},
        {name: "close", desc: "", start: 11, end: 21}
      ]
    },
    {
      name: "Tetanus",
      times: [
        {name: "close", desc: "", start: 0, end: 1},
        {name: "G1", desc: "", start: 1, end: 2},
        {name: "open", desc: "", start: 2, end: 3},
        {name: "G2", desc: "", start: 3, end: 4},
        {name: "open", desc: "", start: 4, end: 5},
        {name: "G3", desc: "c", start: 5, end: 6},
        {name: "open", desc: "", start: 6, end: 10},
        {name: "space"},
        {name: "open", desc: "", start: 11, end: 12},
        {name: "A1", desc: "", start: 12, end: 13},
        {name: "open", desc: "", start: 13, end: 14},
        {name: "A2", desc: "", start: 14, end: 17},
        {name: "open", desc: "", start: 17, end: 18},
        {name: "A", desc: "e", start: 18, end: 21}
      ]
    },
    {
      name: "Diphtherie",
      times: [
        {name: "close", desc: "", start: 0, end: 1},
        {name: "G1", desc: "", start: 1, end: 2},
        {name: "open", desc: "", start: 2, end: 3},
        {name: "G2", desc: "", start: 3, end: 4},
        {name: "open", desc: "", start: 4, end: 5},
        {name: "G3", desc: "c", start: 5, end: 6},
        {name: "open", desc: "", start: 6, end: 10},
        {name: "space"},
        {name: "open", desc: "", start: 11, end: 12},
        {name: "A1", desc: "", start: 12, end: 13},
        {name: "open", desc: "", start: 13, end: 14},
        {name: "A2", desc: "", start: 14, end: 17},
        {name: "open", desc: "", start: 17, end: 18},
        {name: "A", desc: "e", start: 18, end: 21}
      ]
    },
    {
      name: "Pertussis",
      times: [
        {name: "close", desc: "", start: 0, end: 1},
        {name: "G1", desc: "", start: 1, end: 2},
        {name: "open", desc: "", start: 2, end: 3},
        {name: "G2", desc: "", start: 3, end: 4},
        {name: "open", desc: "", start: 4, end: 5},
        {name: "G3", desc: "c", start: 5, end: 6},
        {name: "open", desc: "", start: 6, end: 10},
        {name: "space"},
        {name: "open", desc: "", start: 11, end: 12},
        {name: "A1", desc: "", start: 12, end: 13},
        {name: "open", desc: "", start: 13, end: 14},
        {name: "A2", desc: "", start: 14, end: 17},
        {name: "open", desc: "", start: 17, end: 18},
        {name: "A3", desc: "e", start: 18, end: 19},
        {name: "open", desc: "", start: 19, end: 21}
      ]
    },
    {
      name: "Hib H. inf Type b",
      times: [
        {name: "close", desc: "", start: 0, end: 1},
        {name: "G1", desc: "", start: 1, end: 2},
        {name: "open", desc: "", start: 2, end: 3},
        {name: "G2", desc: "", start: 3, end: 4},
        {name: "open", desc: "", start: 4, end: 5},
        {name: "G3", desc: "c", start: 5, end: 6},
        {name: "open", desc: "", start: 6, end: 10},
        {name: "space"},
        {name: "open", desc: "", start: 11, end: 12},
        {name: "close", desc: "", start: 12, end: 21}
      ]
    },
    {
      name: "Poliomyelitis",
      times: [
        {name: "close", desc: "", start: 0, end: 1},
        {name: "G1", desc: "", start: 1, end: 2},
        {name: "open", desc: "", start: 2, end: 3},
        {name: "G2", desc: "", start: 3, end: 4},
        {name: "open", desc: "", start: 4, end: 5},
        {name: "G3", desc: "c", start: 5, end: 6},
        {name: "open", desc: "", start: 6, end: 10},
        {name: "space"},
        {name: "open", desc: "", start: 11, end: 14},
        {name: "A2", desc: "", start: 14, end: 17},
        {name: "open", desc: "", start: 17, end: 21}
      ]
    },
    {
      name: "Hepatitis B",
      times: [
        {name: "close", desc: "", start: 0, end: 1},
        {name: "G1", desc: "", start: 1, end: 2},
        {name: "open", desc: "", start: 2, end: 3},
        {name: "G2", desc: "", start: 3, end: 4},
        {name: "open", desc: "", start: 4, end: 5},
        {name: "G3", desc: "c", start: 5, end: 6},
        {name: "open", desc: "", start: 6, end: 10},
        {name: "space"},
        {name: "open", desc: "", start: 11, end: 18},
        {name: "close", desc: "", start: 18, end: 21}
      ]
    },
    {
      name: "Pneumokokken",
      times: [
        {name: "close", desc: "", start: 0, end: 1},
        {name: "G1", desc: "", start: 1, end: 2},
        {name: "open", desc: "", start: 2, end: 3},
        {name: "G2", desc: "", start: 3, end: 4},
        {name: "open", desc: "", start: 4, end: 5},
        {name: "G3", desc: "c", start: 5, end: 6},
        {name: "open", desc: "", start: 6, end: 10},
        {name: "space"},
        {name: "close", desc: "", start: 11, end: 19},
        {name: "S", desc: "g", start: 19, end: 21}
      ]
    },
    {
      name: "Meningokokken C",
      times: [
        {name: "close", desc: "", start: 0, end: 6},
        {name: "G1", desc: "", start: 6, end: 7},
        {name: "open", desc: "", start: 7, end: 10},
        {name: "space"},
        {name: "open", desc: "", start: 11, end: 18},
        {name: "close", desc: "", start: 18, end: 21}
      ]
    },
    {
      name: "Masern",
      times: [
        {name: "close", desc: "", start: 0, end: 5},
        {name: "G1", desc: "", start: 5, end: 6},
        {name: "open", desc: "", start: 6, end: 8},
        {name: "G2", desc: "", start: 8, end: 9},
        {name: "open", desc: "", start: 9, end: 10},
        {name: "space"},
        {name: "open", desc: "", start: 11, end: 18},
        {name: "S", desc: "f", start: 18, end: 19},
        {name: "close", desc: "", start: 19, end: 21}
      ]
    },
    {
      name: "Mumps, Röteln",
      times: [
        {name: "close", desc: "", start: 0, end: 5},
        {name: "G1", desc: "", start: 5, end: 6},
        {name: "open", desc: "", start: 6, end: 8},
        {name: "G2", desc: "", start: 8, end: 9},
        {name: "open", desc: "", start: 9, end: 10},
        {name: "space"},
        {name: "open", desc: "", start: 11, end: 18},
        {name: "close", desc: "", start: 18, end: 21}
      ]
    },
    {
      name: "Varizellen",
      times: [
        {name: "close", desc: "", start: 0, end: 5},
        {name: "G1", desc: "", start: 5, end: 6},
        {name: "open", desc: "", start: 6, end: 8},
        {name: "G2", desc: "", start: 8, end: 9},
        {name: "open", desc: "", start: 9, end: 10},
        {name: "space"},
        {name: "open", desc: "", start: 11, end: 18},
        {name: "close", desc: "", start: 18, end: 21}
      ]
    },
    {
      name: "HPV Humane Papillomviren",
      times: [
        {name: "close", desc: "", start: 0, end: 10},
        {name: "space"},
        {name: "close", desc: "", start: 11, end: 14},
        {name: "G1", desc: "d", start: 14, end: 15},
        {name: "G2", desc: "d", start: 15, end: 16},
        {name: "open", desc: "", start: 16, end: 18},
        {name: "close", desc: "", start: 18, end: 21}
      ]
    },
    {
      name: "Herpes zoster",
      times: [
        {name: "close", desc: "", start: 0, end: 10},
        {name: "space"},
        {name: "close", desc: "", start: 11, end: 19},
        {name: "G1", desc: "h", start: 19, end: 20},
        {name: "G2", desc: "h", start: 20, end: 21}
      ]
    },
    {
      name: "Herpes zoster",
      times: [
        {name: "close", desc: "", start: 0, end: 10},
        {name: "space"},
        {name: "close", desc: "", start: 11, end: 19},
        {name: "S (jährlich)", desc: "h", start: 19, end: 21}
      ]
    },
  ]
};

export default SR2021;