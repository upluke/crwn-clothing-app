import './category-item.styles.scss'

const CategoryItem=({category:{id, title, imageUrl}})=>{
    
      
        return(
            <div className='category-container'>
            <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}} />
                <div className='category-body-container'>
                <h1>{title}</h1>
                <p>Shop now</p>
                </div>
            </div>
        )
}

export default CategoryItem