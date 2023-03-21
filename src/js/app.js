export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(member) {
    if (this.members.has(member)) {
      throw new Error('Такой персонаж уже есть в команде!');
    }
    return this.members.add(member);
  }

  addAll(...members) {
    members.forEach((member) => this.members.add(member));
    return this.members;
  }

  toArray() {
    return Array.from(this.members);
  }
}
