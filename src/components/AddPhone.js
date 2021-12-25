import { useState } from 'react'

const AddPhone = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [manufacturer, setManufacturer] = useState('')
  const [description, setDescription] = useState('')
  const [color, setColor] = useState('')
  const [price, setPrice] = useState('')
  const [imageFileName, setImageFileName] = useState('')
  const [screen, setScreen] = useState('')
  const [processor, setProcessor] = useState('')
  const [ram, setRam] = useState('')


  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Please add a name')
      return
    }

    onAdd({ name, manufacturer, description, color, price, imageFileName, screen, processor, ram })

    setName('')
    setManufacturer('')
    setDescription('')
    setColor('')
    setPrice('')
    setImageFileName('')
    setScreen('')
    setProcessor('')
    setRam('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Name</label>
        <input
          type='text'
          placeholder='Add Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Manufacturer</label>
        <input
          type='text'
          placeholder='Add Manufacturer'
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Description</label>
        <input
          type='text'
          placeholder='Add Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Color</label>
        <input
          type='text'
          placeholder='Add Color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Price</label>
        <input
          type='text'
          placeholder='Add Price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Screen</label>
        <input
          type='text'
          placeholder='Add Screen'
          value={screen}
          onChange={(e) => setScreen(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Processor</label>
        <input
          type='text'
          placeholder='Add Processor'
          value={processor}
          onChange={(e) => setProcessor(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Ram</label>
        <input
          type='text'
          placeholder='Add ram'
          value={ram}
          onChange={(e) => setRam(e.target.value)}
        />
      </div>
      <input type='submit' value='Save Phone' className='btn btn-block' />
    </form>
  )
}

export default AddPhone
