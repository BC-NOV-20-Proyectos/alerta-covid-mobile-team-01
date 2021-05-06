const url_API = 'https://hidden-cliffs-21927.herokuapp.com/api/';
const loginApi = `${url_API}/user/sign_in?`;
const logOutApi = `${url_API}/user/sign_out`;
const GetPlace = `${url_API}/reports/place_reports`;
const reportApi = `${url_API}/incident`;
const ResetPasswordApi = `${url_API}/recovery/password`;

export {loginApi, logOutApi, GetPlace, reportApi, ResetPasswordApi};
