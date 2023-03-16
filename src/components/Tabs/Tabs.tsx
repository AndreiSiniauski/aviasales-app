import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'

import select from '../../store/actions/tabsActions'

import classes from './Tabs.module.scss'

const filtersBtn = [
  {
    name: 'Самый дешевый',
    value: 'cheap',
  },
  {
    name: 'Самый быстрый',
    value: 'fast',
  },
  {
    name: 'Оптимальный',
    value: 'optimal',
  },
]

function Tabs() {
  const { ticketSort } = useSelector((state: RootState) => state.tabsReducer)
  const dispatch = useDispatch()

  const onSelect = (value: string) => dispatch(select(value))

  const btnList = filtersBtn.map((e) => {
    let classValue = classes.btn
    if (ticketSort === e.value) {
      classValue += ` ${classes.active}`
    }

    return (
      <button className={classValue} type="button" key={e.value} onClick={() => onSelect(e.value)}>
        {e.name}
      </button>
    )
  })

  return <div className={classes.tabs}>{btnList}</div>
}

export default Tabs
