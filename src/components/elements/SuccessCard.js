import React from "react"

const SuccessCard = ({ sending, sent, setSent }) => {
  const handleClose = () => {
    setSent(false)
  }

  return (
    <div className="success" role="dialog">
      <div className={`success__inner ${sent ? "translateX0" : "translateX180"}`}>
        <div className="success__grid">
          <p className='success__emoji'>
            {sending
              ? <svg className='success__emoji' xmlns="http://www.w3.org/2000/svg" width="36" height="48" viewBox="0 0 36 48" fill="currentColor">
                <path id="Icon_awesome-hourglass-half" data-name="Icon awesome-hourglass-half" d="M33.75,0H2.25A2.25,2.25,0,0,0,0,2.25v1.5A2.25,2.25,0,0,0,2.25,6c0,8.528,4.783,15.725,11.329,18C7.033,26.275,2.25,33.472,2.25,42A2.25,2.25,0,0,0,0,44.25v1.5A2.25,2.25,0,0,0,2.25,48h31.5A2.25,2.25,0,0,0,36,45.75v-1.5A2.25,2.25,0,0,0,33.75,42c0-8.528-4.783-15.725-11.329-18C28.967,21.725,33.75,14.528,33.75,6A2.25,2.25,0,0,0,36,3.75V2.25A2.25,2.25,0,0,0,33.75,0ZM26.711,36H9.289c1.6-4.387,4.884-7.5,8.711-7.5S25.112,31.612,26.711,36Zm0-24H9.289A17.589,17.589,0,0,1,8.25,6h19.5a17.591,17.591,0,0,1-1.037,6Z" />
              </svg>
              : <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
                <path id="Icon_awesome-thumbs-up" data-name="Icon awesome-thumbs-up" d="M9.75,21H2.25A2.25,2.25,0,0,0,0,23.25v22.5A2.25,2.25,0,0,0,2.25,48h7.5A2.25,2.25,0,0,0,12,45.75V23.25A2.25,2.25,0,0,0,9.75,21ZM6,44.25A2.25,2.25,0,1,1,8.25,42,2.25,2.25,0,0,1,6,44.25ZM36,7.636c0,3.977-2.435,6.207-3.12,8.864h9.537A5.6,5.6,0,0,1,48,21.947a6.788,6.788,0,0,1-1.822,4.612l-.01.01a7.831,7.831,0,0,1-.873,7.45,7.414,7.414,0,0,1-1.536,7.008,4.977,4.977,0,0,1-.576,4.184C41.269,47.961,36.527,48,32.516,48h-.267c-4.527,0-8.232-1.65-11.209-2.974A14.754,14.754,0,0,0,16.1,43.509,1.125,1.125,0,0,1,15,42.384V22.343a1.124,1.124,0,0,1,.334-.8c3.714-3.67,5.311-7.555,8.355-10.6,1.388-1.391,1.893-3.491,2.381-5.522C26.486,3.684,27.358,0,29.25,0,31.5,0,36,.75,36,7.636Z" />
              </svg>

            }

          </p>


          <p>{sending ? 'Sending message...' : `Your message has been sent. I'll get back to you ASAP!`}</p>
          <button tabIndex={sent ? 0 : -1} className="sent-btn" onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path id="Icon_material-arrow_back" data-name="Icon material-arrow_back" d="M30,16.5H11.745L20.13,8.115,18,6,6,18,18,30l2.115-2.115L11.745,19.5H30Z" transform="translate(-6 -6)" />
            </svg>

          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessCard;