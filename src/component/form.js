import { useState } from "react";
import { nanoid } from "nanoid";

function Form({
  addContact,
  first,
  last,
  address,
  phone,
  setFirst,
  setLast,
  setAddress,
  setPhone,
}) {
  const handleFirst = (e) => {
    setFirst(e.target.value);
  };

  const handleLast = (e) => {
    setLast(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      first,
      last,
      address,
      phone,
    };

    addContact(newContact);
    setFirst("");
    setLast("");
    setAddress("");
    setPhone("");
  };

  return (
    <form>
      <label htmlFor="firstName"></label>
      <input
        type="text"
        id="firstName"
        value={first}
        onChange={handleFirst}
        placeholder="First Name"
        required
      ></input>
      <label htmlFor="lastName"></label>
      <input
        type="text"
        id="lastName"
        value={last}
        onChange={handleLast}
        placeholder="Last Name"
        required
      ></input>
      <label htmlFor="address"></label>
      <input
        type="text"
        id="address"
        value={address}
        onChange={handleAddress}
        placeholder="Address"
      ></input>
      <label htmlFor="phoneNumber"></label>
      <input
        type="tel"
        id="phoneNumber"
        value={phone}
        onChange={handlePhone}
        placeholder="Phone Number"
        required
      ></input>
      <div class="buttonArea">
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
