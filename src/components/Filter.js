function FilterRadio({filter, selectedFilter, setSelectedFilter}) {
    function changeHandler(e) {
        if (e.target.checked) {
            setSelectedFilter(filter)
        }
    }
    return (
        <div>
            <input type="radio" checked={selectedFilter === filter} onChange={changeHandler} name="season-filter" id={filter}></input>
            <label htmlFor={filter}>{filter}</label>
        </div>
    )
}

export default FilterRadio;