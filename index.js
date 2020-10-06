const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 5000;

const year = new Date().getFullYear();
const month = new Date().toLocaleDateString().split('-')[1].length === 1 ? 0 + new Date().toLocaleDateString().split('-')[1] : new Date().toLocaleDateString().split('-')[1];
const day = new Date().toLocaleDateString().split('-')[2].length === 1 ? 0 + new Date().toLocaleDateString().split('-')[2] : new Date().toLocaleDateString().split('-')[2];
const date = year+month+day;


const currentPut = async () => {
  let response;
  try {
    response = await axios.get(
      `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=cdMC%2FlakAyY9pawmwa6muCsJcjojfOUGLRVax80%2FX8f7ait9XVAfKxmdPy2An5A6sJ24q0Hnt9Ie92Z2sgTr7w%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20200910&endCreateDt=${date}&`
    );
  } catch (e) {
    console.log(e);
  }
  return response;
};

app.get("/", (req, res) => {
  currentPut().then((response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(response.data.response.body);
  });
}); //node서버에서 프론트서버로 데이터를 보내기 위한 코드

app.listen(PORT, () => {
  console.log(`포트${PORT}서버가 연결되었습니다.`);
});
