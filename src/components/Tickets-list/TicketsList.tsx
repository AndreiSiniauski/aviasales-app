import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Spin, Progress } from 'antd'
import { AppDispatch } from '../../store/asyncActions/ticketsThunks'
import MoreButton from '../More-button/MoreButton'

import Ticket from '../Ticket/Ticket'
import { getTicketsID, getTicketsList } from '../../store/asyncActions/ticketsThunks'
import generateKay from '../../handlers/generateKey'

function TicketsList() {
  const dispatch: AppDispatch = useDispatch()
  const { searchId, ticketsList, loading, error, loadingAll, countDispalayTicket, progressLoading } = useSelector(
    (state: any) => state.ticketReducer
  )

  const { ticketSort } = useSelector((state: any) => state.tabsReducer)

  const { transfersNot, transfersOne, transfersTwo, transfersThree } = useSelector((state: any) => state.filterReducer)

  useEffect(() => {
    dispatch(getTicketsID())
  }, [dispatch])

  useEffect(() => {
    let delayLoad: string | number | NodeJS.Timeout | undefined
    if (searchId && !loadingAll) {
      delayLoad = setInterval(() => dispatch(getTicketsList(searchId)), 1000)
    }
    return () => clearInterval(delayLoad)
  }, [searchId, dispatch, loadingAll])

  const tabsSort = (mass: any[], sort: string) => {
    if (sort === 'cheap') {
      return mass.slice().sort((prev, next) => prev.price - next.price)
    }
    if (sort === 'fast') {
      return mass
        .slice()
        .sort(
          (prev, next) =>
            prev.segments[0].duration +
            prev.segments[1].duration -
            (next.segments[0].duration + next.segments[1].duration)
        )
    }
    return mass
  }

  const filterTickets = (ticketArr: any[]) => {
    const not = transfersNot ? 0 : null
    const one = transfersOne ? 1 : null
    const two = transfersTwo ? 2 : null
    const three = transfersThree ? 3 : null
    const arrFilter = [not, one, two, three]

    const result = ticketArr.filter((el) => {
      const suitableTicket = arrFilter.some((els) => els === el.segments[0].stops.length + el.segments[1].stops.length)
      return suitableTicket
    })
    return result
  }

  const ticketRender = (arr: any[]) => {
    if (arr.length < 1) {
      return <h4>Рейсов, подходящих под заданные фильтры, не найдено</h4>
    }
    return arr
      .slice(0, countDispalayTicket)
      .map((el) => (
        <Ticket
          key={generateKay()}
          price={el.price}
          there={el.segments[0]}
          back={el.segments[1]}
          carrier={el.carrier}
        />
      ))
  }
  const arrTicketSort = tabsSort(ticketsList, ticketSort)
  const arrTicketFilter = filterTickets(arrTicketSort)
  const arrTicketRend = ticketRender(arrTicketFilter)

  const hasDate = !(loading || error)
  const errorDate = error ? <h3>Возникла ошибка</h3> : null
  const loadDate = loading ? <Spin /> : null
  const content = hasDate ? arrTicketRend : null
  const loadingProgress = loadingAll ? null : <Progress percent={progressLoading} showInfo={false} />
  const moreButton = arrTicketFilter.length > 1 ? <MoreButton /> : null;

  return (
    <>
      {errorDate}
      {loadDate}
      {loadingProgress}
      <div>{content}</div>
      {moreButton}
    </>
  )
}

export default TicketsList
