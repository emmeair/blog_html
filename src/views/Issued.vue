<template>
  <div id="issues">
 
      <v-alert
      prominent
      type="error"
      style="margin-top:10px"
    >
      <v-row align="center">
        <v-col class="grow">您应知晓您发布的内容是否符合法律规定</v-col>
        <v-col class="shrink">
          <v-btn>必须滴</v-btn>
        </v-col>
      </v-row>
    </v-alert>
      <template>
        <v-card :loading="isUpdating" >
        <v-container fluid>
          <h1>发布文章</h1>
          <v-divider></v-divider>
          <v-row align="center">
            <v-col cols="12" sm="8">
              <v-text-field
                :counter="255"
                required
                label="标题"
                
              ></v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                :items="items"
                label="是否公开"
                outlined
              ></v-select>
            </v-col>
             <v-col cols="12" sm="6">
            <v-select
              v-model="e6"
              :items="tags"
              :menu-props="{ maxHeight: '400' }"
              label="Select"
              multiple
              hint="请选择您的标签"
              persistent-hint
              style="z-index:999"
            ></v-select>
          </v-col>
            <v-col cols="12" sm="12" style="z-index:1"> 
              <mavon-editor v-model="value" :toolbars="toolbars"/>
            </v-col>
          </v-row>
        </v-container>
        </v-card>
      </template>
      <v-btn block color="primary" @click="isUpdating = true" :loading="isUpdating">提交</v-btn>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isUpdating:false,
        value: "",
         toolbars: {
              bold: true, // 粗体
              italic: true, // 斜体
              header: true, // 标题
              underline: true, // 下划线
              strikethrough: true, // 中划线
              mark: true, // 标记
              superscript: true, // 上角标
              subscript: true, // 下角标
              quote: true, // 引用
              ol: true, // 有序列表
              ul: true, // 无序列表
              link: true, // 链接
              imagelink: true, // 图片链接
              code: true, // code
              table: true, // 表格
              readmodel: true, // 沉浸式阅读
              htmlcode: true, // 展示html源码
              help: true, // 帮助
              /* 1.3.5 */
              undo: true, // 上一步
              redo: true, // 下一步
              trash: true, // 清空
              save: true, // 保存（触发events中的save事件）
              /* 1.4.2 */
              navigation: true, // 导航目录
              /* 2.1.8 */
              alignleft: true, // 左对齐
              aligncenter: true, // 居中
              alignright: true, // 右对齐
              /* 2.2.1 */
              subfield: true, // 单双栏模式
              preview: true, // 预览
          },
          items:[
            "公开","仅自己可见"
          ],
          tags:[
            "编程",
            "教育",
            "经济",
            "学习", 
            "黄片",
          ]
      }
    },

  }
</script>