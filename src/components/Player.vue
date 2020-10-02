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
  data: {
    player = {
      cover: document.querySelector('.card-image'),
      title: document.querySelector('.card-content h5'),
      artist: document.querySelector('.card-content .artist'),
      audio: document.querySelector('audio'),
      data: {
        title: 'Como começei a programar / Por que criamos a Rocketseat / Nossa Stack',
        artist: 'Diego Fernandes',
        cover: '../assets/files/como-comecei.jpg',
        file: '../assets/files/como-comecei.mp3',
      },
      start: (() => {
        this.player.cover.style.backgrond = `url('${this.player.data.cover}') no-repeat center center / cover`;
        this.player.title.innerText = this.player.data.title;
        this.player.artist.innerText = this.player.data.artist;
        this.player.audio.src = this.player.data.file;
      }),
    }
  },
  mounted() {
    this.player.start();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
