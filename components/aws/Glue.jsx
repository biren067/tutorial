import React from 'react'

function Glue() {
   return (
    <div>
    <li>ETL purpose is to transfer data from source to DataWare House(ETL).It is an ETL Service</li>
        <li>What is AWS Glue</li>
        <li>A fully managed ETL service that cleaned data and transfer to various Data Source</li>
        <li>When AWS Glue</li>
        <li>To build a data warehouse to organise, cleane, validate and formed data</li>

        <li>Benefits</li>
        <li>Less Hassle, cost Effective and More Power</li>
        <li>Terminology</li>
        <li>Data Catalog, Database,Crawler,Classifier,Connection</li>
        <li>Data Catalog: Persistence Meta Data store in AWS Glue</li>
        <li>Data Catalog: It Contains, Table meta Defination, job/script defination and other Control information</li>
        <li>Data Catalog: Per Region, one data Catalog</li>
        <li>Connection: Contains properties to connect data source</li>
        <li>Classifier: classify the files, json, csv, xml and so on</li>
        <li>Crawler: program that Connect to datasource, progress to classifier, determine the schema,create meta-data Table defination to data Catalog</li>
        <li>Database: </li>
        <li>Datastore: to store data persistence, like S3 </li>
        <li>Data Source:  </li>
        <li>Data Target:  </li>
        <li>Development Endpoint: an Environment where one can test AWS Glue and ETL Script </li>
        <li>Job: a business logic,compose of data source,data target and etl sccript</li>
        <li>Notebook server: To run our pyspark statement.</li>
        <li>Script:code to do ETL</li>
        <li>Table:Schema of Table in Meta Catalog</li>
        <li>Transform:code to do ETL</li>
        <li>Trigger:Initiate a ETL Job, based on scheduled</li>
        <li className='tex-lg'>How AWS Glue works</li>
        <li> First we create S3 Bucket</li>

        
    </div>
  )
}

export default Glue