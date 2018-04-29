function langyages() {

    let firstdiv = $('<div>')
        .attr('class', 'languages')
        .appendTo('.top');

    let bgspan = $("<span>");
        bgspan.attr('id', 'bg')
        .text('BG');
        bgspan.appendTo('.languages');


    let spacespan = $('<span>/</span>')
        .appendTo('.languages');

    let twospan = $("<span>")
        .attr('id', 'en')
        .attr('class', 'hidden')
        .text("EN");
    twospan.appendTo('.languages');

    let headingH1 = $('<h1>')
        .attr('id', 'heading')
        .text("The most used programming languages");
    headingH1.appendTo('.languages');

    //firstArticle

    let articleH2 = $('<h2>')
        .attr("class", 'article-header')
        .text('JavaScript');
    articleH2.appendTo('.first-article');

    let divFirstArticle = $('<div>')
        .attr("class", 'js-container');
    divFirstArticle.appendTo('.first-article');

    let image = $('<img src="js.png" alt="js">')

        .attr('class', 'js-logo')

        .appendTo('.js-container');

    let pFirstArticle = $('<p class="js-info">\n' +
        '                JavaScript, often abbreviated as JS, is a high-level, interpreted programming language.\n' +
        '                It is a language which is also characterized as dynamic, weakly typed, prototype-based and\n' +
        '                multi-paradigm.\n' +
        '                Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web.\n' +
        '                It is used to make dynamic webpages interactive and provide online programs, including video games. The\n' +
        '                majority\n' +
        '                of websites employ it[citation needed], and all modern web browsers support it without the need for\n' +
        '                plug-ins by means\n' +
        '                of a built-in JavaScript engine. Each of the many JavaScript engines represent a different\n' +
        '                implementation of JavaScript,\n' +
        '                all based on the ECMAScript specification, with some engines not supporting the spec fully, and with\n' +
        '                many engines\n' +
        '                supporting additional features beyond ECMA.\n' +
        '            </p>\n')
        .appendTo('.js-container');

    //secondarticle

    let h2Secondarticle = $(' <h2 class="article-header">C#</h2>')
        .appendTo('.second-article');

    let secondDivArticle = $('<div class="csharp-container">')
        .appendTo('.second-article');

    let secondPArticleTwo = $('            <p class="csharp-info">\n' +
        '                C# is a multi-paradigm programming language encompassing strong typing, imperative, declarative,\n' +
        '                functional, generic, object-oriented (class-based), and component-oriented programming disciplines.\n' +
        '                It was developed by Microsoft within its .NET initiative and later approved as a standard by Ecma\n' +
        '                (ECMA-334)\n' +
        '                and ISO (ISO/IEC 23270:2006). C# is one of the programming languages designed for the Common Language\n' +
        '                Infrastructure.C# is a general-purpose, object-oriented programming language. Its development team is\n' +
        '                led\n' +
        '                by Anders Hejlsberg. The most recent version is C# 7.2, which was released in 2017 along with\n' +
        '                Visual Studio 2017 version 15.5.\n' +
        '            </p>\n')

        .appendTo('.csharp-container');

    let secondimgArticleTwo = $('<img src="csharp.jpg" alt="csharp-logo">')
        .appendTo('.csharp-container');

    //lastarticle

    let h2lastArticle = $('<h2 class="article-header">Java</h2>')
        .appendTo('.last-article');

    let lastArticleDiv = $('<div class="java-container">')
        .appendTo('.last-article');

    let imgLastArticle = $('<img src="java-logoo.png" alt="java-logo">')
        .appendTo('.java-container');

    let lastParticle = $('            <p class="java-info">\n' +
        '                Java is a general-purpose computer-programming language that is concurrent, class-based,\n' +
        '                object-oriented,\n' +
        '                and specifically designed to have as few implementation dependencies as possible. It is intended to let\n' +
        '                application developers "write once, run anywhere" (WORA), meaning that compiled Java code can run on\n' +
        '                all platforms that support Java without the need for recompilation. Java applications are typically\n' +
        '                compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture.\n' +
        '                As of 2016, Java is one of the most popular programming languages in use, particularly for\n' +
        '                client-server web applications, with a reported 9 million developers. Java was originally developed by\n' +
        '                James Gosling at Sun Microsystems (which has since been acquired by Oracle Corporation) and released in\n' +
        '                1995\n' +
        '                as a core component of Sun Microsystems\' Java platform. The language derives much of its syntax from C\n' +
        '                and C++,\n' +
        '                but it has fewer low-level facilities than either of them.\n' +
        '            </p>\n')
        .appendTo('.java-container');



let p1eng='JavaScript, often abbreviated as JS, is a high-level, interpreted programming language.\n' +
    '                It is a language which is also characterized as dynamic, weakly typed, prototype-based and\n' +
    '                multi-paradigm.\n' +
    '                Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web.\n' +
    '                It is used to make dynamic webpages interactive and provide online programs, including video games. The\n' +
    '                majority\n' +
    '                of websites employ it[citation needed], and all modern web browsers support it without the need for\n' +
    '                plug-ins by means\n' +
    '                of a built-in JavaScript engine. Each of the many JavaScript engines represent a different\n' +
    '                implementation of JavaScript,\n' +
    '                all based on the ECMAScript specification, with some engines not supporting the spec fully, and with\n' +
    '                many engines\n' +
    '                supporting additional features beyond ECMA.\n';

    let p1bg=`JavaScript (чете се джаваскрипт) е интерпретируем език за програмиране, разпространяван с повечето Уеб
    браузъри.Поддържа обектно-ориентиран и функционален стил на програмиране. Създаден е в Netscape през 1995 г.Най-често се
    прилага към HTML-а на Интернет страница с цел добавяне на функционалност и зареждане на данни. Може дасе ползва
    също за писане на сървърни скриптове JSON, както и за много други приложения. JavaScript не трябва да се
    бърка с Java, съвпадението на имената е резултат от маркетингово решение на Netscape. Javascript е стандартизиран под
    името EcmaScript.`


        let p2eng=' C# is a multi-paradigm programming language encompassing strong typing, imperative, declarative,\\n\' +\n' +
        '        \'                functional, generic, object-oriented (class-based), and component-oriented programming disciplines.\\n\' +\n' +
        '        \'                It was developed by Microsoft within its .NET initiative and later approved as a standard by Ecma\\n\' +\n' +
        '        \'                (ECMA-334)and ISO (ISO/IEC 23270:2006). C# is one of the programming languages designed for the Common Language\\n\' +\n' +
        '        \'                Infrastructure.C# is a general-purpose, object-oriented programming language. Its development team is\\n\' +\n' +
        '        \'                led\\n\' +\n' +
        '        \'                by Anders Hejlsberg. The most recent version is C# 7.2, which was released in 2017 along with\\n\' +\n' +
        '        \'                Visual Studio 2017 version 15.5.';


    let p2bg='C# (C Sharp, произнася се Си Шарп) е обектно-ориентиран език за програмиране, разработен от Microsoft,\n' +
        'като част от софтуерната платформа .NET. Стремежът още при създаването на C# езика е бил да се създаде\n' +
        'един прост, модерен, обектно-ориентиран език с общо предназначение. Основа за C# са C++, Java и донякъде\n' +
        'езици като Delphi, VB.NET и C. Той е проектиран да балансира мощност (C++) с възможност за бързо\n' +
        'разработване\n' +
        '(Visual Basic и Java). Те представляват съвкупност от дефиниции на класове, които съдържат в себе си\n' +
        'методи,\n' +
        'а в методите е разположена програмната логика – инструкциите, които компютърът изпълнява. Програмите на\n' +
        'C#\n' +
        'представляват един или няколко файла с разширение .cs., в които се съдържат дефиниции на класове и други\n' +
        'типове. Тези файлове се компилират от компилатора на C# (csc) до изпълним код и в резултат се получават\n' +
        'асемблита – файлове със същото име, но с различно разширение (.exe или .dll).\n';


    let p3eng='Java is a general-purpose computer-programming language that is concurrent, class-based,\\n\' +\n' +
        '        \'                object-oriented,\\n\' +\n' +
        '        \'                and specifically designed to have as few implementation dependencies as possible. It is intended to let\\n\' +\n' +
        '        \'                application developers "write once, run anywhere" (WORA), meaning that compiled Java code can run on\\n\' +\n' +
        '        \'                all platforms that support Java without the need for recompilation. Java applications are typically\\n\' +\n' +
        '        \'                compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture.\\n\' +\n' +
        '        \'                As of 2016, Java is one of the most popular programming languages in use, particularly for\\n\' +\n' +
        '        \'                client-server web applications, with a reported 9 million developers. Java was originally developed by\\n\' +\n' +
        '        \'                James Gosling at Sun Microsystems (which has since been acquired by Oracle Corporation) and released in\\n\' +\n' +
        '        \'                1995\\n\' +\n' +
        '        \'                as a core component of Sun Microsystems\\\' Java platform. The language derives much of its syntax from C\\n\' +\n' +
        '        \'                and C++,\\n\' +\n' +
        '        \'                but it has fewer low-level facilities than either of them';


    let p3bg='Java или Джава е обектно-ориентиран език за програмиране. Кодът, написан на Java, не се компилира\n' +
        'до машинен код за определен процесор, а до специфичен за езика код, наречен байт код. Поради това\n' +
        'за изпълнението на програма, написана на Java, е необходима т. нар. виртуална машина\n' +
        '(на английски: Java Virtual Machine).\n';






    $("#bg").click(function () {
        $('#en').removeAttr('style');
        $('#bg').css("color", "#800080");
        $('#bg').css('font-style','italic');


        $('#heading').empty();
        $('.java-info').empty();
        $('.js-info').empty();
        $('.csharp-info').empty();

        $('#heading').text('Наи-използваните  езици за програмиране');
        $('.java-info').text(p3bg);
        $('.js-info').text(p1bg);
        $('.csharp-info').text(p2bg);



    });

    $("#en").click(function () {
        $('#bg').removeAttr('style');
        $('#en').css("color", "#800080");
        $('#en').css('font-style','italic');

        $('#heading').text('The most used programming languages');
        $('.java-info').text(p3eng);
        $('.js-info').text(p1eng);
        $('.csharp-info').text(p2eng);
    });



}
langyages()











