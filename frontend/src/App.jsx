import "./App.css";

function App() {
  return (
    <>
      <div>
        <Text sometext="hello" />
        <Text sometext="world" />
      </div>
    </>
  );
}

function Text({sometext}) {
  return (
    <div>
      <p>{sometext}</p>
    </div>
  );
}

export default App;
