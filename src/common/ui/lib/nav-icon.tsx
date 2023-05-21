import { IconButton, IIconButtonProps } from "native-base"
import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

export interface NavIconProps {
    to: string
    icon: IIconButtonProps["icon"]
}

export function NavIcon({ icon, to }: NavIconProps) {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const isActive = pathname === to
    const colorScheme = isActive ? "primary" : "muted"

    function handleLinkPress() {
        if (pathname === to) {
            return
        }
        navigate(to)
    }

    return (
        <IconButton
            onPress={handleLinkPress}
            icon={icon}
            _icon={iconStyle}
            colorScheme={colorScheme}
        />
    )
}

const iconStyle = { size: "2xl" } as const

export default NavIcon
