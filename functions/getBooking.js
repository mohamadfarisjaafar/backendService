async function getBookingByPnr(req, res) {
    console.log('getBookingByPnr');
    res.json({
        status: 'Success',
        response: 'data from  getBookingByPnr'
    });
}

module.exports = getBookingByPnr;