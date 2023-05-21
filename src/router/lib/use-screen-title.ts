import { useLocation } from "react-router-dom"

import titleMap from "./title-map"

export function useScreenTitle() {
    const { pathname } = useLocation()
    if (pathname in titleMap) {
        return titleMap[pathname as keyof typeof titleMap]
    }
    return "Default Title"
}

export default useScreenTitle
