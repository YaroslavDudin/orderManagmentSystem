import { idGenerate, userName, userBalance } from "./userInfo.js"
// order = {
//     id : idGenerate(),
//     userId : user.id,
//     state : [
//         {created : CreatedState()},
//         {paid : PaidState()},
//         {shipped : ShippedState()},
//         {delivered : DeliveredState()},
//         {cancelled : CancelledState() }
//     ],
//     history: this.obshayState,
// } 

class User {
    constructor(id,name,balance){
        this.id = id
        this.name = name
        this.balance = balance
    }
    infoAvouMe(){
        console.log(`${this.id} , ${this.name}, ${this.balance}`);
    }
}
const user1 = new User(idGenerate(),userName(),userBalance())
user1.infoAvouMe();
class Order {
    constructor(id,userId,state,history) {
        this.id = id
        this.userId = userId
        this.state = [
            {created : CreatedState()},
            {paid : PaidState()},
            {shipped : ShippedState()},
            {delivered : DeliveredState()},
            {cancelled : CancelledState() }
    ],
        this.history = []
        this.states = new ActiveState() // изменить 
    }

    pay(){
        
    }

    ship(){

    }

    deliver(){

    }

    cancel(){

    }

    return(){

    }

    refund(){

    }

}