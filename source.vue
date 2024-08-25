<template>
    <div class="h-screen w-full flex flex-col justify-center items-center bg-bgp">
      <div class="text-center text-white">
        <p class="text-3xl font-bold">pomodoro</p>
      </div>
      
      <!-- Couleur et boutons de sélection -->
      <div class="flex justify-between pb-8">
        <p class="text-bgbtn tracking-num1 text-sm font-bold">COLOR</p>
        <div id="app" class="flex gap-4">
          <button
            class="w-10 h-10 rounded-full"
            :class="activeButton === 'button1' ? 'border-4 border-bgbtn' : 'border-2 border-input'"
            :style="{ backgroundColor: selectedColor === 'button1' ? colorOptions['button1'] : '' }"
            @click="setSelectedColor('button1')"
          ></button>
  
          <button
            class="w-10 h-10 rounded-full"
            :class="activeButton === 'button2' ? 'border-4 border-bgbtn' : 'border-2 border-input'"
            :style="{ backgroundColor: selectedColor === 'button2' ? colorOptions['button2'] : '' }"
            @click="setSelectedColor('button2')"
          ></button>
  
          <button
            class="w-10 h-10 rounded-full"
            :class="activeButton === 'button3' ? 'border-4 border-bgbtn' : 'border-2 border-input'"
            :style="{ backgroundColor: selectedColor === 'button3' ? colorOptions['button3'] : '' }"
            @click="setSelectedColor('button3')"
          ></button>
        </div>
      </div>
  
      <!-- Bouton Apply -->
      <div class="flex justify-center items-center relative">
        <button
          class="bg-bgbout py-3 px-12 text-white rounded-full font-bold text-base hover:bg-opacity-75"
          @click="applyColor"
        >
          Apply
        </button>
      </div>
      
      <!-- Contenu principal -->
      <div
        class="relative w-96 h-96 rounded-full mt-11"
        :style="{ backgroundColor: appliedColor }"
      >
        <!-- Circle with dynamic color -->
        <div class="w-full h-full rounded-full" :style="{ backgroundColor: appliedColor }">
          <div class="w-full h-full rounded-full">
            <div class="relative w-full h-full">
              <svg class="absolute inset-0 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  class="progress-circle"
                  :style="{ stroke: appliedColor }"
                  stroke-width="4"
                  stroke="currentColor"
                  fill="none"
                  cx="50"
                  cy="50"
                  r="45"
                  :stroke-dasharray="282.6"
                  :stroke-dashoffset="value"
                />
              </svg>
  
              <div class="flex items-center justify-center w-full h-full text-xl font-bold text-white">
                <div class="flex flex-col text-center">
                  <p class="text-8xl pb-6 -tracking-num">{{ time }}</p>
                  <button class="text-base tracking-space cursor-pointer z-10" @click="toggleListen">
                    {{ msg }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Settings and Popup -->
      <div class="pt-16">
        <img
          src="/public/icon-settings.svg"
          alt="paramètre"
          @click="togglePopup"
          class="cursor-pointer"
        >
  
        <!-- Popup -->
        <div v-if="isPopupOpen" class="fixed inset-0 bg-pop bg-opacity-50 flex justify-center items-center">
          <div class="bg-white pt-9 rounded-3xl shadow-lg max-w-md w-full">
            <div class="flex justify-between items-center px-10">
              <h2 class="text-3xl font-bold text-bgbtn">Settings</h2>
              <img
                src="/public/icon-close.svg"
                alt="close"
                @click="togglePopup"
                class="items-center cursor-pointer"
              >
            </div>
            <p class="border-b w-full pt-4"></p>
  
            <div class="flex flex-col px-10 pt-7 gap-6">
              <!-- Other settings fields -->
              <!-- Color Settings Section -->
              <div class="flex justify-between pb-8">
                <p class="text-bgbtn tracking-num1 text-sm font-bold">COLOR</p>
                <div id="app" class="flex gap-4">
                  <button
                    class="w-10 h-10 rounded-full"
                    :class="activeButton === 'button1' ? 'border-4 border-bgbtn' : 'border-2 border-input'"
                    :style="{ backgroundColor: selectedColor === 'button1' ? colorOptions['button1'] : '' }"
                    @click="setSelectedColor('button1')"
                  ></button>
  
                  <button
                    class="w-10 h-10 rounded-full"
                    :class="activeButton === 'button2' ? 'border-4 border-bgbtn' : 'border-2 border-input'"
                    :style="{ backgroundColor: selectedColor === 'button2' ? colorOptions['button2'] : '' }"
                    @click="setSelectedColor('button2')"
                  ></button>
  
                  <button
                    class="w-10 h-10 rounded-full"
                    :class="activeButton === 'button3' ? 'border-4 border-bgbtn' : 'border-2 border-input'"
                    :style="{ backgroundColor: selectedColor === 'button3' ? colorOptions['button3'] : '' }"
                    @click="setSelectedColor('button3')"
                  ></button>
                </div>
              </div>
  
              <div class="flex justify-center items-center relative">
                <button
                  class="bg-bgbout py-3 px-12 text-white rounded-full font-bold text-base hover:bg-opacity-75"
                  @click="applyColor"
                >
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
        activeButton: 'button1',
        selectedColor: 'button1', // Default selected color
        appliedColor: '#e5e5e5', // Default applied color
        colorOptions: {
          button1: '#ff5733', // Example color
          button2: '#33ff57', // Example color
          button3: '#3357ff'  // Example color
        },
        value: 0,
        time: '00.00',
        msg: 'START',
      };
    },
    methods: {
      togglePopup() {
        this.isPopupOpen = !this.isPopupOpen;
      },
      setSelectedColor(button) {
        this.selectedColor = button;
      },
      applyColor() {
        this.appliedColor = this.colorOptions[this.selectedColor];
      },
      toggleListen() {
        if (this.msg === 'START') {
          this.msg = 'PAUSE';
          this.value = 45;
          this.time = '17.59';
        } else if (this.msg === 'PAUSE') {
          this.msg = 'RESTART';
          this.value = 15;
          this.time = '18.00';
        } else if (this.msg === 'RESTART') {
          this.msg = 'START';
          this.value = 0;
          this.time = '00.00';
        }
      }
    }
  };
  </script>
  
  <style>
  /* Votre fichier CSS ou fichier de style Tailwind */
  
  .shadow-custom {
    box-shadow: 5px 15px 50px #0E112A,
      -20px -30px 80px #2E325A,
      inset 0 0 10px rgba(14, 17, 42, 0.5);
  }
  
  .progress-circle {
    stroke-linecap: round;
  }
  
  .text-blue-500 {
    stroke: #3b82f6;
  }
  
  .text-gray-200 {
    stroke: #e5e7eb;
  }
  
  input[type="number"] {
    -moz-appearance: textfield;
  }
  
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    opacity: 50;
  }
  </style>
  