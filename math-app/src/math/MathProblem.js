import { useState } from "react"
import styled from 'styled-components'

// 게임의 상태
const GameStatus = {
  SUCCESS: 'success',
  FAIL: 'fail',
  READY: 'ready',
}

// 초기 값 설정
const a = Math.floor(Math.random() * 100) + 1
const b = Math.floor(Math.random() * 100) + 1

const MathProblem = () => {

  const [gameStatus, setGameStatus] = useState(GameStatus.READY)
  const [answer, setAnswer] = useState('')
  const [A, setA] = useState(a)
  const [B, setB] = useState(b)

  const changeHandler = (e) => {
    setAnswer(e.target.value)
  }

  const submitHandler = () => {
    if (Number(answer) === A+B ) {
      setGameStatus(GameStatus.SUCCESS)
      setAnswer('')
    }
    else {
      setGameStatus(GameStatus.FAIL)
      setAnswer('')
    }
  }

  const Checker = () =>{
    if (gameStatus === 'success') {
      return <span>정답</span>
    }
    else if (gameStatus === 'fail') {
      return <span>오답</span>
    }
  }

  const resetHandler = () => {
    setGameStatus('ready')
    setA(Math.floor(Math.random() * 100) + 1)
    setB(Math.floor(Math.random() * 100) + 1)
  }

  return (
    <div>
      <ProblemBox>
        <span>{A}</span>
        <span>+</span>
        <span>{B}</span>
      </ProblemBox>

      <hr />

      <AnswerSheet>
        <div> = </div>
        <input
          id="answer"
          type= "number"
          value= {answer}
          onChange={changeHandler}
          onKeyPress={(e) => {
            if(e.key === 'Enter') {
              submitHandler()
          }}}
        />
        <SubmitButton onClick={submitHandler}>제출</SubmitButton>
      </AnswerSheet>

      <Explain gameStatus={gameStatus}>
        <Checker />{gameStatus !== 'ready' ? "입니다." : null}
      </Explain>

      <ButtonBox>
        {gameStatus==='success' ? <ResetButton onClick={resetHandler}>
          <span class="material-icons">arrow_forward</span>
          <span> 다음 문제</span></ResetButton> : null}
      </ButtonBox>

    </div>
  )
}

const ProblemBox = styled.div`
  span:not(:first-of-type) {
    margin-left: 12px;
  }
  span {
    font-size: 2rem;
    font-weight: bold;
  }
  text-align: center;
`
  

const AnswerSheet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  input {
    box-sizing: border-box;
    font-size: 1.4rem;
    padding: 12px;
    width: 150px;
    height: 40px;
    margin-left: 12px;
  }

  // 인풋박스의 오른쪽에 있는 화살표 지우는 팁 
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
const SubmitButton = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: bold;
  color: #495057;
  background: #d3f9d8;
  margin-left: 12px;

  &:hover {
    cursor: pointer;
    background: #69db7c;
    font-size: 1.15rem;
  }
`

const Explain = styled.div`
  text-align: center;
  font-size: 1.4rem;
  padding-top: 20px;
  
  span {
    color: blue;
    color: ${({gameStatus}) => gameStatus === 'success' ? "blue" : "red"};
    font-weight: bold;
  }
    
`
const ResetButton = styled.button`
  width: 100%;
  background: #748ffc;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 6px;
  cursor: pointer;

  &:hover {
    font-size:1.1rem;
    background: #5a72d1;
  }

  span:first-of-type {
    margin-right: 12px;
  }
`

const ButtonBox = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export default MathProblem