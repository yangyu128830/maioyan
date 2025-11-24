<template>
  <div id="submitBargain">
    <Header title="我要爆料" />
    <!-- 页面标题 -->
    <div class="page-header">
      <button class="back-btn" @click="goBack">返回</button>
      <h1>我要爆料</h1>
      <button class="submit-btn" @click="submitBargain" :disabled="!canSubmit">提交</button>
    </div>

    <!-- 商品信息表单 -->
    <div class="form-container">
      <!-- 商品图片上传 -->
      <div class="form-item">
        <label>商品图片</label>
        <div class="image-upload">
          <input type="file" id="imageInput" accept="image/*" @change="handleImageUpload" hidden>
          <div class="upload-area" @click="triggerImageUpload" v-if="!productImage">
            <i class="iconfont upload-icon">&#xe60d;</i>
            <p>点击上传商品图片</p>
          </div>
          <div class="image-preview" v-else>
            <img :src="productImage" alt="商品图片">
            <button class="remove-btn" @click="removeImage">×</button>
          </div>
        </div>
      </div>

      <!-- 商品名称 -->
      <div class="form-item">
        <label>商品名称 *</label>
        <input type="text" v-model="productName" placeholder="请输入商品名称" @input="checkForm">
      </div>

      <!-- 商品价格 -->
      <div class="form-item">
        <label>商品价格 *</label>
        <input type="number" v-model="productPrice" placeholder="请输入商品价格" step="0.01" @input="checkForm">
      </div>

      <!-- 商品原价 -->
      <div class="form-item">
        <label>商品原价</label>
        <input type="number" v-model="productOriginalPrice" placeholder="请输入商品原价" step="0.01">
      </div>

      <!-- 商品链接 -->
      <div class="form-item">
        <label>商品链接 *</label>
        <input type="url" v-model="productUrl" placeholder="请输入商品购买链接" @input="checkForm">
      </div>

      <!-- 商品分类 -->
      <div class="form-item">
        <label>商品分类 *</label>
        <select v-model="productCategory" @change="checkForm">
          <option value="">请选择商品分类</option>
          <option value="食品">食品</option>
          <option value="居家">居家</option>
          <option value="数码">数码</option>
          <option value="服装">服装</option>
          <option value="美妆">美妆</option>
          <option value="其他">其他</option>
        </select>
      </div>

      <!-- 商品描述 -->
      <div class="form-item">
        <label>商品描述 *</label>
        <textarea v-model="productDescription" placeholder="请描述商品特点、优惠信息等" rows="4" @input="checkForm"></textarea>
      </div>

      <!-- 爆料说明 -->
      <div class="form-item">
        <label>爆料说明</label>
        <textarea v-model="bargainDescription" placeholder="请说明您的爆料理由、购买建议等" rows="3"></textarea>
      </div>
    </div>

    <!-- 表单提示 -->
    <div class="form-tips">
      <p>• 请确保您的爆料信息真实、准确</p>
      <p>• 我们会对您的爆料进行审核，审核通过后将展示给其他用户</p>
      <p>• 优质的爆料将获得额外奖励</p>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header'

export default {
  name: 'SubmitBargain',
  components: {
    Header
  },
  data() {
    return {
      productImage: '',
      productName: '',
      productPrice: '',
      productOriginalPrice: '',
      productUrl: '',
      productCategory: '',
      productDescription: '',
      bargainDescription: '',
      canSubmit: false
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    triggerImageUpload() {
      document.getElementById('imageInput').click();
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.productImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    removeImage() {
      this.productImage = '';
      document.getElementById('imageInput').value = '';
    },
    checkForm() {
      // 检查必填项是否都已填写
      this.canSubmit = !!(this.productName && this.productPrice && this.productUrl && this.productCategory && this.productDescription);
    },
    submitBargain() {
      if (!this.canSubmit) {
        return;
      }

      // 构造爆料数据（当前未使用，可用于后续API调用）
      // const bargainData = {
      //   productImage: this.productImage,
      //   productName: this.productName,
      //   productPrice: this.productPrice,
      //   productOriginalPrice: this.productOriginalPrice,
      //   productUrl: this.productUrl,
      //   productCategory: this.productCategory,
      //   productDescription: this.productDescription,
      //   bargainDescription: this.bargainDescription
      // };

      // 提交爆料
      // console.log('提交爆料:', bargainData);
      this.$messageBox({
        title: '提示',
        content: '爆料提交成功，我们将尽快审核',
        cancel: null, // 只显示确定按钮
        handleOk: () => {
          // 确定按钮点击事件
          this.resetForm();
          setTimeout(() => {
            this.$router.go(-1);
          }, 1000);
        }
      });
      
      // 逻辑已移至messageBox的handleOk回调中
    },
    resetForm() {
      this.productImage = '';
      this.productName = '';
      this.productPrice = '';
      this.productOriginalPrice = '';
      this.productUrl = '';
      this.productCategory = '';
      this.productDescription = '';
      this.bargainDescription = '';
      this.canSubmit = false;
      document.getElementById('imageInput').value = '';
    }
  }
};
</script>

<style lang="scss" scoped>
#submitBargain {
  padding-bottom: 20px;
  background-color: #f5f5f5;
}

/* 页面标题样式 */
.page-header {
  height: 50px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border-bottom: 1px solid #ddd;
  position: fixed;
  top: 40px;
  left: 0;
  width: 100%;
  z-index: 100;
  
  .back-btn {
    background: none;
    border: none;
    font-size: 16px;
    color: #666;
    padding: 5px 10px;
  }
  
  h1 {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  
  .submit-btn {
    background-color: #ff4444;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 6px 12px;
    font-size: 14px;
    
    &:disabled {
      background-color: #ddd;
      color: #999;
    }
  }
}

/* 表单容器样式 */
.form-container {
  padding: 110px 15px 20px;
  
  .form-item {
    background-color: #fff;
    padding: 15px;
    margin-bottom: 10px;
    
    label {
      display: block;
      font-size: 14px;
      color: #333;
      margin-bottom: 10px;
      font-weight: 500;
    }
    
    input, select, textarea {
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 10px;
      font-size: 14px;
      box-sizing: border-box;
      
      &::placeholder {
        color: #999;
      }
    }
    
    textarea {
      resize: none;
    }
  }
}

/* 图片上传样式 */
.image-upload {
  .upload-area {
    width: 100%;
    height: 120px;
    border: 2px dashed #ddd;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #999;
    cursor: pointer;
    
    .upload-icon {
      font-size: 32px;
      margin-bottom: 10px;
    }
    
    p {
      font-size: 14px;
    }
  }
  
  .image-preview {
    position: relative;
    width: 100%;
    height: 120px;
    border-radius: 4px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .remove-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      border: none;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

/* 表单提示样式 */
.form-tips {
  padding: 0 15px;
  
  p {
    font-size: 12px;
    color: #999;
    margin-bottom: 5px;
  }
}
</style>