import Team from '../app';
import Character from '../Character';

test('add team member', () => {
  const member = new Character('Ivan', 'Zombie', 90, 2, 50, 20);
  const team = new Team();
  const addMember = team.add(member);
  expect(addMember).toContain(member);
});

test('add team member twice', () => {
  expect(() => {
    const member = new Character('Ivan', 'Zombie', 90, 2, 50, 20);
    const team = new Team();
    team.add(member);
    team.add(member);
  }).toThrowError('Такой персонаж уже есть в команде!');
});

test('add many members at team', () => {
  const member1 = new Character('Ivan', 'Zombie', 90, 2, 50, 20);
  const member2 = new Character('Anton', 'Daemon', 100, 4, 60, 40);
  const member3 = new Character('Olga', 'Magician', 70, 2, 30, 30);

  const team = new Team();
  team.addAll(member1, member2, member3, member1, member3);
  expect(team.members.size).toBe(3);
});

test('this.members to Array', () => {
  const member1 = new Character('Ivan', 'Zombie', 90, 2, 50, 20);
  const member2 = new Character('Anton', 'Daemon', 100, 4, 60, 40);
  const member3 = new Character('Olga', 'Magician', 70, 2, 30, 30);

  const team = new Team();
  const teamAddAll = team.addAll(member1, member2, member3, member1, member3);
  expect(team.toArray()).toEqual(Array.from(teamAddAll));
});
