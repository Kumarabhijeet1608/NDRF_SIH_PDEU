import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    CCarousel,
    CCarouselCaption,
    CCarouselItem,
    CImage,
} from '@coreui/react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import '../App.css'
import httpClient from '../helpers/httpClient'

const DonationsContainer = (props) => {
    const [donationList, setDonationList] = useState([])
    const getPodList = async () => {
        await httpClient({
            url: '/donations',
            method: 'get',
        })
            .then((response) => {
                var templist = response.data
                console.log(templist)
                setDonationList(templist)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    useEffect(() => {
        getPodList()
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    }
    return (
        <>
            <Container>
                <LiveUpdates>
                    <CCarousel controls indicators>
                        <CCarouselItem>
                            <Cover>
                                <CImage
                                    className='d-block w-100 rad'
                                    src='/images/image1_slide.jpg'
                                    alt='slide 1'
                                />
                            </Cover>
                        </CCarouselItem>
                        <CCarouselItem>
                            <Cover>
                                <CImage
                                    className='d-block w-100 h-60'
                                    src='/images/image2_slide.jpg'
                                    alt='slide 2'
                                />
                            </Cover>
                        </CCarouselItem>
                        <CCarouselItem>
                            <Cover>
                                <CImage
                                    className='d-block w-100'
                                    src='/images/image3_slide.jpg'
                                    alt='slide 3'
                                />
                            </Cover>
                        </CCarouselItem>
                        <CCarouselItem>
                            <Cover>
                                <CImage
                                    className='d-block w-100 rad'
                                    src='/images/image4_slide.jpg'
                                    alt='slide 1'
                                />
                            </Cover>
                        </CCarouselItem>
                        <CCarouselItem>
                            <Cover>
                                <CImage
                                    className='d-block w-100 rad'
                                    src='/images/image5_slide.jpg'
                                    alt='slide 1'
                                />
                            </Cover>
                        </CCarouselItem>
                        <CCarouselItem>
                            <Cover>
                                <CImage
                                    className='d-block w-100 rad'
                                    src='/images/image6_slide.jpg'
                                    alt='slide 1'
                                />
                            </Cover>
                        </CCarouselItem>
                        <CCarouselItem>
                            <Cover>
                                <CImage
                                    className='d-block w-100 rad'
                                    src='/images/image7_slide.jpg'
                                    alt='slide 1'
                                />
                            </Cover>
                        </CCarouselItem>
                        <CCarouselItem>
                            <Cover>
                                <CImage
                                    className='d-block w-100 rad'
                                    src='/images/image8_slide.jpg'
                                    alt='slide 1'
                                />
                            </Cover>
                        </CCarouselItem>
                    </CCarousel>
                </LiveUpdates>
                <Unknown>
                    <Slider {...settings}>
                        <Wrap>
                            <a href='https://amritmahotsav.nic.in/'>
                                <img
                                    className='heading'
                                    src='/images/slider_AmritMahotsav.png'
                                    alt=''
                                ></img>
                            </a>
                        </Wrap>
                        <Wrap>
                            <a href='https://www.youtube.com/channel/UCN2fiHd5IFWtNyu-vpAkeEA/videos'>
                                <img
                                    className='heading'
                                    src='/images/slider_BPR&D.png'
                                    alt=''
                                ></img>
                            </a>
                        </Wrap>
                        <Wrap>
                            <a href='https://digitalindia.gov.in/'>
                                <img
                                    className='heading'
                                    src='/images/slider_digital-india.png'
                                    alt=''
                                ></img>
                            </a>
                        </Wrap>
                        <Wrap>
                            <a href='https://www.incredibleindia.org/content/incredible-india-v2/en.html'>
                                <img
                                    className='heading'
                                    src='/images/slider_incredible-india.png'
                                    alt=''
                                ></img>
                            </a>
                        </Wrap>
                        <Wrap>
                            <a href='https://www.india.gov.in/'>
                                <img
                                    className='heading'
                                    src='/images/slider_indiagov.png'
                                    alt=''
                                ></img>
                            </a>
                        </Wrap>
                        <Wrap>
                            <a href='https://www.makeinindia.com/home'>
                                <img
                                    className='heading'
                                    src='/images/slider_makeinindia.png'
                                    alt=''
                                ></img>
                            </a>
                        </Wrap>
                        <Wrap>
                            <a href='https://www.mygov.in/'>
                                <img
                                    className='heading'
                                    src='/images/slider_mygov.png'
                                    alt=''
                                ></img>
                            </a>
                        </Wrap>
                        <Wrap>
                            <a href='https://pmnrf.gov.in/en/'>
                                <img
                                    className='heading'
                                    src='/images/slider_pmnrf.png'
                                    alt=''
                                ></img>
                            </a>
                        </Wrap>
                    </Slider>
                </Unknown>
            </Container>
            <Rewards>
                <h2>Our Donators</h2>
                <div className='outercard'>
                    {donationList.map((donationItem, index) => {
                        return (
                            <div className='block' key={index}>
                                <div className='serial'>{index}</div>
                                <div className='logo'>
                                    <img
                                        src='./images/topdonation_logo.png'
                                        alt='Loading logo...'
                                    />
                                </div>
                                <div className='detail'>
                                    <div className='name'>
                                        <p>{donationItem.name}</p>
                                    </div>
                                    <div className='secretkey'>
                                        <span>{donationItem.address}</span>
                                    </div>
                                </div>
                                <div className='donation-detail'>
                                    <p>Donated ₹{donationItem.amount}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Rewards>
        </>
    )
}

const Container = styled.div`
    height: 200px;
    border-radius: 20px;
    margin-top: 140px;
    width: 65%;
    height: 80vh;
    padding: 12px 12px;
    gap: 20px;
    margin-bottom: 10px;
    display: inline-block;
`

const Unknown = styled.div`
    display: inline-block;
    height: 20vh;
    border-radius: 10px;
    width: 100%;
`

const Wrap = styled.div`
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    height: auto;

    a {
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
            rgb(0 0 0/ 73%) 0px 2px 10px -10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        padding: 4px;

        &:hover {
            padding: 0;
            /* border: 4px solid rgba(249,249,249,0.8); */
            transition-duration: 300ms;
        }

        .heading {
            height: 20vh;
        }
    }
`

const LiveUpdates = styled.div`
    display: inline-block;
    border-radius: 10px;
    height: 60vh;
    width: 100%;
    margin-bottom: 10px;
`

const Cover = styled.div`
    img {
        height: 55vh;
        width: 100vw;
        object-fit: cover;
        border-radius: 15px;
    }
`

const Rewards = styled.div`
    position: absolute;
    top: 158px;
    display: inline-block;
    border-radius: 10px;
    height: 80vh;
    width: calc(100% - 920px);
    margin-left: 15px;
    padding: 0px 12px;

    h2 {
        text-align: center;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        margin-bottom: 25px;
    }

    .outercard {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        /* border: 1px solid black; */
        background-color: #c8d6e5;
        border-radius: 30px;
        padding: 9px 13px;
        margin: 0px;
    }

    .block .serial {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 17px;
        line-height: 24px;
        color: #000000b3;
    }

    .block .logo {
        width: 38px;
        height: 38px;
        border: 3px solid black;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo img {
        width: 30px;
        height: 30px;
    }

    .block .detail {
        width: 140px;
    }

    .block .detail .name p {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 17px;
        line-height: 24px;
        color: #000000b3;
    }

    .block .detail .secretkey {
        text-overflow: ellipsis;
        overflow: hidden;
        width: 160px;
        height: 1.2em;
        white-space: nowrap;
    }

    .block .detail .secretkey span {
        width: 40px;
        overflow: hidden;
        color: #000;
        font-size: 0.8rem;
        font-family: 'Noto Sans', sans-serif;
        font-weight: 400;
    }

    .donation-detail {
        padding: 2px 9px;
        border-radius: 20px;
        background-color: white;
        /* width: 23px; */
        height: auto;
    }
`

export default DonationsContainer
