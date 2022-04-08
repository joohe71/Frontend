import { useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("")
  const [identification, setIdentification] = useState("")
  const [password, setPassword] = useState("")

  const [nameError, setNameError] = useState(true)
  const [idError, setIdError] = useState(true)
  const [pwError, setPwError] = useState(true)

  const validateName = (name) => {
    if (name.length < 1 || name.length > 10) {
      setNameError(true)
    }
    else {
      setNameError(false)
    }
  }
  const validateId = (id) => {
    if (id.length < 4) {
      setIdError(true)
    }
    else {
      setIdError(false)
    }
  }
  const validatePw = (pw) => {
    const specialLetter = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    const isValidPassword = pw.length >= 4 && specialLetter >= 1;
    if (isValidPassword ) {
      setPwError(false)
    }
    else {
      setPwError(true)
    }
  }
  

  const handleNameChange = (e) => {
    setName(e.target.value)
    validateName(e.target.value)
  }

  const handleIdChange = (e) => {
    setIdentification(e.target.value)
    validateId(e.target.value)
  }

  const handlePwChange = (e) => {
    setPassword(e.target.value)
    validatePw(e.target.value)
  }

  const handleReset = () => {
    setName("")
    setIdentification("")
    setPassword("")
    setNameError(true)
    setIdError(true)
    setPwError(true)
  }

  const handleSubmit = () => {
    if (!nameError && !idError && !pwError) {
      alert("회원가입에 성공했습니다.")
    }
    else {
      alert("회원가입에 실패했습니다. 다시 한 번 확인해주세요.")
    }  
  }

  return (
    <form className="form-container">
      <fieldset className="form-fieldset">
        <label htmlFor="name">
          이름 :
        </label>
        <input
          value={name}
          id="name"
          onChange={handleNameChange}
          type="text"
          name="name"
          placeholder="이름을 입력해 주세요."
        >
        </input>
        <div>
          {nameError ? "이름은 1글자 이상, 10글자 이하여야 합니다.": null}
        </div>
      </fieldset>

      <fieldset className="form-fieldset">
        <label htmlFor="identification">
          아이디 :
        </label>
        <input
          value={identification}
          id="identification"
          onChange={handleIdChange}
          type="text"
          name="identification"
          placeholder="아이디를 입력해 주세요."
        >
        </input>
        <div>
          {idError ? "아이디는 4글자 이상이어야 합니다.": null}
        </div>
      </fieldset>

      <fieldset className="form-fieldset">
        <label htmlFor="identification">
          비밀번호 :
        </label>
        <input
          value={password}
          id="password"
          onChange={handlePwChange}
          type="password"
          name="password"
          placeholder="비밀번호를 입력해 주세요."
        >
        </input>
        <div>
          {pwError ? "비밀번호는 특수문자 1개를 포함하여 4글자 이상이어야 합니다.": null}
        </div>
      </fieldset>

      <div className="button-container">
        <button
          onClick={handleReset}
          type="button"
          className="form-button reset-button"
        >
          초기화
        </button>

        <button
          onClick={handleSubmit}
          type="button"
          className="form-button submit-button"
        >
          제출
        </button>
      </div>


    </form>

    
  )
}

export default RegisterForm;