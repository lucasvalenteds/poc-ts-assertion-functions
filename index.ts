export declare const charactersOnly: unique symbol;
export declare const lowerCaseOnly: unique symbol;

export type Name = string & {
  [charactersOnly]: true;
  [lowerCaseOnly]: true;
};

export function assertName(name: string): asserts name is Name {
  const containsNumbers = new RegExp(/\d/);
  if (containsNumbers.exec(name)) {
    throw Error(`Name: '${name}' cannot contain numbers`);
  }

  const containsOnlyLetters = new RegExp(/^[a-z]+$/);
  if (!containsOnlyLetters.exec(name)) {
    throw Error(`Name: '${name}' cannot contain symbols`);
  }
}

export type GuestBook = {
  names: Name[];
};
