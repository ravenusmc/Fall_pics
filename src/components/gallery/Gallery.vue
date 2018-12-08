<template lang="html">
  <div>
  <h1 class='center'>Gallery Page</h1>

    <div class='gallery_area' v-for="pic in pics">

    


    </div>

  </div>

</template>

<script>
  //Importing the API Key
  import KEY from './test.js'
  //requiring the pexels library
  const PexelsAPI = require('pexels-api-wrapper');
  let pexelsClient = new PexelsAPI(KEY.KEY);

  // pexelsClient.getPopularPhotos(9, 1)
  //     .then(function(result){
  //         console.log(result.photos[0].url);
  //     }).
  //     catch(function(e){
  //         console.err(e);
  //     });


  export default {
    name: 'Gallery',
    data() {
      return {
        pics: [],
        count: 0
      }
    },
    mounted(){
      pexelsClient.getPopularPhotos(9, 1)
          .then(function(result){
              while (this.count < 10) {
                let pic = result.photos[0].url
                this.pics.push(pic);
                this.count++;
              }
              console.log();
          }).
          catch(function(e){
              console.err(e);
        });
    }
  }

</script>

<style lang="css" scoped>
  .center {
    text-align: center;
  }

  .gallery_area {
    grid-template-columns: ;
    grid-template-rows: ;
  }

</style>
