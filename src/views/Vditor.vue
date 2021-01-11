<template>
    <div style="padding-bottom: 50px;">
        <a-button @click="getMd">获取md</a-button>
        <a-button @click="getHtml">获取html</a-button>
        <a-button @click="cleanAc">清空内容</a-button>
        <a-button @click="rmAc">销毁</a-button>
        <a-button @click="previewAc">预览</a-button>
        <a-row>
            <a-col span="12">
                <div id="editor" style="margin: 50px 100px;"></div>
            </a-col>
            <a-col span="12">
                <div id="preview"></div>
            </a-col>
        </a-row>
    </div>
</template>

<script lang="ts">
    import {defineComponent, onMounted, onUnmounted} from 'vue'
    import Vditor from 'vditor'
    import "vditor/dist/index.css"

    export default defineComponent({
        name: "Vditor",
        setup() {
            let vditor = null

            //初始化编辑器
            onMounted(() => {
                vditor = new Vditor('editor', {
                    minHeight: 500,
                    // theme:'dark'
                })
            })
            //获取md内容
            const getMd = () => {
                if (!vditor) {
                    return
                }
                console.log(vditor.getValue())
            }
            //获取html内容
            const getHtml = () => {
                if (!vditor) {
                    return
                }
                console.log(vditor.getHTML())
            }
            //销毁编辑器
            const rmAc = () => {
                if (!vditor) {
                    return
                }
                vditor.destroy()
                vditor = null
            }
            //清空编辑区内容
            const cleanAc = () => {
                if (!vditor) {
                    return
                }
                vditor.setValue('')
            }
            //单独预览md内容,可以用于显示文档页面
            const previewAc = () => {
                const md = vditor.getValue()
                const dom: HTMLDivElement = document.getElementById('preview') as HTMLDivElement
                Vditor.preview(dom, md, null).then(() => {
                })
            }
            //销毁
            onUnmounted(() => {
                rmAc()
            })
            return {getMd, getHtml, rmAc, cleanAc, previewAc}
        }
    })
</script>

<style scoped lang="less">

</style>