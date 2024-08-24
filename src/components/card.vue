<template>
    <div class="h-screen w-full flex flex-col justify-center items-center bg-bgp ">
        <div class="text-center text-white">
            <p class="text-3xl font-bold">pomodoro</p>
        </div>
        <div class="flex bg-bgbtn w-96 rounded-full justify-between px-2 py-2 text-sm font-bold mt-14 text-ft text-opacity-40 ">
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
                            <circle class="text-bgbout progress-circle" stroke-width="4" stroke="currentColor" fill="none" cx="50"
                                cy="50" r="45" stroke-dasharray="282.6" stroke-dashoffset="45" />
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
            <img src="/public/icon-settings.svg" alt="paramètre" onclick="">
        </div>

    </div>
</template>

<script>
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
  stroke-linecap: round; /* Arrondir les bords du cercle */
  /* transition: stroke-dashoffset 0.35s; */
}
</style>