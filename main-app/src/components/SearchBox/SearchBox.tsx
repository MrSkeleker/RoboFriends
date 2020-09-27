import React from 'react';

interface SearchBoxProps {
    searchValue: string;
    setSearch(value: string): any; 
}

function SearchBox(props: SearchBoxProps) {
    const {setSearch, searchValue} = props;
    return (
        <input
            aria-label = 'search robots'
            className='pa3 ba b--green bg-lightest-blue ma2'
            type='search'
            placeholder='Search for robofriends'
            value={searchValue}
            onChange = {(event)=>setSearch(event.target.value)}
        />
    )
}

export default SearchBox;