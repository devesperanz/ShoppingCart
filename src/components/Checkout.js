import React from 'react';

function Checkout() {
  return (
    <div className='product-check container'>
      <main className='page payment-page'>
        <section className='payment-form dark'>
          <div className='container'>
            <form>
              <h3 className='title'>Billing Details</h3>
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label htmlFor='inputEmail4'>Firstname</label>
                  <input
                    type='text'
                    className='form-control'
                    id='inputEmail4'
                    placeholder='Enter Firstname'
                  />
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor='inputEmail4'>Lastname</label>
                  <input
                    type='text'
                    className='form-control'
                    id='inputEmail4'
                    placeholder='Enter Lastname'
                  />
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor='inputEmail4'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    defaultValue='Phone'
                    id='inputEmail4'
                    placeholder='Email'
                  />
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor='inputPassword4'>Phone</label>
                  <input
                    type='Phone'
                    className='form-control'
                    id='inputPhone4'
                    placeholder='Enter Phone Number'
                  />
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='inputAddress'>Address</label>
                <input
                  type='text'
                  className='form-control'
                  id='inputAddress'
                  placeholder='1234 Main St'
                />
              </div>

              <div className='card-details'>
                <h3 className='title'>Credit Card Details</h3>
                <div className='row'>
                  <div className='form-group col-sm-7'>
                    <label htmlFor='card-holder'>Card Holder</label>
                    <input
                      id='card-holder'
                      type='text'
                      className='form-control'
                      placeholder='Card Holder'
                      aria-label='Card Holder'
                      aria-describedby='basic-addon1'
                    />
                  </div>
                  <div className='form-group col-sm-5'>
                    <label htmlFor=''>Expiration Date</label>
                    <div className='input-group expiration-date'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='MM'
                        aria-label='MM'
                        aria-describedby='basic-addon1'
                      />
                      <span className='date-separator'>/</span>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='YY'
                        aria-label='YY'
                        aria-describedby='basic-addon1'
                      />
                    </div>
                  </div>
                  <div className='form-group col-sm-8'>
                    <label htmlFor='card-number'>Card Number</label>
                    <input
                      id='card-number'
                      type='text'
                      className='form-control'
                      placeholder='Card Number'
                      aria-label='Card Holder'
                      aria-describedby='basic-addon1'
                    />
                  </div>
                  <div className='form-group col-sm-4'>
                    <label htmlFor='cvc'>CVC</label>
                    <input
                      id='cvc'
                      type='text'
                      className='form-control'
                      placeholder='CVC'
                      aria-label='Card Holder'
                      aria-describedby='basic-addon1'
                    />
                  </div>
                  <div className='form-group col-sm-12'>
                    <button type='button' className='btn btn-primary btn-block'>
                      Proceed
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Checkout;
