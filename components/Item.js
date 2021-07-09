import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  margin: 10px 0;
`

const Checkboxes = styled.div`
  display: flex;
  justify-content: space-around;
`

const Item = (props) => {
  const [selections, setSelections] = useState({})
  const [initialIndivTotals, setInitialIndivTotals] = useState({})
  console.log('initialIndivTotals: ', initialIndivTotals)

  useEffect(() => {
    if(Object.keys(initialIndivTotals).length === 0) {
      setInitialIndivTotals(props.indivTotals)
    }
  }, [])

  useEffect(() => {
    let newSelections = {}
    Object.keys(props.indivTotals).forEach((key) => (newSelections[key] = true))
    setSelections(newSelections)
  }, [])


  const handleInputChange = (name) => {
    let newSelections = { ...selections }
    newSelections[name] = !selections[name]

    let newIndivTotals = { ...initialIndivTotals }
    const owedPerPerson = props.price / Object.keys(newIndivTotals).length
    console.log('owedPerperson: ', owedPerPerson)
    const selectedCount = Object.values(newSelections).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    )
    console.log('selected: ', selectedCount)
    const unSelectedCount = Object.keys(newSelections).length - selectedCount
    console.log('unselected: ', unSelectedCount)
    
    //deduct owed per person from each unchecked
    //split total deducted to add to each person selected
    const addToOthers = (owedPerPerson * unSelectedCount) / selectedCount
    console.log('addtoothers: ', addToOthers)
    Object.keys(newIndivTotals).forEach(name => {
      !newSelections[name] ? 
        newIndivTotals[name] -= owedPerPerson
      : newIndivTotals[name] += addToOthers
    })
    
    props.setIndivTotals(newIndivTotals)
    setSelections(newSelections)
  }

  return (
    <Layout>
      <button onClick={() => props.onDeletePress(props.id, initialIndivTotals)}>X</button>
      <span style={{ padding: 10 }}>${props.price} </span>
      <Checkboxes>
        {Object.keys(props.indivTotals).map((key) => (
          <div>
            <span>{key}: </span>
            <input
              key={key}
              type='checkbox'
              checked={selections[key]}
              onChange={() => handleInputChange(key)}
            />
          </div>
        ))}
      </Checkboxes>
    </Layout>
  )
}

export default Item
