// import './App.css';

function App(a) {

  var a = 10;
  let obj = {
    arr:["Aditya", "Advitya", "Abhinav"]
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          obj.arr.map((e) => {
            return (
              <>
              <h1>{e}</h1>
              </>
            );
          })
        }
      </header>

    </div>
  );
}

export default App;
