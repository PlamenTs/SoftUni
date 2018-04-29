function renderElementsInHtml() {
    let heading = $('<h1>');
    heading.text('Chose your destiny')
        .prependTo('#elementsContainer');


    let firstDivContainer = $('<div>');
    firstDivContainer
        .addClass("containers")
        .appendTo('.container');

    let secondDivContainer = $('<div>');
    secondDivContainer
        .addClass("containers")
        .appendTo('.container');

    let airDiv = $('<div>');
    airDiv.attr("id", 'air')
        .addClass('first clickable');
    airDiv.appendTo(firstDivContainer);


    let fireDiv = $('<div>');
    fireDiv.attr("id",'fire')
        .addClass('second clickable');
    fireDiv.appendTo(firstDivContainer);

    let waterDiv=$('<div>');
    waterDiv.attr("id",'water')
        .addClass('third clickable');
    waterDiv.appendTo(secondDivContainer);

    let earthDiv=$('<div>');
    earthDiv.attr("id",'earth')
        .addClass('fourth clickable');
    earthDiv.appendTo(secondDivContainer);


    function renderSingleElementsInHtml() {

        //Buttons

        let backbutton=$('<button>');
        backbutton.attr("id",'backToElements');
        backbutton.text('Back to Elements')
            .appendTo('.back-button')


        //firstListItem
        let firstliItems=$('<li>');
        firstliItems.appendTo(".creatures");

        let firstradiobutton=$('<input>');
        firstradiobutton.addClass('radio-button checked')
            .attr("name",'selector')
            .attr("type",'radio')
            .attr("value",'Arhangel')
            .appendTo(firstliItems);

        let firstlabel=$('<label>');
        firstlabel.text('Archangel')
            .appendTo(firstliItems);



        //secondItems
        let secondliItem=$('<li>');
        secondliItem.appendTo('.creatures');

        let secondradiobutton=$('<input>');
        secondradiobutton.addClass('radio-button checked')
            .attr("name",'selector')
            .attr("type",'radio')
            .attr("value",'Elemental')
            .appendTo(secondliItem);

        let secondlabel=$('<label>');
        secondlabel.text('Elemental')
            .appendTo(secondliItem);

        let image=$('<img>');
        image.attr("id",'creature-image')
            .attr('src','archangel.jpg')
            .attr('alt','archangel')
            .appendTo('.center-after-click');

        let firstP=$('<p>')
        .attr('id','creature-name');
        firstP.text('Archangel')
            .appendTo('#right-after-click');

        let secondP=$('<p>')
            .attr('id','creature-power');
        secondP.text('Power: 2000').appendTo('#right-after-click');

        let thirdP=$('<p>')
            .attr('id','creature-ultimate');
        thirdP.text('Ultimate: Wind Justice').appendTo('#right-after-click');

        let fourthP=$('<p>')
            .attr('id','creature-region');
        fourthP.text('Region: Heaven’s Kingdom').appendTo('#right-after-click');






        moreCreatures()
    }
renderSingleElementsInHtml();

}

renderElementsInHtml();



