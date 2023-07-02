import './App.css';
import ExpenceItem from './Componant/ExpenceItem';

function App() {
  const data = [
    {
      id: 1,
      expenceDate: '20 June 2020',
      expenceDetail: 'CAR INSURANCE',
      
      expencePrice: '$222'
    },
    {
      id: 2,
      expenceDate: '2 August 2021',
      expenceDetail: 'TOILET PAPER',
     
      expencePrice: '$20'
    },
    {
      id: 3,
      expenceDate: '17 May 2023',
      expenceDetail: 'MOBILE',
      
      expencePrice: '$130'
    },
    {
      id: 4,
      expenceDate: '20 June 2020',
      expenceDetail: 'BIKE',
      
      expencePrice: '$500'
    }
  ];

  return (
    <div className="App">
      {data.map((item) => (
        <ExpenceItem
          // key={item.id}
          id={item.id}
          expenceDate={item.expenceDate}
          expenceDetail={item.expenceDetail}
          expencePrice={item.expencePrice}
        />
      ))}



    </div>
  );
}

export default App;
