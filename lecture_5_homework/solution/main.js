var request = require('request');
var api_url = 'https://jsonplaceholder.typicode.com/posts';
var _ = require('lodash');
var Promise = require('promise');
var fs = require('fs');

function getAllPosts(){
    return new Promise((resolve, reject)=>{
        request.get(api_url, function(err, response){
            const posts = JSON.parse(response.body);
            resolve(posts);
        })
    })
}

function createPostsByUser(posts){
    const postsById = _.groupBy(posts, 'userId');
    const posts_by_user = [];
    _.forOwn(postsById,(val, key)=>{
        const userId = key;
        const titles = _.map(val, 'title');
        posts_by_user.push({
            userId: key,
            titles
        })
    })
    return posts_by_user;
}


function saveToFile(user){
    return new Promise((resolve, reject)=>{
        var fileName = user.userId + '.txt';
        var content = user.titles.join('\n');
        fs.writeFile('./tmp/'+fileName,content, function(err){
            if(err){
               return reject(err);
            }
            resolve();
        });
    });
}


getAllPosts().then((posts)=>{
   const postsByUser = createPostsByUser(posts);
   const promises = _.map(postsByUser, (user)=>{
        return saveToFile(user);
   });
   return Promise.all(promises);
}).then(()=>{
    console.log('All files created');
},(err)=>{
    console.log(err);
});






