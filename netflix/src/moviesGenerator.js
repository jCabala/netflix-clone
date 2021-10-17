function* moviesGenerator(){
    const sliders = ['comedy', 'horror', 'series']
    
    for(let e of sliders){
        yield e;
    }
}

export default moviesGenerator;