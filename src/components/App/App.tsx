import Header from '../Header/Header'
import Tabs from '../Tabs/Tabs'
import TicketsList from '../Tickets-list/TicketsList'
import Filter from '../Filter/Filter'

import classes from './App.module.scss'

function App() {
  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.main}>
        <aside className={classes['sid-bar']}>
          <Filter />
        </aside>
        <div className={classes.content}>
          <Tabs />
          <TicketsList />
        </div>
      </main>
    </div>
  )
}

export default App