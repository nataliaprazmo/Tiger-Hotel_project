const standards = {
    STANDARD: 40,
    EXTRA: 30,
    FULL_EXTRA: 50
}
const rooms = {
    SMALL: 4,
    MIDDLE: 6,
    BIG: 7,
}

function oblicz() {
    //prevent reload
    document.getElementById('calcForm').addEventListener('submit', function(event) {
        event.preventDefault();
    });

    //wybor standardu
    var s = document.getElementById("standard1");
    var standard = parseInt(s.value);

    // wybór sali
    var tab_r = document.getElementsByName("room");
    var r;
    for (let i = 0; i < tab_r.length; i++) {
        if (tab_r[i].checked) r = tab_r[i].value;
    }
    var sala;
    switch (r) {
        case 'none':
            sala = 0;
            break;
        case 'small':
            sala = rooms.SMALL;
            break;
        case 'middle':
            sala = rooms.MIDDLE;
            break;
        case 'big':
            sala = rooms.BIG;
            break;
    }

    //czas rezerwacji
    var czas = parseInt(document.getElementById("days").value);
    if(isNaN(czas)) czas=0;


    if(czas >= 3 && czas <= 90){
        //oblicz cene
        var cena = document.getElementById("price");
        switch (standard) {
            case 1:
                cena.value = czas * (standards.STANDARD + sala); //STANDARD
                break;
            case 2:
                cena.value = czas * (standards.STANDARD + sala) + standards.EXTRA * parseInt(czas / 7 + 1) + standards.EXTRA; //EXTRA dietetyk
                break;
            case 3:
                cena.value = czas * (standards.STANDARD + sala) + 2 * standards.EXTRA; //EXTRA lekarz
                break;
            case 4:
                cena.value = czas * (standards.FULL_EXTRA + sala); //FULL EXTRA
                break;
            default:
                cena.value = 'error';
                break;
        }
        if(cena.value !== 'error' && cena.value !== '' && !isNaN(cena.value)){
            cena.value += " zł";
        }
    }
}