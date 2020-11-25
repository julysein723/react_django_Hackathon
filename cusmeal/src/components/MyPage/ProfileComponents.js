import React from 'react';
import style from 'styled-components';
import profile from '../../assets/icon/profile_icon@2x.png';

const Container = style.div`
    width: 90vw;
    height: 20vw;
    border-radius: 4vw;
    display: flex;
    flex-direction: row;
    align-items:center;
    box-shadow: 0vw 2vw 5vw 0 rgba(0, 0, 0, 0.2);
    margin-top: 10pt;
    margin-bottom: 7vw;
    background-color: white;
`;
const Photo = style.img`
    background-color: rgba(249, 210, 86, 1);
    color : white;
    width: 13vw;
    height: 13vw;
    align-items:center;
    justify-content:center;
    border-radius: 50%;
    margin: 15px;
`;
const Text = style.div`
    display: flex;
    flex-direction: column;
    align-items:start;
    justify-content:center;
`;
const Nickname = style.div`
    color: black;
    margin-bottom: 1vw;
    font-size:10pt;
`;
const Email = style.div`
    color : rgba(187, 187, 187, 1);
    font-size:5pt;    
`;


const ProfileComponent = () => {
    return(
        <>
            <Container>
                <Photo src={profile}/>
                <Text>
                    <Nickname>배고픈 고양이</Nickname>
                    <Email>hungrycat@naver.com</Email>
                </Text>
            </Container>
        </>
    )
}


export default ProfileComponent;