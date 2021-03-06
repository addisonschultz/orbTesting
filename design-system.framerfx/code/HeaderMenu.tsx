import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerHeaderMenu = props => {
    return <System.HeaderMenu {...props}></System.HeaderMenu>
}

export const HeaderMenu = withHOC(InnerHeaderMenu)

HeaderMenu.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(HeaderMenu, {})
