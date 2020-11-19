import React from "react"

function header() {
  return (
    <header
      className="flex bg-black px-5 py-2 justify-center
    "
    >
      <div className="max-w-5xl w-full flex
      justify-between border-black border-solid border-2 text-indigo-50">
        <div>🧛‍♀️🧛‍♀️🧛‍♀️🧛‍♀️🧛‍♀️</div>
        <ul className="flex text-lg">
          <li>
            <a href="">Introdução</a>
          </li>
          <li>
            <a href=""> Desenvolvimento</a>
          </li>
          <li>
            <a href="">Conclusão</a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default header
