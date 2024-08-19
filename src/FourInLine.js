import React from "react";
class FourInLine extends React.Component{
    state ={
        values:[
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','',''],
            ['','','','','','','']
        ],
        sign: true,
        counter:0,
        turn:"Red Turn",
        winner:"",
        available:true
    }
    putValue=(x,y)=>{
        const currentValues = this.state.values;
        let currentSign = this.state.sign;
        let currentCounter = this.state.counter;
        if((x===5 || !(currentValues[x+1][y] === ''))&& (currentValues[x][y] === '') && (this.state.available)) {
            currentCounter++;
           if(currentSign) currentValues[x][y]='X';
           else currentValues[x][y]='O';
            currentSign=!currentSign;
            this.setState({values:currentValues, sign:currentSign, turn: currentSign ? "Red Turn" : "Yellow Turn",counter:currentCounter})
            if(currentCounter>=7)
                this.check();
            if(currentCounter>=42)
              this.setState({winner:"No Winner"})
        }
    }
    check = () => {
        const currentValues = this.state.values;
        let isAvailable = this.state.available;
        let checkedWinner;
        for (let i= 0; i < 6; i++) {
            for (let j= 0; j < 4; j++) {
                if (currentValues[i][j] === 'X' && currentValues[i][j + 1] === 'X' && currentValues[i][j + 2] === 'X' && currentValues[i][j + 3] === 'X') {
                    checkedWinner = "Red won";
                    isAvailable = false;
                }
                if (currentValues[i][j] === 'O' && currentValues[i][j + 1] === 'O' && currentValues[i][j + 2] === 'O' && currentValues[i][j + 3] === 'O') {
                    checkedWinner = "Yellow won";
                    isAvailable = false;
                }
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 4; j++) {
                if (currentValues[i][j] === 'X' && currentValues[i+1][j+1] === 'X' && currentValues[i+2][j+2] === 'X' && currentValues[i+3][j+3] === 'X') {
                    checkedWinner = "Red won";
                    isAvailable = false;
                }
                if (currentValues[i][j] === 'O' && currentValues[i+1][j+1] === 'O' && currentValues[i+2][j+2] === 'O' && currentValues[i+3][j+3] === 'O') {
                    checkedWinner = "Yellow won";
                    isAvailable = false;
                }
            }
        }
        for (let i= 0; i < 3; i++) {
            for (let j= 0; j < 7; j++) {
                if (currentValues[i][j] === 'X' && currentValues[i+1][j] === 'X' && currentValues[i+2][j] === 'X' && currentValues[i+3][j] === 'X') {
                    checkedWinner = "Red won";
                    isAvailable = false;
                }
                if (currentValues[i][j] === 'O' && currentValues[i+1][j] === 'O' && currentValues[i+2][j] === 'O' && currentValues[i+3][j] === 'O') {
                    checkedWinner = "Yellow won";
                    isAvailable = false;
                }
            }
        }
        for (let i= 0; i < 3; i++) {
            for (let j= 3; j < 7; j++) {
                if (currentValues[i][j] === 'X' && currentValues[i+1][j-1] === 'X' && currentValues[i+2][j-2] === 'X' && currentValues[i+3][j-3] === 'X') {
                    checkedWinner = "Red won";
                    isAvailable = false;
                }
                if (currentValues[i][j] === 'O' && currentValues[i+1][j-1] === 'O' && currentValues[i+2][j-2] === 'O' && currentValues[i+3][j-3] === 'O') {
                    checkedWinner = "Yellow won";
                    isAvailable = false;
                }
            }
        }
        this.setState({winner: checkedWinner, available: isAvailable})
    }
    resetGame = () =>{
    const prevValues = [
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','',''],
        ['','','','','','','']
    ]
        this.setState({values: prevValues, sign: true ,turn:"Red Turn", winner:"", available:true})
    }
    chooseClass=(x ,y)=>{
        const currentValues =this.state.values;
        let currentClass = "inLineTd"
        if(currentValues[x][y]==='X') currentClass ="inLineTdRed"
        if(currentValues[x][y]==='O') currentClass= "inLineTdYellow";
        return currentClass;
    }
    render() {
        return(<div><h1>Four In Line</h1>
           <table className={"inLine"}>
            {this.state.values.map((x, xIndex)=>{
                return(
                    <tr>
                        {x.map((y,yIndex)=>{
                            return(
                                <td onClick={()=>this.putValue(xIndex,yIndex)} className={this.chooseClass(xIndex,yIndex)}></td>
                            ) })}
                    </tr>
                )
            })}
           </table>
            <div><h2>{!this.state.winner && this.state.turn}</h2></div>
            <div><h2>{this.state.winner}</h2></div>
            <button onClick={this.resetGame}>Reset Game</button>
        </div>)
    }
} export default FourInLine;