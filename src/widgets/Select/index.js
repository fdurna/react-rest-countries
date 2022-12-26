// antd
import { Select } from "antd";
// redux
import { useDispatch } from "react-redux";
import {filterFetchCards} from '../../redux/actions/CardAction'
// styles
import { SelectStyled } from "./index.styles";

const SelectWidget = () => {
  const dispatch = useDispatch();

  const list = [
    {
      value: "all",
      label: "All",
    },
    {
      value: "africa",
      label: "Africa",
    },
    {
      value: "americas",
      label: "Americas",
    },
    {
      value: "asia",
      label: "Asia",
    },
    {
      value: "europe",
      label: "Europe",
    },
    {
      value: "oceania",
      label: "Oceania",
    },
  ];

  const handleChange = (val) => {
    dispatch(filterFetchCards(val))
  };

  return (
    <SelectStyled>
      <Select
        defaultValue="All"
        onChange={handleChange}
        options={list}
        style={{
          width: 100,
          textAlign: "left"
        }}
      />
    </SelectStyled>
  );
};

export default SelectWidget;
