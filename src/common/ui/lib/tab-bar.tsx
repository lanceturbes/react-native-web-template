import { HamburgerIcon, HStack, InfoIcon, useColorModeValue } from "native-base"
import React from "react"

import NavIcon from "./nav-icon"

export function TabBar() {
    const bg = useColorModeValue("muted.50", "muted.900")

    return (
        <HStack bg={bg} justifyContent="space-evenly" p="3">
            <NavIcon to="/" icon={<InfoIcon />} />
            <NavIcon to="/settings" icon={<HamburgerIcon />} />
        </HStack>
    )
}

export default TabBar
