import styled from "styled-components"

const Header = () => {
  return (
    <Head>
      <span 
        class="material-icons" 
        style = {{fontSize:30,}}
      >square_foot</span> 수학 교실
    </Head>
  )
}

const Head = styled.div`
  padding: 15px 15px 10px 15px;
  margin: 15px 15px 20px 15px;
  font-size: 25px;
  font-weight: bold;
  border-bottom: dotted 2px black;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export default Header