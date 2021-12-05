/*
* Description:
* "r_start" and "r_end" show when to vaccinate in months
*
* "t_start" and "t_end" are using for the build of table
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
      id: 1,
      name: "Rotaviren",
      times: [
        {name: "G1",    desc: "a", r_start: 0, r_end: 2, t_start: 0, t_end: 2},
        {name: "G2",    desc: "",  r_start: 3, r_end: 3, t_start: 2, t_end: 3},
        {name: "G3",    desc: "",  r_start: 4, r_end: 4, t_start: 3, t_end: 4},
        {name: "close", desc: "",  t_start: 4, t_end: 10},
        {name: "space"},
        {name: "close", desc: "",  t_start: 11, t_end: 21}
      ]
    },
    {
      id: 2,
      name: "Tetanus",
      times: [
        {name: "close", desc: "",  t_start: 0, t_end: 1},
        {name: "G1",    desc: "",  r_start: 2, r_end: 3, t_start: 1, t_end: 2},
        {name: "open",  desc: "",  t_start: 2, t_end: 3},
        {name: "G2",    desc: "",  r_start: 4, r_end: 10, t_start: 3, t_end: 4},
        {name: "open",  desc: "",  t_start: 4, t_end: 5},
        {name: "G3",    desc: "c", r_start: 11, r_end: 48, t_start: 5, t_end: 6},
        {name: "open",  desc: "",  t_start: 6, t_end: 10},
        {name: "space"},
        {name: "open",  desc: "",  t_start: 11, t_end: 12},
        {name: "A1",    desc: "",  r_start: 49, r_end: 96, t_start: 12, t_end: 13},
        {name: "open",  desc: "",  t_start: 13, t_end: 14},
        {name: "A2",    desc: "",  r_start: 97, r_end: 204, t_start: 14, t_end: 17},
        {name: "open",  desc: "",  t_start: 17, t_end: 18},
        {name: "A",     desc: "e", r_start: 205, r_end: 1200, t_start: 18, t_end: 21}
      ]
    },
    {
      id: 3,
      name: "Diphtherie",
      times: [
        {name: "close", desc: "",  t_start: 0, t_end: 1},
        {name: "G1",    desc: "",  r_start: 2, r_end: 3, t_start: 1, t_end: 2},
        {name: "open",  desc: "",  t_start: 2, t_end: 3},
        {name: "G2",    desc: "",  r_start: 4, r_end: 10, t_start: 3, t_end: 4},
        {name: "open",  desc: "",  t_start: 4, t_end: 5},
        {name: "G3",    desc: "c", r_start: 11, r_end: 48, t_start: 5, t_end: 6},
        {name: "open",  desc: "",  t_start: 6, t_end: 10},
        {name: "space"},
        {name: "open",  desc: "",  t_start: 11, t_end: 12},
        {name: "A1",    desc: "",  r_start: 49, r_end: 96, t_start: 12, t_end: 13},
        {name: "open",  desc: "",  t_start: 13, t_end: 14},
        {name: "A2",    desc: "",  r_start: 97, r_end: 204, t_start: 14, t_end: 17},
        {name: "open",  desc: "",  t_start: 17, t_end: 18},
        {name: "A",     desc: "e", r_start: 205, r_end: 1200, t_start: 18, t_end: 21}
      ]
    },
    {
      id: 4,
      name: "Pertussis",
      times: [
        {name: "close", desc: "",  t_start: 0, t_end: 1},
        {name: "G1",    desc: "",  r_start: 2, r_end: 3, t_start: 1, t_end: 2},
        {name: "open",  desc: "",  t_start: 2, t_end: 3},
        {name: "G2",    desc: "",  r_start: 4, r_end: 10, t_start: 3, t_end: 4},
        {name: "open",  desc: "",  t_start: 4, t_end: 5},
        {name: "G3",    desc: "c", r_start: 11, r_end: 48, t_start: 5, t_end: 6},
        {name: "open",  desc: "",  t_start: 6, t_end: 10},
        {name: "space"},
        {name: "open",  desc: "",  t_start: 11, t_end: 12},
        {name: "A1",    desc: "",  r_start: 49, r_end: 96, t_start: 12, t_end: 13},
        {name: "open",  desc: "",  t_start: 13, t_end: 14},
        {name: "A2",    desc: "",  r_start: 97, r_end: 204, t_start: 14, t_end: 17},
        {name: "open",  desc: "",  t_start: 17, t_end: 18},
        {name: "A3",    desc: "e", r_start: 205, r_end: 1200, t_start: 18, t_end: 19},
        {name: "open",  desc: "",  t_start: 19, t_end: 21}
      ]
    },
    {
      id: 5,
      name: "Hib H. inf Type b",
      times: [
        {name: "close", desc: "",  t_start: 0, t_end: 1},
        {name: "G1",    desc: "",  r_start: 2, r_end: 3, t_start: 1, t_end: 2},
        {name: "open",  desc: "",  t_start: 2, t_end: 3},
        {name: "G2",    desc: "",  r_start: 4, r_end: 10, t_start: 3, t_end: 4},
        {name: "open",  desc: "",  t_start: 4, t_end: 5},
        {name: "G3",    desc: "c", r_start: 11, r_end: 48, t_start: 5, t_end: 6},
        {name: "open",  desc: "",  t_start: 6, t_end: 10},
        {name: "space"},
        {name: "open",  desc: "",  t_start: 11, t_end: 12},
        {name: "close", desc: "",  t_start: 12, t_end: 21}
      ]
    },
    {
      id: 6,
      name: "Poliomyelitis",
      times: [
        {name: "close", desc: "",  t_start: 0, t_end: 1},
        {name: "G1",    desc: "",  r_start: 2, r_end: 3, t_start: 1, t_end: 2},
        {name: "open",  desc: "",  t_start: 2, t_end: 3},
        {name: "G2",    desc: "",  r_start: 4, r_end: 10, t_start: 3, t_end: 4},
        {name: "open",  desc: "",  t_start: 4, t_end: 5},
        {name: "G3",    desc: "c", r_start: 11, r_end: 96, t_start: 5, t_end: 6},
        {name: "open",  desc: "",  t_start: 6, t_end: 10},
        {name: "space"},
        {name: "open",  desc: "", t_start: 11, t_end: 14},
        {name: "A2",    desc: "", r_start: 97, r_end: 1200, t_start: 14, t_end: 17},
        {name: "open",  desc: "", t_start: 17, t_end: 21}
      ]
    },
    {
      id: 7,
      name: "Hepatitis B",
      times: [
        {name: "close", desc: "",  t_start: 0, t_end: 1},
        {name: "G1",    desc: "",  r_start: 2, r_end: 3, t_start: 1, t_end: 2},
        {name: "open",  desc: "",  t_start: 2, t_end: 3},
        {name: "G2",    desc: "",  r_start: 4, r_end: 10, t_start: 3, t_end: 4},
        {name: "open",  desc: "",  t_start: 4, t_end: 5},
        {name: "G3",    desc: "c", r_start: 11, r_end: 204, t_start: 5, t_end: 6},
        {name: "open",  desc: "",  t_start: 6, t_end: 10},
        {name: "space"},
        {name: "open",  desc: "",  t_start: 11, t_end: 18},
        {name: "close", desc: "",  t_start: 18, t_end: 21}
      ]
    },
    {
      id: 8,
      name: "Pneumokokken",
      times: [
        {name: "close", desc: "",  t_start: 0, t_end: 1},
        {name: "G1",    desc: "",  r_start: 2, r_end: 3, t_start: 1, t_end: 2},
        {name: "open",  desc: "",  t_start: 2, t_end: 3},
        {name: "G2",    desc: "",  r_start: 4, r_end: 10, t_start: 3, t_end: 4},
        {name: "open",  desc: "",  t_start: 4, t_end: 5},
        {name: "G3",    desc: "c", r_start: 11, r_end: 23, t_start: 5, t_end: 6},
        {name: "open",  desc: "",  t_start: 6, t_end: 10},
        {name: "space"},
        {name: "close", desc: "",  t_start: 11, t_end: 19},
        {name: "S",     desc: "g", r_start: 709, r_end: 1200, t_start: 19, t_end: 21}
      ]
    },
    {
      id: 9,
      name: "Meningokokken C",
      times: [
        {name: "close", desc: "", t_start: 0, t_end: 6},
        {name: "G1",    desc: "", r_start: 12, r_end: 204, t_start: 6, t_end: 7},
        {name: "open",  desc: "", t_start: 7, t_end: 10},
        {name: "space"},
        {name: "open",  desc: "", t_start: 11, t_end: 18},
        {name: "close", desc: "", t_start: 18, t_end: 21}
      ]
    },
    {
      id: 10,
      name: "Masern",
      times: [
        {name: "close", desc: "",  t_start: 0, t_end: 5},
        {name: "G1",    desc: "",  r_start: 11, r_end: 14, t_start: 5, t_end: 6},
        {name: "open",  desc: "",  t_start: 6, t_end: 8},
        {name: "G2",    desc: "",  r_start: 15, r_end: 204, t_start: 8, t_end: 9},
        {name: "open",  desc: "",  t_start: 9, t_end: 10},
        {name: "space"},
        {name: "open",  desc: "",  t_start: 11, t_end: 18},
        {name: "S",     desc: "f", r_start: 205, r_end: 216, t_start: 18, t_end: 19},
        {name: "close", desc: "",  t_start: 19, t_end: 21}
      ]
    },
    {
      id: 11,
      name: "Mumps, Röteln",
      times: [
        {name: "close", desc: "",  t_start: 0, t_end: 5},
        {name: "G1",    desc: "",  r_start: 11, r_end: 14, t_start: 5, t_end: 6},
        {name: "open",  desc: "",  t_start: 6, t_end: 8},
        {name: "G2",    desc: "",  r_start: 15, r_end: 204, t_start: 8, t_end: 9},
        {name: "open",  desc: "",  t_start: 9, t_end: 10},
        {name: "space"},
        {name: "open",  desc: "", t_start: 11, t_end: 18},
        {name: "close", desc: "", t_start: 18, t_end: 21}
      ]
    },
    {
      id: 12,
      name: "Varizellen",
      times: [
        {name: "close", desc: "",  t_start: 0, t_end: 5},
        {name: "G1",    desc: "",  r_start: 11, r_end: 14, t_start: 5, t_end: 6},
        {name: "open",  desc: "",  t_start: 6, t_end: 8},
        {name: "G2",    desc: "",  r_start: 15, r_end: 204, t_start: 8, t_end: 9},
        {name: "open",  desc: "",  t_start: 9, t_end: 10},
        {name: "space"},
        {name: "open",  desc: "", t_start: 11, t_end: 18},
        {name: "close", desc: "", t_start: 18, t_end: 21}
      ]
    },
    {
      id: 13,
      name: "HPV Humane Papillomviren",
      times: [
        {name: "close", desc: "",  t_start: 0, t_end: 10},
        {name: "space"},
        {name: "close", desc: "",  t_start: 11, t_end: 14},
        {name: "G1",    desc: "d", r_start: 97, r_end: 204, t_start: 14, t_end: 15},
        {name: "G2",    desc: "d", r_start: 97, r_end: 204, t_start: 15, t_end: 16},
        {name: "open",  desc: "",  t_start: 16, t_end: 18},
        {name: "close", desc: "",  t_start: 18, t_end: 21}
      ]
    },
    {
      id: 14,
      name: "Herpes zoster",
      times: [
        {name: "close", desc: "",  t_start: 0, t_end: 10},
        {name: "space"},
        {name: "close", desc: "",  t_start: 11, t_end: 19},
        {name: "G1",    desc: "h", r_start: 709, r_end: 1200, t_start: 19, t_end: 20},
        {name: "G2",    desc: "h", r_start: 709, r_end: 1200, t_start: 20, t_end: 21}
      ]
    },
    {
      id: 15,
      name: "Herpes zoster",
      times: [
        {name: "close", desc: "", t_start: 0, t_end: 10},
        {name: "space"},
        {name: "close", desc: "", t_start: 11, t_end: 19},
        {name: "S (jährlich)", desc: "h", r_start: 709, r_end: 1200, t_start: 19, t_end: 21}
      ]
    },
  ]
};

export default SR2021;