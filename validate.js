function validateInput(input) {
    console.log(input);

    if(input.value.length < 3 || input.value.length > 15) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    } else {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    }
}
