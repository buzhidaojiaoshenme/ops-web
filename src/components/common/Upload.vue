<template>
    <el-upload
            class="upload-demo"
            v-bind:action="'http://' + action"
    >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传{{fileType}}文件，且不超过{{fileSize}}</div>
    </el-upload>
</template>

<script>
    export default {
        name: "Upload",
        methods: {
            handleChange: function () {
                alert("handlechange");
            },
            fileList: function () {
                alert("file file file");
                return [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}];
            }
        },
        computed: {
            fileType: function () {
                console.log('==' + this.$route.query.fileType);
                return this.$route.query.fileType;
            },
            fileSize: function () {
                console.log('==' + this.$route.query.fileSize);
                return this.$route.query.fileSize;
            },
            action: function () {
                console.log('==' + this.$route.query.action);
                return this.$route.query.action;
            }

        }

    }
</script>

<style scoped>
    @import url("//unpkg.com/element-ui@2.15.0/lib/theme-chalk/index.css");
</style>