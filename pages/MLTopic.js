import React from 'react'
import Header from '@/components/Header'


function MLTopic() {
    const topics = [
        {'Data Preprocessing':[{'Data Preprocessing':'Done'},{"Missing Values":'Revision'},{"Encoding Features":'Revision'},{"train-test-split":'Done'},{"Feature Scaling":'Done'}]},
        // {'Regression':['Linear Regression',"Mulilinear Regression","Polynomial Regression","Support Vector Regression","Decision Tree Regression","Random Forest Regression"]},
        // {'Classifiction':['Linear Regression',"Mulilinear Regression","Polynomial Regression","Support Vector Regression","Decision Tree Regression","Random Forest Regression"]},
        // {'Clustering':['Linear Regression',"Mulilinear Regression","Polynomial Regression","Support Vector Regression","Decision Tree Regression","Random Forest Regression"]},
        // {'Associaltion Rule':['Linear Regression',"Mulilinear Regression","Polynomial Regression","Support Vector Regression","Decision Tree Regression","Random Forest Regression"]},
        // {'Reinforcement Learning':['Linear Regression',"Mulilinear Regression","Polynomial Regression","Support Vector Regression","Decision Tree Regression","Random Forest Regression"]},
        // {'NLP':['Linear Regression',"Mulilinear Regression","Polynomial Regression","Support Vector Regression","Decision Tree Regression","Random Forest Regression"]},
        // {'Deep Learning':['Linear Regression',"Mulilinear Regression","Polynomial Regression","Support Vector Regression","Decision Tree Regression","Random Forest Regression"]},
        // {'Artificial Neural Network':['Linear Regression',"Mulilinear Regression","Polynomial Regression","Support Vector Regression","Decision Tree Regression","Random Forest Regression"]},
        // {'Convolutional Neural Network':['Linear Regression',"Mulilinear Regression","Polynomial Regression","Support Vector Regression","Decision Tree Regression","Random Forest Regression"]},
        // {'Demensionality Reduction':['Linear Regression',"Mulilinear Regression","Polynomial Regression","Support Vector Regression","Decision Tree Regression","Random Forest Regression"]},
        // {'Principal component Analysis':['Linear Regression',"Mulilinear Regression","Polynomial Regression","Support Vector Regression","Decision Tree Regression","Random Forest Regression"]},
        // {'Linear Discriminat Analysis':['Linear Regression',"Mulilinear Regression","Polynomial Regression","Support Vector Regression","Decision Tree Regression","Random Forest Regression"]},
        // {'Kernal PCA':['Linear Regression',"Mulilinear Regression","Polynomial Regression","Support Vector Regression","Decision Tree Regression","Random Forest Regression"]},
        // {'Model Selection & boosting':['Linear Regression',"Mulilinear Regression","Polynomial Regression","Support Vector Regression","Decision Tree Regression","Random Forest Regression"]},
        // {'XGBoost':['Linear Regression',"Mulilinear Regression","Polynomial Regression","Support Vector Regression","Decision Tree Regression","Random Forest Regression"]},
        // {'Logistic Regression':['Linear Regression',"Mulilinear Regression","Polynomial Regression","Support Vector Regression","Decision Tree Regression","Random Forest Regression"]},


    ]
  return (
    <>
        <div className='w-1/2 bg-cyan-800'>
        <h1 className='text-center font-bold text-yellow-300 underline'>MLTopic</h1>

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
        ))}
    </div>
    </>
    
  )
}

export default MLTopic