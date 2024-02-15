import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  // HiOutlineCalendarDays,
  // HiOutlineCog6Tooth,
  // HiOutlineHome,
  // HiOutlineHomeModern,
  // HiOutlineUsers,
  HiUserGroup,
  HiCurrencyDollar,
} from "react-icons/hi2";
import { RiDashboardFill } from "react-icons/ri";
import { AiFillProfile } from "react-icons/ai";
import { FaUserInjured, FaBed, FaShuttleVan, FaHome } from "react-icons/fa";
import {
  MdAssignment,
  MdGroupWork,
  MdLocalPharmacy,
  MdShoppingBag,
} from "react-icons/md";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <FaHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/doctors">
            <RiDashboardFill />
            <span>Doctor List</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/patients">
            <RiDashboardFill />
            <span>Patient List</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/appointments">
            <MdAssignment />
            <span>Appointments</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <HiUserGroup />
            <span>Doctors</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink>
            <FaUserInjured />
            <span>Patients</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink>
            <FaBed />
            <span>Room Allotment</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink>
            <HiCurrencyDollar />
            <span>Billing</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink>
            <AiFillProfile />
            <span>Records</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink>
            <FaShuttleVan />
            <span>Ambulance</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink>
            <MdLocalPharmacy />
            <span>Pharmacy</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink>
            <MdGroupWork />
            <span>Departments</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink>
            <MdShoppingBag />
            <span>Inventory</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
