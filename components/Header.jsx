import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <>
        <div className='bg-blue-400 text-white flex gap-4'>
            <Link href = "/javaScript"><div>JavaScript</div></Link>
            <Link href = "/reactJS"><div>React Js</div></Link>
            <Link href = "/MLTopic"><div>Machine Learning</div></Link>
            <Link href = "/youtube/"><div>YouTube</div></Link>
            <Link href = "/interviews/interview"><div>Interview</div></Link>
            <Link href = "/kubernates/kubernates"><div>kubernates</div></Link>
            <Link href = "/kafka"><div>Kafka</div></Link>
            <Link href = "/django"><div>Django</div></Link>
            <Link href = "/aws"><div>AWS</div></Link>
        </div>
    </>
  )
}

export default Header