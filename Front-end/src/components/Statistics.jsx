import React from 'react'
import styled from 'styled-components'
import Chloropeth from '../section/Chloropeth'
import '../App.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    // Title,
    Tooltip,
    Filler,
    Legend
)

const Graph2 = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Disaster Statistics',
            },
        },
    }

    const labels = [
        2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
    ]

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'No. of deaths',
                data: [
                    2810.28, 4650, 1846.2, 29000, 9922.89, 17000, 10000.0,
                    18530.5, 8257.11, 3543.54, 857.8,
                ],
                borderColor: 'rgb(213, 52, 73)',
                backgroundColor: 'rgba(213, 52, 73, 0.5)',
            },
        ],
    }
    return <Line data={data} options={options} />
}
const Graph3 = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Disaster Statistics',
            },
        },
    }

    const labels = [
        2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
    ]

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'funding received(in Crores)',
                data: [
                    9655, 25763, 20201, 4022, 8733, 2736, 7143, 1989, 2422,
                    1593, 1098,
                ],
                borderColor: 'rgb(91, 192, 190)',
                backgroundColor: 'rgba(91, 192, 190, 0.5)',
            },
        ],
    }
    return <Line data={data} options={options} />
}

const Statistics = (props) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Disaster Statistics',
            },
        },
    }

    const labels = [
        2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
    ]

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'No. of disasters',
                data: [13, 18, 14, 16, 18, 21, 6, 22, 19, 18, 14],
                borderColor: 'rgb(255, 230, 109)',
                backgroundColor: 'rgba(255, 230, 109, 0.5)',
            },
        ],
    }
    return (
        <>
            <Heading>
                <h1>STATISTICS</h1>
            </Heading>
            <Container>
                <Map>
                    <Chloropeth />
                </Map>
                <Stats>
                    <Line data={data} options={options} />
                    <div className='b-padding'></div>
                    <Graph2 />
                    <div className='b-padding'></div>
                    <Graph3 />
                </Stats>
            </Container>
        </>
    )
}

const Container = styled.div`
    height: 100vh;
    /* margin-bottom: 10px; */
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

const Heading = styled.div`
    text-align: center;

    h1 {
        font-size: 2.3rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        /* letter-spacing: 2px; */
    }
`

const Map = styled.div`
    width: 65%;
    height: 85vh;
    padding: 12px 12px;
    z-index: 0;
`

const Stats = styled.div`
    // border: 2px solid black;
    padding-top: 60px;
    width: 30%;
    border-radius: 20px;
    height: fit-content;
`

export default Statistics
