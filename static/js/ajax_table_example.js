$(document).ready(function(){
    $('#ajax_data_load').click(function(){
        clicked = $(this).attr('name');
        $.ajax({
            url: '/get_data',
            dataSrc: 'data',
            type: 'POST',
            dataType: 'json',
            data: $('form').serialize(),
            success: function(data){
                console.log('Success Hit');
                console.log(data);
                $('#jds-example').html('');
                    $('#jds-example').append(
                        '<tr>'+
                        '<th>'+ 'name' + '</th>'+
                        '<th>'+ 'position' + '</th>'+
                        '<th>'+ 'salary' + '</th>'+
                        '<th>'+ 'start_date' + '</th>'+
                        '<th>'+ 'office' + '</th>'+
                        '<th>'+ 'extn' + '</th>'+
                        '</tr>'),
                        $('th').css({'background-color':'#FFA500', 'color': 'white'});
                        for (var key in data) {
                             var val = data[key];
                             $('#jds-example').append(
                                    '<tr>'+
                                    '<td>'+ val['name'] + '</td>'+
                                    '<td>'+ val['position'] + '</td>'+
                                    '<td>'+ val['salary'] + '</td>'+
                                    '<td>'+ val['start_date'] + '</td>'+
                                    '<td>'+ val['office'] + '</td>'+
                                    '<td>'+ val['extn'] + '</td>'+
                                    '</tr>');

                             };
                },
            error: function(data){
                console.log('Error Hit');
                console.log(data);
                }
        });
    });
});
