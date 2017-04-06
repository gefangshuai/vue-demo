<template>
    <div>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple">
                    <el-menu theme="dark"
                             :default-active="activeIndex"
                             class="wrapper"
                             mode="horizontal"
                             @select="handleSelect">
                        <el-menu-item index="Index">
                            首页
                        </el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">下拉菜单
                            </template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">选项3</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="About">
                            关于我
                        </el-menu-item>
                    </el-menu>
                    <div class="line"></div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    created() {
        this.$bus.on('change-index', this.changeIndex);
    },
    data() {
        return {
            activeIndex: '1'
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            this.$router.push({name: key})
        },
        changeIndex: function (index) {
            this.activeIndex = index
        }
    }
}
</script>