import React from 'react'

function Interview() {
  return (
    <div>
      {/* query 1 */}
      <div className='text-cyan-200 text-lg bg-cyan-700 px-2 font-semibold border border-double my-2 italic'>
        Sql query to show list of female employee having salary between 1500 and 1800 is promoted, show a saperate column?
        <div className='text-cyan-50 text-md'>
          SELECT ename AS NAME, salary, gender, CASE WHEN salary BETWEEN 15000 AND 18000 THEN &apos;PROMOTED&apos; ELSE &apos;&apos; END AS PROMOTION
          <br/>FROM employee
          <br/>WHERE gender = &apos;F&apos;
        </div>
        <hr/>

        how to extract a year from date?
        <div className='text-cyan-50 text-md'>
          select extract(year from date_join)
          <br/>from employee
                  
        </div>
        <hr/>
        
        Find the duplicate in given table
        <div className='text-cyan-50 text-md'>
          SELECT name,count(&apos;*&apos;) as count
          <br/>FROM orders
          <br/>GROUP BY name
          <br/>HAVING count(&apos;*&apos;) &gt; 1
        </div>
        <hr/>
        Find the second highest salary per department wise
        <div className='text-cyan-50 text-md'>
        with sal_rank as 
        <br/><span className='pl-5'>(select *,row_number() over(partition by department order by salary desc) as sal_rnk</span> 
        <br/>select ename,department,sal_rnk
        <br/>from sal_rank
        <br/>where sal_rnk = 2
        <hr className='w-2/3 mx-auto'/>
        select * 
        <br/>from (select *,dense_rank() over(partition by department   order by salary) as rnk from employee) as A
        <br/>where rnk = 2
        </div>
      </div>

    </div>
  )
}

export default Interview