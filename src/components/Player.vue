<template>
  <div class="player">
    <h4><i class="material-icons">equalizer</i>Podcast</h4>
    <div class="card">
      <div class="card-image"></div>
      <div class="card-content">
        <h5>Title</h5>
        <p class="artist">Artist</p>
        <audio controls ></audio>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player',
  mounted() {
    const cover = document.querySelector('.card-image');
    const title = document.querySelector('.card-content h5');
    const artist = document.querySelector('.card-content .artist');
    const audio = document.querySelector('audio');

    const data = {
      title: 'Como começei a programar / Por que criamos a Rocketseat / Nossa Stack',
      artist: 'Diego Fernandes',
      cover: '../assets/files/como-comecei.jpg',
      file: '../assets/files/como-comecei.mp3',
    };

    cover.style.backgrond = `url('${data.cover}') no-repeat center center / cover`;
    title.innerText = data.title;
    artist.innerText = data.artist;
    audio.src = data.file;
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
