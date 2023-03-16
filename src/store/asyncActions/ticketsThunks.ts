import AviaServices from '../../services/aviasalesServices'
import { setKaySearch, setTicketsList, loadError} from '../actions/ticketsActions'
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type AppDispatch = ThunkDispatch<any, any, AnyAction>;

const aviaServices = new AviaServices()

export const getTicketsID = (): AppDispatch => async (dispatch: any) => {
  aviaServices
    .getKay()
    .then((res) => dispatch(setKaySearch(res.searchId)))
    .catch(() => dispatch(loadError()))
}

export const getTicketsList = (id: number) => (dispatch: any) => {
  aviaServices
    .getTicket(id)
    .then((res) => dispatch(setTicketsList(res)))
    .catch((err) => {
      if (err.message !== 'Error: 500') {
        dispatch(loadError())
      }
    })
}
