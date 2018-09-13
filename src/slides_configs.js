export const configs = {
  duration: 500,
  durationFast: function () {
    return this.duration / 2;
  },
  durationSlow: function () {
    return this.duration * 2;
  },
  opacityHigh: 1,
  opacityMed: 0.8,
  opacityMedLow: 0.5,
  opacityLow: 0.2,
  opacityOff: 0
}
