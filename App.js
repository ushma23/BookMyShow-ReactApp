import './App.css';
import Header from './components/Header/Header';
import SliderImages from './components/SliderImages';
import CardsSlider from './components/CardsSlider';
import Premieres from './components/Premieres';
import Footer from './components/Footer';


function App() {
  return (
      <div>
        <Header/>
              <SliderImages/>
              <CardsSlider/>
              <Premieres/>
           
            {/* <Route exact path="/movies">
              <AllMovies />
            </Route>
            <Route exact path="/movies/:movid">
              <SingleMovie/>
            </Route> */}
        
        <Footer/>
      </div>
  );
}

export default App;
