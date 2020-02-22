console.log("hello I am  node app from typescript");
console.log("hello I am  node app from typescript");

class Name {
  private name: string;
  constructor(name: string) {
    this.name = name;
    console.log("my name is ==> ", this.name);
  }
  public setName(name: string): void {
    this.name = name;
    console.log("my name is ==> ", this.name);
  }
}

const myName = new Name(`eslam`);
myName.setName("farida");
