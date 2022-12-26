import React, { useEffect, useState } from "react";
import * as S from "./index.styles";
// redux
import { useDispatch } from "react-redux";
import { sortCardAsc, sortCardDesc } from "../../redux/actions/CardAction";

const FilterWidget = () => {
  const dispatch = useDispatch();

  const [sort, setSort] = useState("desc");

  const list = [
    {
      value: "asc",
      label: "ASC",
    },
    {
      value: "desc",
      label: "DESC",
    },
  ];

  const handleChange = (val) => {
    setSort(val);
  };

  useEffect(() => {
    if (sort === "desc") {
      dispatch(sortCardDesc());
    }
    if (sort === "asc") {
      dispatch(sortCardAsc());
    }
  }, [dispatch, sort]);

  return (
    <S.SelectStyled
      defaultValue={sort}
      onChange={handleChange}
      options={list}
      style={{
        width: 100,
        textAlign: "left",
      }}
    >
      divvv
    </S.SelectStyled>
  );
};

export default FilterWidget;
