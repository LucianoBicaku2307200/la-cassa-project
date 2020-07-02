import React, { useContext } from 'react'
import { ToggleMenuContex } from "../../assets/context/ToggleMenuContex"
import ScrollTo from 'react-scroll-into-view';

export default function NavBar() {
    const { toggle } = useContext(ToggleMenuContex);
    const [showMenu, setShowMenu] = toggle;
    return (
        <div id="home">
            <nav className={showMenu ? 'show-navmenu ' : 'close-navmenu'}>
                <ul>
                    <li >
                        <ScrollTo selector={`#home`}>
                            Home
                        </ScrollTo>
                    </li>
                    <li >
                        <ScrollTo selector={`#aboutus`}>
                            About US
                        </ScrollTo>
                    </li>
                    <li >
                        <ScrollTo selector={`#menus`}>
                            Menus
                        </ScrollTo>
                    </li>
                    <li>
                        <ScrollTo selector={`#recommended`}>
                            Recomended
                        </ScrollTo>
                    </li>
                    <li>
                        <ScrollTo selector={`#findus`}>
                            Contuct Us
                        </ScrollTo>
                    </li>
                </ul>
            </nav>
            <button onClick={() => setShowMenu(!showMenu)} className={showMenu ? 'menu-button btn-close-menu' : 'menu-button btn-show-menu'}>
                {showMenu ? <i className="fas fa-angle-right" ></i> : <i className="fas fa-angle-left"></i>}

            </button>
        </div>

    )
}
