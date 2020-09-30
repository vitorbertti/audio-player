<template>
  <div class="player">
    <h4><i class="material-icons">equalizer</i>Podcast</h4>
    <div class="card">
      <div class="card-image"></div>
      <div class="card-content">
        <h5>Title</h5>
        <p class="artist">Artist</p>
        <audio controls src="../assets/files/como-comecei.mp3"></audio>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Player',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
