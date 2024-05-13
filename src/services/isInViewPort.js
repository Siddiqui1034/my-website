export function checkIsInViewPort(divRef){

    const {top, left, right, bottom} = divRef?.getBoundingClientRect()

    if(top>=0 && left>=0 && right<= window.innerWidth && bottom<= window.innerHeight){
        return true;
    }
    
    return false;

}