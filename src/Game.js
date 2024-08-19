import React from "react";
class Game extends React.Component{
 state={
     values : [
         ['','',''],
         ['','',''],
         ['','','']
     ],
     sign: true,
     turn: "X turn",
     winner:"",
     counter: 0,
     available: true
 }
 putValue=(x,y)=>{
     const currentValues = this.state.values;
     let currentSign = this.state.sign;
     let currentCounter = this.state.counter;
     if(currentValues[x][y]==='' && this.state.available) {
         currentCounter++;
         if (currentSign) currentValues[x][y] = 'X';
         else currentValues[x][y] = 'O';
         currentSign = !currentSign;
         this.setState({values:currentValues ,sign:currentSign, turn:currentSign ? "X turn" : "O turn",counter: currentCounter})
         if (currentCounter>=5)
             this.check();
         if (currentCounter>=9)
             this.setState({winner:"No Winner"})
     }
 }

 check =()=>{
     const currentValues = this.state.values;
     let isAvailable = this.state.available;
     let checkedWinner ;
     for(let i =0 ; i<currentValues.length; i++){
         if ((currentValues[i][0] ==='X' && currentValues[i][1] ==='X' && currentValues[i][2] ==='X')||
             (currentValues[0][i] ==='X' && currentValues[1][i] ==='X' && currentValues[2][i] ==='X')){
                 checkedWinner = "X won";
                 isAvailable = false;
         }
         if ((currentValues[i][0] ==='O' && currentValues[i][1] ==='O' && currentValues[i][2] ==='O')||
             (currentValues[0][i] ==='O' && currentValues[1][i] ==='O' && currentValues[2][i] ==='O')){
                  checkedWinner = "O won";
                   isAvailable = false;
         }
         }
     if((currentValues[0][0] ==='X' && currentValues[1][1] ==='X' && currentValues[2][2] ==='X')||
         (currentValues[0][2] ==='X' && currentValues[1][1] ==='X' && currentValues[2][0] ==='X')){
         checkedWinner = "X won";
         isAvailable = false;
     }
     if((currentValues[0][0] ==='O' && currentValues[1][1] ==='O' && currentValues[2][2] ==='O')||
         (currentValues[0][2] ==='O' && currentValues[1][1] ==='O' && currentValues[2][0] ==='O')){
         checkedWinner = "O won";
         isAvailable = false;
     }

     this.setState({winner: checkedWinner , available: isAvailable})
 }
 resetGame=()=>{
     const prevValues =  [
         ['','',''],
         ['','',''],
         ['','','']
     ];
     this.setState({values: prevValues, sign:true, turn:"X turn", counter:0, winner:"", available:true})
 }

    render() {
     return(<div> <h1>X-O Game</h1>
         <table>
         {this.state.values.map((x, xIndex)=>{
             return(
                 <tr>
                     {x.map((y,yIndex)=>{
                         return(
                             <td onClick={()=>this.putValue(xIndex,yIndex)}>{y}</td>
                         ) })}
                 </tr>
             )
         })}</table>
         <div><h2>{!this.state.winner && this.state.turn}</h2> </div>
         <div><h2>{this.state.winner}</h2></div>
         <button onClick={this.resetGame} >Reset Game</button>

     </div>)
 }
}export default Game;