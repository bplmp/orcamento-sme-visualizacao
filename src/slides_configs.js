export const configs = {
  duration: 500,
  durationFast: function () {
    return this.duration / 2;
  },
  durationSlow: function () {
    return this.duration * 2;
  }
}
