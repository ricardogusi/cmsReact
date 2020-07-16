import React from 'react'
import '../pages/api/jogos'

export default function Home() {
    return (
      <div className="container">
        <Head>
          <title>CMS com React</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main>
          <h1>🕹️ Top Jogos na minha opinião 🕹️ </h1>
          <ol>
            {jogos.map((jogo, index) => {
              const position = index + 1;
  
              return (
                <li key={jogos.index}>
                  <span>{position}</span>
                  <span>
                    {position === 1 && "🥇"}
                    {position === 2 && "🥈"}
                    {position === 3 && "🥉"}
  
                    {jogo.name}
                  </span>
                  <img src={jogo.imagem_capa} alt={`Capa do jogo: ${jogo.name}`} />
                </li>
              );
            })}
          </ol>
        </main>
      </div>
    );
  }
  