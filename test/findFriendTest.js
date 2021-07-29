const chai = require("chai");
const assert = chai.assert;
const findFriend = require("../findFriend");

describe("findFriend", () => {
  it('should return "Invalid data" if data is an empty object', () => {
    const data = [];
    const expectedOutput = "Invalid data";
    const input = findFriend(data, "Someone", "anything");

    assert.deepEqual(input, expectedOutput);
  });

  it('should return "Not found" if the requested contact is not found', () => {
    const data = [
      {
        name: "Barney",
        phone: "212 451 1288",
        email: "barney@doesnotexist.com",
        friends: ["Henderson", "Trix"],
      },
      {
        name: "Carter",
        phone: "947 469 5134",
        email: "carter@cartyfarty.com",
        friends: ["Barney", "Trix"],
      },
    ];
    const expectedOutput = "Not found";
    const input = findFriend(data, "Bob", "email");

    assert.deepEqual(input, expectedOutput);
  });

  it('should return "Not found" if the requested field is not found', () => {
    const data = [
      {
        name: "Barney",
        phone: "212 451 1288",
        email: "barney@doesnotexist.com",
        friends: ["Henderson", "Trix"],
      },
      {
        name: "Carter",
        phone: "947 469 5134",
        email: "carter@cartyfarty.com",
        friends: ["Barney", "Trix"],
      },
      {
        name: "Trix",
        phone: "123 524 7812",
        email: "trix4kids@tricky.com",
        friends: ["Henderson", "Barney", "Carter"],
      },
    ];
    const expectedOutput = "Not found";
    const input = findFriend(data, "Trix", "birthday");

    assert.deepEqual(input, expectedOutput);
  });
});
