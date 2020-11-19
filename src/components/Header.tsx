import React from "react"

interface ListItem {
  text: string
  link?: string
}

function ListItem({ text, link = "!" }: ListItem) {
  return (
    <li className="mx-3">
      <a href={link}>{text}</a>
    </li>
  )
}

function Header() {
  return (
    <header className="flex bg-black px-5 py-2 justify-center">
      <div
        className="max-w-5xl w-full flex
      justify-between border-black border-solid border-2 text-indigo-50"
      >
        <div>🧛‍♀️🧛‍♀️🧛‍♀️🧛‍♀️🧛‍♀️</div>
        <ul className="flex text-lg">
          <ListItem text={"Introdução"} />
          <ListItem text={"Desenvolvimento"} />
          <ListItem text={"Conclusão"} />
        </ul>
      </div>
    </header>
  )
}

export default Header
