import React from 'react';
import classes from './Filter.module.scss';

interface FilterCheckBoxProps {
  id: string;
  checked: boolean;
  onChange: () => void;
  text: string;
}

const FilterCheckBox: React.FC<FilterCheckBoxProps> = ({ id, checked, onChange, text }) => {
  return (
    <label className={classes.option} htmlFor={id}>
      <input id={id} className={classes['check-input']} type="checkbox" checked={checked} onChange={() => onChange()} />
      <span className={classes['check-box']} />
      {text}
    </label>
  );
};

export default FilterCheckBox;

