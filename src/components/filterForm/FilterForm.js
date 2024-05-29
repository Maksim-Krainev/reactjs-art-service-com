import React from 'react';
import "./style.css";

const FilterForm = ({ filters, onChange }) => {
  return (
    <form className="form-wrapper">
      <p className="label">
        <input
          type="checkbox"
          name="snacks"
          checked={filters.snacks}
          onChange={onChange}
          className="checkbox"
        />
        Аксесуари
      </p>
      <p className="label">
        <input
          type="checkbox"
          name="naps"
          checked={filters.naps}
          onChange={onChange}
          className="checkbox"
        />
        Шнури
        </p>
      <p className="label">
        <input
          type="checkbox"
          name="computers"
          checked={filters.computers}
          onChange={onChange}
          className="checkbox"
        />
        Зарядки
        </p>
    </form>
  );
};

export default FilterForm;
