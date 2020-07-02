import React from 'react'
import { NavBar, Wallpaper, AboutUs, FoodMenu, FindUs, ContactUs } from '../Components'
import { ToggleMenuProvider } from '../assets/context/ToggleMenuContex'

export default function HomePage() {
    return (
        <>
            <ToggleMenuProvider>
                <NavBar />
                <Wallpaper />
            </ToggleMenuProvider>
            <AboutUs />
            <FoodMenu />
            <FindUs />
            <ContactUs />
        </>
    )
}
