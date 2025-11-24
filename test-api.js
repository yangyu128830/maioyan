const axios = require('axios');

// 测试API请求
async function testApi() {
    try {
        // 测试猫眼API接口
        const response = await axios.get('http://m.maoyan.com/ajax/movieOnInfoList');
        console.log('API请求成功:', response.data);
    } catch (error) {
        console.error('API请求失败:', error.message);
        if (error.response) {
            console.error('响应状态:', error.response.status);
            console.error('响应数据:', error.response.data);
        }
    }
}

testApi();