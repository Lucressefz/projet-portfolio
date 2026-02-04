// ========================================
// CONFIGURATION DES PARTICULES (Particles.js)
// ========================================

// Attendre que la page soit complètement chargée
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialiser Particles.js sur l'élément #particles-js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,              // Nombre de particules
                "density": {
                    "enable": true,
                    "value_area": 800     // Zone de densité
                }
            },
            "color": {
                "value": ["#00d4ff", "#00ff88", "#ffcc00"]  // Couleurs des particules (cyan, vert, jaune)
            },
            "shape": {
                "type": "circle",         // Forme des particules (circle, edge, triangle, polygon, star, image)
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,             // Opacité des particules
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,               // Taille des particules
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,           // Activer les lignes entre particules
                "distance": 150,          // Distance maximale pour les lignes
                "color": "#ffffff",       // Couleur des lignes
                "opacity": 0.4,           // Opacité des lignes
                "width": 1                // Largeur des lignes
            },
            "move": {
                "enable": true,           // Activer le mouvement
                "speed": 2,               // Vitesse de déplacement
                "direction": "none",      // Direction (none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left)
                "random": false,
                "straight": false,
                "out_mode": "out",        // Comportement en sortie (out, bounce)
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,       // Activer l'interaction au survol
                    "mode": "grab"        // Mode d'interaction (grab, bubble, repulse)
                },
                "onclick": {
                    "enable": true,       // Activer l'interaction au clic
                    "mode": "push"        // Mode d'interaction (push, remove, bubble, repulse)
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,      // Distance de l'effet grab
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4     // Nombre de particules ajoutées au clic
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true             // Détection des écrans Retina
    });

});