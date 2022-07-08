

const dufaultState={
    email:123,
    password:123,
    paths:'/'
    
}
export default function reducer(preState=dufaultState,action){
   
if(action.type==='login'){
    console.log(JSON.stringify(action.data.password))
    if(action.data.password===dufaultState.password && action.data.email===dufaultState.email){
        dufaultState.paths='/homeMain'
    }
}
return preState

}