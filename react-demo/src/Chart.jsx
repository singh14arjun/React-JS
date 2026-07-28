import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Chart = () => {

    const data = {
        labels: ['Data 1', 'Data 2', 'Data 3', 'Data 4', 'Data 5', 'Data 6', 'Data 7', 'Data 8', 'Data 9', 'Data 10', 'Data 11', 'Data 12'],
        datasets:
            [{
                label: "My First Dataset",
                data: [
                    66, 88, 90, 35, 39, 64, 78, 56, 43, 21, 10, 5
                ],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
    }


    return (
        <div className='bg-gray-100 p-8 flex flex-col items-center max-w-4xl max-h-screen my-4 mx-auto rounded-lg shadow-sm border border-gray-200'>
            <h1 className='text-3xl font-semibold text-gray-800 mb-6'>Bar Chart Data</h1>
            <Bar data={data} />
        </div>
    )
}

export default Chart