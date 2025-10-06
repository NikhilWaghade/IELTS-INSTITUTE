import React from "react";
import PillNav from "../Animations/PillNav";
import logo from "../assets/nav-logo-white.png";

export const Navbar = () => {
  return (
    <div className="w-full flex justify-center py-4 fixed top-0 left-0 z-50">
      <PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Services", href: "/services" },
          { label: "Contact", href: "/contact" },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
    </div>
  );
};
