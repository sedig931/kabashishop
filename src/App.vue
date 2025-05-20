<template>
  <router-view />
</template>


<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
:root {
  --color-back-primary: #c5cd25;
  --gradient-rGb-primary: linear-gradient(to right, #1cad1a, #54d33a);
  --gradient-Rgb-primary: linear-gradient(to right, #dd4d3a, #df6565);

  --gradient-btnLogin-primary: linear-gradient(to top right, #5591e5, #a587f1);
  --btnLogin-hover-primary: linear-gradient(to top right, #508adc, #a381f7);

  --gradient-back-primary: linear-gradient(to bottom, #c5cd25, #d6de4c);
  --gradient-back: linear-gradient(to top, #c5cd25, #d6de4c);
  /* --color-back-primary: #118a5c; */
  /* --gradient-back-primary: linear-gradient(to bottom, #39b385, #9be15d);
  --gradient-back: linear-gradient(to top, #39b385, #9be15d); */
  --gradient-back-bottom: linear-gradient(to bottom, #c5cd25, #d6de4c);
  --gradient-back-bottom-primary: linear-gradient(to bottom, #c5cd25, #d6de4c);

  --gradient-back-sec2-aaw: linear-gradient(to bottom, #d6de4c, #c5cd23);
  --gradient-back-sec2-alkj: linear-gradient(to bottom, #d0d74b, #cdd53f);
  --gradient-back-sec2-qwww: linear-gradient(to bottom, #cdd53f, #d6de1a);

  --gradient-back-footer: linear-gradient(to top, #ced627, #edf374);
  --gradient-back-top-footer: linear-gradient(to top, #edf374, #f0f593);
  --gradient-back-top2-footer: linear-gradient(to top, #f0f593, #f0f49e);

  --gradient-backright-bottom-login: linear-gradient(
    to top left,
    #afb625,
    #f0f593
  );
  --gradient-backright-login: linear-gradient(to top left, #d5db73, #e0e584);

  --gradient-backleft-top-login: linear-gradient(
    to bottom right,
    #c5cd25,
    #e7eb96
  );
  --gradient-backleft-topright-login: linear-gradient(
    to bottom right,
    #ced549,
    #ecedd9
  );
  --gradient-backleft-bottom-right-login: linear-gradient(
    to bottom,
    #d9df66,
    #eff1bd
  );
}
* {
  margin: 0;
  padding: 0;
}
</style>
