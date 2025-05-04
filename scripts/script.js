// Navigation
document.getElementById('homeLink').addEventListener('click', function(e) {
    e.preventDefault();
    hideAllSections();
    document.getElementById('home').style.display = 'block';
});

document.getElementById('aboutLink').addEventListener('click', function(e) {
    e.preventDefault();
    hideAllSections();
    document.getElementById('about').style.display = 'flex';
});

document.getElementById('idiomsLink').addEventListener('click', function(e) {
    e.preventDefault();
    hideAllSections();
    document.getElementById('idioms').style.display = 'block';
});

document.getElementById('ourWorkLink').addEventListener('click', function(e) {
    e.preventDefault();
    hideAllSections();
    document.getElementById('our-work').style.display = 'block';
});

function hideAllSections() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('idioms').style.display = 'none';
    document.getElementById('our-work').style.display = 'none';
}

// Modal functionality
const modal = document.getElementById('idiomModal');
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Idiom database
const idioms = {
    ant: {
        "to have ants in your pants": {
            meaning: "It means not to be able to keep still because you are very excited or worried about something.",
            armenian: "Մարմինը քոս ընկնել։",
            origin: "Origin - The most straightforward theory suggeste that the idiom originates from the literal experience of having ants inside one's clothing. It would naturally cause agitation and restlessness, leadin the person to move about to alleviate the discomfort."
        }
    },
    bat: {
        "like a bat out of hell": {
            meaning: "It means to fly or move very fast.",
            armenian: "Գնդակի պես դուրս թռչել:",
            origin: "Origin - The comparison with bats, that escape from light, is easy to see the appear to fly very quickly and give off an air of panic."
        }
    },
    bull: {
        "a bull in a china shop": {
            meaning: "It means to be careless in the way that someone moves or behaves.",
            armenian: "",
            origin: "Origin- In the 17th centuray cattle were often brought into the market area of London. Sometimes they would get loose and stray into shops that sold delicate goods, like fine china."
        },
        "a red rag to bull": {
            meaning: "To make somebody very angry.",
            armenian: "Հունից հանել:",
            origin: "It may appear to have originated from bull-fighting."
        }
    },
    butterfly: {
        "to have butterflies in your stomach": {
            meaning: "It means to have a nervous feeling before doing something.",
            armenian: "Սիրտը տակն ու վրա լինել, սիրտը խփել։",
            origin: "Origin - It first appeared in the book \"The house of Prayer\" written by Florence Converse in 1908."
        }
    },
    cat: {
        "to let the cat out of the bag": {
            meaning: "It means to tell a secret carelessly or by mistake.",
            armenian: "Բերնից թռցնել։",
            origin: "Origin - This expression originated from the 18th century when dishonest live - stock sellers put cats into bags rather than the actual animals for sale. Unsuspected customers discovered the truth when returning home and opening their bags, so they had \"the cat let out of the bag\"."
        },
        "to be raining cats and dogs": {
            meaning: "It means raining heavily.",
            armenian: "Հորդառատ անձրև է, էնպես է անձրևում, որ շանը դռանը կապես կսատկի։",
            origin: "Origin - There are different versions of the origin of this phrase, but it is said that during heave downpours overflowed London streets were full of bodies of dead animals."
        }
    },
    camel: {
        "the last straw that breaks the camels back": {
            meaning: "It means the last of the bad events that makes it impossible to bear the situation any longer.",
            armenian: "Համբերությունը հատել, համբերության բաժակը լցվել։",
            origin: "Origin - This comes from an Arabic proverb about loading up a camel beyond its capacity to move."
        }
    },
    chicken: {
        "do not count your chicken before they are hatched": {
            meaning: "It means you shouldn't be too confident that something will be successful.",
            armenian: "Ճտերն աշնանն են հաշվում։",
            origin: "Origin - It has a direct reference to the fact that eggs sometimes fail to hatch reducing the number of live chicks."
        }
    },
    cow: {
        "till the cows come home": {
            meaning: "It means for a very long time, for ever.",
            armenian: "Հազար տարի, անվերջ։",
            origin: "Origin - it comes from the practice of cows returning to their shelters at some point usually at a slow pace."
        }
    },
    donkey: {
        "donkey work": {
            meaning: "It means the hard boring part of a job.",
            armenian: "Էշի աշխատանք։",
            origin: "Origin - the expression came about as an allusion to the heave loads donkeys have to carry."
        },
        "to talk the blind legs off a donkey": {
            meaning: "It means talking endlessly about boring and unpleasant things.",
            armenian: "Էշ-էշ դուրս տալ։",
            origin: "Origin - it probably refers to impossibility of making a donkey sit down on its rear end, so when a person talks the hind legs off a donkey, it means they can talk so much that they could even bore a donkey into sitting down."
        }
    },
    elephant: {
        "white elephant": {
            meaning: "It means a thing that is useless but its maintenance costs a lot of money.",
            armenian: "Ոչ գցելու է ոչ պահելու։",
            origin: "Origin - it comes from a king of liam, who used to give rare albino elephants to courtiers who had displeased hign im order to ruin them by the animals unkeep costs."
        },
        "an elephant in the room": {
            meaning: "It is an obvious problem that needs solution, but people avoid talking about it.",
            armenian: "",
            origin: "Origin - it comes from Ivan Krilov's fable entitled \"The Inquisitive man\", which tells of a man who goes to a museum and notices all sorts of ting things but fails to see an elephant."
        }
    },
    fish: {
        "a fish out of water": {
            meaning: "It refers to a person who feels uncomfortable and awkward because he or she is in surroundings that are not familiar.",
            armenian: "Զգալ ինչպես ձուկը ցամաքում։",
            origin: "Origin - The expression dates back to the year 1483 when it was used by English writer Geoffrey Chaucer in his famous book, \"The Canterbury Jales\", to describe one of the characters who did not feel comfortable riding a horse."
        },
        "an old / a queer fish": {
            meaning: "A person who is strange or crazy",
            armenian: "Տարօրինակ արարած",
            origin: "Origin - In these expressions \"fish\" is used as an analogous with \"being\"."
        },
        "fish story": {
            meaning: "An exaggerated or incredible story.",
            armenian: "Անհավանական պատմություն։",
            origin: "Origin - it is said that fisherman have tendency to exaggerate the ride of the catch."
        },
        "one dirty/bad fish can spoil the whole pond": {
            meaning: "It means that bad action of one individual can taind the reputation of an entire community.",
            armenian: "Մի ցռան մոզին նախիրի անունն է խայտառակում։",
            origin: ""
        },
        "cold fish": {
            meaning: "Someone who seems unfriendly and emotionless.",
            armenian: "Ձկան պես անհաղորդ, գորտի պես սառը:",
            origin: "Origin - The expression was used by Shakespeare in \"The Winter Jales\": \"It was through she was a woman and was turned into a cold fish\"."
        }
    }
};

// Add click event to all idiom links
const idiomLinks = document.querySelectorAll('.idiom-link');

idiomLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const animal = this.getAttribute('data-animal');
        const idiom = this.getAttribute('data-idiom');
        
        const idiomData = idioms[animal][idiom];
        
        // Populate modal
        document.querySelector('.idiom-title').textContent = idiom;
        document.querySelector('.idiom-meaning').textContent = idiomData.meaning;
        document.querySelector('.idiom-armenian').textContent = idiomData.armenian;
        document.querySelector('.idiom-origin').textContent = idiomData.origin;
        
        // Here you would add code to display the image for this idiom
        // For example: document.querySelector('.idiom-image').innerHTML = '<img src="images/' + animal + '_' + idiom.replace(/ /g, '_') + '.jpg" alt="' + idiom + '">';
        
        // Display modal
        modal.style.display = 'block';
    });
});