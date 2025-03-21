import React from "react"
import { TopPage } from "./App"

const Heading:React.FC<TopPage> = ({firstLine,phoneNumber}:TopPage) => {
  return (
      <div>
          <h1 className="{{text-align:center}}">{firstLine}</h1>
          <h2>{phoneNumber}</h2>
    </div>
  )
}

export default Heading