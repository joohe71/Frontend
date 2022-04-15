const RegisterList = ({userList}) => {

  return (
    <table style={{width:"100%"}}>
      <caption>실시간 회원가입 유저 리스트</caption>
      <thead>
        <tr>
          <th>user_name</th>
          <th>id</th>
        </tr>
      </thead>

      <tbody>
        {userList.map((item) => {
          return (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.id}</td>
          </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default RegisterList;