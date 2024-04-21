import REACT from 'react'
import { MadeGoal,MissedGoal } from './MadeGoal';

const Conditional=(props)=>{
    const IsGoal = props.IsGoal;

    if(IsGoal){
        return<MadeGoal/>
    }
    
        return<MissedGoal/>
    
}
export default Conditional