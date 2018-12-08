<template lang="html">
  <div>

    <div class='header'>
      <h1 class='center'>Gallery Page</h1>
    </div>

    <div class='gallery_area'>
      <div v-for="picture in pictures">
          <img :src="picture">
      </div>
    </div>

  </div>
</template>

<script>
  //Importing the API Key
  import KEY from './test.js'
  //import axios from 'axios';
  //requiring the pexels library
  const PexelsAPI = require('pexels-api-wrapper');
  let pexelsClient = new PexelsAPI(KEY.KEY);

  export default { //Start of Vue instance
    name: 'Gallery',
    data() {
      return {
        pictures: [],
        count: 0
      }
    },
    mounted() { // Start of mounted function
      console.log(this.pics)
      pexelsClient.getPopularPhotos(10, 1)
        .then((result) => {
          console.log(result)
          let counter = this.count;
          let pics = this.pictures;
          while (counter < 9) {
            pics.push(result.photos[counter].src.medium);
            counter++;
          }
          this.pictures = pics;
      })
    }//End of mounted function
  }//End of Vue instance

</script>

<style lang="css" scoped>

  .center {
    text-align: center;
  }

  .header {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .gallery_area {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1em;
    margin-bottom: 10px;
  }

  img {
    height: 300px;
    width: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 2px solid black;
  }

  @media only all and (max-width: 1100px){

    .gallery_area {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media only all and (max-width: 768px){

    .gallery_area {
      grid-template-columns: 1fr;
    }
  }

</style>
