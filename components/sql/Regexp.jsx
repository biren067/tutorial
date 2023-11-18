import React from 'react'

function Regexp() {
  return (
    <div>
      {/* query 1 */}
      <div className='text-cyan-200 text-lg bg-cyan-700 px-2 font-semibold border border-double my-2 italic'>
        Sql query to limit the rows, show first 3 rows
        <div className='text-cyan-50 text-md'>
          select name,quantity,price
          <br/>from orders
          <br/>limit 3
        </div>
        <hr/>
        Sql query to show the second highest price, use offset
        <div className='text-cyan-50 text-md'>
          select name,quantity,price
          <br/>from orders
          <br/>order by price desc
          <br/>limit 1 offset 1
        </div>
      </div>

    </div>
  )
}

export default Regexp