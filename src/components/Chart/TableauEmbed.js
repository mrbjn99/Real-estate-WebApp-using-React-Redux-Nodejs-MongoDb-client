import React, { useRef, useEffect } from "react";
<style>
    h1 (text-align:center;)
</style>
const { tableau } = window;

function TableauEmbed() {
  const ref = useRef(null);
  const url = "https://public.tableau.com/views/Real-Estate-Project/Dashboard1";

    const options = {
        device: "desktop",
    }

  function initViz() {
    new tableau.Viz(ref.current, url, options);
  }
  
  useEffect(() => {
    initViz();
  }, []);

  return (
    <div>
      <h1>Embedded Analytics with Tableau</h1>
      <p className='detail'>This is the analysis based on the data scraped from another real estate website.</p>
      <div ref={ref}></div>
    </div>
  );
}

export default TableauEmbed;
