import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import httpClient from '../helpers/httpClient'
import image7 from '../assets/image 7.png'
import image8 from '../assets/image 8.png'
import image9 from '../assets/image 9.png'

import axios from 'axios'

const State = (props) => {
    const [disasterList, setDisasterList] = useState([])
    const getPodList = async () => {
        await httpClient({
            url: '/disasters',
            method: 'get',
        })
            .then((response) => {
                var templist = response.data
                console.log(templist[0].Period)
                setDisasterList(templist)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        getPodList()
    }, [])

    const navigate = useNavigate()
    return (
        <>
            <div className='topmargin'></div>
            <GeographicalData>
                <div className='temp'>
                    <img
                        src={image7}
                        alt=''
                        className='statsp'
                        draggable={false}
                    />
                    <img
                        src={image8}
                        alt=''
                        className='statsp'
                        draggable={false}
                    />
                    <img
                        src={image9}
                        alt=''
                        className='statsp'
                        draggable={false}
                    />
                </div>
            </GeographicalData>

            <Heading>
                {/* state is dynamic here */}
                <h2>State Disaster Information</h2>
            </Heading>
            {disasterList.map((disaster, index) => {
                return (
                    <Data>
                        <div className='info' key={index}>
                            <div className='date'>{disaster.Period}</div>

                            <div className='disaster'>
                                <a
                                    onClick={() => {
                                        navigate('/disaster', {
                                            state: disaster,
                                        })
                                    }}
                                >
                                    {disaster.Event_type}
                                </a>
                            </div>
                        </div>
                        <hr />
                    </Data>
                )
            })}
        </>
    )
}

const Heading = styled.div`
    margin-top: 110px;
    padding: 20px 50px;
    font-family: 'Noto Sans', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        font-size: 2rem;
        width: 90%;
        border-radius: 8px;
        padding: 3px 20px;
        background-color: #00dce6;
    }
`

const GeographicalData = styled.div`
    .temp {
        height: 50vh;
        margin: 20px 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
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
        display: flex;
        flex-direction: row;
        padding: 10px 130px;
        font-family: 'Noto Sans', sans-serif;
        justify-content: space-between;
        margin: 0 50px;
    }

    .date,
    .disaster {
        font-size: 1.1rem;
        font-weight: 600;
        text-align: left;
    }

    .disaster a {
        color: black;
        text-decoration: underline;
    }

    hr {
        margin: 0px 120px;
    }
`

export default State
