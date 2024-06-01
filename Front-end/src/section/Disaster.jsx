import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import '../Disaster.css'
import {
    CCard,
    CCardBody,
    CCardTitle,
    CCardText,
    CButton,
    CCardImage,
} from '@coreui/react'
import { useLocation } from 'react-router-dom'
import httpClientTest from '../helpers/httpClientTest'
import house_stats from '../assets/house_stats.png'
import people_stats from '../assets/people_stats.png'
const data = {
    queryParams: [
        {
            lat: 17.385,
            lon: 78.4867,
            tz: 'Asia/Kolkata',
        },
    ],
    info: [
        {
            t2: 'TEMP at 2 M (Celsius)',
            psfc: 'SFC PRESSURE (Pa)',
            rainc: 'ACCUMULATED TOTAL CUMULUS PRECIPITATION (mm)',
            rainnc: 'ACCUMULATED TOTAL GRID SCALE PRECIPITATION (mm)',
            clflo: 'Low Cloud Fraction (%)',
            clfmi: 'Mid Cloud Fraction (%)',
            clfhi: 'High Cloud Fraction (%)',
            rh2: 'Relative Humidity at 2m (%)',
            ws10: 'Wind Speed at 10 M (m s-1)',
            wd10: 'Wind Direction at 10 M (Degrees)',
            FillValue: '1.0E30',
        },
    ],
    data: [
        {
            time: '25-08-22 0530',
            t2: '22.93',
            psfc: '94407.79',
            rainc: '0.00',
            rainnc: '0.00',
            clflo: '0.50',
            clfmi: '0.29',
            clfhi: '0.53',
            rh2: '87.05',
            ws10: '3.08',
            wd10: '285.50',
        },
        {
            time: '25-08-22 0830',
            t2: '23.86',
            psfc: '93766.19',
            rainc: '0.00',
            rainnc: '0.00',
            clflo: '0.62',
            clfmi: '0.85',
            clfhi: '0.69',
            rh2: '84.33',
            ws10: '3.64',
            wd10: '247.50',
        },
        {
            time: '25-08-22 1130',
            t2: '27.82',
            psfc: '94170.22',
            rainc: '0.00',
            rainnc: '0.00',
            clflo: '0.62',
            clfmi: '0.46',
            clfhi: '0.65',
            rh2: '67.89',
            ws10: '3.35',
            wd10: '273.39',
        },
        {
            time: '25-08-22 1430',
            t2: '30.43',
            psfc: '93830.34',
            rainc: '1.29',
            rainnc: '0.00',
            clflo: '0.40',
            clfmi: '0.76',
            clfhi: '0.37',
            rh2: '55.97',
            ws10: '3.82',
            wd10: '271.02',
        },
        {
            time: '25-08-22 1730',
            t2: '30.83',
            psfc: '93984.21',
            rainc: '1.29',
            rainnc: '0.00',
            clflo: '0.19',
            clfmi: '0.76',
            clfhi: '0.26',
            rh2: '53.82',
            ws10: '2.34',
            wd10: '278.69',
        },
        {
            time: '25-08-22 2030',
            t2: '26.53',
            psfc: '93971.71',
            rainc: '1.72',
            rainnc: '0.00',
            clflo: '0.20',
            clfmi: '0.66',
            clfhi: '0.00',
            rh2: '71.91',
            ws10: '1.53',
            wd10: '301.53',
        },
        {
            time: '25-08-22 2330',
            t2: '25.67',
            psfc: '94224.81',
            rainc: '1.72',
            rainnc: '0.00',
            clflo: '0.15',
            clfmi: '0.45',
            clfhi: '0.00',
            rh2: '73.82',
            ws10: '1.47',
            wd10: '246.30',
        },
        {
            time: '26-08-22 0230',
            t2: '23.90',
            psfc: '94115.84',
            rainc: '2.17',
            rainnc: '0.00',
            clflo: '0.31',
            clfmi: '0.78',
            clfhi: '0.00',
            rh2: '83.00',
            ws10: '3.19',
            wd10: '242.27',
        },
        {
            time: '26-08-22 0530',
            t2: '22.59',
            psfc: '94265.73',
            rainc: '2.17',
            rainnc: '0.00',
            clflo: '0.66',
            clfmi: '0.68',
            clfhi: '0.03',
            rh2: '93.37',
            ws10: '3.74',
            wd10: '280.31',
        },
        {
            time: '26-08-22 0830',
            t2: '26.29',
            psfc: '94155.59',
            rainc: '2.17',
            rainnc: '0.00',
            clflo: '0.60',
            clfmi: '0.61',
            clfhi: '0.00',
            rh2: '82.11',
            ws10: '3.98',
            wd10: '316.50',
        },
        {
            time: '26-08-22 1130',
            t2: '30.80',
            psfc: '94065.59',
            rainc: '2.17',
            rainnc: '0.00',
            clflo: '0.69',
            clfmi: '0.96',
            clfhi: '0.00',
            rh2: '60.97',
            ws10: '2.94',
            wd10: '321.80',
        },
        {
            time: '26-08-22 1430',
            t2: '32.21',
            psfc: '93967.40',
            rainc: '3.66',
            rainnc: '0.00',
            clflo: '0.37',
            clfmi: '0.75',
            clfhi: '0.00',
            rh2: '55.99',
            ws10: '1.42',
            wd10: '320.10',
        },
        {
            time: '26-08-22 1730',
            t2: '29.60',
            psfc: '93956.69',
            rainc: '15.62',
            rainnc: '0.00',
            clflo: '0.76',
            clfmi: '1.00',
            clfhi: '0.00',
            rh2: '70.24',
            ws10: '3.29',
            wd10: '298.90',
        },
        {
            time: '26-08-22 2030',
            t2: '26.85',
            psfc: '94061.12',
            rainc: '21.69',
            rainnc: '0.00',
            clflo: '0.31',
            clfmi: '0.81',
            clfhi: '0.13',
            rh2: '87.95',
            ws10: '1.78',
            wd10: '297.55',
        },
        {
            time: '26-08-22 2330',
            t2: '25.76',
            psfc: '94052.30',
            rainc: '21.69',
            rainnc: '0.00',
            clflo: '0.39',
            clfmi: '0.93',
            clfhi: '0.00',
            rh2: '89.53',
            ws10: '2.42',
            wd10: '309.47',
        },
        {
            time: '27-08-22 0230',
            t2: '25.09',
            psfc: '94100.89',
            rainc: '21.69',
            rainnc: '0.00',
            clflo: '0.22',
            clfmi: '0.63',
            clfhi: '0.00',
            rh2: '86.36',
            ws10: '3.02',
            wd10: '342.68',
        },
        {
            time: '27-08-22 0530',
            t2: '23.49',
            psfc: '94214.79',
            rainc: '24.68',
            rainnc: '0.00',
            clflo: '0.70',
            clfmi: '0.47',
            clfhi: '0.24',
            rh2: '94.62',
            ws10: '3.02',
            wd10: '292.39',
        },
        {
            time: '27-08-22 0830',
            t2: '25.56',
            psfc: '94287.45',
            rainc: '24.68',
            rainnc: '0.00',
            clflo: '0.86',
            clfmi: '0.00',
            clfhi: '0.13',
            rh2: '84.80',
            ws10: '4.90',
            wd10: '321.27',
        },
        {
            time: '27-08-22 1130',
            t2: '29.64',
            psfc: '94144.30',
            rainc: '24.68',
            rainnc: '0.00',
            clflo: '0.75',
            clfmi: '0.15',
            clfhi: '0.23',
            rh2: '65.35',
            ws10: '5.23',
            wd10: '319.80',
        },
        {
            time: '27-08-22 1430',
            t2: '30.07',
            psfc: '94014.30',
            rainc: '25.18',
            rainnc: '0.00',
            clflo: '0.49',
            clfmi: '1.00',
            clfhi: '0.18',
            rh2: '62.29',
            ws10: '7.32',
            wd10: '270.02',
        },
        {
            time: '27-08-22 1730',
            t2: '29.39',
            psfc: '94002.10',
            rainc: '26.08',
            rainnc: '0.00',
            clflo: '0.44',
            clfmi: '0.87',
            clfhi: '0.18',
            rh2: '65.51',
            ws10: '5.25',
            wd10: '278.91',
        },
        {
            time: '27-08-22 2030',
            t2: '26.52',
            psfc: '94092.17',
            rainc: '26.08',
            rainnc: '0.00',
            clflo: '0.20',
            clfmi: '0.58',
            clfhi: '0.38',
            rh2: '77.61',
            ws10: '2.51',
            wd10: '291.04',
        },
        {
            time: '27-08-22 2330',
            t2: '24.82',
            psfc: '94086.05',
            rainc: '26.08',
            rainnc: '0.00',
            clflo: '0.14',
            clfmi: '0.53',
            clfhi: '0.30',
            rh2: '82.77',
            ws10: '3.13',
            wd10: '254.02',
        },
        {
            time: '28-08-22 0230',
            t2: '23.56',
            psfc: '94155.88',
            rainc: '26.08',
            rainnc: '0.00',
            clflo: '0.35',
            clfmi: '0.92',
            clfhi: '0.51',
            rh2: '86.79',
            ws10: '3.01',
            wd10: '254.38',
        },
        {
            time: '28-08-22 0530',
            t2: '23.98',
            psfc: '94252.56',
            rainc: '26.08',
            rainnc: '0.00',
            clflo: '0.72',
            clfmi: '0.86',
            clfhi: '0.73',
            rh2: '83.12',
            ws10: '3.85',
            wd10: '308.29',
        },
    ],
}

