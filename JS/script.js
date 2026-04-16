// ============================================
// STREET FIGHTER 2 - SELECTION SCREEN
// Versão refatorada e otimizada (ES6)
// ============================================

// Dados dos personagens
const CHARACTERS = {
    ryu: { name: 'ryu', image: '1.png', background: '1.png' },
    honda: { name: 'honda', image: '2.png', background: '2.png' },
    blanka: { name: 'blanka', image: '3.png', background: '3.png' },
    guile: { name: 'guile', image: '4.png', background: '4.png' },
    balrog: { name: 'balrog', image: '5.png', background: '5.png' },
    vega: { name: 'vega', image: '6.png', background: '6.png' },
    ken: { name: 'ken', image: '7.png', background: '7.png' },
    chunli: { name: 'chunli', image: '8.png', background: '8.png' },
    zangief: { name: 'zangief', image: '9.png', background: '9.png' },
    dhalsim: { name: 'dhalsim', image: '10.png', background: '10.png' },
    sagat: { name: 'sagat', image: '11.png', background: '11.png' },
    bison: { name: 'bison', image: '12.png', background: 'world.png' }
};

// Estado da aplicação
const state = {
    selectedPlayer: null,
    musicElement: document.getElementById('musica'),
    sfxElement: document.getElementById('sfx'),
    lobbyElement: document.getElementById('lobby'),
    portraitElement: document.getElementById('portraits'),
    nameElement: document.getElementById('name'),
    worldElement: document.getElementById('mundo'),
    mainAudio: document.getElementById('audio'),
    focusedCharacterIndex: 0
};

// Array ordenado de personagens (2 linhas x 6 colunas)
const CHARACTER_ORDER = [
    'ryu', 'honda', 'blanka', 'guile', 'balrog', 'vega',      // Linha 1
    'ken', 'chunli', 'zangief', 'dhalsim', 'sagat', 'bison'   // Linha 2
];

// Configuração inicial
state.mainAudio.volume = 0.35;

// ============================================
// FUNÇÕES UTILITÁRIAS
// ============================================

function updateDisplay(character) {
    const charName = character.name;
    state.lobbyElement.innerHTML = `<img class='choosen' src='media/${character.image}' alt='${charName}'>`;
    state.portraitElement.innerHTML = `<img class='choosen' src='media/portraits/${character.image}' alt='${charName}'>`;
    state.nameElement.innerHTML = `<img class='name' src='media/names/${character.image}' alt='Nome: ${charName}'>`;
}

function updateBackground(backgroundImage) {
    state.worldElement.style.backgroundImage = `url(media/backgrounds/${backgroundImage})`;
}

function clearDisplay() {
    state.lobbyElement.innerHTML = '';
    state.portraitElement.innerHTML = '';
    state.nameElement.innerHTML = '';
}

function playSound(soundFile) {
    state.sfxElement.innerHTML = `<audio autoplay><source src='media/sfx/${soundFile}' type='audio/ogg'></audio>`;
}

function playMusic(musicFile) {
    state.musicElement.innerHTML = `<audio autoplay loop id='audio'><source src='${musicFile}' type='audio/mpeg'></audio>`;
    state.mainAudio = document.getElementById('audio');
    state.mainAudio.volume = 0.35;
}

// ============================================
// EVENT HANDLERS
// ============================================

function onCharacterHover(character) {
    if (state.selectedPlayer === null) {
        updateDisplay(character);
        updateBackground(character.background);
        playSound('selection.ogg');
    }
}

function onCharacterLeave() {
    if (state.selectedPlayer === null) {
        clearDisplay();
        updateBackground('world.png');
    }
}

function onCharacterSelect(character) {
    state.selectedPlayer = character;
    updateDisplay(character);
    updateBackground(character.background);
    playSound('choosen.ogg');
    
    // Sequência de áudio sincronizada
    setTimeout(() => {
        playMusic(`media/sfx/${character.image.replace('.png', '.mp3')}`);
    }, 1000);
    
    setTimeout(() => {
        playMusic('media/sfx/Start%20Battle.mp3');
    }, 2000);
    
    setTimeout(() => {
        playMusic(`media/themes/${character.image.replace('.png', '.mp3')}`);
    }, 6000);
}

