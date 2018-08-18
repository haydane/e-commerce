import React from 'react';
import ButtonSwitch from '../components/ButtonSwitch';
import CategoryOption from '../components/CategoryOption';
export default class Home extends React.Component 
{
     render()
     {
          return(
               <div>
                    <ButtonSwitch/>
                    <CategoryOption/>
               </div>
          );
     }
}