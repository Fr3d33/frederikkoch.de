module.exports = {
  apps: [{
    name: 'frederikkoch.de',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    watch: false,
    max_memory_restart: '1G'
  }]
}
