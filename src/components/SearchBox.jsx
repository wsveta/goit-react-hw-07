import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { useId } from "react";
import { changeFilter, selectNameFilter } from "../redux/filtersSlice";

const SearchBox = () => {
  const findInputId = useId();
  const dispatch = useDispatch();
  const name = useSelector(selectNameFilter);
  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.findContactForm}>
      <label className={css.findContactName} htmlFor={findInputId}>
        Find contacts by name
      </label>
      <input
        value={name}
        onChange={handleSearch}
        autoComplete="on"
        id={findInputId}
        className={css.findContactInput}
        type="text"
      />
    </div>
  );
};

export default SearchBox;
