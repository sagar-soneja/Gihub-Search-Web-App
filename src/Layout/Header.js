import React,{useContext,useState} from "react"
import './footer.css'
import {
    Collapse,
    Navbar,
    NavItem,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavbarText
} from "reactstrap"

import { UserContext } from "../Context/UserContext"
import { Link } from "react-router-dom"

const Header = () => {
    const context = useContext(UserContext)
    
    //For toggling
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)    
    
    return(
        <Navbar color="primary" light expand="md">
            <NavbarBrand className="text-white">Github Search App</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <NavbarText className="text-white" ml-auto>{context.user?.email ? context.user?.email : ""}</NavbarText>
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                    {
                        context.user ? (
                            <NavItem navbar>
                                <NavLink tag={Link} onClick={() => (context.setUser(null))} className="text-white">Log Out</NavLink>
                            </NavItem>
                        ) : (
                            <NavItem >
                                <NavItem className="ml-auto"><NavLink tag={Link} to= "/SignUp" className="text-white">Sign Up</NavLink></NavItem>
                                <NavItem className="ml-auto"><NavLink tag={Link} to= "/SignIn" className="text-white">Sign In</NavLink></NavItem>
                            </NavItem>
                        )
                    }                   
                </Nav>
            </Collapse>
        </Navbar>
    )
}
export default Header