<div id="app">
    <!-- Section de sélection de couleur -->
    <div class="flex justify-between pb-8">
      <p class="text-bgbtn tracking-num1 text-sm font-bold">COLOR</p>
      <div class="flex gap-4">
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
  
    <!-- Section d'application de couleur -->
    <div class="flex justify-center items-center relative">
      <button @click="applyColor" class="bg-bgbout py-3 px-12 text-white rounded-full font-bold text-base hover:bg-opacity-75">
        Apply
      </button>
    </div>
  
    <!-- Exemple d'élément où la couleur est appliquée -->
    <div :style="{ backgroundColor: selectedColor }" class="p-4 mt-8">
      This is an example element with the selected background color.
    </div>
  </div>
  
  <script>
  new Vue({
    el: '#app',
    data() {
      return {
        activeButton: null,
        selectedColor: ''
      };
    },
    methods: {
      toggleActive(buttonId) {
        this.activeButton = buttonId;
        switch(buttonId) {
          case 'button1':
            this.selectedColor = '#color1'; // Remplacez par la couleur souhaitée
            break;
          case 'button2':
            this.selectedColor = '#color2'; // Remplacez par la couleur souhaitée
            break;
          case 'button3':
            this.selectedColor = '#color3'; // Remplacez par la couleur souhaitée
            break;
          default:
            this.selectedColor = '';
        }
      },
      applyColor() {
        // Ici vous pouvez gérer ce qui se passe lorsque le bouton "Apply" est cliqué
        // Par exemple, appliquer la couleur à un élément spécifique ou sauvegarder la couleur choisie
      }
    }
  });
  </script>
  