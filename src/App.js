import { useState, useRef } from "react";
import styled from 'styled-components'
import './App.css';

function App() {

  const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #282c34;
  text-align: center;
  `

  const SubDiv = styled.div`
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  `

  const MainText = styled.h2`
  margin-bottom: 2px;
  `

  const SubmitBtn = styled.button`
  font-size: large;
  margin-top: 15px;
  width: 230px;
  height: 40px;
  `

  const Inputfld = styled.input`
  font-size: large;
  margin-top: 6px;
  `

  const Labelcstm = styled.label`
  font-size: medium;
  margin-top: 6px;
  `

  const Card = styled.div`
  cursor: pointer;
  border: teal solid 2px;
  width: 200px;
  margin-top: 10px;
  font-size: larger;
  `

//  const [count, setCount] = useState(0);
	const [displayValue, setDisplayValue] = useState([]);
  
  const remove = useRef([0])

	const inputItem = useRef("");
  const inputValue = useRef(0);

  const handel = () => {
    setDisplayValue((list) => [
      ...list,
      { name: inputItem.current, value: inputValue.current },  
    ])
    remove.current.push(inputValue.current)
  }

  return (
    <MainDiv>
      <SubDiv>
      

          <MainText>Item count: {displayValue.length}</MainText>
          <p>Total cost: {displayValue.reduce(
            (previousValue, currentValue) =>
              previousValue + Number(currentValue.value),
            0
          )}
        </p>
          
          <Labelcstm>Items</Labelcstm>
          <Inputfld onChange={(itemEvent) => {
            inputItem.current = itemEvent.target.value
          }}/>

          <Labelcstm>Values</Labelcstm>
          <Inputfld type={"number"} onChange={(countEvent) => {
            inputValue.current = countEvent.target.value
          }}/>
          
          <SubmitBtn type="button" onClick={() => {
            if(inputValue.current != 0 && inputItem.current.length > 0){
              handel()
            //remove.current.push(inputValue.current)
          } else {}
          }}>Add Items</SubmitBtn>
          
          <SubmitBtn type="button" onClick={() => {
            if(remove.current.length > 0){
            setDisplayValue(displayValue.slice(0,-1))
            remove.current.pop()
          } else {}
          }}>Remove Items</SubmitBtn>
      </SubDiv>
      <SubDiv>
        {displayValue.map((listItem, index) => (
        <Card
        key={index}
          onClick={() => {
            const displayData = [...displayValue]
            displayData.splice(index,1)
            setDisplayValue(displayData)
          }}
        > <p>Name: {listItem.name}</p>
          <p>Cost: {listItem.value}</p>
        </Card>
      ))}
      </SubDiv>
    </MainDiv>
  );
}

export default App;
