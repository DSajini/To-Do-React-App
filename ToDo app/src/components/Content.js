import React from 'react'
import Todo from './Todo'

function Content(){
    const date= new Date()
    const hours = date.getHours()


    const style = {fontSize:'40px'}  //cant use - with JS 

    let time

    if(hours<12){
        time='morning'
        style.color='#123456'
    }
    else if(hours<18 && hours>=12){
        time='afternoon'
        style.color='#04757F'
    }
    else{
        time='night'
        style.color='#125656'
    }
    return(
        <div>
            <h1 style={style}>Hey...Good {time}...!!</h1>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>

        </div>
    );
}
export default Content;