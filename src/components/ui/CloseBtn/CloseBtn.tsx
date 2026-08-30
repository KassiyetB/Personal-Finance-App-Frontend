const CloseBtn = ({onClick}: { onClick?: () => void }) => {
  return (
    <button 
    onClick={onClick}
    
    style={{
        border: "none",
        background: "none"
    }}>
        x
    </button>
  )
}

export default CloseBtn