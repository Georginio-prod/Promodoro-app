<template>
    <div class="h-screen w-full flex flex-col justify-center items-center bg-bgp ">
        <div class="text-center text-white">
            <p class="text-3xl font-bold">pomodoro</p>
        </div>
        <div
            class="flex bg-bgbtn w-96 rounded-full justify-between px-2 py-2 text-sm font-bold mt-14 text-ft text-opacity-40 ">
            <button class="px-6 py-3 bg-transparent rounded-full hover:bg-bgbout hover:text-fth">pomodoro</button>
            <button class="px-6 py-3 bg-transparent rounded-full hover:bg-bgbout hover:text-fth"> short break</button>
            <button class="px-6 py-3 bg-transparent rounded-full hover:bg-bgbout hover:text-fth">long break</button>
        </div>
        <div
            class="relative w-96 h-96 rounded-full mt-11 bg-gradient-to-br from-cercle via-cercle1 to-cercle1 p-4 shadow-custom">
            <div class="w-full h-full rounded-full bg-bgbtn">
                <div class="w-full h-full rounded-full">
                    <div class="relative w-full h-full">
                        <svg class="absolute inset-0 transform -rotate-90" viewBox="0 0 100 100">
                            <!-- <circle class="text-gray-200" stroke-width="3" stroke="currentColor" fill="none" cx="50"
                                cy="50" r="45" /> -->
                            <circle class="text-bgbout progress-circle" stroke-width="4" stroke="currentColor"
                                fill="none" cx="50" cy="50" r="45" stroke-dasharray="282.6" stroke-dashoffset="45" />
                        </svg>
                        <div class="flex items-center justify-center w-full h-full text-xl font-bold text-white">
                            <div class="flex flex-col text-center">
                                <p class="text-8xl pb-6 -tracking-num">17:59</p>
                                <p class="text-base tracking-space">PAUSE</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        <div class="pt-16">
            <img src="/public/icon-settings.svg" alt="paramètre" @click="togglePopup" class="cursor-pointer">

            <!-- Popup -->
            <div v-if="isPopupOpen" class="fixed inset-0 bg-pop bg-opacity-50 flex justify-center items-center">
                <div class="bg-white pt-9 rounded shadow-lg max-w-md w-full pb-6">
                    <div class="flex justify-between items-center px-10">
                        <h2 class="text-xl font-bold">Settings</h2>
                        <img src="/public/icon-close.svg" alt="close" @click="togglePopup"
                            class="items-center cursor-pointer">
                    </div>
                    <p class="border-b w-full pt-4"></p>

                    <div class="flex flex-col px-10 pt-7 gap-6">
                        <p>TIME (MINUTES)</p>
                        <div class="flex justify-between border-b pb-6">
                            <div class="flex flex-col">

                                <span class=" text-sm font-semibold">pomodoro</span>
                                <input type="number" id="stepper1" value="25" min="1" max="60" step="1"
                                    class="w-24 bg-input py-2 px-4 rounded-lg focus:outline-none focus:border-transparent">
                            </div>

                            <div class="flex flex-col ">
                                <span class="text-sm font-semibold">short break</span>
                                <input type="number" id="stepper2" value="25" min="1" max="60" step="1"
                                    class="w-24 bg-input py-2 px-4 rounded-lg focus:outline-none focus:border-transparent">
                            </div>

                            <div class="flex flex-col">
                                <span class="text-sm font-semibold">long break</span>
                                <input type="number" id="stepper3" value="25" min="1" max="60" step="1"
                                    class="w-24 bg-input py-2 px-4 rounded-lg focus:outline-none focus:border-transparent">
                            </div>

                        </div>

                        <div class="flex justify-between">
                            <p>FONT</p>
                            <div id="app" class="flex gap-4">
                                <button class="w-10 h-10 rounded-full"
                                    :class="isActive[0] ? 'bg-black text-white' : 'text-bgp bg-input'"
                                    @click="toggleFocus(0)">Aa</button>

                                <button class="w-10 h-10 rounded-full"
                                    :class="isActive[1] ? 'bg-black text-white' : 'text-bgp bg-input'"
                                    @click="toggleFocus(1)">Aa</button>

                                <button class="w-10 h-10 rounded-full"
                                    :class="isActive[2] ? 'bg-black text-white' : 'text-bgp bg-input'"
                                    @click="toggleFocus(2)">Aa</button>
                            </div>
                        </div>

                    </div>




                    <!-- <buttonclass="mt-4 bg-red-500 text-white px-4 py-2 rounded">Fermer</button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isPopupOpen: false,
            isActive: [true, false, false]
        };
    },
    methods: {
        togglePopup() {
            this.isPopupOpen = !this.isPopupOpen;
        },
        toggleFocus(index) {
            this.isActive = this.isActive.map((active, i) => i === index ? true : false);
        }
    }
};

// function setProgress(progress) {
//     const circle = document.querySelector('.text-blue-500');
//     const radius = circle.r.baseVal.value;
//     const circumference = 2 * Math.PI * radius;

//     circle.style.strokeDasharray = circumference;
//     circle.style.strokeDashoffset = circumference - (progress / 100) * circumference;
//   }

//   // Exemple : Mettre à jour la progression à 75%
//   setProgress(75);
</script>

<style>
/* Votre fichier CSS ou fichier de style Tailwind */

.shadow-custom {
    box-shadow: 5px 15px 50px #0E112A,
        /* Ombre en haut à droite */
        -20px -30px 80px #2E325A,
        /* Ombre en bas à droite */
        inset 0 0 10px rgba(14, 17, 42, 0.5);
    /* Ombre intérieure */
}

/* Votre fichier CSS ou dans un <style> tag */
circle {
    transition: stroke-dashoffset 0.35s;
}

.text-blue-500 {
    stroke: #3b82f6;
    /* Couleur de la progression */
}

.text-gray-200 {
    stroke: #e5e7eb;
    /* Couleur de l'arrière-plan */
}

.progress-circle {
    /* stroke: #3b82f6; Couleur de la progression */
    stroke-linecap: round;
    /* Arrondir les bords du cercle */
    /* transition: stroke-dashoffset 0.35s; */
}

/* Supprimer l'apparence par défaut dans Firefox */
input[type="number"] {
    -moz-appearance: textfield;
    /* Supprime l'apparence par défaut de l'input number */
}

/* Rendre les flèches de défilement visibles */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    opacity: 50;
    /* Assure que les flèches de défilement sont visibles */
}
</style>
