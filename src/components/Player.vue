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
import data from '../service/data';

export default {
  name: 'Player',
  data() {
    return {
      player: {
        cover: document.querySelector('.card-image'),
        title: document.querySelector('.card-content h5'),
        artist: document.querySelector('.card-content .artist'),
        audio: document.querySelector('audio'),
      }
    }
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
        this.player.cover.style.backgrond = `url('${data.cover}') no-repeat center center / cover`;
        this.player.title.innerText = data.title;
        this.player.artist.innerText = data.artist;
        this.player.audio.src = data.file;
        this.player.audio.addEventListener('ended', () => {})
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
