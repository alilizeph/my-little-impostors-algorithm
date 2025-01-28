import './player.css';

export function Player({ player, gameStarted }) {
    return (
      <article className="player" style={
          { border: player.role === 'crewmate'
                  ? '5px solid #1a8a32'
                  : player.role === 'impostor'
                      ? '5px solid #b61515'
                      : !gameStarted ? '5px solid black'
                          :'5px solid black' }

      }>
          <h2 style={{
              textDecoration: ["SUSSYBAKA", "DFG", "MisterJDay", "Flangle", "Clemovitch", "Natoo", "JDG", "Gomart", "Mynthos", "BagheraJones", "Ponce", "Alex"].includes(player.name)
                  ? 'underline ' + player.color
                  : null,
              color: ["SUSSYBAKA", "DFG", "MisterJDay", "Flangle", "Clemovitch", "Natoo", "JDG", "Gomart", "Mynthos", "BagheraJones", "Ponce", "Alex"].includes(player.name)
                  ? player.color
                  : null
          }}>
              { player.name }
          </h2>
          <section className="infos">
              {gameStarted ? <h3 className={player.role === 'crewmate' ? 'crewmate' : 'impostor' }> {player.role}</h3> : null }
          </section>
          <section className="stats">
              <p>Actual Impostor's proba. : { player.impostorWeight } %</p>
              <p>Number of crewmated games : { player.nbCrewmate }</p>
              <p>Number of impostors games : { player.nbImpostor }</p>
              <p>Number of crewmate streak : { player.streakCrewmate }</p>
              <p>Number of impostors streak : { player.streakImpostor }</p>
              <p>Ratio crewmates : { (player.ratioCrewmate * 100).toFixed(2) } %</p>
              <p>Ratio impostors : { (player.ratioImpostor * 100).toFixed(2) } %</p>
              <p>Variance : { player.variance }</p>
          </section>
      </article>
    );
}