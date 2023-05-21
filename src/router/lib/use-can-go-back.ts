import { useLocation } from "react-router-native"

export function useCanGoBack() {
    const location = useLocation()
    return location.key !== "default"
}

export default useCanGoBack
