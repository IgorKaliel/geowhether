import { FormEvent, useState } from 'react';

import { BiCurrentLocation } from 'react-icons/bi';

import styles from './WheatherForm.module.css';


export function WheatherForm() {


  function handleSearchAddress(event: FormEvent) {
    event.preventDefault();

  }

  return (
    <>
      <div className={styles.wheatherWrapper}>
        <form className={styles.wheatherAddress} onSubmit={handleSearchAddress}>
          
          <label htmlFor="zipcode">Zipcode</label>
          <input 
            name="zipcode"
            type="text" 
            placeholder="Zip: " 
          />
          
          <label htmlFor="state">State</label>

          <input 
            name="state"
            type="text" 
            placeholder="State: " 
          />
          
          <label htmlFor="street">Street address</label>

          <input 
            name="street"
            type="text" 
            placeholder="Street address: " 
          />
          <div>
            <button type="reset">
              reset
            </button>
            <button type="submit">
              Search <BiCurrentLocation size={20} />
            </button>

          </div>
        </form>
      </div>
    </>
  );

}