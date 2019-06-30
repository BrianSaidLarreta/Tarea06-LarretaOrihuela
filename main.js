var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/blog');

var Blogs = mongoose.model('Blog',schema,'Blogs')

var blogs = new Blogs({
    title: 'Tarea 0.6' ,
    author:'Brian Said Larreta Orihuela' ,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in                 reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt                in culpa qui officia deserunt mollit anim id est laborum.',
    comments: [{ body:'Lorem ipsum dolor sit amet,      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut       enim ad minim veniam.', 
    date: '2019-06-30'}
    ],
    date: '2019-06-30',
    hidden: false,
    meta:{
        votes:0,
        favs:0
    }
});

blogs.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Guardado");
    process.exit(0);
});

blogs.find({},function(error, b){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("<---- Consulta General ---->");
    console.log(b);
});

Blogs.update({_id:'5d18e8fb5e02932ea09f997c'},
        {$set:{
            title: 'Tarea 0.6' ,
            author:'Brian Said Larreta Orihuela' ,
            body: 'Cuerpo Actualizado',
            comments: [{ body:'Lorem ipsum dolor sit amet,      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut       enim ad minim veniam.', 
                        date: '2019-06-30'}
            ],
            date: '2019-06-30',
            hidden: true,
            meta:{
                votes:0,
                favs:0
            }
        }},
        function(error,docs){
            if(error){
                console.log(error);
                process.exit(1);
            }
            console.log("<---- Actualizar ---->");
            console.log(docs);
            process.exit(0);
});

Blogs.deleteOne({_id:'5d18e235f212701e5c74ad0b'},function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("<---- Eliminar ---->");
    console.log(docs);
    process.exit(0);
});



