import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <>
        <div className='bg-blue-400 text-white flex gap-4'>
            <Link href = "/JavaScriptTopics"><div>React Js</div></Link>
            <Link href = "/MLTopic"><div>Machine Learning</div></Link>
            <Link href = "/youtube/"><div>YouTube</div></Link>
            <Link href = "/interviews/interview"><div>Interview</div></Link>
        </div>
    </>
  )
}

export default Header