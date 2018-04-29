function winamp() {

    let title=$('<h1>')
        .attr('class','heading')
        .text('Front-end-player')
        .appendTo('form');

    let divForm=$('<div>')
        .attr("class",'img-ctr')
        .appendTo('form');

    let image=$('<img src="love-music.png" alt="music">')
    image.appendTo('div');

    let divcontainer=$('<div>')
        .attr('class','container')
        .appendTo('form');

    let firsti=$('<i>')
        .attr('id','prev')
        .attr('class','fa fa-step-backward')
        .attr('aria-hidden','true')
        .appendTo('.container');

    let secondi=$('<i>')
        .attr('id','play')
        .attr('class','fa fa-play-circle')
        .appendTo('.container');

    let thirdi=$('<i>')
        .attr('id','pause')
        .attr('class','fa fa-pause-circle hidden')
        .attr('aria-hidden','true')
        .appendTo('.container');

    let fourtI=$('<i>')
        .attr('id','next')
        .attr('class','fa fa-step-forward')
        fourtI.appendTo('.container');

    let seconddiv=$('<div>')
        .attr('class','input-ctr')
       seconddiv .appendTo('form');

    let input=$('<input>')
        .attr('class','result')
        .attr('value','Play me!','disabled')
        input.appendTo('.input-ctr');

    $('#play').on('click', function () {
        $('#play').addClass('hidden');
        $('#pause').removeClass('hidden');
        $('.result').val('Music Playing');

    })
    $('#pause').on('click', function () {
        $('#pause').addClass('hidden');
        $('#play').removeClass('hidden');
        $('.result').val('Music Paused');

    })
    $('#prev').on('click', function () {
        $('.result').val('Previous song');

    })
    $('#next').on('click', function () {
        $('.result').val('Next song');

    })
}
winamp();