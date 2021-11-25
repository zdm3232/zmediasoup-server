const os = require('os')
const ifaces = os.networkInterfaces()

module.exports = {
  listenIp: '0.0.0.0',
  listenPort: 1,
  serverKey: 'whatevs',
  sslCrt: '../../cert.pem',
  sslKey: '../../key.pem',

  mediasoup: {
    // Worker settings
      // numWorkers: Object.keys(os.cpus()).length,
    numWorkers: 1,
    worker: {
      rtcMinPort: 3050,
      rtcMaxPort: 3090,
      logLevel: 'warn',
      logTags: [
        'info',
        'ice',
        'dtls',
        'rtp',
        'srtp',
        'rtcp'
        // 'rtx',
        // 'bwe',
        // 'score',
        // 'simulcast',
        // 'svc'
      ]
    },
    // Router settings
    router: {
      mediaCodecs: [
        {
          kind: 'audio',
          mimeType: 'audio/opus',
          clockRate: 48000,
          channels: 2
        },
        {
          kind: 'video',
          mimeType: 'video/VP8',
          clockRate: 90000,
          parameters: {
            'x-google-start-bitrate': 1000
          }
        }
      ]
    },
    // WebRtcTransport settings
    webRtcTransport: {
      listenIps: [
        {
          ip: '0.0.0.0',
          announcedIp: '0.0.0.0' // replace by public IP address
        }
      ],
      maxIncomingBitrate: 1500000,
      initialAvailableOutgoingBitrate: 1000000
    }
  }
}
