import { useState } from 'react'

import React from 'react'
import PresenceMap from './components/PresenceMap'
import data from "../public/facility.json"
import summaryData from "../public/province_summary.json"
import SummaryMap from './components/SummaryMap'
import MapLegend from './components/MapLegend'
//import { AiOutlineClose } from "react-icons/ai"

export default function App() {

const[mapType, setMapType] = useState(true)

const[showMap, setShowMap] = useState({presence:false, summary:true})
const [showMenu, setShowMenu] = useState('hidden')

//Form states
const[usType, setUsType] = useState("all")

//On change function for the form
const onchange = (e)=>{
      setUsType(e.target.value)
    }

const US_LIST = [
      "all",
      "Centro de Saúde",
      "Posto de Saúde" ,       
      "Hospital Central",  
      "Hospital Distrital",  
      "Hospital Rural" ,      
      "Hospital Provincial" ,
      "Hospital Geral" ,   
      "Hospital Psiquiatrico", 
      "Hospital Militar" ]
  

  return (
    <div className='relative' onMouseEnter={()=> navPosition()}>
      <div className={`z-[1000] h-[70px] w-full  p-2 border bg-slate-200 rounded-bl-3xl rounded-br-3xl shadow-md`}>
        <h5 className='text-center font-semibold text-xl'>Unidades sanitárias de Moçambique</h5>
        <ul className='flex justify-center gap-4'>
          <li className={`cursor-pointer py-1 px-2 rounded-md ${showMap.summary ? 'bg-slate-500 text-white' : 'bg-transparent'}`} onClick={()=> setShowMap({presence:false, summary:true})}> Número total</li>
          <li className={`cursor-pointer py-1 px-2 rounded-md ${showMap.presence ? 'bg-slate-500 text-white' : 'bg-transparent'}`} onClick={()=> setShowMap({presence:true, summary:false})}>Distribuição</li>
          <li className='cursor-pointer py-1 px-2'><a href="https://sis-ma.in/?page_id=1085" target="_blank" rel="noopener noreferrer">Fonte</a></li>
        </ul>
      </div>
      {showMap.presence && <PresenceMap data={data} usType={usType}></PresenceMap>}
      {showMap.summary && <SummaryMap data={summaryData} usType={usType}></SummaryMap>}
      
      {/* LEGENDS*/}
      {showMap.presence && <div className='absolute top-[350px] right-16 z-50'>
        <MapLegend labels={US_LIST} usType={usType}></MapLegend>
      </div>}
      <div className='absolute top-[90px] right-16 z-50'>
        <button className="w-[60px] h-[56px] p-2.5 shadow-md rounded-md bg-white" onClick={()=> setShowMenu('absolute')}>+</button>
      </div>
      <div className={`z-[1000] mt-5 ${showMenu} top-[65px] right-4 h-[220px] w-[200px] p-8 shadow-xl rounded-lg bg-[rgba(255,255,255,1)]`}>
          <button className='block float-right text-lg font-semibold' onClick={()=>{setShowMenu('hidden')}}>{"X"}</button>
          <h4 className='font-bold text-title-color text-center mb-5 border-b p-1'>Options</h4>
          <form className='flex flex-col gap-4'>
            <label className="font-semibold text-title-color"  htmlFor="ustype">Tipo de US</label>
            <select className='text-text-color bg-white p-1.5 border mb-4' name="ustype" id="ustype" onChange={onchange}>
              {US_LIST.map((it, k) => (<option key={k} value={it}>{it.replace("all", "Todas")}</option>))}
            </select>                      
          </form>
        </div>
    </div>
  )
}
