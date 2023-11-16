import React from 'react'

function Authentication() {
  return (
    <div  className='bg-gray-200'>
      <p className='pl-3'>{`INSTALLED_APPS=[...`}</p>
      <p className='pl-6'> {`rest_framework,`}</p>
      <p className='pl-6'>{`rest_framework.authtoken,]`}</p>
    </div>
  )
}

export default Authentication