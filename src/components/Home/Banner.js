import React from 'react';

  let styles = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
  }


const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="bannerbanner">
      <div className="container">
        <div/> &nbsp;
        <div/> &nbsp;
        <div/> &nbsp;
        <h1 className="logo-font">
          the new way to shop
        </h1>
        <div/> &nbsp;
        <div/> &nbsp;
        <p className="bannertitle">welcome to the TailoredBrands virtual fitting room where we find clothes that look good on you so you don't have to. </p>
        <div/> &nbsp;
        <div/> &nbsp;
        <div/> &nbsp;
        <div/> &nbsp;
          <div/> &nbsp;
        <div/> &nbsp;
        <div/> &nbsp;
        <div/> &nbsp;
      </div>
    </div>
  );
};

export default Banner;
