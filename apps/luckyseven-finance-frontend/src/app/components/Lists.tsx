import React from 'react';

function lists() {
  return (
    <div className="list-group">
      <a
        href="#"
        className="list-group-item list-group-item-action"
        aria-current="true"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Transaction 1</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">amount</p>
        <small>description</small>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Transaction 2</h5>
          <small>4 days ago</small>
        </div>
        <p className="mb-1">amount</p>
        <small>description</small>
      </a>
      <a href="#" className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">Transaction 3</h5>
          <small>5 days ago</small>
        </div>
        <p className="mb-1">amount</p>
        <small>description</small>
      </a>
    </div>
  );
}

export default lists;
