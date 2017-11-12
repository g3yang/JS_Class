export default function() {
    return {
        restrict: 'A',
        link: function(scope, element){
            element.bind('mouseenter', function () {
                element.css('background-color', 'yellow');
            });
            element.bind('mouseleave', function(){
                element.css('background-color','white');
            })
        }
    }
}