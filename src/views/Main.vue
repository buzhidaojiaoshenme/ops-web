<template>

    <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    router
            >
                <div>
                    <h1>RPC</h1>
                </div>
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>凌拓数据处理</template>
                    <!--                    <el-submenu index="1-4">-->
                    <!--                        <template slot="title">选项4</template>-->
                    <el-menu-item
                            index="/upload">
                        bom
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        jv服务注册
                    </el-menu-item>
                    <!--                    </el-submenu>-->
                </el-submenu>

            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>王一博</span>
            </el-header>

            <el-main>
                <router-view>
                    <!--                    <el-table :data="tableData">-->
                    <!--                        <el-table-column prop="date" label="日期" width="140">-->
                    <!--                        </el-table-column>-->
                    <!--                        <el-table-column prop="name" label="姓名" width="120">-->
                    <!--                        </el-table-column>-->
                    <!--                        <el-table-column prop="address" label="地址">-->
                    <!--                        </el-table-column>-->
                    <!--                    </el-table>-->
                </router-view>
            </el-main>
        </el-container>
    </el-container>

</template>

<script>

    export default {
        name: "Main",
        components: {},
        computed: {
            tableData: function () {
                const item = {
                    date: new Date(),
                    name: '王传福',
                    address: '北京市昌平区'
                }
                return Array(10).fill(item);
            }
        }
    }
</script>

<style scoped>
    @import url("//unpkg.com/element-ui@2.15.0/lib/theme-chalk/index.css");

    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }


</style>