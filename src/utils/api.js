import EndPoint from '../config';

export const loginConfig = ({
    url: `${EndPoint.DEV.BASE_URL}/login`,
    method: 'POST',
})
// export const registerUserConfig = () => ({
//     url: `${EndPoint.DEV.BASE_URL}/adduser`,
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })