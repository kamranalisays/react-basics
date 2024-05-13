import {Item} from './Item.js'

// This componet is for conditional Rendering tutorial


export default function PackingList(){
    return(
        <div>
            <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>

        </div>
    )
}