<template lang="html">
  <div>

    <!-- Header area -->
    <div class='header'>
      <h1 class='center'>Gallery Page</h1>
    </div>
    <!-- End of header area -->

    <!-- Gallery Area -->
    <div class='gallery_area'>
      <div v-for="picture in pictures">
          <img class='gallery_images' :src="picture">
      </div>
    </div>
    <!-- End of gallery area -->

    <hr>

    <!-- Image search area -->
    <div class='image_search_div'>
      <h1 class='center'>Search Photo Area</h1>
      <input v-model='search' placeholder="Enter Search Term">
      <button class='search_pic_button' @click='submitSearch'>Submit</button>
      <div v-if="search_pic">
        <img class='seach_pic_image' :src='search_pic'>
      </div>
    </div>
    <!-- End of image search area -->

  </div>
</template>

<script>
  //Importing the API Key
  import KEY from './test.js'
  //requiring the pexels library
  const PexelsAPI = require('pexels-api-wrapper');
  //Setting up the call to the pexels API.
  let pexelsClient = new PexelsAPI(KEY.KEY);

  export default { //Start of Vue instance
    name: 'Gallery',
    data() {
      return {
        pictures: [],
        count: 0,
        search: '',
        search_pic: ''
      }
    },
    methods: { //Start of methods section
      submitSearch() {
        pexelsClient.search(this.search, 1, 1)
          .then((result) => {
            console.log(result)
              this.search_pic = result.photos[0].src.large;
          })
      }
    }, //End of methods section
    mounted() { // Start of mounted function
      pexelsClient.getPopularPhotos(10, 1)
        .then((result) => {
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
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 10px;
    justify-content: center;
  }

  .gallery_images {
    height: 300px;
    width: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: 2px solid black;
  }

  /* CSS for the image search area */
  .image_search_div {
    display: flex;
    flex-direction: column;
    flex-direction: center;
    align-items: center;
    margin-bottom: 50px;
  }

  .seach_pic_image {
    height: 650;
    width: 940;
    margin-top: 50px;
  }

  .search_pic_button {
    margin-top: 10px;
    background-color: #3a5787;
    border: #3a5787;
    padding: 12px;
    border-radius: 12px;
    color: #d68419;
  }

  .search_pic_button:hover {
    background-color: #d68419;
    border: #d68419;
    color: #3a5787;
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

    img {
      width: 300px;
    }
  }

</style>
