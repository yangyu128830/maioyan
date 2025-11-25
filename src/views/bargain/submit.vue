<template>
  <div id="bargain-submit">
    <Header title="发布爆料">
      <i class="back" @touchstart="handleBack" @click="handleBack"></i>
    </Header>
    <div class="content">
      <div class="submit-form">
        <div class="form-group">
          <label for="product-name">商品名称</label>
          <input type="text" id="product-name" v-model="productName" placeholder="请输入商品名称">
        </div>

        <div class="form-group">
          <label for="product-price">商品价格</label>
          <input type="number" id="product-price" v-model="productPrice" placeholder="请输入商品价格">
        </div>

        <div class="form-group">
          <label for="original-price">原价</label>
          <input type="number" id="original-price" v-model="originalPrice" placeholder="请输入商品原价">
        </div>

        <div class="form-group">
          <label for="product-image">商品图片</label>
          <input type="file" id="product-image" @change="onImageChange">
          <img :src="imagePreview" alt="商品图片预览" v-if="imagePreview" class="image-preview">
        </div>

        <div class="form-group">
          <label for="product-description">商品描述</label>
          <textarea id="product-description" v-model="productDescription" placeholder="请输入商品描述" rows="5"></textarea>
        </div>

        <div class="form-group">
          <label for="product-url">商品链接</label>
          <input type="url" id="product-url" v-model="productUrl" placeholder="请输入商品购买链接">
        </div>

        <button class="submit-btn" @click="submitDeal" :disabled="isSubmitting">
          {{ isSubmitting ? '发布中...' : '发布爆料' }}
        </button>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  name: 'BargainSubmit',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      productName: '',
      productPrice: '',
      originalPrice: '',
      productImage: null,
      imagePreview: '',
      productDescription: '',
      productUrl: '',
      isSubmitting: false
    }
  },
  methods: {
    handleBack() {
      this.$router.go(-1);
    },
    onImageChange(e) {
      const file = e.target.files[0];
      if (file) {
        this.productImage = file;
        const reader = new FileReader();
        reader.onload = (event) => {
          this.imagePreview = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    submitDeal() {
      // 表单验证
      if (!this.productName || !this.productPrice || !this.originalPrice || !this.productDescription) {
        alert('请填写完整的商品信息');
        return;
      }

      // 模拟发布过程
      this.isSubmitting = true;
      setTimeout(() => {
        this.isSubmitting = false;
        alert('爆料发布成功！');
        this.$router.push('/bargain');
      }, 2000);
    }
  }
}
</script>

<style lang="scss" scoped>
#bargain-submit {
  .content {
    padding-top: 40px;
    padding-bottom: 60px;

    .submit-form {
      padding: 0 15px;

      .form-group {
        margin-bottom: 15px;

        label {
          display: block;
          font-size: 14px;
          font-weight: bold;
          color: #333;
          margin-bottom: 5px;
        }

        input,
        textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 14px;
          box-sizing: border-box;
        }

        textarea {
          resize: vertical;
        }

        .image-preview {
          width: 100px;
          height: 100px;
          object-fit: cover;
          margin-top: 10px;
          border-radius: 8px;
        }
      }

      .submit-btn {
        width: 100%;
        padding: 12px;
        background-color: #ff6b6b;
        color: #fff;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 20px;

        &:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>