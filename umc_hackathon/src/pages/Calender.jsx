import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import userImg from "../img/userimg.svg";
import letter from "../img/letterimg.svg";
import send from "../img/send.svg";
import calenderImg from "../img/calenderboximg.svg";

// 모달 스타일
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  width: 300px;
  padding: 16px;
  border-radius: 10px;
`;

const ModalText = styled.div`
  font-size: 14px;
  padding: 8px;
`;

const CloseButton = styled.div`
  cursor: pointer;
  font-size: 12px;
  text-align: center;
  color: #007bff;
`;

// 모달 컴포넌트
const Modal = ({ content, onClose }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>닫기</CloseButton>
        <ModalText>{content}</ModalText>
      </ModalContent>
    </ModalWrapper>
  );
};

function Calender() {
  const [missions, setMissions] = useState([]);
  const [name, setName] = useState("");
  const [selectedMission, setSelectedMission] = useState(null);

  useEffect(() => {
    const memberId = localStorage.getItem("memberId");

    axios
      .get("http://43.201.221.221:8080/calendar", {
        params: { memberId: memberId },
      })
      .then((response) => {
        console.log(response.data);
        setMissions(response.data.result.missions);
        setName(response.data.result.nickname);
        localStorage.setItem("name", response.data.result.nickname);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleMissionClick = (content) => {
    setSelectedMission(content);
  };

  const handleCloseModal = () => {
    setSelectedMission(null);
  };

  const letterlocation = () => {
    window.location.href = "/letterbox";
  };

  const letters = () => {
    window.location.href = "/letter";
  };

  const gein = () => {
    window.location.href = "/mypage";
  };
  return (
    <>
      <UserInfo>
        <UserName>{name}님</UserName>
        <UserImage onClick={gein}>
          <img src={userImg} alt="유저 이미지" />
        </UserImage>
      </UserInfo>

      <CalenderCover>
        <Cover>
          {missions.map((mission, index) => (
            <LittleBox
              key={mission.missionId}
              rowIndex={Math.floor(index / 6)}
              colIndex={index % 6}
              onClick={() => handleMissionClick(mission.content)}
            >
              <C>
                <Date>{mission.date}</Date>
                <Content>{mission.content}</Content>
              </C>
            </LittleBox>
          ))}
        </Cover>
      </CalenderCover>

      <FriendsZone>
        <img src={userImg} alt="친구들" />
      </FriendsZone>

      <Bottom>
        <Img onClick={letterlocation}>
          <img src={letter} alt="편지함" />
        </Img>
        <img onClick={letters} src={send} alt="보내기" />
      </Bottom>

      {selectedMission && (
        <Modal content={selectedMission} onClose={handleCloseModal} />
      )}
    </>
  );
}

const C = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  font-size: 5px;
  padding-top: 8px;
`;

const Date = styled.div`
  font-size: 5px;
  color: #fff;
`;

const Cover = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  width: 320px;
  height: 512px;
  background: url(${calenderImg}) no-repeat center center fixed;
  background-size: cover;
  border-radius: 15px;
  padding: 16px;
`;

const LittleBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f27781;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  font-size: 12px;
  padding: 4px;
  grid-row: ${(props) => props.rowIndex + 1};
  grid-column: ${(props) => props.colIndex + 1};
`;

const UserInfo = styled.div`
  width: 360px;
  height: 100px;
  display: flex;
  margin-top: 20px;
`;

const UserName = styled.div`
  font-size: 20px;
  float: left;
  margin-left: 30px;
  margin-top: 20px;
`;

const UserImage = styled.div`
  padding-left: 180px;
`;

const CalenderCover = styled.div`
  text-align: center;
`;

const FriendsZone = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 20px;
`;

const Bottom = styled.div`
  position: fixed;
  top: 96%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  display: flex;
`;

const Img = styled.div`
  margin-right: 10px;
`;

export default Calender;
