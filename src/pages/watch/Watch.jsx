import React from "react";
import './watch.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import trailer from '../../components/listItem/trailer.mp4'

export default function Watch () {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIcon />
        Home
      </div>
      <video className="video"
        src={trailer}
        autoPlay={true} 
        progress
        controls />
    </div>
  )
}