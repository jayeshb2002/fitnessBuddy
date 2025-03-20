import React, { useState } from 'react'
import { TrainerType } from './App'

const MainContent: React.FC<TrainerType> = ({ trainer }: TrainerType) => {
    const [count,setCount] = useState<number>(1)
    return (
      <div>
            <h3>{trainer.trainerName} number <span>{ count }</span></h3>
          <h4>{trainer.tagName}</h4>
          <p>{ trainer.fees}</p>
          
    </div>
  )
}

export default MainContent