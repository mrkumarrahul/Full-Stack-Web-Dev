
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// const FoodItems = () => {
//   return (
//     <ul className="list-group">
//       {foodItems.map((item) => (
//          <li key={item} className="list-group-item">
//               { item }
//          </li>
    
//       ))}
//     </ul>
//   );
// };
// export default FoodItems;
function App() {
  let foodItems=["bhature","puri","sazi","roti","dal","ghee"]
  // let foodItems=["dal","panner","Roti","Tadka","Milk","DalTadka","Chaumin"];
  // let foodItems=[];
  return (
    <>
    <h1>Healthy Food</h1>
    
     <ErrorMessage items={foodItems}></ErrorMessage>
    <FoodItems items={foodItems}></FoodItems>
    </>
  )
};
export default App;

