import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";

import {SideButton, SearchIcon, SideDiv, SearchForm, ResultTable} from "./style";


import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {

    const [toggleSearch, setToggleSearch] = useState(false)
    const [search, setSearch] = useState("");
    const [searchPlaceholder, setSearchPlaceholder] = useState("Go get it...");
    const [searchResult, setSearchResult] = useState([]);

    const dispatch = useDispatch();

    let propulsionMarkers = useSelector(state => state.marker.propulsionLocation)
    let userMarkers = useSelector(state => state.marker.userLocation)

    const handleDatSearch = e => {
        e.preventDefault();
        if(search.length <= 0)
        {
            const funnyPlaceholders = [
                "Did not understand ???",
                "What what what ... ?",
                "You need to be more consistent",
                "I still don't understand"
            ]
            setSearchPlaceholder(funnyPlaceholders[Math.floor(Math.random()*4)]);
        } else {
            setSearch(search.toLowerCase())
            const propulsionResults = propulsionMarkers.filter(marker => marker.properties.description.toLowerCase().includes(search) || marker.properties.name.toLowerCase().includes(search) || marker.properties.type.toLowerCase().includes(search));

            const userResults = userMarkers.filter(marker => marker.properties.description.toLowerCase().includes(search) || marker.properties.name.toLowerCase().includes(search) || marker.properties.type.toLowerCase().includes(search));
            
            setSearchResult([...propulsionResults, ...userResults]);
        }
    }

    const handleDaRender = () => {
        if(searchResult.length)
        {
            return (
                <ResultTable>
                    <tbody>
                        {
                            searchResult.map(result => {
                                return (
                                    <tr className="resultCards" key={result.properties.id} onClick={e => {dispatch({
                                        type:"CHECK_MARKER", 
                                        payload: result
                                    })}}>
                                        <th>{result.properties.name}</th>
                                        <td>{result.properties.description}</td>
                                        <td><em>{result.properties.type.toUpperCase()} from {result.properties.source.toUpperCase()}</em></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </ResultTable>
            )
        } else {
            return (
                <ResultTable>
                    <thead><tr><th>NO RESULT</th></tr></thead>
                </ResultTable>
            );
        }
    }
    
    return (
        <>
        <SideButton
            onClick={() => setToggleSearch(!toggleSearch)}
            state={toggleSearch}
        >
            <SearchIcon 
                icon={faSearch} 
            />
        </SideButton>
        {
            toggleSearch ?
                <SideDiv>
                    <SearchForm onSubmit={handleDatSearch} autocomplete="off">
                        <input 
                            type="text"
                            placeholder={searchPlaceholder}
                            value={search}
                            onChange={e => setSearch(e.currentTarget.value)}
                        />
                        <button onClick={handleDatSearch}>Search</button>
                    </SearchForm>

                    {handleDaRender()}

                </SideDiv>  
            :
                null
        }
        
        </>
    )
}

export default Sidebar;