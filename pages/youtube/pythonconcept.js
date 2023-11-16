import React,{useState} from 'react'
import Link from 'next/link'
import {FaRegHandPointRight} from 'react-icons/fa'
import MultipleInheritenceConflict from '@/components/MultipleInheritenceConflict'
import Mixin from '@/components/Mixin'
import Authentication from '@/components/Authentication'

import DataStructure from '@/components/pythonconcept/DataStructure'

function Pythonconcept() {
  const [isMultipleInheritanceConflict,setMultipleInheritanceConflict]=useState(false)
  const [isDataStructure,setDataStructure]=useState(false)
  const [isMixin,setMixin]=useState(false)
  const [isAuthentication,setIsAuthentication] = useState(false)

  
  const showDataStructure = ()=>{
    setDataStructure((prev)=>!prev)
  }
  const showMultipleInheritanceConflict = ()=>{
    setMultipleInheritanceConflict((prev)=>!prev)
  }
  const showMixin = ()=>{
    setMixin((prev)=>!prev)
  }
  const showAuthentication = ()=>{
    setIsAuthentication((prev)=>!prev)
  }
  return (
    <div className='pl-2'> 
    <div className='cursor-pointer flex items-center gap-2' onClick ={showDataStructure}>
    <FaRegHandPointRight/>Data structure in python</div>
        {isDataStructure && <DataStructure/>}

    <div className='cursor-pointer flex items-center gap-2' onClick ={showMultipleInheritanceConflict}>
    <FaRegHandPointRight/>Multiple Inheritence Conflict</div>
        {isMultipleInheritanceConflict && <MultipleInheritenceConflict/>}
    <div>
      <div className='cursor-pointer flex items-center gap-2' onClick ={showMixin}>
      <FaRegHandPointRight/>Mixin</div>
      {isMixin && <Mixin/>}
      </div>
      <div>
    <div className='cursor-pointer flex items-center gap-2' onClick ={showAuthentication}>
    <FaRegHandPointRight/>Authentication</div>
      {isAuthentication && <Authentication/>}
      </div>
    </div>
  )
}

export default Pythonconcept