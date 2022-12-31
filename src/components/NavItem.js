import React from 'react'

const NavItem = ({Icon,title,active}) => {
  return (
    <div
      className={`nav-item flex gap-4 items-center mb-2 p-3 px-4  rounded-xl  ${
        active && "bg-mainIconColor"
      }`}
    >
      <Icon className="h-8 w-8 text-darkPrimaryBg" />
      <h3 className="capitalize text-darkPrimaryBg font-medium ">{title}</h3>
    </div>
  );
}

export default NavItem