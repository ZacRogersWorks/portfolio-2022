import React, { useContext, useEffect } from 'react'
import SiteContext, { useSiteContext } from '../context/SiteContext'

const Toggle = () => {
    
    const { darkMode, darkModeToggle } = useSiteContext();

    return (
        <label className="switch">
            <input
                className='dmcheck'
                type='checkbox'
                checked={darkMode}
                onChange={darkModeToggle}
            />
            <span className="slider"></span>
            <svg className="sun" xmlns="http://www.w3.org/2000/svg" width="15" height="15.931" viewBox="0 0 15 15.931">
                <g id="Icon_feather-sun" data-name="Icon feather-sun" transform="translate(1 1)">
                    <path id="Path_1" data-name="Path 1" d="M17.653,14.076A3.576,3.576,0,1,1,14.076,10.5a3.576,3.576,0,0,1,3.576,3.576Z" transform="translate(-7.576 -7.111)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path id="Path_2" data-name="Path 2" d="M18,1.5V2.931" transform="translate(-11.5 -1.5)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path id="Path_3" data-name="Path 3" d="M18,31.5v1.431" transform="translate(-11.5 -19)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path id="Path_4" data-name="Path 4" d="M6.33,6.33,7.346,7.346" transform="translate(-4.311 -4.162)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path id="Path_5" data-name="Path 5" d="M27.54,27.54l1.016,1.016" transform="translate(-17.575 -16.793)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path id="Path_6" data-name="Path 6" d="M1.5,18H2.931" transform="translate(-1.5 -11.035)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path id="Path_7" data-name="Path 7" d="M31.5,18h1.431" transform="translate(-19.931 -11.035)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path id="Path_8" data-name="Path 8" d="M6.33,28.556,7.346,27.54" transform="translate(-4.311 -16.793)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path id="Path_9" data-name="Path 9" d="M27.54,7.346,28.556,6.33" transform="translate(-17.575 -4.162)" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
            </svg>
            <svg className="moon" xmlns="http://www.w3.org/2000/svg" width="13" height="14.546" viewBox="0 0 13 14.546">
                <path id="Icon_awesome-moon" data-name="Icon awesome-moon" d="M9.186,14.546a7.259,7.259,0,0,0,5.65-2.693.341.341,0,0,0-.328-.55A5.7,5.7,0,0,1,10.622.753a.341.341,0,0,0-.107-.632A7.273,7.273,0,1,0,9.186,14.546Z" transform="translate(-1.913 0)" />
            </svg>
        </label>
    )
}

export default Toggle