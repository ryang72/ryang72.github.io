function makeMain(but) {
    var x = document.getElementsByClassName('mainImage');
    var tot = document.getElementsByClassName('preview-element');
    x[0].src = but.value;
    for (var i = 0; i < 20; i++) {
        tot[i].classList.remove('preview-selection');
    }
    but.classList.add('preview-selection');
    console.log('adding');
}
