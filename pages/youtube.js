import React from 'react'
import Link from 'next/link'

function youtube() {
  return (
    <div>
        <div className='flex-col pl-3 mx-auto'>
            <div><Link href="/youtube/django">Django</Link></div>
            <div><Link href="/youtube/python">Python</Link></div>
        </div>
    </div>
  )
}

export default youtube