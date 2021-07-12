import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Deductions from '../components/deductions'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const Input = styled.input`
  float: right;
`

const AddItemForm = styled.div`
  flex-direction: row;
`

const InputButton = styled.div`
  float: right;
`

const Home = () => {
  const [indivTotals, setIndivTotals] = useState({
    Lucas: 0,
    Jerry: 0,
    Wyatt: 0,
    Jack: 0,
  })

  const [total, setTotal] = useState('')
  const [tax, setTax] = useState('')

  useEffect(() => {
    const newIndivTotals = { ...indivTotals }
    const keys = Object.keys(indivTotals)
    keys.forEach((key) => {
      newIndivTotals[key] = (total + tax) / keys.length
    })
    console.log('indivTotals: ', indivTotals)
    setIndivTotals(newIndivTotals)
  }, [total, tax])

  return (
    <Layout>
      <h1>Grocery Calculator</h1>
      <Form>
        <div>
          Total (including tax):{' '}
          <Input
            onChange={(event) => setTotal(event.target.value)}
            type='text'
            value={total}
            placeholder='Enter Dollar Value'
          />
        </div>
        <div>
          Tax:{' '}
          <Input
            onChange={(event) => setTax(event.target.value)}
            type='text'
            value={tax}
            placeholder='Enter Dollar Value'
          />
        </div>
      </Form>
      <Deductions indivTotals={indivTotals} setIndivTotals={setIndivTotals} />
      <div>
        {Object.keys(indivTotals).map((name) => (
          <p key={name}>
            {name} Final Total: {indivTotals[name]}
          </p>
        ))}
      </div>
    </Layout>
  )
}

export default Home
