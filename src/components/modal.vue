<template>
    <el-dialog title="提示" v-model="dialogVisible" size="small" @close="closeModal">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
</template>
<script>
  export default {
    data() {
      return {
        dialogVisible: true
      };
    },
    methods: {
        closeModal: function(){
            this.$router.go(-1);
        }
    }
  };
</script>