import React, { FC } from "react"
import { render } from "react-dom"
import "../styles/index.scss"

interface PopupProps {}

export const Popup: FC<PopupProps> = () => {
  return <div>Options</div>
}

render(<Popup />, document.getElementById("root"))
