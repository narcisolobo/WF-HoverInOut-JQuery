$(document).ready(function () {
    $('#a').hover(
        function () {
            $(this).attr('src', 'images/b.png')
        }, function () {
            $(this).attr('src', 'images/a.png')
        }
    );
    $('#c').hover(
        function () {
            $(this).attr('src', 'images/d.png')
        }, function () {
            $(this).attr('src', 'images/c.png')
        }
    );
    $('#e').hover(
        function () {
            $(this).attr('src', 'images/f.png')
        }, function () {
            $(this).attr('src', 'images/e.png')
        }
    );
    $('#g').hover(
        function () {
            $(this).attr('src', 'images/h.png')
        }, function () {
            $(this).attr('src', 'images/g.png')
        }
    );
});