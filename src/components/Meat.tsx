import React from 'react'
import Card from './Card'


function Meat() {
  return (
    <main  className="">
      <section className="text-gray-200">
        <div className="max-w-6xl mx-auto px-5 py-24 ">
          <div className="text-xl  mb-9 pr-5">
            A <em>soft skill</em> para quem viveu 2020
          </div>
          <div className="text-center mb-20">
            <h1 className="mb-10 
            text-4xl font-thin uppercase  tracking-tight sm:text-5xl
             sm:leading-none lg:text-10xl">
              !! Resiliência !!
            </h1>
            <p className="text-xl font-normal text-center leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Em um ano onde muitos planos foram interrompidos e perdas
              aconteceram. A capacidade de aceitar esses infortúnios, se adaptar e voltar a se mover
              se tornou a habilidade mais importante para as pessoas.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>

          <h2 className="text-2xl sm:text-5xl mb-10">Definições <span className="text-3xl">(... segundo o Google):</span></h2>

          <div className="flex flex-wrap justify-center items-stretch sm:-m-4 -mx-4 -mb-10 -mt-4 ">
            <Card
              title={'Física'}
              emoji={'🧨'}
              content={`propriedade que alguns corpos apresentam de retornar à 
              forma original após terem sido submetidos a uma deformação elástica.`}
            />
            <Card
              title={'Psicologia'}
              emoji={'🧠'}
              content={`
                  A resiliência é a capacidade do indivíduo lidar com problemas, 
                  adaptar-se a mudanças. 
                `}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

// Créditos da imagem https://unsplash.com/photos/pAoo1Rs1Yy8
// Créditos dos cards https://tailwindcomponents.com/component/skills-card
export default Meat
