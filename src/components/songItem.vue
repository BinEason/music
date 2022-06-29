<template>
  <van-cell center :title="name" size="large" :label="artistor +' - '+name" >
          <template #right-icon >
    <van-icon name="play-circle-o" size="0.8rem" @click="playFn" />
  </template>
 </van-cell>
</template>

<script>
export default {
    props:{
        name:String,
        artistor:String,
        id:Number
    },
    methods: {
      playFn(){
        this.$router.push({
           path: '/play', 
           query:{
             id:this.id
           }
        })
      }
    }

}
</script>

<style scoped>
.van-cell{
  border-bottom: 1px solid lightgrey;
}
</style>