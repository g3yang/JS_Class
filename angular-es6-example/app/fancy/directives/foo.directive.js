export default function(){
    return {
        template:'<h1> This is a Foo with {{info.name}} </h1>',
        scope:{
            info: '='
        }
    }
}