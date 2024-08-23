<template>

    <div class="numeric-stepper">
        <!-- <button type="button" onclick="stepDown()"></button> -->
        <input type="number" id="stepper" value="25" min="1" max="60" step="1">
        <!-- <button type="button" onclick="stepUp()"></button> -->
    </div>


</template>

<script>
// function stepUp() {
//     var stepper = document.getElementById("stepper");
//     var max = parseInt(stepper.max);
//     if (parseInt(stepper.value) < max) {
//         stepper.value = parseInt(stepper.value) + 1;
//     }
// }

// function stepDown() {
//     var stepper = document.getElementById("stepper");
//     var min = parseInt(stepper.min);
//     if (parseInt(stepper.value) > min) {
//         stepper.value = parseInt(stepper.value) - 1;
//     }
// }
</script>

<style>
/* body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.numeric-stepper {
    display: inline-flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius:20px;
    padding: 5px;
}

.numeric-stepper input[type="number"] {
    width: 50px;
    text-align: center;
    border: none;
    outline: none;
}

.numeric-stepper button {
    border: none;
    background-color: #f0f0f0;
    padding: 5px;
    cursor: pointer;
    font-size: 16px;
}

.numeric-stepper button:hover {
    background-color: #ddd;
} */
</style>