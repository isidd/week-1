import { useState } from 'react';

function App() {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [bucketList, setBucketList] = useState<any>([]);

  const addItemHandler = (e: any) => {
    e.preventDefault();
    let addedItem = {
      id: (Math.random() * 1000).toFixed(0),
      itemName: item,
      quantity: quantity,
    };
    let currentItemList = bucketList;
    currentItemList.push(addedItem);
    setBucketList(currentItemList);
    setItem('');
    setQuantity('');
  };

  const removeListItem = (id: any) => {
    let newBucketList = bucketList.filter((item: any) => item.id !== id);
    setBucketList(newBucketList);
  };

  return (
    <div className="App">
      <section className="store">
        <section>
          <h1>Store</h1>
        </section>
        <form onSubmit={addItemHandler}>
          <label htmlFor="item">Item</label>
          <br />
          <input type="text" id="item" name="item" onChange={(e) => setItem(e.target.value)} value={item}></input>{' '}
          <br />
          <label htmlFor="quantity">Quantity</label>
          <br />
          <input
            type="number"
            id="quantity"
            name="quantity"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
          ></input>{' '}
          <br />
          <input className="button" type="submit" value="Add Item"></input>
        </form>
      </section>
      <section>
        <section className="store">
          <h1>Bucket</h1>
        </section>
        {bucketList.map((item: any) => (
          <div onClick={() => removeListItem(item.id)} key={item.id} className="listItem">
            {item.itemName} x {item.quantity}
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
