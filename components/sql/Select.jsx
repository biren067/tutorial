import React from 'react'

function Select() {
  return (
    <div>
      {/* query 1 */}
      <div className='text-cyan-200 text-lg bg-cyan-700 px-2 font-semibold border border-double my-2 italic'>
        Sql query to write one extra column, which is having total price(quantity * price) and make it in Descending order?
        <div className='text-cyan-50 text-md'>
          select name,quantity,price,(quantity * price) as Total
          <br/>from orders
          <br/>order by (quantity * price) Desc
        </div>
        <hr/>
        <div className='text-cyan-50 text-md'>
          select name,quantity,price,(quantity * price) as Total
          <br/>from orders
          <br/>order by total Desc
        </div>
      </div>

    </div>
  )
}

export default Select