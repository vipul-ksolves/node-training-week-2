import { AiOutlineShoppingCart } from "react-icons/ai"
import { NavLink } from "react-router-dom"
import { Container, Button, Navbar as NavbarBs, Nav } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"

const Navbar = () => {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <NavbarBs sticky="top" className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav>
                    <Nav.Link to={"/"} as={NavLink}>Home</Nav.Link>
                    <Nav.Link to={"/store"} as={NavLink}>Store</Nav.Link>
                    <Nav.Link to={"/about"} as={NavLink}>About</Nav.Link>
                </Nav>

                <Button onClick={() => openCart()} style={{ width: "3rem", height: "3rem", position: "relative" }} className="rounded-circle" variant="outline-primary">
                    <AiOutlineShoppingCart />
                    {cartQuantity > 0 && (
                        <div className="bg-danger rounded-circle d-flex justify-content-center align-items-center"
                            style={{
                                color: "white",
                                width: "1.5rem",
                                height: "1.5rem",
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                transform: "translate(25%, 25%)",
                            }}
                        >
                            {cartQuantity}
                        </div>)}
                </Button>
            </Container>
        </NavbarBs>
    )
}
export default Navbar
