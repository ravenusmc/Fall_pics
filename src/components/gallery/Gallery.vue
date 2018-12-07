<template lang="html">
  <div>
  <h1 class='center'>Gallery Page</h1>

    <div class='gallery_area'>

      API to use: https://www.npmjs.com/package/pexels-api-wrapper

      <h3>{{ pics }}</h3>

      <div>
      </div>

      <div>
      </div>

      <div>
      </div>

      <div>
      </div>

      <div>
      </div>

      <div>
      </div>

      <div>
      </div>

      <div>
      </div>

      <div>
      </div>

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
    computed: {
      getPics() {
        pexelsClient.getPopularPhotos(9, 1)
            .then(function(result){
                while (this.count < 10) {
                  pic = result.photos[0].url
                  this.
                  this.count++;
                }
                console.log();
            }).
            catch(function(e){
                console.err(e);
            });
        this.pics = [1,2,3];
      }
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
