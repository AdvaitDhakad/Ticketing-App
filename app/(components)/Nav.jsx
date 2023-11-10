import { faTicket, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <Nav>
      <div>
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} calcMode="icon" />
        </Link>
      </div>
      <div>
        <p className="text-default-text">advaitdhakad@gmail.com</p>
      </div>
    </Nav>
  );
};
export default Nav;
