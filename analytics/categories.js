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
    fem = obj.she || 0;
    masc = obj.he || 0;
  }
  total = fem + masc;
  return {total, masc, fem};
}