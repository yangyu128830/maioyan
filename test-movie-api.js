const axios = require('axios');

// 测试电影API接口
async function testMovieApi() {
    try {
        // 测试正在热映接口
        const response = await axios.get('http://m.maoyan.com/ajax/movieOnInfoList');
        console.log('正在热映API请求成功:', response.data);
        console.log('数据结构:', JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.error('正在热映API请求失败:', error.message);
        if (error.response) {
            console.error('响应状态:', error.response.status);
            console.error('响应数据:', error.response.data);
        }
    }
}

testMovieApi();