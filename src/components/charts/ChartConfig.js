import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm';
import dayjs from 'dayjs';

export function getChartConfig(type, dataset) {
  if (!dataset || dataset.length === 0) {
    return {
      type: type,
      data: {
        labels: [],
        datasets: [
          {
            label: "All keys",
            data: [],
            fill: false,
            borderColor: "rgba(75,192,192,1)",
            tension: 0,
            pointRadius: 3,
            pointHoverRadius: 10,
          },
          {
            label: "left clicks",
            data: [],
            fill: false,
            borderColor: "red",
            tension: 0.1,
            pointRadius: 0,
            pointHoverRadius: 10,
          },
          {
            label: "right clicks",
            data: [],
            fill: false,
            borderColor: "blue",
            tension: 0.1,
            pointRadius: 0,
            pointHoverRadius: 10,
          },
          {
            label: "Middle clicks",
            data: [],
            fill: false,
            borderColor: "green",
            tension: 0.1,
            pointRadius: 0,
            pointHoverRadius: 10,
          },
          {
            label: "extra clicks",
            data: [],
            fill: false,
            borderColor: "orange",
            tension: 0.1,
            pointRadius: 0,
            pointHoverRadius: 10,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'hour',
              displayFormats: {
                minute: 'h A',
              }
            },
            min: dayjs().format(), // Default to now if no data
            max: dayjs().format(), // Default to now if no data
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

  const startLabelAt = dayjs(dataset[0].created_at).format();
  const now = dayjs().format();

  const labels = dataset.map((item) => dayjs(item.created_at).format());

  return {
    type: type,
    data: {
      labels: labels,
      datasets: [
        {
          label: "All keys",
          data: dataset.map((item) => item.all_keys),
          fill: false,
          borderColor: "rgba(75,192,192,1)",
          tension: 0,
          pointRadius: 3,
          pointHoverRadius: 10,
        },
        {
          label: "left clicks",
          data: dataset.map((item) => item.left_clicks),
          fill: false,
          borderColor: "red",
          tension: 0.1,
          pointRadius: 0,
          pointHoverRadius: 10,
        },
        {
          label: "right clicks",
          data: dataset.map((item) => item.right_clicks),
          fill: false,
          borderColor: "blue",
          tension: 0.1,
          pointRadius: 0,
          pointHoverRadius: 10,
        },
        {
          label: "Middle clicks",
          data: dataset.map((item) => item.middle_clicks),
          fill: false,
          borderColor: "green",
          tension: 0.1,
          pointRadius: 0,
          pointHoverRadius: 10,
        },
        {
          label: "extra clicks",
          data: dataset.map((item) => item.extra_clicks),
          fill: false,
          borderColor: "orange",
          tension: 0.1,
          pointRadius: 0,
          pointHoverRadius: 10,
        },
      ],
    },
    options: {
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'hour',
            displayFormats: {
              minute: 'h A',
            }
          },
          min: startLabelAt,
          max: now,
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
