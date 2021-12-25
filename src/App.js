import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Phones from './components/Phones'
import AddPhone from './components/AddPhone'
import About from './components/About'

const App = () => {
  const [showAddPhone, setShowAddPhone] = useState(false)
  const [phones, setPhones] = useState([])
  const [loader, setLoader] = useState(true)


  useEffect(() => {
    const getPhones = async () => {
      const phonesFromServer = await fetchPhones()
      setLoader(false)
      setPhones(phonesFromServer)
    }

    getPhones()
  }, [])

  // Fetch Phone
  const fetchPhones = async () => {
    const res = await fetch('http://localhost:5000/phones')
    const data = await res.json()

    return data
  }

  // Fetch Phone
  const fetchPhone = async (id) => {
    const res = await fetch(`http://localhost:5000/phones/${id}`)
    const data = await res.json()

    return data
  }

  // Add Phone
  const addPhone = async (phone) => {
    const res = await fetch('http://localhost:5000/phones', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(phone),
    })

    const data = await res.json()

    setPhones([...phones, data])

  }

  // Delete Phone
  const deletePhone = async (id) => {
    const res = await fetch(`http://localhost:5000/phones/${id}`, {
      method: 'DELETE',
    })
    res.status === 200
      ? setPhones(phones.filter((phone) => phone.id !== id))
      : alert('Error Deleting This Phone')
  }



  return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShowAddPhone(!showAddPhone)}
          showAdd={showAddPhone}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddPhone && <AddPhone onAdd={addPhone} />}
                {loader && (<div class="lds-dual-ring"></div>)}
                {phones.length > 0  ? (
                  <Phones
                    phones={phones}
                    onDelete={deletePhone}
                  />
                ) : (
                  'No phones To Show'
                )}
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