function resetGame() {
    history.go(0);
}

// ============================================
// NAVEGAÇÃO COM SETAS DO TECLADO
// ============================================

function updateFocusedCharacter(newIndex) {
    // Remove classe do anterior
    const oldButton = document.querySelector(`[data-character="${CHARACTER_ORDER[state.focusedCharacterIndex]}"]`);
    if (oldButton) {
        oldButton.parentElement.classList.remove('keyboard-focus');
    }
    
    // Atualiza índice
    state.focusedCharacterIndex = newIndex;
    const characterName = CHARACTER_ORDER[newIndex];
    const character = CHARACTERS[characterName];
    
    // Adiciona classe ao novo
    const newButton = document.querySelector(`[data-character="${characterName}"]`);
    if (newButton) {
        newButton.parentElement.classList.add('keyboard-focus');
    }
    
    // Mostra preview (como hover)
    if (state.selectedPlayer === null) {
        onCharacterHover(character);
    }
}

function navigateKeyboard(direction) {
    if (state.selectedPlayer !== null) return; // Bloquia se já selecionado
    
    let newIndex = state.focusedCharacterIndex;
    
    switch(direction) {
        case 'up':
            newIndex = (newIndex - 6 + 12) % 12;
            break;
        case 'down':
            newIndex = (newIndex + 6) % 12;
            break;
        case 'left':
            if (newIndex % 6 === 0) {
                newIndex = newIndex + 5; // Volta pro final da linha
            } else {
                newIndex = newIndex - 1;
            }
            break;
        case 'right':
            if (newIndex % 6 === 5) {
                newIndex = newIndex - 5; // Volta pro início da linha
            } else {
                newIndex = newIndex + 1;
            }
            break;
    }
    
    updateFocusedCharacter(newIndex);
}

// ============================================
// INICIALIZAÇÃO - EVENT DELEGATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.botao');
    
    buttons.forEach(button => {
        const characterName = button.getAttribute('data-character');
        const character = CHARACTERS[characterName];
        
        if (character) {
            // Hover (mouse enter)
            button.addEventListener('mouseover', () => onCharacterHover(character));
            
            // Hover out (mouse leave)
            button.addEventListener('mouseleave', onCharacterLeave);
            
            // Click (seleção)
            button.addEventListener('click', () => onCharacterSelect(character));
            
            // Suporte a teclado (Enter/Space)
            button.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onCharacterSelect(character);
                }
            });
        }
    });
    
    // Controlar visibilidade do keyboard-focus quando houver hover em qualquer botão
    const table = document.querySelector('table');
    if (table) {
        table.addEventListener('mouseover', () => {
            table.classList.add('mouse-hovering');
        });
        
        table.addEventListener('mouseleave', () => {
            table.classList.remove('mouse-hovering');
        });
    }
    
    // Botão de Reset
    const resetButton = document.querySelector('.reset button');
    if (resetButton) {
        resetButton.addEventListener('click', resetGame);
    }
    
    // Navegação por teclado (setas + Enter)
    document.addEventListener('keydown', (e) => {
        if (state.selectedPlayer !== null) return; // Bloquia após seleção
        
        switch(e.key) {
            case 'ArrowUp':
                e.preventDefault();
                navigateKeyboard('up');
                break;
            case 'ArrowDown':
                e.preventDefault();
                navigateKeyboard('down');
                break;
            case 'ArrowLeft':
                e.preventDefault();
                navigateKeyboard('left');
                break;
            case 'ArrowRight':
                e.preventDefault();
                navigateKeyboard('right');
                break;
            case 'Enter':
                e.preventDefault();
                const focusedCharacter = CHARACTERS[CHARACTER_ORDER[state.focusedCharacterIndex]];
                onCharacterSelect(focusedCharacter);
                break;
        }
    });
    
    // Inicializa foco no primeiro personagem
    updateFocusedCharacter(0);
});

