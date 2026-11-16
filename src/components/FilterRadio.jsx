function FilterRadio({ filter, selectedFilter, setSelectedFilter }) {
    function changeHandler() {
        setSelectedFilter(filter.id);
    }
    function clickHandler(evt) {
        if (filter.id === selectedFilter) {
            evt.target.checked = false;
            setSelectedFilter("");
        }
    }
    return (
        <label htmlFor={filter.label}>
            <img src={filter.img} alt={filter.label} />
            <input type="radio" onClick={clickHandler} checked={selectedFilter === filter.id} onChange={changeHandler} name="season-filter" id={filter.label}></input>
            {filter.label}
        </label>
    )
}

export default FilterRadio;