import React, { useState } from 'react';
export default function Logo(props) {
  
  return (
    <div>
     <img  src={`${process.env.PUBLIC_URL}/${'image-1.webp'}`} class='App-logo'/>
    </div>
  );
}