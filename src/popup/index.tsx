import React, { FC } from "react"
import { render } from "react-dom"
import "../styles/index.scss"

interface PopupProps {}

export const Popup: FC<PopupProps> = () => {
  return <div className="bg-gray-500 text-3xl">Popup Page!</div>
}

render(<Popup />, document.getElementById("root"))