const Disaster = () => {
    const [disasterList, setDisasterList] = useState()

    const location = useLocation()
    console.log(location.state)
    return (
        <Container>
            {/* state is dynamic here */}
            <h2 className='heading_disaster'>Gujurat Disasters(12 July 2022)</h2>
            <StatisticalData>
                <div className='lives'>
                    <img
                        src={people_stats}
                        className='statss'
                        draggable={false}
                    />
                </div>
                <div className='houses'>
                    <img
                        src={house_stats}
                        className='statss'
                        draggable={false}
                    />
                </div>
            </StatisticalData>

            <h2 className='heading_disaster'>
                Situation Reports and Source Documents
            </h2>
            <Data>
                <div className='info'>
                    <div className='date'>
                        <a href='https://ndmindia.mha.gov.in/NDMINDIA-CMS/viewWhatsNewPdf-D888'>DMC 2022/08/10</a>
                    </div>
                    <div className='disaster'>
                        Situation report regarding Flood/ Heavy rainfall as on
                        10 2022 at 1800 Hrs
                    </div>
                </div>
                <hr />
            </Data>
            <Data>
                <div className='info'>
                    <div className='date'>
                        <a href='https://ndmindia.mha.gov.in/NDMINDIA-CMS/viewsituationDisasterReportPdfDocument-849'>DMC 2022/07/05</a>
                    </div>
                    <div className='disaster'>
                    Situation report regarding Flood/ Heavy rainfall as on 5 July 2022 at 1800 Hrs
                    </div>
                </div>
                <hr />
            </Data>
            <Data>
                <div className='info'>
                    <div className='date'>
                        <a href='https://ndmindia.mha.gov.in/NDMINDIA-CMS/viewsituationDisasterReportPdfDocument-843'>DMC 2022/06/29</a>
                    </div>
                    <div className='disaster'>
                    Situation report regarding Flood/ Heavy rainfall as on 29 June 2022 at 1800 Hrs
                    </div>
                </div>
                <hr />
            </Data>
            <Data>
                <div className='info'>
                    <div className='date'>
                        <a href='https://ndmindia.mha.gov.in/NDMINDIA-CMS/viewsituationDisasterReportPdfDocument-840'>DMC 2022/06/26</a>
                    </div>
                    <div className='disaster'>
                    Situation report regarding Flood/ Heavy rainfall as on 26 June 2022 at 1800 Hrs
                    </div>
                </div>
                <hr />
            </Data>
            <Data>
                <div className='info'>
                    <div className='date'>
                        <a href='https://ndmindia.mha.gov.in/NDMINDIA-CMS/viewsituationDisasterReportPdfDocument-836'>DMC 2022/06/22</a>
                    </div>
                    <div className='disaster'>
                    Situation report regarding Flood/ Heavy rainfall as on 22 June 2022 at 1800 Hrs
                    </div>
                </div>
                <hr />
            </Data>

            <h2 className='heading_disaster my'>
                Situation Reports & Source Documents
            </h2>
            <DisData>
                <CCard style={{ width: '21rem', border: '0px transparent' }}>
                    <CCardImage orientation='top' src='./images/react.jpg' />
                    <CCardBody>
                        <CCardTitle style={{ fontWeight: 'bold' }}>
                            2022-07-19
                        </CCardTitle>
                        <CCardText
                            style={{
                                padding: '10px 0px',
                                fontFamily: '"Poppins", sans-serif',
                                fontWeight: '300',
                            }}
                        >
                            DETECTED FLOOD WATER IN ANDHRA PRADESH STATE,INDIA.
                            As observed by ALOS-2 image on 17 July 2022
                        </CCardText>
                        <CButton style={{ marginTop: '10px' }} href='#'>
                            Download
                        </CButton>
                    </CCardBody>
                </CCard>
                <CCard style={{ width: '21rem', border: '0px transparent' }}>
                    <CCardImage orientation='top' src='./images/react-2.jpg' />
                    <CCardBody>
                        <CCardTitle style={{ fontWeight: 'bold' }}>
                            2022-07-19
                        </CCardTitle>
                        <CCardText
                            style={{
                                padding: '10px 0px',
                                fontFamily: '"Poppins", sans-serif',
                                fontWeight: '300',
                            }}
                        >
                            DETECTED FLOOD WATER IN ANDHRA PRADESH STATE,INDIA.
                            As observed by ALOS-2 image on 17 July 2022
                        </CCardText>
                        <CButton style={{ marginTop: '10px' }} href='#'>
                            Download
                        </CButton>
                    </CCardBody>
                </CCard>
                <CCard style={{ width: '21rem', border: '0px transparent' }}>
                    <CCardImage orientation='top' src='./images/react_3.jpg' />
                    <CCardBody>
                        <CCardTitle style={{ fontWeight: 'bold' }}>
                            2022-07-25
                        </CCardTitle>
                        <CCardText
                            style={{
                                padding: '10px 0px',
                                fontFamily: '"Poppins", sans-serif',
                                fontWeight: '300',
                            }}
                        >
                            Flood Map Anand,Gujrat-India As Observed by Sentinel 1 on 22 July,2022
                        </CCardText>
                        <CButton style={{ marginTop: '10px' }} href='#'>
                            Download
                        </CButton>
                    </CCardBody>
                </CCard>
                <CCard style={{ width: '21rem', border: '0px transparent' }}>
                    <CCardImage orientation='top' src='./images/react_4.jpg' />
                    <CCardBody>
                        <CCardTitle style={{ fontWeight: 'bold' }}>
                            2022-07-25
                        </CCardTitle>
                        <CCardText
                            style={{
                                padding: '10px 0px',
                                fontFamily: '"Poppins", sans-serif',
                                fontWeight: '300',
                            }}
                        >
                            Flood Map Dholera,Gujrat-India As Observed by Sentinel 1 on 22 July,2022
                        </CCardText>
                        <CButton style={{ marginTop: '10px' }} href='#'>
                            Download
                        </CButton>
                    </CCardBody>
                </CCard>
                <CCard style={{ width: '21rem', border: '0px transparent' }}>
                    <CCardImage orientation='top' src='./images/react_5.jpg' />
                    <CCardBody>
                        <CCardTitle style={{ fontWeight: 'bold' }}>
                            2022-07-25
                        </CCardTitle>
                        <CCardText
                            style={{
                                padding: '10px 0px',
                                fontFamily: '"Poppins", sans-serif',
                                fontWeight: '300',
                            }}
                        >
                            Flood Map Dholka,Gujrat-India As Observed by Sentinel 1 on 22 July,2022
                        </CCardText>
                        <CButton style={{ marginTop: '10px' }} href='#'>
                            Download
                        </CButton>
                    </CCardBody>
                </CCard>
                <CCard style={{ width: '21rem', border: '0px transparent' }}>
                    <CCardImage orientation='top' src='./images/react_6.jpg' />
                    <CCardBody>
                        <CCardTitle style={{ fontWeight: 'bold' }}>
                            2022-07-25
                        </CCardTitle>
                        <CCardText
                            style={{
                                padding: '10px 0px',
                                fontFamily: '"Poppins", sans-serif',
                                fontWeight: '300',
                            }}
                        >
                            Flood Map Ghorasu,Gujrat-India As Observed by Sentinel 1 on 22 July,2022
                        </CCardText>
                        <CButton style={{ marginTop: '10px' }} href='#'>
                            Download
                        </CButton>
                    </CCardBody>
                </CCard>
            </DisData>
        </Container>
    )
}

const Container = styled.div`
    margin-top: 110px;
    padding: 20px 10px;
`

const StatisticalData = styled.div`
    height: 45vh;
    margin: 20px 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 10px;
    gap: 30px;

    .lives,
    .houses {
        padding: 20px 20px;
        height: inherit;
        width: 50%;
    }
`

const GeographicalData = styled.div`
    .temp {
        border: 1px solid black;
        height: 50vh;
        margin: 20px 100px;
        border-radius: 20px;
    }

    .club {
        height: 45vh;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px 100px;
        padding: 10px 10px;
        gap: 30px;
    }

    .rain,
    .humid {
        border: 1px solid red;
        padding: 10px 10px;
        height: inherit;
        width: 50%;
        border-radius: 20px;
    }
`

const Data = styled.div`
    margin-bottom: 10px;

    .info {
        margin: 20px 100px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 20px;
        padding: 10px 20px;
        font-family: 'Noto Sans', sans-serif;
    }

    .date,
    .disaster {
        font-size: 1.1rem;
        font-weight: 600;
    }

    .date a {
        color: blue;
        text-decoration: underline;
    }

    hr {
        margin: 0px 120px;
    }
`

const DisData = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 10px;
    flex-wrap: wrap;
`

export default Disaster
