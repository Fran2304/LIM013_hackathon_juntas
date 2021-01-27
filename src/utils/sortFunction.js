const sortArray = (array, value) => {
    if( value === 'menor'){
        array.sort((a,b) => {
            return a.total - b.total
        })
    }else{
        array.sort((a,b) => {
            return b.total - a.total
        })
    }  
}

export default sortArray;