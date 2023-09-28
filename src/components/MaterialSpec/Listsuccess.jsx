
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";


const ListOrderSuccess = (props) => {
  const [orderReferenceNum, setOrderReferenceNum] = useState("");
 
  return (
    <div className="text-center mt-5">
      <h3>
       
        Your List is Saved  Successfully
      </h3>
     
    </div>
  );
};

export default ListOrderSuccess;
