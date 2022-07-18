import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
         <div className="menu">
            <div className="logo">
                <h3>.codes</h3>
            </div>
            <div className="Item-Menu">
              <a href="# " > login</a>
            </div>
         </div>
         <div className='form'>
          <h2>Contact</h2>
            <form>
                <div className='itens-form'>
                  <input placeholder="name" type="text"/>
                  <input placeholder="email"type="text"/>
                  <input placeholder="cellphone number"type="text"/>
                  <input placeholder="text"type="text"/>
                  <input type="submit"/>
                </div>
            </form>
         </div>
      </div>
      </div>
    </div>
  );
}

export default App;
