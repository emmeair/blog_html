<template>
   
  <v-card
    flat
    color=""
    :class="`d-flex justify-center`"
    height="100%"
    style="background:url(https://cdn.vuetifyjs.com/images/cards/dark-beach.jpg) no-repeat;background-size:100% 100%"
    
  >

    <v-card
      color="blue-grey"
      dark 
      :loading="isUpdating"
      max-width="700"
      max-height="610" 
      :class="`align-self-center`"
    >
      <template v-slot:progress>
        <v-progress-linear
          absolute
          color="green lighten-3"
          height="5"
          indeterminate
        ></v-progress-linear>
      </template>
      <v-img
        height="200"
        src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
      >
        <v-row>
          <v-col
            class="text-right"
            cols="12"
          >
            <v-menu
              bottom
              left
              transition="slide-y-transition"
            >
            </v-menu>
          </v-col>
          <v-row
            class="pa-12"
            align="center"
            justify="center"
          >
            <v-col class="text-center">
              <p class="headline display-2">注册</p>
              <span class="grey--text text--lighten-1">Please Login or register</span>
            </v-col>
          </v-row>
        </v-row>
      </v-img>
      <v-form>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="email"
                :disabled="isUpdating"
                filled
                color="blue-grey lighten-2"
                label="昵称"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="password"
                :disabled="isUpdating"
                filled
                color="blue-grey lighten-2"
                label="邮箱"
              ></v-text-field>
            </v-col>
             <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="password"
                :disabled="isUpdating"
                filled
                color="blue-grey lighten-2"
                label="密码"
              ></v-text-field>
            </v-col>
             <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="password"
                :disabled="isUpdating"
                filled
                color="blue-grey lighten-2"
                label="确认密码"
              ></v-text-field>
            </v-col>
          </v-row> 
        </v-container>
      </v-form>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn
          :disabled="autoUpdate"
          :loading="isUpdating"
          color="blue-grey darken-3"
          depressed
          @click="isUpdating = true"
        >
          <v-icon left>mdi-update</v-icon>
          立即注册
        </v-btn>
      </v-card-actions>
    </v-card>

  </v-card>

</template>
<script>
  export default {
    data () {
      return {
        autoUpdate: false,
        friends: ['Sandra Adams', 'Britta Holt'],
        isUpdating: false,
        email: '',
        password: '',
      }
    },

    watch: {
      isUpdating (val) {
        let then = this
         this.$axios({
                method:'post',
                url:then.$web_api,
                data:{}
            }).then((response) =>{          //这里使用了ES6的语法
                console.log(response)       //请求成功返回的数据
            }).catch((error) =>{
                console.log(error)       //请求失败返回的数据
            })
        if (val) {
          setTimeout(() => (this.isUpdating = false), 3000)
        }
      },
    },

    methods: {
      remove (item) {
        const index = this.friends.indexOf(item.name)
        if (index >= 0) this.friends.splice(index, 1)
      },
    },
  }
</script>