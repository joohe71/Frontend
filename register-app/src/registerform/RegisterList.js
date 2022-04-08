const RegisterList = ({userList}) => {

  return (
    <div>
      <h4>실시간 회원가입 유저 리스트</h4>
      {userList.map((item) => <p>{item.id} 님이 회원가입 하셨습니다.</p>)}
    </div>
  )
}

export default RegisterList;