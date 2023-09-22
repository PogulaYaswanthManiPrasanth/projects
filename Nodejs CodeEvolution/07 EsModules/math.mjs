/*  
----------pattern 1-----------

const add =(x,y)=>{
    return x + y;
}

export default add;
 */
/* 
 ----------pattern 2-----------

export default (x,y)=>{
    return x + y;
} */

/*  ----------pattern 3 default exports-----------

const add =(x,y)=>{
    return x + y;
}

const sub = (x,y)=>{
    return x -y ;
}

export default {
    add,
    sub
} */

// pattern 4 Named exports

export const add =(x,y)=>{
    return x + y;
}

export const sub = (x,y)=>{
    return x -y ;
}

