import { useCallback, useEffect } from "react"
import { BackHandler } from "react-native"
import { useLocation } from "react-router-native"

import useGoBack from "./use-go-back"

export function useAndroidBackHandler() {
    const goBack = useGoBack()
    const { key } = useLocation()
    const isFirstScreen = key === "default"

    const handleBackButtonPress = useCallback(() => {
        goBack()
        if (isFirstScreen) {
            return false
        }
        return true
    }, [goBack, isFirstScreen])

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonPress)
        return () => {
            BackHandler.removeEventListener(
                "hardwareBackPress",
                handleBackButtonPress
            )
        }
    }, [handleBackButtonPress])
}

export default useAndroidBackHandler
