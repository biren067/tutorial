import React from 'react'

function MultipleInheritencConflict() {
  return (
    <div>
    <div className='bg-gray-200'>
        <p className='pl-3'>{`class Parent1:`}</p>
            <p className='pl-6'>{`def common_method(self):`}</p>
                <p className='pl-9'>{`print("Common method in Parent1")`}</p>

        <p className='pl-3'>{`class Parent2:`}</p>
            <p className='pl-6'>{`def common_method(self):`}</p>
                <p className='pl-9'>{`print("Common method in Parent2")`}</p>

        <p className='pl-3'>{`class Derived(Parent1, Parent2):`}</p>
            <p className='pl-6'>{`def call_common_method(self):`}</p>
                <p className='pl-9 bg-gray-800 inline text-white italic'>{`super(Parent2, self).common_method()  #Parent2's common_method`}</p>

       <p className='pl-3'>{` d = Derived()`}</p>
        <p className='pl-3'>{`d.call_common_method()`}</p>

    </div>
    </div>
  )
}

export default MultipleInheritencConflict