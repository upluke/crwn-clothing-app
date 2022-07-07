import './categories.styles.scss'

function App() {
  const categories=[
    {id: "1", title:'hats' },
    {id: "2", title:'Jackets'},
    {id: "3", title:'Sneakers'}, 
    {id: "3", title:'Womens'}
  ]
  return (
    <div className="categories-container">
      {categories.map(({id, title})=>(
        <div className='category-container' key={id}>
          <div className='background-image' />
          <div className='category-body-container'>
            <h1>{title}</h1>
            <p>Shop now</p>
          </div>
        </div>
      ))}   
    </div>
  );
}

export default App;
