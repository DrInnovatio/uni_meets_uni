import React from 'react'
import '../../App.css'
import { FaGooglePlay } from 'react-icons/fa';
import { FaAppStore } from 'react-icons/fa';

export default function Products() {
  return (
    <div className="products">
      <h4 >You can download the apps right now</h4>

      <div>
        <FaGooglePlay />
        <FaAppStore />
      </div>
    </div>
  )
}

