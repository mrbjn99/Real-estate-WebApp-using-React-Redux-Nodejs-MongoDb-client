import React from "react";
import { IoLocationSharp } from 'react-icons/io5';
import { AiOutlineSchedule } from "react-icons/ai";
import { ImPriceTags } from "react-icons/im";
import moment from "moment";
import pimage2 from '../../../images/p2.png';

export default function Post({ post }) {
  return (
    <div className='p-box'>
      <img src={pimage2} alt='product' />
      <h5> {post.Name}</h5>
      <p><IoLocationSharp/> {post.Location}</p>
      
      <p className='price' ><ImPriceTags/> {post.Price} VND</p>
      <p> <AiOutlineSchedule/> {moment(post.Time).format('DD/MM/YYYY')}</p>
    </div>
    
  )
}