
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
let items=["chole","puri","sazi","roti","dal","ghee"]

  return (
  
  <>

    <h1>Healthy Food</h1>
    <ul className="list-group">
      {items.map((item) =>(
         <li key="item" className="list-group-item">{ item}</li>
      ))}
  
  
</ul>
  </>
    
  );
}
export default App;
