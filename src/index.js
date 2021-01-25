module.exports = function toReadable (number) {

    if(!number || number === 0) return 'zero';

    const oneToTwenty = ['','one','two','three','four','five','six','seven','eight','nine','ten',
        'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const tens = ['', '', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

    const num = ('0000000'+ number).slice(-6).match(/^(\d{1})(\d{2})(\d{1})(\d{2})$/);
    if(!num) return;

    let res = num[1] != 0 ? oneToTwenty[Number(num[1])] + ' hundred ' : '';
    res += num[2] != 0 ? (oneToTwenty[Number(num[2])] || `${tens[num[2][0]]} ${oneToTwenty[num[2][1]]}`) + ' thousand ' : '';
    res += num[3] != 0 ? oneToTwenty[Number(num[3])] + ' hundred ' : '';
    res += num[4] != 0 ? (oneToTwenty[Number(num[4])] || `${tens[num[4][0]]} ${oneToTwenty[num[4][1]]}`) + '' : '';

    return res.trim();
}
