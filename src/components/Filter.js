function FilterRadio({ filter, selectedFilter, setSelectedFilter }) {
    function changeHandler() {
        setSelectedFilter(filter.label);
    }
    function clickHandler(evt) {
        if (filter.label === selectedFilter) {
            evt.target.checked = false;
            setSelectedFilter("");
        }
    }
    return (
        <div>
            <img src={filter.img} alt={filter.label} />
            <input type="radio" onClick={clickHandler} checked={selectedFilter === filter.label} onChange={changeHandler} name="season-filter" id={filter.label}></input>
            <label htmlFor={filter.label}>{filter.label}</label>
        </div>
    )
}

export default FilterRadio;