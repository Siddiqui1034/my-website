export function checkIsInViewPort(divRef){

    const {top, left, right, bottom, width, height } = divRef?.getBoundingClientRect()

    if((top+height/2)>=0 && (left+width/2)>=0 && (right-width/2)<= window.innerWidth && (bottom-height/2)<= window.innerHeight){
        return true;
    }
    
    return false;

}