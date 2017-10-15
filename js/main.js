var ideas = [
    'Visit the aquarium',
    'Visit the zoo',
    'Go to the museum',
    'Go to the planetarium',
    'Go ice skating',
    'Play with Lego\'s',
    'Go to a botanical garden',
    'Take a stroll in the park',
    'Go to a escape room',
    'Play a round of paintball',
    'Go play mini golf',
    'Put googily eyes on stuff',
    'Go to the bookstore',
    'Make a picnic',
    'Play a boardgame',
    'Go to the bowling alley',
    'Go hiking in the mountains',
    'Take dance lessons',
    'Go for a bike ride',
    'Cook something',
    'Bake something',
    'Go rollerskating',
    'Take a cooking class',
    'Go to a karaoke bar',
    'Put together a puzzle',
    'Go to the pet store',
    'Go to the beach',
    'Read a book',
    'Build a model (car, planes, etc)',
    'Go to a wood working class',
    'Go to a water park',
    'Go to a pottery class ',
    'Go to a first aid class ',
    'Go star gazing',
    'Play badminton',
    'Go shopping',
    'Clean your house',
    'Go to a sports event',
    'Go camping',
    'Play tennis',
    'Take a shower',
    'Play billiard',
    'Visit a retirement home',
    'Take a great picture',
    'Play table tennis',
    'Listen to music',
    'Go birdwatching',
    'Try a new recipe',
    'Read comics',
    'Attend a painting class',
    'Train for a triathlon',
    'Go on a train ride',
    'Go Kayaking',
    'Go Canoeing',
    'Go Boating',
    'Have a bon fire and roast marshmellows',
    'Visit a historic site',
    'Race remote control cars at the park',
    'Attend an authors reading',
    'Play Dungeons and Dragons',
    'Play tabletop games',
    'Play paintball',
    'Take a random train ride'
];

jQuery(function ($) {
    refresh();

    $('html').click(function () {
        refresh();
    });

    var space = false;
    $(function () {
        $(document).keyup(function (evt) {
            if (evt.keyCode == 32) {
                space = false;
            }
        }).keydown(function (evt) {
            if (evt.keyCode == 32) {
                space = true;
                refresh();
            }
        });
    });

    document.addEventListener('touchstart', function (e) {
        refresh();
    }, false);

    function refresh() {
        var item = ideas[Math.floor(Math.random() * ideas.length)];
        $('.activitiy').text(item);

    }
});