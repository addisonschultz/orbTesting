import * as React from "react"
import * as System from "carbon-components-react"
import { ControlType, PropertyControls, addPropertyControls } from "framer"
import { withHOC } from "./withHOC"

const InnerPaginationSkeleton = props => {
    return <System.PaginationSkeleton {...props}></System.PaginationSkeleton>
}

export const PaginationSkeleton = withHOC(InnerPaginationSkeleton)

PaginationSkeleton.defaultProps = {
    width: 150,
    height: 50,
}

addPropertyControls(PaginationSkeleton, {})
