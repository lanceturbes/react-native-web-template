import { ArrowBackIcon, IconButton, useColorModeValue } from "native-base"
import React from "react"

import { useGoBack } from "@./router"

export function BackButton() {
    const goBack = useGoBack()
    const colorScheme = useColorModeValue("light", "dark")

    return (
        <IconButton
            size="lg"
            icon={<ArrowBackIcon />}
            colorScheme={colorScheme}
            onPress={goBack}
        />
    )
}

export default BackButton
