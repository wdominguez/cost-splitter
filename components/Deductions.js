import { useState } from 'react'
import styled from 'styled-components'
import Item from './item'

const Layout = styled.div``

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const AddItemForm = styled.div`
  flex-direction: row;
`

const InputButton = styled.div`
  float: right;
`

const Deductions = ({ indivTotals, setIndivTotals }) => {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  const onInputChange = (event) => {
    setInput(event.target.value)
  }

  const onInputAdd = (event) => {
    if (input !== '') {
      setList([...list, parseFloat(input)])
      setInput('')
    }
    event.preventDefault()
  }

  const onItemDelete = (id, initialIndivTotals) => {
    setIndivTotals(initialIndivTotals)
    const updatedList = list.filter((item, index) => id != index)
    setList(updatedList)
  }

  return (
    <Layout>
      <Form>
        <AddItemForm>
          <span>Item to deduct: </span>
          <InputButton>
            <input
              onChange={onInputChange}
              type='text'
              value={input}
              placeholder='Enter Dollar Value'
            />
            <button onClick={onInputAdd}>+</button>
          </InputButton>
        </AddItemForm>
        {list.map((value, index) => (
          <Item
            key={index}
            id={index}
            price={value}
            onDeletePress={onItemDelete}
            indivTotals={indivTotals}
            setIndivTotals={setIndivTotals}
          />
        ))}
      </Form>
    </Layout>
  )
}

export default Deductions
