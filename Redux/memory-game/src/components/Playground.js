import { useSelector } from 'react-redux';
import Card from './Card';

function Playground() {
  const items = useSelector((state) => state.cards.items);

  return (
    <div className='playground'>
      {items.map((item, i) => (
        <Card key={i} item={item} />
      ))}
    </div>
  );
}

export default Playground;