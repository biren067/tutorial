import React from 'react'
import Athena from '../components/aws/Athena'
import Glue from '../components/aws/Glue'
import Lambda from '../components/aws/Lambda'
import QuickSight from '../components/aws/QuickSight'
import S3 from '../components/aws/S3'
function aws() {
        const topics = [
        {'Amazon Web Services':
          [ {'AWS S3':{'status':'Done','desc':<S3/>}},
            {'AWS Athena':{'status':'Done','desc':<Athena/>}},
            {'AWS Glue':{'status':'Done','desc':<Glue/>}},
            {'AWS Lambda':{'status':'Done','desc':<Lambda/>}},
            {'AWS QuickSight':{'status':'Done','desc':<QuickSight/>}},
    
          ],
        },

       ]
  return (
    <>
          <div className='w-1/2 bg-cyan-800'>
        <h1 className='text-center font-bold text-yellow-300 underline'>AWS</h1>
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