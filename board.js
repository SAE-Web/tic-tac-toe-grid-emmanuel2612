window.onload = () => {

    const middleSquare = document.querySelector('#m');

    middleSquare.onchange = () => {
        
        if (middleSquare.value === 'x' || middleSquare.value === 'X'){
            middleSquare.style.backgroundColor = 'blue';
            middleSquare.style.color = 'white';
            middleSquare.disabled = true;
        }

        else if (middleSquare.value === 'o' || middleSquare.value === 'O'){
            middleSquare.style.backgroundColor = 'green';
            middleSquare.style.color = 'white';
            middleSquare.disabled = true;
        }
    }

}