import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store';

import { moreTickets } from '../../store/actions/ticketsActions'

import classes from './MoreButton.module.scss'

function MoreButton() {
  const dispatch = useDispatch()
  const { countDispalayTicket } = useSelector((state: RootState) => state.ticketReducer);

  const onTogele = () => dispatch(moreTickets(countDispalayTicket + 5))

  return (
    <button className={classes['more-btn']} type="button" onClick={onTogele}>
      Показать еще 5 билетов!
    </button>
  )
}

export default MoreButton
