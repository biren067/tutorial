import React from 'react'

function DataStructure() {
  return (
    <div className='bg-gray-400 pl-3'>
        <div>
            <p>List </p>
            <p className='bg-gray-200 inline'>Method:<span className='pl-3'>append,extend,remove,insert,sort,count,index,clear,reverse,pop</span></p>
        </div>
        <div>
            <p>Set </p>
            <p className='bg-gray-200 inline'>Method:<span className='pl-3'>add,remove,union,intesection,difference,clear,update,pop</span></p>
        </div>
        <div>
            <p>Dictionary </p>
            <p className='bg-gray-200 inline'>Method:<span className='pl-3'>items,keys,values,get,[key],popitem(key),update</span></p>
        </div>
        <div>
            <p>Tuple </p>
            <p className='bg-gray-200 inline'>Method:<span className='pl-3'>count,index</span></p>
        </div>
        <div>
            <p>String </p>
            <p className='bg-gray-200 inline'>Method:<span className='pl-3'>lower,upper,strip,lstrip,rstrip,count,find,title,capitalise,startswith,endswith,len,index,replace,join,isalpha,isdigit,
            </span></p>
        </div>
    </div>
  )
}

export default DataStructure