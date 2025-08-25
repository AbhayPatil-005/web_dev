import Students from "./Components/Students";

function App() {

  return (
    <div className="cards">
      <Students name="SpongeBob" age="20" student={true} />
      <Students name="Patrick" age="34" student={false} />
      <Students name="Squidward" age="40" student={false} />
      <Students name="Sandy" age={27} student={true} />
    </div>
  )
}

export default App
