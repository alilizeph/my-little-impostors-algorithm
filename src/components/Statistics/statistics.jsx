import "./statistics.css";


export function Statistics({globalImbalance, crewmateRatio, impostorRatio, gameStarted}) {
   return (
       <article>
           <section className="global-stats" style={{opacity: !gameStarted ? 0 : 1}}>
               <h3>📊 Statistics 📊</h3>
               <p>Global Imbalance : {globalImbalance}</p>
               <p>Average ratio crewmates : {(crewmateRatio * 100).toFixed(2)} %</p>
               <p>Average ratio impostors : {(impostorRatio * 100).toFixed(2)} %</p>
           </section>
       </article>
   );
}