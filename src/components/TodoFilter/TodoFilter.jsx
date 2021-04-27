import './TodoFilter.css';

const Filter = ({ value, onChange }) => (
  <label className="Filter__label">
    Filter by name
    <input type="text" value={value} className="Filter" onChange={onChange} />
  </label>
);

export default Filter;