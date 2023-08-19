const myModule ={
    /**
     * 
     * @param {number} s1 
     * @param {number} s2 
     * @returns 
     */
    add(s1, s2) {
        return s1+s2
    },
    LogToConsole(text){
        console.log(text)
    }
}

const myName = "Alper";

const getDate = () =>{
    return new Date(); 
}

module.exports={
    myModule,
    myName,
    getDate,

}