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
                    {"Templates":{'status':'Done',
                                    'desc':['django looks for templates directory in each of our installed app',
                                            'base.html creates,created block code',
                                            'extend block to add base.html in template, using {% extends "blog/base.html" %} this template tag is for inheritance',
                                            'load static files, {% load static %}  in base.html file',
                                            'url , href="{% url "blog/about.html" %}" is template tag',
                                            ]
                                }
                    },
                    {"Databases":{'status':'WIP',
                                    'desc':['To see SQL query::: python manage.py sqlmigrate blog 0001',
                                    'To get the list of column:::  <models_name>._meta.get_fields()',
                                    'In 1 line(create & save):::  Post.objects.create(title="My second Post",content="Once it is done, i will do fine tuning",author=u2)',
                                    'author_id== user_id can also be used:::  Post.objects.create(title="My second Post",content="Once it is done, i will do fine tuning",author_id=u2.id)',
                                    "In 2 line::: post1=Post(title='My First post',content='this is my blog for dummy',author=u1) then post1.save()",
                                    'order by in Randdom:::  Post.objects.all().order_by("?")',
                                    '.get() vs .filter(): Get() throws error if not found but not with filter()',
                                    "u1 = User.objects.filter(username='bond01').first() ==> u1.post_set",
                                    "u1.post_set.create(title='My Third post',content='This is my third post to learn .model_set, means from department to employee')"
                                            ]
                                }
                    },
                    
                ]
        },
        {'Django-Tailwind':[{"Setup":{'status':'Pending..',
                                    'desc':['https://django-tailwind.readthedocs.io/en/latest/installation.html',
                                            ,
                                            ]
                                }
                    },
                ]
        },
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
                        <div className='pt-0' key={topicIndex}>
                        <div className='flex justify-between items-center w-full' key={topicIndex}>
                            <div className='border-b-2 rounded-md border-green-300 mb-4'>{Object.keys(topic)[0]}</div>
                            <div className='text-white'>{topic[Object.keys(topic)[0]].status}</div>
                        </div>
                        <div className='text-white pl-4 text-sm '>
                            {topic[Object.keys(topic)[0]].desc.map((item,index)=>(
                                <li key={index}>{item}</li>
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