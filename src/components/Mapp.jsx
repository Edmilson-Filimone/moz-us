import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js';
import mdata from "../../public/facility.json"

export default function Mapp() {
  const[layer, setLayer] = useState()
  const[busy, setBusy] = useState(true)
  
  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/Edmilson-Filimone/datasets/refs/heads/main/provinces.json")
    .then((res)=> res.json())
    .then((json)=> {setLayer(json); setBusy(false)})
  }, [])

  const prov = new Set(mdata.map((it)=> it.adm1_pt))
  const value = new Set(mdata.map((it)=> it.total_adm1))

    const data = [
        {
            type: "choroplethmap",
            name: "test",
            geojson:layer,
            locations:[...prov],
            z:[0,0,0,0,0,0,0,0,0,0,0],
            text:[...value],
            name:"teste",
            showscale:false,
            colorscale: [
                [0, 'rgb(255,255,255)']
                [1, 'rgb(255,255,255)']                              
              ]
        }
        
        ,

        {
            type: 'scattermap',
            lon: mdata.map((it)=> it.lon),
            lat: mdata.map((it)=> it.lat),
            mode: 'markers',
            marker: { size: 5, color: 'blue' },
            text: ['35',"39"],
            name:"teste2"
          },
        
    ];

    const layout = { map: { style: "dark", center: { lon: 37.5, lat: -18.8 }, zoom: 4.7 }, margin: { t: 0, l:0,r:0, b: 0 }, showscale:false };

    const config = {responsive: true, displayModeBar: false}
    if(busy){
      return (<div className='m-auto text-lg italic'>Loading Map...</div>)
    }
    return (<Plot className='w-full h-[750px] mx-auto' data={data} layout={layout} config={config}/>)
}
