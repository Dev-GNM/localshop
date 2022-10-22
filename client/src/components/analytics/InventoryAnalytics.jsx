import React, { useState, useEffect } from 'react'
import Spinner from '../../common/spinner/Spinner'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import Grid from '@mui/material/Grid'


ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale
)


const InventoryAnalytics = () => {

  const[loading, setLoading] = useState(false)
  const[chart, setChart] = useState([])

  useEffect(() => {
    const fetchInventories = async () => {
      const response = await fetch("http://localhost:3000/inventories")
      const data = await response.json()
      return data;
      // setLoading(true)
      setChart(data)
      console.log(data)
      // .then((response)=>response.json())
      //   .then((data) => {
      //     setLoading(true)
      //     setChart(data.data)
      //     console.log(data)
      //   })
      //   .catch(error => {
      //   console.log(error);
      // })
    }
    fetchInventories()
  },[])

  const data= {
    // labels: chart?.Array?.map(inventory=>inventory.name),
    labels:['Cooking Oil', 'Milk', 'Sugar', 'Bread','Salt', 'Soap'],
    // labels: chart?.data?.map(inventory=>inventory.name),
    datasets: [
      {
        label: `${chart?.data?.length} Items`,
        // data: chart?.data?.map(inventory=>inventory.price),
        data:[30, 27, 45, 39, 50, 76],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162,235,0.2)',
          'rgba(255,206, 86, 0.2)',
          'rgba(75, 192, 255,0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235,1)',
          'rgba(255,206, 86, 1)',
          'rgba(75, 192, 255,1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth:1
      }
    ]
  }
  
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    legend: {
      labels: {
        fontSize:26
      }
    }
  }
  return (
    <Grid item xs={8}>
      {loading ? <Spinner /> :
        <Bar
        data={data}
        options={options}
        height={400}
      />
      }

    </Grid>
  )
}

export default InventoryAnalytics