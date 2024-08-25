<template>
    <div class="h-screen w-full flex flex-col justify-center items-center bg-bgp ">
        <div class="text-center text-white">
            <p class="text-3xl font-bold">pomodoro</p>
        </div>
        <div
            class="flex bg-bgbtn w-96 rounded-full justify-between px-2 py-2 text-sm font-bold mt-14 text-ft text-opacity-40">
            <button class="px-6 py-3 rounded-full hover:text-white"
                :style="{ backgroundColor: activeObjet === 'Object1' ? selectedColor : '' }"
                :class="{ 'bg-bgbout text-fth': activeObjet === 'Object1' }" @click="toggleObjet('Object1')">
                pomodoro
            </button>

            <button class="px-6 py-3 rounded-full hover:text-white"
                :style="{ backgroundColor: activeObjet === 'Object2' ? selectedColor : '' }"
                :class="{ 'bg-bgbout text-fth': activeObjet === 'Object2' }" @click="toggleObjet('Object2')">
                short break
            </button>

            <button class="px-6 py-3 rounded-full hover:text-white "
                :style="{ backgroundColor: activeObjet === 'Object3' ? selectedColor : '' }"
                :class="{ 'bg-bgbout text-fth': activeObjet === 'Object3' }" @click="toggleObjet('Object3')">
                long break
            </button>


        </div>

        <div
            class="relative w-96 h-96 rounded-full mt-11 bg-gradient-to-br from-cercle via-cercle1 to-cercle1 p-4 shadow-custom">
            <div class="w-full h-full rounded-full bg-bgbtn">
                <div class="w-full h-full rounded-full">
                    <div class="relative w-full h-full">
                        <svg class="absolute inset-0 transform -rotate-90" viewBox="0 0 100 100">
                            <circle class="text-bgbout progress-circle" stroke-width="4"
                                :style="{ stroke: selectedColor || 'currentcolor' }" fill="none" cx="50" cy="50" r="45"
                                :stroke-dasharray="282.6" :stroke-dashoffset="strokeDashoffset" />
                        </svg>

                        <div class="flex items-center justify-center w-full h-full text-xl font-bold text-white">
                            <div class="flex flex-col text-center">
                                <p class="text-8xl pb-6 -tracking-num">{{ formattedTime }}</p>
                                <button class="text-base tracking-space cursor-pointer z-10 " @click="toggleListen">
                                    {{ msg }}
                                </button>
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
                <div class="bg-white pt-9 rounded-3xl shadow-lg max-w-md w-full">
                    <div class="flex justify-between items-center px-10">
                        <h2 class="text-3xl font-bold text-bgbtn">Settings</h2>
                        <img src="/public/icon-close.svg" alt="close" @click="togglePopup"
                            class="items-center cursor-pointer">
                    </div>
                    <p class="border-b w-full pt-4"></p>

                    <div class="flex flex-col px-10 pt-7 gap-6">
                        <p class="font-bold text-sm text-bgbtn tracking-num1">TIME (MINUTES)</p>
                        <div class="flex justify-between border-b pb-6 ">
                            <div class="flex flex-col">

                                <span class=" text-xs font-bold opacity-40 text-bgbtn pb-2">pomodoro</span>
                                <input type="number" id="stepper1" v-model.number="pomodoroTime" min="1" max="60"
                                    step="1"
                                    class="w-24 bg-input py-2 px-4 rounded-lg focus:outline-none focus:border-transparent font-bold text-sm text-bgp" />
                            </div>

                            <div class="flex flex-col">
                                <span class="text-sm font-semibold opacity-40 text-bgbtn pb-2">short break</span>
                                <input type="number" id="stepper2" v-model.number="shortBreakTime" min="1" max="60"
                                    step="1"
                                    class="w-24 bg-input py-2 px-4 rounded-lg focus:outline-none focus:border-transparent font-bold text-sm text-bgp" />
                            </div>

                            <div class="flex flex-col">
                                <span class="text-sm font-semibold opacity-40 text-bgbtn pb-2">long break</span>
                                <input type="number" id="stepper3" v-model.number="longBreakTime" min="1" max="60"
                                    step="1"
                                    class="w-24 bg-input py-2 px-4 rounded-lg focus:outline-none focus:border-transparent font-bold text-sm text-bgp" />
                            </div>

                        </div>

                        <div class="flex justify-between border-b pb-6">
                            <p class="text-bgbtn tracking-num1 text-sm font-bold">FONT</p>
                            <div id="app" class="flex gap-4">
                                <button class="w-10 h-10 rounded-full"
                                    :class="isActive[0] ? 'bg-bgbtn text-white' : 'text-bgp bg-input hover:border hover:border-bgbtn'"
                                    @click="toggleFocus(0)">Aa</button>

                                <button class="w-10 h-10 rounded-full"
                                    :class="isActive[1] ? 'bg-bgbtn text-white font-serif' : 'text-bgp bg-input font-serif hover:border hover:border-bgbtn'"
                                    @click="toggleFocus(1)">Aa</button>

                                <button class="w-10 h-10 rounded-full"
                                    :class="isActive[2] ? 'bg-bgbtn text-white font-mono' : 'text-bgp bg-input font-mono hover:border hover:border-bgbtn'"
                                    @click="toggleFocus(2)">Aa</button>
                            </div>
                        </div>

                        <div class="flex justify-between pb-8">
                            <p class="text-bgbtn tracking-num1 text-sm font-bold">COLOR</p>
                            <div id="app" class="flex gap-4">
                                <button class="w-10 h-10 rounded-full"
                                    :class="activeButton === 'button1' ? 'border-4 border-bgbtn bg-bgbout' : 'bg-bgbout border-2 border-input'"
                                    @click="toggleActive('button1')"></button>

                                <button class="w-10 h-10 rounded-full"
                                    :class="activeButton === 'button2' ? 'border-4 border-bgbtn bg-bgbout2' : 'bg-bgbout2 border-2 border-input'"
                                    @click="toggleActive('button2')"></button>

                                <button class="w-10 h-10 rounded-full"
                                    :class="activeButton === 'button3' ? 'border-4 border-bgbtn bg-bgbout1' : 'bg-bgbout1 border-2 border-input'"
                                    @click="toggleActive('button3')"></button>
                            </div>
                        </div>

                        <div class="flex justify-center items-center relative">
                            <button
                                class="bg-bgbout py-3 px-12 text-white rounded-full font-bold text-base absolute hover:bg-opacity-75"
                                :style="{ backgroundColor: selectedColor }" @click="togglePopup">
                                Apply
                            </button>
                        </div>

                    </div>

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
            isActive: [true, false, false],
            activeButton: 'button1',
            activeObjet: 'Object1',
            msg: 'START',
            strokeDashoffset: 282.6, // Initial offset
            pomodoroTime: 25,
            shortBreakTime: 5,
            longBreakTime: 15,
            timeRemaining: 0,
            selectedColor: '',
            intervalId: null,
        };
    },
    computed: {
        formattedTime() {
            const minutes = Math.floor(this.timeRemaining / 60);
            const seconds = this.timeRemaining % 60;
            return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        },
    },
    methods: {
        togglePopup() {
            this.isPopupOpen = !this.isPopupOpen;
        },
        toggleFocus(index) {
            this.isActive = this.isActive.map((active, i) => i === index);
        },
        toggleActive(button) {
            this.activeButton = button;
            switch (button) {
                case 'button1':
                    this.selectedColor = '#F87070';
                    break;
                case 'button2':
                    this.selectedColor = '#70F3F8';
                    break;
                case 'button3':
                    this.selectedColor = '#D881F8';
                    break;
                default:
                    this.selectedColor = '';
            }
        },
        toggleObjet(Object) {
            this.activeObjet = Object;
            this.resetTimer(); // Reset timer when switching objects
        },
        toggleListen() {
            if (this.msg === 'START') {
                this.msg = 'PAUSE';
                this.startTimer();
            } else if (this.msg === 'PAUSE') {
                this.msg = 'RESTART';
                clearInterval(this.intervalId);
                this.intervalId = null;
            } else if (this.msg === 'RESTART') {
                this.msg = 'START';
                this.resetTimer();
            }
        },
        startTimer() {
            this.intervalId = setInterval(() => {
                if (this.timeRemaining > 0) {
                    this.timeRemaining--;
                    this.updateProgress();
                } else {
                    clearInterval(this.intervalId);
                    this.intervalId = null;
                    this.msg = 'START';
                }
            }, 1000);
        },
        resetTimer() {
            clearInterval(this.intervalId);
            this.intervalId = null;
            this.timeRemaining = this.getCurrentDuration(); // Réinitialise à la durée initiale
            this.updateProgress();
        },
        updateProgress() {
            const totalDuration = this.getCurrentDuration();
            const progress = ((totalDuration - this.timeRemaining) / totalDuration) * 282.6;
            this.strokeDashoffset = 282.6 - progress;
        },
        getCurrentDuration() {
            switch (this.activeObjet) {
                case 'Object1':
                    return this.pomodoroTime * 60;
                case 'Object2':
                    return this.shortBreakTime * 60;
                case 'Object3':
                    return this.longBreakTime * 60;
            }
            return 0;
        },
    },
    mounted() {
        this.timeRemaining = this.pomodoroTime * 60;
    },
};
</script>

<style>
.shadow-custom {
    box-shadow: 5px 15px 50px #0E112A,
        /* Ombre en haut à droite */
        -20px -30px 80px #2E325A,
        /* Ombre en bas à droite */
        inset 0 0 10px rgba(14, 17, 42, 0.5);
    /* Ombre intérieure */
}

circle {
    transition: stroke-dashoffset 0.35s;
}

.text-blue-500 {
    stroke: #3b82f6;
}

.text-gray-200 {
    stroke: #e5e7eb;
    /* Couleur de l'arrière-plan */
}

.progress-circle {
    /* stroke: #3b82f6; Couleur de la progression */
    stroke-linecap: round;

}

input[type="number"] {
    -moz-appearance: textfield;
}

/* Rendre les flèches de défilement visibles */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    opacity: 50;
}
</style>
