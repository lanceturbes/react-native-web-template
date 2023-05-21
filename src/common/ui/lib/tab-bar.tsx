import {
    HamburgerIcon,
    HStack,
    IconButton,
    InfoIcon,
    useColorModeValue
} from "native-base"
import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

export function TabBar() {
    const bg = useColorModeValue("muted.50", "muted.900")
    const navigate = useNavigate()
    const { pathname } = useLocation()

    function handleLinkPress(to: string) {
        if (pathname === to) {
            return
        }
        navigate(to)
    }

    return (
        <HStack bg={bg} justifyContent="space-evenly" p="3">
            <IconButton
                onPress={() => handleLinkPress("/")}
                icon={<InfoIcon />}
                colorScheme="muted"
                _icon={iconStyle}
            />
            <IconButton
                onPress={() => handleLinkPress("/about")}
                icon={<InfoIcon />}
                _icon={iconStyle}
                colorScheme="muted"
            />
            <IconButton
                onPress={() => handleLinkPress("/settings")}
                icon={<HamburgerIcon />}
                _icon={iconStyle}
                colorScheme="muted"
            />
        </HStack>
    )
}

const iconStyle = { size: "2xl" }

export default TabBar
