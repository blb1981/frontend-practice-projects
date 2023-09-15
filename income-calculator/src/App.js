import { useState } from 'react'

import styles from './App.module.css'

const App = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(0)
  const [yearlyIncome, setYearlyIncome] = useState(0)
  const [taxRate, setTaxRate] = useState(0)
  // const [derivedTaxRate, setDerivedTaxRate] = useState(0)

  const currencyRegEx = /^[\d]/g
  const percentageRegEx = /^[\d]{0,2}$/g

  const handleMonthlyChange = (e) => {
    const monthly = Number(e.target.value)
    if (currencyRegEx.test(monthly)) {
      setMonthlyIncome(monthly)
      setYearlyIncome(monthly * 12)
    }
  }

  const handleYearlyChange = (e) => {
    const yearly = Number(e.target.value)
    if (currencyRegEx.test(yearly)) {
      setMonthlyIncome(Math.floor(yearly / 12))
      setYearlyIncome(yearly)
    }
  }

  const handleTaxChange = (e) => {
    const percentage = Number(e.target.value)
    if (percentageRegEx.test(percentage)) {
      setTaxRate(percentage)
    }
  }

  const handleReset = () => {
    setMonthlyIncome(0)
    setYearlyIncome(0)
    setTaxRate(0)
  }

  const derivedTaxRate = taxRate / 100
  const netMonthly = Math.floor(monthlyIncome - monthlyIncome * derivedTaxRate)
  const netYearly = Math.floor(netMonthly * 12)

  return (
    <div className={styles.container}>
      <h1>Income Calculator</h1>
      <h3>How Much 💵 Do you Want to Make?</h3>
      <div className={styles.inputGroup}>
        Gross Monthly Income:{' '}
        <input
          type='text'
          value={monthlyIncome}
          onChange={(e) => handleMonthlyChange(e)}
        />
      </div>
      <div className={styles.inputGroup}>
        Gross Yearly Income:{' '}
        <input
          type='text'
          value={yearlyIncome}
          onChange={(e) => handleYearlyChange(e)}
        />
      </div>
      <div className={styles.inputGroup}>
        Tax Rate %:{' '}
        <input
          type='text'
          value={taxRate}
          onChange={(e) => handleTaxChange(e)}
        />
      </div>

      <button className={styles.button} onClick={handleReset}>
        Reset
      </button>
      <p>
        At ${monthlyIncome} income per month, taxed at {taxRate}% you'll bring
        home ${netMonthly}.
      </p>
      <p>
        At ${yearlyIncome} income per year, taxed at {taxRate}, you'll bring
        home: ${netYearly}.
      </p>
    </div>
  )
}

export default App
