import { ArrowBackIcon, IconButton } from "native-base"
import React from "react"

import { useGoBack } from "@./router"

export function BackButton() {
    const goBack = useGoBack()

    return (
        <IconButton
            size="lg"
            icon={<ArrowBackIcon />}
            colorScheme="dark"
            onPress={goBack}
        />
    )
}

export default BackButton
