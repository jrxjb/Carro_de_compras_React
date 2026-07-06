export default function Filters(){
    return(
        <section>
            <div>
                <label htmlFor='price'>Prince</label>
                <input type='range' id='price' min='0' max='1000'/>
            </div>
            <div>
                <label htmlFor='cathegories'>Cathegories</label>
                <select id='cathegories' >
                    <option value='all'>Todas</option>
                    <option value='beauty'>Beauty</option>
                    <option value='fragrances'>Fragrances</option>
                    <option value='furniture'>Furniture</option>
                    <option value='groceries'>Groceries</option>
                </select>
            </div>
        </section>
    )
}

//{'beauty', 'fragrances', 'furniture', 'groceries'}