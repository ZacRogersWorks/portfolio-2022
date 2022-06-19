import React from "react"

const SuccessCard = ({ sending, sent, setSent }) => {
  const handleClose = () => {
    setSent(false)
  }

  return (
    <div className="success" role="dialog">
      <div className={`success__inner ${sent ? "translateX0" : "translateX180"}`}>
        <div className="success__grid">
          <p className='success__emoji'>{sending ? '💈' : '✨'}</p>
          <p>{sending ? 'Sending message...' : 'Your message has been sent!'}</p>
          <button tabIndex={sent ? 0 : -1} className="btn btn--sm" onClick={handleClose}>Ok thanks!</button>
        </div>
      </div>
    </div>
  )
}

export default SuccessCard;