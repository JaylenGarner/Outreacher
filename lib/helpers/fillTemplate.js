export const fillTemplate = (application, contact, template) => {
  const regex = /{([^}]+)}/g;

  const dataMap = new Map([
    ["{Company}", application.company],
    ["{Position}", application.position],
    ["{Contact Name}", contact.name.split(" ")[0]],
    ["{Contact Title}", contact.title],
  ]);

  const filledTemplate = template.body.replace(regex, (match, key) => {
    if (dataMap.has(`{${key}}`)) {
      return dataMap.get(`{${key}}`);
    } else {
      return match;
    }
  });

  return filledTemplate;
};
