import { useState } from 'react'
import './App.css'
import Footer from './footer'
import InputAssilon from './components/input/inputAssilon'

function App() {
  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<number>(0)
  return (
    <div>
      <p>Name</p>
      <InputAssilon value={name} setValue={setName}/>
      <p>{
        name == "Assilon".toLowerCase() ? name : "Vai tomar no cu!"
      }</p>
      <InputAssilon width={8} height={8} value={age} setValue={setAge}/>
      <p>{
        age 
        }</p>
    
      <Footer/>
    </div>
  )
}

export default App
