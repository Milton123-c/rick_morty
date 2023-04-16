import DesignLocation from "./component/DesignLocation";
import { getRandom } from "./util/getRandom";
import { useFetch } from "./hooks/useFecth";
import React, { useEffect, useState } from "react";
import DesignCards from "./component/DesignCards";
import "./style/app.css";
import DesignSearh from "./component/DesignSearh";
import DesignBackground from "./component/DesignBackground";
import Loading from "./component/Loading";

function App() {
  const [index, setIndex] = useState(getRandom());
  const [load, setLoad] = useState(true);

  const url = `https://rickandmortyapi.com/api/location/${index}`;

  const { state, endError } = useFetch(url);

  const datas = state;

  useEffect(()=>{
    
        setLoad(datas ? false : true );
    
  }, [datas]);

  return (
    <section className="App">
      {load ? (
        <>
          {/* Loading */}
          <Loading />
        </>
      ) : (
        <>
          {/* Design background */}

          <DesignBackground />

          {/* Design Locations */}

          <article className="centerLocation">
            <DesignLocation key={datas?.url} datas={datas} />
          </article>

          <DesignSearh setIndex={setIndex} endError={endError} />

          {/* Design cards  */}
          <header className="header">
            {datas?.residents.map((element) => (
              <DesignCards key={element} url={element} />
            ))}
          </header>
        </>
      )}
    </section>
  );
}

export default App;
