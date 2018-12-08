<template lang="html">
  <div>
  <h1 class='center'>Gallery Page</h1>

    <div class='gallery_area' v-for="pic in pics">

      <div>
        {{ pic }}
      </div>

    </div>

  </div>
</template>

<script>
  //Importing the API Key
  import KEY from './test.js'
  import axios from 'axios';
  //requiring the pexels library
  const PexelsAPI = require('pexels-api-wrapper');
  let pexelsClient = new PexelsAPI(KEY.KEY);

        // pexelsClient.getPopularPhotos(9, 1)
        // .then(function(result){
        //     console.log(result.photos[0].url);
        // }).
        // catch(function(e){
        //     console.err(e);
        // });


  export default {
    name: 'Gallery',
    data() {
      return {
        pics: [1,2],
        count: 100
      }
    },
    // mounted() {
    //   axios.get("https://api.pexels.com/v1/search?query=example+query&per_page=15&page=1")
    //       .then(response => {
    //         this.results = response.data.results
    //         console.log(this.results)
    //       })
    //
    // }
    mounted() {
      console.log(this.count)
      console.log(this.pics)
      let test = this.count;
      pexelsClient.getPopularPhotos(10, 1)
          .then(function(result){
              console.log(test);
              console.log(result.photos[0].url);
              return result;
          })
          // console.log(result);
    }//End of mounted function
  }//End of Vue instance

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
