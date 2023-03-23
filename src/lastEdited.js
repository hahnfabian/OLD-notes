const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jul", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"];


function newEdit() {
    var today = new Date();
    var lastEdited = months[today.getMonth()] +' '+today.getDate();

    localStorage.lastEdited = lastEdited;
}

export function updateEdited() {
    newEdit();
}

export function lastEdited() {
    return (
        localStorage.lastEdited
    )
}

