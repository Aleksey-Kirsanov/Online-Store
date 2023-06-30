import React from "react";

const PaymentPage = () => {
  return (
    <>
      <div
        className='modal fade'
        id='exampleModal'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Оплата заказа
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              voluptatem?
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-bs-dismiss='modal'
              >
                Отменить
              </button>
              <button
                type='button'
                className='btn btn-primary'
                data-bs-toggle='modalTrue'
                data-bs-target='#exampleModal'
              >
                Оплатить
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default PaymentPage;
