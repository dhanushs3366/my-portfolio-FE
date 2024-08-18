import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm';
import dayjs from 'dayjs';

export function getChartConfig(type, dataset) {
  const startOfDay = dayjs().startOf('day').format(); // Start of the day (00:00)
  const now = dayjs().format(); // Current time

  // Map the dataset to get labels (time) and data (keys)
  const labels = dataset.map((item) => dayjs(item.created).format());
  const data = dataset.map((item) => item.key);

  return {
    type: type,
    data: {
      labels: labels,
      datasets: [
        {
          label: "Your Dataset",
          data: data,
          fill: false,
          borderColor: "rgba(75,192,192,1)",
          tension: 0.1,
        },
      ],
    },
    options: {
      scales: {
          x: {
              type: 'time',
              time: {
                  unit: 'minute',  // Adjust to 'hour' or 'day' as needed
                  displayFormats: {
                      minute: 'h:mm a', // Adjust format as needed
                  }
              },
              ticks: {
                  maxRotation: 45,
                  minRotation: 0,
                  autoSkip: true,
                  maxTicksLimit: 10,
              },
          },
          y: {
              beginAtZero: true,
          }
      }
  }
  
  };
}
