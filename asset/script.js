$(() => {
    $('mask-block, m-b').each((i, e) => {
        $(e).click(() => {
            if ($(e).hasClass('clicked')) {
                $(e).removeClass('clicked');
            } else {
                $(e).addClass('clicked');
            }
        });
    });

    let details = undefined;
    let ul = undefined;
    $('h2, h3').each((i, e) => {
        const id = `header-${i}`;
        $(e).attr('id', id);
        if ('H2' === $(e).prop('tagName')) {
            if (details) {
                details.append(ul);
                $('#page-tree').append(details);
            }
            details = $(`<details><summary><a href="#${id}">${$(e).text()}</summary></details>`);
            ul = $('<ul></ul>')
        } else if ('H3' === $(e).prop('tagName')) {
            if (ul) {
                ul.append($(`<li><a href="#${id}">${$(e).text()}</a></li>`));
            }
        }
    });
    if (details) {
        details.append(ul);
        $('#page-tree').append(details);
    }
});
