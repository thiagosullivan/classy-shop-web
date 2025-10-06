import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <div className="top-strip py-2 border-t-[1px] border-b-[1px] border-gray-200">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col-1 w-[50%]">
              <p className="text-[12px] font-[500]">Get up to 50% off new season styles, limited time</p>
            </div>
            <div className="flex items-center justify-end col-2">
              <ul className='flex items-center gap-3'>
                <li className='list-none'>
                  <Link to="/help-center" className='text-[12px] link font-[500] transition'>Help Center</Link>
                </li>                
                <li className='list-none'>
                  <Link to="/order-tracking" className='text-[12px] link font-[500] transition'>Order Tracking</Link>
                </li>                
              </ul>
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header