import React from 'react';

const Categories = ({ value, onChange }) => {
  return (
    <div className="field">
      <label className="label">Categorías</label>
      <div className="control">
        <div className="select">
          <select value={value} onChange={onChange}>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Men / Women">Men / Women</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Categories;
