import React, { useState } from 'react';
import styled from "styled-components";
import heartMsg from "../img/heartMsg.svg";

const W = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    position: fixed;
    top: 15%;
    background-color: #ffffff;
    border-radius: 50px;
`

const WiteLetter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 329px;
    height: 544px;
    border-radius: 15px;
    margin-top: 150px;
    padding-top: 50px;
    background-color: #ffffff;
    box-sizing: border-box;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.315);
`;



const Name = styled.div`
    font-size: 15px;
    color: #333333;
    font-weight: bold;
    margin-bottom: 20px;
`;
const Id = styled.div`
    font-size: 12px;
    color: #F27781;
    margin-bottom: 20px;
`;
const Text = styled.div`
    font-size: 15px;
    color: #000000;
    font-weight: bold;
`;

const TextGray = styled.div`
    font-size: 15px;
    color: #ABABAB;
    font-weight: bold;
`;

const Button = styled.button`
    font-size: 15px;
    color: #000000;
    font-weight: bold;
    background: none;
    border: none;
`;

const ButtonRed = styled.button`
    font-size: 15px;
    color: #F27781;
    font-weight: bold;
    background: none;
    border: none;
`;

const P = styled.button`
    float: right;
    color: #AC66F2;
    font-size: 15px;
    font-weight: bold;
    background: none;
    border: none;
`;

const Label = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    
`;
const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
    
`;

const Mine = (props) => {

    return (
    <>
        <W>
            <Image src={heartMsg} alt='msg'/>
            <WiteLetter>
                <>
                    <Name>{props.name}</Name>
                    <Id>{props.id}</Id>
                </>
            <Label>
                <Text>알림 on/off</Text><P>OFF</P>
            </Label>
            <Label>
                <Text>얻은 리워드 목록</Text>
            </Label>
            <Label>
                <Text>테마</Text><P>W</P>
            </Label>
            <Label>
                <TextGray>버전</TextGray><P>beta</P>
            </Label>
            <hr/>
            <Bottom>
                <Button>로그아웃</Button>
                <ButtonRed>회원탈퇴</ButtonRed>
            </Bottom>
            </WiteLetter>
        </W>
    </>
    );
}

export default Mine;