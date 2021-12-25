import Phone from './Phone'

const Phones = ({ phones, onDelete, onToggle }) => {
  return (
    <>
      {phones.map((phone, index) => (
        <Phone key={index} phone={phone} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  )
}

export default Phones
