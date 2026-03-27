{
  "name": "awesome-whatsapp-bot",
  "version": "3.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "awesome-whatsapp-bot",
      "version": "3.0.0",
      "dependencies": {
        "@ffmpeg-installer/ffmpeg": "^1.1.0",
        "@whiskeysockets/baileys": "^6.5.0",
        "axios": "^1.6.0",
        "body-parser": "^1.20.2",
        "chalk": "^4.1.2",
        "cheerio": "^1.0.0-rc.12",
        "compression": "^1.7.4",
        "cors": "^2.8.5",
        "crypto-js": "^4.1.1",
        "dotenv": "^16.3.1",
        "express": "^4.18.2",
        "file-type": "^18.5.0",
        "fluent-ffmpeg": "^2.1.2",
        "fs-extra": "^11.2.0",
        "google-it": "^1.6.4",
        "helmet": "^7.0.0",
        "instagram-url-downloader": "^1.0.8",
        "moment": "^2.29.4",
        "moment-duration-format": "^2.3.2",
        "moment-timezone": "^0.5.43",
        "mongoose": "^7.5.0",
        "newsapi": "^2.4.1",
        "node-cron": "^3.0.2",
        "node-fetch": "^2.7.0",
        "openai": "^4.20.0",
        "os-utils": "^0.0.14",
        "performance-now": "^2.1.0",
        "pino": "^8.16.0",
        "pino-pretty": "^10.2.3",
        "pinterest-dl": "^1.0.3",
        "pm2": "^5.3.0",
        "puppeteer": "^21.0.0",
        "qrcode": "^1.5.3",
        "qrcode-terminal": "^0.12.0",
        "readline": "^1.3.0",
        "redis": "^4.6.10",
        "sharp": "^0.32.5",
        "socket.io": "^4.7.2",
        "spotifydl-core": "^0.3.1",
        "tiktok-dl": "^1.0.5",
        "translate-google": "^1.5.0",
        "weather-js": "^2.0.0",
        "yt-search": "^2.10.4",
        "ytdl-core": "^4.11.5"
      },
      "devDependencies": {
        "nodemon": "^3.0.1"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@ffmpeg-installer/darwin-arm64": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/@ffmpeg-installer/darwin-arm64/-/darwin-arm64-4.1.5.tgz",
      "integrity": "sha512-hYqTiP63mXz7wSQfuqfSBwf0JITvj8LFSQ3aD7DrUj3GjL9hHtgQVxy9MVqBRNc9W0OAJX7yVe70QaPw27k4bg==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@ffmpeg-installer/darwin-x64": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/@ffmpeg-installer/darwin-x64/-/darwin-x64-4.1.5.tgz",
      "integrity": "sha512-XdqJcA7TZiXLIcnaiBwS1R8s0IYbjHMN+FtSP53rO1zDnL+qNpFqAeQwRr6bPv2tVzO0+veZ//xEeUjctWCkWg==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@ffmpeg-installer/ffmpeg": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@ffmpeg-installer/ffmpeg/-/ffmpeg-1.1.0.tgz",
      "integrity": "sha512-Uq4rmwkdGxIaQVOaiDk9Ui76OxNpI/weyWoUSMLfSO40A0qI4bhSKMypN7Nnj7MMlCAxl7qDXnB4rCmC2gOO0Q==",
      "hasInstallScript": true,
      "optionalDependencies": {
        "@ffmpeg-installer/darwin-arm64": "4.1.5",
        "@ffmpeg-installer/darwin-x64": "4.1.5",
        "@ffmpeg-installer/linux-arm": "4.1.3",
        "@ffmpeg-installer/linux-arm64": "4.1.4",
        "@ffmpeg-installer/linux-ia32": "4.1.0",
        "@ffmpeg-installer/linux-x64": "4.1.0",
        "@ffmpeg-installer/win32-ia32": "4.1.0",
        "@ffmpeg-installer/win32-x64": "4.1.0"
      }
    },
    "node_modules/@ffmpeg-installer/linux-arm": {
      "version": "4.1.3",
      "resolved": "https://registry.npmjs.org/@ffmpeg-installer/linux-arm/-/linux-arm-4.1.3.tgz",
      "integrity": "sha512-YNDR+6W9QltkxJNf4jOqjpyBLtM0pz0nHN8KPMIJMqnhHSG9ItjXwZzUgjNwD5C4HbY+pFKE2kLdLefUxQ2sOA==",
      "cpu": [
        "arm"
      ],
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@ffmpeg-installer/linux-arm64": {
      "version": "4.1.4",
      "resolved": "https://registry.npmjs.org/@ffmpeg-installer/linux-arm64/-/linux-arm64-4.1.4.tgz",
      "integrity": "sha512-dljZ9TAJ7dBBVNJ1WqWJFI4pE8MqkN/kxdcQw6apWbQtAj6tI+OBDtX4+ZBGVG0Zlx6qKjGwgWp5rwjcYk0IYA==",
      "cpu": [
        "arm64"
      ],
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@ffmpeg-installer/linux-ia32": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/@ffmpeg-installer/linux-ia32/-/linux-ia32-4.1.0.tgz",
      "integrity": "sha512-0LWyFQnPf+Ij9GQGD034hS6A90q0H5eeRZyfRBNRKa8SNcKeCQLHdxuQ6y86NqjcxFYDkYGfc12MlzpHHzEpRg==",
      "cpu": [
        "ia32"
      ],
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@ffmpeg-installer/linux-x64": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/@ffmpeg-installer/linux-x64/-/linux-x64-4.1.0.tgz",
      "integrity": "sha512-Y5BWhGLU/WpQjOArNIgXD3z5mxxdV8c41C+U15nsE5yF8tVcdCGet5zPs5Zy3Ta6bU7haGpIzryutqCGQA/W8A==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@ffmpeg-installer/win32-ia32": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/@ffmpeg-installer/win32-ia32/-/win32-ia32-4.1.0.tgz",
      "integrity": "sha512-lErtC/qEWCgPPRt+2tZpkdP3UoR9tC3xqo6AxxnG3HpR5yQv0KzJ0x1jRWHcbKpBwTmzCUBZILiTQ4QnxBnJ/Q==",
      "cpu": [
        "ia32"
      ],
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@ffmpeg-installer/win32-x64": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/@ffmpeg-installer/win32-x64/-/win32-x64-4.1.0.tgz",
      "integrity": "sha512-DHH7BVP32Nb/dfp1nUVIjX1ODnj2vHdqmSox3dxcsfqAHKdWPSsR9KisCjBUr09Nvxgb/+s49Hi/qFJcJbVxDA==",
      "cpu": [
        "x64"
      ],
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@hapi/boom": {
      "version": "10.0.1",
      "resolved": "https://registry.npmjs.org/@hapi/boom/-/boom-10.0.1.tgz",
      "integrity": "sha512-ERcCZaEjdH3OgSJlyjVk8pHIFeus91CjKP3v+MpgBNp5IvGzP2l/bRiD78nqYcKPaZdbKkK5vDBVPd2ohHBlsA==",
      "dependencies": {
        "@hapi/hoek": "11.x.x"
      }
    },
    "node_modules/@hapi/hoek": {
      "version": "11.0.2",
      "resolved": "https://registry.npmjs.org/@hapi/hoek/-/hoek-11.0.2.tgz",
      "integrity": "sha512-aKmlCO57XFZ26wso4rJsW4oTUnrgTFw2jh3io7CAtO9w4UltBNwRXvXIVzzyfkaaLRo3nluP/g19sqywV+5v6w=="
    },
    "node_modules/@mongodb-js/saslprep": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@mongodb-js/saslprep/-/saslprep-1.1.0.tgz",
      "integrity": "sha512-Xfijy7HvfzzqiOAhAepF4SGN5e9leLkMvg/OPOF97XemjfVCYN/oWa75wnkc6mltMSTwY+XlbhWgUOJmkFspSw==",
      "optional": true,
      "dependencies": {
        "sparse-bitfield": "^3.0.3"
      }
    },
    "node_modules/@opencensus/core": {
      "version": "0.0.9",
      "resolved": "https://registry.npmjs.org/@opencensus/core/-/core-0.0.9.tgz",
      "integrity": "sha512-31Q4VWtbzXpVUd2m9JS6HEaPjlKvNMOiF7lWKNmXF84yUcgfAFL5re7/hjDmdyQbOp32oGc+RFV78jXIldVz6Q==",
      "dependencies": {
        "continuation-local-storage": "^3.2.1",
        "log-driver": "^1.2.7",
        "semver": "^5.5.0",
        "shimmer": "^1.2.0",
        "uuid": "^3.2.1"
      },
      "engines": {
        "node": ">=6.0"
      }
    },
    "node_modules/@opencensus/core/node_modules/semver": {
      "version": "5.7.2",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.2.tgz",
      "integrity": "sha512-cBznnQ9KjJqU67B52RMC65CMarK2600WFnbkcaiwWq3xy/5haFJlshgnpjovMVJ+Hff49d8GEn0b87C5pDQ10g==",
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/@opencensus/core/node_modules/uuid": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
      "integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A==",
      "deprecated": "Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.",
      "bin": {
        "uuid": "bin/uuid"
      }
    },
    "node_modules/@opencensus/propagation-b3": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/@opencensus/propagation-b3/-/propagation-b3-0.0.8.tgz",
      "integrity": "sha512-PffXX2AL8Sh0VHQ52jJC4u3T0H6wDK6N/4bg7xh4ngMYOIi13aR1kzVvX1sVDBgfGwDOkMbl4c54Xm3tlPx/+A==",
      "dependencies": {
        "@opencensus/core": "^0.0.8",
        "uuid": "^3.2.1"
      },
      "engines": {
        "node": ">=6.0"
      }
    },
    "node_modules/@opencensus/propagation-b3/node_modules/@opencensus/core": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/@opencensus/core/-/core-0.0.8.tgz",
      "integrity": "sha512-yUFT59SFhGMYQgX0PhoTR0LBff2BEhPrD9io1jWfF/VDbakRfs6Pq60rjv0Z7iaTav5gQlttJCX2+VPxFWCuoQ==",
      "dependencies": {
        "continuation-local-storage": "^3.2.1",
        "log-driver": "^1.2.7",
        "semver": "^5.5.0",
        "shimmer": "^1.2.0",
        "uuid": "^3.2.1"
      },
      "engines": {
        "node": ">=6.0"
      }
    },
    "node_modules/@opencensus/propagation-b3/node_modules/semver": {
      "version": "5.7.2",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.2.tgz",
      "integrity": "sha512-cBznnQ9KjJqU67B52RMC65CMarK2600WFnbkcaiwWq3xy/5haFJlshgnpjovMVJ+Hff49d8GEn0b87C5pDQ10g==",
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/@opencensus/propagation-b3/node_modules/uuid": {
      "version": "3.4.0",
      "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
      "integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A==",
      "deprecated": "Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.",
      "bin": {
        "uuid": "bin/uuid"
      }
    },
    "node_modules/@protobufjs/aspromise": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/aspromise/-/aspromise-1.1.2.tgz",
      "integrity": "sha512-j+gKExEuLmKwvz3OgROXtrJ2UG2x8Ch2YZUxahh+s1F2HZ+wAceUNLkvy6zKCPVRkU++ZWQrdxsUeQXmcg4uoQ=="
    },
    "node_modules/@protobufjs/base64": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/base64/-/base64-1.1.2.tgz",
      "integrity": "sha512-AZkcAA5vnN/v4PDqKyMR5lx7hZttPDgClv83E//FMNhR2TMcLUhfRUBHCmSl0oi9zMgDDqRUJkSxO3wm85+XLg=="
    },
    "node_modules/@protobufjs/codegen": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/@protobufjs/codegen/-/codegen-2.0.4.tgz",
      "integrity": "sha512-YyFaikqM5sH0ziFZCN3xDC7zeGaB/d0IUb9CATugHWbd1FRFwWwt4ld4OYMPWu5a3Xe01mGAULCdqhMlPl29Jg=="
    },
    "node_modules/@protobufjs/eventemitter": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@protobufjs/eventemitter/-/eventemitter-1.1.0.tgz",
      "integrity": "sha512-j9ednRT81vYJ9OfVuXG6ERSTdEL1xVsNgqpkxMsbIabzSo3goCjDIveeGv5d03om39ML71RdmrGNjG5SReBP/Q=="
    },
    "node_modules/@protobufjs/fetch": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@protobufjs/fetch/-/fetch-1.1.0.tgz",
      "integrity": "sha512-lljVXpqXebpsijW71PZaCYeIcE5on1w5DlQy5WH6GLbFryLUrBD4932W/E2BSpfRJWseIL4b/KgBFvZJjaUswQ==",
      "dependencies": {
        "@protobufjs/aspromise": "^1.1.1",
        "@protobufjs/inquire": "^1.1.0"
      }
    },
    "node_modules/@protobufjs/float": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/float/-/float-1.0.2.tgz",
      "integrity": "sha512-Ddb+kVXlXst9d+R9PfTIxh1EdNkgoRe5tOX6t01f1lYWOvJnSPDBlG241QLzcyPdoNTsblLUdujGSE4RzrTZGQ=="
    },
    "node_modules/@protobufjs/inquire": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@protobufjs/inquire/-/inquire-1.1.0.tgz",
      "integrity": "sha512-kdSefcPdruJiFMVSbn801t4vFKcxKBpGfpnlmUz9Ex8jkOKaqu2T6tk+qqrE8jZVWRYBx7ec7h8+HUDu9DpyeQ=="
    },
    "node_modules/@protobufjs/path": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/@protobufjs/path/-/path-1.1.2.tgz",
      "integrity": "sha512-6JOcJ5Tm08dOHAbdR3GrvP+yUUfkjG5ePsHYczMFLq3ZmMkAD98cDgcT2iA1lJ9NVwFd4tH/iSSoe44YWkltEA=="
    },
    "node_modules/@protobufjs/pool": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@protobufjs/pool/-/pool-1.1.0.tgz",
      "integrity": "sha512-0kELaGSIDBKvcgS4zkjz1PeddatrjYcmMWOlAuAPwAeccUrPHdUqo/J6LiymHHEiJT5NrF1UVwxY14f+fy4WQw=="
    },
    "node_modules/@protobufjs/utf8": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@protobufjs/utf8/-/utf8-1.1.0.tgz",
      "integrity": "sha512-Vvn3zZrhQZkkBE8LSuW3em98c0FwgO4nxzv6OdSxPKJIEKY2bGbHn+mhGIPerzI4twdxaP8/0+06HBpwf345Lw=="
    },
    "node_modules/@redis/bloom": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@redis/bloom/-/bloom-1.2.0.tgz",
      "integrity": "sha512-HG2DFjYKbpNmVXsa0keLHp/3leGJz1mjh09f2RLGGLQZzSHpkmZWuwJbAvo3QcRY8p80m5+ZdXZdYOSBLlp7Cg==",
      "peerDependencies": {
        "@redis/client": "^1.0.0"
      }
    },
    "node_modules/@redis/client": {
      "version": "1.5.13",
      "resolved": "https://registry.npmjs.org/@redis/client/-/client-1.5.13.tgz",
      "integrity": "sha512-epkUMiDZR+2jvCR+QMvVNKU2kCpkB+VofRZc1ZcOeS8RlfYtaU4yoYp/eJ+O3j4RrimhPXWWdlp9VRVJROJYAg==",
      "dependencies": {
        "cluster-key-slot": "1.1.2",
        "generic-pool": "3.9.0",
        "yallist": "4.0.0"
      },
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@redis/graph": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@redis/graph/-/graph-1.1.0.tgz",
      "integrity": "sha512-16yZWngxyXPd+MJxeSr0dqh2AIOi8j9yXKcKCwVaKDbH3HTuETpDVPcLujhFYVPtYrngSco31BUcSa9TH31Gqg==",
      "peerDependencies": {
        "@redis/client": "^1.0.0"
      }
    },
    "node_modules/@redis/json": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/@redis/json/-/json-1.0.6.tgz",
      "integrity": "sha512-rcZO3bfQbm2zPRpqo82XbW8zg4G/w4W3tI7X8Mqleq9goQjAGLL7q/1n1ZX4dXEAmORVZ4s1+uKLaUOg7LrUhw==",
      "peerDependencies": {
        "@redis/client": "^1.0.0"
      }
    },
    "node_modules/@redis/search": {
      "version": "1.1.6",
      "resolved": "https://registry.npmjs.org/@redis/search/-/search-1.1.6.tgz",
      "integrity": "sha512-mZXCxbTYKBQ3M2lZnEddwEAks0Kc7nauire8q20oA0oA/LoA+E/b5Y5KZn232ztPb1FkIGqo12vh3Lf+Vw5iTw==",
      "peerDependencies": {
        "@redis/client": "^1.0.0"
      }
    },
    "node_modules/@redis/time-series": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/@redis/time-series/-/time-series-1.0.5.tgz",
      "integrity": "sha512-IFjIgTusQym2B5IZJG3XKr5llka7ey84fw/NOYqESP5WUfQs9zz1ww/9+qoz4ka/S6KcGBodzlCeZ5UImKbscg==",
      "peerDependencies": {
        "@redis/client": "^1.0.0"
      }
    },
    "node_modules/@socket.io/component-emitter": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/@socket.io/component-emitter/-/component-emitter-3.1.0.tgz",
      "integrity": "sha512-+9jVqKhRSpsc591z5vX+X5Yyw+he/HCB4iQ/RYxw35CEPaY1gnsNE43nf9n9AaYjAQrTiI/mOwKUKdUs9vf7Xg=="
    },
    "node_modules/@tootallnate/quickjs-emscripten": {
      "version": "0.23.0",
      "resolved": "https://registry.npmjs.org/@tootallnate/quickjs-emscripten/-/quickjs-emscripten-0.23.0.tgz",
      "integrity": "sha512-C5Mc6rdnsaJDjO3UpGW/CQTHtCKaYlScZTly4JIu97Jxo/odCiH0ITnDXSJPTOrEKk/ycSZ0AOgTmkDtkOsvIA=="
    },
    "node_modules/@types/cors": {
      "version": "2.8.17",
      "resolved": "https://registry.npmjs.org/@types/cors/-/cors-2.8.17.tgz",
      "integrity": "sha512-8CGDvrBj1zgo2qE+oS3pOCyYNqCPryMWY2bGfwA0dcfopWGgxs+78df0Rs3rc9THP4JkOhLsAa+15VdpAqkcUA==",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/node": {
      "version": "20.10.5",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.10.5.tgz",
      "integrity": "sha512-nNPsNE65wjMxEKI93yOP+NPGGBJz/PoN3kZsVLee0XMiJolxSekEVD8wRwBUBqkwc7UWop0edW50yrCQW4CyRw==",
      "dependencies": {
        "undici-types": "~5.26.4"
      }
    },
    "node_modules/@types/webidl-conversions": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/@types/webidl-conversions/-/webidl-conversions-7.0.3.tgz",
      "integrity": "sha512-CiJJvcRtIgzadHCYXw7dqEnMNRjhGZlYK05Mj9OyktqV8uVT8fD2BFOB7S1uwBE3Kj2Z+4UyPmFw/Ixgw/LAlA=="
    },
    "node_modules/@types/whatwg-url": {
      "version": "8.2.2",
      "resolved": "https://registry.npmjs.org/@types/whatwg-url/-/whatwg-url-8.2.2.tgz",
      "integrity": "sha512-FtQu10RWgn3D9U4aazdwIE2yzphmTJREDqNdODHrbrZmmMqI0vMheC/6NE/J1Yveaj8H+ela+YwWTjq5PGmuhA==",
      "dependencies": {
        "@types/node": "*",
        "@types/webidl-conversions": "*"
      }
    },
    "node_modules/@whiskeysockets/baileys": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/@whiskeysockets/baileys/-/baileys-6.5.0.tgz",
      "integrity": "sha512-Vm3s0TfN12QQgsKMRm0th4RMMm2eUQ5NpRlOavYEj0o7ezlZ6mnsEwAzyz02sEpM/qOotlsS1yAySqP9QaV48w==",
      "dependencies": {
        "@hapi/boom": "^10.0.0",
        "@types/ws": "^8.5.10",
        "axios": "^1.6.5",
        "buffer": "^6.0.3",
        "ffmpeg-static": "^5.2.0",
        "futoin-hkdf": "^1.5.3",
        "jimp": "^0.22.12",
        "link-preview-js": "^3.0.5",
        "music-metadata": "^7.14.0",
        "pino": "^8.14.1",
        "pino-pretty": "^10.2.0",
        "protobufjs": "^7.2.4",
        "qrcode-terminal": "^0.12.0",
        "ws": "^8.14.2"
      }
    },
    "node_modules/abbrev": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q=="
    },
    "node_modules/accepts": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.8.tgz",
      "integrity": "sha512-PYAthTa2m2VKxuvSD3DPC/Gy+U+sOA1LAuT8mkmRuvw+NACSaeXEQ+NHcVF7rONl6qcaxV3Uuemwawk+7+SJLw==",
      "dependencies": {
        "mime-types": "~2.1.34",
        "negotiator": "0.6.3"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/agent-base": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-7.1.0.tgz",
      "integrity": "sha512-o/zjMZRhJxny7OyEF+Op8X+efiELC7k7yOjMzgfzVqOzXqkBkWI79YoTdOtsuWd5BWhAGAuOY/Xa6xpiaWXiNg==",
      "dependencies": {
        "debug": "^4.3.4"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/agent-base/node_modules/debug": {
      "version": "4.3.4",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.4.tgz",
      "integrity": "sha512-PRWFHuSU3eDtQJPvnNY7Jcket1j0t5OuOsFzPPzsekD52Zl8qUfFIPEiswXqIvHWGVHOgX+7G/vCNNhehwxfkQ==",
      "dependencies": {
        "ms": "2.1.2"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/agent-base/node_modules/ms": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
    },
    "node_modules/ansi-align": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/ansi-align/-/ansi-align-3.0.1.tgz",
      "integrity": "sha512-IOfwwBF5iczOjp/WeY4YxyjqAFMQoZufdQWDd19SEExbVLNXqvpzSJ/M7Za4/sCPmQ0+GRquoA7bGcINcxew6w==",
      "dependencies": {
        "string-width": "^4.1.0"
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q=="
    },
    "node_modules/array-flatten": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
      "integrity": "sha512-PCVAQswWemu6UdxsDFFX/+gVeYqKAod3D3UVm91jHwynguOwAvYPhx8nNlM++NqRcK6CxxpUafjmhIdKiHibqg=="
    },
    "node_modules/ast-types": {
      "version": "0.13.4",
      "resolved": "https://registry.npmjs.org/ast-types/-/ast-types-0.13.4.tgz",
      "integrity": "sha512-x1FCFnFifvYDDzTaLII71vG5uvDwgtmDTEVWAxrgeiR8VjMONcCXJx7E+USjDtHlwFmt9MysbqgF9b9Vjr6w+w==",
      "dependencies": {
        "tslib": "^2.0.1"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/async": {
      "version": "3.2.5",
      "resolved": "https://registry.npmjs.org/async/-/async-3.2.5.tgz",
      "integrity": "sha512-baNZyqaaLhyLVKm/DlvdW051MSgO6b8eVfIezl9E5PqWxFgzLm/wQntEW4zOytVburDEr0JlALEpdOFwvErLsg=="
    },
    "node_modules/async-listener": {
      "version": "0.6.10",
      "resolved": "https://registry.npmjs.org/async-listener/-/async-listener-0.6.10.tgz",
      "integrity": "sha512-gpuo6xOyF4D5DE5+vyqYjikgj4fd0OZYdTia1E0iOVDodlc0R8hPBRCUK+kry9BvK1S3T3LiV3S9TtVkZXE0Zg==",
      "dependencies": {
        "semver": "^5.3.0",
        "shimmer": "^1.1.0"
      }
    },
    "node_modules/async-listener/node_modules/semver": {
      "version": "5.7.2",
      "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.2.tgz",
      "integrity": "sha512-cBznnQ9KjJqU67B52RMC65CMarK2600WFnbkcaiwWq3xy/5haFJlshgnpjovMVJ+Hff49d8GEn0b87C5pDQ10g==",
      "bin": {
        "semver": "bin/semver"
      }
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIkYL6+ukYKHzXIw=="
    },
    "node_modules/axios": {
      "version": "1.6.5",
      "resolved": "https://registry.npmjs.org/axios/-/axios-1.6.5.tgz",
      "integrity": "sha512-Ii012v05KEVuUoFWmMW/UQv9aRIc3ZwkWDcM+h5Il8izZCtRVpDUfwpoFf7eOtajT3QiGR4yDUx7lPqHJULgbg==",
      "dependencies": {
        "follow-redirects": "^1.15.4",
        "form-data": "^4.0.0",
        "proxy-from-env": "^1.1.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="
    },
    "node_modules/base64-js": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
      "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ]
    },
    "node_modules/basic-ftp": {
      "version": "5.0.4",
      "resolved": "https://registry.npmjs.org/basic-ftp/-/basic-ftp-5.0.4.tgz",
      "integrity": "sha512-8PzkB0arJFV4jJWSGOYR+OEic6aeKMH/osmhTZNbvePR1jkpIGW3Acn4mWRVJC2CQrvEmI7FwN62rwzEnFziFQ==",
      "engines": {
        "node": ">=10.0.0"
      }
    },
    "node_modules/binary-extensions": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.2.0.tgz",
      "integrity": "sha512-jDctJ/IVQbZoJykoeHbhXpOlNBqGNcwXJKJog42E5HDPUwQTSdjCHdihjj0DlnheQ7blbT6dHOafNAiS8ooQKA==",
      "dev": true,
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/bmp-js": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/bmp-js/-/bmp-js-0.1.0.tgz",
      "integrity": "sha512-vHdS19CnY3hwiNdkaqk93DvjVLfbEcI8mys4UjuWrlX1haDmroo8o4xCzh4wD6DGV6HxRCyauwhHRqMTfERtjw=="
    },
    "node_modules/body-parser": {
      "version": "1.20.2",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.20.2.tgz",
      "integrity": "sha512-ml9pReCu3M61kGlqoTm2umSXTlRTuGTx0bfYj+uIUKKYycG5NtSbeetV3faSU6R7ajOPw0g/J1PvK4qNy7s5bA==",
      "dependencies": {
        "bytes": "3.1.2",
        "content-type": "~1.0.5",
        "debug": "2.6.9",
        "depd": "2.0.0",
        "destroy": "1.2.0",
        "http-errors": "2.0.0",
        "iconv-lite": "0.4.24",
        "on-finished": "2.4.1",
        "qs": "6.11.0",
        "raw-body": "2.5.2",
        "type-is": "~1.6.18",
        "unpipe": "1.0.0"
      },
      "engines": {
        "node": ">= 0.8",
        "npm": "1.2.8000 || >= 1.4.16"
      }
    },
    "node_modules/boolbase": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/boolbase/-/boolbase-1.0.0.tgz",
      "integrity": "sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww=="
    },
    "node_modules/boxen": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/boxen/-/boxen-5.1.2.tgz",
      "integrity": "sha512-9gYgQKXx+1nP8mP7CzFyaUARhg7D3n1dF/FnErWmu9l6JvGpNUN278h0aSb+QjoiKSWG+iZ3uHrcqk0qrY9RQQ==",
      "dependencies": {
        "ansi-align": "^3.0.0",
        "camelcase": "^6.2.0",
        "chalk": "^4.1.0",
        "cli-boxes": "^2.2.1",
        "string-width": "^4.2.2",
        "type-fest": "^0.20.2",
        "widest-line": "^3.1.0",
        "wrap-ansi": "^7.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.11",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
      "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
      "dev": true,
      "dependencies": {
        "fill-range": "^7.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/bson": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/bson/-/bson-5.5.0.tgz",
      "integrity": "sha512-B+QB4YmDx9RStKv8LLSl/aVIEV3nYJc3cJNNTK2Cd1TL+7P+cNpw9mAPeCgc5K+j01Dv6sxUzcITXDx7ZU3F0w==",
      "engines": {
        "node": ">=14.20.1"
      }
    },
    "node_modules/buffer": {
      "version": "6.0.3",
      "resolved": "https://registry.npmjs.org/buffer/-/buffer-6.0.3.tgz",
      "integrity": "sha512-FTiCpNxtwiZZHEZbcbTIcZjENICfEoUbPtOh3haxhWZrA2FcB9FdWwS7qQQ1nQunM9d7mShb/s1uJ5I9Dy/eJQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "dependencies": {
        "base64-js": "^1.3.1",
        "ieee754": "^1.2.1"
      }
    },
    "node_modules/buffer-equal": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/buffer-equal/-/buffer-equal-0.0.1.tgz",
      "integrity": "sha512-RgSV6InVQ9ODPdLWJ5UAqBqJBOg370Nz6ZQtRzpt6nUjc8v0St97uJ4PYC6NztqIScrAXafKM3mZPMygSe1ggA==",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.5.tgz",
      "integrity": "sha512-C3nQxfFZxFRVoJoGKKI8y3MOEo129NQ+FgQ08iye+Mk4zNZZGdjfs06bVTr+DBSlA66Q2VEcMki/cUCP4SercQ==",
      "dependencies": {
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.1",
        "set-function-length": "^1.1.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/camelcase": {
      "version": "6.3.0",
      "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-6.3.0.tgz",
      "integrity": "sha512-Gmy6FhYlCY7uOElZUSbxo2UCDH8owEk996gkbrpsgGtrJLM3J7jGxl9Ic7Qwwj4ivOE5AWZWRMecDdF7hqGjFA==",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/cheerio": {
      "version": "1.0.0-rc.12",
      "resolved": "https://registry.npmjs.org/cheerio/-/cheerio-1.0.0-rc.12.tgz",
      "integrity": "sha512-VqR8m68vM46BNnuZ5NtnGBKIE/DfN0cRIzg9n40EIq9NOv90ayxLBXA8fXC5gquFRGJSTRqBq25Jq2/HR2ojoA==",
      "dependencies": {
        "cheerio-select": "^2.1.0",
        "dom-serializer": "^2.0.0",
        "domhandler": "^5.0.3",
        "domutils": "^3.0.1",
        "htmlparser2": "^8.0.1",
        "parse5": "^7.0.0",
        "parse5-htmlparser2-tree-adapter": "^7.0.0"
      },
      "engines": {
        "node": ">= 6"
      },
      "funding": {
        "url": "https://github.com/cheeriojs/cheerio?sponsor=1"
      }
    },
    "node_modules/cheerio-select": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/cheerio-select/-/cheerio-select-2.1.0.tgz",
      "integrity": "sha512-9v9kG0LvzrlcungtnJtpGNxY+fzECQKhK4EGJX2vByejiMX84MFNQw4UxPJl3bFbTMw+Dfs37XaIkCwTZfLh4g==",
      "dependencies": {
        "boolbase": "^1.0.0",
        "css-select": "^5.1.0",
        "css-what": "^6.1.0",
        "domelementtype": "^2.3.0",
        "domhandler": "^5.0.3",
        "domutils": "^3.0.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/fb55"
      }
    },
    "node_modules/chokidar": {
      "version": "3.5.3",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.5.3.tgz",
      "integrity": "sha512-Dr3sfKRP6oTcjf2JmUmFJfeVMvXBdegxB0iVQ5eb2V10uFJUCAS8OByZdVAyVb8xXNz3GjjTgj9kLWsZTqE6kw==",
      "dev": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://paulmillr.com/funding/"
        }
      ],
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/chownr": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz",
      "integrity": "sha512-jJ0bqzaylmJtVnNgzTeSOs8DPavpbYgEr/b0YL8/2GO3xJEhInFmhKMUnEJQjZumK7KXGFhUy89PrsJWlakBVg=="
    },
    "node_modules/chromium-bidi": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/chromium-bidi/-/chromium-bidi-0.5.1.tgz",
      "integrity": "sha512-dcCqOgq9fHKExc2R4JZs/oKbOghWpUNFAJODS8WKRtLhp3avtIH5UDCBrutdqZdh3pARogH8y1ObXm87emwb3g==",
      "dependencies": {
        "mitt": "3.0.1",
        "urlpattern-polyfill": "9.0.0"
      },
      "peerDependencies": {
        "devtools-protocol": "*"
      }
    },
    "node_modules/cli-boxes": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/cli-boxes/-/cli-boxes-2.2.1.tgz",
      "integrity": "sha512-y4coMcylgSCdVinjiDBuR8PCC2bLjyGTwEmPb9NHR/QaNU6EUOXcTY/s6VjGMD6ENSEaeQYHCY0GNGS5jfMwPw==",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/cli-tableau": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/cli-tableau/-/cli-tableau-2.0.1.tgz",
      "integrity": "sha512-he+WTicka9cl0Fg/y+YyxcN6/bfQ/1O3QmgxRXDhABKqLzvoOSM4fMzp39uMyLBulAFuywD2N7UaoQE7WaADxQ==",
      "dependencies": {
        "chalk": "3.0.0"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/cli-tableau/node_modules/chalk": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-3.0.0.tgz",
      "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILIaOyiSja+HJ5Gxv5gl7dTmIOpKwy56Ftn6/WSGY1llCZ6Daw==",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cliui": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz",
      "integrity": "sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==",
      "dependencies": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.1",
        "wrap-ansi": "^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/cluster-key-slot": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/cluster-key-slot/-/cluster-key-slot-1.1.2.tgz",
      "integrity": "sha512-RMr0FhtfXemyinomL4hrWcYJxmX6deFdCxpJbhD5jx038a+G1I8dFUOotHdoNK9c6gKHfqoW+Uatggi4V4LwOQ==",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/color": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/color/-/color-4.2.3.tgz",
      "integrity": "sha512-1rXeuUUiGGrykh+CeBdu5Ie7OJwinCgQY0bc7GCRxy5xVHy+moaqkpL/jqQq0MtQOeYcrqEz4abc5f0KtU7U4A==",
      "dependencies": {
        "color-convert": "^2.0.1",
        "color-string": "^1.9.0"
      },
      "engines": {
        "node": ">=12.5.0"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
    },
    "node_modules/color-string": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/color-string/-/color-string-1.9.1.tgz",
      "integrity": "sha512-shrVawQFojnZv6xM40anx4CkoDP+fZsw/ZerEMsW/pyzsRbElpsL/DBVW7q3ExxwusdNXI3lXpuhEZkzs8p5Eg==",
      "dependencies": {
        "color-name": "^1.0.0",
        "simple-swizzle": "^0.2.2"
      }
    },
    "node_modules/colorette": {
      "version": "2.0.20",
      "resolved": "https://registry.npmjs.org/colorette/-/colorette-2.0.20.tgz",
      "integrity": "sha512-IfEDxwoWIjkeXL1eXcDiow4UbKjhLdq6/EuSVR9GMN7KVH3r9gQ83e73hsz1Nd1T3ijd5xv1wcWRYO+D6kCI2w=="
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/commander": {
      "version": "10.0.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-10.0.1.tgz",
      "integrity": "sha512-y4Mg2tXshplEbSGzx7amzPwKKOCGuoSRP/CjEdwwk0FOGlUbq6lKuoyDZTNZkmxHdJtp54hdfY/JUrdL7Xfdug==",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/compressible": {
      "version": "2.0.18",
      "resolved": "https://registry.npmjs.org/compressible/-/compressible-2.0.18.tgz",
      "integrity": "sha512-AF3r7P5dWxL8MxyITRMlORQNaOA2IkAFaTr4k7BUumjPtRpGDTZpl0Pb1XCO6JeDCBdp126Cgs9sMxqSjgYyRg==",
      "dependencies": {
        "mime-db": ">= 1.43.0 < 2"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/compression": {
      "version": "1.7.4",
      "resolved": "https://registry.npmjs.org/compression/-/compression-1.7.4.tgz",
      "integrity": "sha512-jaSIDzP9pZVS4ZfQ+TzvtiWhdpFhE2RDHz8QJkpX9SIpLq88VueF5jJw6t+6CUQcAoA6t+x89MLrWAqpfDE8iQ==",
      "dependencies": {
        "accepts": "~1.3.5",
        "bytes": "3.0.0",
        "compressible": "~2.0.16",
        "debug": "2.6.9",
        "on-headers": "~1.0.2",
        "safe-buffer": "5.1.2",
        "vary": "~1.1.2"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/compression/node_modules/bytes": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.0.0.tgz",
      "integrity": "sha512-pMhOfFDPiv9t5jjIXkHosWmkSyQbvsgEVNkz0ERHbuLh2T/7j4Mqqpz523Fe8MVY89KC6Sh/QfS2sM+SjgFDcw==",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/compression/node_modules/safe-buffer": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg=="
    },
    "node_modules/continuation-local-storage": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/continuation-local-storage/-/continuation-local-storage-3.2.1.tgz",
      "integrity": "sha512-jx44cconVqkCEEyLSKWwkvUXwO561jXMa3LPjTPsm5QR22PA0/mhe33FT4Xb5y74JDvt/Cq+5lm8S8rskLv9ZA==",
      "dependencies": {
        "async-listener": "^0.6.0",
        "emitter-listener": "^1.1.1"
      }
    },
    "node_modules/content-disposition": {
      "version": "0.5.4",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
      "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
      "dependencies": {
        "safe-buffer": "5.2.1"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie": {
      "version": "0.5.0",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.5.0.tgz",
      "integrity": "sha512-YZ3GUyn/o8gfKJlnlX7g7xq4gyO6OSuhGPKaaGssGB2qgDUS0gPgtTvoyZLTt9Ab6dC4hfc9dV5arkvc/OCmrw==",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie-signature": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
      "integrity": "sha512-QADzlaHc8icV8I7vbaJXJwod9HWYp8uCqf1xa4OfNu1T7JVxQIrUgOWtHdNDtPiywmFbiS12VjotIXLrKM3orQ=="
    },
    "node_modules/cors": {
      "version": "2.8.5",
      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",
      "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",
      "dependencies": {
        "object-assign": "^4",
        "vary": "^1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/cross-spawn": {
      "version": "7.0.3",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",
      "integrity": "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/crypto-js": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/crypto-js/-/crypto-js-4.2.0.tgz",
      "integrity": "sha512-KALDyEYgpY+Rlob/iriUtjV6d5Eq+Y191A5g4UqLAi8CyGP9N1+FdVbkc1SxKc2r4YAYqG8JzO2KGL+AizDsuQ=="
    },
    "node_modules/css-select": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/css-select/-/css-select-5.1.0.tgz",
      "integrity": "sha512-nwoRF1rvRRnnCqqY7updORDsuqKzqYJ28+oSMaJMMgOauh3fvwHqMS7EZpIPqK8GL+g9mKxF1vP/ZjSeNjEVHg==",
      "dependencies": {
        "boolbase": "^1.0.0",
        "css-what": "^6.1.0",
        "domhandler": "^5.0.2",
        "domutils": "^3.0.1",
        "nth-check": "^2.0.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/fb55"
      }
    },
    "node_modules/css-what": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/css-what/-/css-what-6.1.0.tgz",
      "integrity": "sha512-HTUrgRJ7r4dsZKU6GjmpfRK1O76h97Z8MfS1G0FozR+oF2kG6Vfe8JE6zwrkbxigziPHinCJ+gCPjA9EaBDtRw==",
      "engines": {
        "node": ">= 6"
      },
      "funding": {
        "url": "https://github.com/sponsors/fb55"
      }
    },
    "node_modules/data-uri-to-buffer": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/data-uri-to-buffer/-/data-uri-to-buffer-6.0.1.tgz",
      "integrity": "sha512-MZd3VlchQkp8rdend6vrx7MmVDJzSNTBvghvKjirLkD+WTChA3KUf0jkE68Q4UyctNqI11zZO9/x2Yx+ub5Cvg==",
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/dateformat": {
      "version": "4.6.3",
      "resolved": "https://registry.npmjs.org/dateformat/-/dateformat-4.6.3.tgz",
      "integrity": "sha512-2P0p0pFGzHS5EMnhdxQi7aJN+iMheud0UhG4dlE1DLAlvL8JHjJJTX/CSm4JXwV0Ka5nGk3zC5mcb5bUQUxxMA==",
      "engines": {
        "node": "*"
      }
    },
    "node_modules/debug": {
      "version": "2.6.9",
      "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
      "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
      "dependencies": {
        "ms": "2.0.0"
      }
    },
    "node_modules/decompress-response": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-6.0.0.tgz",
      "integrity": "sha512-aW35yZM6Bb/4oJlZncMH2LCoZtJXTRxES17vE3hoRiowU2kWHaJKFkSBDnDR+cm9J+9QhXmREyIfv0pji9ejCQ==",
      "dependencies": {
        "mimic-response": "^3.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/deep-extend": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
      "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==",
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/define-data-property": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/define-data-property/-/define-data-property-1.1.1.tgz",
      "integrity": "sha512-E7uGkTzkk1d0ByLeSc6ZsFS79Axg+m1P/VsgYsxHgiuc3tFSj+MjMIwe90FC4lOAZzNBdY7kkO2P2wKdsQ1vgQ==",
      "dependencies": {
        "get-intrinsic": "^1.2.1",
        "gopd": "^1.0.1",
        "has-property-descriptors": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/degenerator": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/degenerator/-/degenerator-5.0.1.tgz",
      "integrity": "sha512-TllpMR/t0M5sqCXfj85i4XaAzxmS5tVA16dqvdkMwGmzI+dXLXnw3J+3Vdv7VKw+ThlTMboK6i9rnZ6Nntj5CQ==",
      "dependencies": {
        "ast-types": "^0.13.4",
        "escodegen": "^2.1.0",
        "esprima": "^4.0.1"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/destroy": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.2.0.tgz",
      "integrity": "sha512-2sJGJTaXIIaR1w4iJSNoN0hnMY7Gpc/n8D4qSCJw8QqFWXf7cuAgnEHxBpweaVcPevC2l3KpjYCx3NypQQgaJg==",
      "engines": {
        "node": ">= 0.8",
        "npm": "1.2.8000 || >= 1.4.16"
      }
    },
    "node_modules/detect-libc": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.0.2.tgz",
      "integrity": "sha512-UX6sGumvvqSaXgdKGUsgZWqcUyIXZ/vZTrlRT/iobiKhGL0zL4d3osHj3uqllWJK+i+sixDS/3COVEOFbupFyw==",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/devtools-protocol": {
      "version": "0.0.1203626",
      "resolved": "https://registry.npmjs.org/devtools-protocol/-/devtools-protocol-0.0.1203626.tgz",
      "integrity": "sha512-nEzHZteIUZfGCZtTiS1fRpC8UZmsfD1SiyPvaUNvS13dvKf666OAm8YTi0+Ca3n1nLEyu49Cy4+dPWpaHFJk9g=="
    },
    "node_modules/dijkstrajs": {
      "version": "1.0.3",
      "resolved": "https://integrity
