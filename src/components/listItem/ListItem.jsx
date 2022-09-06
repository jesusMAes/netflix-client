import React from "react";
import './listitem.scss';
import PlayArrow from "@mui/icons-material/PlayArrow";
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useState } from "react";
import trailer from './trailer.mp4'


export default function ListItem ({index}) {
  const [isHovered, setIsHovered] =useState(false);
  // const trailer = '../../../public/Images/trailer.mp4'
  
  return (
    <div className="listItem"
    //  style={{left:isHovered && index * 225 -50}}
     onMouseEnter={() => setIsHovered(true)}
     onMouseLeave={() => setIsHovered(false)} >
      <img src="https://static1.elcorreo.com/www/multimedia/202209/01/media/cortadas/sandman-k4HI-U1701121447502Pa-624x385@RC.jpg" alt="" />
      {isHovered && (
      <>
      <video
       src={trailer}
      //  style={{left:isHovered && index * 225 +10}}
       autoPlay={true}
       type='video/mp4'
        />
      

      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon"/>
          <AddIcon className="icon"/>
          <ThumbUpOffAltIcon className="icon"/>
          <ThumbDownOffAltIcon className="icon"/>
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 minutes</span>
          <span  className="limit">+16</span>
          <span>2022</span>
        </div>
        <div className="desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis perferendis voluptatem libero aperiam eligendi
        </div>
        <div className="genre">Fantasy</div>
      </div></>
      )}
    </div>
  )
}