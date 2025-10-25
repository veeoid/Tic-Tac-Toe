let currentPlayer = 'X';
let arr = Array(9).fill(null);

function getWinner(){
    if ((arr[0]!=null && arr[0] == arr[1] && arr[0] == arr[2]) ||
        (arr[3]!=null && arr[3] == arr[4] && arr[3] == arr[5]) ||
        (arr[6]!=null && arr[6] == arr[7] && arr[6] == arr[8]) ||
        (arr[0]!=null && arr[0] == arr[4] && arr[0] == arr[8]) ||
        (arr[2]!=null && arr[2] == arr[4] && arr[2] == arr[6])){
            return true
        }
    return false
}

function resetGame(){
    for (let i=0; i<9; i++){
        arr[i] = null;
        document.getElementById(i).innerText = '';
    }
}

function handleClick(el){
    const id = Number(el.id);
    if (arr[id] != null) {return;}
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;

    if (getWinner() == true){
        console.log(`${currentPlayer} won this game!`)
        alert(`${currentPlayer} won this game!`);
        // notify_alert = document.createElement('alert');
        // notify_alert.innerText = `${currentPlayer} won this game!`;
        // document.body.appendChild(notify_alert);
        resetGame();
    }
    currentPlayer = currentPlayer === 'X'?'O':'X';
    
    console.log(arr)
}

