import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const MoodChart = ({ entries }) => {
  if (!entries || entries.length === 0) {
    return <p>No mood data available to display.</p>;
  }

  // Convert sentiment into numeric values for the y-axis
  const moodScores = {
    Happy: 5,
    Sad: 2,
    Confused: 3,
    Disturbed: 1,
    Motivated: 4,
    // Add more sentiment mappings as needed
  };

  const labels = entries.map((entry) => entry.date); // Extract dates for x-axis
  const sentiments = entries.map((entry) => moodScores[entry.sentiment] || 0); // Map sentiments to numeric scores

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Mood Trend',
        data: sentiments,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `Mood Score: ${tooltipItem.raw} (${entries[tooltipItem.dataIndex]?.sentiment || 'Unknown'})`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Mood Score',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
    },
  };

  return (
    <div style={{ margin: '20px auto', maxWidth: '600px' }}>
      <h2>Weekly Mood Report</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default MoodChart;

