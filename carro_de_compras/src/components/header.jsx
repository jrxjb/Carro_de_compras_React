import Filters from '../components/Filters.jsx'
export default function Header({setfilters}){
    return(
        <section className='header'>
            <div className='header-div'>React Shop</div>
            <Filters setfilters={setfilters}   />
        </section>
    )
}
