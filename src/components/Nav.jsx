import React from 'react'
//import data
import { nav } from "../data";

const Nav = () => {
  return (
    <nav>
       <ul className="h-full flex justify-center items-center gap-x-10">
        {nav.map((item, index) => {
          const { name, href } = item;
          return (
            <li key={index}>
              <a className="hover:text-accent transition" href={href}>{name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default Nav