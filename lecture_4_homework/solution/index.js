var request = require('request');
var api_url = 'https://jsonplaceholder.typicode.com/posts';
var _ = require('lodash');
var async = require('async');
var fs = require('fs');

function create_files(posts_by_users, callback){
    async.each(posts_by_users, function(posts_by_a_user){
        var fileName = posts_by_a_user.userId + '.txt';
        var content = posts_by_a_user.titles.join('\n');
        fs.writeFile('./tmp/'+fileName,content, function(err){
            console.log('File save');
        });
    })
}


var tasks = [
    function(callback){
        request.get(api_url, function(err, response){
            var posts = JSON.parse(response.body);
            return callback(null, posts);
        })
    },
    function(posts, callback){
        var users = _.groupBy(posts, 'userId');
        var posts_by_users = [];
        for(userId in users){
            var posts = users[userId];
            var titles = posts.map(function(post){
                return post.title;
            });
            var posts_by_a_user = {
                userId: userId,
                titles: titles
            };
            posts_by_users.push(posts_by_a_user);
        }
        return callback(null, posts_by_users);
    },
    function(posts_by_users, callback){
        create_files(posts_by_users, function(err, result){
            return callback(err, result);
        })
    }
];

async.waterfall(tasks, function(err, results){
    console.log(results);
})

