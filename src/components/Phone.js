import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'


const Phone = ({ phone, onDelete }) => {


  const [showDetails, setShowDetails] = useState(false)


  const onShowDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div
      className="phone reminder"
      onClick={onShowDetails}

    >
      <h3>
        {phone.name}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(phone.id)}
        />
      </h3>
      <p>{phone.manufacturer}</p>
      {showDetails && <div className="phone-details">
        <p>Details:</p>
        <p>{phone.description}</p>
        <p>Color: {phone.color}</p>
        <p>Price: {phone.price}</p>
        <p>Screen: {phone.screen}</p>
        <p>Processor: {phone.processor}</p>
        <p>Ram: {phone.ram}</p>

      </div>}
    </div>
  )
}

export default Phone
