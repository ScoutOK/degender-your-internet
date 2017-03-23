const pronouns = {
  he: "they",
  him: "them",
  his: "their",
  himself: "themself",
  she: "they",
  her: "them",
  hers: "theirs",
  herself: "themself",
  He: "They",
  Him: "Them",
  His: "Their",
  Himself: "Themself",
  She: "They",
  Her: "Them",
  Hers: "Theirs",
  Herself: "Themself",
}

const mascPronouns = ['he','him','his','himself']

const femPronouns = ['she','her','herself', 'hers']

export const sumPronouns = (obj) => {
  let total = 0, masc = 0, fem = 0;
  for (let key in obj) {
    if (femPronouns.indexOf(key) > -1) fem += obj[key];
    if (mascPronouns.indexOf(key) > -1) masc += obj[key];
  }
  total = fem + masc;
  return {total, masc, fem};
}

export const nomPronouns = (obj) => {
  let total = 0, masc = 0, fem = 0;
  if (obj) {
    fem = obj.she;
    masc = obj.he;
  }
  total = fem + masc;
  return {total, masc, fem};
}