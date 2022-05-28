import logo from './logo.svg';

function App(props) {
  const greet = "hey folks!!"
  return (
    <div className="App">
      <header className="App-Header">
        {/* <img src={logo} className="App-logo" alt="logo"/> */}
        <h1>TODO APP INIT</h1>
        <br/>
        <p>
          {greet}, and {props.subject} wanna start the meeting??
        </p>
      </header>
    </div>
  );
}

export default App;
