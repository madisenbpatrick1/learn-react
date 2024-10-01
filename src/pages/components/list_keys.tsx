const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function List() {
  const listItems = people.map((person, index) =>
    <li key={index}>{person}</li> // key prop added here so that it can recognize each item 
  );
  return <ul>{listItems}</ul>;
}