let data;
let index;

function GetInfo() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const floor = urlParams.get('floor')
    console.log(floor);
}

const Previous = (count) => {
    if(count > 0){ count--;};
    return count;
}

const Next = (count) => {
    if(count <= 16){ count++;};
}
