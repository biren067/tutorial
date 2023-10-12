import React from 'react'

function Interview() {
  const topics = [
        {'Django':[ {'Setup Project':{'status':'Done','desc':['Created venv,project and  launched server']}},
                    {"Create app":{'status':'Done',
                                    'desc':['app created:update setting.py and launced app',
                                            'use "from django.http import HttpResponse"',
                                            'path("", views.get_post, name="blog-home") is use for reverse-lookup and avoid naming conflict'
                                            ]
                                }
                    },
                    {"Templates":{'status':'WIP',
                                    'desc':['django looks for templates directory in each of our installed app',
                                            
                                            ]
                                }
                    },
                    
                ]
        },
        {'Django-Tailwind':[{"Setup":{'status':'Pending..',
                                    'desc':['https://django-tailwind.readthedocs.io/en/latest/installation.html',
                                            
                                            ]
                                }
                    },
                ]},
       ]
  return (
    <>
          <div className='w-1/2 bg-cyan-800'>
        <h1 className='text-center font-bold text-yellow-300 underline'>Django Concept</h1>
        {topics.map((list_item, index)=>(
            <div className='flex flex-col' key={index}>
                <div className='text-lg text-yellow-500 pb-3'>{Object.keys(list_item)[0]}</div>
                <div className={`topics ml-3 text-lg text-cyan-500 pb-4`}>
                    <div className={'topics_des w-full pr-3'}>{list_item[Object.keys(list_item)[0]].map((topic, topicIndex) => (
                        <div className='pt-0'>
                        <div className='flex justify-between items-center w-full' key={topicIndex}>
                            <div className='border-b-2 rounded-md border-green-300 mb-4'>{Object.keys(topic)[0]}</div>
                            <div className='text-white'>{topic[Object.keys(topic)[0]].status}</div>
                        </div>
                        <div className='text-white pl-4 text-sm '>
                            {topic[Object.keys(topic)[0]].desc.map((item,index)=>(
                                <div key={index}>{item}</div>
                            ))
                            }
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

export default Interview