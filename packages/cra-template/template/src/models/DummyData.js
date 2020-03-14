
export class AppData {
  constructor(name = "default") {
    this.id = "app-1";
    this.name = name;
    this.owner = "AMEYO";
  }

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getOwner() {
    return this.owner;
  }

  toString() {
    return JSON.stringify(this);
  }
}
