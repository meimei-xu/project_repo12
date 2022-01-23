$(document).ready(function(){
    $('.addTree').on('click', function(e){

        // console.log('Its working');
        $target = $(e.target);
        // console.log($target.attr('user-id'));


        let id = $target.attr('user-id');

        let newTree = 1;

        // $.ajax({
        //     type:'PUT',
        //     url: '/homepage/'+id,
        //     data: 1,
        //     success: function(response){
        //         window.location.href='/homepage';
        //         console.log('Success');
        //     },
        //     error: function(err){
        //         console.log(err);
        //     }
        // });

        $.ajax({
            type:'PUT',
            url: '/homepage/'+id,
            data: {tree: newTree},
            success: function(response){
                window.location.href='/homepage';
                console.log('Success');
            },
            error: function(err){
                console.log(err);
            }
        });

    });
});



