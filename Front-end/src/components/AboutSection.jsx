import React from "react";
import styled from "styled-components";

const AboutSection = (props) =>{
    return(
        <Container className="container-section">
            <TextArea>
                <h5>NDRF-Saving Lives and Beyond...</h5>
                <p>The Disaster Management Act has statutory provisions for constitution of National Disaster Response Force (NDRF) for the purpose of specialized response to natural and man-made disasters. Accordingly, in 2006 NDRF was constituted with 8 Battalions. At present, NDRF has a strength of 12 Battalions with each Battalion consisting of 1149 personnel. In the beginning, the personnel of NDRF were deployed for routine law and order duties also. In a meeting of the NDMA with the Prime Minister on October 25, 2007, the need of NDRF being made a dedicated force was highlighted and accepted. This led to the notification of NDRF Rules on February 14th , 2008, making NDRF a dedicated force for disaster response related duties, under the unified command of DG NDRF.</p>
            </TextArea>
            <Image>
                <img src="/images/about.svg" alt="Loading.."/>
            </Image>
        </Container>
    )
}

const Container = styled.div`
    border-radius: 20px;
    width: 100%;
    height: 100vh;
    /* margin-bottom: 10px; */
    position:relative;
    display: flex;
    align-items: center;
    padding: 16px 16px;
    /* margin-top: 20px; */
    overflow: hidden;
    /* background-color: yellow; */
    
`

const TextArea = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    height: auto;
    width: 60%;
    overflow: hidden;

    h5{
        font-size: 2rem;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        letter-spacing: 2px;
        /* margin: 14px 0px; */
    }
    p{
        font-size: 1rem;
        text-align: center;
        font-family: "Noto Sans", sans-serif;
        font-weight: 400;
        line-height: 24px;
        color: grey;
    }
`

const Image = styled.div`
    width: 40%;
    height: auto;

    img{
        height: auto;
        width: 90%;
        margin-left:30px;
    }
`



export default AboutSection;
