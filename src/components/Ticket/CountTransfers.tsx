import classes from './Ticket.module.scss';

type CountTransferProps = {
  transfersData: string[];
};

function CountTransfer({ transfersData }: CountTransferProps) {
  const count: { [key: number]: string[] } = {
    0: ['без пересадок'],
    1: ['1 пересадка'],
    2: ['2 пересадки'],
    3: ['3 пересадки'],
  };

  const countTransfers = transfersData.length;

  const sityTransfers = transfersData.join(', ');
  return (
    <div className={classes.container}>
      <span className={classes['secondary-date']}>{count[countTransfers]}</span>
      <span className={classes.date}>{sityTransfers}</span>
    </div>
  );
}

export default CountTransfer;
