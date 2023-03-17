import axios from 'axios';

const client = axios.create({
    baseURL: 'https://solvide.microcms.io/api/v1/', // APIのURLを設定します。
    headers: {
      'X-API-KEY': 'A8OTP6XIr8kNjkXW5MENxUSGvneZXO1mfO29', // マイクロCMSのAPIキーを設定します。
    },
  });
  
  export const getPosts = async () => {
    const { data } = await client.get('/works'); // コンテンツのエンドポイントを指定して、コンテンツを取得します。
    return data.contents;
};