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
        <h5 className='text-center font-semibold text-xl'>Unidades Sanitárias de Moçambique</h5>
        <ul className='flex justify-center gap-4'>
          <li className={`cursor-pointer py-1 px-2 rounded-md ${showMap.summary ? 'bg-slate-500 text-white' : 'bg-transparent'}`} onClick={()=> setShowMap({presence:false, summary:true})} title='Número'>Número total</li>
          <li className={`cursor-pointer py-1 px-2 rounded-md ${showMap.presence ? 'bg-slate-500 text-white' : 'bg-transparent'}`} onClick={()=> setShowMap({presence:true, summary:false})} title='Distribuição'>Distribuição</li>
          <li className='cursor-pointer py-1 px-2'><a href="https://sis-ma.in/?page_id=1085" target="_blank" rel="noopener noreferrer" title='fonte dos dados SIS-MA'>Fonte</a></li>
        </ul>
      </div>
      {showMap.presence && <PresenceMap data={data} usType={usType}></PresenceMap>}
      {showMap.summary && <SummaryMap data={summaryData} usType={usType}></SummaryMap>}
      
      {/* LEGENDS*/}
      {showMap.presence && <div className='absolute top-[320px] right-4 z-50'>
        <MapLegend labels={US_LIST} usType={usType}></MapLegend>
      </div>}
      <div className='absolute top-[90px] right-4 z-50'>
        <button title='Menu' className="w-[46px] h-[46px] p-1 shadow-md rounded-lg bg-white" onClick={()=> {setShowMenu('absolute'); window.scrollTo(0,0)}}>
        <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H14M4 18H9" stroke="#292929" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </button>
      </div>
      <div className={`z-[1000] mt-5 ${showMenu} top-[65px] right-4 h-[230px] w-[260px] p-8 shadow-xl rounded-lg bg-[rgba(255,255,255,1)]`}>
          <button className='block float-right bg-red-400 px-2 text-white text-xl shadow-md rounded-md font-semibold font-mono' onClick={()=>{setShowMenu('hidden')}}>{"x"}</button>
          <h4 className='font-bold text-title-color text-center mb-5 border-b p-1'>Opções</h4>
          <form className='flex flex-col gap-4'>
            <label className="font-normal text-title-color"  htmlFor="ustype">Tipo de Unidade Sanitária</label>
            <select className='text-text-color bg-white p-1.5 border mb-4' name="ustype" id="ustype" onChange={onchange}>
              {US_LIST.map((it, k) => (<option key={k} value={it}>{it.replace("all", "Todas")}</option>))}
            </select>                      
          </form>
        </div>
    </div>
  )
}
