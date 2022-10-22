import React from 'react';
import { useNavigate } from 'react-router-dom';

function StoreCard({store}) {
    let storeId = store.id 
    const navigate  = useNavigate()
    function handleClick(){
        navigate(`/storepage/${storeId}`)
    }
    return (
        <div className="col-12 col-md-6 col-lg-4" onClick={handleClick}>
        <div className="card">
          <img
            src=""
            className="card-img-top"
            alt="A Street in Europe"
          ></img>
          <div className="card-body">
            <h5 className="card-title">{store.name}</h5>
            <p className="card-text">
             {store.name}
            </p>
            <a href="#" className="btn btn-primary">
              Go to Store
            </a>
          </div>
        </div>
      </div>   
    );
}

export default StoreCard;