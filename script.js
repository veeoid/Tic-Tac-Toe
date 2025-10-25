let currentPlayer = 'X';
let arr = Array(9).fill(null);

function getWinner(){
    if ((arr[0]!=null && arr[0] == arr[1] && arr[0] == arr[2]) ||    // horizontal top
        (arr[3]!=null && arr[3] == arr[4] && arr[3] == arr[5]) ||    // horizontal middle
        (arr[6]!=null && arr[6] == arr[7] && arr[6] == arr[8]) ||    // horizontal bottom
        (arr[0]!=null && arr[0] == arr[3] && arr[0] == arr[6]) ||    // vertical left
        (arr[1]!=null && arr[1] == arr[4] && arr[1] == arr[7]) ||    // vertical middle
        (arr[2]!=null && arr[2] == arr[5] && arr[2] == arr[8]) ||    // vertical right
        (arr[0]!=null && arr[0] == arr[4] && arr[0] == arr[8]) ||    // diagonal top-left to bottom-right
        (arr[2]!=null && arr[2] == arr[4] && arr[2] == arr[6])){     // diagonal top-right to bottom-left
            return true
        }
    return false
}

function resetGame(){
    for (let i=0; i<9; i++){
        arr[i] = null;
        document.getElementById(i).innerText = '';
        document.getElementById(i).classList.remove('player1-color');
        document.getElementById(i).classList.remove('player2-color');
    }
}

function handleClick(el){
    const id = Number(el.id);
    if (arr[id] != null) {return;}
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;

    if (currentPlayer == 'X'){
        el.classList.add('player1-color');
    } else {
        el.classList.add('player2-color');
    }

    if (getWinner() == true){
        console.log(`${currentPlayer} won this game!`);
        setTimeout(() => {
            alert(`${currentPlayer} won this game!`);
            resetGame();
        }, 300); // 300ms delay
        return;
    }

    currentPlayer = currentPlayer === 'X'?'O':'X';
    console.log(arr)
}

