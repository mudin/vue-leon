<template>
  <div class="vue-leon-wrapper" />
</template>
<script>
import Leon from '../lib/leon.js';

import { TweenMax, Power4 } from 'gsap/TweenMax';

export default {
  props: {
    pixelRatio: {
      type: Number,
      default: () => 1
    },
    options: {
      type: Object,
      default: () => {
        return {
          text: '',
          size: 500,
          weight: 1,
          color: ['#000000'],
          colorful: ['#c5d73f', '#9d529c', '#49a9db', '#fec330', '#5eb96e', '#fc5356', '#f38f31'],
          tracking: 0,
          leading: 0,
          align: 'left',
          pathGap: 0.5,
          amplitude: 0.5,
          width: 0,
          breakWord: false,
          fps: 30,
          isPath: false,
          isWave: false,
          isColorful: false
        };
      }
    },
    controll: {
      type: Object,
      default: () => {
        return {
          box: false,
          grids: false,
          points: false,
          colorful: false
        };
      }
    }
  },
  mounted () {
    let canvas = document.createElement('canvas');
    this.width = this.$el.clientWidth;
    this.height = this.$el.clientHeight;

    canvas.width = this.width * this.pixelRatio;
    canvas.height = this.height * this.pixelRatio;

    canvas.style.width = this.width + 'px';
    canvas.style.height = this.height + 'px';

    this.canvas = canvas;

    this.ctx = canvas.getContext('2d');
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.$el.appendChild(canvas);

    this.leon = new Leon(this.options);

    requestAnimationFrame(this.animate);
  },
  methods: {
    animate () {
      requestAnimationFrame(this.animate);

      if (!this.leon || !this.ctx) return;

      const ctx = this.ctx;
      const leon = this.leon;
      const controll = this.controll;
      const options = this.options;

      ctx.clearRect(0, 0, this.width, this.height);

      const x = (this.width - leon.rect.w) / 2;
      const y = (this.height - leon.rect.h) / 2;
      leon.position(x, y);

      ctx.save();
      if (controll.grids) leon.grid(ctx);
      if (controll.box) leon.box(ctx);
      ctx.restore();
      ctx.save();
      if (options.isColorful) {
        leon.drawColorful(ctx);
      } else {
        leon.draw(ctx);
      }
      ctx.restore();
      if (controll.points) {
        ctx.save();
        leon.point(ctx);
        ctx.restore();
      }
    },
    drawing () {
      let i, total = this.leon.drawing.length;
      for (i = 0; i < total; i++) {
        TweenMax.killTweensOf(this.leon.drawing[i]);
        TweenMax.fromTo(this.leon.drawing[i], 2, {
          value: 0
        }, {
          value: 1,
          ease: Power4.easeOut
        });
      }
    }
  }
};
</script>
