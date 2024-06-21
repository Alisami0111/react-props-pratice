import Studentcards from "./Studentcards"


function App() {
 

  return (
    <>
    <h1>Student Data</h1>
    <Studentcards name="Ali Sami" age={21} address="Pakistan"/>
    <Studentcards name="Muhammad Ali" age={20} address="India"/>
    <Studentcards name="Inder" age={17} address="India"/>
    <Studentcards />
    <Studentcards />
    <Studentcards/>
    <Studentcards />
    <Studentcards />
      
    </>
  )
}

export default App
