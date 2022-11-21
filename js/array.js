$(document).ready(function () {
    let student = [];
    $('#chuc_nang').on('change', function () {
        let vl = Number($("#chuc_nang").val());
        if (vl === 1) {
            $('.show_txt').show();
        } else if (vl === 2) {
            $('.show_txt').show();
        } else if (vl === 3) {
            $('.replace').show();
        } else if (vl === 5) {
            show_data(student);
        }
    });

    $('.show_txt').hide();   //ẩn ô text box
    $('.replace').hide();
    $('#nhap_ten').click(function () {
        let dt = $('#data').val();
        if (student.length === 0) {
            student = dt.split(",");
        } else {
            let data = dt.split(",");
            let st2 = student.unshift(data[0]);
            let st3 = student.push(data[1]);
            show_data(student);
        }
    })

    // $('#replace').click(function () {
    //     let dt1 = $('replace').val();
    //     let st4 = student.splice(2, 1, dt1[0]);
    //     show_data(student);
    // })

    function show_data(student) {
        let html = '';
        for (var i = 0; i < student.length; i++) {
            html = html + " " + student[i];
        }
        $(".content").html(html);
    }


});