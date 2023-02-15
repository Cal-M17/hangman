
//sets the notification and timeout so it disappears
export function showNotification(setter) {
    setter(true);
    setTimeout(() => {
        setter(false);
    }, 1000);
}

//checks for win/lose
export function checkWin(correct, wrong, word) {
    let status = 'win';

    //check for win
    word.split('').forEach(letter => {
        if(!correct.includes(letter)) {
            status = '';
        }
    });

    //check loss
    if(wrong.length === 6) status = 'lose'

    return status
}