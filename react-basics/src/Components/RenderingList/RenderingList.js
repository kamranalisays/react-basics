import { people } from './Data.js';
import  maleavatar from '../../images/maleavatar.jpg'

export default function List() {
  const chemists = people.filter(person => person.profession === 'chemist' );
  const listItems = chemists.map(person =>
    <li>
      <img
        src={maleavatar}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}