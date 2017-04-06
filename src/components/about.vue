<template>
    <div>
        <div class="text-center">
            <h1>About Me</h1>
            <p><i class="el-icon-loading"></i> 一介程序员莽夫</p>
            <p><i class="el-icon-loading"></i> 一介程序员莽夫</p>
            <p><i class="el-icon-loading"></i> 一介程序员莽夫</p>
        </div>
        <div class="text-center">
            <p>
                <strong>技能：</strong>
                <el-checkbox label="吃饭"
                             checked></el-checkbox>
                <el-checkbox label="睡觉"
                             checked></el-checkbox>
                <el-checkbox label="打豆豆"></el-checkbox>
            </p>
            <p>
                <strong>特长：</strong>
                <el-checkbox label="吃饭"></el-checkbox>
                <el-checkbox label="睡觉"></el-checkbox>
                <el-checkbox label="打豆豆"
                             checked></el-checkbox>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    created: function () {
        // this.$bus.emit('change-index', '3')
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.$bus.emit('change-index', 'About')
        })
    },
    methods: {

    }
}
</script>