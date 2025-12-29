import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import headerlogo from "../assets/image/logo.svg";
import downarrow from "../assets/image/downnav-arrow.svg";

const menuLinks = [
  {
    id: 1,
    label: "Product",
    href: "#product",
    hasDropdown: true,
  },
  {
    id: 2,
    label: "Pricing",
    href: "#pricing",
    hasDropdown: false,
  },
  {
    id: 3,
    label: "Resources",
    href: "#resources",
    hasDropdown: true,
  },
  {
    id: 4,
    label: "Company",
    href: "#company",
    hasDropdown: true,
  },
];

const actionLinks = [
  {
    id: 1,
    label: "Get Your Free Account",
    href: "#getaccount",
    className: "btn-primary get-free-account-btn",
    icon: null,
  },
  {
    id: 2,
    label: "Login",
    href: "#login",
    className: "transparent-btn",
    icon: "bi bi-box-arrow-in-right",
  },
];

const Header = () => {
  return (
    <header className="overflow-hidden position-sticky top-0 bg-white" style={{ zIndex: 1020 }}>
      <div className="container">
        <Navbar expand="lg" className="py-3 d-flex align-items-center">
          <Navbar.Brand href="/">
            <img src={headerlogo} alt="LeadCRM Logo" width="208" height="64" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="mx-auto align-items-lg-center gap-lg-4">
              {menuLinks.map((item) => (
                <Nav.Link
                  key={item.id}
                  href={item.href}
                  className="menu-links"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <img src={downarrow} alt="arrow" className="ms-2" />
                  )}
                </Nav.Link>
              ))}
            </Nav>
            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
              {actionLinks.map((item) => (
                <Nav.Link
                  key={item.id}
                  href={item.href}
                  className={item.className}
                >
                  {item.icon && <i className={`${item.icon} me-2`}></i>}
                  {item.label}
                </Nav.Link>
              ))}
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
