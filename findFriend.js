// EXAMPLE DATA BELOW
const contacts = [
  {
    name: "Laurel",
    phone: "123 456 7890",
    email: "laurel@comics.com",
    friends: ["Hardy", "Abbott", "Costello"],
  },
  {
    name: "Hardy",
    phone: "321 654 0987",
    email: "hardy@hardyharhar.com",
    friends: ["Laurel", "Buster"],
  },
  {
    name: "Buster",
    phone: "987 654 3210",
    email: "buster@keaton.ca",
    friends: ["Hardy"],
  },
  {
    name: "Abbott",
    phone: "888 123 4567",
    email: "abbott@whosonfirst.co",
    friends: ["Costello", "Laurel"],
  },
  {
    name: "Costello",
    phone: "767 676 7676",
    email: "costello@imonfirst.co",
    friends: ["Abbott", "Laurel"],
  },
];

// Construct a function that takes in 3 parameters
// 1 - contact data
// 2 - name of contact
// 3 - field property of the contact we want back
// Fnc will return the name and specified field of the first friend listed in the contact's friend list.
// ex: findFriend(contacts, "Laurel", "email") ==> Object with Hardy's name and email adress.
// If the contact requested/field requested is not found, return Not found
//
const findFriend = (data, contactName, requiredField) => {
 if};
