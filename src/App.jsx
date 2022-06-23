import { useEffect, useState } from "react";

const tipos = {
  artifacts: "Artefactos",
  boss: "Jefes",
  characters:"Personajes",
  consumables: "Consumibles",
  domains:"Dominios",
  elements:"Elementos",
  enemies: "Enemigos",
  materials:"Materiales",
  nations:"Naciones",
  weapons:"Armas",
};

function App() {
  const [genshinState, setGenshinState] = useState({
    types: []
  });

  const fetchGenshinApi = async (item, url = "https://api.genshin.dev/") => {
    const respuesta = await fetch(url);
    const respJSON = await respuesta.json();

    if (item==="types"){
      setGenshinState({
        ...genshinState,
        types:respJSON.types,
      });      
    }else{
      setGenshinState({
        ...genshinState,
        [item]:respJSON,
      });
    }
    console.log(respJSON);
  };

  useEffect(() => {
    fetchGenshinApi("types");
  }, []);

  const handleChangeType = ({ target }) => {
    const url = `https://api.genshin.dev/${target.value}`;
    fetchGenshinApi(target.value, url);
    
  };

  return (
    <div className="App container">
      <h1>Genshin Impact Dex</h1>
      <hr />
      <select name="types" onChange={handleChangeType} >
        <option value=""> Seleccione un elemento</option>
        {genshinState.types.map((type) => ( 
          <option key={type} value={type} >
            {tipos[type]}
            </option>
        ))}
      </select>
      {genshinState.artifacts && (
          <select name="artifacts">
            <option value="">Seleccione un set de artefactos</option>
              {genshinState.artifacts.map((artifact)=>(
                <option key={artifact} value={artifact}>{artifact}</option>
          ))}
        </select>          
        )}
      {genshinState.boss && (
          <select name="boss">
            <option value="">Seleccione un jefe</option>
              {genshinState.boss.map((boss)=>(
                <option key={boss} value={boss}>{boss}</option>
          ))}
        </select>          
        )} 
      {genshinState.characters && (
          <select name="characters">
            <option value="">Seleccione un personaje</option>
              {genshinState.characters.map((characters)=>(
                <option key={characters} value={characters}>{characters}</option>
          ))}
        </select>          
        )}
      {genshinState.consumables && (
          <select name="consumables">
            <option value="">Seleccione un consumible</option>
              {genshinState.consumables.map((consumables)=>(
                <option key={consumables} value={consumables}>{consumables}</option>
          ))}
        </select>          
        )} 
      {genshinState.domains && (
          <select name="domains">
            <option value="">Seleccione un dominio</option>
              {genshinState.domains.map((domains)=>(
                <option key={domains} value={domains}>{domains}</option>
          ))}
        </select>          
        )}
        *****
      {genshinState.elements && (
          <select name="elements">
            <option value="">Seleccione un elemento</option>
              {genshinState.elements.map((elements)=>(
                <option key={elements} value={elements}>{elements}</option>
          ))}
        </select>          
        )}
      {genshinState.enemies && (
          <select name="enemies">
            <option value="">Seleccione un enemigo</option>
              {genshinState.enemies.map((enemies)=>(
                <option key={enemies} value={enemies}>{enemies}</option>
          ))}
        </select>          
        )}
      {genshinState.materials && (
          <select name="materials">
            <option value="">Seleccione un material</option>
              {genshinState.materials.map((materials)=>(
                <option key={materials} value={materials}>{materials}</option>
          ))}
        </select>          
        )}
      {genshinState.nations && (
          <select name="nations">
            <option value="">Seleccione una nación</option>
              {genshinState.nations.map((nations)=>(
                <option key={nations} value={nations}>{nations}</option>
          ))}
        </select>          
        )}
      {genshinState.weapons && (
          <select name="weapons">
            <option value="">Seleccione un arma</option>
              {genshinState.weapons.map((weapons)=>(
                <option key={weapons} value={weapons}>{weapons}</option>
          ))}
        </select>          
        )}                                                               
    </div>
  );
}

export default App;
