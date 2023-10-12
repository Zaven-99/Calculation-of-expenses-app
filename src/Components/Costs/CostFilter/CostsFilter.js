import './CostsFilter.css'


const CostsFilter = (props) => {


    const yearChange = (event) => {
        props.yearChange(event.target.value)
    }

    return (
        <div className='costs-filter'>
            <div className="costs-filter__control">
                <label htmlFor="">Выбор по году</label>
                <select value = {props.year} onChange={yearChange}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>

        </div>
    )
}

export default CostsFilter;