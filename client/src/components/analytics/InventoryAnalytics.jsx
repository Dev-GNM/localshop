import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import Grid from '@mui/material/Grid'


ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale
)


const InventoryAnalytics = () => {
  const [chartData, setChartData]  = useState({});
  const fetchInventories = () => {
    let name = [];
    let price = [];

    axios.get("http://localhost:3000/items")
      .then(response => {
        console.log(response);
        for (const resObj of response.data) {
          name.push(resObj.name);
          price.push(parseInt(resObj.price))
        }

        setChartData({
          labels:name,
          datasets: [{
            label: "Inventory Analytics",
            data: price,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderWidth: 1
          }]
        })
    })
  }

  useEffect(() => {
    fetchInventories()
  },[])
  
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
     
        <Bar
        data={chartData}
        options={options}
        height={400}
      />

    </Grid>
  )
}

export default InventoryAnalytics