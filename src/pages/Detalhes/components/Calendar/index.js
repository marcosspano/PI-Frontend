import React ,{ useState } from 'react';
import styled from "./styles.module.scss";
import { CalendarDesktop } from './CalendarDesktop';

export const Calendar = ({selected, setStartDate, setEndDate, startDate, endDate}) => {
    
  return (
        <div className={styled.box_calendar}>
          <CalendarDesktop selected={selected} setStartDate={setStartDate} setEndDate={setEndDate} startDate={startDate} endDate={endDate}/>
        </div>
  );
};
