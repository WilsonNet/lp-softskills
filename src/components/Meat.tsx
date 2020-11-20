import React from 'react'
import Card from './Card'


function Meat() {
  return (
    <main className="">
      <section className="text-gray-200 bg-gray-900 bg-hero-pattern bg-cover">
        <div className="max-w-6xl mx-auto px-5 py-24 ">
          <div className="text-6xl mb-9">
            A <em>soft skill</em> para quem viveu 2020
          </div>
          <div className="text-center mb-20">
            <h1 className=" title-font  mb-4 text-10xl font-thin uppercase leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
              Resiliência
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Em um ano onde muitos planos foram interrompidos e perdas
              aconteceram. A capacidade de se adaptar
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>

          <div className="flex justify-center sm:-m-4 -mx-4 -mb-10 -mt-4 ">
            <Card
              title={'Física'}
              content={`propriedade que alguns corpos apresentam de retornar à 
              forma original após terem sido submetidos a uma deformação elástica.`}
            />
            <Card
              title={'Psicologia'}
              content={`
                  A resiliência é a capacidade do indivíduo lidar com problemas, 
                  adaptar-se a mudanças 
                `}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

// Créditos da imagem https://unsplash.com/photos/pAoo1Rs1Yy8
export default Meat
