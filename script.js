const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
    },
    {
        image: 'img/02.jpg',
        title: 'Colombia',
        text: 'Lorem ipsum. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
    },
    {
        image: 'img/03.jpg',
        title: 'Perù',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
        image: 'img/04.jpg',
        title: 'Chile',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
    },
    {
        image: 'img/05.jpg',
        title: 'Argentina',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.'
    }
];

console.log(slides);

const app = new Vue
    (
        {
            el: '#root',
            data: {
                index: 0,
                images: [
                    {
                        image: 'img/01.jpg',
                        title: 'Svezia',
                        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                    },
                    {
                        image: 'img/02.jpg',
                        title: 'Colombia',
                        text: 'Lorem ipsum. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                    },
                    {
                        image: 'img/03.jpg',
                        title: 'Perù',
                        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                    },
                    {
                        image: 'img/04.jpg',
                        title: 'Chile',
                        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
                    },
                    {
                        image: 'img/05.jpg',
                        title: 'Argentina',
                        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.'
                    }
                ]

            },


        }
    )    
