import React from 'react'
import { TrainerType } from './App'

const MainContent: React.FC<TrainerType> = ({ trainer }: TrainerType) => {
    return (
      <div>
            <h3>{trainer.trainerName}</h3>
          <h4>{trainer.tagName}</h4>
            <p>{trainer.fees}</p>
          
    </div>
  )
}

export default MainContent