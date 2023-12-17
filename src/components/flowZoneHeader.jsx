import React from 'react'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';

const FlowZoneHeader = () => {
  return (
    <div>
      <div>
      <div className='headingNav'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="20" fill="#3B3B3D" />
          <circle cx="20" cy="20" r="19.5" stroke="black" stroke-opacity="0.15" />
          <path d="M15.819 16.8004C13.9995 18.6737 13.0745 19.6698 13.0319 19.8013C12.9894 19.9392 12.9894 20.0519 13.0319 20.1772C13.1293 20.4404 18.4297 25.8846 18.6731 25.9723C19.166 26.1352 19.6528 25.5463 19.4155 25.0702C19.379 24.995 18.4114 23.9675 17.2735 22.7835L15.1923 20.6408H20.9855C25.1236 20.6408 26.8214 20.622 26.9309 20.5719C27.2961 20.3965 27.363 19.8076 27.0526 19.5069L26.8944 19.3565L21.0585 19.3252L15.2227 19.2939L17.3221 17.1325C19.6041 14.7831 19.6163 14.7643 19.3912 14.3446C19.2695 14.1065 19.0747 14 18.7644 14C18.5514 14 18.4236 14.1253 15.819 16.8004Z" fill="url(#paint0_linear_0_227)" />
          <defs>
            <linearGradient id="paint0_linear_0_227" x1="13" y1="14" x2="25.5" y2="26" gradientUnits="userSpaceOnUse">
              <stop stop-color="#16A9B1" />
              <stop offset="1" stop-color="#B5D654" />
            </linearGradient>
          </defs>
        </svg>
        <span className='headingText'>Flow Zone</span>
        </div>
        <div style={{zIndex:'1000'}} className='flowZone'>
          <select id="dropdown" style={{zIndex:'1000'}}>
            <option value="About flow Zone">About flow Zone</option>
            <option value="About MindPeers">About MindPeers</option>
            <option value="About MyCompany">About MyCompany</option>
          </select>
      </div>
      </div>
      

    </div>

  )
}

export default FlowZoneHeader