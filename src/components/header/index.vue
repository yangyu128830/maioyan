<template>
    <div id="headerPage">
       <slot></slot>
       <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    // 添加name ，放便好调试。
    name:'headerPage',
    props:{
        title:{
            type:String,
            default:'喵眼电影'
        }
    }
}
</script>

<style lang="scss" scoped>
    #headerPage{
        position: fixed;
        top: 0;
        left:0;
        height: 48px;
        width: 100%;
        background: linear-gradient(135deg, #ff4d4f 0%, #ff7875 100%);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        color: #fff;
        h1{
            font-size: 18px;
            font-weight: 500;
            margin: 0;
        }
    }
</style>