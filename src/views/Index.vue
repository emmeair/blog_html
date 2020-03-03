<template>
<div>

  <v-parallax height="400" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">首页</h1>
        <h4 class="subheading">Build your application today!</h4>
      </v-col>
    </v-row>
  </v-parallax>
<v-skeleton-loader
      style="padding-top: 10px;"
      class="mx-auto"
      max-width="800"
      type="image,list-item-three-line,button"
></v-skeleton-loader>

  <v-container class="lighten-5 mb-6" >
      <v-row :align="align" no-gutters style="padding-top: 10px;" >
        <v-col>
          <v-card class="mx-auto" max-width="800" >
         
            <v-card-text class="title font-weight-bold">
              Number 22
               <v-chip
                class="ma-2"
                color="green"
                label
                text-color="white"
              >
                <v-icon left>mdi-label</v-icon>
                GOLang
              </v-chip>
            </v-card-text>
            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>
              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange" text >
                More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row :align="align" no-gutters style="padding-top: 10px;" >
        <v-col>
          <v-card class="mx-auto" max-width="800">
            <v-img class="white--text" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>
            <v-card-text class="title font-weight-bold">Number 22</v-card-text>
            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>
              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange" text >
                More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row :align="align" no-gutters style="padding-top: 10px;">
        <v-col>
          <v-card class="mx-auto" max-width="800" >
            <v-img class="white--text" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>
            <v-card-text class="title font-weight-bold">Number 22</v-card-text>
            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>
              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange" text >
                More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row :align="align" no-gutters style="padding-top: 10px;">
        <v-col>
          <v-card class="mx-auto" max-width="800" >
            <v-img class="white--text" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>
            <v-card-text class="title font-weight-bold">Number 22</v-card-text>
            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>
              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange" text >
                More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</div>
</template>

