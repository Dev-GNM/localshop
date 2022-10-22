import React from "react";
import StoreCard from "./StoreCard";

function StoreReports({mStores}) {
  console.log(mStores)
 const renderStores = mStores.map((store)=>{
    return <StoreCard key={store.id} store={store}/>
})

  return (
    <div className="container">
      <div className="row g-3">

            {renderStores}
      </div>
    </div>
  );
}

export default StoreReports;
