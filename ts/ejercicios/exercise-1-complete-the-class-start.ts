class Currency {
  private name: string;
  private code: string;
  private symbol: string;

  constructor(name: string, code: string, symbol: string) {
    this.name = name;
    this.code = code;
    this.symbol = symbol;
  }

  public describe(): string {
    let description = `The ${this.name} currency `;
    description += `has the code ${this.code} `;
    description += `and uses the symbol ${this.symbol}.`;

    return description;
  }
}

const currencyNaira = new Currency("Naira", "NGN", "₦");

console.log(currencyNaira);

console.log(currencyNaira.describe());

const currencyUsDollar = new Currency("United States dollar", "USD", "$");

console.log(currencyUsDollar);

console.log(currencyUsDollar.describe());

export {};
