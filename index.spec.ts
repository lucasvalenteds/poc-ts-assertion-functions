import { GuestBook, assertIsName } from "./";

test("Failing when array item contains number", () => {
  expect.assertions(1);
  const name = "123";

  try {
    assertIsName(name);
  } catch (error) {
    expect(error.message).toStrictEqual("Name: '123' cannot contain numbers");
  }
});

test("Failing when array item contains symbols", () => {
  expect.assertions(1);
  const name = "some-name";

  try {
    assertIsName(name);
  } catch (error) {
    expect(error.message).toStrictEqual(
      "Name: 'some-name' cannot contain symbols"
    );
  }
});

test("Failing when array item contains upper case letters", () => {
  expect.assertions(1);
  const name = "Name";

  try {
    assertIsName(name);
  } catch (error) {
    expect(error.message).toStrictEqual("Name: 'Name' cannot contain symbols");
  }
});

test("A guest book contains names", () => {
  const john = "john";
  assertIsName(john);

  const mary = "mary";
  assertIsName(mary);

  const bag: GuestBook = {
    names: [john, mary],
  };

  expect(bag.names).toStrictEqual(["john", "mary"]);
});
