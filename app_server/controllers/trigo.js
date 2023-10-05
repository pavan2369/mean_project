const homelist = (req, res) => {
    res.render('tourism', {
        title: 'Telangana Tourism',
        pageHeader: {
            title: 'Explore Telangana',
            strapline: 'Discover the Beauty of Telangana!'
        },
        destinations: [
            {
                name: 'Hyderabad',
                description: 'The capital city of Telangana known for its rich history and modernity.',
                href:'/destinationinfo1'
            },
            {
                name: 'Warangal',
                description: 'A city with a glorious past and historical monuments.',
                href:'/destinationinfo2'
            },
            
            {
                name: 'karimnagar',
                description: 'Karimnagar is also known as Elagandula is a city and District Headquarters in the Indian state of Telangana. Karimnagar is a major urban agglomeration and third largest city in the state',
                href:'/destinationinfo3'

            },
            {
                name: 'Khammam district ',
                description: 'Khammam district is a vivid kaleidoscope of historical temples, heritage monuments, soothing lakes, rich cultures and festivities and has natural endowments in Flora and Fauna.',
            
                href:'/destinationinfo4'

            },
            {
                name: 'Adilabad',
                description:  'The district derives its name from Adilabad, its headquarters town which was named after the ruler of Bijapur, Ali Adil Shah',
                href:'/destinationinfo5'

            }
        ]
    });
};

const destinationinfo1 = (req, res) => {
    res.render('destinationinfo1', { title: 'Destination Info' });
};
const destinationinfo2 = (req, res) => {
    res.render('destinationinfo2', { title: 'Destination Info' });
};
const destinationinfo3 = (req, res) => {
    res.render('destinationinfo3', { title: 'Destination Info' });
};
const destinationinfo4 = (req, res) => {
    res.render('destinationinfo4', { title: 'Destination Info' });
};
const destinationinfo5 = (req, res) => {
    res.render('destinationinfo5', { title: 'Destination Info' });
};
//---------------------------------------activityinfo---------------------------
const activityInfo = (req, res) => {
    res.render('activityInfo',{
     title: 'Activites' ,
    pageHeader: {
        title: 'Explore Telangana',
        strapline: 'Discover the Beauty of Telangana!'
    },
    activities  : [
    {
        name: 'Heritage Walk',
        description: 'Explore the historical sites and architecture of Telangana.',
        duration: '3 hours'
    },
    {
        name: 'Cuisine Tour',
        description: 'Indulge in the delicious Telangana cuisine.',
        duration: '4 hours'
    
    }

]
});
};

module.exports = {
    homelist,
    destinationinfo1,
    destinationinfo2,
    destinationinfo3,
    destinationinfo4,
    destinationinfo5,

   activityInfo
};