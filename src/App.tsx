import './App.css'
import Heading from './Heading'
import MainContent from './MainContent'

export interface TopPage{
  firstLine:string,phoneNumber:number
}

export interface Trainer{
  trainerName: string, tagName: string, fees?:number
}

export interface TrainerType{
  trainer:Trainer
}

function App() {
  const trainer:Trainer = {trainerName:'Umesh',tagName:'Mr. Chennai',fees:500000}
  const personalTrainer:TrainerType ={trainer:trainer}
  return (
    <>
      <Heading firstLine={'24/7 Fitness Studio'} phoneNumber={987654321}></Heading>
      <MainContent trainer={trainer}></MainContent>
    </>
  )
}

export default App
