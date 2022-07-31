import './form-input.styles.scss'
const FormInput=({label, ...otherProps})=>{
    return(
        <div className='group'>
             <input className="form-input" {...otherProps}/> 
            {label&&(
                <label className={`${otherProps.value.length? 'shrink': ''} form-input-label`}>{label}</label>
            )}
           
        </div>
    )

}

export default FormInput;


// in order to make the titles of the fileds to move up when we start selecting (focus), we place <input> tag above the <label>
// In scss file, line 31, there's a "~" selector which helps find the next sibling or 
// a subsequent sibling attached that shrinkLabel, so it's looking for a general sibling component with 'form-input-label' 
// class after the input.