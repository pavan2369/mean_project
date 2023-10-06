const about = (req, res) => {
    res.render('about-text', { title: 'About' });
};
const review = (req, res) => {
    res.render('review', { title: 'Review' });
};

module.exports = {
    about,
    review
};