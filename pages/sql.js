import React from 'react'
import Select from '../components/sql/Select'
import Limit from '../components/sql/Limit'
import Like from '../components/sql/Like'
import Regexp from '../components/sql/Regexp'
import Pending from '../components/sql/Pending'
import DDL from '../components/sql/DDL'

import Interview from '../components/sql/Interview'

function aws() {
        const topics = [
        {'SQL Queries':
        
          [ {'Interview':{'status':'Done','desc':<Interview/>}},
            {'Pending':{'status':'Done','desc':<Pending/>}},
            {'Select':{'status':'Done','desc':<Select/>}},
            {'Limit':{'status':'Done','desc':<Limit/>}},
            {'Regexp':{'status':'Done','desc':<Regexp/>}},
            {'Like':{'status':'Done','desc':<Like/>}},
            {'DDL':{'status':'Done','desc':<DDL/>}},
          ],
        },

       ]
  return (
    <>
          <div className='bg-cyan-800'>
        <h1 className='text-center font-bold text-yellow-300 underline'>SQL</h1>
        {topics.map((list_item, index)=>(
            <div className='flex flex-col' key={index}>
                <div className='text-lg text-yellow-500 pb-3'>{Object.keys(list_item)[0]}</div>
                <div className={`topics ml-3 text-lg text-cyan-500 pb-4`}>
                    <div className={'topics_des w-full pr-3'}>{list_item[Object.keys(list_item)[0]].map((topic, topicIndex) => (
                        <div className='pt-0' key={topicIndex}>
                        <div className='flex justify-between items-center w-full' key={topicIndex}>
                            <div className='border-b-2 rounded-md border-green-300 mb-4'>{Object.keys(topic)[0]}</div>
                            <div className='text-white'>{topic[Object.keys(topic)[0]].status}</div>
                        </div>
                        <div className='text-white pl-4 text-sm '>
                        {topic[Object.keys(topic)[0]].desc}
                            {/* {JSON.stringify(topic)} */}
                            {/* {topic[Object.keys(topic)[0]].desc.map((item,index)=>(
                                <li key={index}>{item}</li>
                            ))
                            } */}
                        </div>
                    </div>
                ))}</div>
                </div>
            </div>
        ))}
        {/* <h1 className='text-center font-bold text-yellow-300 underline'>SQL</h1>
        {topics.map((list_item, index)=>(
            <div className='flex flex-col' key={index}>
                <div className='text-lg text-yellow-500 pb-3'>{Object.keys(list_item)[0]}</div>
                <div className={`topics ml-3 text-lg text-cyan-500 pb-4`}>
                    <div className={'topics_des w-full pr-3'}>{list_item[Object.keys(list_item)[0]].map((topic, topicIndex) => (
                    <div className='flex justify-between items-center w-full' key={topicIndex}>
                      <div className='border-b-2 rounded-md border-green-300 mb-4'>{Object.keys(topic)[0]}</div>
                      <div className='text-white'>{topic[Object.keys(topic)[0]]}</div>
                    </div>
                ))}</div>
                </div>
            </div>
        ))} */}
    </div>
    </>
  )
}

export default aws