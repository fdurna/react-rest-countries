import React, {useEffect, useState} from 'react';
// antd
import { Input } from "antd";
// redux
import { useDispatch } from "react-redux";
import {searchCards} from '../../redux/actions/CardAction'
// style
import { SearchStyled } from "./index.styles";

const { Search } = Input;

const SearchWidget = () => {
  const dispatch = useDispatch();

  const [search,setSearch] = useState('')

  const onSearch = (e) => {
    const value = e.target.value
    setSearch(value)
  };

  useEffect(() => {
    dispatch(searchCards(search))
  },[dispatch, search])

  return (
    <SearchStyled>
      <Search
        placeholder="Search Country"
        onChange={onSearch}
        style={{
          width: 200,
        }}
      />
    </SearchStyled>
  );
};

export default SearchWidget;
