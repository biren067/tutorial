import React from 'react'

function Athena() {
  return (
    <div>
        <li>Its main purpose is to allow users to analyze and query data stored in Amazon S3 using SQL (Structured Query Language) without the need for setting up and managing complex infrastructure</li>
        <li>You don&apos;t have to worry to scale up or down. Scaling is done by Athena itself</li>
        <li>It is Interactive query service to analyse data directly.</li>
        <li>It uses S3 for data and fetch it using SQL queries.</li>
        <li>With amazon Athena, we only pay for query the data.</li>
        
        <p className='bg-green-600 text-lg my-3 inline'>When to use Athena?</p>
        <li>Athena helps in query on structure, unstructure and semi-structure data stored in S3</li>
        <li>Athena integrate with amazon Quick-site for data visualization</li>
    </div>
  )
}

export default Athena