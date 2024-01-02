import React, { useState } from "react";
import styled from "styled-components";
import heartMsg from "../img/Heartmsg.svg";
import axios from "axios";

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
`;

const WiteLetter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 329px;
  height: 544px;
  border-radius: 15px;
  margin-top: 80px;
  padding-top: 50px;
  background-color: #ffffff;
  box-sizing: border-box;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.315);
`;

const Text = styled.div`
  font-size: 15px;
  color: #000000;
  font-weight: bold;
  margin-bottom: 20px;
`;
const TextComplete = styled.div`
  font-size: 15px;
  color: #f27781;
  font-weight: bold;
  margin-bottom: 20px;
`;

const LetterPaper = styled.textarea`
  background-color: #ececec;
  width: 300px;
  height: 430px;
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 20px;
  word-wrap: break-word;
  word-break: break-all;
  outline-color: #f27781;
  font-family: "Raleway", sans-serif;

  &::placeholder {
    color: #cbcbcb;
  }

  &:focus {
    background-color: #ececec;
  }
`;

const P = styled.div`
  float: right;
  color: #cbcbcb;
  margin-bottom: 5px;
`;

const Send = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 329px;
  height: 143px;
  border-radius: 0 0 15px 15px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.315);
  border: none;
`;

const From = styled.div`
  font-size: 12px;
  color: #999999;
`;
const SendText = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #000000;
  margin: 5px;
`;
const SendCaution = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #cbcbcb;
`;

const LetterWrite = (props) => {
  let [inputCount, setInputCount] = useState(0);
  const [content, setContent] = useState([]);
  const [isWriteComplete, setIsWriteComplete] = useState(false);

  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://43.201.221.221:8080/visitorComment",
        {
          // "ownerId": 0,
          // "writerId": 0,
          content: "string",
        }
      );
      // console.log('Sending data:', { ownerId, writerId, content });
      console.log("Server response:", response.data);
      setIsWriteComplete(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <W>
        <Image src={heartMsg} alt="msg" />
        <WiteLetter>
          {isWriteComplete ? (
            <TextComplete>편지 쓰기 완료!</TextComplete>
          ) : (
            <Text>편지쓰기</Text>
          )}
          <LetterPaper
            onChange={(e) => {
              onInputHandler(e);
              setContent(e.target.value);
            }}
            value={content}
            placeholder="TO. 엔프제에게..."
          ></LetterPaper>
          <P>
            <span>{inputCount}</span>
            <span>/500</span>
          </P>
          {inputCount > 0 && (
            <Send type="submit" onSubmit={handleSubmit}>
              <From>from</From>
              <From>엔삐</From>
              {/* <From>{props.writerId}</From> */}
              <SendText>보내기</SendText>
              <SendCaution>한 번 보낸 편지는 수정할 수 없어요.</SendCaution>
            </Send>
          )}
        </WiteLetter>
      </W>
    </>
  );
};

export default LetterWrite;
