 import './App.css';

function App() {
  const data=[
    {id: "1", item:'hat', description:'this is a hat'},
    {id: "2", item:'clothes', description:'this is a clothes'},
    {id: "3", item:'shoes', description:'this is a shoe'}, 
  ]
  return (
    <div className="App">
      {data.map((card)=>(
        <div key={card.id}>
          <h1>{card.item}</h1>
          <p>{card.description}</p>
        </div>
      ))}   
    </div>
  );
}

export default App;
