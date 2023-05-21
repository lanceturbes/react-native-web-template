import { Heading, HStack } from "native-base"
import React from "react"

import { useCanGoBack, useScreenTitle } from "@./router"

import BackButton from "./back-button"

export function AppBar() {
    const canGoBack = useCanGoBack()
    const title = useScreenTitle()

    return (
        <HStack
            py="2"
            px={canGoBack ? "2" : "4"}
            alignItems="center"
            space="2"
            minH="16"
        >
            {canGoBack && <BackButton />}
            <Heading fontSize="xl">{title}</Heading>
        </HStack>
    )
}

export default AppBar
