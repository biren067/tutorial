import React from 'react'

function Like() {
  return (
    <div>
      {/* query 1 */}
      <div className='text-cyan-200 text-lg bg-cyan-700 px-2 font-semibold border border-double my-2 italic'>
        Sql query to show list of name starts with 'R'
        <div className='text-cyan-50 text-md'>
          select name,quantity,price
          <br/>from orders
          <br/>where name like 'R%'
        </div>
        <hr/>
        Sql query to show product name having 4 characer only
        <div className='text-cyan-50 text-md'>
          select name,quantity,price
          <br/>from orders
          <br/>where name like '_ _ _ _ '
          
        </div>
        <hr/>
        Sql query to show product name having 5 characer only starts and ends with 'r'
        <div className='text-cyan-50 text-md'>
          select name,quantity,price
          <br/>from orders
          <br/>where name like 'r _ _ _ r'
          
        </div>
      </div>

    </div>
  )
}

export default Like