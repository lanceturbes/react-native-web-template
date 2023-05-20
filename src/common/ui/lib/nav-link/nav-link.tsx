import { ITextProps, Text } from "native-base"
import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

import useNavLinkColor from "./use-nav-link-color"

export interface NavLinkProps extends Omit<ITextProps, "onPress" | "role"> {
    to: string
    children: string
}

export function NavLink({ to, children, ...rest }: NavLinkProps) {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const isActive = pathname === to
    const color = useNavLinkColor(isActive)

    function handlePress() {
        navigate(to)
    }

    return (
        <Text role="link" color={color} onPress={handlePress} {...rest}>
            {children}
        </Text>
    )
}

export default NavLink
