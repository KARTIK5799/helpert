import React, { useEffect } from 'react';
import linkedin from '../../assets/linkedin.png';
import Button from '../Button/Button';
import Styles from "./Card.module.css";

const Card = ({ onCancel }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div className={`flex h-screen w-screen justify-center items-center ${Styles.main} `}>
      <div className='w-375 h-256 absolute top-232 left-453 rounded-xl overflow-hidden bg-white shadow'>
        <div>
          <h1 className='font-poppins text-2xl font-bold leading-8 text-center pt-8 pb-8 pr-12 pl-12'>
            Add Linkedin Profile Link
          </h1>
          <div className='flex bg-gray-100 m-4 rounded-lg'>
            <div className='p-4'>
              <img src={linkedin} alt="" />
            </div>
            <div className='flex flex-col justify-start items-start p-2'>
              <h2 className='text-gray-500 text-sm'>Linkedin Account</h2>
              <h1>linkedin.com/in/yondu.dudu</h1>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center gap-2 m-2 p-2'>
          <Button text={"Cancel"} filled={false} onClick={onCancel} />
          <Button text={"Submit"} filled={true} />
        </div>
      </div>
    </div>
  );
};

export default Card;
