import React from 'react'
import styled from 'styled-components'
import '../App.css'
const Logistics = (props) => {
    return (
        <>
            <Heading>
                <h1>Tracking Instances-</h1>
            </Heading>
            <TrackBar>
                <div className='box'>
                    <div className='progressbar'></div>
                </div>
                <div className='box'>
                    <div className='progressbar second'></div>
                </div>
                <div className='box'>
                    <div className='progressbar third'></div>
                </div>
                <div className='box'>
                    <div className='progressbar fourth'></div>
                </div>
                <div className='box'></div>
            </TrackBar>
            <TBarText>
                <p>Approved</p>
                <p>Preparing Dispatch</p>
                <p>Dispatched</p>
                <p>Destination Reached</p>
                <p>Distributed</p>
            </TBarText>
            <ContentContainer>
                <div className='contentC'>
                    <div className='update'>
                        <p className='time'>3:52 PM</p>
                        <p className='update-content'>
                            Sanctioned by Dy Commandment Sh. Kamal Mehra under
                            the orders of Director General Sh. Atul Karwal
                        </p>
                    </div>
                </div>
                <div className='contentC'>
                    <div className='update'>
                        <p className='time'>5:22 PM</p>
                        <p className='update-content'>
                            Troops and Transport from 2nd Battalion, Nadia (WB)
                            beginning prep
                        </p>
                    </div>
                    <div className='update'>
                        <p className='time'>4:22 PM</p>
                        <p className='update-content'>
                            Food and comfort supplies being sourced and packed
                        </p>
                    </div>
                </div>
                <div className='contentC'>
                    <div className='update'>
                        <p className='time'>3:72 PM</p>
                        <p className='update-content'>
                            Troops and Spplies dispatched from Nadia
                        </p>
                    </div>
                    <div className='update'>
                        <p className='time'>3:72 PM</p>
                        <p className='update-content'>
                            Crossing Odisha Border near Jamsola
                        </p>
                    </div>
                </div>
                <div className='contentC'>
                    <div className='update'>
                        {/* <p className='time'>3:72 PM</p>
                        <p className='update-content'>
                            Sanctioned by Dy Commandment Sh. Kamal Mehra under
                            the orders of Director General Sh. Atul Karwal
                        </p> */}
                    </div>
                </div>
                <div className='contentC'>
                    {/* <div className='update'>
                        <p className='time'>3:72 PM</p>
                        <p className='update-content'>
                            Sanctioned by Dy Commandment Sh. Kamal Mehra under
                            the orders of Director General Sh. Atul Karwal
                        </p>
                    </div> */}
                </div>
            </ContentContainer>
        </>
    )
}

const Heading = styled.div`
    margin-top: 130px;
    margin-left: 65px;
    font-family: 'Poppins', sans-serif;

    h1 {
        font-weight: bold;
    }
`

const TrackBar = styled.div`
    margin: 80px 55px;
    margin-bottom: 0;
    padding: 12px 53px;
    display: flex;
    justify-content: space-between;
    top: 10px;

    .box {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: orange;
    }
    .progressbar {
        position: absolute;
        height: 10px;
        width: 20%;
        top: 287px;
        left: 9%;
        border-bottom: 6px solid black;
        z-index: -1;
    }

    .second {
        left: 30%;
    }

    .third {
        left: 50.2%;
    }

    .fourth {
        left: 71%;
    }
`
const ContentContainer = styled.div`
    overflow: hidden;
    margin-bottom: 10px;
    margin-left: 10px;
    padding: 12px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    align-items: stretch;
    font-size: 14px;
`
const TBarText = styled.div`
    overflow: hidden;
    margin-bottom: 10px;
    margin-left: 18px;
    margin-right: 11px;
    padding: 12px 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2px;

    p {
        font-family: 'Noto Sans', sans-serif;
        font-weight: 600;
        line-height: 24px;
        color: grey;
        margin: 0px 0px;
    }
`

export default Logistics
