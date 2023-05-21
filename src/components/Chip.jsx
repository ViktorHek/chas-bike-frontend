import '../styles/components.css'

function Chip(prop) {
  return (
    <div className="main-chip-container">
      <div className="inner-chip-container">
        <span className="chip-text">{prop.text}</span>
      </div>
    </div>
  )
}

export default Chip