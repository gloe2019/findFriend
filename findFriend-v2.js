const contacts = [
  {
    name: "Barney",
    phone: "212 451 1288",
    email: "barney@doesnotexist.com",
    friends: ["Henderson", "Trix"],
  },
  {
    name: "Carter",
    phone: "947 468 5134",
    email: "carter@cartyfarty.com",
    friends: ["Barney", "Trix"],
  },
  {
    name: "Trix",
    phone: "123 412 1539",
    email: "trix4kids@tricky.com",
    friends: ["Henderson", "Barney", "Carter"],
  },
];

const findFriend2 = (data, contactName, requiredField) => {
  let foundPerson = {};
  if (data.length === 0 || Object.keys(data).length === 0)
    return "Invalid data";
  const findByName = data.find((item) => item.name === contactName);
  if (findByName === undefined) {
    return `${contactName} not found`;
  }
  const friendsToCheck = findByName.friends;
  let found;
  for (const name of friendsToCheck) {
    found = contacts.find((item) => item.name === name);
    if (found) break;
  }

  foundPerson["name"] = found.name;
  foundPerson[requiredField] = found[requiredField];
  return foundPerson;
};

console.log(findFriend2(contacts, "Carter", "email"));
