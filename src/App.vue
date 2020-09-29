<template>
   <div id="app">
      <div id="nav">
         <router-link to="/">Home</router-link> |
         <router-link to="/about">About</router-link>
      </div>
      <router-view />
   </div>
</template>

<style lang="scss">
@import 'https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css';
@import 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css';

</style>
