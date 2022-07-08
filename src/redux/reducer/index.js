

const dufaultState={
    email:'123',
    password:'123',
    paths:'/'
    
}
export default function reducer(preState=dufaultState,action){
   
if(action.type==='login'){   
    if(action.data.password===dufaultState.password && action.data.email===dufaultState.email){
        dufaultState.paths='/homeMain'
        console.log(JSON.stringify(preState.paths))
    }else{
        alert('error')
    }
}
if(action.type==='register'){
    console.log('reducer')
    console.log(action.data.email)
    dufaultState.email=action.data.email;
    dufaultState.password=action.data.password;
}
return preState

}