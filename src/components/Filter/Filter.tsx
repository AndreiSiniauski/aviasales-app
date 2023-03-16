import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAll, selectAllOff, selectNot, selectOne, selectThree, selectTwo } from '../../store/actions/filterActions';
import FilterCheckBox from './FilterCheckBox';
import classes from './Filter.module.scss';

const Filter: React.FC = () => {
  const { transfersNot, transfersOne, transfersTwo, transfersThree } = useSelector((state: any) => state.filterReducer);
  const dispatch = useDispatch();
  const allCheck = transfersNot && transfersOne && transfersTwo && transfersThree;

  const onAllHandler = () => {
    if (!allCheck) {
      dispatch(selectAll());
    } else {
      dispatch(selectAllOff());
    }
  };

  return (
    <div className={classes.container}>
      <p className={classes.text}>Количество пересадок</p>
      <FilterCheckBox id="all" checked={allCheck} onChange={onAllHandler} text="Все" />
      <FilterCheckBox id="transfersNot" checked={transfersNot} onChange={() => dispatch(selectNot())} text="Без пересадок" />
      <FilterCheckBox id="transfersOne" checked={transfersOne} onChange={() => dispatch(selectOne())} text="1 пересадка" />
      <FilterCheckBox id="transfersTwo" checked={transfersTwo} onChange={() => dispatch(selectTwo())} text="2 пересадки" />
      <FilterCheckBox id="transfersThree" checked={transfersThree} onChange={() => dispatch(selectThree())} text="3 пересадки" />
    </div>
  );
};

export default Filter;

