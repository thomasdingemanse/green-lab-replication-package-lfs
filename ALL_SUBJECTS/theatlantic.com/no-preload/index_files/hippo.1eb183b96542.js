SystemJS.config({
  paths: {
    'github:': 'jspm_packages/github/',
    'npm:': 'jspm_packages/npm/',
    'adsjs': 'https://www.theatlantic.com/packages/adsjs/ads.min.js',
    'disqus_embed': 'https://theatlanticcities.disqus.com/embed.js',
    'twitter': 'https://platform.twitter.com/widgets.js',
    'scrolljs': 'https://static.scroll.com/js/scroll.js'
  },
  sassPluginOptions: {
    'autoprefixer': true,
    'sassOptions': {
      'includePaths': [
        'node_modules/support-for/sass',
        'node_modules/normalize-scss/sass',
        'node_modules/breakpoint-sass/stylesheets'
      ]
    }
  },
  devConfig: {
    'map': {
      'babel-runtime': 'npm:babel-runtime@5.8.38',
      'core-js': 'npm:core-js@1.2.7',
      'plugin-babel': 'npm:systemjs-plugin-babel@0.0.25',
      'babel-plugin-syntax-dynamic-import': 'npm:babel-plugin-syntax-dynamic-import@6.18.0',
      'babel-plugin-transform-es2015-modules-systemjs': 'npm:babel-plugin-transform-es2015-modules-systemjs@6.24.1'
    },
    'packages': {
      'npm:babel-runtime@5.8.38': {
        'map': {}
      },
      'npm:core-js@1.2.7': {
        'map': {
          'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
        }
      },
      'npm:babel-plugin-transform-es2015-modules-systemjs@6.24.1': {
        'map': {
          'babel-template': 'npm:babel-template@6.26.0',
          'babel-helper-hoist-variables': 'npm:babel-helper-hoist-variables@6.24.1',
          'babel-runtime': 'npm:babel-runtime@6.26.0'
        }
      },
      'npm:babel-template@6.26.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'lodash': 'npm:lodash@4.17.11',
          'babylon': 'npm:babylon@6.18.0',
          'babel-types': 'npm:babel-types@6.26.0',
          'babel-traverse': 'npm:babel-traverse@6.26.0'
        }
      },
      'npm:babel-helper-hoist-variables@6.24.1': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'babel-types': 'npm:babel-types@6.26.0'
        }
      },
      'npm:babel-types@6.26.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'lodash': 'npm:lodash@4.17.11',
          'to-fast-properties': 'npm:to-fast-properties@1.0.3',
          'esutils': 'npm:esutils@2.0.2'
        }
      },
      'npm:babel-traverse@6.26.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0',
          'babel-types': 'npm:babel-types@6.26.0',
          'babylon': 'npm:babylon@6.18.0',
          'lodash': 'npm:lodash@4.17.11',
          'invariant': 'npm:invariant@2.2.4',
          'babel-code-frame': 'npm:babel-code-frame@6.26.0',
          'globals': 'npm:globals@9.18.0',
          'babel-messages': 'npm:babel-messages@6.23.0',
          'debug': 'npm:debug@2.6.9'
        }
      },
      'npm:babel-code-frame@6.26.0': {
        'map': {
          'esutils': 'npm:esutils@2.0.2',
          'chalk': 'npm:chalk@1.1.3',
          'js-tokens': 'npm:js-tokens@3.0.2'
        }
      },
      'npm:babel-messages@6.23.0': {
        'map': {
          'babel-runtime': 'npm:babel-runtime@6.26.0'
        }
      },
      'npm:invariant@2.2.4': {
        'map': {
          'loose-envify': 'npm:loose-envify@1.4.0'
        }
      },
      'npm:loose-envify@1.4.0': {
        'map': {
          'js-tokens': 'npm:js-tokens@4.0.0'
        }
      }
    }
  },
  transpiler: 'plugin-babel',
  bundles: {
    'dist/theatlantic/js/bundle.js': [
      'theatlantic/js/main.js'
    ],
    'dist/theatlantic/js/legacy.js': [
      'theatlantic/js/legacy.js'
    ],
    'dist/theatlantic/js/polyfill.js': [
      'theatlantic/js/polyfill.js'
    ],
    'dist/theatlantic/js/bundle/homepage.js': [
      'theatlantic/js/homepage.js'
    ],
    'dist/theatlantic/js/bundle/editorial-projects.js': [
      'theatlantic/js/editorial-projects.js'
    ],
    'dist/theatlantic/js/bundle/components/crossword.js': [
      'theatlantic/js/components/crossword.js'
    ],
    'dist/theatlantic/js/bundle/components/recirc-content.js': [
      'theatlantic/js/components/recirc-content.js'
    ],
    'dist/theatlantic/js/bundle/components/newsletter-list.js': [
      'theatlantic/js/components/newsletter-list.js'
    ],
    'dist/theatlantic/js/bundle/components/newsletter-promo.js': [
      'theatlantic/js/components/newsletter-promo.js'
    ],
    'dist/theatlantic/js/bundle/lacroix/components/recirc-content.js': [
      'theatlantic/js/lacroix/components/recirc-content.js'
    ],
    'dist/theatlantic/js/bundle/components/most-popular.js': [
      'theatlantic/js/components/most-popular.js'
    ],
    'dist/theatlantic/js/bundle/lacroix/components/most-popular.js': [
      'theatlantic/js/lacroix/components/most-popular.js'
    ],
    'dist/theatlantic/js/bundle/lacroix/components/editors-choice.js': [
      'theatlantic/js/lacroix/components/editors-choice.js'
    ],
    'dist/theatlantic/js/bundle/components/navigation.js': [
      'theatlantic/js/components/navigation.js'
    ],
    'dist/theatlantic/js/bundle/components/house-creative-fallback.js': [
      'theatlantic/js/components/house-creative-fallback.js'
    ],
    'dist/theatlantic/js/bundle/components/footer.js': [
      'theatlantic/js/components/footer.js'
    ],
    'dist/theatlantic/js/bundle/lacroix/components/footer.js': [
      'theatlantic/js/lacroix/components/footer.js'
    ],
    'dist/theatlantic/js/bundle/components/share-social.js': [
      'theatlantic/js/components/share-social.js'
    ],
    'dist/theatlantic/js/bundle/components/leaflet.js': [
      'theatlantic/js/components/leaflet.js'
    ],
    'dist/theatlantic/js/bundle/lacroix/components/leaflet.js': [
      'theatlantic/js/lacroix/components/leaflet.js'
    ],
    'dist/theatlantic/js/bundle/components/related-video.js': [
      'theatlantic/js/components/related-video.js'
    ],
    'dist/theatlantic/js/bundle/utils/debug.js': [
      'theatlantic/js/utils/debug.js'
    ],
    'dist/theatlantic/js/bundle/utils/iframe-resizer.js': [
      'theatlantic/js/utils/iframe-resizer.js'
    ],
    'dist/theatlantic/js/bundle/pages/year-in-review.js': [
      'theatlantic/js/pages/year-in-review.js'
    ]
  },
  packages: {
    'citylab': {
      'main': 'js/main.js',
      'defaultExtension': 'js',
      'format': 'esm'
    },
    'theatlantic': {
      'main': 'js/main.js',
      'defaultExtension': 'js',
      'format': 'esm'
    },
    'systemjs-nunjucks-loader': {
      'defaultExtension': 'js',
      'main': 'index.js'
    },
    'hippo': {
      'main': 'base.html',
      'defaultExtension': 'html'
    },
    'concrete': {
      'main': 'base.html',
      'defaultExtension': 'html'
    },
    'npm:systemjs-plugin-babel@0.0.25': {
      'meta': {
        '*.js': {
          'loader': false
        }
      }
    }
  },
  meta: {
    '*.html': {
      'loader': 'systemjs-nunjucks-loader'
    },
    '*.js': {
      'babelOptions': {
        'optional': [
          'runtime',
          'optimisation.modules.system'
        ]
      }
    },
    '*.scss': {
      'loader': 'sass'
    },
    'pageInfo': {
      'build': false
    },
    'accountsConfig': {
      'build': false
    },
    'adsConfig': {
      'build': false
    },
    'vendorConfig': {
      'build': false
    },
    'adsjs': {
      'build': false,
      'format': 'global',
      'scriptLoad': true,
      'exports': 'ads'
    },
    'disqus_embed': {
      'build': false,
      'format': 'global',
      'scriptLoad': true,
      'exports': 'DISQUS'
    },
    'twitter': {
      'build': false,
      'format': 'global',
      'scriptLoad': true,
      'exports': 'twttr'
    },
    'gtm': {
      'build': false,
      'format': 'global',
      'scriptLoad': true,
      'exports': 'google_tag_manager'
    },
    'scrolljs': {
      'build': false,
      'format': 'global',
      'scriptLoad': true,
      'exports': 'Scroll'
    }
  },
  map: {
    'babel': 'npm:babel-core@5.8.38',
    'hippo': 'theatlantic/templates/hippo',
    'fromEntries': 'npm:object.fromentries@2.0.0'
  },
  nodeConfig: {
    'map': {}
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    'clipboard': 'npm:clipboard@2.0.4',
    'babel-polyfill': 'npm:babel-polyfill@6.26.0',
    'es6-object-assign': 'npm:es6-object-assign@1.1.0',
    'breakpoint': 'npm:breakpoint-sass@2.7.1',
    'jwt-decode': 'npm:jwt-decode@2.2.0',
    'nunjucks': 'npm:nunjucks@3.1.7',
    'a-sync-waterfall': 'npm:a-sync-waterfall@1.0.1',
    'asap': 'npm:asap@2.0.6',
    'graceful-fs': 'npm:graceful-fs@4.1.15',
    'accessibilityjs': 'npm:accessibilityjs@1.0.1',
    'assert': 'npm:jspm-nodelibs-assert@0.2.1',
    'bcrypt-pbkdf': 'npm:bcrypt-pbkdf@1.0.1',
    'buffer': 'npm:jspm-nodelibs-buffer@0.2.3',
    'child_process': 'npm:jspm-nodelibs-child_process@0.2.1',
    'constants': 'npm:jspm-nodelibs-constants@0.2.1',
    'crypto': 'npm:jspm-nodelibs-crypto@0.2.1',
    'css': 'github:systemjs/plugin-css@0.1.35',
    'debug': 'npm:debug@2.6.9',
    'dgram': 'npm:jspm-nodelibs-dgram@0.2.1',
    'dns': 'npm:jspm-nodelibs-dns@0.2.1',
    'domain': 'npm:jspm-nodelibs-domain@0.2.1',
    'ecc-jsbn': 'npm:ecc-jsbn@0.1.1',
    'events': 'npm:jspm-nodelibs-events@0.2.2',
    'fontfaceobserver': 'npm:fontfaceobserver@2.0.13',
    'fs': 'npm:jspm-nodelibs-fs@0.2.1',
    'fsevents': 'npm:fsevents@1.2.7',
    'http': 'npm:jspm-nodelibs-http@0.2.0',
    'https': 'npm:jspm-nodelibs-https@0.2.2',
    'iframe-resizer': 'npm:iframe-resizer@3.6.2',
    'intersection-observer': 'npm:intersection-observer@0.5.1',
    'jquery': 'npm:jquery@3.3.1',
    'js-cookie': 'npm:js-cookie@2.1.4',
    'jsbn': 'npm:jsbn@0.1.1',
    'json': 'github:systemjs/plugin-json@0.3.0',
    'lazysizes': 'github:theatlantic/lazysizes@4.0.5',
    'module': 'npm:jspm-nodelibs-module@0.2.1',
    'net': 'npm:jspm-nodelibs-net@0.2.1',
    'object.fromentries': 'npm:object.fromentries@2.0.0',
    'os': 'npm:jspm-nodelibs-os@0.2.2',
    'path': 'npm:jspm-nodelibs-path@0.2.3',
    'picturefill': 'npm:picturefill@3.0.2',
    'process': 'npm:jspm-nodelibs-process@0.2.1',
    'promise-polyfill': 'npm:promise-polyfill@7.1.2',
    'querystring': 'npm:jspm-nodelibs-querystring@0.2.2',
    'regenerator-runtime': 'npm:regenerator-runtime@0.13.2',
    'sass': 'github:fdintino/plugin-sass@0.7.0',
    'stream': 'npm:jspm-nodelibs-stream@0.2.1',
    'string_decoder': 'npm:jspm-nodelibs-string_decoder@0.2.2',
    'system-image': 'npm:system-image@0.1.0',
    'system-script': 'npm:system-script@0.1.9',
    'theatlantic-nunjucks-helpers': 'github:theatlantic/theatlantic-nunjucks-helpers@1.6.1',
    'tls': 'npm:jspm-nodelibs-tls@0.2.1',
    'tti-polyfill': 'npm:tti-polyfill@0.2.2',
    'tty': 'npm:jspm-nodelibs-tty@0.2.1',
    'tweetnacl': 'npm:tweetnacl@0.14.5',
    'url': 'npm:jspm-nodelibs-url@0.2.1',
    'usertiming': 'npm:usertiming@0.1.8',
    'util': 'npm:jspm-nodelibs-util@0.2.2',
    'uuid': 'npm:uuid@3.0.1',
    'vm': 'npm:jspm-nodelibs-vm@0.2.1',
    'waypoints': 'npm:waypoints@4.0.1',
    'whatwg-fetch': 'npm:whatwg-fetch@2.0.3',
    'zlib': 'npm:jspm-nodelibs-zlib@0.2.3'
  },
  packages: {
    'npm:bcrypt-pbkdf@1.0.1': {
      'map': {
        'tweetnacl': 'npm:tweetnacl@0.14.5'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.8',
        'randombytes': 'npm:randombytes@2.0.6'
      }
    },
    'npm:browserify-sign@4.0.4': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.8',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'create-hash': 'npm:create-hash@1.2.0',
        'create-hmac': 'npm:create-hmac@1.1.7',
        'elliptic': 'npm:elliptic@6.4.1',
        'inherits': 'npm:inherits@2.0.3',
        'parse-asn1': 'npm:parse-asn1@5.1.3',
        'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
      }
    },
    'npm:browserify-zlib@0.1.4': {
      'map': {
        'pako': 'npm:pako@0.2.9',
        'readable-stream': 'npm:readable-stream@2.3.6'
      }
    },
    'npm:buffer-xor@1.0.3': {
      'map': {
        'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
      }
    },
    'npm:core-util-is@1.0.2': {
      'map': {}
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.1'
      }
    },
    'npm:ecc-jsbn@0.1.1': {
      'map': {
        'jsbn': 'npm:jsbn@0.1.1'
      }
    },
    'npm:fs.realpath@1.0.0': {
      'map': {}
    },
    'npm:gauge@2.7.4': {
      'map': {
        'aproba': 'npm:aproba@1.2.0',
        'console-control-strings': 'npm:console-control-strings@1.1.0',
        'has-unicode': 'npm:has-unicode@2.0.1',
        'object-assign': 'npm:object-assign@4.1.1',
        'signal-exit': 'npm:signal-exit@3.0.2',
        'string-width': 'npm:string-width@1.0.2',
        'strip-ansi': 'npm:strip-ansi@3.0.1',
        'wide-align': 'npm:wide-align@1.1.3'
      }
    },
    'npm:has-unicode@2.0.1': {
      'map': {}
    },
    'npm:hmac-drbg@1.0.1': {
      'map': {
        'hash.js': 'npm:hash.js@1.1.7',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.1',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1',
        'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
      }
    },
    'npm:iframe-resizer@3.6.2': {
      'map': {}
    },
    'npm:inflight@1.0.6': {
      'map': {
        'once': 'npm:once@1.4.0',
        'wrappy': 'npm:wrappy@1.0.2'
      }
    },
    'npm:inherits@2.0.3': {
      'map': {}
    },
    'npm:is-fullwidth-code-point@1.0.0': {
      'map': {
        'number-is-nan': 'npm:number-is-nan@1.0.1'
      }
    },
    'npm:isarray@1.0.0': {
      'map': {
        'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
      }
    },
    'npm:js-cookie@2.1.4': {
      'map': {}
    },
    'npm:minimatch@3.0.4': {
      'map': {
        'brace-expansion': 'npm:brace-expansion@1.1.11'
      }
    },
    'npm:mkdirp@0.5.1': {
      'map': {
        'minimist': 'npm:minimist@0.0.8'
      }
    },
    'npm:nopt@4.0.1': {
      'map': {
        'abbrev': 'npm:abbrev@1.1.1',
        'osenv': 'npm:osenv@0.1.5'
      }
    },
    'npm:npmlog@4.1.2': {
      'map': {
        'are-we-there-yet': 'npm:are-we-there-yet@1.1.5',
        'console-control-strings': 'npm:console-control-strings@1.1.0',
        'gauge': 'npm:gauge@2.7.4',
        'set-blocking': 'npm:set-blocking@2.0.0'
      }
    },
    'npm:once@1.4.0': {
      'map': {
        'wrappy': 'npm:wrappy@1.0.2'
      }
    },
    'npm:os-homedir@1.0.2': {
      'map': {}
    },
    'npm:os-tmpdir@1.0.2': {
      'map': {}
    },
    'npm:pako@0.2.9': {
      'map': {}
    },
    'npm:path-is-absolute@1.0.1': {
      'map': {}
    },
    'npm:picturefill@3.0.2': {
      'map': {}
    },
    'npm:punycode@1.3.2': {
      'map': {}
    },
    'npm:set-blocking@2.0.0': {
      'map': {}
    },
    'npm:signal-exit@3.0.2': {
      'map': {}
    },
    'npm:string-width@1.0.2': {
      'map': {
        'code-point-at': 'npm:code-point-at@1.1.0',
        'is-fullwidth-code-point': 'npm:is-fullwidth-code-point@1.0.0',
        'strip-ansi': 'npm:strip-ansi@3.0.1'
      }
    },
    'npm:string_decoder@0.10.31': {
      'map': {}
    },
    'npm:strip-ansi@3.0.1': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.1.1'
      }
    },
    'npm:tti-polyfill@0.2.2': {
      'map': {}
    },
    'npm:url@0.11.0': {
      'map': {
        'punycode': 'npm:punycode@1.3.2',
        'querystring': 'npm:querystring@0.2.0'
      }
    },
    'npm:usertiming@0.1.8': {
      'map': {}
    },
    'npm:util-deprecate@1.0.2': {
      'map': {}
    },
    'npm:uuid@3.0.1': {
      'map': {}
    },
    'npm:waypoints@4.0.1': {
      'map': {
        'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
      }
    },
    'npm:jspm-nodelibs-crypto@0.2.1': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.12.0'
      }
    },
    'npm:jspm-nodelibs-domain@0.2.1': {
      'map': {
        'domain-browser': 'npm:domain-browser@1.2.0'
      }
    },
    'npm:jspm-nodelibs-buffer@0.2.3': {
      'map': {
        'buffer': 'npm:buffer@5.2.1'
      }
    },
    'npm:jspm-nodelibs-stream@0.2.1': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.2'
      }
    },
    'npm:jspm-nodelibs-os@0.2.2': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.3.0'
      }
    },
    'npm:jspm-nodelibs-http@0.2.0': {
      'map': {
        'http-browserify': 'npm:stream-http@2.8.3'
      }
    },
    'npm:stream-http@2.8.3': {
      'map': {
        'readable-stream': 'npm:readable-stream@2.3.6',
        'inherits': 'npm:inherits@2.0.3',
        'to-arraybuffer': 'npm:to-arraybuffer@1.0.1',
        'builtin-status-codes': 'npm:builtin-status-codes@3.0.0',
        'xtend': 'npm:xtend@4.0.1'
      }
    },
    'npm:jspm-nodelibs-string_decoder@0.2.2': {
      'map': {
        'string_decoder': 'npm:string_decoder@0.10.31'
      }
    },
    'npm:readable-stream@2.3.6': {
      'map': {
        'process-nextick-args': 'npm:process-nextick-args@2.0.0',
        'string_decoder': 'npm:string_decoder@1.1.1',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'inherits': 'npm:inherits@2.0.3',
        'isarray': 'npm:isarray@1.0.0',
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'util-deprecate': 'npm:util-deprecate@1.0.2'
      }
    },
    'npm:string_decoder@1.1.1': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.2'
      }
    },
    'npm:jspm-nodelibs-zlib@0.2.3': {
      'map': {
        'browserify-zlib': 'npm:browserify-zlib@0.1.4'
      }
    },
    'npm:debug@2.6.9': {
      'map': {
        'ms': 'npm:ms@2.0.0'
      }
    },
    'npm:buffer@5.2.1': {
      'map': {
        'base64-js': 'npm:base64-js@1.3.0',
        'ieee754': 'npm:ieee754@1.1.12'
      }
    },
    'npm:crypto-browserify@3.12.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'randomfill': 'npm:randomfill@1.0.4',
        'browserify-cipher': 'npm:browserify-cipher@1.0.1',
        'create-hash': 'npm:create-hash@1.2.0',
        'randombytes': 'npm:randombytes@2.0.6',
        'create-ecdh': 'npm:create-ecdh@4.0.3',
        'create-hmac': 'npm:create-hmac@1.1.7',
        'pbkdf2': 'npm:pbkdf2@3.0.17',
        'diffie-hellman': 'npm:diffie-hellman@5.0.3',
        'browserify-sign': 'npm:browserify-sign@4.0.4',
        'public-encrypt': 'npm:public-encrypt@4.0.3'
      }
    },
    'npm:randomfill@1.0.4': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'randombytes': 'npm:randombytes@2.0.6'
      }
    },
    'npm:create-hash@1.2.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'ripemd160': 'npm:ripemd160@2.0.2',
        'sha.js': 'npm:sha.js@2.4.11',
        'md5.js': 'npm:md5.js@1.3.5',
        'cipher-base': 'npm:cipher-base@1.0.4'
      }
    },
    'npm:randombytes@2.0.6': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.2'
      }
    },
    'npm:create-hmac@1.1.7': {
      'map': {
        'create-hash': 'npm:create-hash@1.2.0',
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'ripemd160': 'npm:ripemd160@2.0.2',
        'sha.js': 'npm:sha.js@2.4.11',
        'cipher-base': 'npm:cipher-base@1.0.4'
      }
    },
    'npm:browserify-cipher@1.0.1': {
      'map': {
        'browserify-des': 'npm:browserify-des@1.0.2',
        'browserify-aes': 'npm:browserify-aes@1.2.0',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3'
      }
    },
    'npm:pbkdf2@3.0.17': {
      'map': {
        'create-hash': 'npm:create-hash@1.2.0',
        'create-hmac': 'npm:create-hmac@1.1.7',
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'ripemd160': 'npm:ripemd160@2.0.2',
        'sha.js': 'npm:sha.js@2.4.11'
      }
    },
    'npm:browserify-des@1.0.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:evp_bytestokey@1.0.3': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'md5.js': 'npm:md5.js@1.3.5'
      }
    },
    'npm:browserify-aes@1.2.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.2.0',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'cipher-base': 'npm:cipher-base@1.0.4',
        'inherits': 'npm:inherits@2.0.3',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:md5.js@1.3.5': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'inherits': 'npm:inherits@2.0.3',
        'hash-base': 'npm:hash-base@3.0.4'
      }
    },
    'npm:ripemd160@2.0.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'hash-base': 'npm:hash-base@3.0.4'
      }
    },
    'npm:sha.js@2.4.11': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.2'
      }
    },
    'npm:cipher-base@1.0.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.2'
      }
    },
    'npm:create-ecdh@4.0.3': {
      'map': {
        'elliptic': 'npm:elliptic@6.4.1',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:public-encrypt@4.0.3': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.8',
        'create-hash': 'npm:create-hash@1.2.0',
        'randombytes': 'npm:randombytes@2.0.6',
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.1.3'
      }
    },
    'npm:diffie-hellman@5.0.3': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.6',
        'bn.js': 'npm:bn.js@4.11.8',
        'miller-rabin': 'npm:miller-rabin@4.0.1'
      }
    },
    'npm:elliptic@6.4.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.8',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.1',
        'hmac-drbg': 'npm:hmac-drbg@1.0.1',
        'brorand': 'npm:brorand@1.1.0',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1',
        'hash.js': 'npm:hash.js@1.1.7'
      }
    },
    'npm:hash-base@3.0.4': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:rimraf@2.6.3': {
      'map': {
        'glob': 'npm:glob@7.1.3'
      }
    },
    'npm:parse-asn1@5.1.3': {
      'map': {
        'browserify-aes': 'npm:browserify-aes@1.2.0',
        'create-hash': 'npm:create-hash@1.2.0',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.3',
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'pbkdf2': 'npm:pbkdf2@3.0.17',
        'asn1.js': 'npm:asn1.js@4.10.1'
      }
    },
    'npm:hash.js@1.1.7': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.1'
      }
    },
    'npm:miller-rabin@4.0.1': {
      'map': {
        'brorand': 'npm:brorand@1.1.0',
        'bn.js': 'npm:bn.js@4.11.8'
      }
    },
    'npm:glob@7.1.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'path-is-absolute': 'npm:path-is-absolute@1.0.1',
        'fs.realpath': 'npm:fs.realpath@1.0.0',
        'inflight': 'npm:inflight@1.0.6',
        'once': 'npm:once@1.4.0',
        'minimatch': 'npm:minimatch@3.0.4'
      }
    },
    'npm:asn1.js@4.10.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.8',
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.1'
      }
    },
    'npm:brace-expansion@1.1.11': {
      'map': {
        'balanced-match': 'npm:balanced-match@1.0.0',
        'concat-map': 'npm:concat-map@0.0.1'
      }
    },
    'npm:jspm-nodelibs-url@0.2.1': {
      'map': {
        'url': 'npm:url@0.11.0'
      }
    },
    'npm:stream-browserify@2.0.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.3.6'
      }
    },
    'npm:fsevents@1.2.7': {
      'map': {
        'nan': 'npm:nan@2.12.1',
        'node-pre-gyp': 'npm:node-pre-gyp@0.10.3'
      }
    },
    'npm:node-pre-gyp@0.10.3': {
      'map': {
        'detect-libc': 'npm:detect-libc@1.0.3',
        'mkdirp': 'npm:mkdirp@0.5.1',
        'npmlog': 'npm:npmlog@4.1.2',
        'nopt': 'npm:nopt@4.0.1',
        'npm-packlist': 'npm:npm-packlist@1.2.0',
        'semver': 'npm:semver@5.6.0',
        'rimraf': 'npm:rimraf@2.6.3',
        'rc': 'npm:rc@1.2.8',
        'tar': 'npm:tar@4.4.8',
        'needle': 'npm:needle@2.2.4'
      }
    },
    'npm:tar@4.4.8': {
      'map': {
        'mkdirp': 'npm:mkdirp@0.5.1',
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'fs-minipass': 'npm:fs-minipass@1.2.5',
        'chownr': 'npm:chownr@1.1.1',
        'minizlib': 'npm:minizlib@1.2.1',
        'yallist': 'npm:yallist@3.0.3',
        'minipass': 'npm:minipass@2.3.5'
      }
    },
    'npm:rc@1.2.8': {
      'map': {
        'minimist': 'npm:minimist@1.2.0',
        'deep-extend': 'npm:deep-extend@0.6.0',
        'strip-json-comments': 'npm:strip-json-comments@2.0.1',
        'ini': 'npm:ini@1.3.5'
      }
    },
    'npm:needle@2.2.4': {
      'map': {
        'debug': 'npm:debug@2.6.9',
        'sax': 'npm:sax@1.2.4',
        'iconv-lite': 'npm:iconv-lite@0.4.24'
      }
    },
    'npm:npm-packlist@1.2.0': {
      'map': {
        'npm-bundled': 'npm:npm-bundled@1.0.5',
        'ignore-walk': 'npm:ignore-walk@3.0.1'
      }
    },
    'npm:are-we-there-yet@1.1.5': {
      'map': {
        'readable-stream': 'npm:readable-stream@2.3.6',
        'delegates': 'npm:delegates@1.0.0'
      }
    },
    'npm:fs-minipass@1.2.5': {
      'map': {
        'minipass': 'npm:minipass@2.3.5'
      }
    },
    'npm:minizlib@1.2.1': {
      'map': {
        'minipass': 'npm:minipass@2.3.5'
      }
    },
    'npm:osenv@0.1.5': {
      'map': {
        'os-homedir': 'npm:os-homedir@1.0.2',
        'os-tmpdir': 'npm:os-tmpdir@1.0.2'
      }
    },
    'npm:minipass@2.3.5': {
      'map': {
        'safe-buffer': 'npm:safe-buffer@5.1.2',
        'yallist': 'npm:yallist@3.0.3'
      }
    },
    'npm:ignore-walk@3.0.1': {
      'map': {
        'minimatch': 'npm:minimatch@3.0.4'
      }
    },
    'npm:wide-align@1.1.3': {
      'map': {
        'string-width': 'npm:string-width@2.1.1'
      }
    },
    'npm:string-width@2.1.1': {
      'map': {
        'strip-ansi': 'npm:strip-ansi@4.0.0',
        'is-fullwidth-code-point': 'npm:is-fullwidth-code-point@2.0.0'
      }
    },
    'npm:iconv-lite@0.4.24': {
      'map': {
        'safer-buffer': 'npm:safer-buffer@2.1.2'
      }
    },
    'npm:strip-ansi@4.0.0': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@3.0.0'
      }
    },
    'npm:asap@2.0.6': {
      'map': {
        'a-sync-waterfall': 'npm:a-sync-waterfall@1.0.1',
        'asap': 'npm:asap@2.0.6'
      }
    },
    'npm:a-sync-waterfall@1.0.1': {
      'map': {
        'a-sync-waterfall': 'npm:a-sync-waterfall@1.0.1',
        'asap': 'npm:asap@2.0.6'
      }
    },
    'npm:nunjucks@3.1.7': {
      'map': {
        'a-sync-waterfall': 'npm:a-sync-waterfall@1.0.1',
        'asap': 'npm:asap@2.0.6'
      }
    },
    'npm:babel-runtime@6.26.0': {
      'map': {
        'regenerator-runtime': 'npm:regenerator-runtime@0.11.1',
        'core-js': 'npm:core-js@2.6.5'
      }
    },
    'npm:chalk@1.1.3': {
      'map': {
        'ansi-styles': 'npm:ansi-styles@2.2.1',
        'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
        'has-ansi': 'npm:has-ansi@2.0.0',
        'strip-ansi': 'npm:strip-ansi@3.0.1',
        'supports-color': 'npm:supports-color@2.0.0'
      }
    },
    'npm:has-ansi@2.0.0': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.1.1'
      }
    },
    'github:fdintino/plugin-sass@0.7.0': {
      'map': {
        'postcss': 'npm:postcss@5.2.18',
        'autoprefixer': 'npm:autoprefixer@6.7.7',
        'css-asset-copier': 'npm:css-asset-copier@1.0.2',
        'css-url-rewriter-ex': 'npm:css-url-rewriter-ex@1.0.6',
        'sass.js': 'npm:sass.js@0.9.13',
        'reqwest': 'github:ded/reqwest@2.0.5'
      }
    },
    'npm:autoprefixer@6.7.7': {
      'map': {
        'postcss': 'npm:postcss@5.2.18',
        'normalize-range': 'npm:normalize-range@0.1.2',
        'num2fraction': 'npm:num2fraction@1.2.2',
        'postcss-value-parser': 'npm:postcss-value-parser@3.3.1',
        'browserslist': 'npm:browserslist@1.7.7',
        'caniuse-db': 'npm:caniuse-db@1.0.30000932'
      }
    },
    'npm:postcss@5.2.18': {
      'map': {
        'js-base64': 'npm:js-base64@2.5.1',
        'supports-color': 'npm:supports-color@3.2.3',
        'chalk': 'npm:chalk@1.1.3',
        'source-map': 'npm:source-map@0.5.7'
      }
    },
    'npm:supports-color@3.2.3': {
      'map': {
        'has-flag': 'npm:has-flag@1.0.0'
      }
    },
    'npm:css-asset-copier@1.0.2': {
      'map': {
        'fs-extra': 'npm:fs-extra@0.30.0',
        'babel-runtime': 'npm:babel-runtime@6.26.0'
      }
    },
    'npm:css-url-rewriter-ex@1.0.6': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.26.0'
      }
    },
    'npm:fs-extra@0.30.0': {
      'map': {
        'graceful-fs': 'npm:graceful-fs@4.1.15',
        'path-is-absolute': 'npm:path-is-absolute@1.0.1',
        'klaw': 'npm:klaw@1.3.1',
        'jsonfile': 'npm:jsonfile@2.4.0',
        'rimraf': 'npm:rimraf@2.6.3'
      }
    },
    'npm:browserslist@1.7.7': {
      'map': {
        'electron-to-chromium': 'npm:electron-to-chromium@1.3.108',
        'caniuse-db': 'npm:caniuse-db@1.0.30000932'
      }
    },
    'npm:babel-polyfill@6.26.0': {
      'map': {
        'regenerator-runtime': 'npm:regenerator-runtime@0.10.5',
        'core-js': 'npm:core-js@2.6.5',
        'babel-runtime': 'npm:babel-runtime@6.26.0'
      }
    },
    'npm:object.fromentries@2.0.0': {
      'map': {
        'has': 'npm:has@1.0.3',
        'define-properties': 'npm:define-properties@1.1.3',
        'es-abstract': 'npm:es-abstract@1.13.0',
        'function-bind': 'npm:function-bind@1.1.1'
      }
    },
    'npm:has@1.0.3': {
      'map': {
        'function-bind': 'npm:function-bind@1.1.1'
      }
    },
    'npm:es-abstract@1.13.0': {
      'map': {
        'function-bind': 'npm:function-bind@1.1.1',
        'has': 'npm:has@1.0.3',
        'is-callable': 'npm:is-callable@1.1.4',
        'is-regex': 'npm:is-regex@1.0.4',
        'es-to-primitive': 'npm:es-to-primitive@1.2.0',
        'object-keys': 'npm:object-keys@1.1.1'
      }
    },
    'npm:es-to-primitive@1.2.0': {
      'map': {
        'is-callable': 'npm:is-callable@1.1.4',
        'is-symbol': 'npm:is-symbol@1.0.2',
        'is-date-object': 'npm:is-date-object@1.0.1'
      }
    },
    'npm:is-regex@1.0.4': {
      'map': {
        'has': 'npm:has@1.0.3'
      }
    },
    'npm:define-properties@1.1.3': {
      'map': {
        'object-keys': 'npm:object-keys@1.1.1'
      }
    },
    'npm:is-symbol@1.0.2': {
      'map': {
        'has-symbols': 'npm:has-symbols@1.0.0'
      }
    },
    'npm:clipboard@2.0.4': {
      'map': {
        'good-listener': 'npm:good-listener@1.2.2',
        'select': 'npm:select@1.1.2',
        'tiny-emitter': 'npm:tiny-emitter@2.1.0'
      }
    },
    'npm:good-listener@1.2.2': {
      'map': {
        'delegate': 'npm:delegate@3.2.0'
      }
    }
  }
});

"bundle";
System.registerDynamic("github:systemjs/plugin-css@0.1.35.json", [], true, function() {
  return {
    "main": "css"
  };
});

System.registerDynamic('github:systemjs/plugin-css@0.1.35/css.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  if (typeof window !== 'undefined') {
    var waitSeconds = 100;

    var head = document.getElementsByTagName('head')[0];

    var isWebkit = !!window.navigator.userAgent.match(/AppleWebKit\/([^ ;]*)/);
    var webkitLoadCheck = function (link, callback) {
      setTimeout(function () {
        for (var i = 0; i < document.styleSheets.length; i++) {
          var sheet = document.styleSheets[i];
          if (sheet.href == link.href) return callback();
        }
        webkitLoadCheck(link, callback);
      }, 10);
    };

    var cssIsReloadable = function cssIsReloadable(links) {
      // Css loaded on the page initially should be skipped by the first
      // systemjs load, and marked for reload
      var reloadable = true;
      forEach(links, function (link) {
        if (!link.hasAttribute('data-systemjs-css')) {
          reloadable = false;
          link.setAttribute('data-systemjs-css', '');
        }
      });
      return reloadable;
    };

    var findExistingCSS = function findExistingCSS(url) {
      // Search for existing link to reload
      var links = head.getElementsByTagName('link');
      return filter(links, function (link) {
        return link.href === url;
      });
    };

    var noop = function () {};

    var loadCSS = function (url, existingLinks) {
      return new Promise(function (resolve, reject) {
        var timeout = setTimeout(function () {
          reject('Unable to load CSS');
        }, waitSeconds * 1000);
        var _callback = function (error) {
          clearTimeout(timeout);
          link.onload = link.onerror = noop;
          setTimeout(function () {
            if (error) reject(error);else resolve('');
          }, 7);
        };
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = url;
        link.setAttribute('data-systemjs-css', '');
        if (!isWebkit) {
          link.onload = function () {
            _callback();
          };
        } else {
          webkitLoadCheck(link, _callback);
        }
        link.onerror = function (event) {
          _callback(event.error || new Error('Error loading CSS file.'));
        };
        if (existingLinks.length) head.insertBefore(link, existingLinks[0]);else head.appendChild(link);
      })
      // Remove the old link regardless of loading outcome
      .then(function (result) {
        forEach(existingLinks, function (link) {
          link.parentElement.removeChild(link);
        });
        return result;
      }, function (err) {
        forEach(existingLinks, function (link) {
          link.parentElement.removeChild(link);
        });
        throw err;
      });
    };

    exports.fetch = function (load) {
      // dont reload styles loaded in the head
      var links = findExistingCSS(load.address);
      if (!cssIsReloadable(links)) return '';
      return loadCSS(load.address, links);
    };
  } else {
    var builderPromise;
    function getBuilder(loader) {
      if (builderPromise) return builderPromise;

      return builderPromise = System['import']('./css-plugin-base.js', module.id).then(function (CSSPluginBase) {
        return new CSSPluginBase(function compile(source, address) {
          return {
            css: source,
            map: null,
            moduleSource: null,
            moduleFormat: null
          };
        });
      });
    }

    exports.cssPlugin = true;
    exports.fetch = function (load, fetch) {
      if (!this.builder) return '';
      return fetch(load);
    };
    exports.translate = function (load, opts) {
      if (!this.builder) return '';
      var loader = this;
      return getBuilder(loader).then(function (builder) {
        return builder.translate.call(loader, load, opts);
      });
    };
    exports.instantiate = function (load, opts) {
      if (!this.builder) return;
      var loader = this;
      return getBuilder(loader).then(function (builder) {
        return builder.instantiate.call(loader, load, opts);
      });
    };
    exports.bundle = function (loads, compileOpts, outputOpts) {
      var loader = this;
      return getBuilder(loader).then(function (builder) {
        return builder.bundle.call(loader, loads, compileOpts, outputOpts);
      });
    };
    exports.listAssets = function (loads, opts) {
      var loader = this;
      return getBuilder(loader).then(function (builder) {
        return builder.listAssets.call(loader, loads, opts);
      });
    };
  }

  // Because IE8?
  function filter(arrayLike, func) {
    var arr = [];
    forEach(arrayLike, function (item) {
      if (func(item)) arr.push(item);
    });
    return arr;
  }

  // Because IE8?
  function forEach(arrayLike, func) {
    for (var i = 0; i < arrayLike.length; i++) {
      func(arrayLike[i]);
    }
  }
});
System.registerDynamic("npm:jquery@3.3.1.json", [], true, function() {
  return {
    "main": "dist/jquery.js",
    "format": "amd",
    "meta": {
      "*.json": {
        "format": "json"
      }
    }
  };
});

/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
(function (global, factory) {

	"use strict";

	if (typeof module === "object" && typeof module.exports === "object") {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ? factory(global, true) : function (w) {
			if (!w.document) {
				throw new Error("jQuery requires a window with a document");
			}
			return factory(w);
		};
	} else {
		factory(global);
	}

	// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call(Object);

	var support = {};

	var isFunction = function isFunction(obj) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		return typeof obj === "function" && typeof obj.nodeType !== "number";
	};

	var isWindow = function isWindow(obj) {
		return obj != null && obj === obj.window;
	};

	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval(code, doc, node) {
		doc = doc || document;

		var i,
		    script = doc.createElement("script");

		script.text = code;
		if (node) {
			for (i in preservedScriptAttributes) {
				if (node[i]) {
					script[i] = node[i];
				}
			}
		}
		doc.head.appendChild(script).parentNode.removeChild(script);
	}

	function toType(obj) {
		if (obj == null) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
	}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module


	var version = "3.3.1",


	// Define a local copy of jQuery
	jQuery = function (selector, context) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init(selector, context);
	},


	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function () {
			return slice.call(this);
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function (num) {

			// Return all the elements in a clean array
			if (num == null) {
				return slice.call(this);
			}

			// Return just the one element from the set
			return num < 0 ? this[num + this.length] : this[num];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function (elems) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge(this.constructor(), elems);

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function (callback) {
			return jQuery.each(this, callback);
		},

		map: function (callback) {
			return this.pushStack(jQuery.map(this, function (elem, i) {
				return callback.call(elem, i, elem);
			}));
		},

		slice: function () {
			return this.pushStack(slice.apply(this, arguments));
		},

		first: function () {
			return this.eq(0);
		},

		last: function () {
			return this.eq(-1);
		},

		eq: function (i) {
			var len = this.length,
			    j = +i + (i < 0 ? len : 0);
			return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
		},

		end: function () {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function () {
		var options,
		    name,
		    src,
		    copy,
		    copyIsArray,
		    clone,
		    target = arguments[0] || {},
		    i = 1,
		    length = arguments.length,
		    deep = false;

		// Handle a deep copy situation
		if (typeof target === "boolean") {
			deep = target;

			// Skip the boolean and the target
			target = arguments[i] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if (typeof target !== "object" && !isFunction(target)) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if (i === length) {
			target = this;
			i--;
		}

		for (; i < length; i++) {

			// Only deal with non-null/undefined values
			if ((options = arguments[i]) != null) {

				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target === copy) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

						if (copyIsArray) {
							copyIsArray = false;
							clone = src && Array.isArray(src) ? src : [];
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = jQuery.extend(deep, clone, copy);

						// Don't bring in undefined values
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function (msg) {
			throw new Error(msg);
		},

		noop: function () {},

		isPlainObject: function (obj) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if (!obj || toString.call(obj) !== "[object Object]") {
				return false;
			}

			proto = getProto(obj);

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if (!proto) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
			return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
		},

		isEmptyObject: function (obj) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for (name in obj) {
				return false;
			}
			return true;
		},

		// Evaluates a script in a global context
		globalEval: function (code) {
			DOMEval(code);
		},

		each: function (obj, callback) {
			var length,
			    i = 0;

			if (isArrayLike(obj)) {
				length = obj.length;
				for (; i < length; i++) {
					if (callback.call(obj[i], i, obj[i]) === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					if (callback.call(obj[i], i, obj[i]) === false) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function (text) {
			return text == null ? "" : (text + "").replace(rtrim, "");
		},

		// results is for internal usage only
		makeArray: function (arr, results) {
			var ret = results || [];

			if (arr != null) {
				if (isArrayLike(Object(arr))) {
					jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
				} else {
					push.call(ret, arr);
				}
			}

			return ret;
		},

		inArray: function (elem, arr, i) {
			return arr == null ? -1 : indexOf.call(arr, elem, i);
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function (first, second) {
			var len = +second.length,
			    j = 0,
			    i = first.length;

			for (; j < len; j++) {
				first[i++] = second[j];
			}

			first.length = i;

			return first;
		},

		grep: function (elems, callback, invert) {
			var callbackInverse,
			    matches = [],
			    i = 0,
			    length = elems.length,
			    callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for (; i < length; i++) {
				callbackInverse = !callback(elems[i], i);
				if (callbackInverse !== callbackExpect) {
					matches.push(elems[i]);
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function (elems, callback, arg) {
			var length,
			    value,
			    i = 0,
			    ret = [];

			// Go through the array, translating each of the items to their new values
			if (isArrayLike(elems)) {
				length = elems.length;
				for (; i < length; i++) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}

				// Go through every key on the object,
			} else {
				for (i in elems) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply([], ret);
		},

		// A global GUID counter for objects
		guid: 1,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	if (typeof Symbol === "function") {
		jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
	}

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
		class2type["[object " + name + "]"] = name.toLowerCase();
	});

	function isArrayLike(obj) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
		    type = toType(obj);

		if (isFunction(obj) || isWindow(obj)) {
			return false;
		}

		return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
	}
	var Sizzle =
	/*!
  * Sizzle CSS Selector Engine v2.3.3
  * https://sizzlejs.com/
  *
  * Copyright jQuery Foundation and other contributors
  * Released under the MIT license
  * http://jquery.org/license
  *
  * Date: 2016-08-08
  */
	function (window) {

		var i,
		    support,
		    Expr,
		    getText,
		    isXML,
		    tokenize,
		    compile,
		    select,
		    outermostContext,
		    sortInput,
		    hasDuplicate,


		// Local document vars
		setDocument,
		    document,
		    docElem,
		    documentIsHTML,
		    rbuggyQSA,
		    rbuggyMatches,
		    matches,
		    contains,


		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		    preferredDoc = window.document,
		    dirruns = 0,
		    done = 0,
		    classCache = createCache(),
		    tokenCache = createCache(),
		    compilerCache = createCache(),
		    sortOrder = function (a, b) {
			if (a === b) {
				hasDuplicate = true;
			}
			return 0;
		},


		// Instance methods
		hasOwn = {}.hasOwnProperty,
		    arr = [],
		    pop = arr.pop,
		    push_native = arr.push,
		    push = arr.push,
		    slice = arr.slice,

		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function (list, elem) {
			var i = 0,
			    len = list.length;
			for (; i < len; i++) {
				if (list[i] === elem) {
					return i;
				}
			}
			return -1;
		},
		    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",


		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",


		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",


		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
		    pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" + ")\\)|)",


		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp(whitespace + "+", "g"),
		    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
		    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
		    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
		    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
		    rpseudo = new RegExp(pseudos),
		    ridentifier = new RegExp("^" + identifier + "$"),
		    matchExpr = {
			"ID": new RegExp("^#(" + identifier + ")"),
			"CLASS": new RegExp("^\\.(" + identifier + ")"),
			"TAG": new RegExp("^(" + identifier + "|[*])"),
			"ATTR": new RegExp("^" + attributes),
			"PSEUDO": new RegExp("^" + pseudos),
			"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
			"bool": new RegExp("^(?:" + booleans + ")$", "i"),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
		},
		    rinputs = /^(?:input|select|textarea|button)$/i,
		    rheader = /^h\d$/i,
		    rnative = /^[^{]+\{\s*\[native \w/,


		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    rsibling = /[+~]/,


		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
		    funescape = function (_, escaped, escapedWhitespace) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ? escaped : high < 0 ?
			// BMP codepoint
			String.fromCharCode(high + 0x10000) :
			// Supplemental Plane codepoint (surrogate pair)
			String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
		},


		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		    fcssescape = function (ch, asCodePoint) {
			if (asCodePoint) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if (ch === "\0") {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},


		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function () {
			setDocument();
		},
		    disabledAncestor = addCombinator(function (elem) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		}, { dir: "parentNode", next: "legend" });

		// Optimize for push.apply( _, NodeList )
		try {
			push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
			// Support: Android<4.0
			// Detect silently failing push.apply
			arr[preferredDoc.childNodes.length].nodeType;
		} catch (e) {
			push = { apply: arr.length ?

				// Leverage slice if possible
				function (target, els) {
					push_native.apply(target, slice.call(els));
				} :

				// Support: IE<9
				// Otherwise append directly
				function (target, els) {
					var j = target.length,
					    i = 0;
					// Can't trust NodeList.length
					while (target[j++] = els[i++]) {}
					target.length = j - 1;
				}
			};
		}

		function Sizzle(selector, context, results, seed) {
			var m,
			    i,
			    elem,
			    nid,
			    match,
			    groups,
			    newSelector,
			    newContext = context && context.ownerDocument,


			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

			results = results || [];

			// Return early from calls with invalid selector or context
			if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

				return results;
			}

			// Try to shortcut find operations (as opposed to filters) in HTML documents
			if (!seed) {

				if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
					setDocument(context);
				}
				context = context || document;

				if (documentIsHTML) {

					// If the selector is sufficiently simple, try using a "get*By*" DOM method
					// (excepting DocumentFragment context, where the methods don't exist)
					if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

						// ID selector
						if (m = match[1]) {

							// Document context
							if (nodeType === 9) {
								if (elem = context.getElementById(m)) {

									// Support: IE, Opera, Webkit
									// TODO: identify versions
									// getElementById can match elements by name instead of ID
									if (elem.id === m) {
										results.push(elem);
										return results;
									}
								} else {
									return results;
								}

								// Element context
							} else {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {

									results.push(elem);
									return results;
								}
							}

							// Type selector
						} else if (match[2]) {
							push.apply(results, context.getElementsByTagName(selector));
							return results;

							// Class selector
						} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {

							push.apply(results, context.getElementsByClassName(m));
							return results;
						}
					}

					// Take advantage of querySelectorAll
					if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {

						if (nodeType !== 1) {
							newContext = context;
							newSelector = selector;

							// qSA looks outside Element context, which is not what we want
							// Thanks to Andrew Dupont for this workaround technique
							// Support: IE <=8
							// Exclude object elements
						} else if (context.nodeName.toLowerCase() !== "object") {

							// Capture the context ID, setting it first if necessary
							if (nid = context.getAttribute("id")) {
								nid = nid.replace(rcssescape, fcssescape);
							} else {
								context.setAttribute("id", nid = expando);
							}

							// Prefix every selector in the list
							groups = tokenize(selector);
							i = groups.length;
							while (i--) {
								groups[i] = "#" + nid + " " + toSelector(groups[i]);
							}
							newSelector = groups.join(",");

							// Expand context for sibling selectors
							newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
						}

						if (newSelector) {
							try {
								push.apply(results, newContext.querySelectorAll(newSelector));
								return results;
							} catch (qsaError) {} finally {
								if (nid === expando) {
									context.removeAttribute("id");
								}
							}
						}
					}
				}
			}

			// All others
			return select(selector.replace(rtrim, "$1"), context, results, seed);
		}

		/**
   * Create key-value caches of limited size
   * @returns {function(string, object)} Returns the Object data after storing it on itself with
   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
   *	deleting the oldest entry
   */
		function createCache() {
			var keys = [];

			function cache(key, value) {
				// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
				if (keys.push(key + " ") > Expr.cacheLength) {
					// Only keep the most recent entries
					delete cache[keys.shift()];
				}
				return cache[key + " "] = value;
			}
			return cache;
		}

		/**
   * Mark a function for special use by Sizzle
   * @param {Function} fn The function to mark
   */
		function markFunction(fn) {
			fn[expando] = true;
			return fn;
		}

		/**
   * Support testing using an element
   * @param {Function} fn Passed the created element and returns a boolean result
   */
		function assert(fn) {
			var el = document.createElement("fieldset");

			try {
				return !!fn(el);
			} catch (e) {
				return false;
			} finally {
				// Remove from its parent by default
				if (el.parentNode) {
					el.parentNode.removeChild(el);
				}
				// release memory in IE
				el = null;
			}
		}

		/**
   * Adds the same handler for all of the specified attrs
   * @param {String} attrs Pipe-separated list of attributes
   * @param {Function} handler The method that will be applied
   */
		function addHandle(attrs, handler) {
			var arr = attrs.split("|"),
			    i = arr.length;

			while (i--) {
				Expr.attrHandle[arr[i]] = handler;
			}
		}

		/**
   * Checks document order of two siblings
   * @param {Element} a
   * @param {Element} b
   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
   */
		function siblingCheck(a, b) {
			var cur = b && a,
			    diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;

			// Use IE sourceIndex if available on both nodes
			if (diff) {
				return diff;
			}

			// Check if b follows a
			if (cur) {
				while (cur = cur.nextSibling) {
					if (cur === b) {
						return -1;
					}
				}
			}

			return a ? 1 : -1;
		}

		/**
   * Returns a function to use in pseudos for input types
   * @param {String} type
   */
		function createInputPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for buttons
   * @param {String} type
   */
		function createButtonPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return (name === "input" || name === "button") && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for :enabled/:disabled
   * @param {Boolean} disabled true for :disabled; false for :enabled
   */
		function createDisabledPseudo(disabled) {

			// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
			return function (elem) {

				// Only certain elements can match :enabled or :disabled
				// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
				// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
				if ("form" in elem) {

					// Check for inherited disabledness on relevant non-disabled elements:
					// * listed form-associated elements in a disabled fieldset
					//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
					//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
					// * option elements in a disabled optgroup
					//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
					// All such elements have a "form" property.
					if (elem.parentNode && elem.disabled === false) {

						// Option elements defer to a parent optgroup if present
						if ("label" in elem) {
							if ("label" in elem.parentNode) {
								return elem.parentNode.disabled === disabled;
							} else {
								return elem.disabled === disabled;
							}
						}

						// Support: IE 6 - 11
						// Use the isDisabled shortcut property to check for disabled fieldset ancestors
						return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
					}

					return elem.disabled === disabled;

					// Try to winnow out elements that can't be disabled before trusting the disabled property.
					// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
					// even exist on them, let alone have a boolean value.
				} else if ("label" in elem) {
					return elem.disabled === disabled;
				}

				// Remaining elements are neither :enabled nor :disabled
				return false;
			};
		}

		/**
   * Returns a function to use in pseudos for positionals
   * @param {Function} fn
   */
		function createPositionalPseudo(fn) {
			return markFunction(function (argument) {
				argument = +argument;
				return markFunction(function (seed, matches) {
					var j,
					    matchIndexes = fn([], seed.length, argument),
					    i = matchIndexes.length;

					// Match elements found at the specified indexes
					while (i--) {
						if (seed[j = matchIndexes[i]]) {
							seed[j] = !(matches[j] = seed[j]);
						}
					}
				});
			});
		}

		/**
   * Checks a node for validity as a Sizzle context
   * @param {Element|Object=} context
   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
   */
		function testContext(context) {
			return context && typeof context.getElementsByTagName !== "undefined" && context;
		}

		// Expose support vars for convenience
		support = Sizzle.support = {};

		/**
   * Detects XML nodes
   * @param {Element|Object} elem An element or a document
   * @returns {Boolean} True iff elem is a non-HTML XML node
   */
		isXML = Sizzle.isXML = function (elem) {
			// documentElement is verified for cases where it doesn't yet exist
			// (such as loading iframes in IE - #4833)
			var documentElement = elem && (elem.ownerDocument || elem).documentElement;
			return documentElement ? documentElement.nodeName !== "HTML" : false;
		};

		/**
   * Sets document-related variables once based on the current document
   * @param {Element|Object} [doc] An element or document object to use to set the document
   * @returns {Object} Returns the current document
   */
		setDocument = Sizzle.setDocument = function (node) {
			var hasCompare,
			    subWindow,
			    doc = node ? node.ownerDocument || node : preferredDoc;

			// Return early if doc is invalid or already selected
			if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
				return document;
			}

			// Update global variables
			document = doc;
			docElem = document.documentElement;
			documentIsHTML = !isXML(document);

			// Support: IE 9-11, Edge
			// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
			if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {

				// Support: IE 11, Edge
				if (subWindow.addEventListener) {
					subWindow.addEventListener("unload", unloadHandler, false);

					// Support: IE 9 - 10 only
				} else if (subWindow.attachEvent) {
					subWindow.attachEvent("onunload", unloadHandler);
				}
			}

			/* Attributes
   ---------------------------------------------------------------------- */

			// Support: IE<8
			// Verify that getAttribute really returns attributes and not properties
			// (excepting IE8 booleans)
			support.attributes = assert(function (el) {
				el.className = "i";
				return !el.getAttribute("className");
			});

			/* getElement(s)By*
   ---------------------------------------------------------------------- */

			// Check if getElementsByTagName("*") returns only elements
			support.getElementsByTagName = assert(function (el) {
				el.appendChild(document.createComment(""));
				return !el.getElementsByTagName("*").length;
			});

			// Support: IE<9
			support.getElementsByClassName = rnative.test(document.getElementsByClassName);

			// Support: IE<10
			// Check if getElementById returns elements by name
			// The broken getElementById methods don't pick up programmatically-set names,
			// so use a roundabout getElementsByName test
			support.getById = assert(function (el) {
				docElem.appendChild(el).id = expando;
				return !document.getElementsByName || !document.getElementsByName(expando).length;
			});

			// ID filter and find
			if (support.getById) {
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						return elem.getAttribute("id") === attrId;
					};
				};
				Expr.find["ID"] = function (id, context) {
					if (typeof context.getElementById !== "undefined" && documentIsHTML) {
						var elem = context.getElementById(id);
						return elem ? [elem] : [];
					}
				};
			} else {
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
						return node && node.value === attrId;
					};
				};

				// Support: IE 6 - 7 only
				// getElementById is not reliable as a find shortcut
				Expr.find["ID"] = function (id, context) {
					if (typeof context.getElementById !== "undefined" && documentIsHTML) {
						var node,
						    i,
						    elems,
						    elem = context.getElementById(id);

						if (elem) {

							// Verify the id attribute
							node = elem.getAttributeNode("id");
							if (node && node.value === id) {
								return [elem];
							}

							// Fall back on getElementsByName
							elems = context.getElementsByName(id);
							i = 0;
							while (elem = elems[i++]) {
								node = elem.getAttributeNode("id");
								if (node && node.value === id) {
									return [elem];
								}
							}
						}

						return [];
					}
				};
			}

			// Tag
			Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
				if (typeof context.getElementsByTagName !== "undefined") {
					return context.getElementsByTagName(tag);

					// DocumentFragment nodes don't have gEBTN
				} else if (support.qsa) {
					return context.querySelectorAll(tag);
				}
			} : function (tag, context) {
				var elem,
				    tmp = [],
				    i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName(tag);

				// Filter out possible comments
				if (tag === "*") {
					while (elem = results[i++]) {
						if (elem.nodeType === 1) {
							tmp.push(elem);
						}
					}

					return tmp;
				}
				return results;
			};

			// Class
			Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
				if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
					return context.getElementsByClassName(className);
				}
			};

			/* QSA/matchesSelector
   ---------------------------------------------------------------------- */

			// QSA and matchesSelector support

			// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
			rbuggyMatches = [];

			// qSa(:focus) reports false when true (Chrome 21)
			// We allow this because of a bug in IE8/9 that throws an error
			// whenever `document.activeElement` is accessed on an iframe
			// So, we allow :focus to pass through QSA all the time to avoid the IE error
			// See https://bugs.jquery.com/ticket/13378
			rbuggyQSA = [];

			if (support.qsa = rnative.test(document.querySelectorAll)) {
				// Build QSA regex
				// Regex strategy adopted from Diego Perini
				assert(function (el) {
					// Select is set to empty string on purpose
					// This is to test IE's treatment of not explicitly
					// setting a boolean content attribute,
					// since its presence should be enough
					// https://bugs.jquery.com/ticket/12359
					docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";

					// Support: IE8, Opera 11-12.16
					// Nothing should be selected when empty strings follow ^= or $= or *=
					// The test attribute must be unknown in Opera but "safe" for WinRT
					// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
					if (el.querySelectorAll("[msallowcapture^='']").length) {
						rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
					}

					// Support: IE8
					// Boolean attributes and "value" are not treated correctly
					if (!el.querySelectorAll("[selected]").length) {
						rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
					}

					// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
					if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
						rbuggyQSA.push("~=");
					}

					// Webkit/Opera - :checked should return selected option elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					// IE8 throws error here and will not see later tests
					if (!el.querySelectorAll(":checked").length) {
						rbuggyQSA.push(":checked");
					}

					// Support: Safari 8+, iOS 8+
					// https://bugs.webkit.org/show_bug.cgi?id=136851
					// In-page `selector#id sibling-combinator selector` fails
					if (!el.querySelectorAll("a#" + expando + "+*").length) {
						rbuggyQSA.push(".#.+[+~]");
					}
				});

				assert(function (el) {
					el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";

					// Support: Windows 8 Native Apps
					// The type and name attributes are restricted during .innerHTML assignment
					var input = document.createElement("input");
					input.setAttribute("type", "hidden");
					el.appendChild(input).setAttribute("name", "D");

					// Support: IE8
					// Enforce case-sensitivity of name attribute
					if (el.querySelectorAll("[name=d]").length) {
						rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
					}

					// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
					// IE8 throws error here and will not see later tests
					if (el.querySelectorAll(":enabled").length !== 2) {
						rbuggyQSA.push(":enabled", ":disabled");
					}

					// Support: IE9-11+
					// IE's :disabled selector does not pick up the children of disabled fieldsets
					docElem.appendChild(el).disabled = true;
					if (el.querySelectorAll(":disabled").length !== 2) {
						rbuggyQSA.push(":enabled", ":disabled");
					}

					// Opera 10-11 does not throw on post-comma invalid pseudos
					el.querySelectorAll("*,:x");
					rbuggyQSA.push(",.*:");
				});
			}

			if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

				assert(function (el) {
					// Check to see if it's possible to do matchesSelector
					// on a disconnected node (IE 9)
					support.disconnectedMatch = matches.call(el, "*");

					// This should fail with an exception
					// Gecko does not error, returns false instead
					matches.call(el, "[s!='']:x");
					rbuggyMatches.push("!=", pseudos);
				});
			}

			rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
			rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

			/* Contains
   ---------------------------------------------------------------------- */
			hasCompare = rnative.test(docElem.compareDocumentPosition);

			// Element contains another
			// Purposefully self-exclusive
			// As in, an element does not contain itself
			contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
				    bup = b && b.parentNode;
				return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
			} : function (a, b) {
				if (b) {
					while (b = b.parentNode) {
						if (b === a) {
							return true;
						}
					}
				}
				return false;
			};

			/* Sorting
   ---------------------------------------------------------------------- */

			// Document order sorting
			sortOrder = hasCompare ? function (a, b) {

				// Flag for duplicate removal
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				// Sort on method existence if only one input has compareDocumentPosition
				var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
				if (compare) {
					return compare;
				}

				// Calculate position if both inputs belong to the same document
				compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

				// Otherwise we know they are disconnected
				1;

				// Disconnected nodes
				if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {

					// Choose the first element that is related to our preferred document
					if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
						return -1;
					}
					if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
						return 1;
					}

					// Maintain original order
					return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
				}

				return compare & 4 ? -1 : 1;
			} : function (a, b) {
				// Exit early if the nodes are identical
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				var cur,
				    i = 0,
				    aup = a.parentNode,
				    bup = b.parentNode,
				    ap = [a],
				    bp = [b];

				// Parentless nodes are either documents or disconnected
				if (!aup || !bup) {
					return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;

					// If the nodes are siblings, we can do a quick check
				} else if (aup === bup) {
					return siblingCheck(a, b);
				}

				// Otherwise we need full lists of their ancestors for comparison
				cur = a;
				while (cur = cur.parentNode) {
					ap.unshift(cur);
				}
				cur = b;
				while (cur = cur.parentNode) {
					bp.unshift(cur);
				}

				// Walk down the tree looking for a discrepancy
				while (ap[i] === bp[i]) {
					i++;
				}

				return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck(ap[i], bp[i]) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
			};

			return document;
		};

		Sizzle.matches = function (expr, elements) {
			return Sizzle(expr, null, null, elements);
		};

		Sizzle.matchesSelector = function (elem, expr) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			// Make sure that attribute selectors are quoted
			expr = expr.replace(rattributeQuotes, "='$1']");

			if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

				try {
					var ret = matches.call(elem, expr);

					// IE 9's matchesSelector returns false on disconnected nodes
					if (ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11) {
						return ret;
					}
				} catch (e) {}
			}

			return Sizzle(expr, document, null, [elem]).length > 0;
		};

		Sizzle.contains = function (context, elem) {
			// Set document vars if needed
			if ((context.ownerDocument || context) !== document) {
				setDocument(context);
			}
			return contains(context, elem);
		};

		Sizzle.attr = function (elem, name) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			var fn = Expr.attrHandle[name.toLowerCase()],

			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

			return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
		};

		Sizzle.escape = function (sel) {
			return (sel + "").replace(rcssescape, fcssescape);
		};

		Sizzle.error = function (msg) {
			throw new Error("Syntax error, unrecognized expression: " + msg);
		};

		/**
   * Document sorting and removing duplicates
   * @param {ArrayLike} results
   */
		Sizzle.uniqueSort = function (results) {
			var elem,
			    duplicates = [],
			    j = 0,
			    i = 0;

			// Unless we *know* we can detect duplicates, assume their presence
			hasDuplicate = !support.detectDuplicates;
			sortInput = !support.sortStable && results.slice(0);
			results.sort(sortOrder);

			if (hasDuplicate) {
				while (elem = results[i++]) {
					if (elem === results[i]) {
						j = duplicates.push(i);
					}
				}
				while (j--) {
					results.splice(duplicates[j], 1);
				}
			}

			// Clear input after sorting to release objects
			// See https://github.com/jquery/sizzle/pull/225
			sortInput = null;

			return results;
		};

		/**
   * Utility function for retrieving the text value of an array of DOM nodes
   * @param {Array|Element} elem
   */
		getText = Sizzle.getText = function (elem) {
			var node,
			    ret = "",
			    i = 0,
			    nodeType = elem.nodeType;

			if (!nodeType) {
				// If no nodeType, this is expected to be an array
				while (node = elem[i++]) {
					// Do not traverse comment nodes
					ret += getText(node);
				}
			} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
				// Use textContent for elements
				// innerText usage removed for consistency of new lines (jQuery #11153)
				if (typeof elem.textContent === "string") {
					return elem.textContent;
				} else {
					// Traverse its children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						ret += getText(elem);
					}
				}
			} else if (nodeType === 3 || nodeType === 4) {
				return elem.nodeValue;
			}
			// Do not include comment or processing instruction nodes

			return ret;
		};

		Expr = Sizzle.selectors = {

			// Can be adjusted by the user
			cacheLength: 50,

			createPseudo: markFunction,

			match: matchExpr,

			attrHandle: {},

			find: {},

			relative: {
				">": { dir: "parentNode", first: true },
				" ": { dir: "parentNode" },
				"+": { dir: "previousSibling", first: true },
				"~": { dir: "previousSibling" }
			},

			preFilter: {
				"ATTR": function (match) {
					match[1] = match[1].replace(runescape, funescape);

					// Move the given value to match[3] whether quoted or unquoted
					match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

					if (match[2] === "~=") {
						match[3] = " " + match[3] + " ";
					}

					return match.slice(0, 4);
				},

				"CHILD": function (match) {
					/* matches from matchExpr["CHILD"]
     	1 type (only|nth|...)
     	2 what (child|of-type)
     	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
     	4 xn-component of xn+y argument ([+-]?\d*n|)
     	5 sign of xn-component
     	6 x of xn-component
     	7 sign of y-component
     	8 y of y-component
     */
					match[1] = match[1].toLowerCase();

					if (match[1].slice(0, 3) === "nth") {
						// nth-* requires argument
						if (!match[3]) {
							Sizzle.error(match[0]);
						}

						// numeric x and y parameters for Expr.filter.CHILD
						// remember that false/true cast respectively to 0/1
						match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
						match[5] = +(match[7] + match[8] || match[3] === "odd");

						// other types prohibit arguments
					} else if (match[3]) {
						Sizzle.error(match[0]);
					}

					return match;
				},

				"PSEUDO": function (match) {
					var excess,
					    unquoted = !match[6] && match[2];

					if (matchExpr["CHILD"].test(match[0])) {
						return null;
					}

					// Accept quoted arguments as-is
					if (match[3]) {
						match[2] = match[4] || match[5] || "";

						// Strip excess characters from unquoted arguments
					} else if (unquoted && rpseudo.test(unquoted) && (
					// Get excess from tokenize (recursively)
					excess = tokenize(unquoted, true)) && (
					// advance to the next closing parenthesis
					excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

						// excess is a negative index
						match[0] = match[0].slice(0, excess);
						match[2] = unquoted.slice(0, excess);
					}

					// Return only captures needed by the pseudo filter method (type and argument)
					return match.slice(0, 3);
				}
			},

			filter: {

				"TAG": function (nodeNameSelector) {
					var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
					return nodeNameSelector === "*" ? function () {
						return true;
					} : function (elem) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
				},

				"CLASS": function (className) {
					var pattern = classCache[className + " "];

					return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
						return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
					});
				},

				"ATTR": function (name, operator, check) {
					return function (elem) {
						var result = Sizzle.attr(elem, name);

						if (result == null) {
							return operator === "!=";
						}
						if (!operator) {
							return true;
						}

						result += "";

						return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
					};
				},

				"CHILD": function (type, what, argument, first, last) {
					var simple = type.slice(0, 3) !== "nth",
					    forward = type.slice(-4) !== "last",
					    ofType = what === "of-type";

					return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function (elem) {
						return !!elem.parentNode;
					} : function (elem, context, xml) {
						var cache,
						    uniqueCache,
						    outerCache,
						    node,
						    nodeIndex,
						    start,
						    dir = simple !== forward ? "nextSibling" : "previousSibling",
						    parent = elem.parentNode,
						    name = ofType && elem.nodeName.toLowerCase(),
						    useCache = !xml && !ofType,
						    diff = false;

						if (parent) {

							// :(first|last|only)-(child|of-type)
							if (simple) {
								while (dir) {
									node = elem;
									while (node = node[dir]) {
										if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [forward ? parent.firstChild : parent.lastChild];

							// non-xml :nth-child(...) stores cache data on `parent`
							if (forward && useCache) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[expando] || (node[expando] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

								cache = uniqueCache[type] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = nodeIndex && cache[2];
								node = nodeIndex && parent.childNodes[nodeIndex];

								while (node = ++nodeIndex && node && node[dir] || (

								// Fallback to seeking `elem` from the start
								diff = nodeIndex = 0) || start.pop()) {

									// When found, cache indexes on `parent` and break
									if (node.nodeType === 1 && ++diff && node === elem) {
										uniqueCache[type] = [dirruns, nodeIndex, diff];
										break;
									}
								}
							} else {
								// Use previously-cached element index if available
								if (useCache) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[expando] || (node[expando] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

									cache = uniqueCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if (diff === false) {
									// Use the same loop as above to seek `elem` from the start
									while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

										if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {

											// Cache the index of each encountered element
											if (useCache) {
												outerCache = node[expando] || (node[expando] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

												uniqueCache[type] = [dirruns, diff];
											}

											if (node === elem) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || diff % first === 0 && diff / first >= 0;
						}
					};
				},

				"PSEUDO": function (pseudo, argument) {
					// pseudo-class names are case-insensitive
					// http://www.w3.org/TR/selectors/#pseudo-classes
					// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
					// Remember that setFilters inherits from pseudos
					var args,
					    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

					// The user may use createPseudo to indicate that
					// arguments are needed to create the filter function
					// just as Sizzle does
					if (fn[expando]) {
						return fn(argument);
					}

					// But maintain support for old signatures
					if (fn.length > 1) {
						args = [pseudo, pseudo, "", argument];
						return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
							var idx,
							    matched = fn(seed, argument),
							    i = matched.length;
							while (i--) {
								idx = indexOf(seed, matched[i]);
								seed[idx] = !(matches[idx] = matched[i]);
							}
						}) : function (elem) {
							return fn(elem, 0, args);
						};
					}

					return fn;
				}
			},

			pseudos: {
				// Potentially complex pseudos
				"not": markFunction(function (selector) {
					// Trim the selector passed to compile
					// to avoid treating leading and trailing
					// spaces as combinators
					var input = [],
					    results = [],
					    matcher = compile(selector.replace(rtrim, "$1"));

					return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
						var elem,
						    unmatched = matcher(seed, null, xml, []),
						    i = seed.length;

						// Match elements unmatched by `matcher`
						while (i--) {
							if (elem = unmatched[i]) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) : function (elem, context, xml) {
						input[0] = elem;
						matcher(input, null, xml, results);
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
				}),

				"has": markFunction(function (selector) {
					return function (elem) {
						return Sizzle(selector, elem).length > 0;
					};
				}),

				"contains": markFunction(function (text) {
					text = text.replace(runescape, funescape);
					return function (elem) {
						return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
					};
				}),

				// "Whether an element is represented by a :lang() selector
				// is based solely on the element's language value
				// being equal to the identifier C,
				// or beginning with the identifier C immediately followed by "-".
				// The matching of C against the element's language value is performed case-insensitively.
				// The identifier C does not have to be a valid language name."
				// http://www.w3.org/TR/selectors/#lang-pseudo
				"lang": markFunction(function (lang) {
					// lang value must be a valid identifier
					if (!ridentifier.test(lang || "")) {
						Sizzle.error("unsupported lang: " + lang);
					}
					lang = lang.replace(runescape, funescape).toLowerCase();
					return function (elem) {
						var elemLang;
						do {
							if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

								elemLang = elemLang.toLowerCase();
								return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
							}
						} while ((elem = elem.parentNode) && elem.nodeType === 1);
						return false;
					};
				}),

				// Miscellaneous
				"target": function (elem) {
					var hash = window.location && window.location.hash;
					return hash && hash.slice(1) === elem.id;
				},

				"root": function (elem) {
					return elem === docElem;
				},

				"focus": function (elem) {
					return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
				},

				// Boolean properties
				"enabled": createDisabledPseudo(false),
				"disabled": createDisabledPseudo(true),

				"checked": function (elem) {
					// In CSS3, :checked should return both checked and selected elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					var nodeName = elem.nodeName.toLowerCase();
					return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
				},

				"selected": function (elem) {
					// Accessing this property makes selected-by-default
					// options in Safari work properly
					if (elem.parentNode) {
						elem.parentNode.selectedIndex;
					}

					return elem.selected === true;
				},

				// Contents
				"empty": function (elem) {
					// http://www.w3.org/TR/selectors/#empty-pseudo
					// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
					//   but not by others (comment: 8; processing instruction: 7; etc.)
					// nodeType < 6 works because attributes (2) do not appear as children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						if (elem.nodeType < 6) {
							return false;
						}
					}
					return true;
				},

				"parent": function (elem) {
					return !Expr.pseudos["empty"](elem);
				},

				// Element/input types
				"header": function (elem) {
					return rheader.test(elem.nodeName);
				},

				"input": function (elem) {
					return rinputs.test(elem.nodeName);
				},

				"button": function (elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === "button" || name === "button";
				},

				"text": function (elem) {
					var attr;
					return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
				},

				// Position-in-collection
				"first": createPositionalPseudo(function () {
					return [0];
				}),

				"last": createPositionalPseudo(function (matchIndexes, length) {
					return [length - 1];
				}),

				"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
					return [argument < 0 ? argument + length : argument];
				}),

				"even": createPositionalPseudo(function (matchIndexes, length) {
					var i = 0;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"odd": createPositionalPseudo(function (matchIndexes, length) {
					var i = 1;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; --i >= 0;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; ++i < length;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				})
			}
		};

		Expr.pseudos["nth"] = Expr.pseudos["eq"];

		// Add button/input type pseudos
		for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
			Expr.pseudos[i] = createInputPseudo(i);
		}
		for (i in { submit: true, reset: true }) {
			Expr.pseudos[i] = createButtonPseudo(i);
		}

		// Easy API for creating new setFilters
		function setFilters() {}
		setFilters.prototype = Expr.filters = Expr.pseudos;
		Expr.setFilters = new setFilters();

		tokenize = Sizzle.tokenize = function (selector, parseOnly) {
			var matched,
			    match,
			    tokens,
			    type,
			    soFar,
			    groups,
			    preFilters,
			    cached = tokenCache[selector + " "];

			if (cached) {
				return parseOnly ? 0 : cached.slice(0);
			}

			soFar = selector;
			groups = [];
			preFilters = Expr.preFilter;

			while (soFar) {

				// Comma and first run
				if (!matched || (match = rcomma.exec(soFar))) {
					if (match) {
						// Don't consume trailing commas as valid
						soFar = soFar.slice(match[0].length) || soFar;
					}
					groups.push(tokens = []);
				}

				matched = false;

				// Combinators
				if (match = rcombinators.exec(soFar)) {
					matched = match.shift();
					tokens.push({
						value: matched,
						// Cast descendant combinators to space
						type: match[0].replace(rtrim, " ")
					});
					soFar = soFar.slice(matched.length);
				}

				// Filters
				for (type in Expr.filter) {
					if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
						matched = match.shift();
						tokens.push({
							value: matched,
							type: type,
							matches: match
						});
						soFar = soFar.slice(matched.length);
					}
				}

				if (!matched) {
					break;
				}
			}

			// Return the length of the invalid excess
			// if we're just parsing
			// Otherwise, throw an error or return tokens
			return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
			// Cache the tokens
			tokenCache(selector, groups).slice(0);
		};

		function toSelector(tokens) {
			var i = 0,
			    len = tokens.length,
			    selector = "";
			for (; i < len; i++) {
				selector += tokens[i].value;
			}
			return selector;
		}

		function addCombinator(matcher, combinator, base) {
			var dir = combinator.dir,
			    skip = combinator.next,
			    key = skip || dir,
			    checkNonElements = base && key === "parentNode",
			    doneName = done++;

			return combinator.first ?
			// Check against closest ancestor/preceding element
			function (elem, context, xml) {
				while (elem = elem[dir]) {
					if (elem.nodeType === 1 || checkNonElements) {
						return matcher(elem, context, xml);
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function (elem, context, xml) {
				var oldCache,
				    uniqueCache,
				    outerCache,
				    newCache = [dirruns, doneName];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if (xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							if (matcher(elem, context, xml)) {
								return true;
							}
						}
					}
				} else {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							outerCache = elem[expando] || (elem[expando] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

							if (skip && skip === elem.nodeName.toLowerCase()) {
								elem = elem[dir] || elem;
							} else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {

								// Assign to newCache so results back-propagate to previous elements
								return newCache[2] = oldCache[2];
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[key] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if (newCache[2] = matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
		}

		function elementMatcher(matchers) {
			return matchers.length > 1 ? function (elem, context, xml) {
				var i = matchers.length;
				while (i--) {
					if (!matchers[i](elem, context, xml)) {
						return false;
					}
				}
				return true;
			} : matchers[0];
		}

		function multipleContexts(selector, contexts, results) {
			var i = 0,
			    len = contexts.length;
			for (; i < len; i++) {
				Sizzle(selector, contexts[i], results);
			}
			return results;
		}

		function condense(unmatched, map, filter, context, xml) {
			var elem,
			    newUnmatched = [],
			    i = 0,
			    len = unmatched.length,
			    mapped = map != null;

			for (; i < len; i++) {
				if (elem = unmatched[i]) {
					if (!filter || filter(elem, context, xml)) {
						newUnmatched.push(elem);
						if (mapped) {
							map.push(i);
						}
					}
				}
			}

			return newUnmatched;
		}

		function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
			if (postFilter && !postFilter[expando]) {
				postFilter = setMatcher(postFilter);
			}
			if (postFinder && !postFinder[expando]) {
				postFinder = setMatcher(postFinder, postSelector);
			}
			return markFunction(function (seed, results, context, xml) {
				var temp,
				    i,
				    elem,
				    preMap = [],
				    postMap = [],
				    preexisting = results.length,


				// Get initial elements from seed or context
				elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
				    matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || (seed ? preFilter : preexisting || postFilter) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results : matcherIn;

				// Find primary matches
				if (matcher) {
					matcher(matcherIn, matcherOut, context, xml);
				}

				// Apply postFilter
				if (postFilter) {
					temp = condense(matcherOut, postMap);
					postFilter(temp, [], context, xml);

					// Un-match failing elements by moving them back to matcherIn
					i = temp.length;
					while (i--) {
						if (elem = temp[i]) {
							matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
						}
					}
				}

				if (seed) {
					if (postFinder || preFilter) {
						if (postFinder) {
							// Get the final matcherOut by condensing this intermediate into postFinder contexts
							temp = [];
							i = matcherOut.length;
							while (i--) {
								if (elem = matcherOut[i]) {
									// Restore matcherIn since elem is not yet a final match
									temp.push(matcherIn[i] = elem);
								}
							}
							postFinder(null, matcherOut = [], temp, xml);
						}

						// Move matched elements from seed to results to keep them synchronized
						i = matcherOut.length;
						while (i--) {
							if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

								seed[temp] = !(results[temp] = elem);
							}
						}
					}

					// Add elements to results, through postFinder if defined
				} else {
					matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
					if (postFinder) {
						postFinder(null, results, matcherOut, xml);
					} else {
						push.apply(results, matcherOut);
					}
				}
			});
		}

		function matcherFromTokens(tokens) {
			var checkContext,
			    matcher,
			    j,
			    len = tokens.length,
			    leadingRelative = Expr.relative[tokens[0].type],
			    implicitRelative = leadingRelative || Expr.relative[" "],
			    i = leadingRelative ? 1 : 0,


			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator(function (elem) {
				return elem === checkContext;
			}, implicitRelative, true),
			    matchAnyContext = addCombinator(function (elem) {
				return indexOf(checkContext, elem) > -1;
			}, implicitRelative, true),
			    matchers = [function (elem, context, xml) {
				var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			}];

			for (; i < len; i++) {
				if (matcher = Expr.relative[tokens[i].type]) {
					matchers = [addCombinator(elementMatcher(matchers), matcher)];
				} else {
					matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

					// Return special upon seeing a positional matcher
					if (matcher[expando]) {
						// Find the next relative operator (if any) for proper handling
						j = ++i;
						for (; j < len; j++) {
							if (Expr.relative[tokens[j].type]) {
								break;
							}
						}
						return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
					}
					matchers.push(matcher);
				}
			}

			return elementMatcher(matchers);
		}

		function matcherFromGroupMatchers(elementMatchers, setMatchers) {
			var bySet = setMatchers.length > 0,
			    byElement = elementMatchers.length > 0,
			    superMatcher = function (seed, context, xml, results, outermost) {
				var elem,
				    j,
				    matcher,
				    matchedCount = 0,
				    i = "0",
				    unmatched = seed && [],
				    setMatched = [],
				    contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]("*", outermost),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
				    len = elems.length;

				if (outermost) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for (; i !== len && (elem = elems[i]) != null; i++) {
					if (byElement && elem) {
						j = 0;
						if (!context && elem.ownerDocument !== document) {
							setDocument(elem);
							xml = !documentIsHTML;
						}
						while (matcher = elementMatchers[j++]) {
							if (matcher(elem, context || document, xml)) {
								results.push(elem);
								break;
							}
						}
						if (outermost) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if (bySet) {
						// They will have gone through all possible matchers
						if (elem = !matcher && elem) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if (seed) {
							unmatched.push(elem);
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if (bySet && i !== matchedCount) {
					j = 0;
					while (matcher = setMatchers[j++]) {
						matcher(unmatched, setMatched, context, xml);
					}

					if (seed) {
						// Reintegrate element matches to eliminate the need for sorting
						if (matchedCount > 0) {
							while (i--) {
								if (!(unmatched[i] || setMatched[i])) {
									setMatched[i] = pop.call(results);
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense(setMatched);
					}

					// Add matches to results
					push.apply(results, setMatched);

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

						Sizzle.uniqueSort(results);
					}
				}

				// Override manipulation of globals by nested matchers
				if (outermost) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

			return bySet ? markFunction(superMatcher) : superMatcher;
		}

		compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
			var i,
			    setMatchers = [],
			    elementMatchers = [],
			    cached = compilerCache[selector + " "];

			if (!cached) {
				// Generate a function of recursive functions that can be used to check each element
				if (!match) {
					match = tokenize(selector);
				}
				i = match.length;
				while (i--) {
					cached = matcherFromTokens(match[i]);
					if (cached[expando]) {
						setMatchers.push(cached);
					} else {
						elementMatchers.push(cached);
					}
				}

				// Cache the compiled function
				cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

				// Save selector and tokenization
				cached.selector = selector;
			}
			return cached;
		};

		/**
   * A low-level selection function that works with Sizzle's compiled
   *  selector functions
   * @param {String|Function} selector A selector or a pre-compiled
   *  selector function built with Sizzle.compile
   * @param {Element} context
   * @param {Array} [results]
   * @param {Array} [seed] A set of elements to match against
   */
		select = Sizzle.select = function (selector, context, results, seed) {
			var i,
			    tokens,
			    token,
			    type,
			    find,
			    compiled = typeof selector === "function" && selector,
			    match = !seed && tokenize(selector = compiled.selector || selector);

			results = results || [];

			// Try to minimize operations if there is only one selector in the list and no seed
			// (the latter of which guarantees us context)
			if (match.length === 1) {

				// Reduce context if the leading compound selector is an ID
				tokens = match[0] = match[0].slice(0);
				if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

					context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
					if (!context) {
						return results;

						// Precompiled matchers will still verify ancestry, so step up a level
					} else if (compiled) {
						context = context.parentNode;
					}

					selector = selector.slice(tokens.shift().value.length);
				}

				// Fetch a seed set for right-to-left matching
				i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
				while (i--) {
					token = tokens[i];

					// Abort if we hit a combinator
					if (Expr.relative[type = token.type]) {
						break;
					}
					if (find = Expr.find[type]) {
						// Search, expanding context for leading sibling combinators
						if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {

							// If seed is empty or no tokens remain, we can return early
							tokens.splice(i, 1);
							selector = seed.length && toSelector(tokens);
							if (!selector) {
								push.apply(results, seed);
								return results;
							}

							break;
						}
					}
				}
			}

			// Compile and execute a filtering function if one is not provided
			// Provide `match` to avoid retokenization if we modified the selector above
			(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
			return results;
		};

		// One-time assignments

		// Sort stability
		support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

		// Support: Chrome 14-35+
		// Always assume duplicates if they aren't passed to the comparison function
		support.detectDuplicates = !!hasDuplicate;

		// Initialize against the default document
		setDocument();

		// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
		// Detached nodes confoundingly follow *each other*
		support.sortDetached = assert(function (el) {
			// Should return 1, but returns 4 (following)
			return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
		});

		// Support: IE<8
		// Prevent attribute/property "interpolation"
		// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
		if (!assert(function (el) {
			el.innerHTML = "<a href='#'></a>";
			return el.firstChild.getAttribute("href") === "#";
		})) {
			addHandle("type|href|height|width", function (elem, name, isXML) {
				if (!isXML) {
					return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
				}
			});
		}

		// Support: IE<9
		// Use defaultValue in place of getAttribute("value")
		if (!support.attributes || !assert(function (el) {
			el.innerHTML = "<input/>";
			el.firstChild.setAttribute("value", "");
			return el.firstChild.getAttribute("value") === "";
		})) {
			addHandle("value", function (elem, name, isXML) {
				if (!isXML && elem.nodeName.toLowerCase() === "input") {
					return elem.defaultValue;
				}
			});
		}

		// Support: IE<9
		// Use getAttributeNode to fetch booleans when getAttribute lies
		if (!assert(function (el) {
			return el.getAttribute("disabled") == null;
		})) {
			addHandle(booleans, function (elem, name, isXML) {
				var val;
				if (!isXML) {
					return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
				}
			});
		}

		return Sizzle;
	}(window);

	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;

	var dir = function (elem, dir, until) {
		var matched = [],
		    truncate = until !== undefined;

		while ((elem = elem[dir]) && elem.nodeType !== 9) {
			if (elem.nodeType === 1) {
				if (truncate && jQuery(elem).is(until)) {
					break;
				}
				matched.push(elem);
			}
		}
		return matched;
	};

	var siblings = function (n, elem) {
		var matched = [];

		for (; n; n = n.nextSibling) {
			if (n.nodeType === 1 && n !== elem) {
				matched.push(n);
			}
		}

		return matched;
	};

	var rneedsContext = jQuery.expr.match.needsContext;

	function nodeName(elem, name) {

		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	};
	var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	// Implement the identical functionality for filter and not
	function winnow(elements, qualifier, not) {
		if (isFunction(qualifier)) {
			return jQuery.grep(elements, function (elem, i) {
				return !!qualifier.call(elem, i, elem) !== not;
			});
		}

		// Single element
		if (qualifier.nodeType) {
			return jQuery.grep(elements, function (elem) {
				return elem === qualifier !== not;
			});
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if (typeof qualifier !== "string") {
			return jQuery.grep(elements, function (elem) {
				return indexOf.call(qualifier, elem) > -1 !== not;
			});
		}

		// Filtered directly for both simple and complex selectors
		return jQuery.filter(qualifier, elements, not);
	}

	jQuery.filter = function (expr, elems, not) {
		var elem = elems[0];

		if (not) {
			expr = ":not(" + expr + ")";
		}

		if (elems.length === 1 && elem.nodeType === 1) {
			return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
		}

		return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
			return elem.nodeType === 1;
		}));
	};

	jQuery.fn.extend({
		find: function (selector) {
			var i,
			    ret,
			    len = this.length,
			    self = this;

			if (typeof selector !== "string") {
				return this.pushStack(jQuery(selector).filter(function () {
					for (i = 0; i < len; i++) {
						if (jQuery.contains(self[i], this)) {
							return true;
						}
					}
				}));
			}

			ret = this.pushStack([]);

			for (i = 0; i < len; i++) {
				jQuery.find(selector, self[i], ret);
			}

			return len > 1 ? jQuery.uniqueSort(ret) : ret;
		},
		filter: function (selector) {
			return this.pushStack(winnow(this, selector || [], false));
		},
		not: function (selector) {
			return this.pushStack(winnow(this, selector || [], true));
		},
		is: function (selector) {
			return !!winnow(this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
		}
	});

	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,


	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	    init = jQuery.fn.init = function (selector, context, root) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if (!selector) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if (typeof selector === "string") {
			if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [null, selector, null];
			} else {
				match = rquickExpr.exec(selector);
			}

			// Match html or make sure no context is specified for #id
			if (match && (match[1] || !context)) {

				// HANDLE: $(html) -> $(array)
				if (match[1]) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

					// HANDLE: $(html, props)
					if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
						for (match in context) {

							// Properties of context are called as methods if possible
							if (isFunction(this[match])) {
								this[match](context[match]);

								// ...and otherwise set as attributes
							} else {
								this.attr(match, context[match]);
							}
						}
					}

					return this;

					// HANDLE: $(#id)
				} else {
					elem = document.getElementById(match[2]);

					if (elem) {

						// Inject the element directly into the jQuery object
						this[0] = elem;
						this.length = 1;
					}
					return this;
				}

				// HANDLE: $(expr, $(...))
			} else if (!context || context.jquery) {
				return (context || root).find(selector);

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor(context).find(selector);
			}

			// HANDLE: $(DOMElement)
		} else if (selector.nodeType) {
			this[0] = selector;
			this.length = 1;
			return this;

			// HANDLE: $(function)
			// Shortcut for document ready
		} else if (isFunction(selector)) {
			return root.ready !== undefined ? root.ready(selector) :

			// Execute immediately if ready is not present
			selector(jQuery);
		}

		return jQuery.makeArray(selector, this);
	};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery(document);

	var rparentsprev = /^(?:parents|prev(?:Until|All))/,


	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

	jQuery.fn.extend({
		has: function (target) {
			var targets = jQuery(target, this),
			    l = targets.length;

			return this.filter(function () {
				var i = 0;
				for (; i < l; i++) {
					if (jQuery.contains(this, targets[i])) {
						return true;
					}
				}
			});
		},

		closest: function (selectors, context) {
			var cur,
			    i = 0,
			    l = this.length,
			    matched = [],
			    targets = typeof selectors !== "string" && jQuery(selectors);

			// Positional selectors never match, since there's no _selection_ context
			if (!rneedsContext.test(selectors)) {
				for (; i < l; i++) {
					for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

						// Always skip document fragments
						if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

							matched.push(cur);
							break;
						}
					}
				}
			}

			return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
		},

		// Determine the position of an element within the set
		index: function (elem) {

			// No argument, return index in parent
			if (!elem) {
				return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if (typeof elem === "string") {
				return indexOf.call(jQuery(elem), this[0]);
			}

			// Locate the position of the desired element
			return indexOf.call(this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem);
		},

		add: function (selector, context) {
			return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
		},

		addBack: function (selector) {
			return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
		}
	});

	function sibling(cur, dir) {
		while ((cur = cur[dir]) && cur.nodeType !== 1) {}
		return cur;
	}

	jQuery.each({
		parent: function (elem) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function (elem) {
			return dir(elem, "parentNode");
		},
		parentsUntil: function (elem, i, until) {
			return dir(elem, "parentNode", until);
		},
		next: function (elem) {
			return sibling(elem, "nextSibling");
		},
		prev: function (elem) {
			return sibling(elem, "previousSibling");
		},
		nextAll: function (elem) {
			return dir(elem, "nextSibling");
		},
		prevAll: function (elem) {
			return dir(elem, "previousSibling");
		},
		nextUntil: function (elem, i, until) {
			return dir(elem, "nextSibling", until);
		},
		prevUntil: function (elem, i, until) {
			return dir(elem, "previousSibling", until);
		},
		siblings: function (elem) {
			return siblings((elem.parentNode || {}).firstChild, elem);
		},
		children: function (elem) {
			return siblings(elem.firstChild);
		},
		contents: function (elem) {
			if (nodeName(elem, "iframe")) {
				return elem.contentDocument;
			}

			// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
			// Treat the template element as a regular one in browsers that
			// don't support it.
			if (nodeName(elem, "template")) {
				elem = elem.content || elem;
			}

			return jQuery.merge([], elem.childNodes);
		}
	}, function (name, fn) {
		jQuery.fn[name] = function (until, selector) {
			var matched = jQuery.map(this, fn, until);

			if (name.slice(-5) !== "Until") {
				selector = until;
			}

			if (selector && typeof selector === "string") {
				matched = jQuery.filter(selector, matched);
			}

			if (this.length > 1) {

				// Remove duplicates
				if (!guaranteedUnique[name]) {
					jQuery.uniqueSort(matched);
				}

				// Reverse order for parents* and prev-derivatives
				if (rparentsprev.test(name)) {
					matched.reverse();
				}
			}

			return this.pushStack(matched);
		};
	});
	var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

	// Convert String-formatted options into Object-formatted ones
	function createOptions(options) {
		var object = {};
		jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
			object[flag] = true;
		});
		return object;
	}

	/*
  * Create a callback list using the following parameters:
  *
  *	options: an optional list of space-separated options that will change how
  *			the callback list behaves or a more traditional option object
  *
  * By default a callback list will act like an event callback list and can be
  * "fired" multiple times.
  *
  * Possible options:
  *
  *	once:			will ensure the callback list can only be fired once (like a Deferred)
  *
  *	memory:			will keep track of previous values and will call any callback added
  *					after the list has been fired right away with the latest "memorized"
  *					values (like a Deferred)
  *
  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
  *
  *	stopOnFalse:	interrupt callings when a callback returns false
  *
  */
	jQuery.Callbacks = function (options) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

		var // Flag to know if list is currently firing
		firing,


		// Last fire value for non-forgettable lists
		memory,


		// Flag to know if list was already fired
		fired,


		// Flag to prevent firing
		locked,


		// Actual callback list
		list = [],


		// Queue of execution data for repeatable lists
		queue = [],


		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,


		// Fire callbacks
		fire = function () {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for (; queue.length; firingIndex = -1) {
				memory = queue.shift();
				while (++firingIndex < list.length) {

					// Run callback and check for early termination
					if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if (!options.memory) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if (locked) {

				// Keep an empty list if we have data for future add calls
				if (memory) {
					list = [];

					// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},


		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function () {
				if (list) {

					// If we have memory from a past run, we should fire after adding
					if (memory && !firing) {
						firingIndex = list.length - 1;
						queue.push(memory);
					}

					(function add(args) {
						jQuery.each(args, function (_, arg) {
							if (isFunction(arg)) {
								if (!options.unique || !self.has(arg)) {
									list.push(arg);
								}
							} else if (arg && arg.length && toType(arg) !== "string") {

								// Inspect recursively
								add(arg);
							}
						});
					})(arguments);

					if (memory && !firing) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function () {
				jQuery.each(arguments, function (_, arg) {
					var index;
					while ((index = jQuery.inArray(arg, list, index)) > -1) {
						list.splice(index, 1);

						// Handle firing indexes
						if (index <= firingIndex) {
							firingIndex--;
						}
					}
				});
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function (fn) {
				return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function () {
				if (list) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function () {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function () {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function () {
				locked = queue = [];
				if (!memory && !firing) {
					list = memory = "";
				}
				return this;
			},
			locked: function () {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function (context, args) {
				if (!locked) {
					args = args || [];
					args = [context, args.slice ? args.slice() : args];
					queue.push(args);
					if (!firing) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function () {
				self.fireWith(this, arguments);
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function () {
				return !!fired;
			}
		};

		return self;
	};

	function Identity(v) {
		return v;
	}
	function Thrower(ex) {
		throw ex;
	}

	function adoptValue(value, resolve, reject, noValue) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if (value && isFunction(method = value.promise)) {
				method.call(value).done(resolve).fail(reject);

				// Other thenables
			} else if (value && isFunction(method = value.then)) {
				method.call(value, resolve, reject);

				// Other non-thenables
			} else {

				// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
				// * false: [ value ].slice( 0 ) => resolve( value )
				// * true: [ value ].slice( 1 ) => resolve()
				resolve.apply(undefined, [value].slice(noValue));
			}

			// For Promises/A+, convert exceptions into rejections
			// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
			// Deferred#then to conditionally suppress rejection.
		} catch (value) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.apply(undefined, [value]);
		}
	}

	jQuery.extend({

		Deferred: function (func) {
			var tuples = [

			// action, add listener, callbacks,
			// ... .then handlers, argument index, [final state]
			["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
			    state = "pending",
			    promise = {
				state: function () {
					return state;
				},
				always: function () {
					deferred.done(arguments).fail(arguments);
					return this;
				},
				"catch": function (fn) {
					return promise.then(null, fn);
				},

				// Keep pipe for back-compat
				pipe: function () /* fnDone, fnFail, fnProgress */{
					var fns = arguments;

					return jQuery.Deferred(function (newDefer) {
						jQuery.each(tuples, function (i, tuple) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[tuple[1]](function () {
								var returned = fn && fn.apply(this, arguments);
								if (returned && isFunction(returned.promise)) {
									returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
								} else {
									newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
								}
							});
						});
						fns = null;
					}).promise();
				},
				then: function (onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					function resolve(depth, deferred, handler, special) {
						return function () {
							var that = this,
							    args = arguments,
							    mightThrow = function () {
								var returned, then;

								// Support: Promises/A+ section 2.3.3.3.3
								// https://promisesaplus.com/#point-59
								// Ignore double-resolution attempts
								if (depth < maxDepth) {
									return;
								}

								returned = handler.apply(that, args);

								// Support: Promises/A+ section 2.3.1
								// https://promisesaplus.com/#point-48
								if (returned === deferred.promise()) {
									throw new TypeError("Thenable self-resolution");
								}

								// Support: Promises/A+ sections 2.3.3.1, 3.5
								// https://promisesaplus.com/#point-54
								// https://promisesaplus.com/#point-75
								// Retrieve `then` only once
								then = returned && (

								// Support: Promises/A+ section 2.3.4
								// https://promisesaplus.com/#point-64
								// Only check objects and functions for thenability
								typeof returned === "object" || typeof returned === "function") && returned.then;

								// Handle a returned thenable
								if (isFunction(then)) {

									// Special processors (notify) just wait for resolution
									if (special) {
										then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));

										// Normal processors (resolve) also hook into progress
									} else {

										// ...and disregard older resolution values
										maxDepth++;

										then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
									}

									// Handle all other returned values
								} else {

									// Only substitute handlers pass on context
									// and multiple values (non-spec behavior)
									if (handler !== Identity) {
										that = undefined;
										args = [returned];
									}

									// Process the value(s)
									// Default process is resolve
									(special || deferred.resolveWith)(that, args);
								}
							},


							// Only normal processors (resolve) catch and reject exceptions
							process = special ? mightThrow : function () {
								try {
									mightThrow();
								} catch (e) {

									if (jQuery.Deferred.exceptionHook) {
										jQuery.Deferred.exceptionHook(e, process.stackTrace);
									}

									// Support: Promises/A+ section 2.3.3.3.4.1
									// https://promisesaplus.com/#point-61
									// Ignore post-resolution exceptions
									if (depth + 1 >= maxDepth) {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if (handler !== Thrower) {
											that = undefined;
											args = [e];
										}

										deferred.rejectWith(that, args);
									}
								}
							};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if (depth) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout(process);
							}
						};
					}

					return jQuery.Deferred(function (newDefer) {

						// progress_handlers.add( ... )
						tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));

						// fulfilled_handlers.add( ... )
						tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));

						// rejected_handlers.add( ... )
						tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
					}).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function (obj) {
					return obj != null ? jQuery.extend(obj, promise) : promise;
				}
			},
			    deferred = {};

			// Add list-specific methods
			jQuery.each(tuples, function (i, tuple) {
				var list = tuple[2],
				    stateString = tuple[5];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[tuple[1]] = list.add;

				// Handle state
				if (stateString) {
					list.add(function () {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[3 - i][2].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[3 - i][3].disable,

					// progress_callbacks.lock
					tuples[0][2].lock,

					// progress_handlers.lock
					tuples[0][3].lock);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add(tuple[3].fire);

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[tuple[0]] = function () {
					deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[tuple[0] + "With"] = list.fireWith;
			});

			// Make the deferred a promise
			promise.promise(deferred);

			// Call given func if any
			if (func) {
				func.call(deferred, deferred);
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function (singleValue) {
			var

			// count of uncompleted subordinates
			remaining = arguments.length,


			// count of unprocessed arguments
			i = remaining,


			// subordinate fulfillment data
			resolveContexts = Array(i),
			    resolveValues = slice.call(arguments),


			// the master Deferred
			master = jQuery.Deferred(),


			// subordinate callback factory
			updateFunc = function (i) {
				return function (value) {
					resolveContexts[i] = this;
					resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
					if (! --remaining) {
						master.resolveWith(resolveContexts, resolveValues);
					}
				};
			};

			// Single- and empty arguments are adopted like Promise.resolve
			if (remaining <= 1) {
				adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while (i--) {
				adoptValue(resolveValues[i], updateFunc(i), master.reject);
			}

			return master.promise();
		}
	});

	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function (error, stack) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
			window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
		}
	};

	jQuery.readyException = function (error) {
		window.setTimeout(function () {
			throw error;
		});
	};

	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function (fn) {

		readyList.then(fn)

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch(function (error) {
			jQuery.readyException(error);
		});

		return this;
	};

	jQuery.extend({

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Handle when the DOM is ready
		ready: function (wait) {

			// Abort if there are pending holds or we're already ready
			if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if (wait !== true && --jQuery.readyWait > 0) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith(document, [jQuery]);
		}
	});

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener("DOMContentLoaded", completed);
		window.removeEventListener("load", completed);
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout(jQuery.ready);
	} else {

		// Use the handy event callback
		document.addEventListener("DOMContentLoaded", completed);

		// A fallback to window.onload, that will always work
		window.addEventListener("load", completed);
	}

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
		var i = 0,
		    len = elems.length,
		    bulk = key == null;

		// Sets many values
		if (toType(key) === "object") {
			chainable = true;
			for (i in key) {
				access(elems, fn, i, key[i], true, emptyGet, raw);
			}

			// Sets one value
		} else if (value !== undefined) {
			chainable = true;

			if (!isFunction(value)) {
				raw = true;
			}

			if (bulk) {

				// Bulk operations run against the entire set
				if (raw) {
					fn.call(elems, value);
					fn = null;

					// ...except when executing function values
				} else {
					bulk = fn;
					fn = function (elem, key, value) {
						return bulk.call(jQuery(elem), value);
					};
				}
			}

			if (fn) {
				for (; i < len; i++) {
					fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
				}
			}
		}

		if (chainable) {
			return elems;
		}

		// Gets
		if (bulk) {
			return fn.call(elems);
		}

		return len ? fn(elems[0], key) : emptyGet;
	};

	// Matches dashed string for camelizing
	var rmsPrefix = /^-ms-/,
	    rdashAlpha = /-([a-z])/g;

	// Used by camelCase as callback to replace()
	function fcamelCase(all, letter) {
		return letter.toUpperCase();
	}

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 15
	// Microsoft forgot to hump their vendor prefix (#9572)
	function camelCase(string) {
		return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
	}
	var acceptData = function (owner) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
	};

	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function (owner) {

			// Check if the owner object already has a cache
			var value = owner[this.expando];

			// If not, create one
			if (!value) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if (acceptData(owner)) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if (owner.nodeType) {
						owner[this.expando] = value;

						// Otherwise secure it in a non-enumerable property
						// configurable must be true to allow the property to be
						// deleted when data is removed
					} else {
						Object.defineProperty(owner, this.expando, {
							value: value,
							configurable: true
						});
					}
				}
			}

			return value;
		},
		set: function (owner, data, value) {
			var prop,
			    cache = this.cache(owner);

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if (typeof data === "string") {
				cache[camelCase(data)] = value;

				// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for (prop in data) {
					cache[camelCase(prop)] = data[prop];
				}
			}
			return cache;
		},
		get: function (owner, key) {
			return key === undefined ? this.cache(owner) :

			// Always use camelCase key (gh-2257)
			owner[this.expando] && owner[this.expando][camelCase(key)];
		},
		access: function (owner, key, value) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if (key === undefined || key && typeof key === "string" && value === undefined) {

				return this.get(owner, key);
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set(owner, key, value);

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function (owner, key) {
			var i,
			    cache = owner[this.expando];

			if (cache === undefined) {
				return;
			}

			if (key !== undefined) {

				// Support array or space separated string of keys
				if (Array.isArray(key)) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map(camelCase);
				} else {
					key = camelCase(key);

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
				}

				i = key.length;

				while (i--) {
					delete cache[key[i]];
				}
			}

			// Remove the expando if there's no more data
			if (key === undefined || jQuery.isEmptyObject(cache)) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if (owner.nodeType) {
					owner[this.expando] = undefined;
				} else {
					delete owner[this.expando];
				}
			}
		},
		hasData: function (owner) {
			var cache = owner[this.expando];
			return cache !== undefined && !jQuery.isEmptyObject(cache);
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();

	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	    rmultiDash = /[A-Z]/g;

	function getData(data) {
		if (data === "true") {
			return true;
		}

		if (data === "false") {
			return false;
		}

		if (data === "null") {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if (data === +data + "") {
			return +data;
		}

		if (rbrace.test(data)) {
			return JSON.parse(data);
		}

		return data;
	}

	function dataAttr(elem, key, data) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if (data === undefined && elem.nodeType === 1) {
			name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
			data = elem.getAttribute(name);

			if (typeof data === "string") {
				try {
					data = getData(data);
				} catch (e) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set(elem, key, data);
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend({
		hasData: function (elem) {
			return dataUser.hasData(elem) || dataPriv.hasData(elem);
		},

		data: function (elem, name, data) {
			return dataUser.access(elem, name, data);
		},

		removeData: function (elem, name) {
			dataUser.remove(elem, name);
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function (elem, name, data) {
			return dataPriv.access(elem, name, data);
		},

		_removeData: function (elem, name) {
			dataPriv.remove(elem, name);
		}
	});

	jQuery.fn.extend({
		data: function (key, value) {
			var i,
			    name,
			    data,
			    elem = this[0],
			    attrs = elem && elem.attributes;

			// Gets all values
			if (key === undefined) {
				if (this.length) {
					data = dataUser.get(elem);

					if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
						i = attrs.length;
						while (i--) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if (attrs[i]) {
								name = attrs[i].name;
								if (name.indexOf("data-") === 0) {
									name = camelCase(name.slice(5));
									dataAttr(elem, name, data[name]);
								}
							}
						}
						dataPriv.set(elem, "hasDataAttrs", true);
					}
				}

				return data;
			}

			// Sets multiple values
			if (typeof key === "object") {
				return this.each(function () {
					dataUser.set(this, key);
				});
			}

			return access(this, function (value) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if (elem && value === undefined) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get(elem, key);
					if (data !== undefined) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr(elem, key);
					if (data !== undefined) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each(function () {

					// We always store the camelCased key
					dataUser.set(this, key, value);
				});
			}, null, value, arguments.length > 1, null, true);
		},

		removeData: function (key) {
			return this.each(function () {
				dataUser.remove(this, key);
			});
		}
	});

	jQuery.extend({
		queue: function (elem, type, data) {
			var queue;

			if (elem) {
				type = (type || "fx") + "queue";
				queue = dataPriv.get(elem, type);

				// Speed up dequeue by getting out quickly if this is just a lookup
				if (data) {
					if (!queue || Array.isArray(data)) {
						queue = dataPriv.access(elem, type, jQuery.makeArray(data));
					} else {
						queue.push(data);
					}
				}
				return queue || [];
			}
		},

		dequeue: function (elem, type) {
			type = type || "fx";

			var queue = jQuery.queue(elem, type),
			    startLength = queue.length,
			    fn = queue.shift(),
			    hooks = jQuery._queueHooks(elem, type),
			    next = function () {
				jQuery.dequeue(elem, type);
			};

			// If the fx queue is dequeued, always remove the progress sentinel
			if (fn === "inprogress") {
				fn = queue.shift();
				startLength--;
			}

			if (fn) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if (type === "fx") {
					queue.unshift("inprogress");
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call(elem, next, hooks);
			}

			if (!startLength && hooks) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function (elem, type) {
			var key = type + "queueHooks";
			return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
				empty: jQuery.Callbacks("once memory").add(function () {
					dataPriv.remove(elem, [type + "queue", key]);
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function (type, data) {
			var setter = 2;

			if (typeof type !== "string") {
				data = type;
				type = "fx";
				setter--;
			}

			if (arguments.length < setter) {
				return jQuery.queue(this[0], type);
			}

			return data === undefined ? this : this.each(function () {
				var queue = jQuery.queue(this, type, data);

				// Ensure a hooks for this queue
				jQuery._queueHooks(this, type);

				if (type === "fx" && queue[0] !== "inprogress") {
					jQuery.dequeue(this, type);
				}
			});
		},
		dequeue: function (type) {
			return this.each(function () {
				jQuery.dequeue(this, type);
			});
		},
		clearQueue: function (type) {
			return this.queue(type || "fx", []);
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function (type, obj) {
			var tmp,
			    count = 1,
			    defer = jQuery.Deferred(),
			    elements = this,
			    i = this.length,
			    resolve = function () {
				if (! --count) {
					defer.resolveWith(elements, [elements]);
				}
			};

			if (typeof type !== "string") {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while (i--) {
				tmp = dataPriv.get(elements[i], type + "queueHooks");
				if (tmp && tmp.empty) {
					count++;
					tmp.empty.add(resolve);
				}
			}
			resolve();
			return defer.promise(obj);
		}
	});
	var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

	var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");

	var cssExpand = ["Top", "Right", "Bottom", "Left"];

	var isHiddenWithinTree = function (elem, el) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" || elem.style.display === "" &&

		// Otherwise, check computed style
		// Support: Firefox <=43 - 45
		// Disconnected elements can have computed display: none, so first confirm that elem is
		// in the document.
		jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
	};

	var swap = function (elem, options, callback, args) {
		var ret,
		    name,
		    old = {};

		// Remember the old values, and insert the new ones
		for (name in options) {
			old[name] = elem.style[name];
			elem.style[name] = options[name];
		}

		ret = callback.apply(elem, args || []);

		// Revert the old values
		for (name in options) {
			elem.style[name] = old[name];
		}

		return ret;
	};

	function adjustCSS(elem, prop, valueParts, tween) {
		var adjusted,
		    scale,
		    maxIterations = 20,
		    currentValue = tween ? function () {
			return tween.cur();
		} : function () {
			return jQuery.css(elem, prop, "");
		},
		    initial = currentValue(),
		    unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),


		// Starting value computation is required for potential unit mismatches
		initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

		if (initialInUnit && initialInUnit[3] !== unit) {

			// Support: Firefox <=54
			// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
			initial = initial / 2;

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[3];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			while (maxIterations--) {

				// Evaluate and update our best guess (doubling guesses that zero out).
				// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
				jQuery.style(elem, prop, initialInUnit + unit);
				if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
					maxIterations = 0;
				}
				initialInUnit = initialInUnit / scale;
			}

			initialInUnit = initialInUnit * 2;
			jQuery.style(elem, prop, initialInUnit + unit);

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
		}

		if (valueParts) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
			if (tween) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}

	var defaultDisplayMap = {};

	function getDefaultDisplay(elem) {
		var temp,
		    doc = elem.ownerDocument,
		    nodeName = elem.nodeName,
		    display = defaultDisplayMap[nodeName];

		if (display) {
			return display;
		}

		temp = doc.body.appendChild(doc.createElement(nodeName));
		display = jQuery.css(temp, "display");

		temp.parentNode.removeChild(temp);

		if (display === "none") {
			display = "block";
		}
		defaultDisplayMap[nodeName] = display;

		return display;
	}

	function showHide(elements, show) {
		var display,
		    elem,
		    values = [],
		    index = 0,
		    length = elements.length;

		// Determine new display value for elements that need to change
		for (; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}

			display = elem.style.display;
			if (show) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if (display === "none") {
					values[index] = dataPriv.get(elem, "display") || null;
					if (!values[index]) {
						elem.style.display = "";
					}
				}
				if (elem.style.display === "" && isHiddenWithinTree(elem)) {
					values[index] = getDefaultDisplay(elem);
				}
			} else {
				if (display !== "none") {
					values[index] = "none";

					// Remember what we're overwriting
					dataPriv.set(elem, "display", display);
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for (index = 0; index < length; index++) {
			if (values[index] != null) {
				elements[index].style.display = values[index];
			}
		}

		return elements;
	}

	jQuery.fn.extend({
		show: function () {
			return showHide(this, true);
		},
		hide: function () {
			return showHide(this);
		},
		toggle: function (state) {
			if (typeof state === "boolean") {
				return state ? this.show() : this.hide();
			}

			return this.each(function () {
				if (isHiddenWithinTree(this)) {
					jQuery(this).show();
				} else {
					jQuery(this).hide();
				}
			});
		}
	});
	var rcheckableType = /^(?:checkbox|radio)$/i;

	var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;

	var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;

	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [1, "<select multiple='multiple'>", "</select>"],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

		_default: [0, "", ""]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	function getAll(context, tag) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if (typeof context.getElementsByTagName !== "undefined") {
			ret = context.getElementsByTagName(tag || "*");
		} else if (typeof context.querySelectorAll !== "undefined") {
			ret = context.querySelectorAll(tag || "*");
		} else {
			ret = [];
		}

		if (tag === undefined || tag && nodeName(context, tag)) {
			return jQuery.merge([context], ret);
		}

		return ret;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval(elems, refElements) {
		var i = 0,
		    l = elems.length;

		for (; i < l; i++) {
			dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
		}
	}

	var rhtml = /<|&#?\w+;/;

	function buildFragment(elems, context, scripts, selection, ignored) {
		var elem,
		    tmp,
		    tag,
		    wrap,
		    contains,
		    j,
		    fragment = context.createDocumentFragment(),
		    nodes = [],
		    i = 0,
		    l = elems.length;

		for (; i < l; i++) {
			elem = elems[i];

			if (elem || elem === 0) {

				// Add nodes directly
				if (toType(elem) === "object") {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

					// Convert non-html into a text node
				} else if (!rhtml.test(elem)) {
					nodes.push(context.createTextNode(elem));

					// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild(context.createElement("div"));

					// Deserialize a standard representation
					tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
					wrap = wrapMap[tag] || wrapMap._default;
					tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while (j--) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge(nodes, tmp.childNodes);

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while (elem = nodes[i++]) {

			// Skip elements already in the context collection (trac-4087)
			if (selection && jQuery.inArray(elem, selection) > -1) {
				if (ignored) {
					ignored.push(elem);
				}
				continue;
			}

			contains = jQuery.contains(elem.ownerDocument, elem);

			// Append to fragment
			tmp = getAll(fragment.appendChild(elem), "script");

			// Preserve script evaluation history
			if (contains) {
				setGlobalEval(tmp);
			}

			// Capture executables
			if (scripts) {
				j = 0;
				while (elem = tmp[j++]) {
					if (rscriptType.test(elem.type || "")) {
						scripts.push(elem);
					}
				}
			}
		}

		return fragment;
	}

	(function () {
		var fragment = document.createDocumentFragment(),
		    div = fragment.appendChild(document.createElement("div")),
		    input = document.createElement("input");

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute("type", "radio");
		input.setAttribute("checked", "checked");
		input.setAttribute("name", "t");

		div.appendChild(input);

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
	})();
	var documentElement = document.documentElement;

	var rkeyEvent = /^key/,
	    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch (err) {}
	}

	function on(elem, types, selector, data, fn, one) {
		var origFn, type;

		// Types can be a map of types/handlers
		if (typeof types === "object") {

			// ( types-Object, selector, data )
			if (typeof selector !== "string") {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for (type in types) {
				on(elem, type, selector, data, types[type], one);
			}
			return elem;
		}

		if (data == null && fn == null) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if (fn == null) {
			if (typeof selector === "string") {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if (fn === false) {
			fn = returnFalse;
		} else if (!fn) {
			return elem;
		}

		if (one === 1) {
			origFn = fn;
			fn = function (event) {

				// Can use an empty set, since event contains the info
				jQuery().off(event);
				return origFn.apply(this, arguments);
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
		}
		return elem.each(function () {
			jQuery.event.add(this, types, fn, data, selector);
		});
	}

	/*
  * Helper functions for managing events -- not part of the public interface.
  * Props to Dean Edwards' addEvent library for many of the ideas.
  */
	jQuery.event = {

		global: {},

		add: function (elem, types, handler, data, selector) {

			var handleObjIn,
			    eventHandle,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = dataPriv.get(elem);

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if (!elemData) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if (handler.handler) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if (selector) {
				jQuery.find.matchesSelector(documentElement, selector);
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if (!handler.guid) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if (!(events = elemData.events)) {
				events = elemData.events = {};
			}
			if (!(eventHandle = elemData.handle)) {
				eventHandle = elemData.handle = function (e) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = (types || "").match(rnothtmlwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// There *must* be a type, no attaching namespace-only handlers
				if (!type) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[type] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = (selector ? special.delegateType : special.bindType) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[type] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test(selector),
					namespace: namespaces.join(".")
				}, handleObjIn);

				// Init the event handler queue if we're the first
				if (!(handlers = events[type])) {
					handlers = events[type] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {

						if (elem.addEventListener) {
							elem.addEventListener(type, eventHandle);
						}
					}
				}

				if (special.add) {
					special.add.call(elem, handleObj);

					if (!handleObj.handler.guid) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if (selector) {
					handlers.splice(handlers.delegateCount++, 0, handleObj);
				} else {
					handlers.push(handleObj);
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[type] = true;
			}
		},

		// Detach an event or set of events from an element
		remove: function (elem, types, handler, selector, mappedTypes) {

			var j,
			    origCount,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

			if (!elemData || !(events = elemData.events)) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = (types || "").match(rnothtmlwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// Unbind all events (on this namespace, if provided) for the element
				if (!type) {
					for (type in events) {
						jQuery.event.remove(elem, type + types[t], handler, selector, true);
					}
					continue;
				}

				special = jQuery.event.special[type] || {};
				type = (selector ? special.delegateType : special.bindType) || type;
				handlers = events[type] || [];
				tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

				// Remove matching events
				origCount = j = handlers.length;
				while (j--) {
					handleObj = handlers[j];

					if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
						handlers.splice(j, 1);

						if (handleObj.selector) {
							handlers.delegateCount--;
						}
						if (special.remove) {
							special.remove.call(elem, handleObj);
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if (origCount && !handlers.length) {
					if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {

						jQuery.removeEvent(elem, type, elemData.handle);
					}

					delete events[type];
				}
			}

			// Remove data and the expando if it's no longer used
			if (jQuery.isEmptyObject(events)) {
				dataPriv.remove(elem, "handle events");
			}
		},

		dispatch: function (nativeEvent) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix(nativeEvent);

			var i,
			    j,
			    ret,
			    matched,
			    handleObj,
			    handlerQueue,
			    args = new Array(arguments.length),
			    handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
			    special = jQuery.event.special[event.type] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;

			for (i = 1; i < arguments.length; i++) {
				args[i] = arguments[i];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if (special.preDispatch && special.preDispatch.call(this, event) === false) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call(this, event, handlers);

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
				event.currentTarget = matched.elem;

				j = 0;
				while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

						if (ret !== undefined) {
							if ((event.result = ret) === false) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if (special.postDispatch) {
				special.postDispatch.call(this, event);
			}

			return event.result;
		},

		handlers: function (event, handlers) {
			var i,
			    handleObj,
			    sel,
			    matchedHandlers,
			    matchedSelectors,
			    handlerQueue = [],
			    delegateCount = handlers.delegateCount,
			    cur = event.target;

			// Find delegate handlers
			if (delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!(event.type === "click" && event.button >= 1)) {

				for (; cur !== this; cur = cur.parentNode || this) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
						matchedHandlers = [];
						matchedSelectors = {};
						for (i = 0; i < delegateCount; i++) {
							handleObj = handlers[i];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if (matchedSelectors[sel] === undefined) {
								matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
							}
							if (matchedSelectors[sel]) {
								matchedHandlers.push(handleObj);
							}
						}
						if (matchedHandlers.length) {
							handlerQueue.push({ elem: cur, handlers: matchedHandlers });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if (delegateCount < handlers.length) {
				handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
			}

			return handlerQueue;
		},

		addProp: function (name, hook) {
			Object.defineProperty(jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: isFunction(hook) ? function () {
					if (this.originalEvent) {
						return hook(this.originalEvent);
					}
				} : function () {
					if (this.originalEvent) {
						return this.originalEvent[name];
					}
				},

				set: function (value) {
					Object.defineProperty(this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					});
				}
			});
		},

		fix: function (originalEvent) {
			return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function () {
					if (this !== safeActiveElement() && this.focus) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					if (this === safeActiveElement() && this.blur) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function () {
					if (this.type === "checkbox" && this.click && nodeName(this, "input")) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function (event) {
					return nodeName(event.target, "a");
				}
			},

			beforeunload: {
				postDispatch: function (event) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if (event.result !== undefined && event.originalEvent) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function (elem, type, handle) {

		// This "if" is needed for plain objects
		if (elem.removeEventListener) {
			elem.removeEventListener(type, handle);
		}
	};

	jQuery.Event = function (src, props) {

		// Allow instantiation without the 'new' keyword
		if (!(this instanceof jQuery.Event)) {
			return new jQuery.Event(src, props);
		}

		// Event object
		if (src && src.type) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&

			// Support: Android <=2.3 only
			src.returnValue === false ? returnTrue : returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

			// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if (props) {
			jQuery.extend(this, props);
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || Date.now();

		// Mark it as fixed
		this[jQuery.expando] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function () {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if (e && !this.isSimulated) {
				e.preventDefault();
			}
		},
		stopPropagation: function () {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if (e && !this.isSimulated) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function () {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if (e && !this.isSimulated) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each({
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function (event) {
			var button = event.button;

			// Add which for key events
			if (event.which == null && rkeyEvent.test(event.type)) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
				if (button & 1) {
					return 1;
				}

				if (button & 2) {
					return 3;
				}

				if (button & 4) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp);

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (orig, fix) {
		jQuery.event.special[orig] = {
			delegateType: fix,
			bindType: fix,

			handle: function (event) {
				var ret,
				    target = this,
				    related = event.relatedTarget,
				    handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if (!related || related !== target && !jQuery.contains(target, related)) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply(this, arguments);
					event.type = fix;
				}
				return ret;
			}
		};
	});

	jQuery.fn.extend({

		on: function (types, selector, data, fn) {
			return on(this, types, selector, data, fn);
		},
		one: function (types, selector, data, fn) {
			return on(this, types, selector, data, fn, 1);
		},
		off: function (types, selector, fn) {
			var handleObj, type;
			if (types && types.preventDefault && types.handleObj) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
				return this;
			}
			if (typeof types === "object") {

				// ( types-object [, selector] )
				for (type in types) {
					this.off(type, selector, types[type]);
				}
				return this;
			}
			if (selector === false || typeof selector === "function") {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if (fn === false) {
				fn = returnFalse;
			}
			return this.each(function () {
				jQuery.event.remove(this, types, fn, selector);
			});
		}
	});

	var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,


	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,


	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Prefer a tbody over its parent table for containing new rows
	function manipulationTarget(elem, content) {
		if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {

			return jQuery(elem).children("tbody")[0] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript(elem) {
		if ((elem.type || "").slice(0, 5) === "true/") {
			elem.type = elem.type.slice(5);
		} else {
			elem.removeAttribute("type");
		}

		return elem;
	}

	function cloneCopyEvent(src, dest) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if (dest.nodeType !== 1) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if (dataPriv.hasData(src)) {
			pdataOld = dataPriv.access(src);
			pdataCur = dataPriv.set(dest, pdataOld);
			events = pdataOld.events;

			if (events) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for (type in events) {
					for (i = 0, l = events[type].length; i < l; i++) {
						jQuery.event.add(dest, type, events[type][i]);
					}
				}
			}
		}

		// 2. Copy user data
		if (dataUser.hasData(src)) {
			udataOld = dataUser.access(src);
			udataCur = jQuery.extend({}, udataOld);

			dataUser.set(dest, udataCur);
		}
	}

	// Fix IE bugs, see support tests
	function fixInput(src, dest) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if (nodeName === "input" && rcheckableType.test(src.type)) {
			dest.checked = src.checked;

			// Fails to return the selected option to the default selected state when cloning options
		} else if (nodeName === "input" || nodeName === "textarea") {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip(collection, args, callback, ignored) {

		// Flatten any nested arrays
		args = concat.apply([], args);

		var fragment,
		    first,
		    scripts,
		    hasScripts,
		    node,
		    doc,
		    i = 0,
		    l = collection.length,
		    iNoClone = l - 1,
		    value = args[0],
		    valueIsFunction = isFunction(value);

		// We can't cloneNode fragments that contain checked, in WebKit
		if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
			return collection.each(function (index) {
				var self = collection.eq(index);
				if (valueIsFunction) {
					args[0] = value.call(this, index, self.html());
				}
				domManip(self, args, callback, ignored);
			});
		}

		if (l) {
			fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
			first = fragment.firstChild;

			if (fragment.childNodes.length === 1) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if (first || ignored) {
				scripts = jQuery.map(getAll(fragment, "script"), disableScript);
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for (; i < l; i++) {
					node = fragment;

					if (i !== iNoClone) {
						node = jQuery.clone(node, true, true);

						// Keep references to cloned scripts for later restoration
						if (hasScripts) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge(scripts, getAll(node, "script"));
						}
					}

					callback.call(collection[i], node, i);
				}

				if (hasScripts) {
					doc = scripts[scripts.length - 1].ownerDocument;

					// Reenable scripts
					jQuery.map(scripts, restoreScript);

					// Evaluate executable scripts on first document insertion
					for (i = 0; i < hasScripts; i++) {
						node = scripts[i];
						if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {

							if (node.src && (node.type || "").toLowerCase() !== "module") {

								// Optional AJAX dependency, but won't run scripts if not present
								if (jQuery._evalUrl) {
									jQuery._evalUrl(node.src);
								}
							} else {
								DOMEval(node.textContent.replace(rcleanScript, ""), doc, node);
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove(elem, selector, keepData) {
		var node,
		    nodes = selector ? jQuery.filter(selector, elem) : elem,
		    i = 0;

		for (; (node = nodes[i]) != null; i++) {
			if (!keepData && node.nodeType === 1) {
				jQuery.cleanData(getAll(node));
			}

			if (node.parentNode) {
				if (keepData && jQuery.contains(node.ownerDocument, node)) {
					setGlobalEval(getAll(node, "script"));
				}
				node.parentNode.removeChild(node);
			}
		}

		return elem;
	}

	jQuery.extend({
		htmlPrefilter: function (html) {
			return html.replace(rxhtmlTag, "<$1></$2>");
		},

		clone: function (elem, dataAndEvents, deepDataAndEvents) {
			var i,
			    l,
			    srcElements,
			    destElements,
			    clone = elem.cloneNode(true),
			    inPage = jQuery.contains(elem.ownerDocument, elem);

			// Fix IE cloning issues
			if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll(clone);
				srcElements = getAll(elem);

				for (i = 0, l = srcElements.length; i < l; i++) {
					fixInput(srcElements[i], destElements[i]);
				}
			}

			// Copy the events from the original to the clone
			if (dataAndEvents) {
				if (deepDataAndEvents) {
					srcElements = srcElements || getAll(elem);
					destElements = destElements || getAll(clone);

					for (i = 0, l = srcElements.length; i < l; i++) {
						cloneCopyEvent(srcElements[i], destElements[i]);
					}
				} else {
					cloneCopyEvent(elem, clone);
				}
			}

			// Preserve script evaluation history
			destElements = getAll(clone, "script");
			if (destElements.length > 0) {
				setGlobalEval(destElements, !inPage && getAll(elem, "script"));
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function (elems) {
			var data,
			    elem,
			    type,
			    special = jQuery.event.special,
			    i = 0;

			for (; (elem = elems[i]) !== undefined; i++) {
				if (acceptData(elem)) {
					if (data = elem[dataPriv.expando]) {
						if (data.events) {
							for (type in data.events) {
								if (special[type]) {
									jQuery.event.remove(elem, type);

									// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent(elem, type, data.handle);
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[dataPriv.expando] = undefined;
					}
					if (elem[dataUser.expando]) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[dataUser.expando] = undefined;
					}
				}
			}
		}
	});

	jQuery.fn.extend({
		detach: function (selector) {
			return remove(this, selector, true);
		},

		remove: function (selector) {
			return remove(this, selector);
		},

		text: function (value) {
			return access(this, function (value) {
				return value === undefined ? jQuery.text(this) : this.empty().each(function () {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						this.textContent = value;
					}
				});
			}, null, value, arguments.length);
		},

		append: function () {
			return domManip(this, arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.appendChild(elem);
				}
			});
		},

		prepend: function () {
			return domManip(this, arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.insertBefore(elem, target.firstChild);
				}
			});
		},

		before: function () {
			return domManip(this, arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this);
				}
			});
		},

		after: function () {
			return domManip(this, arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this.nextSibling);
				}
			});
		},

		empty: function () {
			var elem,
			    i = 0;

			for (; (elem = this[i]) != null; i++) {
				if (elem.nodeType === 1) {

					// Prevent memory leaks
					jQuery.cleanData(getAll(elem, false));

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function (dataAndEvents, deepDataAndEvents) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function () {
				return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
			});
		},

		html: function (value) {
			return access(this, function (value) {
				var elem = this[0] || {},
				    i = 0,
				    l = this.length;

				if (value === undefined && elem.nodeType === 1) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

					value = jQuery.htmlPrefilter(value);

					try {
						for (; i < l; i++) {
							elem = this[i] || {};

							// Remove element nodes and prevent memory leaks
							if (elem.nodeType === 1) {
								jQuery.cleanData(getAll(elem, false));
								elem.innerHTML = value;
							}
						}

						elem = 0;

						// If using innerHTML throws an exception, use the fallback method
					} catch (e) {}
				}

				if (elem) {
					this.empty().append(value);
				}
			}, null, value, arguments.length);
		},

		replaceWith: function () {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip(this, arguments, function (elem) {
				var parent = this.parentNode;

				if (jQuery.inArray(this, ignored) < 0) {
					jQuery.cleanData(getAll(this));
					if (parent) {
						parent.replaceChild(elem, this);
					}
				}

				// Force callback invocation
			}, ignored);
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (name, original) {
		jQuery.fn[name] = function (selector) {
			var elems,
			    ret = [],
			    insert = jQuery(selector),
			    last = insert.length - 1,
			    i = 0;

			for (; i <= last; i++) {
				elems = i === last ? this : this.clone(true);
				jQuery(insert[i])[original](elems);

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply(ret, elems.get());
			}

			return this.pushStack(ret);
		};
	});
	var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

	var getStyles = function (elem) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if (!view || !view.opener) {
			view = window;
		}

		return view.getComputedStyle(elem);
	};

	var rboxStyle = new RegExp(cssExpand.join("|"), "i");

	(function () {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if (!div) {
				return;
			}

			container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
			div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
			documentElement.appendChild(container).appendChild(div);

			var divStyle = window.getComputedStyle(div);
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;

			// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
			// Some styles come back with percentage values, even though they shouldn't
			div.style.right = "60%";
			pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;

			// Support: IE 9 - 11 only
			// Detect misreporting of content dimensions for box-sizing:border-box elements
			boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;

			// Support: IE 9 only
			// Detect overflow:scroll screwiness (gh-3699)
			div.style.position = "absolute";
			scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

			documentElement.removeChild(container);

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		function roundPixelMeasures(measure) {
			return Math.round(parseFloat(measure));
		}

		var pixelPositionVal,
		    boxSizingReliableVal,
		    scrollboxSizeVal,
		    pixelBoxStylesVal,
		    reliableMarginLeftVal,
		    container = document.createElement("div"),
		    div = document.createElement("div");

		// Finish early in limited (non-browser) environments
		if (!div.style) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode(true).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		jQuery.extend(support, {
			boxSizingReliable: function () {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelBoxStyles: function () {
				computeStyleTests();
				return pixelBoxStylesVal;
			},
			pixelPosition: function () {
				computeStyleTests();
				return pixelPositionVal;
			},
			reliableMarginLeft: function () {
				computeStyleTests();
				return reliableMarginLeftVal;
			},
			scrollboxSize: function () {
				computeStyleTests();
				return scrollboxSizeVal;
			}
		});
	})();

	function curCSS(elem, name, computed) {
		var width,
		    minWidth,
		    maxWidth,
		    ret,


		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

		computed = computed || getStyles(elem);

		// getPropertyValue is needed for:
		//   .css('filter') (IE 9 only, #12537)
		//   .css('--customProperty) (#3144)
		if (computed) {
			ret = computed.getPropertyValue(name) || computed[name];

			if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
				ret = jQuery.style(elem, name);
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" : ret;
	}

	function addGetHookIf(conditionFn, hookFn) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function () {
				if (conditionFn()) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply(this, arguments);
			}
		};
	}

	var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	    rcustomProp = /^--/,
	    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	    cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},
	    cssPrefixes = ["Webkit", "Moz", "ms"],
	    emptyStyle = document.createElement("div").style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(name) {

		// Shortcut for names that are not vendor prefixed
		if (name in emptyStyle) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
		    i = cssPrefixes.length;

		while (i--) {
			name = cssPrefixes[i] + capName;
			if (name in emptyStyle) {
				return name;
			}
		}
	}

	// Return a property mapped along what jQuery.cssProps suggests or to
	// a vendor prefixed property.
	function finalPropName(name) {
		var ret = jQuery.cssProps[name];
		if (!ret) {
			ret = jQuery.cssProps[name] = vendorPropName(name) || name;
		}
		return ret;
	}

	function setPositiveNumber(elem, value, subtract) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec(value);
		return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
	}

	function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
		var i = dimension === "width" ? 1 : 0,
		    extra = 0,
		    delta = 0;

		// Adjustment may not be necessary
		if (box === (isBorderBox ? "border" : "content")) {
			return 0;
		}

		for (; i < 4; i += 2) {

			// Both box models exclude margin
			if (box === "margin") {
				delta += jQuery.css(elem, box + cssExpand[i], true, styles);
			}

			// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
			if (!isBorderBox) {

				// Add padding
				delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

				// For "border" or "margin", add border
				if (box !== "padding") {
					delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);

					// But still keep track of it otherwise
				} else {
					extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}

				// If we get here with a border-box (content + padding + border), we're seeking "content" or
				// "padding" or "margin"
			} else {

				// For "content", subtract padding
				if (box === "content") {
					delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
				}

				// For "content" or "padding", subtract border
				if (box !== "margin") {
					delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			}
		}

		// Account for positive content-box scroll gutter when requested by providing computedVal
		if (!isBorderBox && computedVal >= 0) {

			// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
			// Assuming integer scroll gutter, subtract the rest and round down
			delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5));
		}

		return delta;
	}

	function getWidthOrHeight(elem, dimension, extra) {

		// Start with computed style
		var styles = getStyles(elem),
		    val = curCSS(elem, dimension, styles),
		    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
		    valueIsBorderBox = isBorderBox;

		// Support: Firefox <=54
		// Return a confounding non-pixel value or feign ignorance, as appropriate.
		if (rnumnonpx.test(val)) {
			if (!extra) {
				return val;
			}
			val = "auto";
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = valueIsBorderBox && (support.boxSizingReliable() || val === elem.style[dimension]);

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		if (val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") {

			val = elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)];

			// offsetWidth/offsetHeight provide border-box values
			valueIsBorderBox = true;
		}

		// Normalize "" and auto
		val = parseFloat(val) || 0;

		// Adjust for the element's box model
		return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles,

		// Provide the current computed size to request scroll gutter calculation (gh-3589)
		val) + "px";
	}

	jQuery.extend({

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function (elem, computed) {
					if (computed) {

						// We should always get a number back from opacity
						var ret = curCSS(elem, "opacity");
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {},

		// Get and set the style property on a DOM Node
		style: function (elem, name, value, extra) {

			// Don't set styles on text and comment nodes
			if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
				return;
			}

			// Make sure that we're working with the right name
			var ret,
			    type,
			    hooks,
			    origName = camelCase(name),
			    isCustomProp = rcustomProp.test(name),
			    style = elem.style;

			// Make sure that we're working with the right name. We don't
			// want to query the value if it is a CSS custom property
			// since they are user-defined.
			if (!isCustomProp) {
				name = finalPropName(origName);
			}

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// Check if we're setting a value
			if (value !== undefined) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
					value = adjustCSS(elem, name, ret);

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if (value == null || value !== value) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if (type === "number") {
					value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
				}

				// background-* props affect original clone's values
				if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
					style[name] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {

					if (isCustomProp) {
						style.setProperty(name, value);
					} else {
						style[name] = value;
					}
				}
			} else {

				// If a hook was provided get the non-computed value from there
				if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[name];
			}
		},

		css: function (elem, name, extra, styles) {
			var val,
			    num,
			    hooks,
			    origName = camelCase(name),
			    isCustomProp = rcustomProp.test(name);

			// Make sure that we're working with the right name. We don't
			// want to modify the value if it is a CSS custom property
			// since they are user-defined.
			if (!isCustomProp) {
				name = finalPropName(origName);
			}

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// If a hook was provided get the computed value from there
			if (hooks && "get" in hooks) {
				val = hooks.get(elem, true, extra);
			}

			// Otherwise, if a way to get the computed value exists, use that
			if (val === undefined) {
				val = curCSS(elem, name, styles);
			}

			// Convert "normal" to computed value
			if (val === "normal" && name in cssNormalTransform) {
				val = cssNormalTransform[name];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if (extra === "" || extra) {
				num = parseFloat(val);
				return extra === true || isFinite(num) ? num || 0 : val;
			}

			return val;
		}
	});

	jQuery.each(["height", "width"], function (i, dimension) {
		jQuery.cssHooks[dimension] = {
			get: function (elem, computed, extra) {
				if (computed) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test(jQuery.css(elem, "display")) && (

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
						return getWidthOrHeight(elem, dimension, extra);
					}) : getWidthOrHeight(elem, dimension, extra);
				}
			},

			set: function (elem, value, extra) {
				var matches,
				    styles = getStyles(elem),
				    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
				    subtract = extra && boxModelAdjustment(elem, dimension, extra, isBorderBox, styles);

				// Account for unreliable border-box dimensions by comparing offset* to computed and
				// faking a content-box to get border and padding (gh-3699)
				if (isBorderBox && support.scrollboxSize() === styles.position) {
					subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
				}

				// Convert to pixels if value adjustment is needed
				if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {

					elem.style[dimension] = value;
					value = jQuery.css(elem, dimension);
				}

				return setPositiveNumber(elem, value, subtract);
			}
		};
	});

	jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
		if (computed) {
			return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function () {
				return elem.getBoundingClientRect().left;
			})) + "px";
		}
	});

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (prefix, suffix) {
		jQuery.cssHooks[prefix + suffix] = {
			expand: function (value) {
				var i = 0,
				    expanded = {},


				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [value];

				for (; i < 4; i++) {
					expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
				}

				return expanded;
			}
		};

		if (prefix !== "margin") {
			jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function (name, value) {
			return access(this, function (elem, name, value) {
				var styles,
				    len,
				    map = {},
				    i = 0;

				if (Array.isArray(name)) {
					styles = getStyles(elem);
					len = name.length;

					for (; i < len; i++) {
						map[name[i]] = jQuery.css(elem, name[i], false, styles);
					}

					return map;
				}

				return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
			}, name, value, arguments.length > 1);
		}
	});

	function Tween(elem, options, prop, end, easing) {
		return new Tween.prototype.init(elem, options, prop, end, easing);
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function (elem, options, prop, end, easing, unit) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
		},
		cur: function () {
			var hooks = Tween.propHooks[this.prop];

			return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
		},
		run: function (percent) {
			var eased,
			    hooks = Tween.propHooks[this.prop];

			if (this.options.duration) {
				this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
			} else {
				this.pos = eased = percent;
			}
			this.now = (this.end - this.start) * eased + this.start;

			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this);
			}

			if (hooks && hooks.set) {
				hooks.set(this);
			} else {
				Tween.propHooks._default.set(this);
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function (tween) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
					return tween.elem[tween.prop];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css(tween.elem, tween.prop, "");

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function (tween) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if (jQuery.fx.step[tween.prop]) {
					jQuery.fx.step[tween.prop](tween);
				} else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
					jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
				} else {
					tween.elem[tween.prop] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function (tween) {
			if (tween.elem.nodeType && tween.elem.parentNode) {
				tween.elem[tween.prop] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function (p) {
			return p;
		},
		swing: function (p) {
			return 0.5 - Math.cos(p * Math.PI) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};

	var fxNow,
	    inProgress,
	    rfxtypes = /^(?:toggle|show|hide)$/,
	    rrun = /queueHooks$/;

	function schedule() {
		if (inProgress) {
			if (document.hidden === false && window.requestAnimationFrame) {
				window.requestAnimationFrame(schedule);
			} else {
				window.setTimeout(schedule, jQuery.fx.interval);
			}

			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout(function () {
			fxNow = undefined;
		});
		return fxNow = Date.now();
	}

	// Generate parameters to create a standard animation
	function genFx(type, includeWidth) {
		var which,
		    i = 0,
		    attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for (; i < 4; i += 2 - includeWidth) {
			which = cssExpand[i];
			attrs["margin" + which] = attrs["padding" + which] = type;
		}

		if (includeWidth) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween(value, prop, animation) {
		var tween,
		    collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
		    index = 0,
		    length = collection.length;
		for (; index < length; index++) {
			if (tween = collection[index].call(animation, prop, value)) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter(elem, props, opts) {
		var prop,
		    value,
		    toggle,
		    hooks,
		    oldfire,
		    propTween,
		    restoreDisplay,
		    display,
		    isBox = "width" in props || "height" in props,
		    anim = this,
		    orig = {},
		    style = elem.style,
		    hidden = elem.nodeType && isHiddenWithinTree(elem),
		    dataShow = dataPriv.get(elem, "fxshow");

		// Queue-skipping animations hijack the fx hooks
		if (!opts.queue) {
			hooks = jQuery._queueHooks(elem, "fx");
			if (hooks.unqueued == null) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function () {
					if (!hooks.unqueued) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function () {

				// Ensure the complete handler is called before this completes
				anim.always(function () {
					hooks.unqueued--;
					if (!jQuery.queue(elem, "fx").length) {
						hooks.empty.fire();
					}
				});
			});
		}

		// Detect show/hide animations
		for (prop in props) {
			value = props[prop];
			if (rfxtypes.test(value)) {
				delete props[prop];
				toggle = toggle || value === "toggle";
				if (value === (hidden ? "hide" : "show")) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if (value === "show" && dataShow && dataShow[prop] !== undefined) {
						hidden = true;

						// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject(props);
		if (!propTween && jQuery.isEmptyObject(orig)) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if (isBox && elem.nodeType === 1) {

			// Support: IE <=9 - 11, Edge 12 - 15
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY and Edge just mirrors
			// the overflowX value there.
			opts.overflow = [style.overflow, style.overflowX, style.overflowY];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if (restoreDisplay == null) {
				restoreDisplay = dataPriv.get(elem, "display");
			}
			display = jQuery.css(elem, "display");
			if (display === "none") {
				if (restoreDisplay) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide([elem], true);
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css(elem, "display");
					showHide([elem]);
				}
			}

			// Animate inline elements as inline-block
			if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
				if (jQuery.css(elem, "float") === "none") {

					// Restore the original display value at the end of pure show/hide animations
					if (!propTween) {
						anim.done(function () {
							style.display = restoreDisplay;
						});
						if (restoreDisplay == null) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if (opts.overflow) {
			style.overflow = "hidden";
			anim.always(function () {
				style.overflow = opts.overflow[0];
				style.overflowX = opts.overflow[1];
				style.overflowY = opts.overflow[2];
			});
		}

		// Implement show/hide animations
		propTween = false;
		for (prop in orig) {

			// General show/hide setup for this element animation
			if (!propTween) {
				if (dataShow) {
					if ("hidden" in dataShow) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if (toggle) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if (hidden) {
					showHide([elem], true);
				}

				/* eslint-disable no-loop-func */

				anim.done(function () {

					/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if (!hidden) {
						showHide([elem]);
					}
					dataPriv.remove(elem, "fxshow");
					for (prop in orig) {
						jQuery.style(elem, prop, orig[prop]);
					}
				});
			}

			// Per-property setup
			propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
			if (!(prop in dataShow)) {
				dataShow[prop] = propTween.start;
				if (hidden) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter(props, specialEasing) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for (index in props) {
			name = camelCase(index);
			easing = specialEasing[name];
			value = props[index];
			if (Array.isArray(value)) {
				easing = value[1];
				value = props[index] = value[0];
			}

			if (index !== name) {
				props[name] = value;
				delete props[index];
			}

			hooks = jQuery.cssHooks[name];
			if (hooks && "expand" in hooks) {
				value = hooks.expand(value);
				delete props[name];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for (index in value) {
					if (!(index in props)) {
						props[index] = value[index];
						specialEasing[index] = easing;
					}
				}
			} else {
				specialEasing[name] = easing;
			}
		}
	}

	function Animation(elem, properties, options) {
		var result,
		    stopped,
		    index = 0,
		    length = Animation.prefilters.length,
		    deferred = jQuery.Deferred().always(function () {

			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		    tick = function () {
			if (stopped) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
			    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),


			// Support: Android 2.3 only
			// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
			temp = remaining / animation.duration || 0,
			    percent = 1 - temp,
			    index = 0,
			    length = animation.tweens.length;

			for (; index < length; index++) {
				animation.tweens[index].run(percent);
			}

			deferred.notifyWith(elem, [animation, percent, remaining]);

			// If there's more to do, yield
			if (percent < 1 && length) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if (!length) {
				deferred.notifyWith(elem, [animation, 1, 0]);
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith(elem, [animation]);
			return false;
		},
		    animation = deferred.promise({
			elem: elem,
			props: jQuery.extend({}, properties),
			opts: jQuery.extend(true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function (prop, end) {
				var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
				animation.tweens.push(tween);
				return tween;
			},
			stop: function (gotoEnd) {
				var index = 0,


				// If we are going to the end, we want to run all the tweens
				// otherwise we skip this part
				length = gotoEnd ? animation.tweens.length : 0;
				if (stopped) {
					return this;
				}
				stopped = true;
				for (; index < length; index++) {
					animation.tweens[index].run(1);
				}

				// Resolve when we played the last frame; otherwise, reject
				if (gotoEnd) {
					deferred.notifyWith(elem, [animation, 1, 0]);
					deferred.resolveWith(elem, [animation, gotoEnd]);
				} else {
					deferred.rejectWith(elem, [animation, gotoEnd]);
				}
				return this;
			}
		}),
		    props = animation.props;

		propFilter(props, animation.opts.specialEasing);

		for (; index < length; index++) {
			result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
			if (result) {
				if (isFunction(result.stop)) {
					jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
				}
				return result;
			}
		}

		jQuery.map(props, createTween, animation);

		if (isFunction(animation.opts.start)) {
			animation.opts.start.call(elem, animation);
		}

		// Attach callbacks from options
		animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);

		jQuery.fx.timer(jQuery.extend(tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		}));

		return animation;
	}

	jQuery.Animation = jQuery.extend(Animation, {

		tweeners: {
			"*": [function (prop, value) {
				var tween = this.createTween(prop, value);
				adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
				return tween;
			}]
		},

		tweener: function (props, callback) {
			if (isFunction(props)) {
				callback = props;
				props = ["*"];
			} else {
				props = props.match(rnothtmlwhite);
			}

			var prop,
			    index = 0,
			    length = props.length;

			for (; index < length; index++) {
				prop = props[index];
				Animation.tweeners[prop] = Animation.tweeners[prop] || [];
				Animation.tweeners[prop].unshift(callback);
			}
		},

		prefilters: [defaultPrefilter],

		prefilter: function (callback, prepend) {
			if (prepend) {
				Animation.prefilters.unshift(callback);
			} else {
				Animation.prefilters.push(callback);
			}
		}
	});

	jQuery.speed = function (speed, easing, fn) {
		var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
			complete: fn || !fn && easing || isFunction(speed) && speed,
			duration: speed,
			easing: fn && easing || easing && !isFunction(easing) && easing
		};

		// Go to the end state if fx are off
		if (jQuery.fx.off) {
			opt.duration = 0;
		} else {
			if (typeof opt.duration !== "number") {
				if (opt.duration in jQuery.fx.speeds) {
					opt.duration = jQuery.fx.speeds[opt.duration];
				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if (opt.queue == null || opt.queue === true) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function () {
			if (isFunction(opt.old)) {
				opt.old.call(this);
			}

			if (opt.queue) {
				jQuery.dequeue(this, opt.queue);
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function (speed, to, easing, callback) {

			// Show any hidden elements after setting opacity to 0
			return this.filter(isHiddenWithinTree).css("opacity", 0).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback);
		},
		animate: function (prop, speed, easing, callback) {
			var empty = jQuery.isEmptyObject(prop),
			    optall = jQuery.speed(speed, easing, callback),
			    doAnimation = function () {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation(this, jQuery.extend({}, prop), optall);

				// Empty animations, or finishing resolves immediately
				if (empty || dataPriv.get(this, "finish")) {
					anim.stop(true);
				}
			};
			doAnimation.finish = doAnimation;

			return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
		},
		stop: function (type, clearQueue, gotoEnd) {
			var stopQueue = function (hooks) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop(gotoEnd);
			};

			if (typeof type !== "string") {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if (clearQueue && type !== false) {
				this.queue(type || "fx", []);
			}

			return this.each(function () {
				var dequeue = true,
				    index = type != null && type + "queueHooks",
				    timers = jQuery.timers,
				    data = dataPriv.get(this);

				if (index) {
					if (data[index] && data[index].stop) {
						stopQueue(data[index]);
					}
				} else {
					for (index in data) {
						if (data[index] && data[index].stop && rrun.test(index)) {
							stopQueue(data[index]);
						}
					}
				}

				for (index = timers.length; index--;) {
					if (timers[index].elem === this && (type == null || timers[index].queue === type)) {

						timers[index].anim.stop(gotoEnd);
						dequeue = false;
						timers.splice(index, 1);
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if (dequeue || !gotoEnd) {
					jQuery.dequeue(this, type);
				}
			});
		},
		finish: function (type) {
			if (type !== false) {
				type = type || "fx";
			}
			return this.each(function () {
				var index,
				    data = dataPriv.get(this),
				    queue = data[type + "queue"],
				    hooks = data[type + "queueHooks"],
				    timers = jQuery.timers,
				    length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue(this, type, []);

				if (hooks && hooks.stop) {
					hooks.stop.call(this, true);
				}

				// Look for any active animations, and finish them
				for (index = timers.length; index--;) {
					if (timers[index].elem === this && timers[index].queue === type) {
						timers[index].anim.stop(true);
						timers.splice(index, 1);
					}
				}

				// Look for any animations in the old queue and finish them
				for (index = 0; index < length; index++) {
					if (queue[index] && queue[index].finish) {
						queue[index].finish.call(this);
					}
				}

				// Turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each(["toggle", "show", "hide"], function (i, name) {
		var cssFn = jQuery.fn[name];
		jQuery.fn[name] = function (speed, easing, callback) {
			return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function (name, props) {
		jQuery.fn[name] = function (speed, easing, callback) {
			return this.animate(props, speed, easing, callback);
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function () {
		var timer,
		    i = 0,
		    timers = jQuery.timers;

		fxNow = Date.now();

		for (; i < timers.length; i++) {
			timer = timers[i];

			// Run the timer and safely remove it when done (allowing for external removal)
			if (!timer() && timers[i] === timer) {
				timers.splice(i--, 1);
			}
		}

		if (!timers.length) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function (timer) {
		jQuery.timers.push(timer);
		jQuery.fx.start();
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function () {
		if (inProgress) {
			return;
		}

		inProgress = true;
		schedule();
	};

	jQuery.fx.stop = function () {
		inProgress = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};

	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function (time, type) {
		time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
		type = type || "fx";

		return this.queue(type, function (next, hooks) {
			var timeout = window.setTimeout(next, time);
			hooks.stop = function () {
				window.clearTimeout(timeout);
			};
		});
	};

	(function () {
		var input = document.createElement("input"),
		    select = document.createElement("select"),
		    opt = select.appendChild(document.createElement("option"));

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement("input");
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();

	var boolHook,
	    attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend({
		attr: function (name, value) {
			return access(this, jQuery.attr, name, value, arguments.length > 1);
		},

		removeAttr: function (name) {
			return this.each(function () {
				jQuery.removeAttr(this, name);
			});
		}
	});

	jQuery.extend({
		attr: function (elem, name, value) {
			var ret,
			    hooks,
			    nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if (nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if (typeof elem.getAttribute === "undefined") {
				return jQuery.prop(elem, name, value);
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
				hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
			}

			if (value !== undefined) {
				if (value === null) {
					jQuery.removeAttr(elem, name);
					return;
				}

				if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				}

				elem.setAttribute(name, value + "");
				return value;
			}

			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			}

			ret = jQuery.find.attr(elem, name);

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function (elem, value) {
					if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
						var val = elem.value;
						elem.setAttribute("type", value);
						if (val) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function (elem, value) {
			var name,
			    i = 0,


			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match(rnothtmlwhite);

			if (attrNames && elem.nodeType === 1) {
				while (name = attrNames[i++]) {
					elem.removeAttribute(name);
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function (elem, value, name) {
			if (value === false) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr(elem, name);
			} else {
				elem.setAttribute(name, name);
			}
			return name;
		}
	};

	jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
		var getter = attrHandle[name] || jQuery.find.attr;

		attrHandle[name] = function (elem, name, isXML) {
			var ret,
			    handle,
			    lowercaseName = name.toLowerCase();

			if (!isXML) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[lowercaseName];
				attrHandle[lowercaseName] = ret;
				ret = getter(elem, name, isXML) != null ? lowercaseName : null;
				attrHandle[lowercaseName] = handle;
			}
			return ret;
		};
	});

	var rfocusable = /^(?:input|select|textarea|button)$/i,
	    rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend({
		prop: function (name, value) {
			return access(this, jQuery.prop, name, value, arguments.length > 1);
		},

		removeProp: function (name) {
			return this.each(function () {
				delete this[jQuery.propFix[name] || name];
			});
		}
	});

	jQuery.extend({
		prop: function (elem, name, value) {
			var ret,
			    hooks,
			    nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if (nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

				// Fix name and attach hooks
				name = jQuery.propFix[name] || name;
				hooks = jQuery.propHooks[name];
			}

			if (value !== undefined) {
				if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				}

				return elem[name] = value;
			}

			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			}

			return elem[name];
		},

		propHooks: {
			tabIndex: {
				get: function (elem) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr(elem, "tabindex");

					if (tabindex) {
						return parseInt(tabindex, 10);
					}

					if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	});

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if (!support.optSelected) {
		jQuery.propHooks.selected = {
			get: function (elem) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if (parent && parent.parentNode) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function (elem) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if (parent) {
					parent.selectedIndex;

					if (parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		jQuery.propFix[this.toLowerCase()] = this;
	});

	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse(value) {
		var tokens = value.match(rnothtmlwhite) || [];
		return tokens.join(" ");
	}

	function getClass(elem) {
		return elem.getAttribute && elem.getAttribute("class") || "";
	}

	function classesToArray(value) {
		if (Array.isArray(value)) {
			return value;
		}
		if (typeof value === "string") {
			return value.match(rnothtmlwhite) || [];
		}
		return [];
	}

	jQuery.fn.extend({
		addClass: function (value) {
			var classes,
			    elem,
			    cur,
			    curValue,
			    clazz,
			    j,
			    finalValue,
			    i = 0;

			if (isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).addClass(value.call(this, j, getClass(this)));
				});
			}

			classes = classesToArray(value);

			if (classes.length) {
				while (elem = this[i++]) {
					curValue = getClass(elem);
					cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {
							if (cur.indexOf(" " + clazz + " ") < 0) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse(cur);
						if (curValue !== finalValue) {
							elem.setAttribute("class", finalValue);
						}
					}
				}
			}

			return this;
		},

		removeClass: function (value) {
			var classes,
			    elem,
			    cur,
			    curValue,
			    clazz,
			    j,
			    finalValue,
			    i = 0;

			if (isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).removeClass(value.call(this, j, getClass(this)));
				});
			}

			if (!arguments.length) {
				return this.attr("class", "");
			}

			classes = classesToArray(value);

			if (classes.length) {
				while (elem = this[i++]) {
					curValue = getClass(elem);

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {

							// Remove *all* instances
							while (cur.indexOf(" " + clazz + " ") > -1) {
								cur = cur.replace(" " + clazz + " ", " ");
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse(cur);
						if (curValue !== finalValue) {
							elem.setAttribute("class", finalValue);
						}
					}
				}
			}

			return this;
		},

		toggleClass: function (value, stateVal) {
			var type = typeof value,
			    isValidValue = type === "string" || Array.isArray(value);

			if (typeof stateVal === "boolean" && isValidValue) {
				return stateVal ? this.addClass(value) : this.removeClass(value);
			}

			if (isFunction(value)) {
				return this.each(function (i) {
					jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
				});
			}

			return this.each(function () {
				var className, i, self, classNames;

				if (isValidValue) {

					// Toggle individual class names
					i = 0;
					self = jQuery(this);
					classNames = classesToArray(value);

					while (className = classNames[i++]) {

						// Check each className given, space separated list
						if (self.hasClass(className)) {
							self.removeClass(className);
						} else {
							self.addClass(className);
						}
					}

					// Toggle whole class name
				} else if (value === undefined || type === "boolean") {
					className = getClass(this);
					if (className) {

						// Store className if set
						dataPriv.set(this, "__className__", className);
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if (this.setAttribute) {
						this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
					}
				}
			});
		},

		hasClass: function (selector) {
			var className,
			    elem,
			    i = 0;

			className = " " + selector + " ";
			while (elem = this[i++]) {
				if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
					return true;
				}
			}

			return false;
		}
	});

	var rreturn = /\r/g;

	jQuery.fn.extend({
		val: function (value) {
			var hooks,
			    ret,
			    valueIsFunction,
			    elem = this[0];

			if (!arguments.length) {
				if (elem) {
					hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

					if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if (typeof ret === "string") {
						return ret.replace(rreturn, "");
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			valueIsFunction = isFunction(value);

			return this.each(function (i) {
				var val;

				if (this.nodeType !== 1) {
					return;
				}

				if (valueIsFunction) {
					val = value.call(this, i, jQuery(this).val());
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if (val == null) {
					val = "";
				} else if (typeof val === "number") {
					val += "";
				} else if (Array.isArray(val)) {
					val = jQuery.map(val, function (value) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

				// If set returns undefined, fall back to normal setting
				if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function (elem) {

					var val = jQuery.find.attr(elem, "value");
					return val != null ? val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse(jQuery.text(elem));
				}
			},
			select: {
				get: function (elem) {
					var value,
					    option,
					    i,
					    options = elem.options,
					    index = elem.selectedIndex,
					    one = elem.type === "select-one",
					    values = one ? null : [],
					    max = one ? index + 1 : options.length;

					if (index < 0) {
						i = max;
					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for (; i < max; i++) {
						option = options[i];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ((option.selected || i === index) &&

						// Don't return options that are disabled or in a disabled optgroup
						!option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {

							// Get the specific value for the option
							value = jQuery(option).val();

							// We don't need an array for one selects
							if (one) {
								return value;
							}

							// Multi-Selects return an array
							values.push(value);
						}
					}

					return values;
				},

				set: function (elem, value) {
					var optionSet,
					    option,
					    options = elem.options,
					    values = jQuery.makeArray(value),
					    i = options.length;

					while (i--) {
						option = options[i];

						/* eslint-disable no-cond-assign */

						if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if (!optionSet) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each(["radio", "checkbox"], function () {
		jQuery.valHooks[this] = {
			set: function (elem, value) {
				if (Array.isArray(value)) {
					return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
				}
			}
		};
		if (!support.checkOn) {
			jQuery.valHooks[this].get = function (elem) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});

	// Return jQuery for attributes-only inclusion


	support.focusin = "onfocusin" in window;

	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	    stopPropagationCallback = function (e) {
		e.stopPropagation();
	};

	jQuery.extend(jQuery.event, {

		trigger: function (event, data, elem, onlyHandlers) {

			var i,
			    cur,
			    tmp,
			    bubbleType,
			    ontype,
			    handle,
			    special,
			    lastElement,
			    eventPath = [elem || document],
			    type = hasOwn.call(event, "type") ? event.type : event,
			    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

			cur = lastElement = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if (elem.nodeType === 3 || elem.nodeType === 8) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if (rfocusMorph.test(type + jQuery.event.triggered)) {
				return;
			}

			if (type.indexOf(".") > -1) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if (!event.target) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ? [event] : jQuery.makeArray(data, [event]);

			// Allow special events to draw outside the lines
			special = jQuery.event.special[type] || {};
			if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {

				bubbleType = special.delegateType || type;
				if (!rfocusMorph.test(bubbleType + type)) {
					cur = cur.parentNode;
				}
				for (; cur; cur = cur.parentNode) {
					eventPath.push(cur);
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if (tmp === (elem.ownerDocument || document)) {
					eventPath.push(tmp.defaultView || tmp.parentWindow || window);
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
				lastElement = cur;
				event.type = i > 1 ? bubbleType : special.bindType || type;

				// jQuery handler
				handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
				if (handle) {
					handle.apply(cur, data);
				}

				// Native handler
				handle = ontype && cur[ontype];
				if (handle && handle.apply && acceptData(cur)) {
					event.result = handle.apply(cur, data);
					if (event.result === false) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if (!onlyHandlers && !event.isDefaultPrevented()) {

				if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if (ontype && isFunction(elem[type]) && !isWindow(elem)) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ontype];

						if (tmp) {
							elem[ontype] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;

						if (event.isPropagationStopped()) {
							lastElement.addEventListener(type, stopPropagationCallback);
						}

						elem[type]();

						if (event.isPropagationStopped()) {
							lastElement.removeEventListener(type, stopPropagationCallback);
						}

						jQuery.event.triggered = undefined;

						if (tmp) {
							elem[ontype] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function (type, elem, event) {
			var e = jQuery.extend(new jQuery.Event(), event, {
				type: type,
				isSimulated: true
			});

			jQuery.event.trigger(e, null, elem);
		}

	});

	jQuery.fn.extend({

		trigger: function (type, data) {
			return this.each(function () {
				jQuery.event.trigger(type, data, this);
			});
		},
		triggerHandler: function (type, data) {
			var elem = this[0];
			if (elem) {
				return jQuery.event.trigger(type, data, elem, true);
			}
		}
	});

	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if (!support.focusin) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function (event) {
				jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
			};

			jQuery.event.special[fix] = {
				setup: function () {
					var doc = this.ownerDocument || this,
					    attaches = dataPriv.access(doc, fix);

					if (!attaches) {
						doc.addEventListener(orig, handler, true);
					}
					dataPriv.access(doc, fix, (attaches || 0) + 1);
				},
				teardown: function () {
					var doc = this.ownerDocument || this,
					    attaches = dataPriv.access(doc, fix) - 1;

					if (!attaches) {
						doc.removeEventListener(orig, handler, true);
						dataPriv.remove(doc, fix);
					} else {
						dataPriv.access(doc, fix, attaches);
					}
				}
			};
		});
	}
	var location = window.location;

	var nonce = Date.now();

	var rquery = /\?/;

	// Cross-browser xml parsing
	jQuery.parseXML = function (data) {
		var xml;
		if (!data || typeof data !== "string") {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = new window.DOMParser().parseFromString(data, "text/xml");
		} catch (e) {
			xml = undefined;
		}

		if (!xml || xml.getElementsByTagName("parsererror").length) {
			jQuery.error("Invalid XML: " + data);
		}
		return xml;
	};

	var rbracket = /\[\]$/,
	    rCRLF = /\r?\n/g,
	    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	    rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams(prefix, obj, traditional, add) {
		var name;

		if (Array.isArray(obj)) {

			// Serialize array item.
			jQuery.each(obj, function (i, v) {
				if (traditional || rbracket.test(prefix)) {

					// Treat each array item as a scalar.
					add(prefix, v);
				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
				}
			});
		} else if (!traditional && toType(obj) === "object") {

			// Serialize object item.
			for (name in obj) {
				buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
			}
		} else {

			// Serialize scalar item.
			add(prefix, obj);
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function (a, traditional) {
		var prefix,
		    s = [],
		    add = function (key, valueOrFunction) {

			// If value is a function, invoke it and use its return value
			var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;

			s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
		};

		// If an array was passed in, assume that it is an array of form elements.
		if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {

			// Serialize the form elements
			jQuery.each(a, function () {
				add(this.name, this.value);
			});
		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for (prefix in a) {
				buildParams(prefix, a[prefix], traditional, add);
			}
		}

		// Return the resulting serialization
		return s.join("&");
	};

	jQuery.fn.extend({
		serialize: function () {
			return jQuery.param(this.serializeArray());
		},
		serializeArray: function () {
			return this.map(function () {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop(this, "elements");
				return elements ? jQuery.makeArray(elements) : this;
			}).filter(function () {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
			}).map(function (i, elem) {
				var val = jQuery(this).val();

				if (val == null) {
					return null;
				}

				if (Array.isArray(val)) {
					return jQuery.map(val, function (val) {
						return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
					});
				}

				return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
			}).get();
		}
	});

	var r20 = /%20/g,
	    rhash = /#.*$/,
	    rantiCache = /([?&])_=[^&]*/,
	    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,


	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    rnoContent = /^(?:GET|HEAD)$/,
	    rprotocol = /^\/\//,


	/* Prefilters
  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
  * 2) These are called:
  *    - BEFORE asking for a transport
  *    - AFTER param serialization (s.data is a string if s.processData is true)
  * 3) key is the dataType
  * 4) the catchall symbol "*" can be used
  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
  */
	prefilters = {},


	/* Transports bindings
  * 1) key is the dataType
  * 2) the catchall symbol "*" can be used
  * 3) selection will start with transport dataType and THEN go to "*" if needed
  */
	transports = {},


	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*"),


	// Anchor tag for parsing the document origin
	originAnchor = document.createElement("a");
	originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure) {

		// dataTypeExpression is optional and defaults to "*"
		return function (dataTypeExpression, func) {

			if (typeof dataTypeExpression !== "string") {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
			    i = 0,
			    dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

			if (isFunction(func)) {

				// For each dataType in the dataTypeExpression
				while (dataType = dataTypes[i++]) {

					// Prepend if requested
					if (dataType[0] === "+") {
						dataType = dataType.slice(1) || "*";
						(structure[dataType] = structure[dataType] || []).unshift(func);

						// Otherwise append
					} else {
						(structure[dataType] = structure[dataType] || []).push(func);
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

		var inspected = {},
		    seekingTransport = structure === transports;

		function inspect(dataType) {
			var selected;
			inspected[dataType] = true;
			jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
				var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
				if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {

					options.dataTypes.unshift(dataTypeOrTransport);
					inspect(dataTypeOrTransport);
					return false;
				} else if (seekingTransport) {
					return !(selected = dataTypeOrTransport);
				}
			});
			return selected;
		}

		return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target, src) {
		var key,
		    deep,
		    flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for (key in src) {
			if (src[key] !== undefined) {
				(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
			}
		}
		if (deep) {
			jQuery.extend(true, target, deep);
		}

		return target;
	}

	/* Handles responses to an ajax request:
  * - finds the right dataType (mediates between content-type and expected dataType)
  * - returns the corresponding response
  */
	function ajaxHandleResponses(s, jqXHR, responses) {

		var ct,
		    type,
		    finalDataType,
		    firstDataType,
		    contents = s.contents,
		    dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while (dataTypes[0] === "*") {
			dataTypes.shift();
			if (ct === undefined) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if (ct) {
			for (type in contents) {
				if (contents[type] && contents[type].test(ct)) {
					dataTypes.unshift(type);
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if (dataTypes[0] in responses) {
			finalDataType = dataTypes[0];
		} else {

			// Try convertible dataTypes
			for (type in responses) {
				if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
					finalDataType = type;
					break;
				}
				if (!firstDataType) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if (finalDataType) {
			if (finalDataType !== dataTypes[0]) {
				dataTypes.unshift(finalDataType);
			}
			return responses[finalDataType];
		}
	}

	/* Chain conversions given the request and the original response
  * Also sets the responseXXX fields on the jqXHR instance
  */
	function ajaxConvert(s, response, jqXHR, isSuccess) {
		var conv2,
		    current,
		    conv,
		    tmp,
		    prev,
		    converters = {},


		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if (dataTypes[1]) {
			for (conv in s.converters) {
				converters[conv.toLowerCase()] = s.converters[conv];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while (current) {

			if (s.responseFields[current]) {
				jqXHR[s.responseFields[current]] = response;
			}

			// Apply the dataFilter if provided
			if (!prev && isSuccess && s.dataFilter) {
				response = s.dataFilter(response, s.dataType);
			}

			prev = current;
			current = dataTypes.shift();

			if (current) {

				// There's only work to do if current dataType is non-auto
				if (current === "*") {

					current = prev;

					// Convert response if prev dataType is non-auto and differs from current
				} else if (prev !== "*" && prev !== current) {

					// Seek a direct converter
					conv = converters[prev + " " + current] || converters["* " + current];

					// If none found, seek a pair
					if (!conv) {
						for (conv2 in converters) {

							// If conv2 outputs current
							tmp = conv2.split(" ");
							if (tmp[1] === current) {

								// If prev can be converted to accepted input
								conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
								if (conv) {

									// Condense equivalence converters
									if (conv === true) {
										conv = converters[conv2];

										// Otherwise, insert the intermediate dataType
									} else if (converters[conv2] !== true) {
										current = tmp[0];
										dataTypes.unshift(tmp[1]);
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if (conv !== true) {

						// Unless errors are allowed to bubble, catch and return them
						if (conv && s.throws) {
							response = conv(response);
						} else {
							try {
								response = conv(response);
							} catch (e) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test(location.protocol),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
   timeout: 0,
   data: null,
   dataType: null,
   username: null,
   password: null,
   cache: null,
   throws: false,
   traditional: false,
   headers: {},
   */

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function (target, settings) {
			return settings ?

			// Building a settings object
			ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

			// Extending ajaxSettings
			ajaxExtend(jQuery.ajaxSettings, target);
		},

		ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
		ajaxTransport: addToPrefiltersOrTransports(transports),

		// Main method
		ajax: function (url, options) {

			// If url is an object, simulate pre-1.5 signature
			if (typeof url === "object") {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,


			// URL without anti-cache param
			cacheURL,


			// Response headers
			responseHeadersString,
			    responseHeaders,


			// timeout handle
			timeoutTimer,


			// Url cleanup var
			urlAnchor,


			// Request state (becomes false upon send and true upon completion)
			completed,


			// To know if global events are to be dispatched
			fireGlobals,


			// Loop variable
			i,


			// uncached part of the url
			uncached,


			// Create the final options object
			s = jQuery.ajaxSetup({}, options),


			// Callbacks context
			callbackContext = s.context || s,


			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,


			// Deferreds
			deferred = jQuery.Deferred(),
			    completeDeferred = jQuery.Callbacks("once memory"),


			// Status-dependent callbacks
			statusCode = s.statusCode || {},


			// Headers (they are sent all at once)
			requestHeaders = {},
			    requestHeadersNames = {},


			// Default abort message
			strAbort = "canceled",


			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function (key) {
					var match;
					if (completed) {
						if (!responseHeaders) {
							responseHeaders = {};
							while (match = rheaders.exec(responseHeadersString)) {
								responseHeaders[match[1].toLowerCase()] = match[2];
							}
						}
						match = responseHeaders[key.toLowerCase()];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function () {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function (name, value) {
					if (completed == null) {
						name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
						requestHeaders[name] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function (type) {
					if (completed == null) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function (map) {
					var code;
					if (map) {
						if (completed) {

							// Execute the appropriate callbacks
							jqXHR.always(map[jqXHR.status]);
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for (code in map) {
								statusCode[code] = [statusCode[code], map[code]];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function (statusText) {
					var finalText = statusText || strAbort;
					if (transport) {
						transport.abort(finalText);
					}
					done(0, finalText);
					return this;
				}
			};

			// Attach deferreds
			deferred.promise(jqXHR);

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if (s.crossDomain == null) {
				urlAnchor = document.createElement("a");

				// Support: IE <=8 - 11, Edge 12 - 15
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
				} catch (e) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if (s.data && s.processData && typeof s.data !== "string") {
				s.data = jQuery.param(s.data, s.traditional);
			}

			// Apply prefilters
			inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

			// If request was aborted inside a prefilter, stop there
			if (completed) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if (fireGlobals && jQuery.active++ === 0) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test(s.type);

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace(rhash, "");

			// More options handling for requests with no content
			if (!s.hasContent) {

				// Remember the hash so we can put it back
				uncached = s.url.slice(cacheURL.length);

				// If data is available and should be processed, append data to url
				if (s.data && (s.processData || typeof s.data === "string")) {
					cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if (s.cache === false) {
					cacheURL = cacheURL.replace(rantiCache, "$1");
					uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

				// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
				s.data = s.data.replace(r20, "+");
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if (s.ifModified) {
				if (jQuery.lastModified[cacheURL]) {
					jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
				}
				if (jQuery.etag[cacheURL]) {
					jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
				}
			}

			// Set the correct header, if data is being sent
			if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
				jqXHR.setRequestHeader("Content-Type", s.contentType);
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

			// Check for headers option
			for (i in s.headers) {
				jqXHR.setRequestHeader(i, s.headers[i]);
			}

			// Allow custom headers/mimetypes and early abort
			if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add(s.complete);
			jqXHR.done(s.success);
			jqXHR.fail(s.error);

			// Get transport
			transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

			// If no transport, we auto-abort
			if (!transport) {
				done(-1, "No Transport");
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if (fireGlobals) {
					globalEventContext.trigger("ajaxSend", [jqXHR, s]);
				}

				// If request was aborted inside ajaxSend, stop there
				if (completed) {
					return jqXHR;
				}

				// Timeout
				if (s.async && s.timeout > 0) {
					timeoutTimer = window.setTimeout(function () {
						jqXHR.abort("timeout");
					}, s.timeout);
				}

				try {
					completed = false;
					transport.send(requestHeaders, done);
				} catch (e) {

					// Rethrow post-completion exceptions
					if (completed) {
						throw e;
					}

					// Propagate others as results
					done(-1, e);
				}
			}

			// Callback for when everything is done
			function done(status, nativeStatusText, responses, headers) {
				var isSuccess,
				    success,
				    error,
				    response,
				    modified,
				    statusText = nativeStatusText;

				// Ignore repeat invocations
				if (completed) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if (timeoutTimer) {
					window.clearTimeout(timeoutTimer);
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if (responses) {
					response = ajaxHandleResponses(s, jqXHR, responses);
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert(s, response, jqXHR, isSuccess);

				// If successful, handle type chaining
				if (isSuccess) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if (s.ifModified) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if (modified) {
							jQuery.lastModified[cacheURL] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if (modified) {
							jQuery.etag[cacheURL] = modified;
						}
					}

					// if no content
					if (status === 204 || s.type === "HEAD") {
						statusText = "nocontent";

						// if not modified
					} else if (status === 304) {
						statusText = "notmodified";

						// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if (status || !statusText) {
						statusText = "error";
						if (status < 0) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = (nativeStatusText || statusText) + "";

				// Success/Error
				if (isSuccess) {
					deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
				} else {
					deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
				}

				// Status-dependent callbacks
				jqXHR.statusCode(statusCode);
				statusCode = undefined;

				if (fireGlobals) {
					globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
				}

				// Complete
				completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

				if (fireGlobals) {
					globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

					// Handle the global AJAX counter
					if (! --jQuery.active) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function (url, data, callback) {
			return jQuery.get(url, data, callback, "json");
		},

		getScript: function (url, callback) {
			return jQuery.get(url, undefined, callback, "script");
		}
	});

	jQuery.each(["get", "post"], function (i, method) {
		jQuery[method] = function (url, data, callback, type) {

			// Shift arguments if data argument was omitted
			if (isFunction(data)) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax(jQuery.extend({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject(url) && url));
		};
	});

	jQuery._evalUrl = function (url) {
		return jQuery.ajax({
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		});
	};

	jQuery.fn.extend({
		wrapAll: function (html) {
			var wrap;

			if (this[0]) {
				if (isFunction(html)) {
					html = html.call(this[0]);
				}

				// The elements to wrap the target around
				wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

				if (this[0].parentNode) {
					wrap.insertBefore(this[0]);
				}

				wrap.map(function () {
					var elem = this;

					while (elem.firstElementChild) {
						elem = elem.firstElementChild;
					}

					return elem;
				}).append(this);
			}

			return this;
		},

		wrapInner: function (html) {
			if (isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapInner(html.call(this, i));
				});
			}

			return this.each(function () {
				var self = jQuery(this),
				    contents = self.contents();

				if (contents.length) {
					contents.wrapAll(html);
				} else {
					self.append(html);
				}
			});
		},

		wrap: function (html) {
			var htmlIsFunction = isFunction(html);

			return this.each(function (i) {
				jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
			});
		},

		unwrap: function (selector) {
			this.parent(selector).not("body").each(function () {
				jQuery(this).replaceWith(this.childNodes);
			});
			return this;
		}
	});

	jQuery.expr.pseudos.hidden = function (elem) {
		return !jQuery.expr.pseudos.visible(elem);
	};
	jQuery.expr.pseudos.visible = function (elem) {
		return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
	};

	jQuery.ajaxSettings.xhr = function () {
		try {
			return new window.XMLHttpRequest();
		} catch (e) {}
	};

	var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	    xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport(function (options) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if (support.cors || xhrSupported && !options.crossDomain) {
			return {
				send: function (headers, complete) {
					var i,
					    xhr = options.xhr();

					xhr.open(options.type, options.url, options.async, options.username, options.password);

					// Apply custom fields if provided
					if (options.xhrFields) {
						for (i in options.xhrFields) {
							xhr[i] = options.xhrFields[i];
						}
					}

					// Override mime type if needed
					if (options.mimeType && xhr.overrideMimeType) {
						xhr.overrideMimeType(options.mimeType);
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if (!options.crossDomain && !headers["X-Requested-With"]) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for (i in headers) {
						xhr.setRequestHeader(i, headers[i]);
					}

					// Callback
					callback = function (type) {
						return function () {
							if (callback) {
								callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

								if (type === "abort") {
									xhr.abort();
								} else if (type === "error") {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if (typeof xhr.status !== "number") {
										complete(0, "error");
									} else {
										complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status, xhr.statusText);
									}
								} else {
									complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									(xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = xhr.ontimeout = callback("error");

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if (xhr.onabort !== undefined) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function () {

							// Check readyState before timeout as it changes
							if (xhr.readyState === 4) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout(function () {
									if (callback) {
										errorCallback();
									}
								});
							}
						};
					}

					// Create the abort callback
					callback = callback("abort");

					try {

						// Do send the request (this may raise an exception)
						xhr.send(options.hasContent && options.data || null);
					} catch (e) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if (callback) {
							throw e;
						}
					}
				},

				abort: function () {
					if (callback) {
						callback();
					}
				}
			};
		}
	});

	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter(function (s) {
		if (s.crossDomain) {
			s.contents.script = false;
		}
	});

	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function (text) {
				jQuery.globalEval(text);
				return text;
			}
		}
	});

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script", function (s) {
		if (s.cache === undefined) {
			s.cache = false;
		}
		if (s.crossDomain) {
			s.type = "GET";
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport("script", function (s) {

		// This transport only deals with cross domain requests
		if (s.crossDomain) {
			var script, callback;
			return {
				send: function (_, complete) {
					script = jQuery("<script>").prop({
						charset: s.scriptCharset,
						src: s.url
					}).on("load error", callback = function (evt) {
						script.remove();
						callback = null;
						if (evt) {
							complete(evt.type === "error" ? 404 : 200, evt.type);
						}
					});

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild(script[0]);
				},
				abort: function () {
					if (callback) {
						callback();
					}
				}
			};
		}
	});

	var oldCallbacks = [],
	    rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
			this[callback] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

		var callbackName,
		    overwritten,
		    responseContainer,
		    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if (jsonProp || s.dataTypes[0] === "jsonp") {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

			// Insert callback into url or form data
			if (jsonProp) {
				s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
			} else if (s.jsonp !== false) {
				s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function () {
				if (!responseContainer) {
					jQuery.error(callbackName + " was not called");
				}
				return responseContainer[0];
			};

			// Force json dataType
			s.dataTypes[0] = "json";

			// Install callback
			overwritten = window[callbackName];
			window[callbackName] = function () {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function () {

				// If previous value didn't exist - remove it
				if (overwritten === undefined) {
					jQuery(window).removeProp(callbackName);

					// Otherwise restore preexisting value
				} else {
					window[callbackName] = overwritten;
				}

				// Save back as free
				if (s[callbackName]) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push(callbackName);
				}

				// Call if it was a function and we have a response
				if (responseContainer && isFunction(overwritten)) {
					overwritten(responseContainer[0]);
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});

	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = function () {
		var body = document.implementation.createHTMLDocument("").body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	}();

	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function (data, context, keepScripts) {
		if (typeof data !== "string") {
			return [];
		}
		if (typeof context === "boolean") {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if (!context) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if (support.createHTMLDocument) {
				context = document.implementation.createHTMLDocument("");

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement("base");
				base.href = document.location.href;
				context.head.appendChild(base);
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec(data);
		scripts = !keepScripts && [];

		// Single tag
		if (parsed) {
			return [context.createElement(parsed[1])];
		}

		parsed = buildFragment([data], context, scripts);

		if (scripts && scripts.length) {
			jQuery(scripts).remove();
		}

		return jQuery.merge([], parsed.childNodes);
	};

	/**
  * Load a url into a page
  */
	jQuery.fn.load = function (url, params, callback) {
		var selector,
		    type,
		    response,
		    self = this,
		    off = url.indexOf(" ");

		if (off > -1) {
			selector = stripAndCollapse(url.slice(off));
			url = url.slice(0, off);
		}

		// If it's a function
		if (isFunction(params)) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

			// Otherwise, build a param string
		} else if (params && typeof params === "object") {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if (self.length > 0) {
			jQuery.ajax({
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			}).done(function (responseText) {

				// Save response for use in complete callback
				response = arguments;

				self.html(selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

				// Otherwise use the full result
				responseText);

				// If the request succeeds, this function gets "data", "status", "jqXHR"
				// but they are ignored because response was set above.
				// If it fails, this function gets "jqXHR", "status", "error"
			}).always(callback && function (jqXHR, status) {
				self.each(function () {
					callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
				});
			});
		}

		return this;
	};

	// Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
		jQuery.fn[type] = function (fn) {
			return this.on(type, fn);
		};
	});

	jQuery.expr.pseudos.animated = function (elem) {
		return jQuery.grep(jQuery.timers, function (fn) {
			return elem === fn.elem;
		}).length;
	};

	jQuery.offset = {
		setOffset: function (elem, options, i) {
			var curPosition,
			    curLeft,
			    curCSSTop,
			    curTop,
			    curOffset,
			    curCSSLeft,
			    calculatePosition,
			    position = jQuery.css(elem, "position"),
			    curElem = jQuery(elem),
			    props = {};

			// Set position first, in-case top/left are set even on static elem
			if (position === "static") {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css(elem, "top");
			curCSSLeft = jQuery.css(elem, "left");
			calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if (calculatePosition) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat(curCSSTop) || 0;
				curLeft = parseFloat(curCSSLeft) || 0;
			}

			if (isFunction(options)) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call(elem, i, jQuery.extend({}, curOffset));
			}

			if (options.top != null) {
				props.top = options.top - curOffset.top + curTop;
			}
			if (options.left != null) {
				props.left = options.left - curOffset.left + curLeft;
			}

			if ("using" in options) {
				options.using.call(elem, props);
			} else {
				curElem.css(props);
			}
		}
	};

	jQuery.fn.extend({

		// offset() relates an element's border box to the document origin
		offset: function (options) {

			// Preserve chaining for setter
			if (arguments.length) {
				return options === undefined ? this : this.each(function (i) {
					jQuery.offset.setOffset(this, options, i);
				});
			}

			var rect,
			    win,
			    elem = this[0];

			if (!elem) {
				return;
			}

			// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if (!elem.getClientRects().length) {
				return { top: 0, left: 0 };
			}

			// Get document-relative position by adding viewport scroll to viewport-relative gBCR
			rect = elem.getBoundingClientRect();
			win = elem.ownerDocument.defaultView;
			return {
				top: rect.top + win.pageYOffset,
				left: rect.left + win.pageXOffset
			};
		},

		// position() relates an element's margin box to its offset parent's padding box
		// This corresponds to the behavior of CSS absolute positioning
		position: function () {
			if (!this[0]) {
				return;
			}

			var offsetParent,
			    offset,
			    doc,
			    elem = this[0],
			    parentOffset = { top: 0, left: 0 };

			// position:fixed elements are offset from the viewport, which itself always has zero offset
			if (jQuery.css(elem, "position") === "fixed") {

				// Assume position:fixed implies availability of getBoundingClientRect
				offset = elem.getBoundingClientRect();
			} else {
				offset = this.offset();

				// Account for the *real* offset parent, which can be the document or its root element
				// when a statically positioned element is identified
				doc = elem.ownerDocument;
				offsetParent = elem.offsetParent || doc.documentElement;
				while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {

					offsetParent = offsetParent.parentNode;
				}
				if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {

					// Incorporate borders into its offset, since they are outside its content origin
					parentOffset = jQuery(offsetParent).offset();
					parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
					parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
				}
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
				left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function () {
			return this.map(function () {
				var offsetParent = this.offsetParent;

				while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
		var top = "pageYOffset" === prop;

		jQuery.fn[method] = function (val) {
			return access(this, function (elem, method, val) {

				// Coalesce documents and windows
				var win;
				if (isWindow(elem)) {
					win = elem;
				} else if (elem.nodeType === 9) {
					win = elem.defaultView;
				}

				if (val === undefined) {
					return win ? win[prop] : elem[method];
				}

				if (win) {
					win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
				} else {
					elem[method] = val;
				}
			}, method, val, arguments.length);
		};
	});

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top", "left"], function (i, prop) {
		jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
			if (computed) {
				computed = curCSS(elem, prop);

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
			}
		});
	});

	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
		jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[funcName] = function (margin, value) {
				var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
				    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

				return access(this, function (elem, type, value) {
					var doc;

					if (isWindow(elem)) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
					}

					// Get document width or height
					if (elem.nodeType === 9) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
					}

					return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css(elem, type, extra) :

					// Set width or height on the element
					jQuery.style(elem, type, value, extra);
				}, type, chainable ? margin : undefined, chainable);
			};
		});
	});

	jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {

		// Handle event binding
		jQuery.fn[name] = function (data, fn) {
			return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
		};
	});

	jQuery.fn.extend({
		hover: function (fnOver, fnOut) {
			return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
		}
	});

	jQuery.fn.extend({

		bind: function (types, data, fn) {
			return this.on(types, null, data, fn);
		},
		unbind: function (types, fn) {
			return this.off(types, null, fn);
		},

		delegate: function (selector, types, data, fn) {
			return this.on(types, selector, data, fn);
		},
		undelegate: function (selector, types, fn) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
		}
	});

	// Bind a function to a context, optionally partially applying any
	// arguments.
	// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
	// However, it is not slated for removal any time soon
	jQuery.proxy = function (fn, context) {
		var tmp, args, proxy;

		if (typeof context === "string") {
			tmp = fn[context];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if (!isFunction(fn)) {
			return undefined;
		}

		// Simulated bind
		args = slice.call(arguments, 2);
		proxy = function () {
			return fn.apply(context || this, args.concat(slice.call(arguments)));
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	};

	jQuery.holdReady = function (hold) {
		if (hold) {
			jQuery.readyWait++;
		} else {
			jQuery.ready(true);
		}
	};
	jQuery.isArray = Array.isArray;
	jQuery.parseJSON = JSON.parse;
	jQuery.nodeName = nodeName;
	jQuery.isFunction = isFunction;
	jQuery.isWindow = isWindow;
	jQuery.camelCase = camelCase;
	jQuery.type = toType;

	jQuery.now = Date.now;

	jQuery.isNumeric = function (obj) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type(obj);
		return (type === "number" || type === "string") &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN(obj - parseFloat(obj));
	};

	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ("function" === "function" && true) {
		System.registerDynamic("npm:jquery@3.3.1/dist/jquery.js", [], false, function ($__require, $__exports, $__module) {
			return (function () {
				return jQuery;
			}).call(this);
		});
	}

	var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,


	// Map over the $ in case of overwrite
	_$ = window.$;

	jQuery.noConflict = function (deep) {
		if (window.$ === jQuery) {
			window.$ = _$;
		}

		if (deep && window.jQuery === jQuery) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if (!noGlobal) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
});
System.register('theatlantic/js/constants/globals.js', ['jquery'], function (_export, _context) {
  "use strict";

  var $, $window, $document, $html, $head, $body;
  return {
    setters: [function (_jquery) {
      $ = _jquery.default;
    }],
    execute: function () {
      _export('$window', $window = $(window));

      _export('$window', $window);

      _export('$document', $document = $(document));

      _export('$document', $document);

      _export('$html', $html = $(document.documentElement));

      _export('$html', $html);

      _export('$head', $head = $('head'));

      _export('$head', $head);

      _export('$body', $body = $('body'));

      _export('$body', $body);

      _export('$', $);
    }
  };
});
System.register('theatlantic/js/constants/preload.js', ['vendorConfig'], function (_export, _context) {
  "use strict";

  var gtm, analytics;
  return {
    setters: [function (_vendorConfig) {
      gtm = _vendorConfig.gtm;
    }],
    execute: function () {
      _export('analytics', analytics = ['https://www.googletagmanager.com/gtm.js?id=' + gtm, 'https://www.google-analytics.com/analytics.js', 'https://www.google-analytics.com/plugins/ua/linkid.js']);

      _export('analytics', analytics);
    }
  };
});
System.register('theatlantic/js/utils/helpers.js', [], function (_export, _context) {
  "use strict";

  var ns;


  /**
   * A helper function for running an event handler once,
   * similar to jQuery's `.one()`
   * @param {Element}  el    The element to attach the handler to
   * @param {String}   type  The event to listen for
   * @param {Function} cb    Function to run once on the event
   * @return {void}
   */
  function once(el, type, cb) {
    var eventHandler = function eventHandler(e) {
      el.removeEventListener(e.type, eventHandler);
      return cb.call(el, e);
    };

    if (el) {
      el.addEventListener(type, eventHandler);
    }
  }

  _export('once', once);

  return {
    setters: [],
    execute: function () {
      ns = 'atl:helpers';


      performance.mark(ns + '_loaded');
    }
  };
});
System.register('theatlantic/js/components/bottom-persistent-ad.js', ['../constants/url', '../utils/log', '../utils/helpers', '../utils/device'], function (_export, _context) {
  "use strict";

  var disable, Log, once, getDeviceType, ns, log, hiddenModifier;


  /**
   * Initialize the bottom persistent ad that we all love so much 😍
   */
  function initBottomPersistent() {
    log('initBottomPersistent');

    var bottomPersistentWrapper = document.querySelector('.js-bottom-persistent-ad');
    if (!bottomPersistentWrapper) {
      return; // Component is not present.
    }

    var bottomPersistent = bottomPersistentWrapper.querySelector('.js-bottom-persistent');
    var close = bottomPersistentWrapper.querySelector('.js-bottom-persistent-ad__button');

    function closeBottomPersistent() {
      log('close bottom persistent?');
      requestAnimationFrame(function () {
        bottomPersistentWrapper.classList.add(hiddenModifier);
      });
    }

    function showBottomPersistent() {
      log('getting to show bottom persistent?');
      requestAnimationFrame(function () {
        bottomPersistentWrapper.classList.remove(hiddenModifier);
      });
    }

    function removeDeferred() {
      log('removing deferred attribute from bottomPersistent');
      bottomPersistent.removeAttribute('defer');
    }

    once(window, 'scroll', removeDeferred);

    // Don't defer the ad on desktop. We're able do
    // this on mobile by increasing the prebid timeout,
    // which would not make sense on bigger screens.
    if (getDeviceType() === 'desktop') {
      removeDeferred();
    }

    bottomPersistent.addEventListener('ad-loaded', showBottomPersistent);
    bottomPersistent.addEventListener('viewable-impression', function () {
      setTimeout(function () {
        log('are we getting here?!');
        once(window, 'scroll', closeBottomPersistent);
      }, 10000);
    });

    if (close) {
      close.addEventListener('click', closeBottomPersistent);
    }
  }

  return {
    setters: [function (_constantsUrl) {
      disable = _constantsUrl.disable;
    }, function (_utilsLog) {
      Log = _utilsLog.Log;
    }, function (_utilsHelpers) {
      once = _utilsHelpers.once;
    }, function (_utilsDevice) {
      getDeviceType = _utilsDevice.getDeviceType;
    }],
    execute: function () {
      ns = 'atl:bottom-persistent-ad';
      log = Log(ns);
      hiddenModifier = 'c-bottom-persistent-ad--hidden';
      if (disable.indexOf('bottom-persistent-ad') === -1) {
        initBottomPersistent();
      }
    }
  };
});
System.register("theatlantic/scss/components/ad.scss", [], function() { return { setters: [], execute: function() {} } });

System.registerDynamic("github:fdintino/plugin-sass@0.7.0.json", [], true, function() {
  return {
    "main": "index.js"
  };
});

System.register("theatlantic/scss/components/bottom-persistent-ad.scss", [], function() { return { setters: [], execute: function() {} } });

System.register('theatlantic/js/utils/ads/scroll.js', ['../log', '../user', '../../constants/url', '../loaders'], function (_export, _context) {
  "use strict";

  var Log, isScrollSubscriber, disable, script, ns, log;
  return {
    setters: [function (_log) {
      Log = _log.Log;
    }, function (_user) {
      isScrollSubscriber = _user.isScrollSubscriber;
    }, function (_constantsUrl) {
      disable = _constantsUrl.disable;
    }, function (_loaders) {
      script = _loaders.script;
    }],
    execute: function () {
      /**
       * Scroll
       * @module utils/ads/scroll
       */
      if (disable.indexOf('ads') === -1) {
        ns = 'atl:scroll';
        log = Log(ns);


        performance.mark(ns + '_loaded');

        /**
         * Creates the global Scroll object and the Scroll.do method for queueing Scroll commands.
         * @see https://developer.scroll.com/commands
         */
        (function (a, c, d, e) {
          if (!a[c]) {
            var b = a[c] = {};
            b[d] = [];
            b[e] = function (a) {
              b[d].push(a);
            };
          }
        })(window, 'Scroll', '_q', 'do');

        /**
         * Creates the Scroll configuration object.
         * @see https://developer.scroll.com/config
         */
        window.Scroll.config = {
          orientation: 'bottom',
          detected: isScrollSubscriber()
        };

        performance.mark(ns + ':requested');

        script('https://static.scroll.com/js/scroll.js').then(function () {
          return performance.mark(ns + ':loaded');
        }).catch(function (err) {
          return log.error(err);
        });
      }
    }
  };
});
System.register('theatlantic/js/constants/preconnect.js', [], function (_export, _context) {
  "use strict";

  var ads;
  return {
    setters: [],
    execute: function () {
      _export('ads', ads = ['https://z.moatads.com', 'https://www.googletagservices.com', 'https://c.amazon-adsystem.com']);

      _export('ads', ads);
    }
  };
});
System.register("theatlantic/js/utils/random.js", [], function (_export, _context) {
  "use strict";

  /**
   * Random with min and max.
   * Stolen from underscore.
   *
   * @param      {number}  min     The minimum
   * @param      {number}  max     The maximum
   * @return     {number}  A random number
   */
  function random() {
    var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

    return min + Math.floor(Math.random() * (max - min + 1));
  }

  _export("random", random);

  return {
    setters: [],
    execute: function () {}
  };
});
System.register('theatlantic/js/utils/loaders.js', [], function (_export, _context) {
  "use strict";

  /**
   * Dynamic content loaders like images and link tags!
   * @module utils/loaders
   */

  /**
   * Dynamically load a javascript tag.
   *
   * @example
   * script('some-script.js').then(doStuff);
   *
   * @param  {String}  src The script source
   * @return {Promise}     A promise that resolves/rejects based on script status
   */
  function script(src) {
    return new Promise(function (resolve, reject) {
      var el = document.createElement('script');

      el.addEventListener('load', function handleLoad(e) {
        el.removeEventListener('load', handleLoad);
        resolve(e);
      });

      el.addEventListener('error', function handleError(e) {
        el.removeEventListener('error', handleError);
        reject(e);
      });

      el.src = src;
      el.async = true;
      document.body.appendChild(el);
    });
  }

  /**
   * Dynamically create an image tag. Useful for pixels!
   *
   * @example
   * image('some-url.gif').then(doStuff);
   *
   * @param  {String}  src The image source
   * @return {Promise}     A promise that resolves/rejects based on image status
   */

  _export('script', script);

  function image(src) {
    return new Promise(function (resolve, reject) {
      var img = new Image();

      img.addEventListener('load', function handleImageLoad(e) {
        img.removeEventListener('load', handleImageLoad);
        resolve(e);
      });

      img.addEventListener('error', function handleImageError(e) {
        img.removeEventListener('error', handleImageError);
        reject(e);
      });

      img.src = src;
    });
  }

  /**
   * Dynamically create a `link` tag and add it to the DOM
   *
   * @example
   * link({href: 'some-link', as: 'script', rel: 'preload'});
   *
   * @example
   * link({href: 'some-domain', rel: 'dns-prefetch preconnect', crossOrigin: 'anonymous'})
   *
   * @param  {Object} attributes The `link` tag attributes
   */

  _export('image', image);

  function link(attributes) {
    var preloadLink = document.createElement('link');
    Object.keys(attributes).map(function (attr) {
      return preloadLink[attr] = attributes[attr];
    });
    document.head.appendChild(preloadLink);
  }
  _export('link', link);

  return {
    setters: [],
    execute: function () {}
  };
});
System.register('theatlantic/js/utils/ads.js', ['npm:systemjs-plugin-babel@0.0.25/regenerator-runtime.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/asyncToGenerator.js', 'theatlantic/js/components/bottom-persistent-ad', 'theatlantic/scss/components/ad.scss', 'theatlantic/scss/components/bottom-persistent-ad.scss', './ads/scroll', 'adsConfig', '../constants/preconnect', '../constants/url', './log', './random', './loaders', './user', '../paywall/paywall', 'pageInfo'], function (_export, _context2) {
  "use strict";

  var _regeneratorRuntime, _asyncToGenerator, adsConfig, adsPreconnect, disable, Log, random, link, getEntitlementsList, meter, pageInfo, loadAds, ns, log, ab_test_group, paywallDisableAds;

  /**
   * On article pages (that have a 'blah' sectioned structure)
   * the right rail can become taller than the first section and
   * create trapped whitespace.
   *
   * Prevent this by switching the ad to 300x250 only on short
   * top sectioned articles.
   */
  function HACK_protect_rail_height_balance(nopromo) {
    var firstBlah = document.querySelector('.blah');
    if (!firstBlah) {
      return;
    }

    var content = firstBlah.querySelector('.l-article__container__container');
    var adSizeSet = firstBlah.querySelector('.l-rail gpt-sizeset[sizes="rail"]');

    var _content$getBoundingC = content.getBoundingClientRect(),
        height = _content$getBoundingC.height;

    // If we will serve a house ad, we can expect it will get a little taller


    if (!nopromo) {
      height += 150;
    }

    // This ad may only be a box
    if (height < 1020) {
      adSizeSet.setAttribute('sizes', '[[300, 250]]');
    }
  }
  return {
    setters: [function (_npmSystemjsPluginBabel0025RegeneratorRuntimeJs) {
      _regeneratorRuntime = _npmSystemjsPluginBabel0025RegeneratorRuntimeJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersAsyncToGeneratorJs) {
      _asyncToGenerator = _npmSystemjsPluginBabel0025BabelHelpersAsyncToGeneratorJs.default;
    }, function (_theatlanticJsComponentsBottomPersistentAd) {}, function (_theatlanticScssComponentsAdScss) {}, function (_theatlanticScssComponentsBottomPersistentAdScss) {}, function (_adsScroll) {}, function (_adsConfig) {
      adsConfig = _adsConfig;
    }, function (_constantsPreconnect) {
      adsPreconnect = _constantsPreconnect.ads;
    }, function (_constantsUrl) {
      disable = _constantsUrl.disable;
    }, function (_log) {
      Log = _log.Log;
    }, function (_random) {
      random = _random.random;
    }, function (_loaders) {
      link = _loaders.link;
    }, function (_user) {
      getEntitlementsList = _user.getEntitlementsList;
    }, function (_paywallPaywall) {
      meter = _paywallPaywall.meter;
    }, function (_pageInfo) {
      pageInfo = _pageInfo;
    }],
    execute: function () {
      loadAds = function () {
        var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
          var config, _ref2, Controller;

          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  config = Object.assign({}, adsConfig);

                  // There's no ad config... 👋

                  if (!(Object.keys(config).length === 0)) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt('return');

                case 3:

                  // Preload third party deps while ads.js is loading.
                  adsPreconnect.map(function (item) {
                    return link({
                      href: item,
                      rel: 'preconnect dns-prefetch',
                      crossOrigin: 'anonymous'
                    });
                  });

                  HACK_protect_rail_height_balance(config.globals.nopromo);

                  _context.prev = 5;

                  config.globals.user = getEntitlementsList();
                  config.globals.abt = ab_test_group;

                  _context.next = 10;
                  return System.import('adsjs');

                case 10:
                  _ref2 = _context.sent;
                  Controller = _ref2.Controller;

                  new Controller(adsConfig);
                  _context.next = 20;
                  break;

                case 15:
                  _context.prev = 15;
                  _context.t0 = _context['catch'](5);

                  log.error(_context.t0);
                  _context.next = 20;
                  return System.import('theatlantic/js/components/house-creative-fallback');

                case 20:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[5, 15]]);
        }));

        return function loadAds() {
          return _ref.apply(this, arguments);
        };
      }();

      ns = 'atl:ads';
      log = Log(ns);


      performance.mark(ns + '_loaded');

      _export('ab_test_group', ab_test_group = random(1, 100));

      _export('ab_test_group', ab_test_group);

      paywallDisableAds = meter.hasHitCap() && pageInfo.show_nudges && getEntitlementsList().indexOf('paymeter_access') === -1;


      if (disable.indexOf('ads') === -1 && !paywallDisableAds) {
        loadAds();
      }
    }
  };
});
System.register('theatlantic/js/utils/analytics.js', ['vendorConfig', './loaders', './log', '../constants/url', '../constants/preload', './ads', '../globals/dataLayer', 'js-cookie', 'pageInfo'], function (_export, _context) {
  "use strict";

  var gtm, link, script, Log, disable, analyticsPreload, ab_test_group, dataLayer, cookie, pageInfo, ns, log, isEnabled;


  /**
   * Load GTM if not flagged as disabled
   */
  function loadGTM() {
    log('loadGTM');

    dataLayer.push({
      'gtm.start': Date.now(),
      event: 'gtm.js'
    });

    // Push AB test information into GA
    dataLayer.push({
      abt_experiment: pageInfo.request.experiment || null,
      abt_value: cookie.get('atltestbucketv2') || null
    });

    // Data used to track ad experiments
    dataLayer.push({
      // Leftpad the string, per Evan's request
      ads_ab_testing_bucket: ('000' + ab_test_group).slice(-3)
    });

    var ns = 'gtm';
    performance.mark(ns + ':requested');

    script('https://www.googletagmanager.com/gtm.js?id=' + gtm).then(function () {
      return performance.mark(ns + ':loaded');
    }).catch(function (err) {
      return log.error(err);
    });
  }

  return {
    setters: [function (_vendorConfig) {
      gtm = _vendorConfig.gtm;
    }, function (_loaders) {
      link = _loaders.link;
      script = _loaders.script;
    }, function (_log) {
      Log = _log.Log;
    }, function (_constantsUrl) {
      disable = _constantsUrl.disable;
    }, function (_constantsPreload) {
      analyticsPreload = _constantsPreload.analytics;
    }, function (_ads) {
      ab_test_group = _ads.ab_test_group;
    }, function (_globalsDataLayer) {
      dataLayer = _globalsDataLayer.default;
    }, function (_jsCookie) {
      cookie = _jsCookie.default;
    }, function (_pageInfo) {
      pageInfo = _pageInfo;
    }],
    execute: function () {
      ns = 'atl:analytics';
      log = Log(ns);


      performance.mark(ns + '_loaded');

      /**
       * Allow analytics to be disabled through a querystring or if being viewed
       * through a preview url
       * @type {Boolean}
       */
      isEnabled = disable.indexOf('analytics') === -1;
      if (isEnabled) {
        analyticsPreload.map(function (href) {
          return link({
            href: href,
            as: 'script',
            rel: 'preload'
          });
        });

        link({
          href: 'https://ampcid.google.com',
          rel: 'dns-prefetch preconnect'
        });

        loadGTM();
      }
    }
  };
});
System.registerDynamic('github:theatlantic/lazysizes@4.0.5/lazysizes.js', [], true, function ($__require, exports, module) {
	var global = this || self,
	    GLOBAL = global;
	(function (window, factory) {
		var lazySizes = factory(window, window.document);
		window.lazySizes = lazySizes;
		if (typeof module == 'object' && module.exports) {
			module.exports = lazySizes;
		}
	})(window, function l(window, document) {
		'use strict';
		/*jshint eqnull:true */

		if (!document.getElementsByClassName) {
			return;
		}

		var lazysizes, lazySizesConfig;

		var docElem = document.documentElement;

		var Date = window.Date;

		var supportPicture = window.HTMLPictureElement;

		var _addEventListener = 'addEventListener';

		var _getAttribute = 'getAttribute';

		var addEventListener = window[_addEventListener];

		var setTimeout = window.setTimeout;

		var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

		var requestIdleCallback = window.requestIdleCallback;

		var regPicture = /^picture$/i;

		var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

		var regClassCache = {};

		var forEach = Array.prototype.forEach;

		var hasClass = function (ele, cls) {
			if (!regClassCache[cls]) {
				regClassCache[cls] = new RegExp('(\\s|^)' + cls + '(\\s|$)');
			}
			return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
		};

		var addClass = function (ele, cls) {
			if (!hasClass(ele, cls)) {
				ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
			}
		};

		var removeClass = function (ele, cls) {
			var reg;
			if (reg = hasClass(ele, cls)) {
				ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
			}
		};

		var addRemoveLoadEvents = function (dom, fn, add) {
			var action = add ? _addEventListener : 'removeEventListener';
			if (add) {
				addRemoveLoadEvents(dom, fn);
			}
			loadEvents.forEach(function (evt) {
				dom[action](evt, fn);
			});
		};

		var triggerEvent = function (elem, name, detail, noBubbles, noCancelable) {
			var event = document.createEvent('CustomEvent');

			if (!detail) {
				detail = {};
			}

			detail.instance = lazysizes;

			event.initCustomEvent(name, !noBubbles, !noCancelable, detail);

			elem.dispatchEvent(event);
			return event;
		};

		var updatePolyfill = function (el, full) {
			var polyfill;
			if (!supportPicture && (polyfill = window.picturefill || lazySizesConfig.pf)) {
				polyfill({ reevaluate: true, elements: [el] });
			} else if (full && full.src) {
				el.src = full.src;
			}
		};

		var getCSS = function (elem, style) {
			return (getComputedStyle(elem, null) || {})[style];
		};

		var getWidth = function (elem, parent, width) {
			width = width || elem.offsetWidth;

			while (width < lazySizesConfig.minSize && parent && !elem._lazysizesWidth) {
				width = parent.offsetWidth;
				parent = parent.parentNode;
			}

			return width;
		};

		var rAF = function () {
			var running, waiting;
			var firstFns = [];
			var secondFns = [];
			var fns = firstFns;

			var run = function () {
				var runFns = fns;

				fns = firstFns.length ? secondFns : firstFns;

				running = true;
				waiting = false;

				while (runFns.length) {
					runFns.shift()();
				}

				running = false;
			};

			var rafBatch = function (fn, queue) {
				if (running && !queue) {
					fn.apply(this, arguments);
				} else {
					fns.push(fn);

					if (!waiting) {
						waiting = true;
						(document.hidden ? setTimeout : requestAnimationFrame)(run);
					}
				}
			};

			rafBatch._lsFlush = run;

			return rafBatch;
		}();

		var rAFIt = function (fn, simple) {
			return simple ? function () {
				rAF(fn);
			} : function () {
				var that = this;
				var args = arguments;
				rAF(function () {
					fn.apply(that, args);
				});
			};
		};

		var throttle = function (fn) {
			var running;
			var lastTime = 0;
			var gDelay = lazySizesConfig.throttleDelay;
			var rICTimeout = lazySizesConfig.ricTimeout;
			var run = function () {
				running = false;
				lastTime = Date.now();
				fn();
			};
			var idleCallback = requestIdleCallback && rICTimeout > 49 ? function () {
				requestIdleCallback(run, { timeout: rICTimeout });

				if (rICTimeout !== lazySizesConfig.ricTimeout) {
					rICTimeout = lazySizesConfig.ricTimeout;
				}
			} : rAFIt(function () {
				setTimeout(run);
			}, true);

			return function (isPriority) {
				var delay;

				if (isPriority = isPriority === true) {
					rICTimeout = 33;
				}

				if (running) {
					return;
				}

				running = true;

				delay = gDelay - (Date.now() - lastTime);

				if (delay < 0) {
					delay = 0;
				}

				if (isPriority || delay < 9) {
					idleCallback();
				} else {
					setTimeout(idleCallback, delay);
				}
			};
		};

		//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
		var debounce = function (func) {
			var timeout, timestamp;
			var wait = 99;
			var run = function () {
				timeout = null;
				func();
			};
			var later = function () {
				var last = Date.now() - timestamp;

				if (last < wait) {
					setTimeout(later, wait - last);
				} else {
					(requestIdleCallback || run)(run);
				}
			};

			return function () {
				timestamp = Date.now();

				if (!timeout) {
					timeout = setTimeout(later, wait);
				}
			};
		};

		(function () {
			var prop;

			var lazySizesDefaults = {
				lazyClass: 'lazyload',
				loadedClass: 'lazyloaded',
				loadingClass: 'lazyloading',
				preloadClass: 'lazypreload',
				errorClass: 'lazyerror',
				//strictClass: 'lazystrict',
				autosizesClass: 'lazyautosizes',
				srcAttr: 'data-src',
				srcsetAttr: 'data-srcset',
				sizesAttr: 'data-sizes',
				//preloadAfterLoad: false,
				minSize: 40,
				customMedia: {},
				init: true,
				expFactor: 1.5,
				hFac: 0.8,
				loadMode: 2,
				loadHidden: true,
				ricTimeout: 0,
				throttleDelay: 125
			};

			lazySizesConfig = window.lazySizesConfig || window.lazysizesConfig || {};

			for (prop in lazySizesDefaults) {
				if (!(prop in lazySizesConfig)) {
					lazySizesConfig[prop] = lazySizesDefaults[prop];
				}
			}

			window.lazySizesConfig = lazySizesConfig;

			setTimeout(function () {
				if (lazySizesConfig.init) {
					init();
				}
			});
		})();

		var loader = function () {
			var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

			var eLvW, elvH, eLtop, eLleft, eLright, eLbottom;

			var defaultExpand, preloadExpand, hFac;

			var regImg = /^img$/i;
			var regIframe = /^iframe$/i;

			var supportScroll = 'onscroll' in window && !/glebot/.test(navigator.userAgent);

			var shrinkExpand = 0;
			var currentExpand = 0;

			var isLoading = 0;
			var lowRuns = -1;

			var resetPreloading = function (e) {
				isLoading--;
				if (e && e.target) {
					addRemoveLoadEvents(e.target, resetPreloading);
				}

				if (!e || isLoading < 0 || !e.target) {
					isLoading = 0;
				}
			};

			var isNestedVisible = function (elem, elemExpand) {
				var outerRect;
				var parent = elem;
				var visible = getCSS(document.body, 'visibility') == 'hidden' || getCSS(elem, 'visibility') != 'hidden';

				eLtop -= elemExpand;
				eLbottom += elemExpand;
				eLleft -= elemExpand;
				eLright += elemExpand;

				while (visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem) {
					visible = (getCSS(parent, 'opacity') || 1) > 0;

					if (visible && getCSS(parent, 'overflow') != 'visible') {
						outerRect = parent.getBoundingClientRect();
						visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1;
					}
				}

				return visible;
			};

			var checkElements = function () {
				var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal;

				var lazyloadElems = lazysizes.elements;

				if ((loadMode = lazySizesConfig.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {

					i = 0;

					lowRuns++;

					if (preloadExpand == null) {
						if (!('expand' in lazySizesConfig)) {
							lazySizesConfig.expand = docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370;
						}

						defaultExpand = lazySizesConfig.expand;
						preloadExpand = defaultExpand * lazySizesConfig.expFactor;
					}

					if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden) {
						currentExpand = preloadExpand;
						lowRuns = 0;
					} else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
						currentExpand = defaultExpand;
					} else {
						currentExpand = shrinkExpand;
					}

					for (; i < eLlen; i++) {

						if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) {
							continue;
						}

						if (!supportScroll) {
							unveilElement(lazyloadElems[i]);continue;
						}

						if (!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)) {
							elemExpand = currentExpand;
						}

						if (beforeExpandVal !== elemExpand) {
							eLvW = innerWidth + elemExpand * hFac;
							elvH = innerHeight + elemExpand;
							elemNegativeExpand = elemExpand * -1;
							beforeExpandVal = elemExpand;
						}

						rect = lazyloadElems[i].getBoundingClientRect();

						if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (lazySizesConfig.loadHidden || getCSS(lazyloadElems[i], 'visibility') != 'hidden') && (isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4) || isNestedVisible(lazyloadElems[i], elemExpand))) {
							unveilElement(lazyloadElems[i]);
							loadedSomething = true;
							if (isLoading > 9) {
								break;
							}
						} else if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesConfig.preloadAfterLoad) && (preloadElems[0] || !elemExpandVal && (eLbottom || eLright || eLleft || eLtop || lazyloadElems[i][_getAttribute](lazySizesConfig.sizesAttr) != 'auto'))) {
							autoLoadElem = preloadElems[0] || lazyloadElems[i];
						}
					}

					if (autoLoadElem && !loadedSomething) {
						unveilElement(autoLoadElem);
					}
				}
			};

			var throttledCheckElements = throttle(checkElements);

			var switchLoadingClass = function (e) {
				addClass(e.target, lazySizesConfig.loadedClass);
				removeClass(e.target, lazySizesConfig.loadingClass);
				addRemoveLoadEvents(e.target, rafSwitchLoadingClass);
				triggerEvent(e.target, 'lazyloaded');
			};
			var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
			var rafSwitchLoadingClass = function (e) {
				rafedSwitchLoadingClass({ target: e.target });
			};

			var changeIframeSrc = function (elem, src) {
				try {
					elem.contentWindow.location.replace(src);
				} catch (e) {
					elem.src = src;
				}
			};

			var handleSources = function (source) {
				var customMedia;

				var sourceSrcset = source[_getAttribute](lazySizesConfig.srcsetAttr);

				if (customMedia = lazySizesConfig.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) {
					source.setAttribute('media', customMedia);
				}

				if (sourceSrcset) {
					source.setAttribute('srcset', sourceSrcset);
				}
			};

			var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg) {
				var src, srcset, parent, isPicture, event, firesLoad;

				if (!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented) {

					if (sizes) {
						if (isAuto) {
							addClass(elem, lazySizesConfig.autosizesClass);
						} else {
							elem.setAttribute('sizes', sizes);
						}
					}

					srcset = elem[_getAttribute](lazySizesConfig.srcsetAttr);
					src = elem[_getAttribute](lazySizesConfig.srcAttr);

					if (isImg) {
						parent = elem.parentNode;
						isPicture = parent && regPicture.test(parent.nodeName || '');
					}

					firesLoad = detail.firesLoad || 'src' in elem && (srcset || src || isPicture);

					event = { target: elem };

					if (firesLoad) {
						addRemoveLoadEvents(elem, resetPreloading, true);
						clearTimeout(resetPreloadingTimer);
						resetPreloadingTimer = setTimeout(resetPreloading, 2500);

						addClass(elem, lazySizesConfig.loadingClass);
						addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
					}

					if (isPicture) {
						forEach.call(parent.getElementsByTagName('source'), handleSources);
					}

					if (srcset) {
						elem.setAttribute('srcset', srcset);
					} else if (src && !isPicture) {
						if (regIframe.test(elem.nodeName)) {
							changeIframeSrc(elem, src);
						} else {
							elem.src = src;
						}
					}

					if (isImg && (srcset || isPicture)) {
						updatePolyfill(elem, { src: src });
					}
				}

				if (elem._lazyRace) {
					delete elem._lazyRace;
				}
				removeClass(elem, lazySizesConfig.lazyClass);

				rAF(function () {
					if (!firesLoad || elem.complete && elem.naturalWidth > 1) {
						if (firesLoad) {
							resetPreloading(event);
						} else {
							isLoading--;
						}
						switchLoadingClass(event);
					}
				}, true);
			});

			var unveilElement = function (elem) {
				var detail;

				var isImg = regImg.test(elem.nodeName);

				//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
				var sizes = isImg && (elem[_getAttribute](lazySizesConfig.sizesAttr) || elem[_getAttribute]('sizes'));
				var isAuto = sizes == 'auto';

				if ((isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesConfig.errorClass) && hasClass(elem, lazySizesConfig.lazyClass)) {
					return;
				}

				detail = triggerEvent(elem, 'lazyunveilread').detail;

				if (isAuto) {
					autoSizer.updateElem(elem, true, elem.offsetWidth);
				}

				elem._lazyRace = true;
				isLoading++;

				lazyUnveil(elem, detail, isAuto, sizes, isImg);
			};

			var onload = function () {
				if (isCompleted) {
					return;
				}
				if (Date.now() - started < 999) {
					setTimeout(onload, 999);
					return;
				}
				var afterScroll = debounce(function () {
					lazySizesConfig.loadMode = 3;
					throttledCheckElements();
				});

				isCompleted = true;

				lazySizesConfig.loadMode = 3;

				throttledCheckElements();

				addEventListener('scroll', function () {
					if (lazySizesConfig.loadMode == 3) {
						lazySizesConfig.loadMode = 2;
					}
					afterScroll();
				}, true);
			};

			return {
				_: function () {
					started = Date.now();

					lazysizes.elements = document.getElementsByClassName(lazySizesConfig.lazyClass);
					preloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass + ' ' + lazySizesConfig.preloadClass);
					hFac = lazySizesConfig.hFac;

					addEventListener('scroll', throttledCheckElements, true);

					addEventListener('resize', throttledCheckElements, true);

					if (window.MutationObserver) {
						new MutationObserver(throttledCheckElements).observe(docElem, { childList: true, subtree: true, attributes: true });
					} else {
						docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
						docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
						setInterval(throttledCheckElements, 999);
					}

					addEventListener('hashchange', throttledCheckElements, true);

					//, 'fullscreenchange'
					['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function (name) {
						document[_addEventListener](name, throttledCheckElements, true);
					});

					if (/d$|^c/.test(document.readyState)) {
						onload();
					} else {
						addEventListener('load', onload);
						document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
						setTimeout(onload, 20000);
					}

					if (lazysizes.elements.length) {
						checkElements();
						rAF._lsFlush();
					} else {
						throttledCheckElements();
					}
				},
				checkElems: throttledCheckElements,
				unveil: unveilElement
			};
		}();

		var autoSizer = function () {
			var autosizesElems;

			var sizeElement = rAFIt(function (elem, parent, event, width) {
				var sources, i, len;
				elem._lazysizesWidth = width;
				width += 'px';

				elem.setAttribute('sizes', width);

				if (regPicture.test(parent.nodeName || '')) {
					sources = parent.getElementsByTagName('source');
					for (i = 0, len = sources.length; i < len; i++) {
						sources[i].setAttribute('sizes', width);
					}
				}

				if (!event.detail.dataAttr) {
					updatePolyfill(elem, event.detail);
				}
			});
			var getSizeElement = function (elem, dataAttr, width) {
				var event;
				var parent = elem.parentNode;

				if (parent) {
					width = getWidth(elem, parent, width);
					event = triggerEvent(elem, 'lazybeforesizes', { width: width, dataAttr: !!dataAttr });

					if (!event.defaultPrevented) {
						width = event.detail.width;

						if (width && width !== elem._lazysizesWidth) {
							sizeElement(elem, parent, event, width);
						}
					}
				}
			};

			var updateElementsSizes = function () {
				var i;
				var len = autosizesElems.length;
				if (len) {
					i = 0;

					for (; i < len; i++) {
						getSizeElement(autosizesElems[i]);
					}
				}
			};

			var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

			return {
				_: function () {
					autosizesElems = document.getElementsByClassName(lazySizesConfig.autosizesClass);
					addEventListener('resize', debouncedUpdateElementsSizes);
				},
				checkElems: debouncedUpdateElementsSizes,
				updateElem: getSizeElement
			};
		}();

		var init = function () {
			if (!init.i) {
				init.i = true;
				autoSizer._();
				loader._();
			}
		};

		lazysizes = {
			cfg: lazySizesConfig,
			autoSizer: autoSizer,
			loader: loader,
			init: init,
			uP: updatePolyfill,
			aC: addClass,
			rC: removeClass,
			hC: hasClass,
			fire: triggerEvent,
			gW: getWidth,
			rAF: rAF
		};

		return lazysizes;
	});
});
System.registerDynamic("github:theatlantic/lazysizes@4.0.5.json", [], true, function() {
  return {
    "main": "lazysizes.js"
  };
});

System.registerDynamic('github:theatlantic/lazysizes@4.0.5/plugins/include/ls.include.js', ['lazysizes'], true, function ($__require, exports, module) {
	var global = this || self,
	    GLOBAL = global;
	/*
  This plugin extends lazySizes to lazyLoad and/or conditionally load content
  */

	(function (window, factory) {
		var globalInstall = function () {
			factory(window.lazySizes);
			window.removeEventListener('lazyunveilread', globalInstall, true);
		};

		factory = factory.bind(null, window, window.document);

		if (typeof module == 'object' && module.exports) {
			factory($__require('lazysizes'));
		} else if (window.lazySizes) {
			globalInstall();
		} else {
			window.addEventListener('lazyunveilread', globalInstall, true);
		}
	})(window, function (window, document, lazySizes) {
		/*jshint eqnull:true */
		'use strict';

		if (!document.getElementsByClassName) {
			return;
		}
		var config, includeConfig, baseContentElement, basePseudos;
		var regSplitCan = /\s*,+\s+/;
		var uniqueUrls = {};
		var regWhite = /\s+/;
		var regTypes = /^(amd|css|module)\:(.+)/i;
		var regUrlCan = /(.+)\s+(\(\s*(.+)\s*\))/;
		var regCleanPseudos = /['"]/g;
		var docElem = document.documentElement;
		var conditionalIncludes = document.getElementsByClassName('lazyconditionalinclude');

		var getStyles = function (element, pseudo) {
			var view = element.ownerDocument.defaultView;

			if (!view.opener) {
				view = window;
			}

			return view.getComputedStyle(element, pseudo || null) || { getPropertyValue: function () {}, isNull: true };
		};

		var queue = function () {
			var lowTreshold = 2;
			var highTreshold = 3;
			var queueThreshold = lowTreshold;
			var inProgress = 0;
			var priosInProgress = 0;
			var queue = [];
			var resetQueue = function () {
				var timer;
				var reset = function () {
					if (queue.length) {
						inProgress = 0;
						queue.d();
					}
				};

				return function () {
					clearTimeout(timer);
					timer = setTimeout(reset, 999);
				};
			}();

			return {
				q: function (element) {
					var isPrio = element.getAttribute('data-lazyqueue') == null;
					if (isPrio) {
						priosInProgress++;
						queueThreshold = highTreshold;
					}

					if (inProgress > queueThreshold) {
						queue[isPrio ? 'unshift' : 'push'](element);
					} else if (findLoadCandidate(element)) {
						inProgress++;
						resetQueue();
					}
				},
				d: function () {
					if (inProgress) {
						inProgress--;
					}
					if (priosInProgress > 0) {
						priosInProgress--;

						if (!priosInProgress) {
							queueThreshold = lowTreshold;
						}
					}

					if (inProgress > queueThreshold) {
						return;
					}

					while (queue.length) {
						if (findLoadCandidate(queue.shift())) {
							inProgress++;
							break;
						}
					}
					resetQueue();
				}
			};
		}();
		var refreshIncludes = function () {
			var timer;
			var run = function () {
				var i = 0;
				var len = conditionalIncludes.length;
				for (; i < len; i++) {
					if (!lazySizes.hC(conditionalIncludes[i], config.lazyClass) && findCandidate(conditionalIncludes[i])) {
						lazySizes.aC(conditionalIncludes[i], config.lazyClass);
					}
				}
			};
			return function (e) {
				clearTimeout(timer);
				basePseudos = null;
				timer = setTimeout(run, e.type == 'resize' ? 31 : 0);
			};
		}();

		config = lazySizes && lazySizes.cfg || window.lazySizesConfig;

		if (!config) {
			config = {};
			window.lazySizesConfig = config;
		}

		if (!config.include) {
			config.include = {};
		}

		includeConfig = config.include;

		if (!includeConfig.contentElement) {
			includeConfig.contentElement = 'html';
		}

		if (!includeConfig.conditions) {
			includeConfig.conditions = {};
		}

		if (!includeConfig.map) {
			includeConfig.map = {};
		}

		function addUrl(url) {
			/*jshint validthis:true */
			var match;
			if (match = url.match(regTypes)) {
				this.urls[match[1]] = includeConfig.map[match[2]] || match[2];
			} else {
				this.urls.include = includeConfig.map[url] || url;
			}
		}

		function parseCandidate(input) {
			var output, map, url;
			input = input.trim();

			input = includeConfig.map[input] || input;

			map = input.match(regUrlCan);

			if (map) {
				url = map[1];
				output = {
					condition: config.include.conditions[map[3]] || config.customMedia[map[3]] || map[2] || null,
					name: map[3]
				};
			} else {
				url = input;
				output = {
					condition: null,
					name: ''
				};
			}

			output.urls = {};

			(includeConfig.map[url] || url).split(regWhite).forEach(addUrl, output);

			if (!output.urls.include && output.urls.amd) {
				/*jshint validthis:true */
				this.saved = true;
				output.initial = this;
			}

			return output;
		}

		function getIncludeData(elem) {
			var len;
			var includeStr = elem.getAttribute('data-include') || '';
			var includeData = elem.lazyInclude;
			var initialContent;
			if (!includeData || includeData.str != includeStr || includeConfig.allowReload) {
				initialContent = { saved: false, content: null };
				includeData = {
					str: includeStr,
					candidates: (includeConfig.map[includeStr] || includeStr).split(regSplitCan).map(parseCandidate, initialContent)
				};

				if (!(len = includeData.candidates.length) || includeData.candidates[len - 1].condition) {
					initialContent.saved = true;

					includeData.candidates.push({
						urls: {},
						condition: null,
						name: 'initial',
						content: initialContent
					});
				} else if (initialContent.saved && includeData.candidates.length == 1) {
					initialContent.saved = false;
				}

				includeData.initialContent = initialContent;
				if (initialContent.saved) {
					initialContent.content = elem.innerHTML;
				}

				elem.lazyInclude = includeData;
				if (includeData.candidates.length > 1) {
					lazySizes.aC(elem, 'lazyconditionalinclude');
				} else {
					lazySizes.rC(elem, 'lazyconditionalinclude');
				}
			}
			return includeData;
		}

		function matchesCondition(elem, candidate) {
			var matches = !candidate.condition;

			if (candidate.condition) {
				createPseudoCondition();
				if (basePseudos[candidate.name]) {
					matches = true;
				} else if (window.matchMedia && typeof candidate.condition == 'string') {
					matches = (matchMedia(candidate.condition) || {}).matches;
				} else if (typeof candidate.condition == 'function') {
					matches = candidate.condition(elem, candidate);
				}
			}
			return matches;
		}

		function createPseudoCondition() {
			var cStyle;

			if (!basePseudos) {

				if (!baseContentElement) {
					baseContentElement = document.querySelector(includeConfig.contentElement);
				}

				if (baseContentElement) {
					cStyle = (getStyles(baseContentElement, ':after').getPropertyValue('content') || 'none').replace(regCleanPseudos, '');

					basePseudos = {};

					if (cStyle) {
						basePseudos[cStyle] = 1;
					}
					cStyle = (getStyles(baseContentElement, ':before').getPropertyValue('content') || 'none').replace(regCleanPseudos, '');
					if (cStyle) {
						basePseudos[cStyle] = 1;
					}
				} else {
					basePseudos = {};
				}
			}
		}

		function findCandidate(elem) {
			var i, candidate;
			var includeData = elem.lazyInclude;
			if (includeData && includeData.candidates) {
				for (i = 0; i < includeData.candidates.length; i++) {
					candidate = includeData.candidates[i];
					if (matchesCondition(elem, candidate)) {
						break;
					}
				}
			}
			if (!candidate || candidate == includeData.current) {
				candidate = null;
			}
			return candidate;
		}

		function loadInclude(detail, includeCallback) {
			var request = new XMLHttpRequest();

			request.addEventListener('readystatechange', function () {
				var DONE = this.DONE || 4;
				if (this.readyState === DONE) {

					includeCallback(request);
					request = null;
				}
			}, false);

			request.open.apply(request, detail.openArgs);
			request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
			if (detail.xhrModifier) {
				detail.xhrModifier(request, detail.candidate);
			}
			request.send(detail.sendData);
		}

		function loadRequire(urls, callback) {
			urls = urls.split('|,|');

			var last = urls.length - 1;

			if (lazySizes.cfg.requireJs) {
				lazySizes.cfg.requireJs(urls, callback);
			} else {
				urls.forEach(function (url, index) {
					loadStyleScript(url, index == last ? callback : null);
				});
			}
		}

		function loadSystemJs(url, callback) {
			if (lazySizes.cfg.systemJs) {
				lazySizes.cfg.systemJs(url, callback);
			} else {
				loadStyleScript(url, callback);
			}
		}

		function loadStyleScript(url, isScript, cb) {
			if (!uniqueUrls[url]) {
				var elem = document.createElement(isScript === true ? 'script' : 'link');
				var insertElem = document.getElementsByTagName('script')[0];

				if (isScript) {
					elem.src = url;
					elem.async = false;
				} else {
					elem.rel = 'stylesheet';
					elem.href = url;
				}
				insertElem.parentNode.insertBefore(elem, insertElem);
				uniqueUrls[url] = true;
				uniqueUrls[elem.href] = true;
			}
		}

		function loadStyles(urls) {
			urls = urls.split('|,|');
			urls.forEach(loadStyleScript);
		}

		function transformInclude(module) {
			if (module && typeof module.lazytransform == 'function') {
				/*jshint validthis:true */
				module.lazytransform(this);
			}
		}

		function unloadModule(module) {
			if (module && typeof module.lazyunload == 'function') {
				/*jshint validthis:true */
				module.lazyunload(this);
			}
		}

		function loadModule(module) {
			if (module && typeof module.lazyload == 'function') {
				/*jshint validthis:true */
				module.lazyload(this);
			}
		}

		function loadCandidate(elem, candidate) {
			var include, xhrObj, modules;
			var old = elem.lazyInclude.current || null;
			var detail = {
				candidate: candidate,
				openArgs: ['GET', candidate.urls.include, true],
				sendData: null,
				xhrModifier: null,
				content: candidate.content && candidate.content.content || candidate.content,
				oldCandidate: old
			};
			var event = lazySizes.fire(elem, 'lazyincludeload', detail);

			if (event.defaultPrevented) {
				queue.d();
				return;
			}

			include = function () {
				var event;
				var status = xhrObj.status;
				var content = xhrObj.content || xhrObj.responseText;
				var reset = !!(content == null && old && old.urls.include);
				var insert = true;
				if (elem.dataset.insert === 'false') {
					insert = false;
				}
				var detail = {
					candidate: candidate,
					content: content,
					text: xhrObj.responseText || xhrObj.content,
					response: xhrObj.response,
					xml: xhrObj.responseXML,
					isSuccess: 'status' in xhrObj ? status >= 200 && status < 300 || status === 304 : true,
					oldCandidate: old,
					insert: insert,
					resetHTML: reset
				};
				var moduleObj = { target: elem, details: detail, detail: detail };

				candidate.modules = modules;

				if (old && old.modules) {
					old.modules.forEach(unloadModule, moduleObj);
					old.modules = null;

					if (detail.resetHTML && detail.content == null && candidate.initial && candidate.initial.saved) {
						detail.content = candidate.initial.content;
					}
				}

				modules.forEach(transformInclude, moduleObj);

				event = lazySizes.fire(elem, 'lazyincludeloaded', detail);

				if (detail.insert && detail.isSuccess && !event.defaultPrevented && detail.content != null && detail.content != elem.innerHTML) {
					elem.innerHTML = detail.content;
				}

				queue.d();

				modules.forEach(loadModule, moduleObj);

				setTimeout(function () {
					lazySizes.fire(elem, 'lazyincluded', detail);
				});

				xhrObj = null;
				modules = null;
			};

			elem.lazyInclude.current = candidate;
			elem.setAttribute('data-currentinclude', candidate.name);

			if (candidate.urls.css) {
				loadStyles(candidate.urls.css);
			}
			if (detail.content == null && candidate.urls.include) {
				loadInclude(detail, function (data) {
					xhrObj = data;
					if (modules) {
						include();
					}
				});
			} else {
				xhrObj = detail;
			}

			if (candidate.urls.amd || candidate.urls.module) {
				var loadRequireImportCB = function () {
					modules = Array.prototype.slice.call(arguments);
					if (xhrObj) {
						include();
					}
				};

				if (candidate.urls.amd) {
					loadRequire(candidate.urls.amd, loadRequireImportCB);
				} else {
					loadSystemJs(candidate.urls.module, loadRequireImportCB);
				}
			} else {
				modules = [];
			}

			if (xhrObj && modules) {
				include();
			}
		}

		function findLoadCandidate(elem) {
			var candidate;
			var includeData = getIncludeData(elem);
			if (!includeData.candidates.length || !docElem.contains(elem)) {
				return;
			}
			candidate = findCandidate(elem);
			if (candidate) {
				loadCandidate(elem, candidate);
			}
			return true;
		}

		function beforeUnveil(e) {
			if (e.detail.instance != lazySizes || e.defaultPrevented || !e.target.getAttribute('data-include')) {
				return;
			}
			queue.q(e.target);
			e.detail.firesLoad = true;
		}

		addEventListener('lazybeforeunveil', beforeUnveil, false);

		addEventListener('resize', refreshIncludes, false);
		addEventListener('lazyrefreshincludes', refreshIncludes, false);
	});
});
System.register('theatlantic/js/utils/lazysizes.js', ['npm:systemjs-plugin-babel@0.0.25/babel-helpers/toConsumableArray.js', 'lazysizes', 'lazysizes/plugins/include/ls.include', 'pageInfo'], function (_export, _context) {
  "use strict";

  var _toConsumableArray, lazySizes, token, apiComponents;

  /**
   * Bind event listeners to modify our lazyload requests
   * @return {void}
   */
  function bindListeners() {
    apiComponents.forEach(function (component) {
      component.addEventListener('lazyincludeload', handleLazyLoad);
    });
  }

  /**
   * Event handler for the 'lazyincludeload' event. Gives us the ability to
   * modify the XMLHttpRequest before it is sent for each lazy loaded item.
   *
   * @param  {Object} event The `event` object
   * @return {void}
   */
  function handleLazyLoad(event) {
    if (!event.detail) {
      return;
    }

    event.detail.xhrModifier = modifyRequestForAPI;
  }

  /**
   * Modifies the XMLHttpRequest that lazysizes sends off to conform to our API
   * needs; specifically adding 'Accept' and 'Authorization' headers.
   *
   * @param  {Object} request   An XMLHttpRequest object
   * @return {void}
   * @see {@link https://github.com/aFarkas/lazysizes/blob/gh-pages/plugins/include/ls.include.js#L314}
   */
  function modifyRequestForAPI(request) {
    request.setRequestHeader('Accept', 'application/json');
    request.setRequestHeader('Authorization', 'token ' + token);
  }

  /**
   * Initialize the module
   */
  return {
    setters: [function (_npmSystemjsPluginBabel0025BabelHelpersToConsumableArrayJs) {
      _toConsumableArray = _npmSystemjsPluginBabel0025BabelHelpersToConsumableArrayJs.default;
    }, function (_lazysizes) {
      lazySizes = _lazysizes.default;
    }, function (_lazysizesPluginsIncludeLsInclude) {}, function (_pageInfo) {
      token = _pageInfo.token;
    }],
    execute: function () {
      apiComponents = [].concat(_toConsumableArray(document.querySelectorAll('.js-dynamic-content')));


      /**
       * Configure lazysizes to use our SystemJS loader for ES6 modules
       */
      Object.assign(lazySizes.cfg, {
        systemJs: function systemJs(module, cb) {
          System.import(module).then(cb);
        }
      });bindListeners();
      lazySizes.init();
    }
  };
});
System.register('theatlantic/js/utils/endpoints.js', ['npm:systemjs-plugin-babel@0.0.25/babel-helpers/classCallCheck.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/createClass.js', './log', '../constants/endpoints'], function (_export, _context) {
  "use strict";

  var _classCallCheck, _createClass, Log, relatedArticles, mostPopular, video, log, Endpoints, endpoints;

  return {
    setters: [function (_npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs) {
      _classCallCheck = _npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersCreateClassJs) {
      _createClass = _npmSystemjsPluginBabel0025BabelHelpersCreateClassJs.default;
    }, function (_log) {
      Log = _log.Log;
    }, function (_constantsEndpoints) {
      relatedArticles = _constantsEndpoints.relatedArticles;
      mostPopular = _constantsEndpoints.mostPopular;
      video = _constantsEndpoints.video;
    }],
    execute: function () {
      log = Log('atl:endpoints');

      Endpoints = function () {
        /**
         * The constructor
         */
        function Endpoints() {
          _classCallCheck(this, Endpoints);

          this.relatedArticles = relatedArticles;
          this.mostPopular = mostPopular;
          this.video = video;
        }

        /**
         * Get an endpoint
         * @example
         * endpoints.get('relatedArticles');
         * // returns '/path/to/related/articles/'
         *
         * @param  {String} endpoint The desired endpoint
         * @return {String}          The endpoint
         */

        _createClass(Endpoints, [{
          key: 'get',
          value: function get(endpoint) {
            return this[endpoint];
          }

          /**
           * Set an endpoints value
           * @example
           * endpoints.set('relatedArticles', '/path/to/ab/test/endpoint');
           * @param {String} endpoint The endpoint to update
           * @param {String} value    The value to set the endpoint to
           */

        }, {
          key: 'set',
          value: function set(endpoint) {
            var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

            if (value === '') {
              log.warn('No `value` set for endpoint');
            }

            this[endpoint] = value;
          }
        }]);

        return Endpoints;
      }();

      _export('endpoints', endpoints = new Endpoints());

      _export('endpoints', endpoints);
    }
  };
});
System.registerDynamic('npm:uuid@3.0.1/v1.js', ['./lib/rng', './lib/bytesToUuid'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // Unique ID creation requires a high quality random # generator.  We feature
  // detect to determine the best RNG source, normalizing to a function that
  // returns 128-bits of randomness, since that's what's usually required
  var rng = $__require('./lib/rng');
  var bytesToUuid = $__require('./lib/bytesToUuid');

  // **`v1()` - Generate time-based UUID**
  //
  // Inspired by https://github.com/LiosK/UUID.js
  // and http://docs.python.org/library/uuid.html

  // random #'s we need to init node and clockseq
  var _seedBytes = rng();

  // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
  var _nodeId = [_seedBytes[0] | 0x01, _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]];

  // Per 4.2.2, randomize (14 bit) clockseq
  var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

  // Previous uuid creation time
  var _lastMSecs = 0,
      _lastNSecs = 0;

  // See https://github.com/broofa/node-uuid for API details
  function v1(options, buf, offset) {
    var i = buf && offset || 0;
    var b = buf || [];

    options = options || {};

    var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

    // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

    // Time since last uuid creation (in msecs)
    var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000;

    // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) {
      clockseq = clockseq + 1 & 0x3fff;
    }

    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
      nsecs = 0;
    }

    // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) {
      throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
    }

    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq;

    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000;

    // `time_low`
    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff;

    // `time_mid`
    var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff;

    // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff;

    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80;

    // `clock_seq_low`
    b[i++] = clockseq & 0xff;

    // `node`
    var node = options.node || _nodeId;
    for (var n = 0; n < 6; ++n) {
      b[i + n] = node[n];
    }

    return buf ? buf : bytesToUuid(b);
  }

  module.exports = v1;
});
System.registerDynamic("npm:uuid@3.0.1/lib/rng-browser.js", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // Unique ID creation requires a high quality random # generator.  In the
  // browser this is a little complicated due to unknown quality of Math.random()
  // and inconsistent support for the `crypto` API.  We do the best we can via
  // feature-detection
  var rng;

  var crypto = global.crypto || global.msCrypto; // for IE 11
  if (crypto && crypto.getRandomValues) {
    // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
    var rnds8 = new Uint8Array(16);
    rng = function whatwgRNG() {
      crypto.getRandomValues(rnds8);
      return rnds8;
    };
  }

  if (!rng) {
    // Math.random()-based (RNG)
    //
    // If all else fails, use Math.random().  It's fast, but is of unspecified
    // quality.
    var rnds = new Array(16);
    rng = function () {
      for (var i = 0, r; i < 16; i++) {
        if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
        rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
      }

      return rnds;
    };
  }

  module.exports = rng;
});
System.registerDynamic('npm:uuid@3.0.1/lib/bytesToUuid.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /**
   * Convert array of 16 byte values to UUID string format of the form:
   * XXXXXXXX-XXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   */
  var byteToHex = [];
  for (var i = 0; i < 256; ++i) {
    byteToHex[i] = (i + 0x100).toString(16).substr(1);
  }

  function bytesToUuid(buf, offset) {
    var i = offset || 0;
    var bth = byteToHex;
    return bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]];
  }

  module.exports = bytesToUuid;
});
System.registerDynamic('npm:uuid@3.0.1/v4.js', ['./lib/rng', './lib/bytesToUuid'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  var rng = $__require('./lib/rng');
  var bytesToUuid = $__require('./lib/bytesToUuid');

  function v4(options, buf, offset) {
    var i = buf && offset || 0;

    if (typeof options == 'string') {
      buf = options == 'binary' ? new Array(16) : null;
      options = null;
    }
    options = options || {};

    var rnds = options.random || (options.rng || rng)();

    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;

    // Copy bytes to buffer, if provided
    if (buf) {
      for (var ii = 0; ii < 16; ++ii) {
        buf[i + ii] = rnds[ii];
      }
    }

    return buf || bytesToUuid(rnds);
  }

  module.exports = v4;
});
System.registerDynamic("npm:uuid@3.0.1.json", [], true, function() {
  return {
    "main": "index.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    },
    "map": {
      "./lib/rng.js": {
        "browser": "./lib/rng-browser.js"
      }
    }
  };
});

System.registerDynamic('npm:uuid@3.0.1/index.js', ['./v1', './v4'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  var v1 = $__require('./v1');
  var v4 = $__require('./v4');

  var uuid = v4;
  uuid.v1 = v1;
  uuid.v4 = v4;

  module.exports = uuid;
});
System.register('theatlantic/js/utils/namespace.js', ['uuid', './log', './user'], function (_export, _context) {
  "use strict";

  var uuid, Log, User, ns, log, Atlantic;
  return {
    setters: [function (_uuid) {
      uuid = _uuid.default;
    }, function (_log) {
      Log = _log.Log;
    }, function (_user) {
      User = _user.User;
    }],
    execute: function () {
      ns = 'atl:namespace';
      log = Log(ns);
      Atlantic = Object.defineProperties({}, {
        page_view_id: {
          value: uuid.v4(),
          writable: false
        },
        User: {
          value: new User(),
          writable: false
        }
      });


      // allow `window.Atlantic` to override any default value set here (if necessary)
      window.Atlantic = Object.assign(Atlantic, window.Atlantic);

      log(window.Atlantic);
    }
  };
});
System.registerDynamic("npm:jspm-nodelibs-events@0.2.2.json", [], true, function() {
  return {
    "main": "./events.js"
  };
});

System.registerDynamic('npm:jspm-nodelibs-events@0.2.2/events.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  function EventEmitter() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
  }
  module.exports = EventEmitter;

  // Backwards-compat with node 0.10.x
  EventEmitter.EventEmitter = EventEmitter;

  EventEmitter.prototype._events = undefined;
  EventEmitter.prototype._maxListeners = undefined;

  // By default EventEmitters will print a warning if more than 10 listeners are
  // added to it. This is a useful default which helps finding memory leaks.
  EventEmitter.defaultMaxListeners = 10;

  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.
  EventEmitter.prototype.setMaxListeners = function (n) {
    if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
    this._maxListeners = n;
    return this;
  };

  EventEmitter.prototype.emit = function (type) {
    var er, handler, len, args, i, listeners;

    if (!this._events) this._events = {};

    // If there is no 'error' event listener then throw.
    if (type === 'error') {
      if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
        er = arguments[1];
        if (er instanceof Error) {
          throw er; // Unhandled 'error' event
        }
        throw TypeError('Uncaught, unspecified "error" event.');
      }
    }

    handler = this._events[type];

    if (isUndefined(handler)) return false;

    if (isFunction(handler)) {
      switch (arguments.length) {
        // fast cases
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        // slower
        default:
          args = Array.prototype.slice.call(arguments, 1);
          handler.apply(this, args);
      }
    } else if (isObject(handler)) {
      args = Array.prototype.slice.call(arguments, 1);
      listeners = handler.slice();
      len = listeners.length;
      for (i = 0; i < len; i++) listeners[i].apply(this, args);
    }

    return true;
  };

  EventEmitter.prototype.addListener = function (type, listener) {
    var m;

    if (!isFunction(listener)) throw TypeError('listener must be a function');

    if (!this._events) this._events = {};

    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);

    if (!this._events[type])
      // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;else if (isObject(this._events[type]))
      // If we've already got an array, just append.
      this._events[type].push(listener);else
      // Adding the second element, need to change to array.
      this._events[type] = [this._events[type], listener];

    // Check for listener leak
    if (isObject(this._events[type]) && !this._events[type].warned) {
      if (!isUndefined(this._maxListeners)) {
        m = this._maxListeners;
      } else {
        m = EventEmitter.defaultMaxListeners;
      }

      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);
        if (typeof console.trace === 'function') {
          // not supported in IE 10
          console.trace();
        }
      }
    }

    return this;
  };

  EventEmitter.prototype.on = EventEmitter.prototype.addListener;

  EventEmitter.prototype.once = function (type, listener) {
    if (!isFunction(listener)) throw TypeError('listener must be a function');

    var fired = false;

    function g() {
      this.removeListener(type, g);

      if (!fired) {
        fired = true;
        listener.apply(this, arguments);
      }
    }

    g.listener = listener;
    this.on(type, g);

    return this;
  };

  // emits a 'removeListener' event iff the listener was removed
  EventEmitter.prototype.removeListener = function (type, listener) {
    var list, position, length, i;

    if (!isFunction(listener)) throw TypeError('listener must be a function');

    if (!this._events || !this._events[type]) return this;

    list = this._events[type];
    length = list.length;
    position = -1;

    if (list === listener || isFunction(list.listener) && list.listener === listener) {
      delete this._events[type];
      if (this._events.removeListener) this.emit('removeListener', type, listener);
    } else if (isObject(list)) {
      for (i = length; i-- > 0;) {
        if (list[i] === listener || list[i].listener && list[i].listener === listener) {
          position = i;
          break;
        }
      }

      if (position < 0) return this;

      if (list.length === 1) {
        list.length = 0;
        delete this._events[type];
      } else {
        list.splice(position, 1);
      }

      if (this._events.removeListener) this.emit('removeListener', type, listener);
    }

    return this;
  };

  EventEmitter.prototype.removeAllListeners = function (type) {
    var key, listeners;

    if (!this._events) return this;

    // not listening for removeListener, no need to emit
    if (!this._events.removeListener) {
      if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
      return this;
    }

    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
      for (key in this._events) {
        if (key === 'removeListener') continue;
        this.removeAllListeners(key);
      }
      this.removeAllListeners('removeListener');
      this._events = {};
      return this;
    }

    listeners = this._events[type];

    if (isFunction(listeners)) {
      this.removeListener(type, listeners);
    } else if (listeners) {
      // LIFO order
      while (listeners.length) this.removeListener(type, listeners[listeners.length - 1]);
    }
    delete this._events[type];

    return this;
  };

  EventEmitter.prototype.listeners = function (type) {
    var ret;
    if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
    return ret;
  };

  EventEmitter.prototype.listenerCount = function (type) {
    if (this._events) {
      var evlistener = this._events[type];

      if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
    }
    return 0;
  };

  EventEmitter.listenerCount = function (emitter, type) {
    return emitter.listenerCount(type);
  };

  function isFunction(arg) {
    return typeof arg === 'function';
  }

  function isNumber(arg) {
    return typeof arg === 'number';
  }

  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }

  function isUndefined(arg) {
    return arg === void 0;
  }
});
System.register('theatlantic/js/paywall/utils/Cookie.js', ['npm:systemjs-plugin-babel@0.0.25/babel-helpers/classCallCheck.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/createClass.js', 'js-cookie'], function (_export, _context) {
  "use strict";

  var _classCallCheck, _createClass, cookie, Cookie;

  return {
    setters: [function (_npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs) {
      _classCallCheck = _npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersCreateClassJs) {
      _createClass = _npmSystemjsPluginBabel0025BabelHelpersCreateClassJs.default;
    }, function (_jsCookie) {
      cookie = _jsCookie.default;
    }],
    execute: function () {
      Cookie = function () {
        function Cookie(articleViewsCookie) {
          _classCallCheck(this, Cookie);

          this.articleViewsCookie = articleViewsCookie;
          this.viewedArticles = cookie.get(this.articleViewsCookie) || '[]';
          this.viewedArticlesArray = JSON.parse(this.viewedArticles);
        }

        /**
         * @return {Number} return number of articles in the array
         */

        _createClass(Cookie, [{
          key: 'length',
          get: function get() {
            return this.viewedArticlesArray.length;
          }
        }]);

        return Cookie;
      }();

      _export('default', Cookie);
    }
  };
});
System.register('theatlantic/js/paywall/utils/Meter.js', ['npm:systemjs-plugin-babel@0.0.25/babel-helpers/classCallCheck.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/createClass.js', 'events', './Cookie'], function (_export, _context) {
  "use strict";

  var _classCallCheck, _createClass, EventEmitter, Cookie, Meter;

  return {
    setters: [function (_npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs) {
      _classCallCheck = _npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersCreateClassJs) {
      _createClass = _npmSystemjsPluginBabel0025BabelHelpersCreateClassJs.default;
    }, function (_events) {
      EventEmitter = _events.default;
    }, function (_Cookie) {
      Cookie = _Cookie.default;
    }],
    execute: function () {
      Meter = function () {
        function Meter(_ref) {
          var cap = _ref.cap,
              identifier = _ref.identifier,
              _ref$cookieName = _ref.cookieName,
              cookieName = _ref$cookieName === undefined ? 'dev_articleviews' : _ref$cookieName;

          _classCallCheck(this, Meter);

          this.cap = cap;
          this.cookie = new Cookie(cookieName);
          this._events = new EventEmitter();
          this.identifier = identifier;
          this.enabled = false;
        }

        /**
         * Activate the event listener. Trigger `cap-hit` if the user is above the cap, always emit `pageview`.
         */

        _createClass(Meter, [{
          key: 'enable',
          value: function enable() {
            this.enabled = true;
            if (this.hasHitCap()) {
              this._emit('cap-hit');
            }
            this._emit('pageview');
          }

          /**
           * Attach an event listener to the Meter emitter. The listener will be removed after the first time the event is called
           * @param {string} event
           * @param {function} callback
           */

        }, {
          key: 'on',
          value: function on(event, callback) {
            this._events.once(event, callback);
          }

          /**
           * Emits an event with the correct information passed.
           *
           * @protected
           * @param {string} event Event name that will be emitted.
           * @param {*} identifier Any serializable type to identify the page the event took place on
           */

        }, {
          key: '_emit',
          value: function _emit(event) {
            this._events.emit(event, {
              identifier: this.identifier,
              viewCount: this.getPageViews(),
              cap: this.getCap()
            });
          }
        }, {
          key: 'getCap',
          value: function getCap() {
            return this.cap;
          }
        }, {
          key: 'getPageViews',
          value: function getPageViews() {
            return this.cookie.length;
          }
          /**
           * Returns boolean whether gate criteria has been met
           *
           * @return {boolean}
           */

        }, {
          key: 'hasHitCap',
          value: function hasHitCap() {
            return this.getPageViews() > this.getCap() && this.enabled;
          }
        }]);

        return Meter;
      }();

      _export('default', Meter);
    }
  };
});
System.register("npm:systemjs-plugin-babel@0.0.25/babel-helpers/toArray.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (arr) {
        return Array.isArray(arr) ? arr : Array.from(arr);
      });
    }
  };
});
System.register('theatlantic/js/paywall/utils/Intervention.js', ['npm:systemjs-plugin-babel@0.0.25/babel-helpers/toArray.js', 'npm:systemjs-plugin-babel@0.0.25/regenerator-runtime.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/extends.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/toConsumableArray.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/asyncToGenerator.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/classCallCheck.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/createClass.js'], function (_export, _context3) {
  "use strict";

  var _toArray, _regeneratorRuntime, _extends, _toConsumableArray, _asyncToGenerator, _classCallCheck, _createClass, toFunction, Intervention;

  return {
    setters: [function (_npmSystemjsPluginBabel0025BabelHelpersToArrayJs) {
      _toArray = _npmSystemjsPluginBabel0025BabelHelpersToArrayJs.default;
    }, function (_npmSystemjsPluginBabel0025RegeneratorRuntimeJs) {
      _regeneratorRuntime = _npmSystemjsPluginBabel0025RegeneratorRuntimeJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersExtendsJs) {
      _extends = _npmSystemjsPluginBabel0025BabelHelpersExtendsJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersToConsumableArrayJs) {
      _toConsumableArray = _npmSystemjsPluginBabel0025BabelHelpersToConsumableArrayJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersAsyncToGeneratorJs) {
      _asyncToGenerator = _npmSystemjsPluginBabel0025BabelHelpersAsyncToGeneratorJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs) {
      _classCallCheck = _npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersCreateClassJs) {
      _createClass = _npmSystemjsPluginBabel0025BabelHelpersCreateClassJs.default;
    }],
    execute: function () {
      toFunction = function toFunction(thing) {
        if (typeof thing === 'function') {
          return thing;
        }

        return function () {
          return thing;
        };
      };

      Intervention = function () {
        /**
         * Construct an intervention object using a couple given defaults.
         * @param {function} defaultTemplate
         * @param {object} defaultContext
         */
        function Intervention(defaultTemplate) {
          var defaultContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, Intervention);

          this._template = defaultTemplate;
          this._contextQueue = [];
          this.render = this.render.bind(this);
          this.pushContext(defaultContext);
        }
        /**
         * Accepts a callback that changes the template to be rendered
         * @param {function} selectedTemplate
         */

        _createClass(Intervention, [{
          key: 'setTemplate',
          value: function setTemplate(selectedTemplate) {
            this._template = selectedTemplate;
          }

          /**
           * Pushes context into a deterministic queue to be reduced into a single object.
           * @param {object} context An object or pending promise to push into the context queue.
           */

        }, {
          key: 'pushContext',
          value: function pushContext(context) {
            this._contextQueue.push(context);
          }
        }, {
          key: '_reduceContext',
          value: function () {
            var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
              var contextQueue;
              return _regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Promise.all([].concat(_toConsumableArray(this._contextQueue)));

                    case 2:
                      contextQueue = _context.sent;
                      return _context.abrupt('return', contextQueue.reduce(function (accumulator, nextVal) {
                        return _extends({}, accumulator, nextVal);
                      }, {}));

                    case 4:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function _reduceContext() {
              return _ref.apply(this, arguments);
            }

            return _reduceContext;
          }()

          /**
           * Asynchronously resolve and then render the intervention template.
           * @param {object} additionalContext Additional context to pass to the template function
           */

        }, {
          key: 'render',
          value: function () {
            var _ref2 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2(additionalContext) {
              var reducedContext, _ref3, _ref4, template, contextValues, context;

              return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this._reduceContext();

                    case 2:
                      reducedContext = _context2.sent;
                      _context2.next = 5;
                      return Promise.all([
                      // Resolve the template
                      toFunction(this._template)()].concat(_toConsumableArray(Object.values(reducedContext).map(function (val) {
                        return toFunction(val)();
                      }))));

                    case 5:
                      _ref3 = _context2.sent;
                      _ref4 = _toArray(_ref3);
                      template = _ref4[0];
                      contextValues = _ref4.slice(1);

                      // Take the resolved context and zip it back with the context keys.
                      context = Object.fromEntries(Object.keys(reducedContext).map(function (key, index) {
                        return [key, contextValues[index]];
                      }));

                      // Put it all together!

                      return _context2.abrupt('return', template(_extends({}, context, additionalContext)));

                    case 11:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function render(_x2) {
              return _ref2.apply(this, arguments);
            }

            return render;
          }()
        }]);

        return Intervention;
      }();

      _export('default', Intervention);
    }
  };
});
System.registerDynamic("github:systemjs/plugin-json@0.3.0.json", [], true, function() {
  return {
    "main": "json"
  };
});

System.register("theatlantic/js/constants/breakpoints.json!github:systemjs/plugin-json@0.3.0/json.js", [], function (_export, _context) {
  "use strict";

  var __useDefault, xxsmall, xsmall, small, medium, large, xlarge, xxlarge, standard, hd, retina;

  return {
    setters: [],
    execute: function () {
      _export("__useDefault", __useDefault = true);

      _export("__useDefault", __useDefault);

      _export("xxsmall", xxsmall = "(max-width: 374px)");

      _export("xxsmall", xxsmall);

      _export("xsmall", xsmall = "(max-width: 575px)");

      _export("xsmall", xsmall);

      _export("small", small = "(min-width: 576px)");

      _export("small", small);

      _export("medium", medium = "(min-width: 784px)");

      _export("medium", medium);

      _export("large", large = "(min-width: 976px)");

      _export("large", large);

      _export("xlarge", xlarge = "(min-width: 1200px)");

      _export("xlarge", xlarge);

      _export("xxlarge", xxlarge = "(min-width: 1376px)");

      _export("xxlarge", xxlarge);

      _export("standard", standard = "(min-resolution: 1dppx)");

      _export("standard", standard);

      _export("hd", hd = "(min-resolution: 1.5dppx)");

      _export("hd", hd);

      _export("retina", retina = "(min-resolution: 2dppx)");

      _export("retina", retina);

      _export("default", {
        xxsmall: xxsmall,
        xsmall: xsmall,
        "mobile-medium": "(min-width: 374px)",
        "mobile-large": "(min-width: 414px)",
        small: small,
        medium: medium,
        large: large,
        xlarge: xlarge,
        xxlarge: xxlarge,
        "hp-mid": "(min-width: 1100px)",
        standard: standard,
        hd: hd,
        retina: retina,
        "legacy-large": "(min-width: 1010px)"
      });
    }
  };
});
System.register('theatlantic/js/utils/device.js', ['../constants/breakpoints.json!'], function (_export, _context) {
  "use strict";

  var breakpoints;


  /**
   * Get the device type based on current media query
   * @function
   * @return {String} The device type
   */
  function getDeviceType() {
    var size = 'mobile';
    if (window.matchMedia(breakpoints['xlarge']).matches) {
      size = 'desktop';
    } else if (window.matchMedia(breakpoints['large']).matches) {
      size = 'desktop';
    } else if (window.matchMedia(breakpoints['medium']).matches) {
      size = 'tablet';
    } else if (window.matchMedia(breakpoints['small']).matches) {
      size = 'tablet';
    }
    return size;
  }

  /**
   * Get the orientation of the device
   * @function
   * @return {String} The orientation
   */
  /**
   * Device stuff
   * @module utils/device
   */

  _export('getDeviceType', getDeviceType);

  function getDeviceOrientation() {
    var orientation = 'portrait';
    if (window.matchMedia('(orientation: landscape)').matches) {
      orientation = 'landscape';
    }
    return orientation;
  }
  _export('getDeviceOrientation', getDeviceOrientation);

  return {
    setters: [function (_constantsBreakpointsJson) {
      breakpoints = _constantsBreakpointsJson.default;
    }],
    execute: function () {}
  };
});
System.register('theatlantic/js/paywall/nudge.js', ['npm:systemjs-plugin-babel@0.0.25/regenerator-runtime.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/asyncToGenerator.js', 'pageInfo', 'js-cookie', './utils/renderIntoDom', '../utils/device', '../utils/events', '../globals/dataLayer'], function (_export, _context2) {
  "use strict";

  var _regeneratorRuntime, _asyncToGenerator, pageInfo, cookie, renderIntoDom, getDeviceType, dataEvent, dataLayer;

  function nudgeCallback() {
    var _this = this;

    return function () {
      var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(context) {
        var getElement, dispatchDataEvent, toggleElement, renderThatElement, subscribeBtnHandlers, signInBtnHandlers, addClickHandler, toggleCookie, compressCookie, initialize, calculateSlide, handleScroll;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                getElement = function getElement(collapsed) {
                  return collapsed && context.viewCount !== context.cap ? context.compressedElem : context.expandedElem;
                };

                dispatchDataEvent = function dispatchDataEvent(action) {
                  var collapsed = cookie.get('hasCollapsed') === 'true';
                  var nudgeActions = ['nudge:user_expand', 'nudge:user_collapse', 'nudge:scroll_collapse'];
                  var event = nudgeActions.indexOf(action) === -1 ? 'paywall:interaction' : 'nudge:interaction';

                  var detail = {
                    action: action,
                    label: getElement(collapsed),
                    value: context.viewCount
                  };
                  dataEvent(window, event, { detail: detail });
                };

                toggleElement = function toggleElement(element) {
                  var newElement = element === context.expandedElem ? context.compressedElem : context.expandedElem;
                  return newElement;
                };

                renderThatElement = function renderThatElement(element, context) {
                  renderIntoDom(element, context).then(function (container) {
                    signInBtnHandlers(element);
                    addClickHandler(container, toggleElement(element));
                    subscribeBtnHandlers();
                  });
                };

                subscribeBtnHandlers = function subscribeBtnHandlers() {
                  var subscribeBtns = document.querySelectorAll('.c-nudge__button');

                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = undefined;

                  try {
                    for (var _iterator = subscribeBtns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var button = _step.value;

                      button.addEventListener('click', function () {
                        dispatchDataEvent('nudge:click_subscribe');
                      });
                    }
                  } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                      }
                    } finally {
                      if (_didIteratorError) {
                        throw _iteratorError;
                      }
                    }
                  }
                };

                signInBtnHandlers = function signInBtnHandlers(state) {
                  var signIn = state === context.expandedElem ? document.querySelector('.js-login-click-expanded') : document.querySelector('.js-login-click-compressed');

                  signIn.addEventListener('click', function () {
                    dispatchDataEvent('nudge:click_login');
                  });
                };

                addClickHandler = function addClickHandler(container, newElement) {
                  var icon = container.querySelector('.c-nudge__icon');
                  icon.addEventListener('click', function (e) {
                    e.preventDefault();
                    var action = newElement === context.expandedElem ? 'nudge:user_expand' : 'nudge:user_collapse';
                    dispatchDataEvent(action);
                    renderThatElement(newElement, context);
                    toggleCookie();
                  });
                };

                toggleCookie = function toggleCookie() {
                  var oldCookie = cookie.get('hasCollapsed') === 'true';
                  cookie.set('hasCollapsed', !oldCookie);
                };

                compressCookie = function compressCookie() {
                  cookie.set('hasCollapsed', true);
                };

                //initialize


                initialize = function initialize() {
                  var collapsed = cookie.get('hasCollapsed') === 'true';
                  //if breaking news bar is enabled, collapse nudge to avoid blocking too much of mobile screens
                  if (document.querySelector('.c-alert')) {
                    collapsed = true;
                  }
                  var template = getElement(collapsed);

                  // suppress mobile #ad-boxonly on features-template articles
                  var suppressAd = pageInfo.layout === 'feature';

                  if (suppressAd) {
                    window.ad_queue = window.ad_queue || [];
                    window.ad_queue.push(function () {
                      document.querySelector('#ad-boxonly').remove();
                    });
                  }

                  renderThatElement(template, context);

                  var dataObject = {
                    nudgeTemplate: template,
                    event: 'Nudge Template Set'
                  };
                  dataLayer.push(dataObject);
                };

                initialize();

                calculateSlide = function calculateSlide(container) {
                  // height for expanded nudge to slide is container height minus the height of the compressed nudge
                  var heightToSlide = -(container.offsetHeight - 64) + 'px';
                  container.classList.add('c-nudge-expanded__container--slide-out');
                  container.style.bottom = heightToSlide;

                  // add class to the mobile header to face opacity of nudge text
                  var desktopContainer = document.querySelector('.c-nudge__nudge-container');
                  desktopContainer.classList.add('c-nudge__nudge-container--fade-out');

                  var mobileContainer = document.querySelector('.c-nudge__header-mobile');
                  mobileContainer && mobileContainer.classList.add('c-nudge__nudge-container--fade-out');

                  // add class to the icon to rotate it
                  var icon = document.querySelector('.c-nudge__compress-icon');
                  icon.classList.add('c-nudge__compress-icon--rotate');
                };

                handleScroll = function handleScroll() {
                  var deviceType = getDeviceType();
                  var isMobile = deviceType === 'mobile';
                  var collapseOffset = isMobile ? 100 : 500;
                  var expandedContainer = document.querySelector('.c-nudge-expanded__container');

                  if (window.pageYOffset > collapseOffset && expandedContainer) {
                    // if the nudge is expanded on load, the auto-collapse should have a slide-out effect
                    calculateSlide(expandedContainer);
                    // listen for slide-out transition (CSS) end, then replace the nudge
                    var renderCompressedOnTransitionEnd = function renderCompressedOnTransitionEnd() {
                      renderThatElement(context.compressedElem, context);
                    };
                    expandedContainer.addEventListener('transitionend', renderCompressedOnTransitionEnd);
                    expandedContainer.addEventListener('webkitTransitionEnd', renderCompressedOnTransitionEnd);
                    compressCookie();
                    dispatchDataEvent('nudge:scroll_collapse');
                    document.removeEventListener('scroll', handleScroll);
                  }
                };

                document.addEventListener('scroll', handleScroll);

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }

  _export('default', nudgeCallback);

  return {
    setters: [function (_npmSystemjsPluginBabel0025RegeneratorRuntimeJs) {
      _regeneratorRuntime = _npmSystemjsPluginBabel0025RegeneratorRuntimeJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersAsyncToGeneratorJs) {
      _asyncToGenerator = _npmSystemjsPluginBabel0025BabelHelpersAsyncToGeneratorJs.default;
    }, function (_pageInfo) {
      pageInfo = _pageInfo;
    }, function (_jsCookie) {
      cookie = _jsCookie.default;
    }, function (_utilsRenderIntoDom) {
      renderIntoDom = _utilsRenderIntoDom.default;
    }, function (_utilsDevice) {
      getDeviceType = _utilsDevice.getDeviceType;
    }, function (_utilsEvents) {
      dataEvent = _utilsEvents.dataEvent;
    }, function (_globalsDataLayer) {
      dataLayer = _globalsDataLayer.default;
    }],
    execute: function () {}
  };
});
System.registerDynamic("theatlantic/templates/hippo/components/gate.html", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;

  var precompiled = global.nunjucksPrecompiled = global.nunjucksPrecompiled || {};
  var template = function () {
    function root(env, context, frame, runtime, cb) {
      var lineno = null;
      var colno = null;
      var output = "";
      try {
        var parentTemplate = null;
        output += "<div class=\"c-gate__viewport\">\n  <!-- begin shadow -->\n    <div class=\"c-gate__shadow\"></div>\n    <!-- begin gate viewport -->\n    <div class=\"c-gate__spacing-container\">\n      <span>";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "mobileSubtitle"), env.opts.autoescape);
        output += "</span>\n      <p class=\"c-gate__header\">";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "mobileTitle"), env.opts.autoescape);
        output += "</p>\n      <span>";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "mobileTitleBelow"), env.opts.autoescape);
        output += "</span>\n      <a href=\"";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "accounts_url"), env.opts.autoescape);
        output += "/products?source=gate\" role=\"link\"><div class=\"c-gate__subscribe-button\">See Plans</div></a>\n      <span class=\"c-gate__subscribe-link\">Already a subscriber? \n        <a href=\"";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "accounts_url"), env.opts.autoescape);
        if (!runtime.contextOrFrameLookup(context, frame, "loggedIn")) {
          output += "/login/";
          ;
        }
        output += "\" class=\"c-gate__link ";
        if (!runtime.contextOrFrameLookup(context, frame, "loggedIn")) {
          output += "js-accounts-modal";
          ;
        }
        output += "\" role=\"button\">\n          ";
        if (runtime.contextOrFrameLookup(context, frame, "loggedIn")) {
          output += "\n          Link your account\n          ";
          ;
        } else {
          output += "\n          Sign in\n          ";
          ;
        }
        output += "\n        </a>\n      </span>    \n    </div>\n    <!-- end gate viewport -->\n</div>\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root: root
    };
  }();
  precompiled["hippo/components/gate.html"] = template;
  module.exports = template;
});
System.register('theatlantic/js/paywall/gate.js', ['npm:systemjs-plugin-babel@0.0.25/regenerator-runtime.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/asyncToGenerator.js', './utils/renderIntoDom', '../globals/dataLayer', 'hippo/components/gate'], function (_export, _context2) {
  "use strict";

  var _regeneratorRuntime, _asyncToGenerator, renderIntoDom, dataLayer;

  function gateCallback() {
    var _this = this;

    return function () {
      var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(context) {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                document.body.classList.add('with-gate');

                renderIntoDom('gate', context).then(function () {
                  if (window.Atlantic.page_info.request.experiment === 'button-color.blue') {
                    var button = document.querySelector('.c-gate__subscribe-button');
                    button.classList.add('c-gate__subscribe-button--variant');
                  }
                });

                dataLayer.push({
                  gateTemplate: 'gate',
                  event: 'Gate Template Set'
                });

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }

  _export('default', gateCallback);

  return {
    setters: [function (_npmSystemjsPluginBabel0025RegeneratorRuntimeJs) {
      _regeneratorRuntime = _npmSystemjsPluginBabel0025RegeneratorRuntimeJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersAsyncToGeneratorJs) {
      _asyncToGenerator = _npmSystemjsPluginBabel0025BabelHelpersAsyncToGeneratorJs.default;
    }, function (_utilsRenderIntoDom) {
      renderIntoDom = _utilsRenderIntoDom.default;
    }, function (_globalsDataLayer) {
      dataLayer = _globalsDataLayer.default;
    }, function (_hippoComponentsGate) {}],
    execute: function () {}
  };
});
System.register('theatlantic/js/paywall/meter.js', ['../globals/dataLayer'], function (_export, _context) {
  "use strict";

  var dataLayer;
  function meterCallback(_ref) {
    var cap = _ref.cap,
        viewCount = _ref.viewCount;

    var dataObject = {
      paywallCap: cap,
      paywallViews: viewCount
    };

    dataLayer.push(dataObject);
  }

  _export('default', meterCallback);

  return {
    setters: [function (_globalsDataLayer) {
      dataLayer = _globalsDataLayer.default;
    }],
    execute: function () {}
  };
});
System.registerDynamic("npm:is-date-object@1.0.1.json", [], true, function() {
  return {
    "main": "index.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    }
  };
});

System.registerDynamic('npm:is-date-object@1.0.1/index.js', [], true, function ($__require, exports, module) {
	'use strict';

	var global = this || self,
	    GLOBAL = global;
	var getDay = Date.prototype.getDay;
	var tryDateObject = function tryDateObject(value) {
		try {
			getDay.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};

	var toStr = Object.prototype.toString;
	var dateClass = '[object Date]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

	module.exports = function isDateObject(value) {
		if (typeof value !== 'object' || value === null) {
			return false;
		}
		return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
	};
});
System.registerDynamic('npm:has-symbols@1.0.0/shams.js', [], true, function ($__require, exports, module) {
	'use strict';

	/* eslint complexity: [2, 17], max-statements: [2, 33] */

	var global = this || self,
	    GLOBAL = global;
	module.exports = function hasSymbols() {
		if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
			return false;
		}
		if (typeof Symbol.iterator === 'symbol') {
			return true;
		}

		var obj = {};
		var sym = Symbol('test');
		var symObj = Object(sym);
		if (typeof sym === 'string') {
			return false;
		}

		if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
			return false;
		}
		if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
			return false;
		}

		// temp disabled per https://github.com/ljharb/object.assign/issues/17
		// if (sym instanceof Symbol) { return false; }
		// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
		// if (!(symObj instanceof Symbol)) { return false; }

		// if (typeof Symbol.prototype.toString !== 'function') { return false; }
		// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

		var symVal = 42;
		obj[sym] = symVal;
		for (sym in obj) {
			return false;
		} // eslint-disable-line no-restricted-syntax
		if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
			return false;
		}

		if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
			return false;
		}

		var syms = Object.getOwnPropertySymbols(obj);
		if (syms.length !== 1 || syms[0] !== sym) {
			return false;
		}

		if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
			return false;
		}

		if (typeof Object.getOwnPropertyDescriptor === 'function') {
			var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
			if (descriptor.value !== symVal || descriptor.enumerable !== true) {
				return false;
			}
		}

		return true;
	};
});
System.registerDynamic("npm:has-symbols@1.0.0.json", [], true, function() {
  return {
    "main": "index.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    },
    "map": {
      "./test": "./test/index.js"
    }
  };
});

System.registerDynamic('npm:has-symbols@1.0.0/index.js', ['./shams'], true, function ($__require, exports, module) {
	'use strict';

	var global = this || self,
	    GLOBAL = global;
	var origSymbol = global.Symbol;
	var hasSymbolSham = $__require('./shams');

	module.exports = function hasNativeSymbols() {
		if (typeof origSymbol !== 'function') {
			return false;
		}
		if (typeof Symbol !== 'function') {
			return false;
		}
		if (typeof origSymbol('foo') !== 'symbol') {
			return false;
		}
		if (typeof Symbol('bar') !== 'symbol') {
			return false;
		}

		return hasSymbolSham();
	};
});
System.registerDynamic("npm:is-symbol@1.0.2.json", [], true, function() {
  return {
    "main": "index.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    },
    "map": {
      "./test": "./test/index.js"
    }
  };
});

System.registerDynamic('npm:is-symbol@1.0.2/index.js', ['has-symbols'], true, function ($__require, exports, module) {
	'use strict';

	var global = this || self,
	    GLOBAL = global;
	var toStr = Object.prototype.toString;
	var hasSymbols = $__require('has-symbols')();

	if (hasSymbols) {
		var symToStr = Symbol.prototype.toString;
		var symStringRegex = /^Symbol\(.*\)$/;
		var isSymbolObject = function isRealSymbolObject(value) {
			if (typeof value.valueOf() !== 'symbol') {
				return false;
			}
			return symStringRegex.test(symToStr.call(value));
		};

		module.exports = function isSymbol(value) {
			if (typeof value === 'symbol') {
				return true;
			}
			if (toStr.call(value) !== '[object Symbol]') {
				return false;
			}
			try {
				return isSymbolObject(value);
			} catch (e) {
				return false;
			}
		};
	} else {

		module.exports = function isSymbol(value) {
			// this environment does not support Symbols.
			return false && value;
		};
	}
});
System.registerDynamic('npm:es-to-primitive@1.2.0/es2015.js', ['./helpers/isPrimitive', 'is-callable', 'is-date-object', 'is-symbol'], true, function ($__require, exports, module) {
	'use strict';

	var global = this || self,
	    GLOBAL = global;
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

	var isPrimitive = $__require('./helpers/isPrimitive');
	var isCallable = $__require('is-callable');
	var isDate = $__require('is-date-object');
	var isSymbol = $__require('is-symbol');

	var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
		if (typeof O === 'undefined' || O === null) {
			throw new TypeError('Cannot call method on ' + O);
		}
		if (typeof hint !== 'string' || hint !== 'number' && hint !== 'string') {
			throw new TypeError('hint must be "string" or "number"');
		}
		var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
		var method, result, i;
		for (i = 0; i < methodNames.length; ++i) {
			method = O[methodNames[i]];
			if (isCallable(method)) {
				result = method.call(O);
				if (isPrimitive(result)) {
					return result;
				}
			}
		}
		throw new TypeError('No default value');
	};

	var GetMethod = function GetMethod(O, P) {
		var func = O[P];
		if (func !== null && typeof func !== 'undefined') {
			if (!isCallable(func)) {
				throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
			}
			return func;
		}
		return void 0;
	};

	// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
	module.exports = function ToPrimitive(input) {
		if (isPrimitive(input)) {
			return input;
		}
		var hint = 'default';
		if (arguments.length > 1) {
			if (arguments[1] === String) {
				hint = 'string';
			} else if (arguments[1] === Number) {
				hint = 'number';
			}
		}

		var exoticToPrim;
		if (hasSymbols) {
			if (Symbol.toPrimitive) {
				exoticToPrim = GetMethod(input, Symbol.toPrimitive);
			} else if (isSymbol(input)) {
				exoticToPrim = Symbol.prototype.valueOf;
			}
		}
		if (typeof exoticToPrim !== 'undefined') {
			var result = exoticToPrim.call(input, hint);
			if (isPrimitive(result)) {
				return result;
			}
			throw new TypeError('unable to convert exotic object to primitive');
		}
		if (hint === 'default' && (isDate(input) || isSymbol(input))) {
			hint = 'string';
		}
		return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
	};
});
System.registerDynamic('npm:es-to-primitive@1.2.0/es6.js', ['./es2015'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  module.exports = $__require('./es2015');
});
System.registerDynamic('npm:es-abstract@1.13.0/helpers/isPrimitive.js', [], true, function ($__require, exports, module) {
	var global = this || self,
	    GLOBAL = global;
	module.exports = function isPrimitive(value) {
		return value === null || typeof value !== 'function' && typeof value !== 'object';
	};
});
System.registerDynamic('npm:es-abstract@1.13.0/helpers/assertRecord.js', ['../GetIntrinsic', 'has'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var GetIntrinsic = $__require('../GetIntrinsic');

  var $TypeError = GetIntrinsic('%TypeError%');
  var $SyntaxError = GetIntrinsic('%SyntaxError%');

  var has = $__require('has');

  var predicates = {
    // https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type
    'Property Descriptor': function isPropertyDescriptor(ES, Desc) {
      if (ES.Type(Desc) !== 'Object') {
        return false;
      }
      var allowed = {
        '[[Configurable]]': true,
        '[[Enumerable]]': true,
        '[[Get]]': true,
        '[[Set]]': true,
        '[[Value]]': true,
        '[[Writable]]': true
      };

      for (var key in Desc) {
        // eslint-disable-line
        if (has(Desc, key) && !allowed[key]) {
          return false;
        }
      }

      var isData = has(Desc, '[[Value]]');
      var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
      if (isData && IsAccessor) {
        throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
      }
      return true;
    }
  };

  module.exports = function assertRecord(ES, recordType, argumentName, value) {
    var predicate = predicates[recordType];
    if (typeof predicate !== 'function') {
      throw new $SyntaxError('unknown record type: ' + recordType);
    }
    if (!predicate(ES, value)) {
      throw new $TypeError(argumentName + ' must be a ' + recordType);
    }
    console.log(predicate(ES, value), value);
  };
});
System.registerDynamic("npm:es-abstract@1.13.0/helpers/isNaN.js", [], true, function ($__require, exports, module) {
	var global = this || self,
	    GLOBAL = global;
	module.exports = Number.isNaN || function isNaN(a) {
		return a !== a;
	};
});
System.registerDynamic('npm:es-abstract@1.13.0/helpers/isFinite.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  var $isNaN = Number.isNaN || function (a) {
    return a !== a;
  };

  module.exports = Number.isFinite || function (x) {
    return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity;
  };
});
System.registerDynamic("npm:es-abstract@1.13.0/helpers/sign.js", [], true, function ($__require, exports, module) {
	var global = this || self,
	    GLOBAL = global;
	module.exports = function sign(number) {
		return number >= 0 ? 1 : -1;
	};
});
System.registerDynamic("npm:es-abstract@1.13.0/helpers/mod.js", [], true, function ($__require, exports, module) {
	var global = this || self,
	    GLOBAL = global;
	module.exports = function mod(number, modulo) {
		var remain = number % modulo;
		return Math.floor(remain >= 0 ? remain : remain + modulo);
	};
});
System.registerDynamic('npm:es-to-primitive@1.2.0/helpers/isPrimitive.js', [], true, function ($__require, exports, module) {
	var global = this || self,
	    GLOBAL = global;
	module.exports = function isPrimitive(value) {
		return value === null || typeof value !== 'function' && typeof value !== 'object';
	};
});
System.registerDynamic("npm:is-callable@1.1.4.json", [], true, function() {
  return {
    "main": "index.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    }
  };
});

System.registerDynamic('npm:is-callable@1.1.4/index.js', [], true, function ($__require, exports, module) {
	'use strict';

	var global = this || self,
	    GLOBAL = global;
	var fnToStr = Function.prototype.toString;

	var constructorRegex = /^\s*class\b/;
	var isES6ClassFn = function isES6ClassFunction(value) {
		try {
			var fnStr = fnToStr.call(value);
			return constructorRegex.test(fnStr);
		} catch (e) {
			return false; // not a function
		}
	};

	var tryFunctionObject = function tryFunctionToStr(value) {
		try {
			if (isES6ClassFn(value)) {
				return false;
			}
			fnToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var fnClass = '[object Function]';
	var genClass = '[object GeneratorFunction]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

	module.exports = function isCallable(value) {
		if (!value) {
			return false;
		}
		if (typeof value !== 'function' && typeof value !== 'object') {
			return false;
		}
		if (typeof value === 'function' && !value.prototype) {
			return true;
		}
		if (hasToStringTag) {
			return tryFunctionObject(value);
		}
		if (isES6ClassFn(value)) {
			return false;
		}
		var strClass = toStr.call(value);
		return strClass === fnClass || strClass === genClass;
	};
});
System.registerDynamic("npm:es-to-primitive@1.2.0.json", [], true, function() {
  return {
    "main": "index.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    },
    "map": {
      "./test": "./test/index.js"
    }
  };
});

System.registerDynamic('npm:es-to-primitive@1.2.0/es5.js', ['./helpers/isPrimitive', 'is-callable'], true, function ($__require, exports, module) {
	'use strict';

	var global = this || self,
	    GLOBAL = global;
	var toStr = Object.prototype.toString;

	var isPrimitive = $__require('./helpers/isPrimitive');

	var isCallable = $__require('is-callable');

	// http://ecma-international.org/ecma-262/5.1/#sec-8.12.8
	var ES5internalSlots = {
		'[[DefaultValue]]': function (O) {
			var actualHint;
			if (arguments.length > 1) {
				actualHint = arguments[1];
			} else {
				actualHint = toStr.call(O) === '[object Date]' ? String : Number;
			}

			if (actualHint === String || actualHint === Number) {
				var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
				var value, i;
				for (i = 0; i < methods.length; ++i) {
					if (isCallable(O[methods[i]])) {
						value = O[methods[i]]();
						if (isPrimitive(value)) {
							return value;
						}
					}
				}
				throw new TypeError('No default value');
			}
			throw new TypeError('invalid [[DefaultValue]] hint supplied');
		}
	};

	// http://ecma-international.org/ecma-262/5.1/#sec-9.1
	module.exports = function ToPrimitive(input) {
		if (isPrimitive(input)) {
			return input;
		}
		if (arguments.length > 1) {
			return ES5internalSlots['[[DefaultValue]]'](input, arguments[1]);
		}
		return ES5internalSlots['[[DefaultValue]]'](input);
	};
});
System.registerDynamic('npm:es-abstract@1.13.0/es5.js', ['./GetIntrinsic', './helpers/assertRecord', './helpers/isNaN', './helpers/isFinite', './helpers/sign', './helpers/mod', 'is-callable', 'es-to-primitive/es5', 'has'], true, function ($__require, exports, module) {
	'use strict';

	var global = this || self,
	    GLOBAL = global;
	var GetIntrinsic = $__require('./GetIntrinsic');

	var $Object = GetIntrinsic('%Object%');
	var $TypeError = GetIntrinsic('%TypeError%');
	var $String = GetIntrinsic('%String%');

	var assertRecord = $__require('./helpers/assertRecord');
	var $isNaN = $__require('./helpers/isNaN');
	var $isFinite = $__require('./helpers/isFinite');

	var sign = $__require('./helpers/sign');
	var mod = $__require('./helpers/mod');

	var IsCallable = $__require('is-callable');
	var toPrimitive = $__require('es-to-primitive/es5');

	var has = $__require('has');

	// https://es5.github.io/#x9
	var ES5 = {
		ToPrimitive: toPrimitive,

		ToBoolean: function ToBoolean(value) {
			return !!value;
		},
		ToNumber: function ToNumber(value) {
			return +value; // eslint-disable-line no-implicit-coercion
		},
		ToInteger: function ToInteger(value) {
			var number = this.ToNumber(value);
			if ($isNaN(number)) {
				return 0;
			}
			if (number === 0 || !$isFinite(number)) {
				return number;
			}
			return sign(number) * Math.floor(Math.abs(number));
		},
		ToInt32: function ToInt32(x) {
			return this.ToNumber(x) >> 0;
		},
		ToUint32: function ToUint32(x) {
			return this.ToNumber(x) >>> 0;
		},
		ToUint16: function ToUint16(value) {
			var number = this.ToNumber(value);
			if ($isNaN(number) || number === 0 || !$isFinite(number)) {
				return 0;
			}
			var posInt = sign(number) * Math.floor(Math.abs(number));
			return mod(posInt, 0x10000);
		},
		ToString: function ToString(value) {
			return $String(value);
		},
		ToObject: function ToObject(value) {
			this.CheckObjectCoercible(value);
			return $Object(value);
		},
		CheckObjectCoercible: function CheckObjectCoercible(value, optMessage) {
			/* jshint eqnull:true */
			if (value == null) {
				throw new $TypeError(optMessage || 'Cannot call method on ' + value);
			}
			return value;
		},
		IsCallable: IsCallable,
		SameValue: function SameValue(x, y) {
			if (x === y) {
				// 0 === -0, but they are not identical.
				if (x === 0) {
					return 1 / x === 1 / y;
				}
				return true;
			}
			return $isNaN(x) && $isNaN(y);
		},

		// https://www.ecma-international.org/ecma-262/5.1/#sec-8
		Type: function Type(x) {
			if (x === null) {
				return 'Null';
			}
			if (typeof x === 'undefined') {
				return 'Undefined';
			}
			if (typeof x === 'function' || typeof x === 'object') {
				return 'Object';
			}
			if (typeof x === 'number') {
				return 'Number';
			}
			if (typeof x === 'boolean') {
				return 'Boolean';
			}
			if (typeof x === 'string') {
				return 'String';
			}
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type
		IsPropertyDescriptor: function IsPropertyDescriptor(Desc) {
			if (this.Type(Desc) !== 'Object') {
				return false;
			}
			var allowed = {
				'[[Configurable]]': true,
				'[[Enumerable]]': true,
				'[[Get]]': true,
				'[[Set]]': true,
				'[[Value]]': true,
				'[[Writable]]': true
			};

			for (var key in Desc) {
				// eslint-disable-line
				if (has(Desc, key) && !allowed[key]) {
					return false;
				}
			}

			var isData = has(Desc, '[[Value]]');
			var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
			if (isData && IsAccessor) {
				throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
			}
			return true;
		},

		// https://ecma-international.org/ecma-262/5.1/#sec-8.10.1
		IsAccessorDescriptor: function IsAccessorDescriptor(Desc) {
			if (typeof Desc === 'undefined') {
				return false;
			}

			assertRecord(this, 'Property Descriptor', 'Desc', Desc);

			if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
				return false;
			}

			return true;
		},

		// https://ecma-international.org/ecma-262/5.1/#sec-8.10.2
		IsDataDescriptor: function IsDataDescriptor(Desc) {
			if (typeof Desc === 'undefined') {
				return false;
			}

			assertRecord(this, 'Property Descriptor', 'Desc', Desc);

			if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
				return false;
			}

			return true;
		},

		// https://ecma-international.org/ecma-262/5.1/#sec-8.10.3
		IsGenericDescriptor: function IsGenericDescriptor(Desc) {
			if (typeof Desc === 'undefined') {
				return false;
			}

			assertRecord(this, 'Property Descriptor', 'Desc', Desc);

			if (!this.IsAccessorDescriptor(Desc) && !this.IsDataDescriptor(Desc)) {
				return true;
			}

			return false;
		},

		// https://ecma-international.org/ecma-262/5.1/#sec-8.10.4
		FromPropertyDescriptor: function FromPropertyDescriptor(Desc) {
			if (typeof Desc === 'undefined') {
				return Desc;
			}

			assertRecord(this, 'Property Descriptor', 'Desc', Desc);

			if (this.IsDataDescriptor(Desc)) {
				return {
					value: Desc['[[Value]]'],
					writable: !!Desc['[[Writable]]'],
					enumerable: !!Desc['[[Enumerable]]'],
					configurable: !!Desc['[[Configurable]]']
				};
			} else if (this.IsAccessorDescriptor(Desc)) {
				return {
					get: Desc['[[Get]]'],
					set: Desc['[[Set]]'],
					enumerable: !!Desc['[[Enumerable]]'],
					configurable: !!Desc['[[Configurable]]']
				};
			} else {
				throw new $TypeError('FromPropertyDescriptor must be called with a fully populated Property Descriptor');
			}
		},

		// https://ecma-international.org/ecma-262/5.1/#sec-8.10.5
		ToPropertyDescriptor: function ToPropertyDescriptor(Obj) {
			if (this.Type(Obj) !== 'Object') {
				throw new $TypeError('ToPropertyDescriptor requires an object');
			}

			var desc = {};
			if (has(Obj, 'enumerable')) {
				desc['[[Enumerable]]'] = this.ToBoolean(Obj.enumerable);
			}
			if (has(Obj, 'configurable')) {
				desc['[[Configurable]]'] = this.ToBoolean(Obj.configurable);
			}
			if (has(Obj, 'value')) {
				desc['[[Value]]'] = Obj.value;
			}
			if (has(Obj, 'writable')) {
				desc['[[Writable]]'] = this.ToBoolean(Obj.writable);
			}
			if (has(Obj, 'get')) {
				var getter = Obj.get;
				if (typeof getter !== 'undefined' && !this.IsCallable(getter)) {
					throw new TypeError('getter must be a function');
				}
				desc['[[Get]]'] = getter;
			}
			if (has(Obj, 'set')) {
				var setter = Obj.set;
				if (typeof setter !== 'undefined' && !this.IsCallable(setter)) {
					throw new $TypeError('setter must be a function');
				}
				desc['[[Set]]'] = setter;
			}

			if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
				throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
			}
			return desc;
		}
	};

	module.exports = ES5;
});
System.registerDynamic("npm:has@1.0.3.json", [], true, function() {
  return {
    "main": "src/index.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    },
    "map": {
      "./src": "./src/index.js",
      "./test": "./test/index.js"
    }
  };
});

System.registerDynamic('npm:has@1.0.3/src/index.js', ['function-bind'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var bind = $__require('function-bind');

  module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
});
System.registerDynamic("npm:is-regex@1.0.4.json", [], true, function() {
  return {
    "main": "index.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    }
  };
});

System.registerDynamic('npm:is-regex@1.0.4/index.js', ['has'], true, function ($__require, exports, module) {
	'use strict';

	var global = this || self,
	    GLOBAL = global;
	var has = $__require('has');
	var regexExec = RegExp.prototype.exec;
	var gOPD = Object.getOwnPropertyDescriptor;

	var tryRegexExecCall = function tryRegexExec(value) {
		try {
			var lastIndex = value.lastIndex;
			value.lastIndex = 0;

			regexExec.call(value);
			return true;
		} catch (e) {
			return false;
		} finally {
			value.lastIndex = lastIndex;
		}
	};
	var toStr = Object.prototype.toString;
	var regexClass = '[object RegExp]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

	module.exports = function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}
		if (!hasToStringTag) {
			return toStr.call(value) === regexClass;
		}

		var descriptor = gOPD(value, 'lastIndex');
		var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}

		return tryRegexExecCall(value);
	};
});
System.registerDynamic('npm:es-abstract@1.13.0/es2015.js', ['has', 'es-to-primitive/es6', 'object-keys', './GetIntrinsic', './helpers/assertRecord', './helpers/isNaN', './helpers/isFinite', './helpers/assign', './helpers/sign', './helpers/mod', './helpers/isPrimitive', 'function-bind', './es5', 'is-regex'], true, function ($__require, exports, module) {
	'use strict';

	var global = this || self,
	    GLOBAL = global;
	var has = $__require('has');
	var toPrimitive = $__require('es-to-primitive/es6');
	var keys = $__require('object-keys');

	var GetIntrinsic = $__require('./GetIntrinsic');

	var $TypeError = GetIntrinsic('%TypeError%');
	var $SyntaxError = GetIntrinsic('%SyntaxError%');
	var $Array = GetIntrinsic('%Array%');
	var $String = GetIntrinsic('%String%');
	var $Object = GetIntrinsic('%Object%');
	var $Number = GetIntrinsic('%Number%');
	var $Symbol = GetIntrinsic('%Symbol%', true);
	var $RegExp = GetIntrinsic('%RegExp%');

	var hasSymbols = !!$Symbol;

	var assertRecord = $__require('./helpers/assertRecord');
	var $isNaN = $__require('./helpers/isNaN');
	var $isFinite = $__require('./helpers/isFinite');
	var MAX_SAFE_INTEGER = $Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

	var assign = $__require('./helpers/assign');
	var sign = $__require('./helpers/sign');
	var mod = $__require('./helpers/mod');
	var isPrimitive = $__require('./helpers/isPrimitive');
	var parseInteger = parseInt;
	var bind = $__require('function-bind');
	var arraySlice = bind.call(Function.call, $Array.prototype.slice);
	var strSlice = bind.call(Function.call, $String.prototype.slice);
	var isBinary = bind.call(Function.call, $RegExp.prototype.test, /^0b[01]+$/i);
	var isOctal = bind.call(Function.call, $RegExp.prototype.test, /^0o[0-7]+$/i);
	var regexExec = bind.call(Function.call, $RegExp.prototype.exec);
	var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
	var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
	var hasNonWS = bind.call(Function.call, $RegExp.prototype.test, nonWSregex);
	var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
	var isInvalidHexLiteral = bind.call(Function.call, $RegExp.prototype.test, invalidHexLiteral);
	var $charCodeAt = bind.call(Function.call, $String.prototype.charCodeAt);

	var toStr = bind.call(Function.call, Object.prototype.toString);

	var $NumberValueOf = bind.call(Function.call, GetIntrinsic('%NumberPrototype%').valueOf);
	var $BooleanValueOf = bind.call(Function.call, GetIntrinsic('%BooleanPrototype%').valueOf);
	var $StringValueOf = bind.call(Function.call, GetIntrinsic('%StringPrototype%').valueOf);
	var $DateValueOf = bind.call(Function.call, GetIntrinsic('%DatePrototype%').valueOf);

	var $floor = Math.floor;
	var $abs = Math.abs;

	var $ObjectCreate = Object.create;
	var $gOPD = $Object.getOwnPropertyDescriptor;

	var $isExtensible = $Object.isExtensible;

	var $defineProperty = $Object.defineProperty;

	// whitespace from: http://es5.github.io/#x15.5.4.20
	// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
	var ws = ['\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003', '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028', '\u2029\uFEFF'].join('');
	var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
	var replace = bind.call(Function.call, $String.prototype.replace);
	var trim = function (value) {
		return replace(value, trimRegex, '');
	};

	var ES5 = $__require('./es5');

	var hasRegExpMatcher = $__require('is-regex');

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-abstract-operations
	var ES6 = assign(assign({}, ES5), {

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args
		Call: function Call(F, V) {
			var args = arguments.length > 2 ? arguments[2] : [];
			if (!this.IsCallable(F)) {
				throw new $TypeError(F + ' is not a function');
			}
			return F.apply(V, args);
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toprimitive
		ToPrimitive: toPrimitive,

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toboolean
		// ToBoolean: ES5.ToBoolean,

		// https://ecma-international.org/ecma-262/6.0/#sec-tonumber
		ToNumber: function ToNumber(argument) {
			var value = isPrimitive(argument) ? argument : toPrimitive(argument, $Number);
			if (typeof value === 'symbol') {
				throw new $TypeError('Cannot convert a Symbol value to a number');
			}
			if (typeof value === 'string') {
				if (isBinary(value)) {
					return this.ToNumber(parseInteger(strSlice(value, 2), 2));
				} else if (isOctal(value)) {
					return this.ToNumber(parseInteger(strSlice(value, 2), 8));
				} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
					return NaN;
				} else {
					var trimmed = trim(value);
					if (trimmed !== value) {
						return this.ToNumber(trimmed);
					}
				}
			}
			return $Number(value);
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tointeger
		// ToInteger: ES5.ToNumber,

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint32
		// ToInt32: ES5.ToInt32,

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint32
		// ToUint32: ES5.ToUint32,

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint16
		ToInt16: function ToInt16(argument) {
			var int16bit = this.ToUint16(argument);
			return int16bit >= 0x8000 ? int16bit - 0x10000 : int16bit;
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint16
		// ToUint16: ES5.ToUint16,

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint8
		ToInt8: function ToInt8(argument) {
			var int8bit = this.ToUint8(argument);
			return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8
		ToUint8: function ToUint8(argument) {
			var number = this.ToNumber(argument);
			if ($isNaN(number) || number === 0 || !$isFinite(number)) {
				return 0;
			}
			var posInt = sign(number) * $floor($abs(number));
			return mod(posInt, 0x100);
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8clamp
		ToUint8Clamp: function ToUint8Clamp(argument) {
			var number = this.ToNumber(argument);
			if ($isNaN(number) || number <= 0) {
				return 0;
			}
			if (number >= 0xFF) {
				return 0xFF;
			}
			var f = $floor(argument);
			if (f + 0.5 < number) {
				return f + 1;
			}
			if (number < f + 0.5) {
				return f;
			}
			if (f % 2 !== 0) {
				return f + 1;
			}
			return f;
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring
		ToString: function ToString(argument) {
			if (typeof argument === 'symbol') {
				throw new $TypeError('Cannot convert a Symbol value to a string');
			}
			return $String(argument);
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toobject
		ToObject: function ToObject(value) {
			this.RequireObjectCoercible(value);
			return $Object(value);
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
		ToPropertyKey: function ToPropertyKey(argument) {
			var key = this.ToPrimitive(argument, $String);
			return typeof key === 'symbol' ? key : this.ToString(key);
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
		ToLength: function ToLength(argument) {
			var len = this.ToInteger(argument);
			if (len <= 0) {
				return 0;
			} // includes converting -0 to +0
			if (len > MAX_SAFE_INTEGER) {
				return MAX_SAFE_INTEGER;
			}
			return len;
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-canonicalnumericindexstring
		CanonicalNumericIndexString: function CanonicalNumericIndexString(argument) {
			if (toStr(argument) !== '[object String]') {
				throw new $TypeError('must be a string');
			}
			if (argument === '-0') {
				return -0;
			}
			var n = this.ToNumber(argument);
			if (this.SameValue(this.ToString(n), argument)) {
				return n;
			}
			return void 0;
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-requireobjectcoercible
		RequireObjectCoercible: ES5.CheckObjectCoercible,

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
		IsArray: $Array.isArray || function IsArray(argument) {
			return toStr(argument) === '[object Array]';
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iscallable
		// IsCallable: ES5.IsCallable,

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
		IsConstructor: function IsConstructor(argument) {
			return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isextensible-o
		IsExtensible: Object.preventExtensions ? function IsExtensible(obj) {
			if (isPrimitive(obj)) {
				return false;
			}
			return $isExtensible(obj);
		} : function isExtensible(obj) {
			return true;
		}, // eslint-disable-line no-unused-vars

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isinteger
		IsInteger: function IsInteger(argument) {
			if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
				return false;
			}
			var abs = $abs(argument);
			return $floor(abs) === abs;
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey
		IsPropertyKey: function IsPropertyKey(argument) {
			return typeof argument === 'string' || typeof argument === 'symbol';
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-isregexp
		IsRegExp: function IsRegExp(argument) {
			if (!argument || typeof argument !== 'object') {
				return false;
			}
			if (hasSymbols) {
				var isRegExp = argument[$Symbol.match];
				if (typeof isRegExp !== 'undefined') {
					return ES5.ToBoolean(isRegExp);
				}
			}
			return hasRegExpMatcher(argument);
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevalue
		// SameValue: ES5.SameValue,

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero
		SameValueZero: function SameValueZero(x, y) {
			return x === y || $isNaN(x) && $isNaN(y);
		},

		/**
   * 7.3.2 GetV (V, P)
   * 1. Assert: IsPropertyKey(P) is true.
   * 2. Let O be ToObject(V).
   * 3. ReturnIfAbrupt(O).
   * 4. Return O.[[Get]](P, V).
   */
		GetV: function GetV(V, P) {
			// 7.3.2.1
			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}

			// 7.3.2.2-3
			var O = this.ToObject(V);

			// 7.3.2.4
			return O[P];
		},

		/**
   * 7.3.9 - https://ecma-international.org/ecma-262/6.0/#sec-getmethod
   * 1. Assert: IsPropertyKey(P) is true.
   * 2. Let func be GetV(O, P).
   * 3. ReturnIfAbrupt(func).
   * 4. If func is either undefined or null, return undefined.
   * 5. If IsCallable(func) is false, throw a TypeError exception.
   * 6. Return func.
   */
		GetMethod: function GetMethod(O, P) {
			// 7.3.9.1
			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}

			// 7.3.9.2
			var func = this.GetV(O, P);

			// 7.3.9.4
			if (func == null) {
				return void 0;
			}

			// 7.3.9.5
			if (!this.IsCallable(func)) {
				throw new $TypeError(P + 'is not a function');
			}

			// 7.3.9.6
			return func;
		},

		/**
   * 7.3.1 Get (O, P) - https://ecma-international.org/ecma-262/6.0/#sec-get-o-p
   * 1. Assert: Type(O) is Object.
   * 2. Assert: IsPropertyKey(P) is true.
   * 3. Return O.[[Get]](P, O).
   */
		Get: function Get(O, P) {
			// 7.3.1.1
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(O) is not Object');
			}
			// 7.3.1.2
			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}
			// 7.3.1.3
			return O[P];
		},

		Type: function Type(x) {
			if (typeof x === 'symbol') {
				return 'Symbol';
			}
			return ES5.Type(x);
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-speciesconstructor
		SpeciesConstructor: function SpeciesConstructor(O, defaultConstructor) {
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(O) is not Object');
			}
			var C = O.constructor;
			if (typeof C === 'undefined') {
				return defaultConstructor;
			}
			if (this.Type(C) !== 'Object') {
				throw new $TypeError('O.constructor is not an Object');
			}
			var S = hasSymbols && $Symbol.species ? C[$Symbol.species] : void 0;
			if (S == null) {
				return defaultConstructor;
			}
			if (this.IsConstructor(S)) {
				return S;
			}
			throw new $TypeError('no constructor found');
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-completepropertydescriptor
		CompletePropertyDescriptor: function CompletePropertyDescriptor(Desc) {
			assertRecord(this, 'Property Descriptor', 'Desc', Desc);

			if (this.IsGenericDescriptor(Desc) || this.IsDataDescriptor(Desc)) {
				if (!has(Desc, '[[Value]]')) {
					Desc['[[Value]]'] = void 0;
				}
				if (!has(Desc, '[[Writable]]')) {
					Desc['[[Writable]]'] = false;
				}
			} else {
				if (!has(Desc, '[[Get]]')) {
					Desc['[[Get]]'] = void 0;
				}
				if (!has(Desc, '[[Set]]')) {
					Desc['[[Set]]'] = void 0;
				}
			}
			if (!has(Desc, '[[Enumerable]]')) {
				Desc['[[Enumerable]]'] = false;
			}
			if (!has(Desc, '[[Configurable]]')) {
				Desc['[[Configurable]]'] = false;
			}
			return Desc;
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-set-o-p-v-throw
		Set: function Set(O, P, V, Throw) {
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('O must be an Object');
			}
			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('P must be a Property Key');
			}
			if (this.Type(Throw) !== 'Boolean') {
				throw new $TypeError('Throw must be a Boolean');
			}
			if (Throw) {
				O[P] = V;
				return true;
			} else {
				try {
					O[P] = V;
				} catch (e) {
					return false;
				}
			}
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-hasownproperty
		HasOwnProperty: function HasOwnProperty(O, P) {
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('O must be an Object');
			}
			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('P must be a Property Key');
			}
			return has(O, P);
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-hasproperty
		HasProperty: function HasProperty(O, P) {
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('O must be an Object');
			}
			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('P must be a Property Key');
			}
			return P in O;
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-isconcatspreadable
		IsConcatSpreadable: function IsConcatSpreadable(O) {
			if (this.Type(O) !== 'Object') {
				return false;
			}
			if (hasSymbols && typeof $Symbol.isConcatSpreadable === 'symbol') {
				var spreadable = this.Get(O, Symbol.isConcatSpreadable);
				if (typeof spreadable !== 'undefined') {
					return this.ToBoolean(spreadable);
				}
			}
			return this.IsArray(O);
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-invoke
		Invoke: function Invoke(O, P) {
			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('P must be a Property Key');
			}
			var argumentsList = arraySlice(arguments, 2);
			var func = this.GetV(O, P);
			return this.Call(func, O, argumentsList);
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-getiterator
		GetIterator: function GetIterator(obj, method) {
			if (!hasSymbols) {
				throw new SyntaxError('ES.GetIterator depends on native iterator support.');
			}

			var actualMethod = method;
			if (arguments.length < 2) {
				actualMethod = this.GetMethod(obj, $Symbol.iterator);
			}
			var iterator = this.Call(actualMethod, obj);
			if (this.Type(iterator) !== 'Object') {
				throw new $TypeError('iterator must return an object');
			}

			return iterator;
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-iteratornext
		IteratorNext: function IteratorNext(iterator, value) {
			var result = this.Invoke(iterator, 'next', arguments.length < 2 ? [] : [value]);
			if (this.Type(result) !== 'Object') {
				throw new $TypeError('iterator next must return an object');
			}
			return result;
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-iteratorcomplete
		IteratorComplete: function IteratorComplete(iterResult) {
			if (this.Type(iterResult) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
			}
			return this.ToBoolean(this.Get(iterResult, 'done'));
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-iteratorvalue
		IteratorValue: function IteratorValue(iterResult) {
			if (this.Type(iterResult) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
			}
			return this.Get(iterResult, 'value');
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-iteratorstep
		IteratorStep: function IteratorStep(iterator) {
			var result = this.IteratorNext(iterator);
			var done = this.IteratorComplete(result);
			return done === true ? false : result;
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-iteratorclose
		IteratorClose: function IteratorClose(iterator, completion) {
			if (this.Type(iterator) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(iterator) is not Object');
			}
			if (!this.IsCallable(completion)) {
				throw new $TypeError('Assertion failed: completion is not a thunk for a Completion Record');
			}
			var completionThunk = completion;

			var iteratorReturn = this.GetMethod(iterator, 'return');

			if (typeof iteratorReturn === 'undefined') {
				return completionThunk();
			}

			var completionRecord;
			try {
				var innerResult = this.Call(iteratorReturn, iterator, []);
			} catch (e) {
				// if we hit here, then "e" is the innerResult completion that needs re-throwing

				// if the completion is of type "throw", this will throw.
				completionRecord = completionThunk();
				completionThunk = null; // ensure it's not called twice.

				// if not, then return the innerResult completion
				throw e;
			}
			completionRecord = completionThunk(); // if innerResult worked, then throw if the completion does
			completionThunk = null; // ensure it's not called twice.

			if (this.Type(innerResult) !== 'Object') {
				throw new $TypeError('iterator .return must return an object');
			}

			return completionRecord;
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-createiterresultobject
		CreateIterResultObject: function CreateIterResultObject(value, done) {
			if (this.Type(done) !== 'Boolean') {
				throw new $TypeError('Assertion failed: Type(done) is not Boolean');
			}
			return {
				value: value,
				done: done
			};
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-regexpexec
		RegExpExec: function RegExpExec(R, S) {
			if (this.Type(R) !== 'Object') {
				throw new $TypeError('R must be an Object');
			}
			if (this.Type(S) !== 'String') {
				throw new $TypeError('S must be a String');
			}
			var exec = this.Get(R, 'exec');
			if (this.IsCallable(exec)) {
				var result = this.Call(exec, R, [S]);
				if (result === null || this.Type(result) === 'Object') {
					return result;
				}
				throw new $TypeError('"exec" method must return `null` or an Object');
			}
			return regexExec(R, S);
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-arrayspeciescreate
		ArraySpeciesCreate: function ArraySpeciesCreate(originalArray, length) {
			if (!this.IsInteger(length) || length < 0) {
				throw new $TypeError('Assertion failed: length must be an integer >= 0');
			}
			var len = length === 0 ? 0 : length;
			var C;
			var isArray = this.IsArray(originalArray);
			if (isArray) {
				C = this.Get(originalArray, 'constructor');
				// TODO: figure out how to make a cross-realm normal Array, a same-realm Array
				// if (this.IsConstructor(C)) {
				// 	if C is another realm's Array, C = undefined
				// 	Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?
				// }
				if (this.Type(C) === 'Object' && hasSymbols && $Symbol.species) {
					C = this.Get(C, $Symbol.species);
					if (C === null) {
						C = void 0;
					}
				}
			}
			if (typeof C === 'undefined') {
				return $Array(len);
			}
			if (!this.IsConstructor(C)) {
				throw new $TypeError('C must be a constructor');
			}
			return new C(len); // this.Construct(C, len);
		},

		CreateDataProperty: function CreateDataProperty(O, P, V) {
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(O) is not Object');
			}
			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}
			var oldDesc = $gOPD(O, P);
			var extensible = oldDesc || typeof $isExtensible !== 'function' || $isExtensible(O);
			var immutable = oldDesc && (!oldDesc.writable || !oldDesc.configurable);
			if (immutable || !extensible) {
				return false;
			}
			var newDesc = {
				configurable: true,
				enumerable: true,
				value: V,
				writable: true
			};
			$defineProperty(O, P, newDesc);
			return true;
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-createdatapropertyorthrow
		CreateDataPropertyOrThrow: function CreateDataPropertyOrThrow(O, P, V) {
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(O) is not Object');
			}
			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}
			var success = this.CreateDataProperty(O, P, V);
			if (!success) {
				throw new $TypeError('unable to create data property');
			}
			return success;
		},

		// https://www.ecma-international.org/ecma-262/6.0/#sec-objectcreate
		ObjectCreate: function ObjectCreate(proto, internalSlotsList) {
			if (proto !== null && this.Type(proto) !== 'Object') {
				throw new $TypeError('Assertion failed: proto must be null or an object');
			}
			var slots = arguments.length < 2 ? [] : internalSlotsList;
			if (slots.length > 0) {
				throw new $SyntaxError('es-abstract does not yet support internal slots');
			}

			if (proto === null && !$ObjectCreate) {
				throw new $SyntaxError('native Object.create support is required to create null objects');
			}

			return $ObjectCreate(proto);
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-advancestringindex
		AdvanceStringIndex: function AdvanceStringIndex(S, index, unicode) {
			if (this.Type(S) !== 'String') {
				throw new $TypeError('S must be a String');
			}
			if (!this.IsInteger(index) || index < 0 || index > MAX_SAFE_INTEGER) {
				throw new $TypeError('Assertion failed: length must be an integer >= 0 and <= 2**53');
			}
			if (this.Type(unicode) !== 'Boolean') {
				throw new $TypeError('Assertion failed: unicode must be a Boolean');
			}
			if (!unicode) {
				return index + 1;
			}
			var length = S.length;
			if (index + 1 >= length) {
				return index + 1;
			}

			var first = $charCodeAt(S, index);
			if (first < 0xD800 || first > 0xDBFF) {
				return index + 1;
			}

			var second = $charCodeAt(S, index + 1);
			if (second < 0xDC00 || second > 0xDFFF) {
				return index + 1;
			}

			return index + 2;
		},

		// https://www.ecma-international.org/ecma-262/6.0/#sec-createmethodproperty
		CreateMethodProperty: function CreateMethodProperty(O, P, V) {
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(O) is not Object');
			}

			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}

			var newDesc = {
				configurable: true,
				enumerable: false,
				value: V,
				writable: true
			};
			return !!$defineProperty(O, P, newDesc);
		},

		// https://www.ecma-international.org/ecma-262/6.0/#sec-definepropertyorthrow
		DefinePropertyOrThrow: function DefinePropertyOrThrow(O, P, desc) {
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(O) is not Object');
			}

			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}

			return !!$defineProperty(O, P, desc);
		},

		// https://www.ecma-international.org/ecma-262/6.0/#sec-deletepropertyorthrow
		DeletePropertyOrThrow: function DeletePropertyOrThrow(O, P) {
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(O) is not Object');
			}

			if (!this.IsPropertyKey(P)) {
				throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
			}

			var success = delete O[P];
			if (!success) {
				throw new TypeError('Attempt to delete property failed.');
			}
			return success;
		},

		// https://www.ecma-international.org/ecma-262/6.0/#sec-enumerableownnames
		EnumerableOwnNames: function EnumerableOwnNames(O) {
			if (this.Type(O) !== 'Object') {
				throw new $TypeError('Assertion failed: Type(O) is not Object');
			}

			return keys(O);
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-number-prototype-object
		thisNumberValue: function thisNumberValue(value) {
			if (this.Type(value) === 'Number') {
				return value;
			}

			return $NumberValueOf(value);
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-boolean-prototype-object
		thisBooleanValue: function thisBooleanValue(value) {
			if (this.Type(value) === 'Boolean') {
				return value;
			}

			return $BooleanValueOf(value);
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-string-prototype-object
		thisStringValue: function thisStringValue(value) {
			if (this.Type(value) === 'String') {
				return value;
			}

			return $StringValueOf(value);
		},

		// https://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-date-prototype-object
		thisTimeValue: function thisTimeValue(value) {
			return $DateValueOf(value);
		}
	});

	delete ES6.CheckObjectCoercible; // renamed in ES6 to RequireObjectCoercible

	module.exports = ES6;
});
System.registerDynamic('npm:es-abstract@1.13.0/es2016.js', ['./es2015', './helpers/assign'], true, function ($__require, exports, module) {
	'use strict';

	var global = this || self,
	    GLOBAL = global;
	var ES2015 = $__require('./es2015');
	var assign = $__require('./helpers/assign');

	var ES2016 = assign(assign({}, ES2015), {
		// https://github.com/tc39/ecma262/pull/60
		SameValueNonNumber: function SameValueNonNumber(x, y) {
			if (typeof x === 'number' || typeof x !== typeof y) {
				throw new TypeError('SameValueNonNumber requires two non-number values of the same type.');
			}
			return this.SameValue(x, y);
		}
	});

	module.exports = ES2016;
});
System.registerDynamic('npm:function-bind@1.1.1/implementation.js', [], true, function ($__require, exports, module) {
    'use strict';

    /* eslint no-invalid-this: 1 */

    var global = this || self,
        GLOBAL = global;
    var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
    var slice = Array.prototype.slice;
    var toStr = Object.prototype.toString;
    var funcType = '[object Function]';

    module.exports = function bind(that) {
        var target = this;
        if (typeof target !== 'function' || toStr.call(target) !== funcType) {
            throw new TypeError(ERROR_MESSAGE + target);
        }
        var args = slice.call(arguments, 1);

        var bound;
        var binder = function () {
            if (this instanceof bound) {
                var result = target.apply(this, args.concat(slice.call(arguments)));
                if (Object(result) === result) {
                    return result;
                }
                return this;
            } else {
                return target.apply(that, args.concat(slice.call(arguments)));
            }
        };

        var boundLength = Math.max(0, target.length - args.length);
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
            boundArgs.push('$' + i);
        }

        bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

        if (target.prototype) {
            var Empty = function Empty() {};
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            Empty.prototype = null;
        }

        return bound;
    };
});
System.registerDynamic("npm:function-bind@1.1.1.json", [], true, function() {
  return {
    "main": "index.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    },
    "map": {
      "./test": "./test/index.js"
    }
  };
});

System.registerDynamic('npm:function-bind@1.1.1/index.js', ['./implementation'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var implementation = $__require('./implementation');

  module.exports = Function.prototype.bind || implementation;
});
System.registerDynamic('npm:es-abstract@1.13.0/helpers/assign.js', ['function-bind'], true, function ($__require, exports, module) {
	var global = this || self,
	    GLOBAL = global;
	var bind = $__require('function-bind');
	var has = bind.call(Function.call, Object.prototype.hasOwnProperty);

	var $assign = Object.assign;

	module.exports = function assign(target, source) {
		if ($assign) {
			return $assign(target, source);
		}

		for (var key in source) {
			if (has(source, key)) {
				target[key] = source[key];
			}
		}
		return target;
	};
});
System.registerDynamic('npm:es-abstract@1.13.0/helpers/forEach.js', [], true, function ($__require, exports, module) {
	'use strict';

	var global = this || self,
	    GLOBAL = global;
	module.exports = function forEach(array, callback) {
		for (var i = 0; i < array.length; i += 1) {
			callback(array[i], i, array);
		}
	};
});
System.registerDynamic('npm:es-abstract@1.13.0/GetIntrinsic.js', [], true, function ($__require, exports, module) {
	'use strict';

	/* globals
 	Set,
 	Map,
 	WeakSet,
 	WeakMap,
 
 	Promise,
 
 	Symbol,
 	Proxy,
 
 	Atomics,
 	SharedArrayBuffer,
 
 	ArrayBuffer,
 	DataView,
 	Uint8Array,
 	Float32Array,
 	Float64Array,
 	Int8Array,
 	Int16Array,
 	Int32Array,
 	Uint8ClampedArray,
 	Uint16Array,
 	Uint32Array,
 */

	var global = this || self,
	    GLOBAL = global;
	var undefined; // eslint-disable-line no-shadow-restricted-names

	var ThrowTypeError = Object.getOwnPropertyDescriptor ? function () {
		return Object.getOwnPropertyDescriptor(arguments, 'callee').get;
	}() : function () {
		throw new TypeError();
	};

	var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

	var getProto = Object.getPrototypeOf || function (x) {
		return x.__proto__;
	}; // eslint-disable-line no-proto

	var generator; // = function * () {};
	var generatorFunction = generator ? getProto(generator) : undefined;
	var asyncFn; // async function() {};
	var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
	var asyncGen; // async function * () {};
	var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
	var asyncGenIterator = asyncGen ? asyncGen() : undefined;

	var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

	var INTRINSICS = {
		'$ %Array%': Array,
		'$ %ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
		'$ %ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
		'$ %ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
		'$ %ArrayPrototype%': Array.prototype,
		'$ %ArrayProto_entries%': Array.prototype.entries,
		'$ %ArrayProto_forEach%': Array.prototype.forEach,
		'$ %ArrayProto_keys%': Array.prototype.keys,
		'$ %ArrayProto_values%': Array.prototype.values,
		'$ %AsyncFromSyncIteratorPrototype%': undefined,
		'$ %AsyncFunction%': asyncFunction,
		'$ %AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
		'$ %AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
		'$ %AsyncGeneratorFunction%': asyncGenFunction,
		'$ %AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
		'$ %AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
		'$ %Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
		'$ %Boolean%': Boolean,
		'$ %BooleanPrototype%': Boolean.prototype,
		'$ %DataView%': typeof DataView === 'undefined' ? undefined : DataView,
		'$ %DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
		'$ %Date%': Date,
		'$ %DatePrototype%': Date.prototype,
		'$ %decodeURI%': decodeURI,
		'$ %decodeURIComponent%': decodeURIComponent,
		'$ %encodeURI%': encodeURI,
		'$ %encodeURIComponent%': encodeURIComponent,
		'$ %Error%': Error,
		'$ %ErrorPrototype%': Error.prototype,
		'$ %eval%': eval, // eslint-disable-line no-eval
		'$ %EvalError%': EvalError,
		'$ %EvalErrorPrototype%': EvalError.prototype,
		'$ %Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
		'$ %Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
		'$ %Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
		'$ %Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
		'$ %Function%': Function,
		'$ %FunctionPrototype%': Function.prototype,
		'$ %Generator%': generator ? getProto(generator()) : undefined,
		'$ %GeneratorFunction%': generatorFunction,
		'$ %GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
		'$ %Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
		'$ %Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
		'$ %Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
		'$ %Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
		'$ %Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
		'$ %Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
		'$ %isFinite%': isFinite,
		'$ %isNaN%': isNaN,
		'$ %IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
		'$ %JSON%': JSON,
		'$ %JSONParse%': JSON.parse,
		'$ %Map%': typeof Map === 'undefined' ? undefined : Map,
		'$ %MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
		'$ %MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
		'$ %Math%': Math,
		'$ %Number%': Number,
		'$ %NumberPrototype%': Number.prototype,
		'$ %Object%': Object,
		'$ %ObjectPrototype%': Object.prototype,
		'$ %ObjProto_toString%': Object.prototype.toString,
		'$ %ObjProto_valueOf%': Object.prototype.valueOf,
		'$ %parseFloat%': parseFloat,
		'$ %parseInt%': parseInt,
		'$ %Promise%': typeof Promise === 'undefined' ? undefined : Promise,
		'$ %PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
		'$ %PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
		'$ %Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
		'$ %Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
		'$ %Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
		'$ %Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
		'$ %RangeError%': RangeError,
		'$ %RangeErrorPrototype%': RangeError.prototype,
		'$ %ReferenceError%': ReferenceError,
		'$ %ReferenceErrorPrototype%': ReferenceError.prototype,
		'$ %Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
		'$ %RegExp%': RegExp,
		'$ %RegExpPrototype%': RegExp.prototype,
		'$ %Set%': typeof Set === 'undefined' ? undefined : Set,
		'$ %SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
		'$ %SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
		'$ %SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
		'$ %SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
		'$ %String%': String,
		'$ %StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
		'$ %StringPrototype%': String.prototype,
		'$ %Symbol%': hasSymbols ? Symbol : undefined,
		'$ %SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
		'$ %SyntaxError%': SyntaxError,
		'$ %SyntaxErrorPrototype%': SyntaxError.prototype,
		'$ %ThrowTypeError%': ThrowTypeError,
		'$ %TypedArray%': TypedArray,
		'$ %TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
		'$ %TypeError%': TypeError,
		'$ %TypeErrorPrototype%': TypeError.prototype,
		'$ %Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
		'$ %Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
		'$ %Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
		'$ %Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
		'$ %Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
		'$ %Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
		'$ %Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
		'$ %Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
		'$ %URIError%': URIError,
		'$ %URIErrorPrototype%': URIError.prototype,
		'$ %WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
		'$ %WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
		'$ %WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
		'$ %WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
	};

	module.exports = function GetIntrinsic(name, allowMissing) {
		if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
			throw new TypeError('"allowMissing" argument must be a boolean');
		}

		var key = '$ ' + name;
		if (!(key in INTRINSICS)) {
			throw new SyntaxError('intrinsic ' + name + ' does not exist!');
		}

		// istanbul ignore if // hopefully this is impossible to test :-)
		if (typeof INTRINSICS[key] === 'undefined' && !allowMissing) {
			throw new TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}
		return INTRINSICS[key];
	};
});
System.registerDynamic("npm:es-abstract@1.13.0.json", [], true, function() {
  return {
    "main": "index.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    },
    "map": {
      "./test": "./test/index.js"
    }
  };
});

System.registerDynamic('npm:es-abstract@1.13.0/es2017.js', ['function-bind', './es2016', './helpers/assign', './helpers/forEach', './GetIntrinsic'], true, function ($__require, exports, module) {
	'use strict';

	var global = this || self,
	    GLOBAL = global;
	var bind = $__require('function-bind');

	var ES2016 = $__require('./es2016');
	var assign = $__require('./helpers/assign');
	var forEach = $__require('./helpers/forEach');

	var GetIntrinsic = $__require('./GetIntrinsic');

	var $TypeError = GetIntrinsic('%TypeError%');
	var $isEnumerable = bind.call(Function.call, GetIntrinsic('%ObjectPrototype%').propertyIsEnumerable);
	var $pushApply = bind.call(Function.apply, GetIntrinsic('%ArrayPrototype%').push);

	var ES2017 = assign(assign({}, ES2016), {
		ToIndex: function ToIndex(value) {
			if (typeof value === 'undefined') {
				return 0;
			}
			var integerIndex = this.ToInteger(value);
			if (integerIndex < 0) {
				throw new RangeError('index must be >= 0');
			}
			var index = this.ToLength(integerIndex);
			if (!this.SameValueZero(integerIndex, index)) {
				throw new RangeError('index must be >= 0 and < 2 ** 53 - 1');
			}
			return index;
		},

		// https://www.ecma-international.org/ecma-262/8.0/#sec-enumerableownproperties
		EnumerableOwnProperties: function EnumerableOwnProperties(O, kind) {
			var keys = ES2016.EnumerableOwnNames(O);
			if (kind === 'key') {
				return keys;
			}
			if (kind === 'value' || kind === 'key+value') {
				var results = [];
				forEach(keys, function (key) {
					if ($isEnumerable(O, key)) {
						$pushApply(results, [kind === 'value' ? O[key] : [key, O[key]]]);
					}
				});
				return results;
			}
			throw new $TypeError('Assertion failed: "kind" is not "key", "value", or "key+value": ' + kind);
		}
	});

	delete ES2017.EnumerableOwnNames; // replaced with EnumerableOwnProperties

	module.exports = ES2017;
});
System.registerDynamic('npm:object.fromentries@2.0.0/implementation.js', ['es-abstract/es2017'], true, function ($__require, exports, module) {
	'use strict';

	var global = this || self,
	    GLOBAL = global;
	var ES = $__require('es-abstract/es2017');

	var ThrowCompletion = function Throw(error) {
		throw error;
	};

	var legacyAssign = function assign(obj, entries) {
		for (var i = 0; i < entries.length; ++i) {
			var entry = entries[i];
			if (ES.Type(entry) !== 'Object') {
				throw new TypeError('iterator returned a non-object; entry expected');
			}

			var key = ES.Get(entry, '0');
			var value = ES.Get(entry, '1');
			var propertyKey = ES.ToPropertyKey(key);
			ES.CreateDataPropertyOrThrow(obj, propertyKey, value);
		}
	};

	/* global Symbol */

	var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

	module.exports = function fromEntries(iterable) {
		ES.RequireObjectCoercible(iterable);

		var obj = {};

		// this part isn't in the spec, it's for a reasonable fallback for pre-ES6 environments
		if (!hasSymbols) {
			if (!ES.IsArray(iterable)) {
				throw new TypeError('this environment lacks native Symbols, and can not support non-Array iterables');
			}
			legacyAssign(obj, iterable);
			return obj;
		}

		/*
  return ES.AddEntriesFromIterable(obj, iterable, ES.CreateBuiltinFunction('CreateDataPropertyOnObject'));
  function adder(key, value) {
  	var O = this;
  	var propertyKey = ES.ToPropertyKey(key);
  	CreateDataPropertyOrThrow(O, propertyKey, value);
  }
  */

		var iter = ES.GetIterator(iterable);
		while (true) {
			// eslint-disable-line no-constant-condition
			var next = ES.IteratorStep(iter);
			if (next === false) {
				return obj;
			}

			var nextItem = ES.IteratorValue(next);
			if (ES.Type(nextItem) !== 'Object') {
				var error = new TypeError('iterator returned a non-object; entry expected');
				return ES.IteratorClose(iter, ThrowCompletion(error));
			}

			try {
				var key = ES.Get(nextItem, '0');
				var value = ES.Get(nextItem, '1');
				var propertyKey = ES.ToPropertyKey(key);
				ES.CreateDataPropertyOrThrow(obj, propertyKey, value);
			} catch (e) {
				return ES.IteratorClose(iter, ThrowCompletion(e));
			}
		}
	};
});
System.registerDynamic('npm:object.fromentries@2.0.0/polyfill.js', ['./implementation'], true, function ($__require, exports, module) {
	'use strict';

	var global = this || self,
	    GLOBAL = global;
	var implementation = $__require('./implementation');

	module.exports = function getPolyfill() {
		return typeof Object.fromEntries === 'function' ? Object.fromEntries : implementation;
	};
});
System.registerDynamic('npm:object-keys@1.1.1/isArguments.js', [], true, function ($__require, exports, module) {
	'use strict';

	var global = this || self,
	    GLOBAL = global;
	var toStr = Object.prototype.toString;

	module.exports = function isArguments(value) {
		var str = toStr.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]' && value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr.call(value.callee) === '[object Function]';
		}
		return isArgs;
	};
});
System.registerDynamic('npm:object-keys@1.1.1/implementation.js', ['./isArguments'], true, function ($__require, exports, module) {
	'use strict';

	var global = this || self,
	    GLOBAL = global;
	var keysShim;
	if (!Object.keys) {
		// modified from https://github.com/es-shims/es5-shim
		var has = Object.prototype.hasOwnProperty;
		var toStr = Object.prototype.toString;
		var isArgs = $__require('./isArguments'); // eslint-disable-line global-require
		var isEnumerable = Object.prototype.propertyIsEnumerable;
		var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
		var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
		var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];
		var equalsConstructorPrototype = function (o) {
			var ctor = o.constructor;
			return ctor && ctor.prototype === o;
		};
		var excludedKeys = {
			$applicationCache: true,
			$console: true,
			$external: true,
			$frame: true,
			$frameElement: true,
			$frames: true,
			$innerHeight: true,
			$innerWidth: true,
			$onmozfullscreenchange: true,
			$onmozfullscreenerror: true,
			$outerHeight: true,
			$outerWidth: true,
			$pageXOffset: true,
			$pageYOffset: true,
			$parent: true,
			$scrollLeft: true,
			$scrollTop: true,
			$scrollX: true,
			$scrollY: true,
			$self: true,
			$webkitIndexedDB: true,
			$webkitStorageInfo: true,
			$window: true
		};
		var hasAutomationEqualityBug = function () {
			/* global window */
			if (typeof window === 'undefined') {
				return false;
			}
			for (var k in window) {
				try {
					if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
						try {
							equalsConstructorPrototype(window[k]);
						} catch (e) {
							return true;
						}
					}
				} catch (e) {
					return true;
				}
			}
			return false;
		}();
		var equalsConstructorPrototypeIfNotBuggy = function (o) {
			/* global window */
			if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
				return equalsConstructorPrototype(o);
			}
			try {
				return equalsConstructorPrototype(o);
			} catch (e) {
				return false;
			}
		};

		keysShim = function keys(object) {
			var isObject = object !== null && typeof object === 'object';
			var isFunction = toStr.call(object) === '[object Function]';
			var isArguments = isArgs(object);
			var isString = isObject && toStr.call(object) === '[object String]';
			var theKeys = [];

			if (!isObject && !isFunction && !isArguments) {
				throw new TypeError('Object.keys called on a non-object');
			}

			var skipProto = hasProtoEnumBug && isFunction;
			if (isString && object.length > 0 && !has.call(object, 0)) {
				for (var i = 0; i < object.length; ++i) {
					theKeys.push(String(i));
				}
			}

			if (isArguments && object.length > 0) {
				for (var j = 0; j < object.length; ++j) {
					theKeys.push(String(j));
				}
			} else {
				for (var name in object) {
					if (!(skipProto && name === 'prototype') && has.call(object, name)) {
						theKeys.push(String(name));
					}
				}
			}

			if (hasDontEnumBug) {
				var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

				for (var k = 0; k < dontEnums.length; ++k) {
					if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
						theKeys.push(dontEnums[k]);
					}
				}
			}
			return theKeys;
		};
	}
	module.exports = keysShim;
});
System.registerDynamic("npm:object-keys@1.1.1.json", [], true, function() {
  return {
    "main": "index.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    },
    "map": {
      "./test": "./test/index.js"
    }
  };
});

System.registerDynamic('npm:object-keys@1.1.1/index.js', ['./isArguments', './implementation'], true, function ($__require, exports, module) {
	'use strict';

	var global = this || self,
	    GLOBAL = global;
	var slice = Array.prototype.slice;
	var isArgs = $__require('./isArguments');

	var origKeys = Object.keys;
	var keysShim = origKeys ? function keys(o) {
		return origKeys(o);
	} : $__require('./implementation');

	var originalKeys = Object.keys;

	keysShim.shim = function shimObjectKeys() {
		if (Object.keys) {
			var keysWorksWithArguments = function () {
				// Safari 5.0 bug
				var args = Object.keys(arguments);
				return args && args.length === arguments.length;
			}(1, 2);
			if (!keysWorksWithArguments) {
				Object.keys = function keys(object) {
					// eslint-disable-line func-name-matching
					if (isArgs(object)) {
						return originalKeys(slice.call(object));
					}
					return originalKeys(object);
				};
			}
		} else {
			Object.keys = keysShim;
		}
		return Object.keys || keysShim;
	};

	module.exports = keysShim;
});
System.registerDynamic("npm:define-properties@1.1.3.json", [], true, function() {
  return {
    "main": "index.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    },
    "map": {
      "./test": "./test/index.js"
    }
  };
});

System.registerDynamic('npm:define-properties@1.1.3/index.js', ['object-keys'], true, function ($__require, exports, module) {
	'use strict';

	var global = this || self,
	    GLOBAL = global;
	var keys = $__require('object-keys');
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

	var toStr = Object.prototype.toString;
	var concat = Array.prototype.concat;
	var origDefineProperty = Object.defineProperty;

	var isFunction = function (fn) {
		return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
	};

	var arePropertyDescriptorsSupported = function () {
		var obj = {};
		try {
			origDefineProperty(obj, 'x', { enumerable: false, value: obj });
			// eslint-disable-next-line no-unused-vars, no-restricted-syntax
			for (var _ in obj) {
				// jscs:ignore disallowUnusedVariables
				return false;
			}
			return obj.x === obj;
		} catch (e) {
			/* this is IE 8. */
			return false;
		}
	};
	var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

	var defineProperty = function (object, name, value, predicate) {
		if (name in object && (!isFunction(predicate) || !predicate())) {
			return;
		}
		if (supportsDescriptors) {
			origDefineProperty(object, name, {
				configurable: true,
				enumerable: false,
				value: value,
				writable: true
			});
		} else {
			object[name] = value;
		}
	};

	var defineProperties = function (object, map) {
		var predicates = arguments.length > 2 ? arguments[2] : {};
		var props = keys(map);
		if (hasSymbols) {
			props = concat.call(props, Object.getOwnPropertySymbols(map));
		}
		for (var i = 0; i < props.length; i += 1) {
			defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
		}
	};

	defineProperties.supportsDescriptors = !!supportsDescriptors;

	module.exports = defineProperties;
});
System.registerDynamic('npm:object.fromentries@2.0.0/shim.js', ['./polyfill', 'define-properties'], true, function ($__require, exports, module) {
	'use strict';

	var global = this || self,
	    GLOBAL = global;
	var getPolyfill = $__require('./polyfill');
	var define = $__require('define-properties');

	module.exports = function shimEntries() {
		var polyfill = getPolyfill();
		define(Object, { fromEntries: polyfill }, {
			fromEntries: function testEntries() {
				return Object.fromEntries !== polyfill;
			}
		});
		return polyfill;
	};
});
System.registerDynamic("npm:object.fromentries@2.0.0.json", [], true, function() {
  return {
    "main": "index.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    },
    "map": {
      "./test": "./test/index.js"
    }
  };
});

System.registerDynamic('npm:object.fromentries@2.0.0/index.js', ['define-properties', './implementation', './polyfill', './shim'], true, function ($__require, exports, module) {
	'use strict';

	var global = this || self,
	    GLOBAL = global;
	var define = $__require('define-properties');

	var implementation = $__require('./implementation');
	var getPolyfill = $__require('./polyfill');
	var shim = $__require('./shim');

	var polyfill = getPolyfill();

	define(polyfill, {
		getPolyfill: getPolyfill,
		implementation: implementation,
		shim: shim
	});

	module.exports = polyfill;
});
System.register('theatlantic/js/paywall/utils/nudgeSequence.js', [], function (_export, _context) {
  "use strict";

  var templates;
  function nudgeSequence(pageviews, cap) {
    if (pageviews === 1) {
      return templates.initial;
    } else if (cap - pageviews === 1) {
      return templates.penultimate;
    } else if (pageviews < cap) {
      return templates.mid;
    } else {
      return templates.last;
    }
  }

  _export('default', nudgeSequence);

  return {
    setters: [],
    execute: function () {
      templates = {
        initial: {
          compressedElem: 'nudge-compressed',
          expandedElem: 'nudge-expanded',
          message: 'Thank you for reading The Atlantic.',
          subheader: 'Enjoy unlimited access to all of our journalism.',
          messageCompressed: 'Enjoy unlimited access to The Atlantic.',
          buttonCentered: true,
          countNotice: 'more free articles this month',
          countNoticeMobile: 'Thank you for reading The Atlantic.'
        },
        mid: {
          compressedElem: 'nudge-compressed',
          expandedElem: 'nudge-expanded',
          message: 'Discover new ideas. Rethink old assumptions.',
          subheader: 'Get unlimited access to The Atlantic.',
          messageCompressed: 'more free articles this month',
          countNotice: 'more free articles this month',
          countNoticeMobile: 'more free articles'
        },
        penultimate: {
          compressedElem: 'nudge-compressed',
          expandedElem: 'nudge-expanded',
          message: 'Discover new ideas. Rethink old assumptions.',
          subheader: 'Get unlimited access to The Atlantic.',
          messageCompressed: 'more free article this month',
          countNotice: 'more free article this month',
          countNoticeMobile: 'more free article'
        },
        last: {
          compressedElem: 'nudge-compressed',
          expandedElem: 'nudge-expanded',
          message: 'Never miss a story from The Atlantic.',
          subheader: 'Get unlimited access to all of our journalism.',
          subheaderMobile: 'Never miss a story. Get unlimited access.',
          messageCompressed: 'This is your last free article.',
          countNotice: 'This is your last free article.',
          countNoticeMobile: 'This is your last free article.'
        }
      };
    }
  };
});
System.register('theatlantic/js/paywall/paywall.js', ['pageInfo', './utils/Meter', './utils/Intervention', './nudge', './gate', './meter', './non-metered-nudge', 'fromEntries', './utils/nudgeSequence', '../utils/user'], function (_export, _context) {
  "use strict";

  var pageInfo, Meter, Intervention, nudgeCallback, gateCallback, meterCallback, renderNonMeteredNudge, fromEntries, nudgeSequence, hasPaymeterAccess, articleViewLimit, meter, nudge, gate, urlParams;
  return {
    setters: [function (_pageInfo) {
      pageInfo = _pageInfo;
    }, function (_utilsMeter) {
      Meter = _utilsMeter.default;
    }, function (_utilsIntervention) {
      Intervention = _utilsIntervention.default;
    }, function (_nudge) {
      nudgeCallback = _nudge.default;
    }, function (_gate) {
      gateCallback = _gate.default;
    }, function (_meter) {
      meterCallback = _meter.default;
    }, function (_nonMeteredNudge) {
      renderNonMeteredNudge = _nonMeteredNudge.renderNonMeteredNudge;
    }, function (_fromEntries) {
      fromEntries = _fromEntries.default;
    }, function (_utilsNudgeSequence) {
      nudgeSequence = _utilsNudgeSequence.default;
    }, function (_utilsUser) {
      hasPaymeterAccess = _utilsUser.hasPaymeterAccess;
    }],
    execute: function () {

      fromEntries.shim();

      articleViewLimit = 3;

      _export('meter', meter = new Meter({
        //this would be true if someone was in another test -- how to check just against the experiment and not the variant?
        cap: articleViewLimit,
        identifier: pageInfo.article_id,
        cookieName: 'articleViews'
      }));

      _export('meter', meter);

      _export('nudge', nudge = new Intervention(nudgeCallback, nudgeSequence(meter.getPageViews(), meter.getCap())));

      _export('nudge', nudge);

      _export('gate', gate = new Intervention(gateCallback, {
        mobileSubtitle: "We hope you've enjoyed your free articles.",
        mobileTitle: "Don't miss another story. Become a subscriber today.",
        title: "We hope you've enjoyed your free articles. To keep reading, subscribe today.",
        mobileTitleBelow: 'Subscribers enjoy unlimited access.'
      }));

      _export('gate', gate);

      meter.on('pageview', meterCallback);

      urlParams = new URLSearchParams(window.location.search);


      // If the user isn't a subscriber, render the nudges and the gate.
      if (!hasPaymeterAccess()) {
        if (urlParams.get('surface') === 'meter_limit_reached') {
          meter.on('pageview', gate.render);
        } else if (pageInfo.show_nudges) {
          //standard nudges is logged in
          if (meter.getPageViews() <= meter.getCap()) {
            meter.on('pageview', nudge.render);
          }
          //then gate!
          meter.on('cap-hit', gate.render);
        }
      }

      if (pageInfo.has_meter) {
        meter.enable();
      }

      if (!pageInfo.has_meter && !hasPaymeterAccess() && pageInfo.title !== 'Newsletters') renderNonMeteredNudge();
    }
  };
});
System.register("npm:systemjs-plugin-babel@0.0.25/babel-helpers/extends.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      });
    }
  };
});
System.registerDynamic("theatlantic/templates/hippo/components/nudge-expanded.html", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;

  var precompiled = global.nunjucksPrecompiled = global.nunjucksPrecompiled || {};
  var template = function () {
    function root(env, context, frame, runtime, cb) {
      var lineno = null;
      var colno = null;
      var output = "";
      try {
        var parentTemplate = null;
        var t_1;
        t_1 = runtime.contextOrFrameLookup(context, frame, "cap") - runtime.contextOrFrameLookup(context, frame, "viewCount") == 0;
        frame.set("final", t_1, true);
        if (frame.topLevel) {
          context.setVariable("final", t_1);
        }
        if (frame.topLevel) {
          context.addExport("final", t_1);
        }
        output += " ";
        var t_2;
        t_2 = runtime.contextOrFrameLookup(context, frame, "viewCount") == 1;
        frame.set("first", t_2, true);
        if (frame.topLevel) {
          context.setVariable("first", t_2);
        }
        if (frame.topLevel) {
          context.addExport("first", t_2);
        }
        output += "\n<!-- template for all nudges but last, which is below -->\n";
        if (!runtime.contextOrFrameLookup(context, frame, "final")) {
          output += "\n<!-- left container for meter count and copy -->\n";
          output += runtime.suppressValue((lineno = 4, colno = 10, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "component"), "component", context, ["hippo/components/paywall/expanded-mid.html", runtime.makeKeywordArgs({ "message": runtime.contextOrFrameLookup(context, frame, "message"), "cap": runtime.contextOrFrameLookup(context, frame, "cap"), "viewCount": runtime.contextOrFrameLookup(context, frame, "viewCount"), "countNotice": runtime.contextOrFrameLookup(context, frame, "countNotice"), "countNoticeMobile": runtime.contextOrFrameLookup(context, frame, "countNoticeMobile"), "subheader": runtime.contextOrFrameLookup(context, frame, "subheader") })])), env.opts.autoescape);
          output += "\n";
          ;
        }
        output += "\n\n<!-- final nudge -->\n";
        if (runtime.contextOrFrameLookup(context, frame, "final")) {
          output += " ";
          output += runtime.suppressValue((lineno = 14, colno = 21, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "component"), "component", context, ["hippo/components/paywall/expanded-final.html", runtime.makeKeywordArgs({ "message": runtime.contextOrFrameLookup(context, frame, "message"), "cap": runtime.contextOrFrameLookup(context, frame, "cap"), "viewCount": runtime.contextOrFrameLookup(context, frame, "viewCount"), "countNotice": runtime.contextOrFrameLookup(context, frame, "countNotice"), "countNoticeMobile": runtime.contextOrFrameLookup(context, frame, "countNoticeMobile"), "subheaderMobile": runtime.contextOrFrameLookup(context, frame, "subheaderMobile"), "subheader": runtime.contextOrFrameLookup(context, frame, "subheader") })])), env.opts.autoescape);
          output += "\n";
          ;
        }
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root: root
    };
  }();
  precompiled["hippo/components/nudge-expanded.html"] = template;
  module.exports = template;
});
System.registerDynamic("theatlantic/templates/hippo/components/nudge-compressed.html", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;

  var precompiled = global.nunjucksPrecompiled = global.nunjucksPrecompiled || {};
  var template = function () {
    function root(env, context, frame, runtime, cb) {
      var lineno = null;
      var colno = null;
      var output = "";
      try {
        var parentTemplate = null;
        output += "<!-- left container for meter count and copy -->\n";
        var t_1;
        t_1 = runtime.contextOrFrameLookup(context, frame, "cap") - runtime.contextOrFrameLookup(context, frame, "viewCount") == 0;
        frame.set("final", t_1, true);
        if (frame.topLevel) {
          context.setVariable("final", t_1);
        }
        if (frame.topLevel) {
          context.addExport("final", t_1);
        }
        output += "\n";
        var t_2;
        t_2 = runtime.contextOrFrameLookup(context, frame, "viewCount") == 1;
        frame.set("first", t_2, true);
        if (frame.topLevel) {
          context.setVariable("first", t_2);
        }
        if (frame.topLevel) {
          context.addExport("first", t_2);
        }
        output += "\n<!-- all nudges render from this template except the final one, which is below -->\n";
        if (!runtime.contextOrFrameLookup(context, frame, "final") && !runtime.contextOrFrameLookup(context, frame, "first")) {
          output += "\n";
          output += runtime.suppressValue((lineno = 5, colno = 10, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "component"), "component", context, ["hippo/components/paywall/compressed-mid.html", runtime.makeKeywordArgs({ "message": runtime.contextOrFrameLookup(context, frame, "message"), "cap": runtime.contextOrFrameLookup(context, frame, "cap"), "viewCount": runtime.contextOrFrameLookup(context, frame, "viewCount"), "countNotice": runtime.contextOrFrameLookup(context, frame, "countNotice"), "countNoticeMobile": runtime.contextOrFrameLookup(context, frame, "countNoticeMobile"), "subheader": runtime.contextOrFrameLookup(context, frame, "subheader"), "messageCompressed": runtime.contextOrFrameLookup(context, frame, "messageCompressed") })])), env.opts.autoescape);
          output += "\n";
          ;
        }
        output += "\n\n<!-- final nudge displays different elems -->\n";
        if (runtime.contextOrFrameLookup(context, frame, "final")) {
          output += "\n";
          output += runtime.suppressValue((lineno = 17, colno = 10, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "component"), "component", context, ["hippo/components/paywall/compressed-final.html", runtime.makeKeywordArgs({ "message": runtime.contextOrFrameLookup(context, frame, "message"), "cap": runtime.contextOrFrameLookup(context, frame, "cap"), "viewCount": runtime.contextOrFrameLookup(context, frame, "viewCount"), "countNotice": runtime.contextOrFrameLookup(context, frame, "countNotice"), "countNoticeMobile": runtime.contextOrFrameLookup(context, frame, "countNoticeMobile"), "messageCompressed": runtime.contextOrFrameLookup(context, frame, "messageCompressed"), "subheader": runtime.contextOrFrameLookup(context, frame, "subheader") })])), env.opts.autoescape);
          output += "\n";
          ;
        }
        output += "\n\n<!-- first nudge displays different elems -->\n";
        if (runtime.contextOrFrameLookup(context, frame, "first")) {
          output += "\n";
          output += runtime.suppressValue((lineno = 29, colno = 10, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "component"), "component", context, ["hippo/components/paywall/compressed-first.html", runtime.makeKeywordArgs({ "message": runtime.contextOrFrameLookup(context, frame, "message"), "cap": runtime.contextOrFrameLookup(context, frame, "cap"), "viewCount": runtime.contextOrFrameLookup(context, frame, "viewCount"), "countNotice": runtime.contextOrFrameLookup(context, frame, "countNotice"), "countNoticeMobile": runtime.contextOrFrameLookup(context, frame, "countNoticeMobile"), "messageCompressed": runtime.contextOrFrameLookup(context, frame, "messageCompressed"), "subheader": runtime.contextOrFrameLookup(context, frame, "subheader") })])), env.opts.autoescape);
          output += "\n";
          ;
        }
        output += "\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root: root
    };
  }();
  precompiled["hippo/components/nudge-compressed.html"] = template;
  module.exports = template;
});
System.registerDynamic("theatlantic/templates/hippo/components/nudge-onboarding.html", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;

  var precompiled = global.nunjucksPrecompiled = global.nunjucksPrecompiled || {};
  var template = function () {
    function root(env, context, frame, runtime, cb) {
      var lineno = null;
      var colno = null;
      var output = "";
      try {
        var parentTemplate = null;
        output += "<div class=\"c-nudge-onboarding\">\n  <div class=\"c-nudge-onboarding__text-container\">\n      <svg class=\"c-nudge-onboarding__icon\" width=\"24\" height=\"24\">\n          <use xlink:href=\"#icon-onboarding-";
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "message"), "icon"), env.opts.autoescape);
        output += "\"></use>\n      </svg>\n    <div class=\"c-nudge-onboarding__text\">";
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "message"), "desktop"), env.opts.autoescape);
        output += "</div>\n    <a class=\"c-nudge-onboarding__link--desktop js-onboarding-link\" href=\"";
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "message"), "linkUrl"), env.opts.autoescape);
        output += "\">\n      ";
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "message"), "link"), env.opts.autoescape);
        output += "\n    </a>\n    <div class=\"c-nudge-onboarding__container-mobile\">\n      <a href=\"";
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "message"), "linkUrl"), env.opts.autoescape);
        output += "\" class=\"c-nudge-onboarding__link--mobile js-onboarding-link\" >\n          ";
        output += runtime.suppressValue(runtime.memberLookup(runtime.contextOrFrameLookup(context, frame, "message"), "mobile"), env.opts.autoescape);
        output += "\n      </a>\n    </div>\n  </div>\n  <svg class=\"c-nudge-onboarding__close-icon\">\n      <use xlink:href=\"#icon-nav-close\"></use>\n  </svg>\n</div>\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root: root
    };
  }();
  precompiled["hippo/components/nudge-onboarding.html"] = template;
  module.exports = template;
});
System.registerDynamic("theatlantic/templates/hippo/components/paywall/nudge-login.html", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;

  var precompiled = global.nunjucksPrecompiled = global.nunjucksPrecompiled || {};
  var template = function () {
    function root(env, context, frame, runtime, cb) {
      var lineno = null;
      var colno = null;
      var output = "";
      try {
        var parentTemplate = null;
        output += "<a\n  href=\"";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "accounts_url"), env.opts.autoescape);
        if (!runtime.contextOrFrameLookup(context, frame, "loggedIn")) {
          output += "/login/";
          ;
        }
        output += "\"\n  class=\"c-nudge__compressed-anchor ";
        if (runtime.contextOrFrameLookup(context, frame, "border")) {
          output += "c-nudge__login--bordered";
          ;
        }
        output += " ";
        if (!runtime.contextOrFrameLookup(context, frame, "loggedIn")) {
          output += "js-accounts-modal";
          ;
        }
        output += " ";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "tracking"), env.opts.autoescape);
        output += "\"\n  role=\"button\"\n>\n  ";
        if (runtime.contextOrFrameLookup(context, frame, "loggedIn")) {
          output += " Link your account ";
          ;
        } else {
          output += " Sign in ";
          ;
        }
        output += "\n</a>\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root: root
    };
  }();
  precompiled["hippo/components/paywall/nudge-login.html"] = template;
  module.exports = template;
});
System.registerDynamic("theatlantic/templates/hippo/components/paywall/nudge-icon-expand.html", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;

  var precompiled = global.nunjucksPrecompiled = global.nunjucksPrecompiled || {};
  var template = function () {
    function root(env, context, frame, runtime, cb) {
      var lineno = null;
      var colno = null;
      var output = "";
      try {
        var parentTemplate = null;
        output += "<a class=\"c-nudge__icon\" aria-label=\"expand message\" role=\"button\" href=\"#\">\n    <svg class=\"c-nudge__expand-icon\"><use xlink:href=\"#icon-ui-chevron-expand\"></use></svg>\n  </a>";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root: root
    };
  }();
  precompiled["hippo/components/paywall/nudge-icon-expand.html"] = template;
  module.exports = template;
});
System.registerDynamic("theatlantic/templates/hippo/components/paywall/nudge-subscribe.html", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;

  var precompiled = global.nunjucksPrecompiled = global.nunjucksPrecompiled || {};
  var template = function () {
    function root(env, context, frame, runtime, cb) {
      var lineno = null;
      var colno = null;
      var output = "";
      try {
        var parentTemplate = null;
        output += "<a href=\"";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "accounts_url"), env.opts.autoescape);
        output += "/products?source=nudge";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "viewCount"), env.opts.autoescape);
        output += "\" class=\"c-nudge__button\">\n    Subscribe Now\n  </a>";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root: root
    };
  }();
  precompiled["hippo/components/paywall/nudge-subscribe.html"] = template;
  module.exports = template;
});
System.registerDynamic("theatlantic/templates/hippo/components/paywall/compressed-final.html", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;

  var precompiled = global.nunjucksPrecompiled = global.nunjucksPrecompiled || {};
  var template = function () {
    function root(env, context, frame, runtime, cb) {
      var lineno = null;
      var colno = null;
      var output = "";
      try {
        var parentTemplate = null;
        output += "<div class=\"c-nudge__spacing-container\">\n    <!-- right container for subscribe button and compression button -->\n    <div class=\"c-nudge__compressed-link ";
        if (runtime.contextOrFrameLookup(context, frame, "buttonCentered")) {
          output += " c-nudge__compressed-link--mobile-hidden ";
          ;
        }
        output += "\">\n      <span class=\"c-nudge__message-desktop c-nudge__message-desktop--emphasized\">";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "messageCompressed"), env.opts.autoescape);
        output += "</span>\n      <span class=\"c-nudge__message-mobile c-nudge__message-mobile--emphasized\">";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "countNoticeMobile"), env.opts.autoescape);
        output += "</span>\n    </div>\n    ";
        output += runtime.suppressValue((lineno = 6, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "component"), "component", context, ["hippo/components/paywall/nudge-login.html", runtime.makeKeywordArgs({ "tracking": "js-login-click-compressed", "border": true })])), env.opts.autoescape);
        output += "\n      <div class=\"c-nudge__subscribe-container\">\n      ";
        output += runtime.suppressValue((lineno = 10, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "component"), "component", context, ["hippo/components/paywall/nudge-icon-expand.html"])), env.opts.autoescape);
        output += "\n      ";
        output += runtime.suppressValue((lineno = 11, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "component"), "component", context, ["hippo/components/paywall/nudge-subscribe.html"])), env.opts.autoescape);
        output += "\n    </div>\n  </div>";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root: root
    };
  }();
  precompiled["hippo/components/paywall/compressed-final.html"] = template;
  module.exports = template;
});
System.registerDynamic("theatlantic/templates/hippo/components/paywall/compressed-first.html", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;

  var precompiled = global.nunjucksPrecompiled = global.nunjucksPrecompiled || {};
  var template = function () {
    function root(env, context, frame, runtime, cb) {
      var lineno = null;
      var colno = null;
      var output = "";
      try {
        var parentTemplate = null;
        output += "<div class=\"c-nudge__spacing-container\">\n    <!-- right container for subscribe button and compression button -->\n    <div class=\"c-nudge__compressed-link c-nudge__compressed-link--mobile-hidden\">\n      <span class=\"c-nudge__message-desktop\">";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "messageCompressed"), env.opts.autoescape);
        output += "</span>\n      <span class=\"c-nudge__message-mobile c-nudge__message-mobile--emphasized\">";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "countNoticeMobile"), env.opts.autoescape);
        output += "</span>\n    </div>\n    ";
        output += runtime.suppressValue((lineno = 6, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "component"), "component", context, ["hippo/components/paywall/nudge-login.html", runtime.makeKeywordArgs({ "tracking": "js-login-click-compressed", "border": true })])), env.opts.autoescape);
        output += "\n    <div class=\"c-nudge__subscribe-container\">\n      ";
        output += runtime.suppressValue((lineno = 10, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "component"), "component", context, ["hippo/components/paywall/nudge-icon-expand.html"])), env.opts.autoescape);
        output += "\n      <a\n        href=\"";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "accounts_url"), env.opts.autoescape);
        output += "/products?source=nudge";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "viewCount"), env.opts.autoescape);
        output += "\"\n        class=\"c-nudge__subscribe-link-mobile c-nudge__button c-nudge__button--centered\"\n      >\n        Subscribe for unlimited access\n      </a>\n      <a\n        href=\"";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "accounts_url"), env.opts.autoescape);
        output += "/products?source=nudge";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "viewCount"), env.opts.autoescape);
        output += "\"\n        class=\"c-nudge__button c-nudge__button--mobile-hidden\"\n      >\n        Subscribe Now\n      </a>\n    </div>\n  </div>";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root: root
    };
  }();
  precompiled["hippo/components/paywall/compressed-first.html"] = template;
  module.exports = template;
});
System.registerDynamic("theatlantic/templates/hippo/components/paywall/compressed-mid.html", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;

  var precompiled = global.nunjucksPrecompiled = global.nunjucksPrecompiled || {};
  var template = function () {
    function root(env, context, frame, runtime, cb) {
      var lineno = null;
      var colno = null;
      var output = "";
      try {
        var parentTemplate = null;
        output += "<div class=\"c-nudge__spacing-container\">\n    <!-- right container for subscribe button and compression button -->\n    <div class=\"c-nudge__compressed-link\">\n      <span class=\"c-nudge__count\" role=\"text\"\n        >";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cap") - runtime.contextOrFrameLookup(context, frame, "viewCount"), env.opts.autoescape);
        output += "</span>\n      <span class=\"c-nudge__message-desktop\">";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "messageCompressed"), env.opts.autoescape);
        output += "</span>\n      <span class=\"c-nudge__message-mobile\">";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "countNoticeMobile"), env.opts.autoescape);
        output += "</span>\n    </div>\n    ";
        output += runtime.suppressValue((lineno = 8, colno = 14, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "component"), "component", context, ["hippo/components/paywall/nudge-login.html", runtime.makeKeywordArgs({ "tracking": "js-login-click-compressed", "border": true })])), env.opts.autoescape);
        output += "\n    <div class=\"c-nudge__subscribe-container\">\n      ";
        output += runtime.suppressValue((lineno = 12, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "component"), "component", context, ["hippo/components/paywall/nudge-icon-expand.html"])), env.opts.autoescape);
        output += "\n      ";
        output += runtime.suppressValue((lineno = 13, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "component"), "component", context, ["hippo/components/paywall/nudge-subscribe.html"])), env.opts.autoescape);
        output += "\n    </div>\n  </div>";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root: root
    };
  }();
  precompiled["hippo/components/paywall/compressed-mid.html"] = template;
  module.exports = template;
});
System.registerDynamic("theatlantic/templates/hippo/components/paywall/expanded-final.html", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;

  var precompiled = global.nunjucksPrecompiled = global.nunjucksPrecompiled || {};
  var template = function () {
    function root(env, context, frame, runtime, cb) {
      var lineno = null;
      var colno = null;
      var output = "";
      try {
        var parentTemplate = null;
        output += "<div class=\"c-nudge__spacing-container\">\n    <a class=\"c-nudge__icon\" aria-label=\"collapse message\" role=\"button\" href=\"#\">\n        <svg class=\"c-nudge__compress-icon\">\n            <use xlink:href=\"#icon-ui-chevron-compress\"></use>\n        </svg>\n    </a>\n\n    <div class=\"c-nudge__nudge-container\">\n        <span class=\"c-nudge__notice c-nudge__notice--emphasized\">";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "countNotice"), env.opts.autoescape);
        output += "</span>\n        <span class=\"c-nudge__login--bordered\">\n            Already a subscriber?\n            ";
        output += runtime.suppressValue((lineno = 11, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "component"), "component", context, ["hippo/components/paywall/nudge-login.html", runtime.makeKeywordArgs({ "tracking": "js-login-click-expanded" })])), env.opts.autoescape);
        output += "\n        </span>\n    </div>\n    <div class=\"c-nudge__copy-container\">\n        <span class=\"c-nudge__header-mobile c-nudge__header-mobile--emphasized\">";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "countNoticeMobile"), env.opts.autoescape);
        output += "</span>\n        <p class=\"c-nudge__header\">";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "message"), env.opts.autoescape);
        output += "</p>\n        <p class=\"c-nudge__subheader subheader-mobile\">";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "subheaderMobile"), env.opts.autoescape);
        output += "</p>\n        <p class=\"c-nudge__subheader subheader-desktop\">";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "subheader"), env.opts.autoescape);
        output += "</p>\n    </div>\n    <!-- right container for subscribe button and compression button -->\n    <div class=\"c-nudge__subscribe-container\">\n        ";
        output += runtime.suppressValue((lineno = 22, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "component"), "component", context, ["hippo/components/paywall/nudge-subscribe.html"])), env.opts.autoescape);
        output += "\n    </div>\n</div>";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root: root
    };
  }();
  precompiled["hippo/components/paywall/expanded-final.html"] = template;
  module.exports = template;
});
System.registerDynamic("theatlantic/templates/hippo/components/paywall/expanded-mid.html", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;

  var precompiled = global.nunjucksPrecompiled = global.nunjucksPrecompiled || {};
  var template = function () {
    function root(env, context, frame, runtime, cb) {
      var lineno = null;
      var colno = null;
      var output = "";
      try {
        var parentTemplate = null;
        output += "<div class=\"c-nudge__spacing-container\">\n    <a class=\"c-nudge__icon\" aria-label=\"collapse message\" role=\"button\" href=\"#\">\n        <svg class=\"c-nudge__compress-icon\">\n            <use xlink:href=\"#icon-ui-chevron-compress\"></use>\n        </svg>\n    </a>\n\n    <div class=\"c-nudge__nudge-container\">\n        <span class=\"c-nudge__count\" role=\"text\">";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cap") - runtime.contextOrFrameLookup(context, frame, "viewCount"), env.opts.autoescape);
        output += "</span>\n        <span class=\"c-nudge__notice\">";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "countNotice"), env.opts.autoescape);
        output += "</span>\n        <span class=\"c-nudge__login--bordered\">\n            Already a subscriber?\n            ";
        output += runtime.suppressValue((lineno = 12, colno = 22, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "component"), "component", context, ["hippo/components/paywall/nudge-login.html", runtime.makeKeywordArgs({ "tracking": "js-login-click-expanded", "border": false })])), env.opts.autoescape);
        output += "\n        </span>\n    </div>\n    <div class=\"c-nudge__copy-container\">\n        ";
        if (!runtime.contextOrFrameLookup(context, frame, "first")) {
          output += "<span class=\"c-nudge__count-mobile\" role=\"text\">";
          output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "cap") - runtime.contextOrFrameLookup(context, frame, "viewCount"), env.opts.autoescape);
          output += "</span>";
          ;
        }
        output += "\n        <span class=\"c-nudge__header-mobile\">";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "countNoticeMobile"), env.opts.autoescape);
        output += "</span>\n        <p class=\"c-nudge__header\">";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "message"), env.opts.autoescape);
        output += "</p>\n        <p class=\"c-nudge__subheader\">";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "subheader"), env.opts.autoescape);
        output += "</p>\n    </div>\n    <!-- right container for subscribe button and compression button -->\n    <div class=\"c-nudge__subscribe-container\">\n        ";
        output += runtime.suppressValue((lineno = 25, colno = 18, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "component"), "component", context, ["hippo/components/paywall/nudge-subscribe.html"])), env.opts.autoescape);
        output += "\n    </div>\n</div>";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root: root
    };
  }();
  precompiled["hippo/components/paywall/expanded-mid.html"] = template;
  module.exports = template;
});
System.register("npm:systemjs-plugin-babel@0.0.25/babel-helpers/classCallCheck.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      });
    }
  };
});
System.register("npm:systemjs-plugin-babel@0.0.25/babel-helpers/createClass.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }());
    }
  };
});
System.registerDynamic("npm:js-cookie@2.1.4.json", [], true, function() {
  return {
    "main": "src/js.cookie.js",
    "format": "cjs",
    "meta": {
      "*": {
        "globals": {
          "process": "process"
        }
      },
      "*.json": {
        "format": "json"
      }
    }
  };
});

System.registerDynamic('npm:js-cookie@2.1.4/src/js.cookie.js', ['process'], true, function ($__require, exports, module) {
	var process = $__require('process');
	var global = this || self,
	    GLOBAL = global;
	/*!
  * JavaScript Cookie v2.1.4
  * https://github.com/js-cookie/js-cookie
  *
  * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
  * Released under the MIT license
  */
	;(function (factory) {
		var registeredInModuleLoader = false;
		if (typeof undefined === 'function' && define.amd) {
			define(factory);
			registeredInModuleLoader = true;
		}
		if (typeof exports === 'object') {
			module.exports = factory();
			registeredInModuleLoader = true;
		}
		if (!registeredInModuleLoader) {
			var OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = OldCookies;
				return api;
			};
		}
	})(function () {
		function extend() {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[i];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}

		function init(converter) {
			function api(key, value, attributes) {
				var result;
				if (typeof document === 'undefined') {
					return;
				}

				// Write

				if (arguments.length > 1) {
					attributes = extend({
						path: '/'
					}, api.defaults, attributes);

					if (typeof attributes.expires === 'number') {
						var expires = new Date();
						expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
						attributes.expires = expires;
					}

					// We're using "expires" because "max-age" is not supported by IE
					attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

					try {
						result = JSON.stringify(value);
						if (/^[\{\[]/.test(result)) {
							value = result;
						}
					} catch (e) {}

					if (!converter.write) {
						value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
					} else {
						value = converter.write(value, key);
					}

					key = encodeURIComponent(String(key));
					key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
					key = key.replace(/[\(\)]/g, escape);

					var stringifiedAttributes = '';

					for (var attributeName in attributes) {
						if (!attributes[attributeName]) {
							continue;
						}
						stringifiedAttributes += '; ' + attributeName;
						if (attributes[attributeName] === true) {
							continue;
						}
						stringifiedAttributes += '=' + attributes[attributeName];
					}
					return document.cookie = key + '=' + value + stringifiedAttributes;
				}

				// Read

				if (!key) {
					result = {};
				}

				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all. Also prevents odd result when
				// calling "get()"
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var rdecode = /(%[0-9A-Z]{2})+/g;
				var i = 0;

				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var cookie = parts.slice(1).join('=');

					if (cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}

					try {
						var name = parts[0].replace(rdecode, decodeURIComponent);
						cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);

						if (this.json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}

						if (key === name) {
							result = cookie;
							break;
						}

						if (!key) {
							result[name] = cookie;
						}
					} catch (e) {}
				}

				return result;
			}

			api.set = api;
			api.get = function (key) {
				return api.call(api, key);
			};
			api.getJSON = function () {
				return api.apply({
					json: true
				}, [].slice.call(arguments));
			};
			api.defaults = {};

			api.remove = function (key, attributes) {
				api(key, '', extend(attributes, {
					expires: -1
				}));
			};

			api.withConverter = init;

			return api;
		}

		return init(function () {});
	});
});
System.registerDynamic('npm:jwt-decode@2.2.0/lib/atob.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /**
   * The code was extracted from:
   * https://github.com/davidchambers/Base64.js
   */

  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

  function InvalidCharacterError(message) {
    this.message = message;
  }

  InvalidCharacterError.prototype = new Error();
  InvalidCharacterError.prototype.name = 'InvalidCharacterError';

  function polyfill(input) {
    var str = String(input).replace(/=+$/, '');
    if (str.length % 4 == 1) {
      throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (
    // initialize result and counters
    var bc = 0, bs, buffer, idx = 0, output = '';
    // get next character
    buffer = str.charAt(idx++);
    // character found in table? initialize bit storage and add its ascii value;
    ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
    // and if not first of each 4 characters,
    // convert the first 8 bits to one ascii character
    bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
      // try to find character in table (0-63, not found => -1)
      buffer = chars.indexOf(buffer);
    }
    return output;
  }

  module.exports = typeof window !== 'undefined' && window.atob && window.atob.bind(window) || polyfill;
});
System.registerDynamic('npm:jwt-decode@2.2.0/lib/base64_url_decode.js', ['./atob'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  var atob = $__require('./atob');

  function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).replace(/(.)/g, function (m, p) {
      var code = p.charCodeAt(0).toString(16).toUpperCase();
      if (code.length < 2) {
        code = '0' + code;
      }
      return '%' + code;
    }));
  }

  module.exports = function (str) {
    var output = str.replace(/-/g, "+").replace(/_/g, "/");
    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += "==";
        break;
      case 3:
        output += "=";
        break;
      default:
        throw "Illegal base64url string!";
    }

    try {
      return b64DecodeUnicode(output);
    } catch (err) {
      return atob(output);
    }
  };
});
System.registerDynamic("npm:jwt-decode@2.2.0.json", [], true, function() {
  return {
    "main": "lib/index.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      },
      "build/jwt-decode.js": {
        "cjsRequireDetection": false
      }
    },
    "map": {
      "./lib": "./lib/index.js",
      "./package": "./package.json"
    }
  };
});

System.registerDynamic('npm:jwt-decode@2.2.0/lib/index.js', ['./base64_url_decode'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var base64_url_decode = $__require('./base64_url_decode');

  function InvalidTokenError(message) {
    this.message = message;
  }

  InvalidTokenError.prototype = new Error();
  InvalidTokenError.prototype.name = 'InvalidTokenError';

  module.exports = function (token, options) {
    if (typeof token !== 'string') {
      throw new InvalidTokenError('Invalid token specified');
    }

    options = options || {};
    var pos = options.header === true ? 0 : 1;
    try {
      return JSON.parse(base64_url_decode(token.split('.')[pos]));
    } catch (e) {
      throw new InvalidTokenError('Invalid token specified: ' + e.message);
    }
  };

  module.exports.InvalidTokenError = InvalidTokenError;
});
System.registerDynamic("npm:ms@2.0.0.json", [], true, function() {
  return {
    "main": "index.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    }
  };
});

System.registerDynamic('npm:ms@2.0.0/index.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /**
   * Helpers.
   */

  var s = 1000;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var y = d * 365.25;

  /**
   * Parse or format the given `val`.
   *
   * Options:
   *
   *  - `long` verbose formatting [false]
   *
   * @param {String|Number} val
   * @param {Object} [options]
   * @throws {Error} throw an error if val is not a non-empty string or a number
   * @return {String|Number}
   * @api public
   */

  module.exports = function (val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
      return parse(val);
    } else if (type === 'number' && isNaN(val) === false) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
  };

  /**
   * Parse the given `str` and return milliseconds.
   *
   * @param {String} str
   * @return {Number}
   * @api private
   */

  function parse(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
      return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch (type) {
      case 'years':
      case 'year':
      case 'yrs':
      case 'yr':
      case 'y':
        return n * y;
      case 'days':
      case 'day':
      case 'd':
        return n * d;
      case 'hours':
      case 'hour':
      case 'hrs':
      case 'hr':
      case 'h':
        return n * h;
      case 'minutes':
      case 'minute':
      case 'mins':
      case 'min':
      case 'm':
        return n * m;
      case 'seconds':
      case 'second':
      case 'secs':
      case 'sec':
      case 's':
        return n * s;
      case 'milliseconds':
      case 'millisecond':
      case 'msecs':
      case 'msec':
      case 'ms':
        return n;
      default:
        return undefined;
    }
  }

  /**
   * Short format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */

  function fmtShort(ms) {
    if (ms >= d) {
      return Math.round(ms / d) + 'd';
    }
    if (ms >= h) {
      return Math.round(ms / h) + 'h';
    }
    if (ms >= m) {
      return Math.round(ms / m) + 'm';
    }
    if (ms >= s) {
      return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
  }

  /**
   * Long format for `ms`.
   *
   * @param {Number} ms
   * @return {String}
   * @api private
   */

  function fmtLong(ms) {
    return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
  }

  /**
   * Pluralization helper.
   */

  function plural(ms, n, name) {
    if (ms < n) {
      return;
    }
    if (ms < n * 1.5) {
      return Math.floor(ms / n) + ' ' + name;
    }
    return Math.ceil(ms / n) + ' ' + name + 's';
  }
});
System.registerDynamic('npm:debug@2.6.9/src/debug.js', ['ms'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;

  /**
   * This is the common logic for both the Node.js and web browser
   * implementations of `debug()`.
   *
   * Expose `debug()` as the module.
   */

  exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
  exports.coerce = coerce;
  exports.disable = disable;
  exports.enable = enable;
  exports.enabled = enabled;
  exports.humanize = $__require('ms');

  /**
   * The currently active debug mode names, and names to skip.
   */

  exports.names = [];
  exports.skips = [];

  /**
   * Map of special "%n" handling functions, for the debug "format" argument.
   *
   * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
   */

  exports.formatters = {};

  /**
   * Previous log timestamp.
   */

  var prevTime;

  /**
   * Select a color.
   * @param {String} namespace
   * @return {Number}
   * @api private
   */

  function selectColor(namespace) {
    var hash = 0,
        i;

    for (i in namespace) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return exports.colors[Math.abs(hash) % exports.colors.length];
  }

  /**
   * Create a debugger with the given `namespace`.
   *
   * @param {String} namespace
   * @return {Function}
   * @api public
   */

  function createDebug(namespace) {

    function debug() {
      // disabled?
      if (!debug.enabled) return;

      var self = debug;

      // set `diff` timestamp
      var curr = +new Date();
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;

      // turn the `arguments` into a proper Array
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }

      args[0] = exports.coerce(args[0]);

      if ('string' !== typeof args[0]) {
        // anything else let's inspect with %O
        args.unshift('%O');
      }

      // apply any `formatters` transformations
      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // if we encounter an escaped % then don't increase the array index
        if (match === '%%') return match;
        index++;
        var formatter = exports.formatters[format];
        if ('function' === typeof formatter) {
          var val = args[index];
          match = formatter.call(self, val);

          // now we need to remove `args[index]` since it's inlined in the `format`
          args.splice(index, 1);
          index--;
        }
        return match;
      });

      // apply env-specific formatting (colors, etc.)
      exports.formatArgs.call(self, args);

      var logFn = debug.log || exports.log || console.log.bind(console);
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = exports.enabled(namespace);
    debug.useColors = exports.useColors();
    debug.color = selectColor(namespace);

    // env-specific initialization logic for debug instances
    if ('function' === typeof exports.init) {
      exports.init(debug);
    }

    return debug;
  }

  /**
   * Enables a debug mode by namespaces. This can include modes
   * separated by a colon and wildcards.
   *
   * @param {String} namespaces
   * @api public
   */

  function enable(namespaces) {
    exports.save(namespaces);

    exports.names = [];
    exports.skips = [];

    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (var i = 0; i < len; i++) {
      if (!split[i]) continue; // ignore empty strings
      namespaces = split[i].replace(/\*/g, '.*?');
      if (namespaces[0] === '-') {
        exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        exports.names.push(new RegExp('^' + namespaces + '$'));
      }
    }
  }

  /**
   * Disable debug output.
   *
   * @api public
   */

  function disable() {
    exports.enable('');
  }

  /**
   * Returns true if the given mode name is enabled, false otherwise.
   *
   * @param {String} name
   * @return {Boolean}
   * @api public
   */

  function enabled(name) {
    var i, len;
    for (i = 0, len = exports.skips.length; i < len; i++) {
      if (exports.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = exports.names.length; i < len; i++) {
      if (exports.names[i].test(name)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Coerce `val`.
   *
   * @param {Mixed} val
   * @return {Mixed}
   * @api private
   */

  function coerce(val) {
    if (val instanceof Error) return val.stack || val.message;
    return val;
  }
});
System.registerDynamic("npm:debug@2.6.9.json", [], true, function() {
  return {
    "main": "src/browser.js",
    "format": "cjs",
    "map": {
      "./node.js": {
        "browser": "./src/browser.js"
      }
    }
  };
});

System.registerDynamic('npm:debug@2.6.9/src/browser.js', ['./debug'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /**
   * This is the web browser implementation of `debug()`.
   *
   * Expose `debug()` as the module.
   */

  exports = module.exports = $__require('./debug');
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

  /**
   * Colors.
   */

  exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];

  /**
   * Currently only WebKit-based Web Inspectors, Firefox >= v31,
   * and the Firebug extension (any Firefox version) are known
   * to support "%c" CSS customizations.
   *
   * TODO: add a `localStorage` variable to explicitly enable/disable colors
   */

  function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
      return true;
    }

    // is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
    // double check webkit in userAgent just in case we are in a worker
    typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }

  /**
   * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
   */

  exports.formatters.j = function (v) {
    try {
      return JSON.stringify(v);
    } catch (err) {
      return '[UnexpectedJSONParseError]: ' + err.message;
    }
  };

  /**
   * Colorize log arguments if enabled.
   *
   * @api public
   */

  function formatArgs(args) {
    var useColors = this.useColors;

    args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

    if (!useColors) return;

    var c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');

    // the final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function (match) {
      if ('%%' === match) return;
      index++;
      if ('%c' === match) {
        // we only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
      }
    });

    args.splice(lastC, 0, c);
  }

  /**
   * Invokes `console.log()` when available.
   * No-op when `console.log` is not a "function".
   *
   * @api public
   */

  function log() {
    // this hackery is required for IE8/9, where
    // the `console.log` function doesn't have 'apply'
    return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
  }

  /**
   * Save `namespaces`.
   *
   * @param {String} namespaces
   * @api private
   */

  function save(namespaces) {
    try {
      if (null == namespaces) {
        exports.storage.removeItem('debug');
      } else {
        exports.storage.debug = namespaces;
      }
    } catch (e) {}
  }

  /**
   * Load `namespaces`.
   *
   * @return {String} returns the previously persisted debug modes
   * @api private
   */

  function load() {
    var r;
    try {
      r = exports.storage.debug;
    } catch (e) {}

    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
      r = process.env.DEBUG;
    }

    return r;
  }

  /**
   * Enable namespaces listed in `localStorage.debug` initially.
   */

  exports.enable(load());

  /**
   * Localstorage attempts to return the localstorage.
   *
   * This is necessary because safari throws
   * when a user disables cookies/localstorage
   * and you attempt to access it.
   *
   * @return {LocalStorage}
   * @api private
   */

  function localstorage() {
    try {
      return window.localStorage;
    } catch (e) {}
  }
});
System.register('theatlantic/js/utils/log.js', ['debug'], function (_export, _context) {
  "use strict";

  var Debug;


  /**
   * Yo dawg I heard you like Debug Objects.
   *
   * @param {String} namespace The debug namespace
   */
  function Log(namespace) {
    var errorDebug = Debug(namespace);
    errorDebug.color = 'crimson';
    errorDebug.log = console.error.bind(console); // eslint-disable-line no-console

    var warnDebug = Debug(namespace);
    warnDebug.color = 'goldenrod';
    warnDebug.log = console.warn.bind(console); // eslint-disable-line no-console

    var debug = Debug(namespace);
    debug.error = errorDebug;
    debug.warn = warnDebug;

    return debug;
  } /**
     * Helper log module that attaches different instances of Debug
     *
     * @see {@link https://github.com/visionmedia/debug|debug}
     *
     * @module utils/log
     */

  _export('Log', Log);

  return {
    setters: [function (_debug) {
      Debug = _debug.default;
    }],
    execute: function () {}
  };
});
System.register('theatlantic/js/constants/cookie.js', [], function (_export, _context) {
  "use strict";

  var accountData, accountOk, accountMember, geolocation, scrollSubscriber, preferHpUS, articleViewsCookie, jwtCookie, atlUuidCookie;
  return {
    setters: [],
    execute: function () {
      _export('accountData', accountData = 'acctdata');

      _export('accountData', accountData);

      _export('accountOk', accountOk = 'accttok');

      _export('accountOk', accountOk);

      _export('accountMember', accountMember = 'atlmbr');

      _export('accountMember', accountMember);

      _export('geolocation', geolocation = 'geolocation');

      _export('geolocation', geolocation);

      _export('scrollSubscriber', scrollSubscriber = 'scroll0');

      _export('scrollSubscriber', scrollSubscriber);

      _export('preferHpUS', preferHpUS = 'show_us_hp');

      _export('preferHpUS', preferHpUS);

      _export('articleViewsCookie', articleViewsCookie = 'dev_articleviews');

      _export('articleViewsCookie', articleViewsCookie);

      _export('jwtCookie', jwtCookie = 'atljwt');

      _export('jwtCookie', jwtCookie);

      _export('atlUuidCookie', atlUuidCookie = 'atl_uuid');

      _export('atlUuidCookie', atlUuidCookie);
    }
  };
});
System.register('theatlantic/js/constants/endpoints.js', ['pageInfo'], function (_export, _context) {
  "use strict";

  var articleId, apiEndpoint, relatedArticles, mostPopular, video, userCountry, newsletterSignUp;
  return {
    setters: [function (_pageInfo) {
      articleId = _pageInfo.article_id;
    }],
    execute: function () {
      apiEndpoint = 'api/2.0/articles';

      _export('relatedArticles', relatedArticles = '/' + apiEndpoint + '/' + articleId + '/related-articles/');

      _export('relatedArticles', relatedArticles);

      _export('mostPopular', mostPopular = '/' + apiEndpoint + '/?section=most-popular');

      _export('mostPopular', mostPopular);

      _export('video', video = '/' + apiEndpoint + '/?section=video');

      _export('video', video);

      _export('userCountry', userCountry = '/api/user_country/');

      _export('userCountry', userCountry);

      _export('newsletterSignUp', newsletterSignUp = 'https://accounts-api.theatlantic.com/api/v1/newsletters/sign-up/');

      _export('newsletterSignUp', newsletterSignUp);
    }
  };
});
System.register('theatlantic/js/utils/user.js', ['npm:systemjs-plugin-babel@0.0.25/babel-helpers/classCallCheck.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/createClass.js', 'npm:systemjs-plugin-babel@0.0.25/regenerator-runtime.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/asyncToGenerator.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/toConsumableArray.js', 'js-cookie', 'jwt-decode', './log', '../constants/cookie', '../constants/endpoints'], function (_export, _context2) {
  "use strict";

  var _classCallCheck, _createClass, _regeneratorRuntime, _asyncToGenerator, _toConsumableArray, cookie, jwtDecode, Log, accountData, accountOk, geolocation, scrollSubscriber, jwtCookie, userCountry, sessionEnd, init, ns, log, User;

  /**
   * The data model for the user profile cookie
   * @typedef {Object} UserCookieObject
   * @property {(Number|null)} af_exp The adfree expiration
   * @property {Number} dt The datetime the cookie was set
   * @property {Array} entitlements The user's list of product entitlements
   * @property {String} fn The user's first name
   * @property {(Number|null)} sv_exp The print expiration date or something
   * @property {String} uuid The user's Janrain uuid
   */

  /**
   * Parse the user cookie
   *
   * This could be turned into a generic util, but the cookie library already has
   * a method called [`getJSON`](https://github.com/js-cookie/js-cookie#json)
   *
   * @return {UserCookieObject} The user cookie object
   */
  function parseCookie() {
    var cookieVal = cookie.get(accountData);
    if (!cookieVal) {
      return {};
    }
    return JSON.parse(decodeURIComponent(cookieVal));
  }

  function parseJWT() {
    var token = cookie.get(jwtCookie);
    if (!token) {
      return {};
    }
    return jwtDecode(token);
  }

  /**
   * Check if the user is a member
   * @return {Boolean} If the user is a member
   */
  function isMember() {
    return getProductList().indexOf('masthead') !== -1;
  }

  /**
   * Determines if the user is Atlantic staff
   */
  function isStaff() {
    var _parseCookie = parseCookie(),
        staff = _parseCookie.staff;

    return !!staff;
  }

  /**
   * Check if the user is a Scroll subscriber
   * @return {Boolean} If the user is a Scroll subscriber
   * @see https://scroll.com/about
   */
  function isScrollSubscriber() {
    return !!cookie.get(scrollSubscriber);
  }

  /**
   * Check if the user has purchased our adfree experience
   * @return {Boolean} If the user has purchased adfree
   */

  _export('isScrollSubscriber', isScrollSubscriber);

  function isAdFreeSubscriber() {
    return getProductList().indexOf('adfree') !== -1;
  }

  /**
   * Check if the user should see ads or not
   * @return {Boolean} If the user should see ads
   */
  function _isAdFree() {
    // @TODO: Keep this method but upgrade to support JWT
    return isAdFreeSubscriber() || isScrollSubscriber();
  }

  /**
   * Check if the user has access past the paywall
   * @return {Boolean} If the user can see beyond the paywall
   */
  function hasPaymeterAccess() {
    return parseJWT().paymeter_access;
  }

  /**
   * Get the Janrain UUID
   * @return {String} The Janrain UUID
   */

  _export('hasPaymeterAccess', hasPaymeterAccess);

  function _getJanrainUUID() {
    // @TODO: Remove from GTM's "Data Layer Events" after accounts is replaced.
    var _parseCookie2 = parseCookie(),
        uuid = _parseCookie2.uuid;

    return uuid;
  }

  /**
   * Gets a list of products the user has
   * @return {Array} The product list
   */
  function getProductList() {
    var _parseCookie3 = parseCookie(),
        entitlements = _parseCookie3.entitlements;

    return entitlements || [];
  }

  /**
   * Future forward property for the Data team and
   * ad targeting.
   * @return {Array} The array of entitlements (or products)
   */

  _export('getProductList', getProductList);

  function getEntitlementsList() {
    return [].concat(_toConsumableArray(_isLoggedIn() ? ['account'] : ''), _toConsumableArray(isStaff() ? ['staff'] : ''), _toConsumableArray(parseJWT().paymeter_access ? ['paymeter_access'] : '')).concat(getProductList());
  }

  /**
   * Checks if the user is logged in
   * @param  {Boolean} [loggedIn=false] If the use is logged in or not
   */

  _export('getEntitlementsList', getEntitlementsList);

  function _refresh() {
    var loggedIn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    document.documentElement.classList.toggle('user-signed-in', loggedIn);
  }

  /**
   * Gets the user's geolocation
   *
   * @example
   * import { getGeoLocation } from 'utils/user';
   * getGeoLocation.then(json => log(json));
   *
   * @example
   * System.import('theatlantic/js/utils/user').then((u) => {
   *   u.getGeoLocation().then(json => log(json));
   * });
   *
   * @return {Promise} A promise returning the user geolocation data
   */
  function _getGeoLocation() {
    var geoLocation = cookie.get(geolocation);
    if (geoLocation) {
      return Promise.resolve(JSON.parse(geoLocation));
    }
    return fetch(userCountry).then(function (res) {
      return res.json();
    }).catch(function (e) {
      return log.error(e);
    });
  }

  /**
   * Remove both login cookies
   */
  function _clear() {
    var cookieConfig = {
      domain: '.theatlantic.com',
      path: '/'
    };

    cookie.remove(accountData, cookieConfig);
    cookie.remove(accountOk, cookieConfig);
  }

  /**
   * Get the user's first name from the cookie
   * @return {String} The users first name
   */
  function _getFirstName() {
    // @TODO: delete when Accounts upgrade goes live
    var _parseCookie4 = parseCookie(),
        fn = _parseCookie4.fn;

    return fn;
  }

  /**
   * Check if the user is logged in
   * @return {Boolean} If the user is logged in
   */
  function _isLoggedIn() {
    return !!cookie.get(accountData) && !!parseCookie() || !!cookie.get(jwtCookie);
  }

  /**
   * Sign a user out of Janrain
   *
   * @example
   * import { signOut } from 'utils/user';
   * signOut().then(doSomething);
   *
   * @example
   * System.import('theatlantic/js/utils/user').then((u) => {
   *   u.signOut().then(doSomething);
   * });
   *
   * @return {Promise} A chainable promise so you can do other stuff
   */
  function signOut() {
    var opts = {
      credentials: 'include'
    };
    return fetch(sessionEnd, opts).then(function () {
      _clear();
      _refresh(false);
    }).catch(function (e) {
      return log(e);
    });
  }
  _export('signOut', signOut);

  return {
    setters: [function (_npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs) {
      _classCallCheck = _npmSystemjsPluginBabel0025BabelHelpersClassCallCheckJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersCreateClassJs) {
      _createClass = _npmSystemjsPluginBabel0025BabelHelpersCreateClassJs.default;
    }, function (_npmSystemjsPluginBabel0025RegeneratorRuntimeJs) {
      _regeneratorRuntime = _npmSystemjsPluginBabel0025RegeneratorRuntimeJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersAsyncToGeneratorJs) {
      _asyncToGenerator = _npmSystemjsPluginBabel0025BabelHelpersAsyncToGeneratorJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersToConsumableArrayJs) {
      _toConsumableArray = _npmSystemjsPluginBabel0025BabelHelpersToConsumableArrayJs.default;
    }, function (_jsCookie) {
      cookie = _jsCookie.default;
    }, function (_jwtDecode) {
      jwtDecode = _jwtDecode.default;
    }, function (_log) {
      Log = _log.Log;
    }, function (_constantsCookie) {
      accountData = _constantsCookie.accountData;
      accountOk = _constantsCookie.accountOk;
      geolocation = _constantsCookie.geolocation;
      scrollSubscriber = _constantsCookie.scrollSubscriber;
      jwtCookie = _constantsCookie.jwtCookie;
    }, function (_constantsEndpoints) {
      userCountry = _constantsEndpoints.userCountry;
      sessionEnd = _constantsEndpoints.sessionEnd;
    }],
    execute: function () {
      _export('isAdFree', _isAdFree);

      _export('refresh', _refresh);

      _export('getGeoLocation', _getGeoLocation);

      _export('clear', _clear);

      _export('getFirstName', _getFirstName);

      _export('isLoggedIn', _isLoggedIn);

      init = function () {
        var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
          var loggedIn;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  loggedIn = _isLoggedIn();

                  _refresh(loggedIn);

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function init() {
          return _ref.apply(this, arguments);
        };
      }();

      ns = 'atl:user';
      log = Log(ns);

      _export('User', User = function () {
        /**
         * Create a new User
         */
        function User() {
          _classCallCheck(this, User);

          init();
        }

        /**
         * Proxied for the data team
         * @return {Boolean} If the user has a membership
         */

        _createClass(User, [{
          key: 'getJanrainUUID',

          /**
           * Proxied for the data team
           * @return {String} The Janrain UUID
           */
          value: function getJanrainUUID() {
            return _getJanrainUUID();
          }

          /**
           * Proxied for the data team
           * @return {Boolean} If the user will see ads or not
           * @see {@link utils/user#isAdFree}
           */

        }, {
          key: 'isAdFree',
          value: function isAdFree() {
            return _isAdFree();
          }

          /**
           * Proxied for the data team
           * @return {Boolean} If the user is logged in
           * @see {@link utils/user#isLoggedIn}
           */

        }, {
          key: 'isLoggedIn',
          value: function isLoggedIn() {
            return _isLoggedIn();
          }

          /**
           * Backport for `newsletters.js`
           * @param  {Function} cb The callback
           * @see https://github.com/theatlantic/Atlantic-CMS/blob/develop/apps/newsletters/static/newsletters/js/newsletters.js#L179
           */

        }, {
          key: 'getGeoLocation',
          value: function getGeoLocation(cb) {
            _getGeoLocation().then(function (data) {
              cookie.set(geolocation, data, { expires: 30 });
              cb(data);
            });
          }

          /**
           * Backport for `profiles.js`
           * @return {String} The user's first name
           * @see https://github.com/theatlantic/Atlantic-CMS/blob/develop/apps/profiles/templates/profiles/janrain/profiles.js#L124
           */

        }, {
          key: 'getFirstName',
          value: function getFirstName() {
            return _getFirstName();
          }

          /**
           * Backport for Profiles
           * @see https://github.com/theatlantic/Atlantic-CMS/blob/develop/apps/accounts/static/accounts/main.js#L119
           */

        }, {
          key: 'refresh',
          value: function refresh() {
            return _refresh(_isLoggedIn());
          }

          /**
           * Backport for Profiles
           * @see https://github.com/theatlantic/Atlantic-CMS/blob/develop/apps/profiles/templates/profiles/janrain/profiles.js#L173
           */

        }, {
          key: 'clear',
          value: function clear() {
            return _clear();
          }
        }, {
          key: 'hasMembership',
          get: function get() {
            return isMember();
          }

          /**
           * Future forward property for the Data team
           * @return {Array} The array of entitlements (or products)
           */

        }, {
          key: 'entitlements',
          get: function get() {
            return getEntitlementsList();
          }
        }]);

        return User;
      }());

      _export('User', User);
    }
  };
});
System.register('theatlantic/js/paywall/utils/renderIntoDom.js', ['npm:systemjs-plugin-babel@0.0.25/regenerator-runtime.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/extends.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/asyncToGenerator.js', 'hippo/components/nudge-expanded', 'hippo/components/nudge-compressed', 'hippo/components/nudge-onboarding', 'hippo/components/paywall/nudge-login', 'hippo/components/paywall/nudge-icon-expand', 'hippo/components/paywall/nudge-subscribe', 'hippo/components/paywall/compressed-final', 'hippo/components/paywall/compressed-first', 'hippo/components/paywall/compressed-mid', 'hippo/components/paywall/expanded-final', 'hippo/components/paywall/expanded-mid', '../../utils/user', '../../utils/nunjucks'], function (_export, _context2) {
  "use strict";

  var _regeneratorRuntime, _extends, _asyncToGenerator, isLoggedIn, render, containerSelectors;

  return {
    setters: [function (_npmSystemjsPluginBabel0025RegeneratorRuntimeJs) {
      _regeneratorRuntime = _npmSystemjsPluginBabel0025RegeneratorRuntimeJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersExtendsJs) {
      _extends = _npmSystemjsPluginBabel0025BabelHelpersExtendsJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersAsyncToGeneratorJs) {
      _asyncToGenerator = _npmSystemjsPluginBabel0025BabelHelpersAsyncToGeneratorJs.default;
    }, function (_hippoComponentsNudgeExpanded) {}, function (_hippoComponentsNudgeCompressed) {}, function (_hippoComponentsNudgeOnboarding) {}, function (_hippoComponentsPaywallNudgeLogin) {}, function (_hippoComponentsPaywallNudgeIconExpand) {}, function (_hippoComponentsPaywallNudgeSubscribe) {}, function (_hippoComponentsPaywallCompressedFinal) {}, function (_hippoComponentsPaywallCompressedFirst) {}, function (_hippoComponentsPaywallCompressedMid) {}, function (_hippoComponentsPaywallExpandedFinal) {}, function (_hippoComponentsPaywallExpandedMid) {}, function (_utilsUser) {
      isLoggedIn = _utilsUser.isLoggedIn;
    }, function (_utilsNunjucks) {
      render = _utilsNunjucks.render;
    }],
    execute: function () {
      containerSelectors = '.c-article-header, .c-article-header--ideas, .article-body, .article-container';

      _export('default', function () {
        var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(element, context) {
          var loggedIn, oldContainer, nudgeContainer, articleContainer;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  loggedIn = isLoggedIn();
                  //find old ones and delete them

                  oldContainer = document.querySelector('.c-nudge__container');

                  oldContainer ? oldContainer.remove() : null;
                  //render a new one in
                  nudgeContainer = document.createElement('div');

                  nudgeContainer.className = 'c-nudge__container c-' + element + '__container';
                  nudgeContainer.tabIndex = -1;
                  _context.next = 8;
                  return render(element, _extends({}, context, { loggedIn: loggedIn }));

                case 8:
                  nudgeContainer.innerHTML = _context.sent;
                  articleContainer = document.querySelector(containerSelectors);

                  articleContainer.append(nudgeContainer);

                  return _context.abrupt('return', nudgeContainer);

                case 12:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function renderIntoDom(_x, _x2) {
          return _ref.apply(this, arguments);
        }

        return renderIntoDom;
      }());
    }
  };
});
System.register('theatlantic/js/paywall/utils/onboardingMessages.js', [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export('default', [{
        desktop: 'Thank you for subscribing—now, discover an Atlantic newsletter for you.',
        link: 'See All',
        linkUrl: 'https://accounts.theatlantic.com/accounts/newsletters/',
        mobile: 'Discover an Atlantic newsletter for you.',
        icon: 'newsletter'
      }, {
        desktop: 'Open a world of ideas, with our iOS app for subscribers.',
        link: 'Get The Atlantic App',
        linkUrl: 'https://apps.apple.com/us/app/atlantic-magazine-digital/id397599894',
        mobile: 'Explore our new iOS app for subscribers.',
        icon: 'app'
      }, {
        desktop: 'Just a reminder: You can play a new crossword, every weekday.',
        link: 'Start Solving',
        linkUrl: 'https://www.theatlantic.com/free-daily-crossword-puzzle/',
        mobile: 'Solve a new crossword, every weekday.',
        icon: 'crossword'
      }, {
        desktop: 'Add nuance to your News Feed.',
        link: 'Follow The Atlantic on Facebook',
        linkUrl: 'https://www.facebook.com/TheAtlantic',
        mobile: 'Never miss a story. Follow us on Facebook.',
        icon: 'facebook'
      }]);
    }
  };
});
System.register('theatlantic/js/paywall/onboarding.js', ['./utils/renderIntoDom', './utils/onboardingMessages', '../globals/dataLayer'], function (_export, _context) {
  "use strict";

  var renderIntoDom, messages, dataLayer, ONBOARDING_STATUS, ONBOARDING_GROUP_ID, ONBOARDING_GROUP_UPDATED, renderMessageForGroup, debugGroup;


  function init() {
    var profile = window.blueConicClient.profile.getProfile();
    var lastMessageDate = void 0;

    // If we've saved a last updated date, pull it from Blueconic.
    if (profile.getValue(ONBOARDING_GROUP_UPDATED)) {
      lastMessageDate = new Date(parseInt(profile.getValue(ONBOARDING_GROUP_UPDATED)));
    } else {
      // Otherwise, pretend the last updated date is 1970.
      lastMessageDate = new Date(0);
    }

    var group_id = parseInt(profile.getValue(ONBOARDING_GROUP_ID), 10) || 0;

    //only show to people with the jwt -- otherwise we'll show nudges
    if (!profile.getValue(ONBOARDING_STATUS)) {
      return;
    }

    // Throttle by 7 days
    var daysSinceLastMessage = (new Date() - lastMessageDate) / 1000 / 60 / 60 / 24;
    if (daysSinceLastMessage < 7) {
      return;
    }

    // Render the message and then update blueconic.
    renderMessageForGroup(group_id, profile.getValue(ONBOARDING_STATUS)).then(function () {
      profile.setValue(ONBOARDING_GROUP_UPDATED, new Date().getTime());
      profile.setValue(ONBOARDING_GROUP_ID, group_id + 1);

      // Save to BC
      window.blueConicClient.profile.updateProfile(function () {
        console.debug('Blueconic saved the latest onboarding messages');
      });
    });
  }

  return {
    setters: [function (_utilsRenderIntoDom) {
      renderIntoDom = _utilsRenderIntoDom.default;
    }, function (_utilsOnboardingMessages) {
      messages = _utilsOnboardingMessages.default;
    }, function (_globalsDataLayer) {
      dataLayer = _globalsDataLayer.default;
    }],
    execute: function () {
      ONBOARDING_STATUS = 'onboarding_status';
      ONBOARDING_GROUP_ID = 'onboarding_group_id';
      ONBOARDING_GROUP_UPDATED = 'onboarding_group_updated';

      renderMessageForGroup = function renderMessageForGroup(groupId, cohort) {
        // Given an action name, push a custom event to GTM.
        var trackEvent = function trackEvent(action) {
          // Pushing directly into the dataLayer prevents a race condition on initial load.
          dataLayer.push({
            event: 'onboarding_interaction',
            onboarding_action: action,
            onboarding_message: groupId,
            onboarding_cohort: cohort
          });
        };

        // Attaches the handler for the close button.
        var addCloseHandler = function addCloseHandler() {
          var closeButton = document.querySelector('.c-nudge-onboarding__close-icon');
          closeButton.addEventListener('click', function () {
            document.querySelector('.c-nudge-onboarding').remove();
            trackEvent('message active close');
          });
        };

        // Attaches the handler
        var addScrollHandler = function addScrollHandler() {
          var handleScroll = function handleScroll() {
            var collapseOffset = 500;

            if (window.pageYOffset > collapseOffset) {
              var elem = document.querySelector('.c-nudge-onboarding');
              // Make sure the element exists before interacting with it.
              if (elem) {
                elem.classList.add('c-nudge-onboarding--collapsed');
                trackEvent('message passive close');
              }
              document.removeEventListener('scroll', handleScroll);
            }
          };
          document.addEventListener('scroll', handleScroll);
        };

        var addCTAClickHandler = function addCTAClickHandler() {
          var links = document.querySelectorAll('.js-onboarding-link');
          links.forEach(function (elem) {
            elem.addEventListener('click', function () {
              return trackEvent('message clicked');
            });
          });
        };

        var message = messages[groupId];
        if (!message) {
          console.error('There\'s no message for group ' + groupId);
          return;
        }

        return renderIntoDom('nudge-onboarding', {
          message: message
        }).then(addCloseHandler).then(addScrollHandler).then(addCTAClickHandler).then(function () {
          return trackEvent('message display');
        });
      };

      debugGroup = location.search.match(/onboarding_group\=(\d)/);


      if (!debugGroup) {
        // If there is no debug url param, load via blueconic targeting.
        window.addEventListener('onBlueConicLoaded', function () {
          // Need to explicitly load some props from BC
          var profile = window.blueConicClient.profile.getProfile();
          profile.loadValues([ONBOARDING_STATUS, ONBOARDING_GROUP_ID, ONBOARDING_GROUP_UPDATED], this, init);
        });
      } else {
        // If there is a debug url param, render without all the target checking.
        renderMessageForGroup(debugGroup[1]);
      }
    }
  };
});
System.register('theatlantic/js/components/breaking-news.js', [], function (_export, _context) {
  "use strict";

  var ns;
  return {
    setters: [],
    execute: function () {
      ns = 'atl:breaking-news';


      performance.mark(ns + '_loaded');
    }
  };
});
System.registerDynamic('npm:iframe-resizer@3.6.2/js/iframeResizer.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /*
   * File: iframeResizer.js
   * Desc: Force iframes to size to content.
   * Requires: iframeResizer.contentWindow.js to be loaded into the target frame.
   * Doc: https://github.com/davidjbradshaw/iframe-resizer
   * Author: David J. Bradshaw - dave@bradshaw.net
   * Contributor: Jure Mav - jure.mav@gmail.com
   * Contributor: Reed Dadoune - reed@dadoune.com
   */

  ;(function (undefined) {
    'use strict';

    if (typeof window === 'undefined') return; // don't run for server side render

    var count = 0,
        logEnabled = false,
        hiddenCheckEnabled = false,
        msgHeader = 'message',
        msgHeaderLen = msgHeader.length,
        msgId = '[iFrameSizer]',
        //Must match iframe msg ID
    msgIdLen = msgId.length,
        pagePosition = null,
        requestAnimationFrame = window.requestAnimationFrame,
        resetRequiredMethods = { max: 1, scroll: 1, bodyScroll: 1, documentElementScroll: 1 },
        settings = {},
        timer = null,
        logId = 'Host Page',
        defaults = {
      autoResize: true,
      bodyBackground: null,
      bodyMargin: null,
      bodyMarginV1: 8,
      bodyPadding: null,
      checkOrigin: true,
      inPageLinks: false,
      enablePublicMethods: true,
      heightCalculationMethod: 'bodyOffset',
      id: 'iFrameResizer',
      interval: 32,
      log: false,
      maxHeight: Infinity,
      maxWidth: Infinity,
      minHeight: 0,
      minWidth: 0,
      resizeFrom: 'parent',
      scrolling: false,
      sizeHeight: true,
      sizeWidth: false,
      warningTimeout: 5000,
      tolerance: 0,
      widthCalculationMethod: 'scroll',
      closedCallback: function () {},
      initCallback: function () {},
      messageCallback: function () {
        warn('MessageCallback function not defined');
      },
      resizedCallback: function () {},
      scrollCallback: function () {
        return true;
      }
    };

    function addEventListener(obj, evt, func) {
      /* istanbul ignore else */ // Not testable in PhantonJS
      if ('addEventListener' in window) {
        obj.addEventListener(evt, func, false);
      } else if ('attachEvent' in window) {
        //IE
        obj.attachEvent('on' + evt, func);
      }
    }

    function removeEventListener(el, evt, func) {
      /* istanbul ignore else */ // Not testable in phantonJS
      if ('removeEventListener' in window) {
        el.removeEventListener(evt, func, false);
      } else if ('detachEvent' in window) {
        //IE
        el.detachEvent('on' + evt, func);
      }
    }

    function setupRequestAnimationFrame() {
      var vendors = ['moz', 'webkit', 'o', 'ms'],
          x;

      // Remove vendor prefixing if prefixed and break early if not
      for (x = 0; x < vendors.length && !requestAnimationFrame; x += 1) {
        requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
      }

      if (!requestAnimationFrame) {
        log('setup', 'RequestAnimationFrame not supported');
      }
    }

    function getMyID(iframeId) {
      var retStr = 'Host page: ' + iframeId;

      if (window.top !== window.self) {
        if (window.parentIFrame && window.parentIFrame.getId) {
          retStr = window.parentIFrame.getId() + ': ' + iframeId;
        } else {
          retStr = 'Nested host page: ' + iframeId;
        }
      }

      return retStr;
    }

    function formatLogHeader(iframeId) {
      return msgId + '[' + getMyID(iframeId) + ']';
    }

    function isLogEnabled(iframeId) {
      return settings[iframeId] ? settings[iframeId].log : logEnabled;
    }

    function log(iframeId, msg) {
      output('log', iframeId, msg, isLogEnabled(iframeId));
    }

    function info(iframeId, msg) {
      output('info', iframeId, msg, isLogEnabled(iframeId));
    }

    function warn(iframeId, msg) {
      output('warn', iframeId, msg, true);
    }

    function output(type, iframeId, msg, enabled) {
      if (true === enabled && 'object' === typeof window.console) {
        console[type](formatLogHeader(iframeId), msg);
      }
    }

    function iFrameListener(event) {
      function resizeIFrame() {
        function resize() {
          setSize(messageData);
          setPagePosition(iframeId);
          callback('resizedCallback', messageData);
        }

        ensureInRange('Height');
        ensureInRange('Width');

        syncResize(resize, messageData, 'init');
      }

      function processMsg() {
        var data = msg.substr(msgIdLen).split(':');

        return {
          iframe: settings[data[0]] && settings[data[0]].iframe,
          id: data[0],
          height: data[1],
          width: data[2],
          type: data[3]
        };
      }

      function ensureInRange(Dimension) {
        var max = Number(settings[iframeId]['max' + Dimension]),
            min = Number(settings[iframeId]['min' + Dimension]),
            dimension = Dimension.toLowerCase(),
            size = Number(messageData[dimension]);

        log(iframeId, 'Checking ' + dimension + ' is in range ' + min + '-' + max);

        if (size < min) {
          size = min;
          log(iframeId, 'Set ' + dimension + ' to min value');
        }

        if (size > max) {
          size = max;
          log(iframeId, 'Set ' + dimension + ' to max value');
        }

        messageData[dimension] = '' + size;
      }

      function isMessageFromIFrame() {
        function checkAllowedOrigin() {
          function checkList() {
            var i = 0,
                retCode = false;

            log(iframeId, 'Checking connection is from allowed list of origins: ' + checkOrigin);

            for (; i < checkOrigin.length; i++) {
              if (checkOrigin[i] === origin) {
                retCode = true;
                break;
              }
            }
            return retCode;
          }

          function checkSingle() {
            var remoteHost = settings[iframeId] && settings[iframeId].remoteHost;
            log(iframeId, 'Checking connection is from: ' + remoteHost);
            return origin === remoteHost;
          }

          return checkOrigin.constructor === Array ? checkList() : checkSingle();
        }

        var origin = event.origin,
            checkOrigin = settings[iframeId] && settings[iframeId].checkOrigin;

        if (checkOrigin && '' + origin !== 'null' && !checkAllowedOrigin()) {
          throw new Error('Unexpected message received from: ' + origin + ' for ' + messageData.iframe.id + '. Message was: ' + event.data + '. This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.');
        }

        return true;
      }

      function isMessageForUs() {
        return msgId === ('' + msg).substr(0, msgIdLen) && msg.substr(msgIdLen).split(':')[0] in settings; //''+Protects against non-string msg
      }

      function isMessageFromMetaParent() {
        //Test if this message is from a parent above us. This is an ugly test, however, updating
        //the message format would break backwards compatibity.
        var retCode = messageData.type in { 'true': 1, 'false': 1, 'undefined': 1 };

        if (retCode) {
          log(iframeId, 'Ignoring init message from meta parent page');
        }

        return retCode;
      }

      function getMsgBody(offset) {
        return msg.substr(msg.indexOf(':') + msgHeaderLen + offset);
      }

      function forwardMsgFromIFrame(msgBody) {
        log(iframeId, 'MessageCallback passed: {iframe: ' + messageData.iframe.id + ', message: ' + msgBody + '}');
        callback('messageCallback', {
          iframe: messageData.iframe,
          message: JSON.parse(msgBody)
        });
        log(iframeId, '--');
      }

      function getPageInfo() {
        var bodyPosition = document.body.getBoundingClientRect(),
            iFramePosition = messageData.iframe.getBoundingClientRect();

        return JSON.stringify({
          iframeHeight: iFramePosition.height,
          iframeWidth: iFramePosition.width,
          clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
          clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
          offsetTop: parseInt(iFramePosition.top - bodyPosition.top, 10),
          offsetLeft: parseInt(iFramePosition.left - bodyPosition.left, 10),
          scrollTop: window.pageYOffset,
          scrollLeft: window.pageXOffset
        });
      }

      function sendPageInfoToIframe(iframe, iframeId) {
        function debouncedTrigger() {
          trigger('Send Page Info', 'pageInfo:' + getPageInfo(), iframe, iframeId);
        }
        debounceFrameEvents(debouncedTrigger, 32, iframeId);
      }

      function startPageInfoMonitor() {
        function setListener(type, func) {
          function sendPageInfo() {
            if (settings[id]) {
              sendPageInfoToIframe(settings[id].iframe, id);
            } else {
              stop();
            }
          }

          ['scroll', 'resize'].forEach(function (evt) {
            log(id, type + evt + ' listener for sendPageInfo');
            func(window, evt, sendPageInfo);
          });
        }

        function stop() {
          setListener('Remove ', removeEventListener);
        }

        function start() {
          setListener('Add ', addEventListener);
        }

        var id = iframeId; //Create locally scoped copy of iFrame ID

        start();

        if (settings[id]) {
          settings[id].stopPageInfo = stop;
        }
      }

      function stopPageInfoMonitor() {
        if (settings[iframeId] && settings[iframeId].stopPageInfo) {
          settings[iframeId].stopPageInfo();
          delete settings[iframeId].stopPageInfo;
        }
      }

      function checkIFrameExists() {
        var retBool = true;

        if (null === messageData.iframe) {
          warn(iframeId, 'IFrame (' + messageData.id + ') not found');
          retBool = false;
        }
        return retBool;
      }

      function getElementPosition(target) {
        var iFramePosition = target.getBoundingClientRect();

        getPagePosition(iframeId);

        return {
          x: Math.floor(Number(iFramePosition.left) + Number(pagePosition.x)),
          y: Math.floor(Number(iFramePosition.top) + Number(pagePosition.y))
        };
      }

      function scrollRequestFromChild(addOffset) {
        /* istanbul ignore next */ //Not testable in Karma
        function reposition() {
          pagePosition = newPosition;
          scrollTo();
          log(iframeId, '--');
        }

        function calcOffset() {
          return {
            x: Number(messageData.width) + offset.x,
            y: Number(messageData.height) + offset.y
          };
        }

        function scrollParent() {
          if (window.parentIFrame) {
            window.parentIFrame['scrollTo' + (addOffset ? 'Offset' : '')](newPosition.x, newPosition.y);
          } else {
            warn(iframeId, 'Unable to scroll to requested position, window.parentIFrame not found');
          }
        }

        var offset = addOffset ? getElementPosition(messageData.iframe) : { x: 0, y: 0 },
            newPosition = calcOffset();

        log(iframeId, 'Reposition requested from iFrame (offset x:' + offset.x + ' y:' + offset.y + ')');

        if (window.top !== window.self) {
          scrollParent();
        } else {
          reposition();
        }
      }

      function scrollTo() {
        if (false !== callback('scrollCallback', pagePosition)) {
          setPagePosition(iframeId);
        } else {
          unsetPagePosition();
        }
      }

      function findTarget(location) {
        function jumpToTarget() {
          var jumpPosition = getElementPosition(target);

          log(iframeId, 'Moving to in page link (#' + hash + ') at x: ' + jumpPosition.x + ' y: ' + jumpPosition.y);
          pagePosition = {
            x: jumpPosition.x,
            y: jumpPosition.y
          };

          scrollTo();
          log(iframeId, '--');
        }

        function jumpToParent() {
          if (window.parentIFrame) {
            window.parentIFrame.moveToAnchor(hash);
          } else {
            log(iframeId, 'In page link #' + hash + ' not found and window.parentIFrame not found');
          }
        }

        var hash = location.split('#')[1] || '',
            hashData = decodeURIComponent(hash),
            target = document.getElementById(hashData) || document.getElementsByName(hashData)[0];

        if (target) {
          jumpToTarget();
        } else if (window.top !== window.self) {
          jumpToParent();
        } else {
          log(iframeId, 'In page link #' + hash + ' not found');
        }
      }

      function callback(funcName, val) {
        return chkCallback(iframeId, funcName, val);
      }

      function actionMsg() {

        if (settings[iframeId] && settings[iframeId].firstRun) firstRun();

        switch (messageData.type) {
          case 'close':
            if (settings[iframeId].closeRequestCallback) chkCallback(iframeId, 'closeRequestCallback', settings[iframeId].iframe);else closeIFrame(messageData.iframe);
            break;
          case 'message':
            forwardMsgFromIFrame(getMsgBody(6));
            break;
          case 'scrollTo':
            scrollRequestFromChild(false);
            break;
          case 'scrollToOffset':
            scrollRequestFromChild(true);
            break;
          case 'pageInfo':
            sendPageInfoToIframe(settings[iframeId] && settings[iframeId].iframe, iframeId);
            startPageInfoMonitor();
            break;
          case 'pageInfoStop':
            stopPageInfoMonitor();
            break;
          case 'inPageLink':
            findTarget(getMsgBody(9));
            break;
          case 'reset':
            resetIFrame(messageData);
            break;
          case 'init':
            resizeIFrame();
            callback('initCallback', messageData.iframe);
            break;
          default:
            resizeIFrame();
        }
      }

      function hasSettings(iframeId) {
        var retBool = true;

        if (!settings[iframeId]) {
          retBool = false;
          warn(messageData.type + ' No settings for ' + iframeId + '. Message was: ' + msg);
        }

        return retBool;
      }

      function iFrameReadyMsgReceived() {
        for (var iframeId in settings) {
          trigger('iFrame requested init', createOutgoingMsg(iframeId), document.getElementById(iframeId), iframeId);
        }
      }

      function firstRun() {
        if (settings[iframeId]) {
          settings[iframeId].firstRun = false;
        }
      }

      function clearWarningTimeout() {
        if (settings[iframeId]) {
          clearTimeout(settings[iframeId].msgTimeout);
          settings[iframeId].warningTimeout = 0;
        }
      }

      var msg = event.data,
          messageData = {},
          iframeId = null;

      if ('[iFrameResizerChild]Ready' === msg) {
        iFrameReadyMsgReceived();
      } else if (isMessageForUs()) {
        messageData = processMsg();
        iframeId = logId = messageData.id;
        if (settings[iframeId]) {
          settings[iframeId].loaded = true;
        }

        if (!isMessageFromMetaParent() && hasSettings(iframeId)) {
          log(iframeId, 'Received: ' + msg);

          if (checkIFrameExists() && isMessageFromIFrame()) {
            actionMsg();
          }
        }
      } else {
        info(iframeId, 'Ignored: ' + msg);
      }
    }

    function chkCallback(iframeId, funcName, val) {
      var func = null,
          retVal = null;

      if (settings[iframeId]) {
        func = settings[iframeId][funcName];

        if ('function' === typeof func) {
          retVal = func(val);
        } else {
          throw new TypeError(funcName + ' on iFrame[' + iframeId + '] is not a function');
        }
      }

      return retVal;
    }

    function removeIframeListeners(iframe) {
      var iframeId = iframe.id;
      delete settings[iframeId];
    }

    function closeIFrame(iframe) {
      var iframeId = iframe.id;
      log(iframeId, 'Removing iFrame: ' + iframeId);

      try {
        // Catch race condition error with React
        if (iframe.parentNode) {
          iframe.parentNode.removeChild(iframe);
        }
      } catch (e) {}

      chkCallback(iframeId, 'closedCallback', iframeId);
      log(iframeId, '--');
      removeIframeListeners(iframe);
    }

    function getPagePosition(iframeId) {
      if (null === pagePosition) {
        pagePosition = {
          x: window.pageXOffset !== undefined ? window.pageXOffset : document.documentElement.scrollLeft,
          y: window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop
        };
        log(iframeId, 'Get page position: ' + pagePosition.x + ',' + pagePosition.y);
      }
    }

    function setPagePosition(iframeId) {
      if (null !== pagePosition) {
        window.scrollTo(pagePosition.x, pagePosition.y);
        log(iframeId, 'Set page position: ' + pagePosition.x + ',' + pagePosition.y);
        unsetPagePosition();
      }
    }

    function unsetPagePosition() {
      pagePosition = null;
    }

    function resetIFrame(messageData) {
      function reset() {
        setSize(messageData);
        trigger('reset', 'reset', messageData.iframe, messageData.id);
      }

      log(messageData.id, 'Size reset requested by ' + ('init' === messageData.type ? 'host page' : 'iFrame'));
      getPagePosition(messageData.id);
      syncResize(reset, messageData, 'reset');
    }

    function setSize(messageData) {
      function setDimension(dimension) {
        messageData.iframe.style[dimension] = messageData[dimension] + 'px';
        log(messageData.id, 'IFrame (' + iframeId + ') ' + dimension + ' set to ' + messageData[dimension] + 'px');
      }

      function chkZero(dimension) {
        //FireFox sets dimension of hidden iFrames to zero.
        //So if we detect that set up an event to check for
        //when iFrame becomes visible.

        /* istanbul ignore next */ //Not testable in PhantomJS
        if (!hiddenCheckEnabled && '0' === messageData[dimension]) {
          hiddenCheckEnabled = true;
          log(iframeId, 'Hidden iFrame detected, creating visibility listener');
          fixHiddenIFrames();
        }
      }

      function processDimension(dimension) {
        setDimension(dimension);
        chkZero(dimension);
      }

      var iframeId = messageData.iframe.id;

      if (settings[iframeId]) {
        if (settings[iframeId].sizeHeight) {
          processDimension('height');
        }
        if (settings[iframeId].sizeWidth) {
          processDimension('width');
        }
      }
    }

    function syncResize(func, messageData, doNotSync) {
      /* istanbul ignore if */ //Not testable in PhantomJS
      if (doNotSync !== messageData.type && requestAnimationFrame) {
        log(messageData.id, 'Requesting animation frame');
        requestAnimationFrame(func);
      } else {
        func();
      }
    }

    function trigger(calleeMsg, msg, iframe, id, noResponseWarning) {
      function postMessageToIFrame() {
        var target = settings[id] && settings[id].targetOrigin;
        log(id, '[' + calleeMsg + '] Sending msg to iframe[' + id + '] (' + msg + ') targetOrigin: ' + target);
        iframe.contentWindow.postMessage(msgId + msg, target);
      }

      function iFrameNotFound() {
        warn(id, '[' + calleeMsg + '] IFrame(' + id + ') not found');
      }

      function chkAndSend() {
        if (iframe && 'contentWindow' in iframe && null !== iframe.contentWindow) {
          //Null test for PhantomJS
          postMessageToIFrame();
        } else {
          iFrameNotFound();
        }
      }

      function warnOnNoResponse() {
        function warning() {
          if (settings[id] && !settings[id].loaded && !errorShown) {
            errorShown = true;
            warn(id, 'IFrame has not responded within ' + settings[id].warningTimeout / 1000 + ' seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning.');
          }
        }

        if (!!noResponseWarning && settings[id] && !!settings[id].warningTimeout) {
          settings[id].msgTimeout = setTimeout(warning, settings[id].warningTimeout);
        }
      }

      var errorShown = false;

      id = id || iframe.id;

      if (settings[id]) {
        chkAndSend();
        warnOnNoResponse();
      }
    }

    function createOutgoingMsg(iframeId) {
      return iframeId + ':' + settings[iframeId].bodyMarginV1 + ':' + settings[iframeId].sizeWidth + ':' + settings[iframeId].log + ':' + settings[iframeId].interval + ':' + settings[iframeId].enablePublicMethods + ':' + settings[iframeId].autoResize + ':' + settings[iframeId].bodyMargin + ':' + settings[iframeId].heightCalculationMethod + ':' + settings[iframeId].bodyBackground + ':' + settings[iframeId].bodyPadding + ':' + settings[iframeId].tolerance + ':' + settings[iframeId].inPageLinks + ':' + settings[iframeId].resizeFrom + ':' + settings[iframeId].widthCalculationMethod;
    }

    function setupIFrame(iframe, options) {
      function setLimits() {
        function addStyle(style) {
          if (Infinity !== settings[iframeId][style] && 0 !== settings[iframeId][style]) {
            iframe.style[style] = settings[iframeId][style] + 'px';
            log(iframeId, 'Set ' + style + ' = ' + settings[iframeId][style] + 'px');
          }
        }

        function chkMinMax(dimension) {
          if (settings[iframeId]['min' + dimension] > settings[iframeId]['max' + dimension]) {
            throw new Error('Value for min' + dimension + ' can not be greater than max' + dimension);
          }
        }

        chkMinMax('Height');
        chkMinMax('Width');

        addStyle('maxHeight');
        addStyle('minHeight');
        addStyle('maxWidth');
        addStyle('minWidth');
      }

      function newId() {
        var id = options && options.id || defaults.id + count++;
        if (null !== document.getElementById(id)) {
          id = id + count++;
        }
        return id;
      }

      function ensureHasId(iframeId) {
        logId = iframeId;
        if ('' === iframeId) {
          iframe.id = iframeId = newId();
          logEnabled = (options || {}).log;
          logId = iframeId;
          log(iframeId, 'Added missing iframe ID: ' + iframeId + ' (' + iframe.src + ')');
        }

        return iframeId;
      }

      function setScrolling() {
        log(iframeId, 'IFrame scrolling ' + (settings[iframeId] && settings[iframeId].scrolling ? 'enabled' : 'disabled') + ' for ' + iframeId);
        iframe.style.overflow = false === (settings[iframeId] && settings[iframeId].scrolling) ? 'hidden' : 'auto';
        switch (settings[iframeId] && settings[iframeId].scrolling) {
          case true:
            iframe.scrolling = 'yes';
            break;
          case false:
            iframe.scrolling = 'no';
            break;
          default:
            iframe.scrolling = settings[iframeId] ? settings[iframeId].scrolling : 'no';
        }
      }

      //The V1 iFrame script expects an int, where as in V2 expects a CSS
      //string value such as '1px 3em', so if we have an int for V2, set V1=V2
      //and then convert V2 to a string PX value.
      function setupBodyMarginValues() {
        if ('number' === typeof (settings[iframeId] && settings[iframeId].bodyMargin) || '0' === (settings[iframeId] && settings[iframeId].bodyMargin)) {
          settings[iframeId].bodyMarginV1 = settings[iframeId].bodyMargin;
          settings[iframeId].bodyMargin = '' + settings[iframeId].bodyMargin + 'px';
        }
      }

      function checkReset() {
        // Reduce scope of firstRun to function, because IE8's JS execution
        // context stack is borked and this value gets externally
        // changed midway through running this function!!!
        var firstRun = settings[iframeId] && settings[iframeId].firstRun,
            resetRequertMethod = settings[iframeId] && settings[iframeId].heightCalculationMethod in resetRequiredMethods;

        if (!firstRun && resetRequertMethod) {
          resetIFrame({ iframe: iframe, height: 0, width: 0, type: 'init' });
        }
      }

      function setupIFrameObject() {
        if (Function.prototype.bind && settings[iframeId]) {
          //Ignore unpolyfilled IE8.
          settings[iframeId].iframe.iFrameResizer = {

            close: closeIFrame.bind(null, settings[iframeId].iframe),

            removeListeners: removeIframeListeners.bind(null, settings[iframeId].iframe),

            resize: trigger.bind(null, 'Window resize', 'resize', settings[iframeId].iframe),

            moveToAnchor: function (anchor) {
              trigger('Move to anchor', 'moveToAnchor:' + anchor, settings[iframeId].iframe, iframeId);
            },

            sendMessage: function (message) {
              message = JSON.stringify(message);
              trigger('Send Message', 'message:' + message, settings[iframeId].iframe, iframeId);
            }
          };
        }
      }

      //We have to call trigger twice, as we can not be sure if all
      //iframes have completed loading when this code runs. The
      //event listener also catches the page changing in the iFrame.
      function init(msg) {
        function iFrameLoaded() {
          trigger('iFrame.onload', msg, iframe, undefined, true);
          checkReset();
        }

        addEventListener(iframe, 'load', iFrameLoaded);
        trigger('init', msg, iframe, undefined, true);
      }

      function checkOptions(options) {
        if ('object' !== typeof options) {
          throw new TypeError('Options is not an object');
        }
      }

      function copyOptions(options) {
        for (var option in defaults) {
          if (defaults.hasOwnProperty(option)) {
            settings[iframeId][option] = options.hasOwnProperty(option) ? options[option] : defaults[option];
          }
        }
      }

      function getTargetOrigin(remoteHost) {
        return '' === remoteHost || 'file://' === remoteHost ? '*' : remoteHost;
      }

      function processOptions(options) {
        options = options || {};
        settings[iframeId] = {
          firstRun: true,
          iframe: iframe,
          remoteHost: iframe.src.split('/').slice(0, 3).join('/')
        };

        checkOptions(options);
        copyOptions(options);

        if (settings[iframeId]) {
          settings[iframeId].targetOrigin = true === settings[iframeId].checkOrigin ? getTargetOrigin(settings[iframeId].remoteHost) : '*';
        }
      }

      function beenHere() {
        return iframeId in settings && 'iFrameResizer' in iframe;
      }

      var iframeId = ensureHasId(iframe.id);

      if (!beenHere()) {
        processOptions(options);
        setScrolling();
        setLimits();
        setupBodyMarginValues();
        init(createOutgoingMsg(iframeId));
        setupIFrameObject();
      } else {
        warn(iframeId, 'Ignored iFrame, already setup.');
      }
    }

    function debouce(fn, time) {
      if (null === timer) {
        timer = setTimeout(function () {
          timer = null;
          fn();
        }, time);
      }
    }

    var frameTimer = {};
    function debounceFrameEvents(fn, time, frameId) {
      if (!frameTimer[frameId]) {
        frameTimer[frameId] = setTimeout(function () {
          frameTimer[frameId] = null;
          fn();
        }, time);
      }
    }

    /* istanbul ignore next */ //Not testable in PhantomJS
    function fixHiddenIFrames() {
      function checkIFrames() {
        function checkIFrame(settingId) {
          function chkDimension(dimension) {
            return '0px' === (settings[settingId] && settings[settingId].iframe.style[dimension]);
          }

          function isVisible(el) {
            return null !== el.offsetParent;
          }

          if (settings[settingId] && isVisible(settings[settingId].iframe) && (chkDimension('height') || chkDimension('width'))) {
            trigger('Visibility change', 'resize', settings[settingId].iframe, settingId);
          }
        }

        for (var settingId in settings) {
          checkIFrame(settingId);
        }
      }

      function mutationObserved(mutations) {
        log('window', 'Mutation observed: ' + mutations[0].target + ' ' + mutations[0].type);
        debouce(checkIFrames, 16);
      }

      function createMutationObserver() {
        var target = document.querySelector('body'),
            config = {
          attributes: true,
          attributeOldValue: false,
          characterData: true,
          characterDataOldValue: false,
          childList: true,
          subtree: true
        },
            observer = new MutationObserver(mutationObserved);

        observer.observe(target, config);
      }

      var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

      if (MutationObserver) createMutationObserver();
    }

    function resizeIFrames(event) {
      function resize() {
        sendTriggerMsg('Window ' + event, 'resize');
      }

      log('window', 'Trigger event: ' + event);
      debouce(resize, 16);
    }

    /* istanbul ignore next */ //Not testable in PhantomJS
    function tabVisible() {
      function resize() {
        sendTriggerMsg('Tab Visable', 'resize');
      }

      if ('hidden' !== document.visibilityState) {
        log('document', 'Trigger event: Visiblity change');
        debouce(resize, 16);
      }
    }

    function sendTriggerMsg(eventName, event) {
      function isIFrameResizeEnabled(iframeId) {
        return settings[iframeId] && 'parent' === settings[iframeId].resizeFrom && settings[iframeId].autoResize && !settings[iframeId].firstRun;
      }

      for (var iframeId in settings) {
        if (isIFrameResizeEnabled(iframeId)) {
          trigger(eventName, event, document.getElementById(iframeId), iframeId);
        }
      }
    }

    function setupEventListeners() {
      addEventListener(window, 'message', iFrameListener);

      addEventListener(window, 'resize', function () {
        resizeIFrames('resize');
      });

      addEventListener(document, 'visibilitychange', tabVisible);
      addEventListener(document, '-webkit-visibilitychange', tabVisible); //Andriod 4.4
      addEventListener(window, 'focusin', function () {
        resizeIFrames('focus');
      }); //IE8-9
      addEventListener(window, 'focus', function () {
        resizeIFrames('focus');
      });
    }

    function factory() {
      function init(options, element) {
        function chkType() {
          if (!element.tagName) {
            throw new TypeError('Object is not a valid DOM element');
          } else if ('IFRAME' !== element.tagName.toUpperCase()) {
            throw new TypeError('Expected <IFRAME> tag, found <' + element.tagName + '>');
          }
        }

        if (element) {
          chkType();
          setupIFrame(element, options);
          iFrames.push(element);
        }
      }

      function warnDeprecatedOptions(options) {
        if (options && options.enablePublicMethods) {
          warn('enablePublicMethods option has been removed, public methods are now always available in the iFrame');
        }
      }

      var iFrames;

      setupRequestAnimationFrame();
      setupEventListeners();

      return function iFrameResizeF(options, target) {
        iFrames = []; //Only return iFrames past in on this call

        warnDeprecatedOptions(options);

        switch (typeof target) {
          case 'undefined':
          case 'string':
            Array.prototype.forEach.call(document.querySelectorAll(target || 'iframe'), init.bind(undefined, options));
            break;
          case 'object':
            init(options, target);
            break;
          default:
            throw new TypeError('Unexpected data type (' + typeof target + ')');
        }

        return iFrames;
      };
    }

    function createJQueryPublicMethod($) {
      if (!$.fn) {
        info('', 'Unable to bind to jQuery, it is not fully loaded.');
      } else if (!$.fn.iFrameResize) {
        $.fn.iFrameResize = function $iFrameResizeF(options) {
          function init(index, element) {
            setupIFrame(element, options);
          }

          return this.filter('iframe').each(init).end();
        };
      }
    }

    if (window.jQuery) {
      createJQueryPublicMethod(window.jQuery);
    }

    if (typeof undefined === 'function' && define.amd) {
      define([], factory);
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
      //Node for browserfy
      module.exports = factory();
    } else {
      window.iFrameResize = window.iFrameResize || factory();
    }
  })();
});
System.registerDynamic('npm:iframe-resizer@3.6.2/js/iframeResizer.contentWindow.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /*
   * File: iframeResizer.contentWindow.js
   * Desc: Include this file in any page being loaded into an iframe
   *       to force the iframe to resize to the content size.
   * Requires: iframeResizer.js on host page.
   * Doc: https://github.com/davidjbradshaw/iframe-resizer
   * Author: David J. Bradshaw - dave@bradshaw.net
   * Contributor: Jure Mav - jure.mav@gmail.com
   * Contributor: Ian Caunce - ian@hallnet.co.uk
   */

  ;(function (undefined) {
    'use strict';

    if (typeof window === 'undefined') return; // don't run for server side render

    var autoResize = true,
        base = 10,
        bodyBackground = '',
        bodyMargin = 0,
        bodyMarginStr = '',
        bodyObserver = null,
        bodyPadding = '',
        calculateWidth = false,
        doubleEventList = { 'resize': 1, 'click': 1 },
        eventCancelTimer = 128,
        firstRun = true,
        height = 1,
        heightCalcModeDefault = 'bodyOffset',
        heightCalcMode = heightCalcModeDefault,
        initLock = true,
        initMsg = '',
        inPageLinks = {},
        interval = 32,
        intervalTimer = null,
        logging = false,
        msgID = '[iFrameSizer]',
        //Must match host page msg ID
    msgIdLen = msgID.length,
        myID = '',
        observer = null,
        resetRequiredMethods = { max: 1, min: 1, bodyScroll: 1, documentElementScroll: 1 },
        resizeFrom = 'child',
        sendPermit = true,
        target = window.parent,
        targetOriginDefault = '*',
        tolerance = 0,
        triggerLocked = false,
        triggerLockedTimer = null,
        throttledTimer = 16,
        width = 1,
        widthCalcModeDefault = 'scroll',
        widthCalcMode = widthCalcModeDefault,
        win = window,
        messageCallback = function () {
      warn('MessageCallback function not defined');
    },
        readyCallback = function () {},
        pageInfoCallback = function () {},
        customCalcMethods = {
      height: function () {
        warn('Custom height calculation function not defined');
        return document.documentElement.offsetHeight;
      },
      width: function () {
        warn('Custom width calculation function not defined');
        return document.body.scrollWidth;
      }
    },
        eventHandlersByName = {},
        passiveSupported = false,
        onceSupported = false;

    function noop() {}

    try {
      var options = Object.create({}, {
        passive: { get: function () {
            passiveSupported = true;
          } },
        once: { get: function () {
            onceSupported = true;
          } }
      });
      window.addEventListener('test', noop, options);
      window.removeEventListener('test', noop, options);
    } catch (e) {/* */}

    function addEventListener(el, evt, func, options) {
      /* istanbul ignore else */ // Not testable in phantomJS
      if ('addEventListener' in window) {
        el.addEventListener(evt, func, passiveSupported ? options || {} : false);
      } else if ('attachEvent' in window) {
        //IE
        el.attachEvent('on' + evt, func);
      }
    }

    function removeEventListener(el, evt, func) {
      /* istanbul ignore else */ // Not testable in phantomJS
      if ('removeEventListener' in window) {
        el.removeEventListener(evt, func, false);
      } else if ('detachEvent' in window) {
        //IE
        el.detachEvent('on' + evt, func);
      }
    }

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    //Based on underscore.js
    function throttle(func) {
      var context,
          args,
          result,
          timeout = null,
          previous = 0,
          later = function () {
        previous = getNow();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) {
          context = args = null;
        }
      };

      return function () {
        var now = getNow();

        if (!previous) {
          previous = now;
        }

        var remaining = throttledTimer - (now - previous);

        context = this;
        args = arguments;

        if (remaining <= 0 || remaining > throttledTimer) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }

          previous = now;
          result = func.apply(context, args);

          if (!timeout) {
            context = args = null;
          }
        } else if (!timeout) {
          timeout = setTimeout(later, remaining);
        }

        return result;
      };
    }

    var getNow = Date.now || function () {
      /* istanbul ignore next */ // Not testable in PhantonJS
      return new Date().getTime();
    };

    function formatLogMsg(msg) {
      return msgID + '[' + myID + ']' + ' ' + msg;
    }

    function log(msg) {
      if (logging && 'object' === typeof window.console) {
        console.log(formatLogMsg(msg));
      }
    }

    function warn(msg) {
      if ('object' === typeof window.console) {
        console.warn(formatLogMsg(msg));
      }
    }

    function init() {
      readDataFromParent();
      log('Initialising iFrame (' + location.href + ')');
      readDataFromPage();
      setMargin();
      setBodyStyle('background', bodyBackground);
      setBodyStyle('padding', bodyPadding);
      injectClearFixIntoBodyElement();
      checkHeightMode();
      checkWidthMode();
      stopInfiniteResizingOfIFrame();
      setupPublicMethods();
      startEventListeners();
      inPageLinks = setupInPageLinks();
      sendSize('init', 'Init message from host page');
      readyCallback();
    }

    function readDataFromParent() {

      function strBool(str) {
        return 'true' === str ? true : false;
      }

      var data = initMsg.substr(msgIdLen).split(':');

      myID = data[0];
      bodyMargin = undefined !== data[1] ? Number(data[1]) : bodyMargin; //For V1 compatibility
      calculateWidth = undefined !== data[2] ? strBool(data[2]) : calculateWidth;
      logging = undefined !== data[3] ? strBool(data[3]) : logging;
      interval = undefined !== data[4] ? Number(data[4]) : interval;
      autoResize = undefined !== data[6] ? strBool(data[6]) : autoResize;
      bodyMarginStr = data[7];
      heightCalcMode = undefined !== data[8] ? data[8] : heightCalcMode;
      bodyBackground = data[9];
      bodyPadding = data[10];
      tolerance = undefined !== data[11] ? Number(data[11]) : tolerance;
      inPageLinks.enable = undefined !== data[12] ? strBool(data[12]) : false;
      resizeFrom = undefined !== data[13] ? data[13] : resizeFrom;
      widthCalcMode = undefined !== data[14] ? data[14] : widthCalcMode;
    }

    function readDataFromPage() {
      function readData() {
        var data = window.iFrameResizer;

        log('Reading data from page: ' + JSON.stringify(data));

        messageCallback = 'messageCallback' in data ? data.messageCallback : messageCallback;
        readyCallback = 'readyCallback' in data ? data.readyCallback : readyCallback;
        targetOriginDefault = 'targetOrigin' in data ? data.targetOrigin : targetOriginDefault;
        heightCalcMode = 'heightCalculationMethod' in data ? data.heightCalculationMethod : heightCalcMode;
        widthCalcMode = 'widthCalculationMethod' in data ? data.widthCalculationMethod : widthCalcMode;
      }

      function setupCustomCalcMethods(calcMode, calcFunc) {
        if ('function' === typeof calcMode) {
          log('Setup custom ' + calcFunc + 'CalcMethod');
          customCalcMethods[calcFunc] = calcMode;
          calcMode = 'custom';
        }

        return calcMode;
      }

      if ('iFrameResizer' in window && Object === window.iFrameResizer.constructor) {
        readData();
        heightCalcMode = setupCustomCalcMethods(heightCalcMode, 'height');
        widthCalcMode = setupCustomCalcMethods(widthCalcMode, 'width');
      }

      log('TargetOrigin for parent set to: ' + targetOriginDefault);
    }

    function chkCSS(attr, value) {
      if (-1 !== value.indexOf('-')) {
        warn('Negative CSS value ignored for ' + attr);
        value = '';
      }
      return value;
    }

    function setBodyStyle(attr, value) {
      if (undefined !== value && '' !== value && 'null' !== value) {
        document.body.style[attr] = value;
        log('Body ' + attr + ' set to "' + value + '"');
      }
    }

    function setMargin() {
      //If called via V1 script, convert bodyMargin from int to str
      if (undefined === bodyMarginStr) {
        bodyMarginStr = bodyMargin + 'px';
      }

      setBodyStyle('margin', chkCSS('margin', bodyMarginStr));
    }

    function stopInfiniteResizingOfIFrame() {
      document.documentElement.style.height = '';
      document.body.style.height = '';
      log('HTML & body height set to "auto"');
    }

    function manageTriggerEvent(options) {

      var listener = {
        add: function (eventName) {
          function handleEvent() {
            sendSize(options.eventName, options.eventType);
          }

          eventHandlersByName[eventName] = handleEvent;

          addEventListener(window, eventName, handleEvent, { passive: true });
        },
        remove: function (eventName) {
          var handleEvent = eventHandlersByName[eventName];
          delete eventHandlersByName[eventName];

          removeEventListener(window, eventName, handleEvent);
        }
      };

      if (options.eventNames && Array.prototype.map) {
        options.eventName = options.eventNames[0];
        options.eventNames.map(listener[options.method]);
      } else {
        listener[options.method](options.eventName);
      }

      log(capitalizeFirstLetter(options.method) + ' event listener: ' + options.eventType);
    }

    function manageEventListeners(method) {
      manageTriggerEvent({ method: method, eventType: 'Animation Start', eventNames: ['animationstart', 'webkitAnimationStart'] });
      manageTriggerEvent({ method: method, eventType: 'Animation Iteration', eventNames: ['animationiteration', 'webkitAnimationIteration'] });
      manageTriggerEvent({ method: method, eventType: 'Animation End', eventNames: ['animationend', 'webkitAnimationEnd'] });
      manageTriggerEvent({ method: method, eventType: 'Input', eventName: 'input' });
      manageTriggerEvent({ method: method, eventType: 'Mouse Up', eventName: 'mouseup' });
      manageTriggerEvent({ method: method, eventType: 'Mouse Down', eventName: 'mousedown' });
      manageTriggerEvent({ method: method, eventType: 'Orientation Change', eventName: 'orientationchange' });
      manageTriggerEvent({ method: method, eventType: 'Print', eventName: ['afterprint', 'beforeprint'] });
      manageTriggerEvent({ method: method, eventType: 'Ready State Change', eventName: 'readystatechange' });
      manageTriggerEvent({ method: method, eventType: 'Touch Start', eventName: 'touchstart' });
      manageTriggerEvent({ method: method, eventType: 'Touch End', eventName: 'touchend' });
      manageTriggerEvent({ method: method, eventType: 'Touch Cancel', eventName: 'touchcancel' });
      manageTriggerEvent({ method: method, eventType: 'Transition Start', eventNames: ['transitionstart', 'webkitTransitionStart', 'MSTransitionStart', 'oTransitionStart', 'otransitionstart'] });
      manageTriggerEvent({ method: method, eventType: 'Transition Iteration', eventNames: ['transitioniteration', 'webkitTransitionIteration', 'MSTransitionIteration', 'oTransitionIteration', 'otransitioniteration'] });
      manageTriggerEvent({ method: method, eventType: 'Transition End', eventNames: ['transitionend', 'webkitTransitionEnd', 'MSTransitionEnd', 'oTransitionEnd', 'otransitionend'] });
      if ('child' === resizeFrom) {
        manageTriggerEvent({ method: method, eventType: 'IFrame Resized', eventName: 'resize' });
      }
    }

    function checkCalcMode(calcMode, calcModeDefault, modes, type) {
      if (calcModeDefault !== calcMode) {
        if (!(calcMode in modes)) {
          warn(calcMode + ' is not a valid option for ' + type + 'CalculationMethod.');
          calcMode = calcModeDefault;
        }
        log(type + ' calculation method set to "' + calcMode + '"');
      }

      return calcMode;
    }

    function checkHeightMode() {
      heightCalcMode = checkCalcMode(heightCalcMode, heightCalcModeDefault, getHeight, 'height');
    }

    function checkWidthMode() {
      widthCalcMode = checkCalcMode(widthCalcMode, widthCalcModeDefault, getWidth, 'width');
    }

    function startEventListeners() {
      if (true === autoResize) {
        manageEventListeners('add');
        setupMutationObserver();
      } else {
        log('Auto Resize disabled');
      }
    }

    function stopMsgsToParent() {
      log('Disable outgoing messages');
      sendPermit = false;
    }

    function removeMsgListener() {
      log('Remove event listener: Message');
      removeEventListener(window, 'message', receiver);
    }

    function disconnectMutationObserver() {
      if (null !== bodyObserver) {
        /* istanbul ignore next */ // Not testable in PhantonJS
        bodyObserver.disconnect();
      }
    }

    function stopEventListeners() {
      manageEventListeners('remove');
      disconnectMutationObserver();
      clearInterval(intervalTimer);
    }

    function teardown() {
      stopMsgsToParent();
      removeMsgListener();
      if (true === autoResize) stopEventListeners();
    }

    function injectClearFixIntoBodyElement() {
      var clearFix = document.createElement('div');
      clearFix.style.clear = 'both';
      clearFix.style.display = 'block'; //Guard against this having been globally redefined in CSS.
      document.body.appendChild(clearFix);
    }

    function setupInPageLinks() {

      function getPagePosition() {
        return {
          x: window.pageXOffset !== undefined ? window.pageXOffset : document.documentElement.scrollLeft,
          y: window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop
        };
      }

      function getElementPosition(el) {
        var elPosition = el.getBoundingClientRect(),
            pagePosition = getPagePosition();

        return {
          x: parseInt(elPosition.left, 10) + parseInt(pagePosition.x, 10),
          y: parseInt(elPosition.top, 10) + parseInt(pagePosition.y, 10)
        };
      }

      function findTarget(location) {
        function jumpToTarget(target) {
          var jumpPosition = getElementPosition(target);

          log('Moving to in page link (#' + hash + ') at x: ' + jumpPosition.x + ' y: ' + jumpPosition.y);
          sendMsg(jumpPosition.y, jumpPosition.x, 'scrollToOffset'); // X&Y reversed at sendMsg uses height/width
        }

        var hash = location.split('#')[1] || location,
            //Remove # if present
        hashData = decodeURIComponent(hash),
            target = document.getElementById(hashData) || document.getElementsByName(hashData)[0];

        if (undefined !== target) {
          jumpToTarget(target);
        } else {
          log('In page link (#' + hash + ') not found in iFrame, so sending to parent');
          sendMsg(0, 0, 'inPageLink', '#' + hash);
        }
      }

      function checkLocationHash() {
        if ('' !== location.hash && '#' !== location.hash) {
          findTarget(location.href);
        }
      }

      function bindAnchors() {
        function setupLink(el) {
          function linkClicked(e) {
            e.preventDefault();

            /*jshint validthis:true */
            findTarget(this.getAttribute('href'));
          }

          if ('#' !== el.getAttribute('href')) {
            addEventListener(el, 'click', linkClicked);
          }
        }

        Array.prototype.forEach.call(document.querySelectorAll('a[href^="#"]'), setupLink);
      }

      function bindLocationHash() {
        addEventListener(window, 'hashchange', checkLocationHash);
      }

      function initCheck() {
        //check if page loaded with location hash after init resize
        setTimeout(checkLocationHash, eventCancelTimer);
      }

      function enableInPageLinks() {
        /* istanbul ignore else */ // Not testable in phantonJS
        if (Array.prototype.forEach && document.querySelectorAll) {
          log('Setting up location.hash handlers');
          bindAnchors();
          bindLocationHash();
          initCheck();
        } else {
          warn('In page linking not fully supported in this browser! (See README.md for IE8 workaround)');
        }
      }

      if (inPageLinks.enable) {
        enableInPageLinks();
      } else {
        log('In page linking not enabled');
      }

      return {
        findTarget: findTarget
      };
    }

    function setupPublicMethods() {
      log('Enable public methods');

      win.parentIFrame = {

        autoResize: function autoResizeF(resize) {
          if (true === resize && false === autoResize) {
            autoResize = true;
            startEventListeners();
            //sendSize('autoResize','Auto Resize enabled');
          } else if (false === resize && true === autoResize) {
            autoResize = false;
            stopEventListeners();
          }

          return autoResize;
        },

        close: function closeF() {
          sendMsg(0, 0, 'close');
          teardown();
        },

        getId: function getIdF() {
          return myID;
        },

        getPageInfo: function getPageInfoF(callback) {
          if ('function' === typeof callback) {
            pageInfoCallback = callback;
            sendMsg(0, 0, 'pageInfo');
          } else {
            pageInfoCallback = function () {};
            sendMsg(0, 0, 'pageInfoStop');
          }
        },

        moveToAnchor: function moveToAnchorF(hash) {
          inPageLinks.findTarget(hash);
        },

        reset: function resetF() {
          resetIFrame('parentIFrame.reset');
        },

        scrollTo: function scrollToF(x, y) {
          sendMsg(y, x, 'scrollTo'); // X&Y reversed at sendMsg uses height/width
        },

        scrollToOffset: function scrollToF(x, y) {
          sendMsg(y, x, 'scrollToOffset'); // X&Y reversed at sendMsg uses height/width
        },

        sendMessage: function sendMessageF(msg, targetOrigin) {
          sendMsg(0, 0, 'message', JSON.stringify(msg), targetOrigin);
        },

        setHeightCalculationMethod: function setHeightCalculationMethodF(heightCalculationMethod) {
          heightCalcMode = heightCalculationMethod;
          checkHeightMode();
        },

        setWidthCalculationMethod: function setWidthCalculationMethodF(widthCalculationMethod) {
          widthCalcMode = widthCalculationMethod;
          checkWidthMode();
        },

        setTargetOrigin: function setTargetOriginF(targetOrigin) {
          log('Set targetOrigin: ' + targetOrigin);
          targetOriginDefault = targetOrigin;
        },

        size: function sizeF(customHeight, customWidth) {
          var valString = '' + (customHeight ? customHeight : '') + (customWidth ? ',' + customWidth : '');
          //lockTrigger();
          sendSize('size', 'parentIFrame.size(' + valString + ')', customHeight, customWidth);
        }
      };
    }

    function initInterval() {
      if (0 !== interval) {
        log('setInterval: ' + interval + 'ms');
        intervalTimer = setInterval(function () {
          sendSize('interval', 'setInterval: ' + interval);
        }, Math.abs(interval));
      }
    }

    /* istanbul ignore next */ //Not testable in PhantomJS
    function setupBodyMutationObserver() {
      function addImageLoadListners(mutation) {
        function addImageLoadListener(element) {
          if (false === element.complete) {
            log('Attach listeners to ' + element.src);
            element.addEventListener('load', imageLoaded, false);
            element.addEventListener('error', imageError, false);
            elements.push(element);
          }
        }

        if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
          addImageLoadListener(mutation.target);
        } else if (mutation.type === 'childList') {
          Array.prototype.forEach.call(mutation.target.querySelectorAll('img'), addImageLoadListener);
        }
      }

      function removeFromArray(element) {
        elements.splice(elements.indexOf(element), 1);
      }

      function removeImageLoadListener(element) {
        log('Remove listeners from ' + element.src);
        element.removeEventListener('load', imageLoaded, false);
        element.removeEventListener('error', imageError, false);
        removeFromArray(element);
      }

      function imageEventTriggered(event, type, typeDesc) {
        removeImageLoadListener(event.target);
        sendSize(type, typeDesc + ': ' + event.target.src, undefined, undefined);
      }

      function imageLoaded(event) {
        imageEventTriggered(event, 'imageLoad', 'Image loaded');
      }

      function imageError(event) {
        imageEventTriggered(event, 'imageLoadFailed', 'Image load failed');
      }

      function mutationObserved(mutations) {
        sendSize('mutationObserver', 'mutationObserver: ' + mutations[0].target + ' ' + mutations[0].type);

        //Deal with WebKit asyncing image loading when tags are injected into the page
        mutations.forEach(addImageLoadListners);
      }

      function createMutationObserver() {
        var target = document.querySelector('body'),
            config = {
          attributes: true,
          attributeOldValue: false,
          characterData: true,
          characterDataOldValue: false,
          childList: true,
          subtree: true
        };

        observer = new MutationObserver(mutationObserved);

        log('Create body MutationObserver');
        observer.observe(target, config);

        return observer;
      }

      var elements = [],
          MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
          observer = createMutationObserver();

      return {
        disconnect: function () {
          if ('disconnect' in observer) {
            log('Disconnect body MutationObserver');
            observer.disconnect();
            elements.forEach(removeImageLoadListener);
          }
        }
      };
    }

    function setupMutationObserver() {
      var forceIntervalTimer = 0 > interval;

      /* istanbul ignore if */ // Not testable in PhantomJS
      if (window.MutationObserver || window.WebKitMutationObserver) {
        if (forceIntervalTimer) {
          initInterval();
        } else {
          bodyObserver = setupBodyMutationObserver();
        }
      } else {
        log('MutationObserver not supported in this browser!');
        initInterval();
      }
    }

    // document.documentElement.offsetHeight is not reliable, so
    // we have to jump through hoops to get a better value.
    function getComputedStyle(prop, el) {
      /* istanbul ignore next */ //Not testable in PhantomJS
      function convertUnitsToPxForIE8(value) {
        var PIXEL = /^\d+(px)?$/i;

        if (PIXEL.test(value)) {
          return parseInt(value, base);
        }

        var style = el.style.left,
            runtimeStyle = el.runtimeStyle.left;

        el.runtimeStyle.left = el.currentStyle.left;
        el.style.left = value || 0;
        value = el.style.pixelLeft;
        el.style.left = style;
        el.runtimeStyle.left = runtimeStyle;

        return value;
      }

      var retVal = 0;
      el = el || document.body;

      /* istanbul ignore else */ // Not testable in phantonJS
      if ('defaultView' in document && 'getComputedStyle' in document.defaultView) {
        retVal = document.defaultView.getComputedStyle(el, null);
        retVal = null !== retVal ? retVal[prop] : 0;
      } else {
        //IE8
        retVal = convertUnitsToPxForIE8(el.currentStyle[prop]);
      }

      return parseInt(retVal, base);
    }

    function chkEventThottle(timer) {
      if (timer > throttledTimer / 2) {
        throttledTimer = 2 * timer;
        log('Event throttle increased to ' + throttledTimer + 'ms');
      }
    }

    //Idea from https://github.com/guardian/iframe-messenger
    function getMaxElement(side, elements) {
      var elementsLength = elements.length,
          elVal = 0,
          maxVal = 0,
          Side = capitalizeFirstLetter(side),
          timer = getNow();

      for (var i = 0; i < elementsLength; i++) {
        elVal = elements[i].getBoundingClientRect()[side] + getComputedStyle('margin' + Side, elements[i]);
        if (elVal > maxVal) {
          maxVal = elVal;
        }
      }

      timer = getNow() - timer;

      log('Parsed ' + elementsLength + ' HTML elements');
      log('Element position calculated in ' + timer + 'ms');

      chkEventThottle(timer);

      return maxVal;
    }

    function getAllMeasurements(dimention) {
      return [dimention.bodyOffset(), dimention.bodyScroll(), dimention.documentElementOffset(), dimention.documentElementScroll()];
    }

    function getTaggedElements(side, tag) {
      function noTaggedElementsFound() {
        warn('No tagged elements (' + tag + ') found on page');
        return document.querySelectorAll('body *');
      }

      var elements = document.querySelectorAll('[' + tag + ']');

      if (0 === elements.length) noTaggedElementsFound();

      return getMaxElement(side, elements);
    }

    function getAllElements() {
      return document.querySelectorAll('body *');
    }

    var getHeight = {
      bodyOffset: function getBodyOffsetHeight() {
        return document.body.offsetHeight + getComputedStyle('marginTop') + getComputedStyle('marginBottom');
      },

      offset: function () {
        return getHeight.bodyOffset(); //Backwards compatability
      },

      bodyScroll: function getBodyScrollHeight() {
        return document.body.scrollHeight;
      },

      custom: function getCustomWidth() {
        return customCalcMethods.height();
      },

      documentElementOffset: function getDEOffsetHeight() {
        return document.documentElement.offsetHeight;
      },

      documentElementScroll: function getDEScrollHeight() {
        return document.documentElement.scrollHeight;
      },

      max: function getMaxHeight() {
        return Math.max.apply(null, getAllMeasurements(getHeight));
      },

      min: function getMinHeight() {
        return Math.min.apply(null, getAllMeasurements(getHeight));
      },

      grow: function growHeight() {
        return getHeight.max(); //Run max without the forced downsizing
      },

      lowestElement: function getBestHeight() {
        return Math.max(getHeight.bodyOffset() || getHeight.documentElementOffset(), getMaxElement('bottom', getAllElements()));
      },

      taggedElement: function getTaggedElementsHeight() {
        return getTaggedElements('bottom', 'data-iframe-height');
      }
    },
        getWidth = {
      bodyScroll: function getBodyScrollWidth() {
        return document.body.scrollWidth;
      },

      bodyOffset: function getBodyOffsetWidth() {
        return document.body.offsetWidth;
      },

      custom: function getCustomWidth() {
        return customCalcMethods.width();
      },

      documentElementScroll: function getDEScrollWidth() {
        return document.documentElement.scrollWidth;
      },

      documentElementOffset: function getDEOffsetWidth() {
        return document.documentElement.offsetWidth;
      },

      scroll: function getMaxWidth() {
        return Math.max(getWidth.bodyScroll(), getWidth.documentElementScroll());
      },

      max: function getMaxWidth() {
        return Math.max.apply(null, getAllMeasurements(getWidth));
      },

      min: function getMinWidth() {
        return Math.min.apply(null, getAllMeasurements(getWidth));
      },

      rightMostElement: function rightMostElement() {
        return getMaxElement('right', getAllElements());
      },

      taggedElement: function getTaggedElementsWidth() {
        return getTaggedElements('right', 'data-iframe-width');
      }
    };

    function sizeIFrame(triggerEvent, triggerEventDesc, customHeight, customWidth) {

      function resizeIFrame() {
        height = currentHeight;
        width = currentWidth;

        sendMsg(height, width, triggerEvent);
      }

      function isSizeChangeDetected() {
        function checkTolarance(a, b) {
          var retVal = Math.abs(a - b) <= tolerance;
          return !retVal;
        }

        currentHeight = undefined !== customHeight ? customHeight : getHeight[heightCalcMode]();
        currentWidth = undefined !== customWidth ? customWidth : getWidth[widthCalcMode]();

        return checkTolarance(height, currentHeight) || calculateWidth && checkTolarance(width, currentWidth);
      }

      function isForceResizableEvent() {
        return !(triggerEvent in { 'init': 1, 'interval': 1, 'size': 1 });
      }

      function isForceResizableCalcMode() {
        return heightCalcMode in resetRequiredMethods || calculateWidth && widthCalcMode in resetRequiredMethods;
      }

      function logIgnored() {
        log('No change in size detected');
      }

      function checkDownSizing() {
        if (isForceResizableEvent() && isForceResizableCalcMode()) {
          resetIFrame(triggerEventDesc);
        } else if (!(triggerEvent in { 'interval': 1 })) {
          logIgnored();
        }
      }

      var currentHeight, currentWidth;

      if (isSizeChangeDetected() || 'init' === triggerEvent) {
        lockTrigger();
        resizeIFrame();
      } else {
        checkDownSizing();
      }
    }

    var sizeIFrameThrottled = throttle(sizeIFrame);

    function sendSize(triggerEvent, triggerEventDesc, customHeight, customWidth) {
      function recordTrigger() {
        if (!(triggerEvent in { 'reset': 1, 'resetPage': 1, 'init': 1 })) {
          log('Trigger event: ' + triggerEventDesc);
        }
      }

      function isDoubleFiredEvent() {
        return triggerLocked && triggerEvent in doubleEventList;
      }

      if (!isDoubleFiredEvent()) {
        recordTrigger();
        if (triggerEvent === 'init') {
          sizeIFrame(triggerEvent, triggerEventDesc, customHeight, customWidth);
        } else {
          sizeIFrameThrottled(triggerEvent, triggerEventDesc, customHeight, customWidth);
        }
      } else {
        log('Trigger event cancelled: ' + triggerEvent);
      }
    }

    function lockTrigger() {
      if (!triggerLocked) {
        triggerLocked = true;
        log('Trigger event lock on');
      }
      clearTimeout(triggerLockedTimer);
      triggerLockedTimer = setTimeout(function () {
        triggerLocked = false;
        log('Trigger event lock off');
        log('--');
      }, eventCancelTimer);
    }

    function triggerReset(triggerEvent) {
      height = getHeight[heightCalcMode]();
      width = getWidth[widthCalcMode]();

      sendMsg(height, width, triggerEvent);
    }

    function resetIFrame(triggerEventDesc) {
      var hcm = heightCalcMode;
      heightCalcMode = heightCalcModeDefault;

      log('Reset trigger event: ' + triggerEventDesc);
      lockTrigger();
      triggerReset('reset');

      heightCalcMode = hcm;
    }

    function sendMsg(height, width, triggerEvent, msg, targetOrigin) {
      function setTargetOrigin() {
        if (undefined === targetOrigin) {
          targetOrigin = targetOriginDefault;
        } else {
          log('Message targetOrigin: ' + targetOrigin);
        }
      }

      function sendToParent() {
        var size = height + ':' + width,
            message = myID + ':' + size + ':' + triggerEvent + (undefined !== msg ? ':' + msg : '');

        log('Sending message to host page (' + message + ')');
        target.postMessage(msgID + message, targetOrigin);
      }

      if (true === sendPermit) {
        setTargetOrigin();
        sendToParent();
      }
    }

    function receiver(event) {
      var processRequestFromParent = {
        init: function initFromParent() {
          initMsg = event.data;
          target = event.source;

          init();
          firstRun = false;
          setTimeout(function () {
            initLock = false;
          }, eventCancelTimer);
        },

        reset: function resetFromParent() {
          if (!initLock) {
            log('Page size reset by host page');
            triggerReset('resetPage');
          } else {
            log('Page reset ignored by init');
          }
        },

        resize: function resizeFromParent() {
          sendSize('resizeParent', 'Parent window requested size check');
        },

        moveToAnchor: function moveToAnchorF() {
          inPageLinks.findTarget(getData());
        },
        inPageLink: function inPageLinkF() {
          this.moveToAnchor();
        }, //Backward compatability

        pageInfo: function pageInfoFromParent() {
          var msgBody = getData();
          log('PageInfoFromParent called from parent: ' + msgBody);
          pageInfoCallback(JSON.parse(msgBody));
          log(' --');
        },

        message: function messageFromParent() {
          var msgBody = getData();

          log('MessageCallback called from parent: ' + msgBody);
          messageCallback(JSON.parse(msgBody));
          log(' --');
        }
      };

      function isMessageForUs() {
        return msgID === ('' + event.data).substr(0, msgIdLen); //''+ Protects against non-string messages
      }

      function getMessageType() {
        return event.data.split(']')[1].split(':')[0];
      }

      function getData() {
        return event.data.substr(event.data.indexOf(':') + 1);
      }

      function isMiddleTier() {
        return !(typeof module !== 'undefined' && module.exports) && 'iFrameResize' in window || 'jQuery' in window && 'iFrameResize' in window.jQuery.prototype;
      }

      function isInitMsg() {
        //Test if this message is from a child below us. This is an ugly test, however, updating
        //the message format would break backwards compatibity.
        return event.data.split(':')[2] in { 'true': 1, 'false': 1 };
      }

      function callFromParent() {
        var messageType = getMessageType();

        if (messageType in processRequestFromParent) {
          processRequestFromParent[messageType]();
        } else if (!isMiddleTier() && !isInitMsg()) {
          warn('Unexpected message (' + event.data + ')');
        }
      }

      function processMessage() {
        if (false === firstRun) {
          callFromParent();
        } else if (isInitMsg()) {
          processRequestFromParent.init();
        } else {
          log('Ignored message of type "' + getMessageType() + '". Received before initialization.');
        }
      }

      if (isMessageForUs()) {
        processMessage();
      }
    }

    //Normally the parent kicks things off when it detects the iFrame has loaded.
    //If this script is async-loaded, then tell parent page to retry init.
    function chkLateLoaded() {
      if ('loading' !== document.readyState) {
        window.parent.postMessage('[iFrameResizerChild]Ready', '*');
      }
    }

    addEventListener(window, 'message', receiver);
    addEventListener(window, 'readystatechange', chkLateLoaded);
    chkLateLoaded();
  })();
});
System.registerDynamic('npm:iframe-resizer@3.6.2/js/index.js', ['./iframeResizer', './iframeResizer.contentWindow'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  exports.iframeResizer = $__require('./iframeResizer');
  exports.iframeResizerContentWindow = $__require('./iframeResizer.contentWindow');
});
System.registerDynamic("npm:iframe-resizer@3.6.2.json", [], true, function() {
  return {
    "main": "index.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      },
      "spec/_initSpec.js": {
        "format": "amd"
      },
      "spec/anchorSpec.js": {
        "format": "amd"
      },
      "spec/childSpec.js": {
        "format": "amd"
      },
      "spec/closeSpecSpec.js": {
        "format": "amd"
      },
      "spec/getPageInfoSpec.js": {
        "format": "amd"
      },
      "spec/initCssSpec.js": {
        "format": "amd"
      },
      "spec/initDomSpec.js": {
        "format": "amd"
      },
      "spec/initDoubleCallSpec.js": {
        "format": "amd"
      },
      "spec/initErrorSpec.js": {
        "format": "amd"
      },
      "spec/initJQuerySpec.js": {
        "format": "amd"
      },
      "spec/initUndefinedDomSpec.js": {
        "format": "amd"
      },
      "spec/parentSpec.js": {
        "format": "amd"
      },
      "spec/scrollSpec.js": {
        "format": "amd"
      },
      "spec/sendMessageSpec.js": {
        "format": "amd"
      },
      "src/iframeResizer.contentWindow.js": {
        "format": "amd"
      }
    },
    "map": {
      "./js": "./js/index.js"
    }
  };
});

System.registerDynamic('npm:iframe-resizer@3.6.2/index.js', ['./js'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  module.exports = $__require('./js');
});
System.registerDynamic("theatlantic/templates/hippo/components/accounts-modal.html", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;

  var precompiled = global.nunjucksPrecompiled = global.nunjucksPrecompiled || {};
  var template = function () {
    function root(env, context, frame, runtime, cb) {
      var lineno = null;
      var colno = null;
      var output = "";
      try {
        var parentTemplate = null;
        output += "<div class=\"c-accounts-modal__wrapper\">\n  <div class=\"c-accounts-modal__content\">\n    <iframe src=\"";
        output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "accounts_url"), env.opts.autoescape);
        output += "/login/modal/\" id=\"accounts-modal\" class=\"c-accounts-modal__iframe\">\n    </iframe>\n  </div>\n</div>\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root: root
    };
  }();
  precompiled["hippo/components/accounts-modal.html"] = template;
  module.exports = template;
});
System.register('theatlantic/js/components/authentication.js', ['npm:systemjs-plugin-babel@0.0.25/regenerator-runtime.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/asyncToGenerator.js', 'iframe-resizer', 'hippo/components/accounts-modal', '../utils/nunjucks'], function (_export, _context2) {
  "use strict";

  var _regeneratorRuntime, _asyncToGenerator, iFrameResizer, render, _this, messageCallback, openModal, closeModal;

  return {
    setters: [function (_npmSystemjsPluginBabel0025RegeneratorRuntimeJs) {
      _regeneratorRuntime = _npmSystemjsPluginBabel0025RegeneratorRuntimeJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersAsyncToGeneratorJs) {
      _asyncToGenerator = _npmSystemjsPluginBabel0025BabelHelpersAsyncToGeneratorJs.default;
    }, function (_iframeResizer) {
      iFrameResizer = _iframeResizer.default;
    }, function (_hippoComponentsAccountsModal) {}, function (_utilsNunjucks) {
      render = _utilsNunjucks.render;
    }],
    execute: function () {
      _this = this;

      messageCallback = function messageCallback(_ref) {
        var message = _ref.message;

        switch (message.type) {
          case 'SUCCESS':
            location.reload();
            break;

          case 'CLOSE':
            closeModal();
            break;
        }
      };

      openModal = function () {
        var _ref2 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
          var modalElem;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  modalElem = document.createElement('div');

                  modalElem.className = 'c-accounts-modal';
                  _context.next = 4;
                  return render('accounts-modal');

                case 4:
                  modalElem.innerHTML = _context.sent;

                  document.body.append(modalElem);
                  iFrameResizer.iframeResizer({
                    log: false,
                    scrolling: 'omit',
                    messageCallback: messageCallback
                  }, '#accounts-modal');

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }));

        return function openModal() {
          return _ref2.apply(this, arguments);
        };
      }();

      closeModal = function closeModal() {
        var modalElem = document.querySelector('.c-accounts-modal');
        modalElem.remove();
      };

      document.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('js-accounts-modal')) {
          e.preventDefault();
          openModal();
        }
      });
    }
  };
});
System.register("npm:systemjs-plugin-babel@0.0.25/babel-helpers/toConsumableArray.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }return arr2;
        } else {
          return Array.from(arr);
        }
      });
    }
  };
});
System.register('theatlantic/js/lacroix/utils/sticky.js', [], function (_export, _context) {
  "use strict";

  var stickyElements;
  return {
    setters: [],
    execute: function () {
      _export('stickyElements', stickyElements = function stickyElements(stickyElement, stickyContainer, stickyClass) {
        var offsetTop = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var offsetBottom = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

        var startingPosition = stickyElement.getBoundingClientRect().top + window.pageYOffset - offsetTop;

        var handleSticky = function handleSticky() {
          var stoppingPosition = stickyContainer.getBoundingClientRect().bottom;

          if (window.pageYOffset > startingPosition && stoppingPosition >= offsetBottom) {
            stickyElement.classList.add(stickyClass);
          } else {
            stickyElement.classList.remove(stickyClass);
          }
        };

        window.addEventListener('scroll', handleSticky, { passive: true });
      });

      _export('stickyElements', stickyElements);
    }
  };
});
System.registerDynamic("npm:clipboard@2.0.4.json", [], true, function() {
  return {
    "main": "dist/clipboard.js",
    "format": "cjs",
    "meta": {
      "*": {
        "globals": {
          "process": "process"
        }
      },
      "*.json": {
        "format": "json"
      },
      "src/clipboard.js": {
        "format": "esm"
      },
      "test/*": {
        "format": "esm"
      }
    }
  };
});

System.registerDynamic('npm:clipboard@2.0.4/dist/clipboard.js', ['process'], true, function ($__require, exports, module) {
    var process = $__require('process');
    var global = this || self,
        GLOBAL = global;
    /*!
     * clipboard.js v2.0.4
     * https://zenorocha.github.io/clipboard.js
     * 
     * Licensed MIT © Zeno Rocha
     */
    (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();else if (typeof undefined === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["ClipboardJS"] = factory();else root["ClipboardJS"] = factory();
    })(exports, function () {
        return (/******/function (modules) {
                // webpackBootstrap
                /******/ // The module cache
                /******/var installedModules = {};
                /******/
                /******/ // The require function
                /******/function __webpack_require__(moduleId) {
                    /******/
                    /******/ // Check if module is in cache
                    /******/if (installedModules[moduleId]) {
                        /******/return installedModules[moduleId].exports;
                        /******/
                    }
                    /******/ // Create a new module (and put it into the cache)
                    /******/var module = installedModules[moduleId] = {
                        /******/i: moduleId,
                        /******/l: false,
                        /******/exports: {}
                        /******/ };
                    /******/
                    /******/ // Execute the module function
                    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                    /******/
                    /******/ // Flag the module as loaded
                    /******/module.l = true;
                    /******/
                    /******/ // Return the exports of the module
                    /******/return module.exports;
                    /******/
                }
                /******/
                /******/
                /******/ // expose the modules object (__webpack_modules__)
                /******/__webpack_require__.m = modules;
                /******/
                /******/ // expose the module cache
                /******/__webpack_require__.c = installedModules;
                /******/
                /******/ // define getter function for harmony exports
                /******/__webpack_require__.d = function (exports, name, getter) {
                    /******/if (!__webpack_require__.o(exports, name)) {
                        /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
                        /******/
                    }
                    /******/
                };
                /******/
                /******/ // define __esModule on exports
                /******/__webpack_require__.r = function (exports) {
                    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                        /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                        /******/
                    }
                    /******/Object.defineProperty(exports, '__esModule', { value: true });
                    /******/
                };
                /******/
                /******/ // create a fake namespace object
                /******/ // mode & 1: value is a module id, require it
                /******/ // mode & 2: merge all properties of value into the ns
                /******/ // mode & 4: return value when already ns object
                /******/ // mode & 8|1: behave like require
                /******/__webpack_require__.t = function (value, mode) {
                    /******/if (mode & 1) value = __webpack_require__(value);
                    /******/if (mode & 8) return value;
                    /******/if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
                    /******/var ns = Object.create(null);
                    /******/__webpack_require__.r(ns);
                    /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
                    /******/if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
                        return value[key];
                    }.bind(null, key));
                    /******/return ns;
                    /******/
                };
                /******/
                /******/ // getDefaultExport function for compatibility with non-harmony modules
                /******/__webpack_require__.n = function (module) {
                    /******/var getter = module && module.__esModule ?
                    /******/function getDefault() {
                        return module['default'];
                    } :
                    /******/function getModuleExports() {
                        return module;
                    };
                    /******/__webpack_require__.d(getter, 'a', getter);
                    /******/return getter;
                    /******/
                };
                /******/
                /******/ // Object.prototype.hasOwnProperty.call
                /******/__webpack_require__.o = function (object, property) {
                    return Object.prototype.hasOwnProperty.call(object, property);
                };
                /******/
                /******/ // __webpack_public_path__
                /******/__webpack_require__.p = "";
                /******/
                /******/
                /******/ // Load entry module and return exports
                /******/return __webpack_require__(__webpack_require__.s = 0);
                /******/
            }(
            /************************************************************************/
            /******/[
            /* 0 */
            /***/function (module, exports, __webpack_require__) {

                "use strict";

                var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                    return typeof obj;
                } : function (obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };

                var _createClass = function () {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }return function (Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                    };
                }();

                var _clipboardAction = __webpack_require__(1);

                var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

                var _tinyEmitter = __webpack_require__(3);

                var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

                var _goodListener = __webpack_require__(4);

                var _goodListener2 = _interopRequireDefault(_goodListener);

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj };
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                function _possibleConstructorReturn(self, call) {
                    if (!self) {
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
                }

                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) {
                        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
                    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
                }

                /**
                 * Base class which takes one or more elements, adds event listeners to them,
                 * and instantiates a new `ClipboardAction` on each click.
                 */
                var Clipboard = function (_Emitter) {
                    _inherits(Clipboard, _Emitter);

                    /**
                     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                     * @param {Object} options
                     */
                    function Clipboard(trigger, options) {
                        _classCallCheck(this, Clipboard);

                        var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

                        _this.resolveOptions(options);
                        _this.listenClick(trigger);
                        return _this;
                    }

                    /**
                     * Defines if attributes would be resolved using internal setter functions
                     * or custom functions that were passed in the constructor.
                     * @param {Object} options
                     */

                    _createClass(Clipboard, [{
                        key: 'resolveOptions',
                        value: function resolveOptions() {
                            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                            this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                            this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                            this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                            this.container = _typeof(options.container) === 'object' ? options.container : document.body;
                        }

                        /**
                         * Adds a click event listener to the passed trigger.
                         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                         */

                    }, {
                        key: 'listenClick',
                        value: function listenClick(trigger) {
                            var _this2 = this;

                            this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
                                return _this2.onClick(e);
                            });
                        }

                        /**
                         * Defines a new `ClipboardAction` on each click event.
                         * @param {Event} e
                         */

                    }, {
                        key: 'onClick',
                        value: function onClick(e) {
                            var trigger = e.delegateTarget || e.currentTarget;

                            if (this.clipboardAction) {
                                this.clipboardAction = null;
                            }

                            this.clipboardAction = new _clipboardAction2.default({
                                action: this.action(trigger),
                                target: this.target(trigger),
                                text: this.text(trigger),
                                container: this.container,
                                trigger: trigger,
                                emitter: this
                            });
                        }

                        /**
                         * Default `action` lookup function.
                         * @param {Element} trigger
                         */

                    }, {
                        key: 'defaultAction',
                        value: function defaultAction(trigger) {
                            return getAttributeValue('action', trigger);
                        }

                        /**
                         * Default `target` lookup function.
                         * @param {Element} trigger
                         */

                    }, {
                        key: 'defaultTarget',
                        value: function defaultTarget(trigger) {
                            var selector = getAttributeValue('target', trigger);

                            if (selector) {
                                return document.querySelector(selector);
                            }
                        }

                        /**
                         * Returns the support of the given action, or all actions if no action is
                         * given.
                         * @param {String} [action]
                         */

                    }, {
                        key: 'defaultText',

                        /**
                         * Default `text` lookup function.
                         * @param {Element} trigger
                         */
                        value: function defaultText(trigger) {
                            return getAttributeValue('text', trigger);
                        }

                        /**
                         * Destroy lifecycle.
                         */

                    }, {
                        key: 'destroy',
                        value: function destroy() {
                            this.listener.destroy();

                            if (this.clipboardAction) {
                                this.clipboardAction.destroy();
                                this.clipboardAction = null;
                            }
                        }
                    }], [{
                        key: 'isSupported',
                        value: function isSupported() {
                            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

                            var actions = typeof action === 'string' ? [action] : action;
                            var support = !!document.queryCommandSupported;

                            actions.forEach(function (action) {
                                support = support && !!document.queryCommandSupported(action);
                            });

                            return support;
                        }
                    }]);

                    return Clipboard;
                }(_tinyEmitter2.default);

                /**
                 * Helper function to retrieve attribute value.
                 * @param {String} suffix
                 * @param {Element} element
                 */

                function getAttributeValue(suffix, element) {
                    var attribute = 'data-clipboard-' + suffix;

                    if (!element.hasAttribute(attribute)) {
                        return;
                    }

                    return element.getAttribute(attribute);
                }

                module.exports = Clipboard;

                /***/
            },
            /* 1 */
            /***/function (module, exports, __webpack_require__) {

                "use strict";

                var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                    return typeof obj;
                } : function (obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };

                var _createClass = function () {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }return function (Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                    };
                }();

                var _select = __webpack_require__(2);

                var _select2 = _interopRequireDefault(_select);

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj };
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    }
                }

                /**
                 * Inner class which performs selection from either `text` or `target`
                 * properties and then executes copy or cut operations.
                 */
                var ClipboardAction = function () {
                    /**
                     * @param {Object} options
                     */
                    function ClipboardAction(options) {
                        _classCallCheck(this, ClipboardAction);

                        this.resolveOptions(options);
                        this.initSelection();
                    }

                    /**
                     * Defines base properties passed from constructor.
                     * @param {Object} options
                     */

                    _createClass(ClipboardAction, [{
                        key: 'resolveOptions',
                        value: function resolveOptions() {
                            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                            this.action = options.action;
                            this.container = options.container;
                            this.emitter = options.emitter;
                            this.target = options.target;
                            this.text = options.text;
                            this.trigger = options.trigger;

                            this.selectedText = '';
                        }

                        /**
                         * Decides which selection strategy is going to be applied based
                         * on the existence of `text` and `target` properties.
                         */

                    }, {
                        key: 'initSelection',
                        value: function initSelection() {
                            if (this.text) {
                                this.selectFake();
                            } else if (this.target) {
                                this.selectTarget();
                            }
                        }

                        /**
                         * Creates a fake textarea element, sets its value from `text` property,
                         * and makes a selection on it.
                         */

                    }, {
                        key: 'selectFake',
                        value: function selectFake() {
                            var _this = this;

                            var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

                            this.removeFake();

                            this.fakeHandlerCallback = function () {
                                return _this.removeFake();
                            };
                            this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

                            this.fakeElem = document.createElement('textarea');
                            // Prevent zooming on iOS
                            this.fakeElem.style.fontSize = '12pt';
                            // Reset box model
                            this.fakeElem.style.border = '0';
                            this.fakeElem.style.padding = '0';
                            this.fakeElem.style.margin = '0';
                            // Move element out of screen horizontally
                            this.fakeElem.style.position = 'absolute';
                            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
                            // Move element to the same position vertically
                            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = yPosition + 'px';

                            this.fakeElem.setAttribute('readonly', '');
                            this.fakeElem.value = this.text;

                            this.container.appendChild(this.fakeElem);

                            this.selectedText = (0, _select2.default)(this.fakeElem);
                            this.copyText();
                        }

                        /**
                         * Only removes the fake element after another click event, that way
                         * a user can hit `Ctrl+C` to copy because selection still exists.
                         */

                    }, {
                        key: 'removeFake',
                        value: function removeFake() {
                            if (this.fakeHandler) {
                                this.container.removeEventListener('click', this.fakeHandlerCallback);
                                this.fakeHandler = null;
                                this.fakeHandlerCallback = null;
                            }

                            if (this.fakeElem) {
                                this.container.removeChild(this.fakeElem);
                                this.fakeElem = null;
                            }
                        }

                        /**
                         * Selects the content from element passed on `target` property.
                         */

                    }, {
                        key: 'selectTarget',
                        value: function selectTarget() {
                            this.selectedText = (0, _select2.default)(this.target);
                            this.copyText();
                        }

                        /**
                         * Executes the copy operation based on the current selection.
                         */

                    }, {
                        key: 'copyText',
                        value: function copyText() {
                            var succeeded = void 0;

                            try {
                                succeeded = document.execCommand(this.action);
                            } catch (err) {
                                succeeded = false;
                            }

                            this.handleResult(succeeded);
                        }

                        /**
                         * Fires an event based on the copy operation result.
                         * @param {Boolean} succeeded
                         */

                    }, {
                        key: 'handleResult',
                        value: function handleResult(succeeded) {
                            this.emitter.emit(succeeded ? 'success' : 'error', {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            });
                        }

                        /**
                         * Moves focus away from `target` and back to the trigger, removes current selection.
                         */

                    }, {
                        key: 'clearSelection',
                        value: function clearSelection() {
                            if (this.trigger) {
                                this.trigger.focus();
                            }

                            window.getSelection().removeAllRanges();
                        }

                        /**
                         * Sets the `action` to be performed which can be either 'copy' or 'cut'.
                         * @param {String} action
                         */

                    }, {
                        key: 'destroy',

                        /**
                         * Destroy lifecycle.
                         */
                        value: function destroy() {
                            this.removeFake();
                        }
                    }, {
                        key: 'action',
                        set: function set() {
                            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

                            this._action = action;

                            if (this._action !== 'copy' && this._action !== 'cut') {
                                throw new Error('Invalid "action" value, use either "copy" or "cut"');
                            }
                        }

                        /**
                         * Gets the `action` property.
                         * @return {String}
                         */

                        , get: function get() {
                            return this._action;
                        }

                        /**
                         * Sets the `target` property using an element
                         * that will be have its content copied.
                         * @param {Element} target
                         */

                    }, {
                        key: 'target',
                        set: function set(target) {
                            if (target !== undefined) {
                                if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                                    if (this.action === 'copy' && target.hasAttribute('disabled')) {
                                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    }

                                    if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    }

                                    this._target = target;
                                } else {
                                    throw new Error('Invalid "target" value, use a valid Element');
                                }
                            }
                        }

                        /**
                         * Gets the `target` property.
                         * @return {String|HTMLElement}
                         */

                        , get: function get() {
                            return this._target;
                        }
                    }]);

                    return ClipboardAction;
                }();

                module.exports = ClipboardAction;

                /***/
            },
            /* 2 */
            /***/function (module, exports) {

                function select(element) {
                    var selectedText;

                    if (element.nodeName === 'SELECT') {
                        element.focus();

                        selectedText = element.value;
                    } else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
                        var isReadOnly = element.hasAttribute('readonly');

                        if (!isReadOnly) {
                            element.setAttribute('readonly', '');
                        }

                        element.select();
                        element.setSelectionRange(0, element.value.length);

                        if (!isReadOnly) {
                            element.removeAttribute('readonly');
                        }

                        selectedText = element.value;
                    } else {
                        if (element.hasAttribute('contenteditable')) {
                            element.focus();
                        }

                        var selection = window.getSelection();
                        var range = document.createRange();

                        range.selectNodeContents(element);
                        selection.removeAllRanges();
                        selection.addRange(range);

                        selectedText = selection.toString();
                    }

                    return selectedText;
                }

                module.exports = select;

                /***/
            },
            /* 3 */
            /***/function (module, exports) {

                function E() {
                    // Keep this empty so it's easier to inherit from
                    // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
                }

                E.prototype = {
                    on: function (name, callback, ctx) {
                        var e = this.e || (this.e = {});

                        (e[name] || (e[name] = [])).push({
                            fn: callback,
                            ctx: ctx
                        });

                        return this;
                    },

                    once: function (name, callback, ctx) {
                        var self = this;
                        function listener() {
                            self.off(name, listener);
                            callback.apply(ctx, arguments);
                        };

                        listener._ = callback;
                        return this.on(name, listener, ctx);
                    },

                    emit: function (name) {
                        var data = [].slice.call(arguments, 1);
                        var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
                        var i = 0;
                        var len = evtArr.length;

                        for (i; i < len; i++) {
                            evtArr[i].fn.apply(evtArr[i].ctx, data);
                        }

                        return this;
                    },

                    off: function (name, callback) {
                        var e = this.e || (this.e = {});
                        var evts = e[name];
                        var liveEvents = [];

                        if (evts && callback) {
                            for (var i = 0, len = evts.length; i < len; i++) {
                                if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
                            }
                        }

                        // Remove event from queue to prevent memory leak
                        // Suggested by https://github.com/lazd
                        // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

                        liveEvents.length ? e[name] = liveEvents : delete e[name];

                        return this;
                    }
                };

                module.exports = E;

                /***/
            },
            /* 4 */
            /***/function (module, exports, __webpack_require__) {

                var is = __webpack_require__(5);
                var delegate = __webpack_require__(6);

                /**
                 * Validates all params and calls the right
                 * listener function based on its target type.
                 *
                 * @param {String|HTMLElement|HTMLCollection|NodeList} target
                 * @param {String} type
                 * @param {Function} callback
                 * @return {Object}
                 */
                function listen(target, type, callback) {
                    if (!target && !type && !callback) {
                        throw new Error('Missing required arguments');
                    }

                    if (!is.string(type)) {
                        throw new TypeError('Second argument must be a String');
                    }

                    if (!is.fn(callback)) {
                        throw new TypeError('Third argument must be a Function');
                    }

                    if (is.node(target)) {
                        return listenNode(target, type, callback);
                    } else if (is.nodeList(target)) {
                        return listenNodeList(target, type, callback);
                    } else if (is.string(target)) {
                        return listenSelector(target, type, callback);
                    } else {
                        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
                    }
                }

                /**
                 * Adds an event listener to a HTML element
                 * and returns a remove listener function.
                 *
                 * @param {HTMLElement} node
                 * @param {String} type
                 * @param {Function} callback
                 * @return {Object}
                 */
                function listenNode(node, type, callback) {
                    node.addEventListener(type, callback);

                    return {
                        destroy: function () {
                            node.removeEventListener(type, callback);
                        }
                    };
                }

                /**
                 * Add an event listener to a list of HTML elements
                 * and returns a remove listener function.
                 *
                 * @param {NodeList|HTMLCollection} nodeList
                 * @param {String} type
                 * @param {Function} callback
                 * @return {Object}
                 */
                function listenNodeList(nodeList, type, callback) {
                    Array.prototype.forEach.call(nodeList, function (node) {
                        node.addEventListener(type, callback);
                    });

                    return {
                        destroy: function () {
                            Array.prototype.forEach.call(nodeList, function (node) {
                                node.removeEventListener(type, callback);
                            });
                        }
                    };
                }

                /**
                 * Add an event listener to a selector
                 * and returns a remove listener function.
                 *
                 * @param {String} selector
                 * @param {String} type
                 * @param {Function} callback
                 * @return {Object}
                 */
                function listenSelector(selector, type, callback) {
                    return delegate(document.body, selector, type, callback);
                }

                module.exports = listen;

                /***/
            },
            /* 5 */
            /***/function (module, exports) {

                /**
                 * Check if argument is a HTML element.
                 *
                 * @param {Object} value
                 * @return {Boolean}
                 */
                exports.node = function (value) {
                    return value !== undefined && value instanceof HTMLElement && value.nodeType === 1;
                };

                /**
                 * Check if argument is a list of HTML elements.
                 *
                 * @param {Object} value
                 * @return {Boolean}
                 */
                exports.nodeList = function (value) {
                    var type = Object.prototype.toString.call(value);

                    return value !== undefined && (type === '[object NodeList]' || type === '[object HTMLCollection]') && 'length' in value && (value.length === 0 || exports.node(value[0]));
                };

                /**
                 * Check if argument is a string.
                 *
                 * @param {Object} value
                 * @return {Boolean}
                 */
                exports.string = function (value) {
                    return typeof value === 'string' || value instanceof String;
                };

                /**
                 * Check if argument is a function.
                 *
                 * @param {Object} value
                 * @return {Boolean}
                 */
                exports.fn = function (value) {
                    var type = Object.prototype.toString.call(value);

                    return type === '[object Function]';
                };

                /***/
            },
            /* 6 */
            /***/function (module, exports, __webpack_require__) {

                var closest = __webpack_require__(7);

                /**
                 * Delegates event to a selector.
                 *
                 * @param {Element} element
                 * @param {String} selector
                 * @param {String} type
                 * @param {Function} callback
                 * @param {Boolean} useCapture
                 * @return {Object}
                 */
                function _delegate(element, selector, type, callback, useCapture) {
                    var listenerFn = listener.apply(this, arguments);

                    element.addEventListener(type, listenerFn, useCapture);

                    return {
                        destroy: function () {
                            element.removeEventListener(type, listenerFn, useCapture);
                        }
                    };
                }

                /**
                 * Delegates event to a selector.
                 *
                 * @param {Element|String|Array} [elements]
                 * @param {String} selector
                 * @param {String} type
                 * @param {Function} callback
                 * @param {Boolean} useCapture
                 * @return {Object}
                 */
                function delegate(elements, selector, type, callback, useCapture) {
                    // Handle the regular Element usage
                    if (typeof elements.addEventListener === 'function') {
                        return _delegate.apply(null, arguments);
                    }

                    // Handle Element-less usage, it defaults to global delegation
                    if (typeof type === 'function') {
                        // Use `document` as the first parameter, then apply arguments
                        // This is a short way to .unshift `arguments` without running into deoptimizations
                        return _delegate.bind(null, document).apply(null, arguments);
                    }

                    // Handle Selector-based usage
                    if (typeof elements === 'string') {
                        elements = document.querySelectorAll(elements);
                    }

                    // Handle Array-like based usage
                    return Array.prototype.map.call(elements, function (element) {
                        return _delegate(element, selector, type, callback, useCapture);
                    });
                }

                /**
                 * Finds closest match and invokes callback.
                 *
                 * @param {Element} element
                 * @param {String} selector
                 * @param {String} type
                 * @param {Function} callback
                 * @return {Function}
                 */
                function listener(element, selector, type, callback) {
                    return function (e) {
                        e.delegateTarget = closest(e.target, selector);

                        if (e.delegateTarget) {
                            callback.call(element, e);
                        }
                    };
                }

                module.exports = delegate;

                /***/
            },
            /* 7 */
            /***/function (module, exports) {

                var DOCUMENT_NODE_TYPE = 9;

                /**
                 * A polyfill for Element.matches()
                 */
                if (typeof Element !== 'undefined' && !Element.prototype.matches) {
                    var proto = Element.prototype;

                    proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
                }

                /**
                 * Finds the closest parent that matches a selector.
                 *
                 * @param {Element} element
                 * @param {String} selector
                 * @return {Function}
                 */
                function closest(element, selector) {
                    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
                        if (typeof element.matches === 'function' && element.matches(selector)) {
                            return element;
                        }
                        element = element.parentNode;
                    }
                }

                module.exports = closest;

                /***/
            }]
            /******/)
        );
    });
});
System.register('theatlantic/js/lacroix/utils/copy-link.js', ['clipboard'], function (_export, _context) {
  "use strict";

  var ClipboardJS, copyLink;
  return {
    setters: [function (_clipboard) {
      ClipboardJS = _clipboard.default;
    }],
    execute: function () {
      _export('copyLink', copyLink = function copyLink(instantiationClass, successContainer, successClass) {
        var copyButton = document.querySelector(instantiationClass);

        new ClipboardJS(instantiationClass);

        var handleClick = function handleClick() {
          successContainer.classList.add(successClass);
          window.setTimeout(function () {
            successContainer.classList.remove(successClass);
          }, 1500);
        };
        copyButton.addEventListener('click', handleClick);
      });

      _export('copyLink', copyLink);
    }
  };
});
System.register('theatlantic/js/lacroix/components/share-social.js', ['npm:systemjs-plugin-babel@0.0.25/babel-helpers/toConsumableArray.js', '../utils/sticky', '../utils/copy-link'], function (_export, _context) {
  "use strict";

  var _toConsumableArray, stickyElements, copyLink, shareKit, articleContainer, copyLinkContainer, buttonArray, nav, offsetTop, offsetBottom;

  /**
   * Opens fb/email share window in a modal
   *
   * @param  {Object} event The `event` object
   * @return {void}
   */
  function handlePopup(event) {
    event.preventDefault();

    var button = event.currentTarget;
    var _button$dataset = button.dataset,
        _button$dataset$heigh = _button$dataset.height,
        height = _button$dataset$heigh === undefined ? 600 : _button$dataset$heigh,
        _button$dataset$width = _button$dataset.width,
        width = _button$dataset$width === undefined ? 400 : _button$dataset$width;

    var top = window.innerHeight / 2 - height / 2;
    var left = window.innerWidth / 2 - width / 2;

    window.open(button.href, 'shareWindow', 'height=' + height + ', width=' + width + ', top=' + top + ', left=' + left + ', resizeable=1');
  }
  return {
    setters: [function (_npmSystemjsPluginBabel0025BabelHelpersToConsumableArrayJs) {
      _toConsumableArray = _npmSystemjsPluginBabel0025BabelHelpersToConsumableArrayJs.default;
    }, function (_utilsSticky) {
      stickyElements = _utilsSticky.stickyElements;
    }, function (_utilsCopyLink) {
      copyLink = _utilsCopyLink.copyLink;
    }],
    execute: function () {
      shareKit = document.getElementsByClassName('js-share-social-sticky')[0];


      if (shareKit) {
        articleContainer = document.querySelector('.js-article-container');
        copyLinkContainer = shareKit.querySelector('.js-copy-link-container');
        buttonArray = [].concat(_toConsumableArray(shareKit.querySelectorAll('.js-share-social__link')));
        nav = document.querySelector('.js-navigation');
        offsetTop = window.innerHeight / 2 - nav.getBoundingClientRect().height;
        offsetBottom = window.innerHeight / 2 + shareKit.getBoundingClientRect().height;


        stickyElements(shareKit, articleContainer, 'c-share-social--sticky', offsetTop, offsetBottom);

        copyLink('.js-copy-link-btn', copyLinkContainer, 'c-share-social--success');

        buttonArray.map(function (button) {
          return button.addEventListener('click', handlePopup);
        });
      }
    }
  };
});
System.register('theatlantic/js/utils/sticky-support.js', [], function (_export, _context) {
  "use strict";

  /**
   * Determines if a browser supports position: sticky
   */

  function positionStickySupport() {
    var el = document.createElement('div'),
        mStyle = el.style;
    mStyle.cssText = 'position:sticky;position:-webkit-sticky;position:-ms-sticky;';
    return mStyle.position.indexOf('sticky') !== -1;
  }

  _export('positionStickySupport', positionStickySupport);

  return {
    setters: [],
    execute: function () {}
  };
});
System.register("npm:systemjs-plugin-babel@0.0.25/regenerator-runtime.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (module) {
        /**
         * Copyright (c) 2014, Facebook, Inc.
         * All rights reserved.
         *
         * This source code is licensed under the BSD-style license found in the
         * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
         * additional grant of patent rights can be found in the PATENTS file in
         * the same directory.
         */

        !function (global) {
          "use strict";

          var Op = Object.prototype;
          var hasOwn = Op.hasOwnProperty;
          var undefined; // More compressible than void 0.
          var $Symbol = typeof Symbol === "function" ? Symbol : {};
          var iteratorSymbol = $Symbol.iterator || "@@iterator";
          var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

          var inModule = typeof module === "object";
          var runtime = global.regeneratorRuntime;
          if (runtime) {
            if (inModule) {
              // If regeneratorRuntime is defined globally and we're in a module,
              // make the exports object identical to regeneratorRuntime.
              module.exports = runtime;
            }
            // Don't bother evaluating the rest of this file if the runtime was
            // already defined globally.
            return;
          }

          // Define the runtime globally (as expected by generated code) as either
          // module.exports (if we're in a module) or a new, empty object.
          runtime = global.regeneratorRuntime = inModule ? module.exports : {};

          function wrap(innerFn, outerFn, self, tryLocsList) {
            // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []);

            // The ._invoke method unifies the implementations of the .next,
            // .throw, and .return methods.
            generator._invoke = makeInvokeMethod(innerFn, self, context);

            return generator;
          }
          runtime.wrap = wrap;

          // Try/catch helper to minimize deoptimizations. Returns a completion
          // record like context.tryEntries[i].completion. This interface could
          // have been (and was previously) designed to take a closure to be
          // invoked without arguments, but in all the cases we care about we
          // already have an existing method we want to call, so there's no need
          // to create a new function object. We can even get away with assuming
          // the method takes exactly one argument, since that happens to be true
          // in every case, so we don't have to touch the arguments object. The
          // only additional allocation required is the completion record, which
          // has a stable shape and so hopefully should be cheap to allocate.
          function tryCatch(fn, obj, arg) {
            try {
              return { type: "normal", arg: fn.call(obj, arg) };
            } catch (err) {
              return { type: "throw", arg: err };
            }
          }

          var GenStateSuspendedStart = "suspendedStart";
          var GenStateSuspendedYield = "suspendedYield";
          var GenStateExecuting = "executing";
          var GenStateCompleted = "completed";

          // Returning this object from the innerFn has the same effect as
          // breaking out of the dispatch switch statement.
          var ContinueSentinel = {};

          // Dummy constructor functions that we use as the .constructor and
          // .constructor.prototype properties for functions that return Generator
          // objects. For full spec compliance, you may wish to configure your
          // minifier not to mangle the names of these two functions.
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}

          // This is a polyfill for %IteratorPrototype% for environments that
          // don't natively support it.
          var IteratorPrototype = {};
          IteratorPrototype[iteratorSymbol] = function () {
            return this;
          };

          var getProto = Object.getPrototypeOf;
          var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
          if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
            // This environment has a native %IteratorPrototype%; use it instead
            // of the polyfill.
            IteratorPrototype = NativeIteratorPrototype;
          }

          var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
          GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
          GeneratorFunctionPrototype.constructor = GeneratorFunction;
          GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

          // Helper for defining the .next, .throw, and .return methods of the
          // Iterator interface in terms of a single ._invoke method.
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
              prototype[method] = function (arg) {
                return this._invoke(method, arg);
              };
            });
          }

          runtime.isGeneratorFunction = function (genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor ? ctor === GeneratorFunction ||
            // For the native GeneratorFunction constructor, the best we can
            // do is to check its .name property.
            (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
          };

          runtime.mark = function (genFun) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
              genFun.__proto__ = GeneratorFunctionPrototype;
              if (!(toStringTagSymbol in genFun)) {
                genFun[toStringTagSymbol] = "GeneratorFunction";
              }
            }
            genFun.prototype = Object.create(Gp);
            return genFun;
          };

          // Within the body of any async function, `await x` is transformed to
          // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
          // `hasOwn.call(value, "__await")` to determine if the yielded value is
          // meant to be awaited.
          runtime.awrap = function (arg) {
            return { __await: arg };
          };

          function AsyncIterator(generator) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if (record.type === "throw") {
                reject(record.arg);
              } else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
                  return Promise.resolve(value.__await).then(function (value) {
                    invoke("next", value, resolve, reject);
                  }, function (err) {
                    invoke("throw", err, resolve, reject);
                  });
                }

                return Promise.resolve(value).then(function (unwrapped) {
                  // When a yielded Promise is resolved, its final value becomes
                  // the .value of the Promise<{value,done}> result for the
                  // current iteration. If the Promise is rejected, however, the
                  // result for this iteration will be rejected with the same
                  // reason. Note that rejections of yielded Promises are not
                  // thrown back into the generator function, as is the case
                  // when an awaited Promise is rejected. This difference in
                  // behavior between yield and await is important, because it
                  // allows the consumer to decide what to do with the yielded
                  // rejection (swallow it and continue, manually .throw it back
                  // into the generator, abandon iteration, whatever). With
                  // await, by contrast, there is no opportunity to examine the
                  // rejection reason outside the generator function, so the
                  // only option is to throw it from the await expression, and
                  // let the generator function handle the exception.
                  result.value = unwrapped;
                  resolve(result);
                }, reject);
              }
            }

            if (typeof process === "object" && process.domain) {
              invoke = process.domain.bind(invoke);
            }

            var previousPromise;

            function enqueue(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new Promise(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }

              return previousPromise =
              // If enqueue has been called before, then we want to wait until
              // all previous Promises have been resolved before calling invoke,
              // so that results are always delivered in the correct order. If
              // enqueue has not been called before, then it is important to
              // call invoke immediately, without waiting on a callback to fire,
              // so that the async generator function has the opportunity to do
              // any necessary setup in a predictable way. This predictability
              // is why the Promise constructor synchronously invokes its
              // executor callback, and why async functions synchronously
              // execute code before the first await. Since we implement simple
              // async functions in terms of async generators, it is especially
              // important to get this right, even though it requires care.
              previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
              // Avoid propagating failures to Promises returned by later
              // invocations of the iterator.
              callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }

            // Define the unified helper method that is used to implement .next,
            // .throw, and .return (see defineIteratorMethods).
            this._invoke = enqueue;
          }

          defineIteratorMethods(AsyncIterator.prototype);
          runtime.AsyncIterator = AsyncIterator;

          // Note that simple async functions are implemented on top of
          // AsyncIterator objects; they just return a Promise for the value of
          // the final result produced by the iterator.
          runtime.async = function (innerFn, outerFn, self, tryLocsList) {
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

            return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
            : iter.next().then(function (result) {
              return result.done ? result.value : iter.next();
            });
          };

          function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;

            return function invoke(method, arg) {
              if (state === GenStateExecuting) {
                throw new Error("Generator is already running");
              }

              if (state === GenStateCompleted) {
                if (method === "throw") {
                  throw arg;
                }

                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
              }

              while (true) {
                var delegate = context.delegate;
                if (delegate) {
                  if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
                    // A return or throw (when the delegate iterator has no throw
                    // method) always terminates the yield* loop.
                    context.delegate = null;

                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    var returnMethod = delegate.iterator["return"];
                    if (returnMethod) {
                      var record = tryCatch(returnMethod, delegate.iterator, arg);
                      if (record.type === "throw") {
                        // If the return method threw an exception, let that
                        // exception prevail over the original return or throw.
                        method = "throw";
                        arg = record.arg;
                        continue;
                      }
                    }

                    if (method === "return") {
                      // Continue with the outer return, now that the delegate
                      // iterator has been terminated.
                      continue;
                    }
                  }

                  var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

                  if (record.type === "throw") {
                    context.delegate = null;

                    // Like returning generator.throw(uncaught), but without the
                    // overhead of an extra function call.
                    method = "throw";
                    arg = record.arg;
                    continue;
                  }

                  // Delegate generator ran and handled its own exceptions so
                  // regardless of what the method was, we continue as if it is
                  // "next" with an undefined arg.
                  method = "next";
                  arg = undefined;

                  var info = record.arg;
                  if (info.done) {
                    context[delegate.resultName] = info.value;
                    context.next = delegate.nextLoc;
                  } else {
                    state = GenStateSuspendedYield;
                    return info;
                  }

                  context.delegate = null;
                }

                if (method === "next") {
                  // Setting context._sent for legacy support of Babel's
                  // function.sent implementation.
                  context.sent = context._sent = arg;
                } else if (method === "throw") {
                  if (state === GenStateSuspendedStart) {
                    state = GenStateCompleted;
                    throw arg;
                  }

                  if (context.dispatchException(arg)) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    method = "next";
                    arg = undefined;
                  }
                } else if (method === "return") {
                  context.abrupt("return", arg);
                }

                state = GenStateExecuting;

                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                  // If an exception is thrown from innerFn, we leave state ===
                  // GenStateExecuting and loop back for another invocation.
                  state = context.done ? GenStateCompleted : GenStateSuspendedYield;

                  var info = {
                    value: record.arg,
                    done: context.done
                  };

                  if (record.arg === ContinueSentinel) {
                    if (context.delegate && method === "next") {
                      // Deliberately forget the last sent value so that we don't
                      // accidentally pass it on to the delegate.
                      arg = undefined;
                    }
                  } else {
                    return info;
                  }
                } else if (record.type === "throw") {
                  state = GenStateCompleted;
                  // Dispatch the exception by looping back around to the
                  // context.dispatchException(arg) call above.
                  method = "throw";
                  arg = record.arg;
                }
              }
            };
          }

          // Define Generator.prototype.{next,throw,return} in terms of the
          // unified ._invoke helper method.
          defineIteratorMethods(Gp);

          Gp[toStringTagSymbol] = "Generator";

          Gp.toString = function () {
            return "[object Generator]";
          };

          function pushTryEntry(locs) {
            var entry = { tryLoc: locs[0] };

            if (1 in locs) {
              entry.catchLoc = locs[1];
            }

            if (2 in locs) {
              entry.finallyLoc = locs[2];
              entry.afterLoc = locs[3];
            }

            this.tryEntries.push(entry);
          }

          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
          }

          function Context(tryLocsList) {
            // The root entry object (effectively a try statement without a catch
            // or a finally block) gives us a place to store values thrown from
            // locations where there is no enclosing try statement.
            this.tryEntries = [{ tryLoc: "root" }];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
          }

          runtime.keys = function (object) {
            var keys = [];
            for (var key in object) {
              keys.push(key);
            }
            keys.reverse();

            // Rather than returning an object with a next method, we keep
            // things simple and return the next function itself.
            return function next() {
              while (keys.length) {
                var key = keys.pop();
                if (key in object) {
                  next.value = key;
                  next.done = false;
                  return next;
                }
              }

              // To avoid creating an additional object, we just hang the .value
              // and .done properties off the next function object itself. This
              // also ensures that the minifier will not anonymize the function.
              next.done = true;
              return next;
            };
          };

          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) {
                return iteratorMethod.call(iterable);
              }

              if (typeof iterable.next === "function") {
                return iterable;
              }

              if (!isNaN(iterable.length)) {
                var i = -1,
                    next = function next() {
                  while (++i < iterable.length) {
                    if (hasOwn.call(iterable, i)) {
                      next.value = iterable[i];
                      next.done = false;
                      return next;
                    }
                  }

                  next.value = undefined;
                  next.done = true;

                  return next;
                };

                return next.next = next;
              }
            }

            // Return an iterator with no values.
            return { next: doneResult };
          }
          runtime.values = values;

          function doneResult() {
            return { value: undefined, done: true };
          }

          Context.prototype = {
            constructor: Context,

            reset: function reset(skipTempReset) {
              this.prev = 0;
              this.next = 0;
              // Resetting context._sent for legacy support of Babel's
              // function.sent implementation.
              this.sent = this._sent = undefined;
              this.done = false;
              this.delegate = null;

              this.tryEntries.forEach(resetTryEntry);

              if (!skipTempReset) {
                for (var name in this) {
                  // Not sure about the optimal order of these conditions:
                  if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                    this[name] = undefined;
                  }
                }
              }
            },

            stop: function stop() {
              this.done = true;

              var rootEntry = this.tryEntries[0];
              var rootRecord = rootEntry.completion;
              if (rootRecord.type === "throw") {
                throw rootRecord.arg;
              }

              return this.rval;
            },

            dispatchException: function dispatchException(exception) {
              if (this.done) {
                throw exception;
              }

              var context = this;
              function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                return !!caught;
              }

              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                var record = entry.completion;

                if (entry.tryLoc === "root") {
                  // Exception thrown outside of any try block that could handle
                  // it, so set the completion value of the entire function to
                  // throw the exception.
                  return handle("end");
                }

                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc");
                  var hasFinally = hasOwn.call(entry, "finallyLoc");

                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    } else if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    }
                  } else if (hasFinally) {
                    if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else {
                    throw new Error("try statement without catch or finally");
                  }
                }
              }
            },

            abrupt: function abrupt(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                  var finallyEntry = entry;
                  break;
                }
              }

              if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                // Ignore the finally entry if control is not jumping to a
                // location outside the try/catch block.
                finallyEntry = null;
              }

              var record = finallyEntry ? finallyEntry.completion : {};
              record.type = type;
              record.arg = arg;

              if (finallyEntry) {
                this.next = finallyEntry.finallyLoc;
              } else {
                this.complete(record);
              }

              return ContinueSentinel;
            },

            complete: function complete(record, afterLoc) {
              if (record.type === "throw") {
                throw record.arg;
              }

              if (record.type === "break" || record.type === "continue") {
                this.next = record.arg;
              } else if (record.type === "return") {
                this.rval = record.arg;
                this.next = "end";
              } else if (record.type === "normal" && afterLoc) {
                this.next = afterLoc;
              }
            },

            finish: function finish(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                  this.complete(entry.completion, entry.afterLoc);
                  resetTryEntry(entry);
                  return ContinueSentinel;
                }
              }
            },

            "catch": function _catch(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if (record.type === "throw") {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }

              // The context.catch method must only be called with a location
              // argument that corresponds to a known catch block.
              throw new Error("illegal catch attempt");
            },

            delegateYield: function delegateYield(iterable, resultName, nextLoc) {
              this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
              };

              return ContinueSentinel;
            }
          };
        }(
        // Among the various tricks for obtaining a reference to the global
        // object, this seems to be the most reliable technique that does not
        // use indirect eval (which violates Content Security Policy).
        typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : this);
        return module.exports;
      }({ exports: {} }));
    }
  };
});
System.registerDynamic("npm:systemjs-plugin-babel@0.0.25.json", [], true, function() {
  return {
    "main": "plugin-babel.js",
    "map": {
      "systemjs-babel-build": {
        "browser": "./systemjs-babel-browser.js",
        "default": "./systemjs-babel-browser.js"
      }
    },
    "meta": {
      "./plugin-babel.js": {
        "format": "cjs"
      }
    }
  };
});

System.register("npm:systemjs-plugin-babel@0.0.25/babel-helpers/asyncToGenerator.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", function (fn) {
        return function () {
          var gen = fn.apply(this, arguments);
          return new Promise(function (resolve, reject) {
            function step(key, arg) {
              try {
                var info = gen[key](arg);
                var value = info.value;
              } catch (error) {
                reject(error);
                return;
              }

              if (info.done) {
                resolve(value);
              } else {
                return Promise.resolve(value).then(function (value) {
                  step("next", value);
                }, function (err) {
                  step("throw", err);
                });
              }
            }

            return step("next");
          });
        };
      });
    }
  };
});
System.registerDynamic("theatlantic/templates/hippo/components/non-metered-nudge.html", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;

  var precompiled = global.nunjucksPrecompiled = global.nunjucksPrecompiled || {};
  var template = function () {
    function root(env, context, frame, runtime, cb) {
      var lineno = null;
      var colno = null;
      var output = "";
      try {
        var parentTemplate = null;
        output += "\n<div class=\"c-non-metered-nudge__container-container\">\n  <div class=\"c-non-metered-nudge__container\">\n    <a\n      href=\"https://accounts.theatlantic.com/products/?source=nonmetered_nudge\"\n      class=\"js-non-metered-nudge-link\"\n    >\n      <div class=\"c-non-metered-nudge__text-container\">\n        ";
        if (runtime.contextOrFrameLookup(context, frame, "coronaCoverage")) {
          output += "\n        <div>\n          <p class=\"c-non-metered-nudge__text c-non-metered-nudge__text--main\">\n            You’re reading The Atlantic’s free coronavirus coverage.\n          </p>\n          <p class=\"c-non-metered-nudge__text c-non-metered-nudge__text--main\">\n            To support this vital reporting, subscribe today.\n          </p>\n        </div>\n        ";
          ;
        } else {
          output += "\n        <p class=\"c-non-metered-nudge__text c-non-metered-nudge__text--main\">\n          Enjoy unlimited access to all of our journalism.\n        </p>\n        ";
          ;
        }
        output += "\n        <p class=\"c-non-metered-nudge__text c-non-metered-nudge__text--subscribe\">\n          ";
        if (runtime.contextOrFrameLookup(context, frame, "coronaCoverage")) {
          output += "See Plans";
          ;
        } else {
          output += "Subscribe Now";
          ;
        }
        output += "\n        </p>\n      </div>\n      <p class=\"c-non-metered-nudge__text c-non-metered-nudge__text--mobile\">\n        ";
        if (runtime.contextOrFrameLookup(context, frame, "coronaCoverage")) {
          output += " Subscribe to support our reporting ";
          ;
        } else {
          output += " Subscribe for\n        unlimited access ";
          ;
        }
        output += "\n      </p>\n    </a>\n  </div>\n  <button class=\"c-non-metered-nudge__close-icon-button js-non-metered-nudge-close\">\n    <svg class=\"c-non-metered-nudge__close-icon \"><use xlink:href=\"#icon-nav-close\"></use></svg>\n  </button>\n</div>\n";
        if (parentTemplate) {
          parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
        } else {
          cb(null, output);
        }
        ;
      } catch (e) {
        cb(runtime.handleError(e, lineno, colno));
      }
    }
    return {
      root: root
    };
  }();
  precompiled["hippo/components/non-metered-nudge.html"] = template;
  module.exports = template;
});
System.registerDynamic("npm:jspm-nodelibs-process@0.2.1.json", [], true, function() {
  return {
    "main": "./process.js"
  };
});

System.registerDynamic('npm:jspm-nodelibs-process@0.2.1/process.js', ['@system-env'], true, function ($__require, exports, module) {
    var global = this || self,
        GLOBAL = global;
    // From https://github.com/defunctzombie/node-process/blob/master/browser.js
    // shim for using process in browser

    var productionEnv = $__require('@system-env').production;

    var process = module.exports = {};
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = setTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        clearTimeout(timeout);
    }

    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            setTimeout(drainQueue, 0);
        }
    };

    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {
        NODE_ENV: productionEnv ? 'production' : 'development'
    };
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};

    function noop() {}

    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;

    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };

    process.cwd = function () {
        return '/';
    };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function () {
        return 0;
    };
});
System.registerDynamic("npm:nunjucks@3.1.7.json", [], true, function() {
  return {
    "main": "index.js",
    "map": {
      "chokidar": "@empty"
    },
    "format": "cjs",
    "meta": {
      "*": {
        "globals": {
          "process": "process"
        }
      },
      "*.json": {
        "format": "json"
      }
    }
  };
});

System.registerDynamic('npm:nunjucks@3.1.7/browser/nunjucks-slim.js', ['process'], true, function ($__require, exports, module) {
  var process = $__require('process');
  var global = this || self,
      GLOBAL = global;
  /*! Browser bundle of nunjucks 3.1.7 (slim, only works with precompiled templates) */
  (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();else if (typeof undefined === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["nunjucks"] = factory();else root["nunjucks"] = factory();
  })(typeof self !== 'undefined' ? self : exports, function () {
    return (/******/function (modules) {
        // webpackBootstrap
        /******/ // The module cache
        /******/var installedModules = {};
        /******/
        /******/ // The require function
        /******/function __webpack_require__(moduleId) {
          /******/
          /******/ // Check if module is in cache
          /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
          }
          /******/ // Create a new module (and put it into the cache)
          /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
          /******/
          /******/ // Execute the module function
          /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
          /******/
          /******/ // Flag the module as loaded
          /******/module.l = true;
          /******/
          /******/ // Return the exports of the module
          /******/return module.exports;
          /******/
        }
        /******/
        /******/
        /******/ // expose the modules object (__webpack_modules__)
        /******/__webpack_require__.m = modules;
        /******/
        /******/ // expose the module cache
        /******/__webpack_require__.c = installedModules;
        /******/
        /******/ // define getter function for harmony exports
        /******/__webpack_require__.d = function (exports, name, getter) {
          /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
              /******/configurable: false,
              /******/enumerable: true,
              /******/get: getter
              /******/ });
            /******/
          }
          /******/
        };
        /******/
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/__webpack_require__.n = function (module) {
          /******/var getter = module && module.__esModule ?
          /******/function getDefault() {
            return module['default'];
          } :
          /******/function getModuleExports() {
            return module;
          };
          /******/__webpack_require__.d(getter, 'a', getter);
          /******/return getter;
          /******/
        };
        /******/
        /******/ // Object.prototype.hasOwnProperty.call
        /******/__webpack_require__.o = function (object, property) {
          return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/
        /******/ // __webpack_public_path__
        /******/__webpack_require__.p = "";
        /******/
        /******/ // Load entry module and return exports
        /******/return __webpack_require__(__webpack_require__.s = 6);
        /******/
      }(
      /************************************************************************/
      /******/[
      /* 0 */
      /***/function (module, exports) {

        /***/},
      /* 1 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var ArrayProto = Array.prototype;
        var ObjProto = Object.prototype;
        var escapeMap = {
          '&': '&amp;',
          '"': '&quot;',
          '\'': '&#39;',
          '<': '&lt;',
          '>': '&gt;'
        };
        var escapeRegex = /[&"'<>]/g;
        var exports = module.exports = {};

        function hasOwnProp(obj, k) {
          return ObjProto.hasOwnProperty.call(obj, k);
        }

        exports.hasOwnProp = hasOwnProp;

        function lookupEscape(ch) {
          return escapeMap[ch];
        }

        function _prettifyError(path, withInternals, err) {
          if (!err.Update) {
            // not one of ours, cast it
            err = new exports.TemplateError(err);
          }

          err.Update(path); // Unless they marked the dev flag, show them a trace from here

          if (!withInternals) {
            var old = err;
            err = new Error(old.message);
            err.name = old.name;
          }

          return err;
        }

        exports._prettifyError = _prettifyError;

        function TemplateError(message, lineno, colno) {
          var err;
          var cause;

          if (message instanceof Error) {
            cause = message;
            message = cause.name + ": " + cause.message;
          }

          if (Object.setPrototypeOf) {
            err = new Error(message);
            Object.setPrototypeOf(err, TemplateError.prototype);
          } else {
            err = this;
            Object.defineProperty(err, 'message', {
              enumerable: false,
              writable: true,
              value: message
            });
          }

          Object.defineProperty(err, 'name', {
            value: 'Template render error'
          });

          if (Error.captureStackTrace) {
            Error.captureStackTrace(err, this.constructor);
          }

          var getStack;

          if (cause) {
            var stackDescriptor = Object.getOwnPropertyDescriptor(cause, 'stack');

            getStack = stackDescriptor && (stackDescriptor.get || function () {
              return stackDescriptor.value;
            });

            if (!getStack) {
              getStack = function getStack() {
                return cause.stack;
              };
            }
          } else {
            var stack = new Error(message).stack;

            getStack = function getStack() {
              return stack;
            };
          }

          Object.defineProperty(err, 'stack', {
            get: function get() {
              return getStack.call(err);
            }
          });
          Object.defineProperty(err, 'cause', {
            value: cause
          });
          err.lineno = lineno;
          err.colno = colno;
          err.firstUpdate = true;

          err.Update = function Update(path) {
            var msg = '(' + (path || 'unknown path') + ')'; // only show lineno + colno next to path of template
            // where error occurred

            if (this.firstUpdate) {
              if (this.lineno && this.colno) {
                msg += " [Line " + this.lineno + ", Column " + this.colno + "]";
              } else if (this.lineno) {
                msg += " [Line " + this.lineno + "]";
              }
            }

            msg += '\n ';

            if (this.firstUpdate) {
              msg += ' ';
            }

            this.message = msg + (this.message || '');
            this.firstUpdate = false;
            return this;
          };

          return err;
        }

        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(TemplateError.prototype, Error.prototype);
        } else {
          TemplateError.prototype = Object.create(Error.prototype, {
            constructor: {
              value: TemplateError
            }
          });
        }

        exports.TemplateError = TemplateError;

        function escape(val) {
          return val.replace(escapeRegex, lookupEscape);
        }

        exports.escape = escape;

        function isFunction(obj) {
          return ObjProto.toString.call(obj) === '[object Function]';
        }

        exports.isFunction = isFunction;

        function isArray(obj) {
          return ObjProto.toString.call(obj) === '[object Array]';
        }

        exports.isArray = isArray;

        function isString(obj) {
          return ObjProto.toString.call(obj) === '[object String]';
        }

        exports.isString = isString;

        function isObject(obj) {
          return ObjProto.toString.call(obj) === '[object Object]';
        }

        exports.isObject = isObject;

        function groupBy(obj, val) {
          var result = {};
          var iterator = isFunction(val) ? val : function (o) {
            return o[val];
          };

          for (var i = 0; i < obj.length; i++) {
            var value = obj[i];
            var key = iterator(value, i);
            (result[key] || (result[key] = [])).push(value);
          }

          return result;
        }

        exports.groupBy = groupBy;

        function toArray(obj) {
          return Array.prototype.slice.call(obj);
        }

        exports.toArray = toArray;

        function without(array) {
          var result = [];

          if (!array) {
            return result;
          }

          var length = array.length;
          var contains = toArray(arguments).slice(1);
          var index = -1;

          while (++index < length) {
            if (indexOf(contains, array[index]) === -1) {
              result.push(array[index]);
            }
          }

          return result;
        }

        exports.without = without;

        function repeat(char_, n) {
          var str = '';

          for (var i = 0; i < n; i++) {
            str += char_;
          }

          return str;
        }

        exports.repeat = repeat;

        function each(obj, func, context) {
          if (obj == null) {
            return;
          }

          if (ArrayProto.forEach && obj.forEach === ArrayProto.forEach) {
            obj.forEach(func, context);
          } else if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
              func.call(context, obj[i], i, obj);
            }
          }
        }

        exports.each = each;

        function map(obj, func) {
          var results = [];

          if (obj == null) {
            return results;
          }

          if (ArrayProto.map && obj.map === ArrayProto.map) {
            return obj.map(func);
          }

          for (var i = 0; i < obj.length; i++) {
            results[results.length] = func(obj[i], i);
          }

          if (obj.length === +obj.length) {
            results.length = obj.length;
          }

          return results;
        }

        exports.map = map;

        function asyncIter(arr, iter, cb) {
          var i = -1;

          function next() {
            i++;

            if (i < arr.length) {
              iter(arr[i], i, next, cb);
            } else {
              cb();
            }
          }

          next();
        }

        exports.asyncIter = asyncIter;

        function asyncFor(obj, iter, cb) {
          var keys = keys_(obj || {});
          var len = keys.length;
          var i = -1;

          function next() {
            i++;
            var k = keys[i];

            if (i < len) {
              iter(k, obj[k], i, len, next);
            } else {
              cb();
            }
          }

          next();
        }

        exports.asyncFor = asyncFor;

        function indexOf(arr, searchElement, fromIndex) {
          return Array.prototype.indexOf.call(arr || [], searchElement, fromIndex);
        }

        exports.indexOf = indexOf;

        function keys_(obj) {
          /* eslint-disable no-restricted-syntax */
          var arr = [];

          for (var k in obj) {
            if (hasOwnProp(obj, k)) {
              arr.push(k);
            }
          }

          return arr;
        }

        exports.keys = keys_;

        function _entries(obj) {
          return keys_(obj).map(function (k) {
            return [k, obj[k]];
          });
        }

        exports._entries = _entries;

        function _values(obj) {
          return keys_(obj).map(function (k) {
            return obj[k];
          });
        }

        exports._values = _values;

        function extend(obj1, obj2) {
          obj1 = obj1 || {};
          keys_(obj2).forEach(function (k) {
            obj1[k] = obj2[k];
          });
          return obj1;
        }

        exports._assign = exports.extend = extend;

        function inOperator(key, val) {
          if (isArray(val) || isString(val)) {
            return val.indexOf(key) !== -1;
          } else if (isObject(val)) {
            return key in val;
          }

          throw new Error('Cannot use "in" operator to search for "' + key + '" in unexpected types.');
        }

        exports.inOperator = inOperator;

        /***/
      },
      /* 2 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var lib = __webpack_require__(1);

        var arrayFrom = Array.from;
        var supportsIterators = typeof Symbol === 'function' && Symbol.iterator && typeof arrayFrom === 'function'; // Frames keep track of scoping both at compile-time and run-time so
        // we know how to access variables. Block tags can introduce special
        // variables, for example.

        var Frame =
        /*#__PURE__*/
        function () {
          function Frame(parent, isolateWrites) {
            this.variables = {};
            this.parent = parent;
            this.topLevel = false; // if this is true, writes (set) should never propagate upwards past
            // this frame to its parent (though reads may).

            this.isolateWrites = isolateWrites;
          }

          var _proto = Frame.prototype;

          _proto.set = function set(name, val, resolveUp) {
            // Allow variables with dots by automatically creating the
            // nested structure
            var parts = name.split('.');
            var obj = this.variables;
            var frame = this;

            if (resolveUp) {
              if (frame = this.resolve(parts[0], true)) {
                frame.set(name, val);
                return;
              }
            }

            for (var i = 0; i < parts.length - 1; i++) {
              var id = parts[i];

              if (!obj[id]) {
                obj[id] = {};
              }

              obj = obj[id];
            }

            obj[parts[parts.length - 1]] = val;
          };

          _proto.get = function get(name) {
            var val = this.variables[name];

            if (val !== undefined) {
              return val;
            }

            return null;
          };

          _proto.lookup = function lookup(name) {
            var p = this.parent;
            var val = this.variables[name];

            if (val !== undefined) {
              return val;
            }

            return p && p.lookup(name);
          };

          _proto.resolve = function resolve(name, forWrite) {
            var p = forWrite && this.isolateWrites ? undefined : this.parent;
            var val = this.variables[name];

            if (val !== undefined) {
              return this;
            }

            return p && p.resolve(name);
          };

          _proto.push = function push(isolateWrites) {
            return new Frame(this, isolateWrites);
          };

          _proto.pop = function pop() {
            return this.parent;
          };

          return Frame;
        }();

        function makeMacro(argNames, kwargNames, func) {
          var _this = this;

          return function () {
            for (var _len = arguments.length, macroArgs = new Array(_len), _key = 0; _key < _len; _key++) {
              macroArgs[_key] = arguments[_key];
            }

            var argCount = numArgs(macroArgs);
            var args;
            var kwargs = getKeywordArgs(macroArgs);

            if (argCount > argNames.length) {
              args = macroArgs.slice(0, argNames.length); // Positional arguments that should be passed in as
              // keyword arguments (essentially default values)

              macroArgs.slice(args.length, argCount).forEach(function (val, i) {
                if (i < kwargNames.length) {
                  kwargs[kwargNames[i]] = val;
                }
              });
              args.push(kwargs);
            } else if (argCount < argNames.length) {
              args = macroArgs.slice(0, argCount);

              for (var i = argCount; i < argNames.length; i++) {
                var arg = argNames[i]; // Keyword arguments that should be passed as
                // positional arguments, i.e. the caller explicitly
                // used the name of a positional arg

                args.push(kwargs[arg]);
                delete kwargs[arg];
              }

              args.push(kwargs);
            } else {
              args = macroArgs;
            }

            return func.apply(_this, args);
          };
        }

        function makeKeywordArgs(obj) {
          obj.__keywords = true;
          return obj;
        }

        function isKeywordArgs(obj) {
          return obj && Object.prototype.hasOwnProperty.call(obj, '__keywords');
        }

        function getKeywordArgs(args) {
          var len = args.length;

          if (len) {
            var lastArg = args[len - 1];

            if (isKeywordArgs(lastArg)) {
              return lastArg;
            }
          }

          return {};
        }

        function numArgs(args) {
          var len = args.length;

          if (len === 0) {
            return 0;
          }

          var lastArg = args[len - 1];

          if (isKeywordArgs(lastArg)) {
            return len - 1;
          } else {
            return len;
          }
        } // A SafeString object indicates that the string should not be
        // autoescaped. This happens magically because autoescaping only
        // occurs on primitive string objects.


        function SafeString(val) {
          if (typeof val !== 'string') {
            return val;
          }

          this.val = val;
          this.length = val.length;
        }

        SafeString.prototype = Object.create(String.prototype, {
          length: {
            writable: true,
            configurable: true,
            value: 0
          }
        });

        SafeString.prototype.valueOf = function valueOf() {
          return this.val;
        };

        SafeString.prototype.toString = function toString() {
          return this.val;
        };

        function copySafeness(dest, target) {
          if (dest instanceof SafeString) {
            return new SafeString(target);
          }

          return target.toString();
        }

        function markSafe(val) {
          var type = typeof val;

          if (type === 'string') {
            return new SafeString(val);
          } else if (type !== 'function') {
            return val;
          } else {
            return function wrapSafe(args) {
              var ret = val.apply(this, arguments);

              if (typeof ret === 'string') {
                return new SafeString(ret);
              }

              return ret;
            };
          }
        }

        function suppressValue(val, autoescape) {
          val = val !== undefined && val !== null ? val : '';

          if (autoescape && !(val instanceof SafeString)) {
            val = lib.escape(val.toString());
          }

          return val;
        }

        function ensureDefined(val, lineno, colno) {
          if (val === null || val === undefined) {
            throw new lib.TemplateError('attempted to output null or undefined value', lineno + 1, colno + 1);
          }

          return val;
        }

        function memberLookup(obj, val) {
          if (obj === undefined || obj === null) {
            return undefined;
          }

          if (typeof obj[val] === 'function') {
            return function () {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              return obj[val].apply(obj, args);
            };
          }

          return obj[val];
        }

        function callWrap(obj, name, context, args) {
          if (!obj) {
            throw new Error('Unable to call `' + name + '`, which is undefined or falsey');
          } else if (typeof obj !== 'function') {
            throw new Error('Unable to call `' + name + '`, which is not a function');
          }

          return obj.apply(context, args);
        }

        function contextOrFrameLookup(context, frame, name) {
          var val = frame.lookup(name);
          return val !== undefined ? val : context.lookup(name);
        }

        function handleError(error, lineno, colno) {
          if (error.lineno) {
            return error;
          } else {
            return new lib.TemplateError(error, lineno, colno);
          }
        }

        function asyncEach(arr, dimen, iter, cb) {
          if (lib.isArray(arr)) {
            var len = arr.length;
            lib.asyncIter(arr, function iterCallback(item, i, next) {
              switch (dimen) {
                case 1:
                  iter(item, i, len, next);
                  break;

                case 2:
                  iter(item[0], item[1], i, len, next);
                  break;

                case 3:
                  iter(item[0], item[1], item[2], i, len, next);
                  break;

                default:
                  item.push(i, len, next);
                  iter.apply(this, item);
              }
            }, cb);
          } else {
            lib.asyncFor(arr, function iterCallback(key, val, i, len, next) {
              iter(key, val, i, len, next);
            }, cb);
          }
        }

        function asyncAll(arr, dimen, func, cb) {
          var finished = 0;
          var len;
          var outputArr;

          function done(i, output) {
            finished++;
            outputArr[i] = output;

            if (finished === len) {
              cb(null, outputArr.join(''));
            }
          }

          if (lib.isArray(arr)) {
            len = arr.length;
            outputArr = new Array(len);

            if (len === 0) {
              cb(null, '');
            } else {
              for (var i = 0; i < arr.length; i++) {
                var item = arr[i];

                switch (dimen) {
                  case 1:
                    func(item, i, len, done);
                    break;

                  case 2:
                    func(item[0], item[1], i, len, done);
                    break;

                  case 3:
                    func(item[0], item[1], item[2], i, len, done);
                    break;

                  default:
                    item.push(i, len, done);
                    func.apply(this, item);
                }
              }
            }
          } else {
            var keys = lib.keys(arr || {});
            len = keys.length;
            outputArr = new Array(len);

            if (len === 0) {
              cb(null, '');
            } else {
              for (var _i = 0; _i < keys.length; _i++) {
                var k = keys[_i];
                func(k, arr[k], _i, len, done);
              }
            }
          }
        }

        function fromIterator(arr) {
          if (typeof arr !== 'object' || arr === null || lib.isArray(arr)) {
            return arr;
          } else if (supportsIterators && Symbol.iterator in arr) {
            return arrayFrom(arr);
          } else {
            return arr;
          }
        }

        module.exports = {
          Frame: Frame,
          makeMacro: makeMacro,
          makeKeywordArgs: makeKeywordArgs,
          numArgs: numArgs,
          suppressValue: suppressValue,
          ensureDefined: ensureDefined,
          memberLookup: memberLookup,
          contextOrFrameLookup: contextOrFrameLookup,
          callWrap: callWrap,
          handleError: handleError,
          isArray: lib.isArray,
          keys: lib.keys,
          SafeString: SafeString,
          copySafeness: copySafeness,
          markSafe: markSafe,
          asyncEach: asyncEach,
          asyncAll: asyncAll,
          inOperator: lib.inOperator,
          fromIterator: fromIterator
        };

        /***/
      },
      /* 3 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);subClass.prototype.constructor = subClass;subClass.__proto__ = superClass;
        }

        var Loader = __webpack_require__(4);

        var PrecompiledLoader =
        /*#__PURE__*/
        function (_Loader) {
          _inheritsLoose(PrecompiledLoader, _Loader);

          function PrecompiledLoader(compiledTemplates) {
            var _this;

            _this = _Loader.call(this) || this;
            _this.precompiled = compiledTemplates || {};
            return _this;
          }

          var _proto = PrecompiledLoader.prototype;

          _proto.getSource = function getSource(name) {
            if (this.precompiled[name]) {
              return {
                src: {
                  type: 'code',
                  obj: this.precompiled[name]
                },
                path: name
              };
            }

            return null;
          };

          return PrecompiledLoader;
        }(Loader);

        module.exports = {
          PrecompiledLoader: PrecompiledLoader
        };

        /***/
      },
      /* 4 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);subClass.prototype.constructor = subClass;subClass.__proto__ = superClass;
        }

        var path = __webpack_require__(0);

        var Obj = __webpack_require__(5);

        module.exports =
        /*#__PURE__*/
        function (_Obj) {
          _inheritsLoose(Loader, _Obj);

          function Loader() {
            return _Obj.apply(this, arguments) || this;
          }

          var _proto = Loader.prototype;

          _proto.on = function on(name, func) {
            this.listeners = this.listeners || {};
            this.listeners[name] = this.listeners[name] || [];
            this.listeners[name].push(func);
          };

          _proto.emit = function emit(name) {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            if (this.listeners && this.listeners[name]) {
              this.listeners[name].forEach(function (listener) {
                listener.apply(void 0, args);
              });
            }
          };

          _proto.resolve = function resolve(from, to) {
            return path.resolve(path.dirname(from), to);
          };

          _proto.isRelative = function isRelative(filename) {
            return filename.indexOf('./') === 0 || filename.indexOf('../') === 0;
          };

          return Loader;
        }(Obj);

        /***/
      },
      /* 5 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";
        // A simple class system, more documentation to come

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;
        }

        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);subClass.prototype.constructor = subClass;subClass.__proto__ = superClass;
        }

        var lib = __webpack_require__(1);

        function parentWrap(parent, prop) {
          if (typeof parent !== 'function' || typeof prop !== 'function') {
            return prop;
          }

          return function wrap() {
            // Save the current parent method
            var tmp = this.parent; // Set parent to the previous method, call, and restore

            this.parent = parent;
            var res = prop.apply(this, arguments);
            this.parent = tmp;
            return res;
          };
        }

        function extendClass(cls, name, props) {
          props = props || {};
          lib.keys(props).forEach(function (k) {
            props[k] = parentWrap(cls.prototype[k], props[k]);
          });

          var subclass =
          /*#__PURE__*/
          function (_cls) {
            _inheritsLoose(subclass, _cls);

            function subclass() {
              return _cls.apply(this, arguments) || this;
            }

            _createClass(subclass, [{
              key: "typename",
              get: function get() {
                return name;
              }
            }]);

            return subclass;
          }(cls);

          lib._assign(subclass.prototype, props);

          return subclass;
        }

        var Obj =
        /*#__PURE__*/
        function () {
          function Obj() {
            // Unfortunately necessary for backwards compatibility
            this.init.apply(this, arguments);
          }

          var _proto = Obj.prototype;

          _proto.init = function init() {};

          Obj.extend = function extend(name, props) {
            if (typeof name === 'object') {
              props = name;
              name = 'anonymous';
            }

            return extendClass(this, name, props);
          };

          _createClass(Obj, [{
            key: "typename",
            get: function get() {
              return this.constructor.name;
            }
          }]);

          return Obj;
        }();

        module.exports = Obj;

        /***/
      },
      /* 6 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var lib = __webpack_require__(1);

        var _require = __webpack_require__(7),
            Environment = _require.Environment,
            Template = _require.Template;

        var Loader = __webpack_require__(4);

        var loaders = __webpack_require__(3);

        var precompile = __webpack_require__(0);

        var compiler = __webpack_require__(0);

        var parser = __webpack_require__(0);

        var lexer = __webpack_require__(0);

        var runtime = __webpack_require__(2);

        var nodes = __webpack_require__(0);

        var installJinjaCompat = __webpack_require__(16); // A single instance of an environment, since this is so commonly used


        var e;

        function configure(templatesPath, opts) {
          opts = opts || {};

          if (lib.isObject(templatesPath)) {
            opts = templatesPath;
            templatesPath = null;
          }

          var TemplateLoader;

          if (loaders.FileSystemLoader) {
            TemplateLoader = new loaders.FileSystemLoader(templatesPath, {
              watch: opts.watch,
              noCache: opts.noCache
            });
          } else if (loaders.WebLoader) {
            TemplateLoader = new loaders.WebLoader(templatesPath, {
              useCache: opts.web && opts.web.useCache,
              async: opts.web && opts.web.async
            });
          }

          e = new Environment(TemplateLoader, opts);

          if (opts && opts.express) {
            e.express(opts.express);
          }

          return e;
        }

        module.exports = {
          Environment: Environment,
          Template: Template,
          Loader: Loader,
          FileSystemLoader: loaders.FileSystemLoader,
          PrecompiledLoader: loaders.PrecompiledLoader,
          WebLoader: loaders.WebLoader,
          compiler: compiler,
          parser: parser,
          lexer: lexer,
          runtime: runtime,
          lib: lib,
          nodes: nodes,
          installJinjaCompat: installJinjaCompat,
          configure: configure,
          reset: function reset() {
            e = undefined;
          },
          compile: function compile(src, env, path, eagerCompile) {
            if (!e) {
              configure();
            }

            return new Template(src, env, path, eagerCompile);
          },
          render: function render(name, ctx, cb) {
            if (!e) {
              configure();
            }

            return e.render(name, ctx, cb);
          },
          renderString: function renderString(src, ctx, cb) {
            if (!e) {
              configure();
            }

            return e.renderString(src, ctx, cb);
          },
          precompile: precompile ? precompile.precompile : undefined,
          precompileString: precompile ? precompile.precompileString : undefined
        };

        /***/
      },
      /* 7 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);subClass.prototype.constructor = subClass;subClass.__proto__ = superClass;
        }

        var asap = __webpack_require__(8);

        var _waterfall = __webpack_require__(11);

        var lib = __webpack_require__(1);

        var compiler = __webpack_require__(0);

        var filters = __webpack_require__(12);

        var _require = __webpack_require__(3),
            FileSystemLoader = _require.FileSystemLoader,
            WebLoader = _require.WebLoader,
            PrecompiledLoader = _require.PrecompiledLoader;

        var tests = __webpack_require__(13);

        var globals = __webpack_require__(14);

        var Obj = __webpack_require__(5);

        var globalRuntime = __webpack_require__(2);

        var handleError = globalRuntime.handleError,
            Frame = globalRuntime.Frame;

        var expressApp = __webpack_require__(15); // If the user is using the async API, *always* call it
        // asynchronously even if the template was synchronous.


        function callbackAsap(cb, err, res) {
          asap(function () {
            cb(err, res);
          });
        }
        /**
         * A no-op template, for use with {% include ignore missing %}
         */

        var noopTmplSrc = {
          type: 'code',
          obj: {
            root: function root(env, context, frame, runtime, cb) {
              try {
                cb(null, '');
              } catch (e) {
                cb(handleError(e, null, null));
              }
            }
          }
        };

        var Environment =
        /*#__PURE__*/
        function (_Obj) {
          _inheritsLoose(Environment, _Obj);

          function Environment() {
            return _Obj.apply(this, arguments) || this;
          }

          var _proto = Environment.prototype;

          _proto.init = function init(loaders, opts) {
            var _this = this;

            // The dev flag determines the trace that'll be shown on errors.
            // If set to true, returns the full trace from the error point,
            // otherwise will return trace starting from Template.render
            // (the full trace from within nunjucks may confuse developers using
            //  the library)
            // defaults to false
            opts = this.opts = opts || {};
            this.opts.dev = !!opts.dev; // The autoescape flag sets global autoescaping. If true,
            // every string variable will be escaped by default.
            // If false, strings can be manually escaped using the `escape` filter.
            // defaults to true

            this.opts.autoescape = opts.autoescape != null ? opts.autoescape : true; // If true, this will make the system throw errors if trying
            // to output a null or undefined value

            this.opts.throwOnUndefined = !!opts.throwOnUndefined;
            this.opts.trimBlocks = !!opts.trimBlocks;
            this.opts.lstripBlocks = !!opts.lstripBlocks;
            this.loaders = [];

            if (!loaders) {
              // The filesystem loader is only available server-side
              if (FileSystemLoader) {
                this.loaders = [new FileSystemLoader('views')];
              } else if (WebLoader) {
                this.loaders = [new WebLoader('/views')];
              }
            } else {
              this.loaders = lib.isArray(loaders) ? loaders : [loaders];
            } // It's easy to use precompiled templates: just include them
            // before you configure nunjucks and this will automatically
            // pick it up and use it


            if (typeof window !== 'undefined' && window.nunjucksPrecompiled) {
              this.loaders.unshift(new PrecompiledLoader(window.nunjucksPrecompiled));
            }

            this.initCache();
            this.globals = globals();
            this.filters = {};
            this.tests = {};
            this.asyncFilters = [];
            this.extensions = {};
            this.extensionsList = [];

            lib._entries(filters).forEach(function (_ref) {
              var name = _ref[0],
                  filter = _ref[1];
              return _this.addFilter(name, filter);
            });

            lib._entries(tests).forEach(function (_ref2) {
              var name = _ref2[0],
                  test = _ref2[1];
              return _this.addTest(name, test);
            });
          };

          _proto.initCache = function initCache() {
            // Caching and cache busting
            this.loaders.forEach(function (loader) {
              loader.cache = {};

              if (typeof loader.on === 'function') {
                loader.on('update', function (template) {
                  loader.cache[template] = null;
                });
              }
            });
          };

          _proto.addExtension = function addExtension(name, extension) {
            extension.__name = name;
            this.extensions[name] = extension;
            this.extensionsList.push(extension);
            return this;
          };

          _proto.removeExtension = function removeExtension(name) {
            var extension = this.getExtension(name);

            if (!extension) {
              return;
            }

            this.extensionsList = lib.without(this.extensionsList, extension);
            delete this.extensions[name];
          };

          _proto.getExtension = function getExtension(name) {
            return this.extensions[name];
          };

          _proto.hasExtension = function hasExtension(name) {
            return !!this.extensions[name];
          };

          _proto.addGlobal = function addGlobal(name, value) {
            this.globals[name] = value;
            return this;
          };

          _proto.getGlobal = function getGlobal(name) {
            if (typeof this.globals[name] === 'undefined') {
              throw new Error('global not found: ' + name);
            }

            return this.globals[name];
          };

          _proto.addFilter = function addFilter(name, func, async) {
            var wrapped = func;

            if (async) {
              this.asyncFilters.push(name);
            }

            this.filters[name] = wrapped;
            return this;
          };

          _proto.getFilter = function getFilter(name) {
            if (!this.filters[name]) {
              throw new Error('filter not found: ' + name);
            }

            return this.filters[name];
          };

          _proto.addTest = function addTest(name, func) {
            this.tests[name] = func;
            return this;
          };

          _proto.getTest = function getTest(name) {
            if (!this.tests[name]) {
              throw new Error('test not found: ' + name);
            }

            return this.tests[name];
          };

          _proto.resolveTemplate = function resolveTemplate(loader, parentName, filename) {
            var isRelative = loader.isRelative && parentName ? loader.isRelative(filename) : false;
            return isRelative && loader.resolve ? loader.resolve(parentName, filename) : filename;
          };

          _proto.getTemplate = function getTemplate(name, eagerCompile, parentName, ignoreMissing, cb) {
            var _this2 = this;

            var that = this;
            var tmpl = null;

            if (name && name.raw) {
              // this fixes autoescape for templates referenced in symbols
              name = name.raw;
            }

            if (lib.isFunction(parentName)) {
              cb = parentName;
              parentName = null;
              eagerCompile = eagerCompile || false;
            }

            if (lib.isFunction(eagerCompile)) {
              cb = eagerCompile;
              eagerCompile = false;
            }

            if (name instanceof Template) {
              tmpl = name;
            } else if (typeof name !== 'string') {
              throw new Error('template names must be a string: ' + name);
            } else {
              for (var i = 0; i < this.loaders.length; i++) {
                var loader = this.loaders[i];
                tmpl = loader.cache[this.resolveTemplate(loader, parentName, name)];

                if (tmpl) {
                  break;
                }
              }
            }

            if (tmpl) {
              if (eagerCompile) {
                tmpl.compile();
              }

              if (cb) {
                cb(null, tmpl);
                return undefined;
              } else {
                return tmpl;
              }
            }

            var syncResult;

            var createTemplate = function createTemplate(err, info) {
              if (!info && !err && !ignoreMissing) {
                err = new Error('template not found: ' + name);
              }

              if (err) {
                if (cb) {
                  cb(err);
                  return;
                } else {
                  throw err;
                }
              }

              var newTmpl;

              if (!info) {
                newTmpl = new Template(noopTmplSrc, _this2, '', eagerCompile);
              } else {
                newTmpl = new Template(info.src, _this2, info.path, eagerCompile);

                if (!info.noCache) {
                  info.loader.cache[name] = newTmpl;
                }
              }

              if (cb) {
                cb(null, newTmpl);
              } else {
                syncResult = newTmpl;
              }
            };

            lib.asyncIter(this.loaders, function (loader, i, next, done) {
              function handle(err, src) {
                if (err) {
                  done(err);
                } else if (src) {
                  src.loader = loader;
                  done(null, src);
                } else {
                  next();
                }
              } // Resolve name relative to parentName


              name = that.resolveTemplate(loader, parentName, name);

              if (loader.async) {
                loader.getSource(name, handle);
              } else {
                handle(null, loader.getSource(name));
              }
            }, createTemplate);
            return syncResult;
          };

          _proto.express = function express(app) {
            return expressApp(this, app);
          };

          _proto.render = function render(name, ctx, cb) {
            if (lib.isFunction(ctx)) {
              cb = ctx;
              ctx = null;
            } // We support a synchronous API to make it easier to migrate
            // existing code to async. This works because if you don't do
            // anything async work, the whole thing is actually run
            // synchronously.


            var syncResult = null;
            this.getTemplate(name, function (err, tmpl) {
              if (err && cb) {
                callbackAsap(cb, err);
              } else if (err) {
                throw err;
              } else {
                syncResult = tmpl.render(ctx, cb);
              }
            });
            return syncResult;
          };

          _proto.renderString = function renderString(src, ctx, opts, cb) {
            if (lib.isFunction(opts)) {
              cb = opts;
              opts = {};
            }

            opts = opts || {};
            var tmpl = new Template(src, this, opts.path);
            return tmpl.render(ctx, cb);
          };

          _proto.waterfall = function waterfall(tasks, callback, forceAsync) {
            return _waterfall(tasks, callback, forceAsync);
          };

          return Environment;
        }(Obj);

        var Context =
        /*#__PURE__*/
        function (_Obj2) {
          _inheritsLoose(Context, _Obj2);

          function Context() {
            return _Obj2.apply(this, arguments) || this;
          }

          var _proto2 = Context.prototype;

          _proto2.init = function init(ctx, blocks, env) {
            var _this3 = this;

            // Has to be tied to an environment so we can tap into its globals.
            this.env = env || new Environment(); // Make a duplicate of ctx

            this.ctx = lib.extend({}, ctx);
            this.blocks = {};
            this.exported = [];
            lib.keys(blocks).forEach(function (name) {
              _this3.addBlock(name, blocks[name]);
            });
          };

          _proto2.lookup = function lookup(name) {
            // This is one of the most called functions, so optimize for
            // the typical case where the name isn't in the globals
            if (name in this.env.globals && !(name in this.ctx)) {
              return this.env.globals[name];
            } else {
              return this.ctx[name];
            }
          };

          _proto2.setVariable = function setVariable(name, val) {
            this.ctx[name] = val;
          };

          _proto2.getVariables = function getVariables() {
            return this.ctx;
          };

          _proto2.addBlock = function addBlock(name, block) {
            this.blocks[name] = this.blocks[name] || [];
            this.blocks[name].push(block);
            return this;
          };

          _proto2.getBlock = function getBlock(name) {
            if (!this.blocks[name]) {
              throw new Error('unknown block "' + name + '"');
            }

            return this.blocks[name][0];
          };

          _proto2.getSuper = function getSuper(env, name, block, frame, runtime, cb) {
            var idx = lib.indexOf(this.blocks[name] || [], block);
            var blk = this.blocks[name][idx + 1];
            var context = this;

            if (idx === -1 || !blk) {
              throw new Error('no super block available for "' + name + '"');
            }

            blk(env, context, frame, runtime, cb);
          };

          _proto2.addExport = function addExport(name) {
            this.exported.push(name);
          };

          _proto2.getExported = function getExported() {
            var _this4 = this;

            var exported = {};
            this.exported.forEach(function (name) {
              exported[name] = _this4.ctx[name];
            });
            return exported;
          };

          return Context;
        }(Obj);

        var Template =
        /*#__PURE__*/
        function (_Obj3) {
          _inheritsLoose(Template, _Obj3);

          function Template() {
            return _Obj3.apply(this, arguments) || this;
          }

          var _proto3 = Template.prototype;

          _proto3.init = function init(src, env, path, eagerCompile) {
            this.env = env || new Environment();

            if (lib.isObject(src)) {
              switch (src.type) {
                case 'code':
                  this.tmplProps = src.obj;
                  break;

                case 'string':
                  this.tmplStr = src.obj;
                  break;

                default:
                  throw new Error("Unexpected template object type " + src.type + "; expected 'code', or 'string'");
              }
            } else if (lib.isString(src)) {
              this.tmplStr = src;
            } else {
              throw new Error('src must be a string or an object describing the source');
            }

            this.path = path;

            if (eagerCompile) {
              try {
                this._compile();
              } catch (err) {
                throw lib._prettifyError(this.path, this.env.opts.dev, err);
              }
            } else {
              this.compiled = false;
            }
          };

          _proto3.render = function render(ctx, parentFrame, cb) {
            var _this5 = this;

            if (typeof ctx === 'function') {
              cb = ctx;
              ctx = {};
            } else if (typeof parentFrame === 'function') {
              cb = parentFrame;
              parentFrame = null;
            } // If there is a parent frame, we are being called from internal
            // code of another template, and the internal system
            // depends on the sync/async nature of the parent template
            // to be inherited, so force an async callback


            var forceAsync = !parentFrame; // Catch compile errors for async rendering

            try {
              this.compile();
            } catch (e) {
              var err = lib._prettifyError(this.path, this.env.opts.dev, e);

              if (cb) {
                return callbackAsap(cb, err);
              } else {
                throw err;
              }
            }

            var context = new Context(ctx || {}, this.blocks, this.env);
            var frame = parentFrame ? parentFrame.push(true) : new Frame();
            frame.topLevel = true;
            var syncResult = null;
            var didError = false;
            this.rootRenderFunc(this.env, context, frame, globalRuntime, function (err, res) {
              if (didError) {
                // prevent multiple calls to cb
                if (cb) {
                  return;
                } else {
                  throw err;
                }
              }

              if (err) {
                err = lib._prettifyError(_this5.path, _this5.env.opts.dev, err);
                didError = true;
              }

              if (cb) {
                if (forceAsync) {
                  callbackAsap(cb, err, res);
                } else {
                  cb(err, res);
                }
              } else {
                if (err) {
                  throw err;
                }

                syncResult = res;
              }
            });
            return syncResult;
          };

          _proto3.getExported = function getExported(ctx, parentFrame, cb) {
            // eslint-disable-line consistent-return
            if (typeof ctx === 'function') {
              cb = ctx;
              ctx = {};
            }

            if (typeof parentFrame === 'function') {
              cb = parentFrame;
              parentFrame = null;
            } // Catch compile errors for async rendering


            try {
              this.compile();
            } catch (e) {
              if (cb) {
                return cb(e);
              } else {
                throw e;
              }
            }

            var frame = parentFrame ? parentFrame.push() : new Frame();
            frame.topLevel = true; // Run the rootRenderFunc to populate the context with exported vars

            var context = new Context(ctx || {}, this.blocks, this.env);
            this.rootRenderFunc(this.env, context, frame, globalRuntime, function (err) {
              if (err) {
                cb(err, null);
              } else {
                cb(null, context.getExported());
              }
            });
          };

          _proto3.compile = function compile() {
            if (!this.compiled) {
              this._compile();
            }
          };

          _proto3._compile = function _compile() {
            var props;

            if (this.tmplProps) {
              props = this.tmplProps;
            } else {
              var source = compiler.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts);
              var func = new Function(source); // eslint-disable-line no-new-func

              props = func();
            }

            this.blocks = this._getBlocks(props);
            this.rootRenderFunc = props.root;
            this.compiled = true;
          };

          _proto3._getBlocks = function _getBlocks(props) {
            var blocks = {};
            lib.keys(props).forEach(function (k) {
              if (k.slice(0, 2) === 'b_') {
                blocks[k.slice(2)] = props[k];
              }
            });
            return blocks;
          };

          return Template;
        }(Obj);

        module.exports = {
          Environment: Environment,
          Template: Template
        };

        /***/
      },
      /* 8 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // rawAsap provides everything we need except exception management.

        var rawAsap = __webpack_require__(9);
        // RawTasks are recycled to reduce GC churn.
        var freeTasks = [];
        // We queue errors to ensure they are thrown in right order (FIFO).
        // Array-as-queue is good enough here, since we are just dealing with exceptions.
        var pendingErrors = [];
        var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

        function throwFirstError() {
          if (pendingErrors.length) {
            throw pendingErrors.shift();
          }
        }

        /**
         * Calls a task as soon as possible after returning, in its own event, with priority
         * over other events like animation, reflow, and repaint. An error thrown from an
         * event will not interrupt, nor even substantially slow down the processing of
         * other events, but will be rather postponed to a lower priority event.
         * @param {{call}} task A callable object, typically a function that takes no
         * arguments.
         */
        module.exports = asap;
        function asap(task) {
          var rawTask;
          if (freeTasks.length) {
            rawTask = freeTasks.pop();
          } else {
            rawTask = new RawTask();
          }
          rawTask.task = task;
          rawAsap(rawTask);
        }

        // We wrap tasks with recyclable task objects.  A task object implements
        // `call`, just like a function.
        function RawTask() {
          this.task = null;
        }

        // The sole purpose of wrapping the task is to catch the exception and recycle
        // the task object after its single use.
        RawTask.prototype.call = function () {
          try {
            this.task.call();
          } catch (error) {
            if (asap.onerror) {
              // This hook exists purely for testing purposes.
              // Its name will be periodically randomized to break any code that
              // depends on its existence.
              asap.onerror(error);
            } else {
              // In a web browser, exceptions are not fatal. However, to avoid
              // slowing down the queue of pending tasks, we rethrow the error in a
              // lower priority turn.
              pendingErrors.push(error);
              requestErrorThrow();
            }
          } finally {
            this.task = null;
            freeTasks[freeTasks.length] = this;
          }
        };

        /***/
      },
      /* 9 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";
        /* WEBPACK VAR INJECTION */
        (function (global) {

          // Use the fastest means possible to execute a task in its own turn, with
          // priority over other events including IO, animation, reflow, and redraw
          // events in browsers.
          //
          // An exception thrown by a task will permanently interrupt the processing of
          // subsequent tasks. The higher level `asap` function ensures that if an
          // exception is thrown by a task, that the task queue will continue flushing as
          // soon as possible, but if you use `rawAsap` directly, you are responsible to
          // either ensure that no exceptions are thrown from your task, or to manually
          // call `rawAsap.requestFlush` if an exception is thrown.
          module.exports = rawAsap;
          function rawAsap(task) {
            if (!queue.length) {
              requestFlush();
              flushing = true;
            }
            // Equivalent to push, but avoids a function call.
            queue[queue.length] = task;
          }

          var queue = [];
          // Once a flush has been requested, no further calls to `requestFlush` are
          // necessary until the next `flush` completes.
          var flushing = false;
          // `requestFlush` is an implementation-specific method that attempts to kick
          // off a `flush` event as quickly as possible. `flush` will attempt to exhaust
          // the event queue before yielding to the browser's own event loop.
          var requestFlush;
          // The position of the next task to execute in the task queue. This is
          // preserved between calls to `flush` so that it can be resumed if
          // a task throws an exception.
          var index = 0;
          // If a task schedules additional tasks recursively, the task queue can grow
          // unbounded. To prevent memory exhaustion, the task queue will periodically
          // truncate already-completed tasks.
          var capacity = 1024;

          // The flush function processes all tasks that have been scheduled with
          // `rawAsap` unless and until one of those tasks throws an exception.
          // If a task throws an exception, `flush` ensures that its state will remain
          // consistent and will resume where it left off when called again.
          // However, `flush` does not make any arrangements to be called again if an
          // exception is thrown.
          function flush() {
            while (index < queue.length) {
              var currentIndex = index;
              // Advance the index before calling the task. This ensures that we will
              // begin flushing on the next task the task throws an error.
              index = index + 1;
              queue[currentIndex].call();
              // Prevent leaking memory for long chains of recursive calls to `asap`.
              // If we call `asap` within tasks scheduled by `asap`, the queue will
              // grow, but to avoid an O(n) walk for every task we execute, we don't
              // shift tasks off the queue after they have been executed.
              // Instead, we periodically shift 1024 tasks off the queue.
              if (index > capacity) {
                // Manually shift all values starting at the index back to the
                // beginning of the queue.
                for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                  queue[scan] = queue[scan + index];
                }
                queue.length -= index;
                index = 0;
              }
            }
            queue.length = 0;
            index = 0;
            flushing = false;
          }

          // `requestFlush` is implemented using a strategy based on data collected from
          // every available SauceLabs Selenium web driver worker at time of writing.
          // https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

          // Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
          // have WebKitMutationObserver but not un-prefixed MutationObserver.
          // Must use `global` or `self` instead of `window` to work in both frames and web
          // workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

          /* globals self */
          var scope = typeof global !== "undefined" ? global : self;
          var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

          // MutationObservers are desirable because they have high priority and work
          // reliably everywhere they are implemented.
          // They are implemented in all modern browsers.
          //
          // - Android 4-4.3
          // - Chrome 26-34
          // - Firefox 14-29
          // - Internet Explorer 11
          // - iPad Safari 6-7.1
          // - iPhone Safari 7-7.1
          // - Safari 6-7
          if (typeof BrowserMutationObserver === "function") {
            requestFlush = makeRequestCallFromMutationObserver(flush);

            // MessageChannels are desirable because they give direct access to the HTML
            // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
            // 11-12, and in web workers in many engines.
            // Although message channels yield to any queued rendering and IO tasks, they
            // would be better than imposing the 4ms delay of timers.
            // However, they do not work reliably in Internet Explorer or Safari.

            // Internet Explorer 10 is the only browser that has setImmediate but does
            // not have MutationObservers.
            // Although setImmediate yields to the browser's renderer, it would be
            // preferrable to falling back to setTimeout since it does not have
            // the minimum 4ms penalty.
            // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
            // Desktop to a lesser extent) that renders both setImmediate and
            // MessageChannel useless for the purposes of ASAP.
            // https://github.com/kriskowal/q/issues/396

            // Timers are implemented universally.
            // We fall back to timers in workers in most engines, and in foreground
            // contexts in the following browsers.
            // However, note that even this simple case requires nuances to operate in a
            // broad spectrum of browsers.
            //
            // - Firefox 3-13
            // - Internet Explorer 6-9
            // - iPad Safari 4.3
            // - Lynx 2.8.7
          } else {
            requestFlush = makeRequestCallFromTimer(flush);
          }

          // `requestFlush` requests that the high priority event queue be flushed as
          // soon as possible.
          // This is useful to prevent an error thrown in a task from stalling the event
          // queue if the exception handled by Node.js’s
          // `process.on("uncaughtException")` or by a domain.
          rawAsap.requestFlush = requestFlush;

          // To request a high priority event, we induce a mutation observer by toggling
          // the text of a text node between "1" and "-1".
          function makeRequestCallFromMutationObserver(callback) {
            var toggle = 1;
            var observer = new BrowserMutationObserver(callback);
            var node = document.createTextNode("");
            observer.observe(node, { characterData: true });
            return function requestCall() {
              toggle = -toggle;
              node.data = toggle;
            };
          }

          // The message channel technique was discovered by Malte Ubl and was the
          // original foundation for this library.
          // http://www.nonblocking.io/2011/06/windownexttick.html

          // Safari 6.0.5 (at least) intermittently fails to create message ports on a
          // page's first load. Thankfully, this version of Safari supports
          // MutationObservers, so we don't need to fall back in that case.

          // function makeRequestCallFromMessageChannel(callback) {
          //     var channel = new MessageChannel();
          //     channel.port1.onmessage = callback;
          //     return function requestCall() {
          //         channel.port2.postMessage(0);
          //     };
          // }

          // For reasons explained above, we are also unable to use `setImmediate`
          // under any circumstances.
          // Even if we were, there is another bug in Internet Explorer 10.
          // It is not sufficient to assign `setImmediate` to `requestFlush` because
          // `setImmediate` must be called *by name* and therefore must be wrapped in a
          // closure.
          // Never forget.

          // function makeRequestCallFromSetImmediate(callback) {
          //     return function requestCall() {
          //         setImmediate(callback);
          //     };
          // }

          // Safari 6.0 has a problem where timers will get lost while the user is
          // scrolling. This problem does not impact ASAP because Safari 6.0 supports
          // mutation observers, so that implementation is used instead.
          // However, if we ever elect to use timers in Safari, the prevalent work-around
          // is to add a scroll event listener that calls for a flush.

          // `setTimeout` does not call the passed callback if the delay is less than
          // approximately 7 in web workers in Firefox 8 through 18, and sometimes not
          // even then.

          function makeRequestCallFromTimer(callback) {
            return function requestCall() {
              // We dispatch a timeout with a specified delay of 0 for engines that
              // can reliably accommodate that request. This will usually be snapped
              // to a 4 milisecond delay, but once we're flushing, there's no delay
              // between events.
              var timeoutHandle = setTimeout(handleTimer, 0);
              // However, since this timer gets frequently dropped in Firefox
              // workers, we enlist an interval handle that will try to fire
              // an event 20 times per second until it succeeds.
              var intervalHandle = setInterval(handleTimer, 50);

              function handleTimer() {
                // Whichever timer succeeds will cancel both timers and
                // execute the callback.
                clearTimeout(timeoutHandle);
                clearInterval(intervalHandle);
                callback();
              }
            };
          }

          // This is for `asap.js` only.
          // Its name will be periodically randomized to break any code that depends on
          // its existence.
          rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

          // ASAP was originally a nextTick shim included in Q. This was factored out
          // into this ASAP package. It was later adapted to RSVP which made further
          // amendments. These decisions, particularly to marginalize MessageChannel and
          // to capture the MutationObserver implementation in a closure, were integrated
          // back into ASAP proper.
          // https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

          /* WEBPACK VAR INJECTION */
        }).call(exports, __webpack_require__(10));

        /***/
      },
      /* 10 */
      /***/function (module, exports) {

        var g;

        // This works in non-strict mode
        g = function () {
          return this;
        }();

        try {
          // This works if eval is allowed (see CSP)
          g = g || Function("return this")() || (1, eval)("this");
        } catch (e) {
          // This works if the window reference is available
          if (typeof window === "object") g = window;
        }

        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}

        module.exports = g;

        /***/
      },
      /* 11 */
      /***/function (module, exports, __webpack_require__) {

        var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; // MIT license (by Elan Shanker).
        (function (globals) {
          'use strict';

          var executeSync = function () {
            var args = Array.prototype.slice.call(arguments);
            if (typeof args[0] === 'function') {
              args[0].apply(null, args.splice(1));
            }
          };

          var executeAsync = function (fn) {
            if (typeof setImmediate === 'function') {
              setImmediate(fn);
            } else if (typeof process !== 'undefined' && process.nextTick) {
              process.nextTick(fn);
            } else {
              setTimeout(fn, 0);
            }
          };

          var makeIterator = function (tasks) {
            var makeCallback = function (index) {
              var fn = function () {
                if (tasks.length) {
                  tasks[index].apply(null, arguments);
                }
                return fn.next();
              };
              fn.next = function () {
                return index < tasks.length - 1 ? makeCallback(index + 1) : null;
              };
              return fn;
            };
            return makeCallback(0);
          };

          var _isArray = Array.isArray || function (maybeArray) {
            return Object.prototype.toString.call(maybeArray) === '[object Array]';
          };

          var waterfall = function (tasks, callback, forceAsync) {
            var nextTick = forceAsync ? executeAsync : executeSync;
            callback = callback || function () {};
            if (!_isArray(tasks)) {
              var err = new Error('First argument to waterfall must be an array of functions');
              return callback(err);
            }
            if (!tasks.length) {
              return callback();
            }
            var wrapIterator = function (iterator) {
              return function (err) {
                if (err) {
                  callback.apply(null, arguments);
                  callback = function () {};
                } else {
                  var args = Array.prototype.slice.call(arguments, 1);
                  var next = iterator.next();
                  if (next) {
                    args.push(wrapIterator(next));
                  } else {
                    args.push(callback);
                  }
                  nextTick(function () {
                    iterator.apply(null, args);
                  });
                }
              };
            };
            wrapIterator(makeIterator(tasks))();
          };

          if (true) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
              return waterfall;
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // RequireJS
          } else if (typeof module !== 'undefined' && module.exports) {
            module.exports = waterfall; // CommonJS
          } else {
            globals.waterfall = waterfall; // <script>
          }
        })(this);

        /***/
      },
      /* 12 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var lib = __webpack_require__(1);

        var r = __webpack_require__(2);

        var exports = module.exports = {};

        function normalize(value, defaultValue) {
          if (value === null || value === undefined || value === false) {
            return defaultValue;
          }

          return value;
        }

        exports.abs = Math.abs;

        function isNaN(num) {
          return num !== num; // eslint-disable-line no-self-compare
        }

        function batch(arr, linecount, fillWith) {
          var i;
          var res = [];
          var tmp = [];

          for (i = 0; i < arr.length; i++) {
            if (i % linecount === 0 && tmp.length) {
              res.push(tmp);
              tmp = [];
            }

            tmp.push(arr[i]);
          }

          if (tmp.length) {
            if (fillWith) {
              for (i = tmp.length; i < linecount; i++) {
                tmp.push(fillWith);
              }
            }

            res.push(tmp);
          }

          return res;
        }

        exports.batch = batch;

        function capitalize(str) {
          str = normalize(str, '');
          var ret = str.toLowerCase();
          return r.copySafeness(str, ret.charAt(0).toUpperCase() + ret.slice(1));
        }

        exports.capitalize = capitalize;

        function center(str, width) {
          str = normalize(str, '');
          width = width || 80;

          if (str.length >= width) {
            return str;
          }

          var spaces = width - str.length;
          var pre = lib.repeat(' ', spaces / 2 - spaces % 2);
          var post = lib.repeat(' ', spaces / 2);
          return r.copySafeness(str, pre + str + post);
        }

        exports.center = center;

        function default_(val, def, bool) {
          if (bool) {
            return val || def;
          } else {
            return val !== undefined ? val : def;
          }
        } // TODO: it is confusing to export something called 'default'


        exports['default'] = default_; // eslint-disable-line dot-notation

        function dictsort(val, caseSensitive, by) {
          if (!lib.isObject(val)) {
            throw new lib.TemplateError('dictsort filter: val must be an object');
          }

          var array = []; // deliberately include properties from the object's prototype

          for (var k in val) {
            // eslint-disable-line guard-for-in, no-restricted-syntax
            array.push([k, val[k]]);
          }

          var si;

          if (by === undefined || by === 'key') {
            si = 0;
          } else if (by === 'value') {
            si = 1;
          } else {
            throw new lib.TemplateError('dictsort filter: You can only sort by either key or value');
          }

          array.sort(function (t1, t2) {
            var a = t1[si];
            var b = t2[si];

            if (!caseSensitive) {
              if (lib.isString(a)) {
                a = a.toUpperCase();
              }

              if (lib.isString(b)) {
                b = b.toUpperCase();
              }
            }

            return a > b ? 1 : a === b ? 0 : -1; // eslint-disable-line no-nested-ternary
          });
          return array;
        }

        exports.dictsort = dictsort;

        function dump(obj, spaces) {
          return JSON.stringify(obj, null, spaces);
        }

        exports.dump = dump;

        function escape(str) {
          if (str instanceof r.SafeString) {
            return str;
          }

          str = str === null || str === undefined ? '' : str;
          return r.markSafe(lib.escape(str.toString()));
        }

        exports.escape = escape;

        function safe(str) {
          if (str instanceof r.SafeString) {
            return str;
          }

          str = str === null || str === undefined ? '' : str;
          return r.markSafe(str.toString());
        }

        exports.safe = safe;

        function first(arr) {
          return arr[0];
        }

        exports.first = first;

        function forceescape(str) {
          str = str === null || str === undefined ? '' : str;
          return r.markSafe(lib.escape(str.toString()));
        }

        exports.forceescape = forceescape;

        function groupby(arr, attr) {
          return lib.groupBy(arr, attr);
        }

        exports.groupby = groupby;

        function indent(str, width, indentfirst) {
          str = normalize(str, '');

          if (str === '') {
            return '';
          }

          width = width || 4; // let res = '';

          var lines = str.split('\n');
          var sp = lib.repeat(' ', width);
          var res = lines.map(function (l, i) {
            return i === 0 && !indentfirst ? l + "\n" : "" + sp + l + "\n";
          }).join('');
          return r.copySafeness(str, res);
        }

        exports.indent = indent;

        function join(arr, del, attr) {
          del = del || '';

          if (attr) {
            arr = lib.map(arr, function (v) {
              return v[attr];
            });
          }

          return arr.join(del);
        }

        exports.join = join;

        function last(arr) {
          return arr[arr.length - 1];
        }

        exports.last = last;

        function lengthFilter(val) {
          var value = normalize(val, '');

          if (value !== undefined) {
            if (typeof Map === 'function' && value instanceof Map || typeof Set === 'function' && value instanceof Set) {
              // ECMAScript 2015 Maps and Sets
              return value.size;
            }

            if (lib.isObject(value) && !(value instanceof r.SafeString)) {
              // Objects (besides SafeStrings), non-primative Arrays
              return lib.keys(value).length;
            }

            return value.length;
          }

          return 0;
        }

        exports.length = lengthFilter;

        function list(val) {
          if (lib.isString(val)) {
            return val.split('');
          } else if (lib.isObject(val)) {
            return lib._entries(val || {}).map(function (_ref) {
              var key = _ref[0],
                  value = _ref[1];
              return {
                key: key,
                value: value
              };
            });
          } else if (lib.isArray(val)) {
            return val;
          } else {
            throw new lib.TemplateError('list filter: type not iterable');
          }
        }

        exports.list = list;

        function lower(str) {
          str = normalize(str, '');
          return str.toLowerCase();
        }

        exports.lower = lower;

        function nl2br(str) {
          if (str === null || str === undefined) {
            return '';
          }

          return r.copySafeness(str, str.replace(/\r\n|\n/g, '<br />\n'));
        }

        exports.nl2br = nl2br;

        function random(arr) {
          return arr[Math.floor(Math.random() * arr.length)];
        }

        exports.random = random;

        function rejectattr(arr, attr) {
          return arr.filter(function (item) {
            return !item[attr];
          });
        }

        exports.rejectattr = rejectattr;

        function selectattr(arr, attr) {
          return arr.filter(function (item) {
            return !!item[attr];
          });
        }

        exports.selectattr = selectattr;

        function replace(str, old, new_, maxCount) {
          var originalStr = str;

          if (old instanceof RegExp) {
            return str.replace(old, new_);
          }

          if (typeof maxCount === 'undefined') {
            maxCount = -1;
          }

          var res = ''; // Output
          // Cast Numbers in the search term to string

          if (typeof old === 'number') {
            old = '' + old;
          } else if (typeof old !== 'string') {
            // If it is something other than number or string,
            // return the original string
            return str;
          } // Cast numbers in the replacement to string


          if (typeof str === 'number') {
            str = '' + str;
          } // If by now, we don't have a string, throw it back


          if (typeof str !== 'string' && !(str instanceof r.SafeString)) {
            return str;
          } // ShortCircuits


          if (old === '') {
            // Mimic the python behaviour: empty string is replaced
            // by replacement e.g. "abc"|replace("", ".") -> .a.b.c.
            res = new_ + str.split('').join(new_) + new_;
            return r.copySafeness(str, res);
          }

          var nextIndex = str.indexOf(old); // if # of replacements to perform is 0, or the string to does
          // not contain the old value, return the string

          if (maxCount === 0 || nextIndex === -1) {
            return str;
          }

          var pos = 0;
          var count = 0; // # of replacements made

          while (nextIndex > -1 && (maxCount === -1 || count < maxCount)) {
            // Grab the next chunk of src string and add it with the
            // replacement, to the result
            res += str.substring(pos, nextIndex) + new_; // Increment our pointer in the src string

            pos = nextIndex + old.length;
            count++; // See if there are any more replacements to be made

            nextIndex = str.indexOf(old, pos);
          } // We've either reached the end, or done the max # of
          // replacements, tack on any remaining string


          if (pos < str.length) {
            res += str.substring(pos);
          }

          return r.copySafeness(originalStr, res);
        }

        exports.replace = replace;

        function reverse(val) {
          var arr;

          if (lib.isString(val)) {
            arr = list(val);
          } else {
            // Copy it
            arr = lib.map(val, function (v) {
              return v;
            });
          }

          arr.reverse();

          if (lib.isString(val)) {
            return r.copySafeness(val, arr.join(''));
          }

          return arr;
        }

        exports.reverse = reverse;

        function round(val, precision, method) {
          precision = precision || 0;
          var factor = Math.pow(10, precision);
          var rounder;

          if (method === 'ceil') {
            rounder = Math.ceil;
          } else if (method === 'floor') {
            rounder = Math.floor;
          } else {
            rounder = Math.round;
          }

          return rounder(val * factor) / factor;
        }

        exports.round = round;

        function slice(arr, slices, fillWith) {
          var sliceLength = Math.floor(arr.length / slices);
          var extra = arr.length % slices;
          var res = [];
          var offset = 0;

          for (var i = 0; i < slices; i++) {
            var start = offset + i * sliceLength;

            if (i < extra) {
              offset++;
            }

            var end = offset + (i + 1) * sliceLength;
            var currSlice = arr.slice(start, end);

            if (fillWith && i >= extra) {
              currSlice.push(fillWith);
            }

            res.push(currSlice);
          }

          return res;
        }

        exports.slice = slice;

        function sum(arr, attr, start) {
          if (start === void 0) {
            start = 0;
          }

          if (attr) {
            arr = lib.map(arr, function (v) {
              return v[attr];
            });
          }

          return start + arr.reduce(function (a, b) {
            return a + b;
          }, 0);
        }

        exports.sum = sum;
        exports.sort = r.makeMacro(['value', 'reverse', 'case_sensitive', 'attribute'], [], function (arr, reversed, caseSens, attr) {
          // Copy it
          var array = lib.map(arr, function (v) {
            return v;
          });
          array.sort(function (a, b) {
            var x = attr ? a[attr] : a;
            var y = attr ? b[attr] : b;

            if (!caseSens && lib.isString(x) && lib.isString(y)) {
              x = x.toLowerCase();
              y = y.toLowerCase();
            }

            if (x < y) {
              return reversed ? 1 : -1;
            } else if (x > y) {
              return reversed ? -1 : 1;
            } else {
              return 0;
            }
          });
          return array;
        });

        function string(obj) {
          return r.copySafeness(obj, obj);
        }

        exports.string = string;

        function striptags(input, preserveLinebreaks) {
          input = normalize(input, '');
          var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi;
          var trimmedInput = trim(input.replace(tags, ''));
          var res = '';

          if (preserveLinebreaks) {
            res = trimmedInput.replace(/^ +| +$/gm, '') // remove leading and trailing spaces
            .replace(/ +/g, ' ') // squash adjacent spaces
            .replace(/(\r\n)/g, '\n') // normalize linebreaks (CRLF -> LF)
            .replace(/\n\n\n+/g, '\n\n'); // squash abnormal adjacent linebreaks
          } else {
            res = trimmedInput.replace(/\s+/gi, ' ');
          }

          return r.copySafeness(input, res);
        }

        exports.striptags = striptags;

        function title(str) {
          str = normalize(str, '');
          var words = str.split(' ').map(function (word) {
            return capitalize(word);
          });
          return r.copySafeness(str, words.join(' '));
        }

        exports.title = title;

        function trim(str) {
          return r.copySafeness(str, str.replace(/^\s*|\s*$/g, ''));
        }

        exports.trim = trim;

        function truncate(input, length, killwords, end) {
          var orig = input;
          input = normalize(input, '');
          length = length || 255;

          if (input.length <= length) {
            return input;
          }

          if (killwords) {
            input = input.substring(0, length);
          } else {
            var idx = input.lastIndexOf(' ', length);

            if (idx === -1) {
              idx = length;
            }

            input = input.substring(0, idx);
          }

          input += end !== undefined && end !== null ? end : '...';
          return r.copySafeness(orig, input);
        }

        exports.truncate = truncate;

        function upper(str) {
          str = normalize(str, '');
          return str.toUpperCase();
        }

        exports.upper = upper;

        function urlencode(obj) {
          var enc = encodeURIComponent;

          if (lib.isString(obj)) {
            return enc(obj);
          } else {
            var keyvals = lib.isArray(obj) ? obj : lib._entries(obj);
            return keyvals.map(function (_ref2) {
              var k = _ref2[0],
                  v = _ref2[1];
              return enc(k) + "=" + enc(v);
            }).join('&');
          }
        }

        exports.urlencode = urlencode; // For the jinja regexp, see
        // https://github.com/mitsuhiko/jinja2/blob/f15b814dcba6aa12bc74d1f7d0c881d55f7126be/jinja2/utils.py#L20-L23

        var puncRe = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/; // from http://blog.gerv.net/2011/05/html5_email_address_regexp/

        var emailRe = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i;
        var httpHttpsRe = /^https?:\/\/.*$/;
        var wwwRe = /^www\./;
        var tldRe = /\.(?:org|net|com)(?:\:|\/|$)/;

        function urlize(str, length, nofollow) {
          if (isNaN(length)) {
            length = Infinity;
          }

          var noFollowAttr = nofollow === true ? ' rel="nofollow"' : '';
          var words = str.split(/(\s+)/).filter(function (word) {
            // If the word has no length, bail. This can happen for str with
            // trailing whitespace.
            return word && word.length;
          }).map(function (word) {
            var matches = word.match(puncRe);
            var possibleUrl = matches ? matches[1] : word;
            var shortUrl = possibleUrl.substr(0, length); // url that starts with http or https

            if (httpHttpsRe.test(possibleUrl)) {
              return "<a href=\"" + possibleUrl + "\"" + noFollowAttr + ">" + shortUrl + "</a>";
            } // url that starts with www.


            if (wwwRe.test(possibleUrl)) {
              return "<a href=\"http://" + possibleUrl + "\"" + noFollowAttr + ">" + shortUrl + "</a>";
            } // an email address of the form username@domain.tld


            if (emailRe.test(possibleUrl)) {
              return "<a href=\"mailto:" + possibleUrl + "\">" + possibleUrl + "</a>";
            } // url that ends in .com, .org or .net that is not an email address


            if (tldRe.test(possibleUrl)) {
              return "<a href=\"http://" + possibleUrl + "\"" + noFollowAttr + ">" + shortUrl + "</a>";
            }

            return word;
          });
          return words.join('');
        }

        exports.urlize = urlize;

        function wordcount(str) {
          str = normalize(str, '');
          var words = str ? str.match(/\w+/g) : null;
          return words ? words.length : null;
        }

        exports.wordcount = wordcount;

        function float(val, def) {
          var res = parseFloat(val);
          return isNaN(res) ? def : res;
        }

        exports.float = float;

        function int(val, def) {
          var res = parseInt(val, 10);
          return isNaN(res) ? def : res;
        }

        exports.int = int; // Aliases

        exports.d = exports.default;
        exports.e = exports.escape;

        /***/
      },
      /* 13 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var SafeString = __webpack_require__(2).SafeString;
        /**
         * Returns `true` if the object is a function, otherwise `false`.
         * @param { any } value
         * @returns { boolean }
         */

        function callable(value) {
          return typeof value === 'function';
        }

        exports.callable = callable;
        /**
         * Returns `true` if the object is strictly not `undefined`.
         * @param { any } value
         * @returns { boolean }
         */

        function defined(value) {
          return value !== undefined;
        }

        exports.defined = defined;
        /**
         * Returns `true` if the operand (one) is divisble by the test's argument
         * (two).
         * @param { number } one
         * @param { number } two
         * @returns { boolean }
         */

        function divisibleby(one, two) {
          return one % two === 0;
        }

        exports.divisibleby = divisibleby;
        /**
         * Returns true if the string has been escaped (i.e., is a SafeString).
         * @param { any } value
         * @returns { boolean }
         */

        function escaped(value) {
          return value instanceof SafeString;
        }

        exports.escaped = escaped;
        /**
         * Returns `true` if the arguments are strictly equal.
         * @param { any } one
         * @param { any } two
         */

        function equalto(one, two) {
          return one === two;
        }

        exports.equalto = equalto; // Aliases

        exports.eq = exports.equalto;
        exports.sameas = exports.equalto;
        /**
         * Returns `true` if the value is evenly divisible by 2.
         * @param { number } value
         * @returns { boolean }
         */

        function even(value) {
          return value % 2 === 0;
        }

        exports.even = even;
        /**
         * Returns `true` if the value is falsy - if I recall correctly, '', 0, false,
         * undefined, NaN or null. I don't know if we should stick to the default JS
         * behavior or attempt to replicate what Python believes should be falsy (i.e.,
         * empty arrays, empty dicts, not 0...).
         * @param { any } value
         * @returns { boolean }
         */

        function falsy(value) {
          return !value;
        }

        exports.falsy = falsy;
        /**
         * Returns `true` if the operand (one) is greater or equal to the test's
         * argument (two).
         * @param { number } one
         * @param { number } two
         * @returns { boolean }
         */

        function ge(one, two) {
          return one >= two;
        }

        exports.ge = ge;
        /**
         * Returns `true` if the operand (one) is greater than the test's argument
         * (two).
         * @param { number } one
         * @param { number } two
         * @returns { boolean }
         */

        function greaterthan(one, two) {
          return one > two;
        }

        exports.greaterthan = greaterthan; // alias

        exports.gt = exports.greaterthan;
        /**
         * Returns `true` if the operand (one) is less than or equal to the test's
         * argument (two).
         * @param { number } one
         * @param { number } two
         * @returns { boolean }
         */

        function le(one, two) {
          return one <= two;
        }

        exports.le = le;
        /**
         * Returns `true` if the operand (one) is less than the test's passed argument
         * (two).
         * @param { number } one
         * @param { number } two
         * @returns { boolean }
         */

        function lessthan(one, two) {
          return one < two;
        }

        exports.lessthan = lessthan; // alias

        exports.lt = exports.lessthan;
        /**
         * Returns `true` if the string is lowercased.
         * @param { string } value
         * @returns { boolean }
         */

        function lower(value) {
          return value.toLowerCase() === value;
        }

        exports.lower = lower;
        /**
         * Returns `true` if the operand (one) is less than or equal to the test's
         * argument (two).
         * @param { number } one
         * @param { number } two
         * @returns { boolean }
         */

        function ne(one, two) {
          return one !== two;
        }

        exports.ne = ne;
        /**
         * Returns true if the value is strictly equal to `null`.
         * @param { any }
         * @returns { boolean }
         */

        function nullTest(value) {
          return value === null;
        }

        exports.null = nullTest;
        /**
         * Returns true if value is a number.
         * @param { any }
         * @returns { boolean }
         */

        function number(value) {
          return typeof value === 'number';
        }

        exports.number = number;
        /**
         * Returns `true` if the value is *not* evenly divisible by 2.
         * @param { number } value
         * @returns { boolean }
         */

        function odd(value) {
          return value % 2 === 1;
        }

        exports.odd = odd;
        /**
         * Returns `true` if the value is a string, `false` if not.
         * @param { any } value
         * @returns { boolean }
         */

        function string(value) {
          return typeof value === 'string';
        }

        exports.string = string;
        /**
         * Returns `true` if the value is not in the list of things considered falsy:
         * '', null, undefined, 0, NaN and false.
         * @param { any } value
         * @returns { boolean }
         */

        function truthy(value) {
          return !!value;
        }

        exports.truthy = truthy;
        /**
         * Returns `true` if the value is undefined.
         * @param { any } value
         * @returns { boolean }
         */

        function undefinedTest(value) {
          return value === undefined;
        }

        exports.undefined = undefinedTest;
        /**
         * Returns `true` if the string is uppercased.
         * @param { string } value
         * @returns { boolean }
         */

        function upper(value) {
          return value.toUpperCase() === value;
        }

        exports.upper = upper;
        /**
         * If ES6 features are available, returns `true` if the value implements the
         * `Symbol.iterator` method. If not, it's a string or Array.
         *
         * Could potentially cause issues if a browser exists that has Set and Map but
         * not Symbol.
         *
         * @param { any } value
         * @returns { boolean }
         */

        function iterable(value) {
          if (typeof Symbol !== 'undefined') {
            return !!value[Symbol.iterator];
          } else {
            return Array.isArray(value) || typeof value === 'string';
          }
        }

        exports.iterable = iterable;
        /**
         * If ES6 features are available, returns `true` if the value is an object hash
         * or an ES6 Map. Otherwise just return if it's an object hash.
         * @param { any } value
         * @returns { boolean }
         */

        function mapping(value) {
          // only maps and object hashes
          var bool = value !== null && value !== undefined && typeof value === 'object' && !Array.isArray(value);

          if (Set) {
            return bool && !(value instanceof Set);
          } else {
            return bool;
          }
        }

        exports.mapping = mapping;

        /***/
      },
      /* 14 */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        function _cycler(items) {
          var index = -1;
          return {
            current: null,
            reset: function reset() {
              index = -1;
              this.current = null;
            },
            next: function next() {
              index++;

              if (index >= items.length) {
                index = 0;
              }

              this.current = items[index];
              return this.current;
            }
          };
        }

        function _joiner(sep) {
          sep = sep || ',';
          var first = true;
          return function () {
            var val = first ? '' : sep;
            first = false;
            return val;
          };
        } // Making this a function instead so it returns a new object
        // each time it's called. That way, if something like an environment
        // uses it, they will each have their own copy.


        function globals() {
          return {
            range: function range(start, stop, step) {
              if (typeof stop === 'undefined') {
                stop = start;
                start = 0;
                step = 1;
              } else if (!step) {
                step = 1;
              }

              var arr = [];

              if (step > 0) {
                for (var i = start; i < stop; i += step) {
                  arr.push(i);
                }
              } else {
                for (var _i = start; _i > stop; _i += step) {
                  // eslint-disable-line for-direction
                  arr.push(_i);
                }
              }

              return arr;
            },
            cycler: function cycler() {
              return _cycler(Array.prototype.slice.call(arguments));
            },
            joiner: function joiner(sep) {
              return _joiner(sep);
            }
          };
        }

        module.exports = globals;

        /***/
      },
      /* 15 */
      /***/function (module, exports, __webpack_require__) {

        var path = __webpack_require__(0);

        module.exports = function express(env, app) {
          function NunjucksView(name, opts) {
            this.name = name;
            this.path = name;
            this.defaultEngine = opts.defaultEngine;
            this.ext = path.extname(name);

            if (!this.ext && !this.defaultEngine) {
              throw new Error('No default engine was specified and no extension was provided.');
            }

            if (!this.ext) {
              this.name += this.ext = (this.defaultEngine[0] !== '.' ? '.' : '') + this.defaultEngine;
            }
          }

          NunjucksView.prototype.render = function render(opts, cb) {
            env.render(this.name, opts, cb);
          };

          app.set('view', NunjucksView);
          app.set('nunjucksEnv', env);
          return env;
        };

        /***/
      },
      /* 16 */
      /***/function (module, exports, __webpack_require__) {

        function installCompat() {
          'use strict';
          /* eslint-disable camelcase */
          // This must be called like `nunjucks.installCompat` so that `this`
          // references the nunjucks instance

          var runtime = this.runtime;
          var lib = this.lib; // Handle slim case where these 'modules' are excluded from the built source

          var Compiler = this.compiler.Compiler;
          var Parser = this.parser.Parser;
          var nodes = this.nodes;
          var lexer = this.lexer;
          var orig_contextOrFrameLookup = runtime.contextOrFrameLookup;
          var orig_memberLookup = runtime.memberLookup;
          var orig_Compiler_assertType;
          var orig_Parser_parseAggregate;

          if (Compiler) {
            orig_Compiler_assertType = Compiler.prototype.assertType;
          }

          if (Parser) {
            orig_Parser_parseAggregate = Parser.prototype.parseAggregate;
          }

          function uninstall() {
            runtime.contextOrFrameLookup = orig_contextOrFrameLookup;
            runtime.memberLookup = orig_memberLookup;

            if (Compiler) {
              Compiler.prototype.assertType = orig_Compiler_assertType;
            }

            if (Parser) {
              Parser.prototype.parseAggregate = orig_Parser_parseAggregate;
            }
          }

          runtime.contextOrFrameLookup = function contextOrFrameLookup(context, frame, key) {
            var val = orig_contextOrFrameLookup.apply(this, arguments);

            if (val !== undefined) {
              return val;
            }

            switch (key) {
              case 'True':
                return true;

              case 'False':
                return false;

              case 'None':
                return null;

              default:
                return undefined;
            }
          };

          function getTokensState(tokens) {
            return {
              index: tokens.index,
              lineno: tokens.lineno,
              colno: tokens.colno
            };
          }

          if (false) {
            // i.e., not slim mode
            var Slice = nodes.Node.extend('Slice', {
              fields: ['start', 'stop', 'step'],
              init: function init(lineno, colno, start, stop, step) {
                start = start || new nodes.Literal(lineno, colno, null);
                stop = stop || new nodes.Literal(lineno, colno, null);
                step = step || new nodes.Literal(lineno, colno, 1);
                this.parent(lineno, colno, start, stop, step);
              }
            });

            Compiler.prototype.assertType = function assertType(node) {
              if (node instanceof Slice) {
                return;
              }

              orig_Compiler_assertType.apply(this, arguments);
            };

            Compiler.prototype.compileSlice = function compileSlice(node, frame) {
              this._emit('(');

              this._compileExpression(node.start, frame);

              this._emit('),(');

              this._compileExpression(node.stop, frame);

              this._emit('),(');

              this._compileExpression(node.step, frame);

              this._emit(')');
            };

            Parser.prototype.parseAggregate = function parseAggregate() {
              var _this = this;

              var origState = getTokensState(this.tokens); // Set back one accounting for opening bracket/parens

              origState.colno--;
              origState.index--;

              try {
                return orig_Parser_parseAggregate.apply(this);
              } catch (e) {
                var errState = getTokensState(this.tokens);

                var rethrow = function rethrow() {
                  lib._assign(_this.tokens, errState);

                  return e;
                }; // Reset to state before original parseAggregate called


                lib._assign(this.tokens, origState);

                this.peeked = false;
                var tok = this.peekToken();

                if (tok.type !== lexer.TOKEN_LEFT_BRACKET) {
                  throw rethrow();
                } else {
                  this.nextToken();
                }

                var node = new Slice(tok.lineno, tok.colno); // If we don't encounter a colon while parsing, this is not a slice,
                // so re-raise the original exception.

                var isSlice = false;

                for (var i = 0; i <= node.fields.length; i++) {
                  if (this.skip(lexer.TOKEN_RIGHT_BRACKET)) {
                    break;
                  }

                  if (i === node.fields.length) {
                    if (isSlice) {
                      this.fail('parseSlice: too many slice components', tok.lineno, tok.colno);
                    } else {
                      break;
                    }
                  }

                  if (this.skip(lexer.TOKEN_COLON)) {
                    isSlice = true;
                  } else {
                    var field = node.fields[i];
                    node[field] = this.parseExpression();
                    isSlice = this.skip(lexer.TOKEN_COLON) || isSlice;
                  }
                }

                if (!isSlice) {
                  throw rethrow();
                }

                return new nodes.Array(tok.lineno, tok.colno, [node]);
              }
            };
          }

          function sliceLookup(obj, start, stop, step) {
            obj = obj || [];

            if (start === null) {
              start = step < 0 ? obj.length - 1 : 0;
            }

            if (stop === null) {
              stop = step < 0 ? -1 : obj.length;
            } else if (stop < 0) {
              stop += obj.length;
            }

            if (start < 0) {
              start += obj.length;
            }

            var results = [];

            for (var i = start;; i += step) {
              if (i < 0 || i > obj.length) {
                break;
              }

              if (step > 0 && i >= stop) {
                break;
              }

              if (step < 0 && i <= stop) {
                break;
              }

              results.push(runtime.memberLookup(obj, i));
            }

            return results;
          }

          function hasOwnProp(obj, key) {
            return Object.prototype.hasOwnProperty.call(obj, key);
          }

          var ARRAY_MEMBERS = {
            pop: function pop(index) {
              if (index === undefined) {
                return this.pop();
              }

              if (index >= this.length || index < 0) {
                throw new Error('KeyError');
              }

              return this.splice(index, 1);
            },
            append: function append(element) {
              return this.push(element);
            },
            remove: function remove(element) {
              for (var i = 0; i < this.length; i++) {
                if (this[i] === element) {
                  return this.splice(i, 1);
                }
              }

              throw new Error('ValueError');
            },
            count: function count(element) {
              var count = 0;

              for (var i = 0; i < this.length; i++) {
                if (this[i] === element) {
                  count++;
                }
              }

              return count;
            },
            index: function index(element) {
              var i;

              if ((i = this.indexOf(element)) === -1) {
                throw new Error('ValueError');
              }

              return i;
            },
            find: function find(element) {
              return this.indexOf(element);
            },
            insert: function insert(index, elem) {
              return this.splice(index, 0, elem);
            }
          };
          var OBJECT_MEMBERS = {
            items: function items() {
              return lib._entries(this);
            },
            values: function values() {
              return lib._values(this);
            },
            keys: function keys() {
              return lib.keys(this);
            },
            get: function get(key, def) {
              var output = this[key];

              if (output === undefined) {
                output = def;
              }

              return output;
            },
            has_key: function has_key(key) {
              return hasOwnProp(this, key);
            },
            pop: function pop(key, def) {
              var output = this[key];

              if (output === undefined && def !== undefined) {
                output = def;
              } else if (output === undefined) {
                throw new Error('KeyError');
              } else {
                delete this[key];
              }

              return output;
            },
            popitem: function popitem() {
              var keys = lib.keys(this);

              if (!keys.length) {
                throw new Error('KeyError');
              }

              var k = keys[0];
              var val = this[k];
              delete this[k];
              return [k, val];
            },
            setdefault: function setdefault(key, def) {
              if (def === void 0) {
                def = null;
              }

              if (!(key in this)) {
                this[key] = def;
              }

              return this[key];
            },
            update: function update(kwargs) {
              lib._assign(this, kwargs);

              return null; // Always returns None
            }
          };
          OBJECT_MEMBERS.iteritems = OBJECT_MEMBERS.items;
          OBJECT_MEMBERS.itervalues = OBJECT_MEMBERS.values;
          OBJECT_MEMBERS.iterkeys = OBJECT_MEMBERS.keys;

          runtime.memberLookup = function memberLookup(obj, val, autoescape) {
            if (arguments.length === 4) {
              return sliceLookup.apply(this, arguments);
            }

            obj = obj || {}; // If the object is an object, return any of the methods that Python would
            // otherwise provide.

            if (lib.isArray(obj) && hasOwnProp(ARRAY_MEMBERS, val)) {
              return ARRAY_MEMBERS[val].bind(obj);
            }

            if (lib.isObject(obj) && hasOwnProp(OBJECT_MEMBERS, val)) {
              return OBJECT_MEMBERS[val].bind(obj);
            }

            return orig_memberLookup.apply(this, arguments);
          };

          return uninstall;
        }

        module.exports = installCompat;

        /***/
      }]
      /******/)
    );
  });

});
System.registerDynamic("github:theatlantic/theatlantic-nunjucks-helpers@1.6.1.json", [], true, function() {
  return {
    "main": "index.js"
  };
});

System.registerDynamic('github:theatlantic/theatlantic-nunjucks-helpers@1.6.1/lib/extensions/render.js', [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  /**
   * A 'render' extension for rendering components in Fractal
   *
   * @example
   *  {% render "@button" %}
   *
   * @example
   *  {% render "@button", { "modifier_class": "btn-small" } %}
   *
   * @example
   *  {% render "@button", { "modifier_class": "btn-small" }, true %}
   *
   * @see https://mozilla.github.io/nunjucks/api.html#custom-tags
   * @see https://github.com/frctl/nunjucks#render
   *
   * @param  {String} env           An instance of nunjucks.Environment
   * @param  {String} componentDir  The components template subdirectory
   * @param  {String} ext           The file extension
   *
   * @return {Object} An object type for the extension; use with 'new' operator
   */
  /* eslint-disable no-param-reassign, no-var, prefer-template */

  function RenderExtension(env, componentDir, ext) {
    if (typeof ext === 'undefined') {
      ext = '.html';
    }
    this.env = env;
    this.componentDir = componentDir;
    this.ext = ext;
    this.tags = ['render'];

    this.parse = function parse(parser, nodes) {
      var tok = parser.nextToken();
      var args = parser.parseSignature(null, true);

      parser.advanceAfterBlockEnd(tok.value);

      return new nodes.CallExtension(this, 'run', args);
    };

    this.run = function run(node, name, ctx, merge) {
      var tmplName = name.replace(/^@/, '');
      var rootContext = node.ctx;
      var context = ctx || rootContext;

      if (merge) {
        context = Object.assign({}, rootContext, context);
      }

      return this.env.render(this.componentDir + '/' + tmplName + this.ext, context);
    };
  }

  module.exports = RenderExtension;
});
System.register('theatlantic/js/utils/nunjucks.js', ['nunjucks/browser/nunjucks-slim', '../constants/url', 'accountsConfig', 'theatlantic-nunjucks-helpers/lib/extensions/render'], function (_export, _context) {
  "use strict";

  var Nunjucks, debug, accountsConfig, RenderExtension, env;


  /**
   * Export render function that abstracts some of the Nunjucks ugliness
   * @param  {String}   tmpl    The template name
   * @param  {Object}   context The context object
   * @return {Promise}          A promise resolved with the rendered template
   */
  function render(tmpl, context, options) {
    options = options || {};
    options.env = options.env || env;
    return new Promise(function (resolve, reject) {
      var path = 'hippo/components/' + tmpl + '.html';

      options.env.render(path, context, function (err, res) {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }

  _export('render', render);

  return {
    setters: [function (_nunjucksBrowserNunjucksSlim) {
      Nunjucks = _nunjucksBrowserNunjucksSlim.default;
    }, function (_constantsUrl) {
      debug = _constantsUrl.debug;
    }, function (_accountsConfig) {
      accountsConfig = _accountsConfig;
    }, function (_theatlanticNunjucksHelpersLibExtensionsRender) {
      RenderExtension = _theatlanticNunjucksHelpersLibExtensionsRender.default;
    }],
    execute: function () {
      env = new Nunjucks.Environment(null, {
        autoescape: false
      });


      env.addGlobal('component', function (tmpl, context) {
        var debug_components = debug;

        return env.render(tmpl, Object.assign({}, this.ctx, context, { debug_components: debug_components }));
      });

      env.addGlobal('accounts_url', accountsConfig.url);

      env.addExtension('render', new RenderExtension(env, 'hippo/components'));
    }
  };
});
System.registerDynamic("npm:jspm-nodelibs-url@0.2.1.json", [], true, function() {
  return {
    "main": "./url.js",
    "map": {
      "./url.js": {
        "browser": "url"
      }
    }
  };
});

System.registerDynamic("npm:punycode@1.3.2.json", [], true, function() {
  return {
    "main": "punycode.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    }
  };
});

System.registerDynamic('npm:punycode@1.3.2/punycode.js', [], true, function ($__require, exports, module) {
	var global = this || self,
	    GLOBAL = global;
	/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function (root) {

		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module && !module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
			root = freeGlobal;
		}

		/**
   * The `punycode` object.
   * @name punycode
   * @type Object
   */
		var punycode,


		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647,
		    // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		    tMin = 1,
		    tMax = 26,
		    skew = 38,
		    damp = 700,
		    initialBias = 72,
		    initialN = 128,
		    // 0x80
		delimiter = '-',
		    // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		    regexNonASCII = /[^\x20-\x7E]/,
		    // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
		    // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},


		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		    floor = Math.floor,
		    stringFromCharCode = String.fromCharCode,


		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
   * A generic error utility function.
   * @private
   * @param {String} type The error type.
   * @returns {Error} Throws a `RangeError` with the applicable error message.
   */
		function error(type) {
			throw RangeError(errors[type]);
		}

		/**
   * A generic `Array#map` utility function.
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function that gets called for every array
   * item.
   * @returns {Array} A new array of values returned by the callback function.
   */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
   * A simple `Array#map`-like wrapper to work with domain name strings or email
   * addresses.
   * @private
   * @param {String} domain The domain name or email address.
   * @param {Function} callback The function that gets called for every
   * character.
   * @returns {Array} A new string of characters returned by the callback
   * function.
   */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   * @see `punycode.ucs2.encode`
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode.ucs2
   * @name decode
   * @param {String} string The Unicode input string (UCS-2).
   * @returns {Array} The new array of code points.
   */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) {
						// low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
   * Creates a string based on an array of numeric code points.
   * @see `punycode.ucs2.decode`
   * @memberOf punycode.ucs2
   * @name encode
   * @param {Array} codePoints The array of numeric code points.
   * @returns {String} The new Unicode string (UCS-2).
   */
		function ucs2encode(array) {
			return map(array, function (value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
   * Converts a basic code point into a digit/integer.
   * @see `digitToBasic()`
   * @private
   * @param {Number} codePoint The basic numeric code point value.
   * @returns {Number} The numeric value of a basic code point (for use in
   * representing integers) in the range `0` to `base - 1`, or `base` if
   * the code point does not represent a value.
   */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
   * Converts a digit/integer into a basic code point.
   * @see `basicToDigit()`
   * @private
   * @param {Number} digit The numeric value of a basic code point.
   * @returns {Number} The basic code point whose value (when used for
   * representing integers) is `digit`, which needs to be in the range
   * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
   * used; else, the lowercase form is used. The behavior is undefined
   * if `flag` is non-zero and `digit` has no uppercase form.
   */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * http://tools.ietf.org/html/rfc3492#section-3.4
   * @private
   */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (; /* no initialization */delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
   * Converts a Punycode string of ASCII-only symbols to a string of Unicode
   * symbols.
   * @memberOf punycode
   * @param {String} input The Punycode string of ASCII-only symbols.
   * @returns {String} The resulting string of Unicode symbols.
   */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,

			/** Cached calculation results */
			baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength;) /* no final expression */{

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base;; /* no condition */k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;
				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);
			}

			return ucs2encode(output);
		}

		/**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   * @memberOf punycode
   * @param {String} input The string of Unicode symbols.
   * @returns {String} The resulting Punycode string of ASCII-only symbols.
   */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],

			/** `inputLength` will hold the number of code points in `input`. */
			inputLength,

			/** Cached calculation results */
			handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base;; /* no condition */k += base) {
							t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;
			}
			return output.join('');
		}

		/**
   * Converts a Punycode string representing a domain name or an email address
   * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
   * it doesn't matter if you call it on a string that has already been
   * converted to Unicode.
   * @memberOf punycode
   * @param {String} input The Punycoded domain name or email address to
   * convert to Unicode.
   * @returns {String} The Unicode representation of the given Punycode
   * string.
   */
		function toUnicode(input) {
			return mapDomain(input, function (string) {
				return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
			});
		}

		/**
   * Converts a Unicode string representing a domain name or an email address to
   * Punycode. Only the non-ASCII parts of the domain name will be converted,
   * i.e. it doesn't matter if you call it with a domain that's already in
   * ASCII.
   * @memberOf punycode
   * @param {String} input The domain name or email address to convert, as a
   * Unicode string.
   * @returns {String} The Punycode representation of the given domain name or
   * email address.
   */
		function toASCII(input) {
			return mapDomain(input, function (string) {
				return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
    * A string representing the current Punycode.js version number.
    * @memberOf punycode
    * @type String
    */
			'version': '1.3.2',
			/**
    * An object of methods to convert from JavaScript's internal character
    * representation (UCS-2) to Unicode code points, and back.
    * @see <https://mathiasbynens.be/notes/javascript-encoding>
    * @memberOf punycode
    * @type Object
    */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (typeof undefined == 'function' && typeof define.amd == 'object' && define.amd) {
			define('punycode', function () {
				return punycode;
			});
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) {
				// in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else {
				// in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else {
			// in Rhino or a web browser
			root.punycode = punycode;
		}
	})(exports);
});
System.registerDynamic('npm:url@0.11.0/util.js', [], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  module.exports = {
    isString: function (arg) {
      return typeof arg === 'string';
    },
    isObject: function (arg) {
      return typeof arg === 'object' && arg !== null;
    },
    isNull: function (arg) {
      return arg === null;
    },
    isNullOrUndefined: function (arg) {
      return arg == null;
    }
  };
});
System.registerDynamic('npm:querystring@0.2.0/decode.js', [], true, function ($__require, exports, module) {
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  'use strict';

  // If obj.hasOwnProperty has been overridden, then calling
  // obj.hasOwnProperty(prop) will break.
  // See: https://github.com/joyent/node/issues/1707

  var global = this || self,
      GLOBAL = global;
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  module.exports = function (qs, sep, eq, options) {
    sep = sep || '&';
    eq = eq || '=';
    var obj = {};

    if (typeof qs !== 'string' || qs.length === 0) {
      return obj;
    }

    var regexp = /\+/g;
    qs = qs.split(sep);

    var maxKeys = 1000;
    if (options && typeof options.maxKeys === 'number') {
      maxKeys = options.maxKeys;
    }

    var len = qs.length;
    // maxKeys <= 0 means that we should not limit keys count
    if (maxKeys > 0 && len > maxKeys) {
      len = maxKeys;
    }

    for (var i = 0; i < len; ++i) {
      var x = qs[i].replace(regexp, '%20'),
          idx = x.indexOf(eq),
          kstr,
          vstr,
          k,
          v;

      if (idx >= 0) {
        kstr = x.substr(0, idx);
        vstr = x.substr(idx + 1);
      } else {
        kstr = x;
        vstr = '';
      }

      k = decodeURIComponent(kstr);
      v = decodeURIComponent(vstr);

      if (!hasOwnProperty(obj, k)) {
        obj[k] = v;
      } else if (Array.isArray(obj[k])) {
        obj[k].push(v);
      } else {
        obj[k] = [obj[k], v];
      }
    }

    return obj;
  };
});
System.registerDynamic('npm:querystring@0.2.0/encode.js', [], true, function ($__require, exports, module) {
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var stringifyPrimitive = function (v) {
    switch (typeof v) {
      case 'string':
        return v;

      case 'boolean':
        return v ? 'true' : 'false';

      case 'number':
        return isFinite(v) ? v : '';

      default:
        return '';
    }
  };

  module.exports = function (obj, sep, eq, name) {
    sep = sep || '&';
    eq = eq || '=';
    if (obj === null) {
      obj = undefined;
    }

    if (typeof obj === 'object') {
      return Object.keys(obj).map(function (k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (Array.isArray(obj[k])) {
          return obj[k].map(function (v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
          }).join(sep);
        } else {
          return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
        }
      }).join(sep);
    }

    if (!name) return '';
    return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
  };
});
System.registerDynamic("npm:querystring@0.2.0.json", [], true, function() {
  return {
    "main": "index.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    },
    "map": {
      "./test": "./test/index.js"
    }
  };
});

System.registerDynamic('npm:querystring@0.2.0/index.js', ['./decode', './encode'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  exports.decode = exports.parse = $__require('./decode');
  exports.encode = exports.stringify = $__require('./encode');
});
System.registerDynamic("npm:url@0.11.0.json", [], true, function() {
  return {
    "main": "url.js",
    "format": "cjs",
    "meta": {
      "*.json": {
        "format": "json"
      }
    }
  };
});

System.registerDynamic('npm:url@0.11.0/url.js', ['punycode', './util', 'querystring'], true, function ($__require, exports, module) {
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var punycode = $__require('punycode');
  var util = $__require('./util');

  exports.parse = urlParse;
  exports.resolve = urlResolve;
  exports.resolveObject = urlResolveObject;
  exports.format = urlFormat;

  exports.Url = Url;

  function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
  }

  // Reference: RFC 3986, RFC 1808, RFC 2396

  // define these here so at least they only have to be
  // compiled once on the first module load.
  var protocolPattern = /^([a-z0-9.+-]+:)/i,
      portPattern = /:[0-9]*$/,


  // Special case for a simple path URL
  simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,


  // RFC 2396: characters reserved for delimiting URLs.
  // We actually just auto-escape these.
  delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],


  // RFC 2396: characters not allowed for various reasons.
  unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),


  // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
  autoEscape = ['\''].concat(unwise),

  // Characters that are never ever allowed in a hostname.
  // Note that any invalid chars are also handled, but these
  // are the ones that are *expected* to be seen, so we fast-path
  // them.
  nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
      hostEndingChars = ['/', '?', '#'],
      hostnameMaxLen = 255,
      hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
      hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,

  // protocols that can allow "unsafe" and "unwise" chars.
  unsafeProtocol = {
    'javascript': true,
    'javascript:': true
  },

  // protocols that never have a hostname.
  hostlessProtocol = {
    'javascript': true,
    'javascript:': true
  },

  // protocols that always contain a // bit.
  slashedProtocol = {
    'http': true,
    'https': true,
    'ftp': true,
    'gopher': true,
    'file': true,
    'http:': true,
    'https:': true,
    'ftp:': true,
    'gopher:': true,
    'file:': true
  },
      querystring = $__require('querystring');

  function urlParse(url, parseQueryString, slashesDenoteHost) {
    if (url && util.isObject(url) && url instanceof Url) return url;

    var u = new Url();
    u.parse(url, parseQueryString, slashesDenoteHost);
    return u;
  }

  Url.prototype.parse = function (url, parseQueryString, slashesDenoteHost) {
    if (!util.isString(url)) {
      throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
    }

    // Copy chrome, IE, opera backslash-handling behavior.
    // Back slashes before the query string get converted to forward slashes
    // See: https://code.google.com/p/chromium/issues/detail?id=25916
    var queryIndex = url.indexOf('?'),
        splitter = queryIndex !== -1 && queryIndex < url.indexOf('#') ? '?' : '#',
        uSplit = url.split(splitter),
        slashRegex = /\\/g;
    uSplit[0] = uSplit[0].replace(slashRegex, '/');
    url = uSplit.join(splitter);

    var rest = url;

    // trim before proceeding.
    // This is to support parse stuff like "  http://foo.com  \n"
    rest = rest.trim();

    if (!slashesDenoteHost && url.split('#').length === 1) {
      // Try fast path regexp
      var simplePath = simplePathPattern.exec(rest);
      if (simplePath) {
        this.path = rest;
        this.href = rest;
        this.pathname = simplePath[1];
        if (simplePath[2]) {
          this.search = simplePath[2];
          if (parseQueryString) {
            this.query = querystring.parse(this.search.substr(1));
          } else {
            this.query = this.search.substr(1);
          }
        } else if (parseQueryString) {
          this.search = '';
          this.query = {};
        }
        return this;
      }
    }

    var proto = protocolPattern.exec(rest);
    if (proto) {
      proto = proto[0];
      var lowerProto = proto.toLowerCase();
      this.protocol = lowerProto;
      rest = rest.substr(proto.length);
    }

    // figure out if it's got a host
    // user@server is *always* interpreted as a hostname, and url
    // resolution will treat //foo/bar as host=foo,path=bar because that's
    // how the browser resolves relative URLs.
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var slashes = rest.substr(0, 2) === '//';
      if (slashes && !(proto && hostlessProtocol[proto])) {
        rest = rest.substr(2);
        this.slashes = true;
      }
    }

    if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {

      // there's a hostname.
      // the first instance of /, ?, ;, or # ends the host.
      //
      // If there is an @ in the hostname, then non-host chars *are* allowed
      // to the left of the last @ sign, unless some host-ending character
      // comes *before* the @-sign.
      // URLs are obnoxious.
      //
      // ex:
      // http://a@b@c/ => user:a@b host:c
      // http://a@b?@c => user:a host:c path:/?@c

      // v0.12 TODO(isaacs): This is not quite how Chrome does things.
      // Review our test case against browsers more comprehensively.

      // find the first instance of any hostEndingChars
      var hostEnd = -1;
      for (var i = 0; i < hostEndingChars.length; i++) {
        var hec = rest.indexOf(hostEndingChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
      }

      // at this point, either we have an explicit point where the
      // auth portion cannot go past, or the last @ char is the decider.
      var auth, atSign;
      if (hostEnd === -1) {
        // atSign can be anywhere.
        atSign = rest.lastIndexOf('@');
      } else {
        // atSign must be in auth portion.
        // http://a@b/c@d => host:b auth:a path:/c@d
        atSign = rest.lastIndexOf('@', hostEnd);
      }

      // Now we have a portion which is definitely the auth.
      // Pull that off.
      if (atSign !== -1) {
        auth = rest.slice(0, atSign);
        rest = rest.slice(atSign + 1);
        this.auth = decodeURIComponent(auth);
      }

      // the host is the remaining to the left of the first non-host char
      hostEnd = -1;
      for (var i = 0; i < nonHostChars.length; i++) {
        var hec = rest.indexOf(nonHostChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
      }
      // if we still have not hit it, then the entire thing is a host.
      if (hostEnd === -1) hostEnd = rest.length;

      this.host = rest.slice(0, hostEnd);
      rest = rest.slice(hostEnd);

      // pull out port.
      this.parseHost();

      // we've indicated that there is a hostname,
      // so even if it's empty, it has to be present.
      this.hostname = this.hostname || '';

      // if hostname begins with [ and ends with ]
      // assume that it's an IPv6 address.
      var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';

      // validate a little.
      if (!ipv6Hostname) {
        var hostparts = this.hostname.split(/\./);
        for (var i = 0, l = hostparts.length; i < l; i++) {
          var part = hostparts[i];
          if (!part) continue;
          if (!part.match(hostnamePartPattern)) {
            var newpart = '';
            for (var j = 0, k = part.length; j < k; j++) {
              if (part.charCodeAt(j) > 127) {
                // we replace non-ASCII char with a temporary placeholder
                // we need this to make sure size of hostname is not
                // broken by replacing non-ASCII by nothing
                newpart += 'x';
              } else {
                newpart += part[j];
              }
            }
            // we test again with ASCII char only
            if (!newpart.match(hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i);
              var notHost = hostparts.slice(i + 1);
              var bit = part.match(hostnamePartStart);
              if (bit) {
                validParts.push(bit[1]);
                notHost.unshift(bit[2]);
              }
              if (notHost.length) {
                rest = '/' + notHost.join('.') + rest;
              }
              this.hostname = validParts.join('.');
              break;
            }
          }
        }
      }

      if (this.hostname.length > hostnameMaxLen) {
        this.hostname = '';
      } else {
        // hostnames are always lower case.
        this.hostname = this.hostname.toLowerCase();
      }

      if (!ipv6Hostname) {
        // IDNA Support: Returns a punycoded representation of "domain".
        // It only converts parts of the domain name that
        // have non-ASCII characters, i.e. it doesn't matter if
        // you call it with a domain that already is ASCII-only.
        this.hostname = punycode.toASCII(this.hostname);
      }

      var p = this.port ? ':' + this.port : '';
      var h = this.hostname || '';
      this.host = h + p;
      this.href += this.host;

      // strip [ and ] from the hostname
      // the host field still retains them, though
      if (ipv6Hostname) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
        if (rest[0] !== '/') {
          rest = '/' + rest;
        }
      }
    }

    // now rest is set to the post-host stuff.
    // chop off any delim chars.
    if (!unsafeProtocol[lowerProto]) {

      // First, make 100% sure that any "autoEscape" chars get
      // escaped, even if encodeURIComponent doesn't think they
      // need to be.
      for (var i = 0, l = autoEscape.length; i < l; i++) {
        var ae = autoEscape[i];
        if (rest.indexOf(ae) === -1) continue;
        var esc = encodeURIComponent(ae);
        if (esc === ae) {
          esc = escape(ae);
        }
        rest = rest.split(ae).join(esc);
      }
    }

    // chop off from the tail first.
    var hash = rest.indexOf('#');
    if (hash !== -1) {
      // got a fragment string.
      this.hash = rest.substr(hash);
      rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf('?');
    if (qm !== -1) {
      this.search = rest.substr(qm);
      this.query = rest.substr(qm + 1);
      if (parseQueryString) {
        this.query = querystring.parse(this.query);
      }
      rest = rest.slice(0, qm);
    } else if (parseQueryString) {
      // no query string, but parseQueryString still requested
      this.search = '';
      this.query = {};
    }
    if (rest) this.pathname = rest;
    if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
      this.pathname = '/';
    }

    //to support http.request
    if (this.pathname || this.search) {
      var p = this.pathname || '';
      var s = this.search || '';
      this.path = p + s;
    }

    // finally, reconstruct the href based on what has been validated.
    this.href = this.format();
    return this;
  };

  // format a parsed object into a url string
  function urlFormat(obj) {
    // ensure it's an object, and not a string url.
    // If it's an obj, this is a no-op.
    // this way, you can call url_format() on strings
    // to clean up potentially wonky urls.
    if (util.isString(obj)) obj = urlParse(obj);
    if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
    return obj.format();
  }

  Url.prototype.format = function () {
    var auth = this.auth || '';
    if (auth) {
      auth = encodeURIComponent(auth);
      auth = auth.replace(/%3A/i, ':');
      auth += '@';
    }

    var protocol = this.protocol || '',
        pathname = this.pathname || '',
        hash = this.hash || '',
        host = false,
        query = '';

    if (this.host) {
      host = auth + this.host;
    } else if (this.hostname) {
      host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');
      if (this.port) {
        host += ':' + this.port;
      }
    }

    if (this.query && util.isObject(this.query) && Object.keys(this.query).length) {
      query = querystring.stringify(this.query);
    }

    var search = this.search || query && '?' + query || '';

    if (protocol && protocol.substr(-1) !== ':') protocol += ':';

    // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
    // unless they had them to begin with.
    if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
      host = '//' + (host || '');
      if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
    } else if (!host) {
      host = '';
    }

    if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
    if (search && search.charAt(0) !== '?') search = '?' + search;

    pathname = pathname.replace(/[?#]/g, function (match) {
      return encodeURIComponent(match);
    });
    search = search.replace('#', '%23');

    return protocol + host + pathname + search + hash;
  };

  function urlResolve(source, relative) {
    return urlParse(source, false, true).resolve(relative);
  }

  Url.prototype.resolve = function (relative) {
    return this.resolveObject(urlParse(relative, false, true)).format();
  };

  function urlResolveObject(source, relative) {
    if (!source) return relative;
    return urlParse(source, false, true).resolveObject(relative);
  }

  Url.prototype.resolveObject = function (relative) {
    if (util.isString(relative)) {
      var rel = new Url();
      rel.parse(relative, false, true);
      relative = rel;
    }

    var result = new Url();
    var tkeys = Object.keys(this);
    for (var tk = 0; tk < tkeys.length; tk++) {
      var tkey = tkeys[tk];
      result[tkey] = this[tkey];
    }

    // hash is always overridden, no matter what.
    // even href="" will remove it.
    result.hash = relative.hash;

    // if the relative url is empty, then there's nothing left to do here.
    if (relative.href === '') {
      result.href = result.format();
      return result;
    }

    // hrefs like //foo/bar always cut to the protocol.
    if (relative.slashes && !relative.protocol) {
      // take everything except the protocol from relative
      var rkeys = Object.keys(relative);
      for (var rk = 0; rk < rkeys.length; rk++) {
        var rkey = rkeys[rk];
        if (rkey !== 'protocol') result[rkey] = relative[rkey];
      }

      //urlParse appends trailing / to urls like http://www.example.com
      if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
        result.path = result.pathname = '/';
      }

      result.href = result.format();
      return result;
    }

    if (relative.protocol && relative.protocol !== result.protocol) {
      // if it's a known url protocol, then changing
      // the protocol does weird things
      // first, if it's not file:, then we MUST have a host,
      // and if there was a path
      // to begin with, then we MUST have a path.
      // if it is file:, then the host is dropped,
      // because that's known to be hostless.
      // anything else is assumed to be absolute.
      if (!slashedProtocol[relative.protocol]) {
        var keys = Object.keys(relative);
        for (var v = 0; v < keys.length; v++) {
          var k = keys[v];
          result[k] = relative[k];
        }
        result.href = result.format();
        return result;
      }

      result.protocol = relative.protocol;
      if (!relative.host && !hostlessProtocol[relative.protocol]) {
        var relPath = (relative.pathname || '').split('/');
        while (relPath.length && !(relative.host = relPath.shift()));
        if (!relative.host) relative.host = '';
        if (!relative.hostname) relative.hostname = '';
        if (relPath[0] !== '') relPath.unshift('');
        if (relPath.length < 2) relPath.unshift('');
        result.pathname = relPath.join('/');
      } else {
        result.pathname = relative.pathname;
      }
      result.search = relative.search;
      result.query = relative.query;
      result.host = relative.host || '';
      result.auth = relative.auth;
      result.hostname = relative.hostname || relative.host;
      result.port = relative.port;
      // to support http.request
      if (result.pathname || result.search) {
        var p = result.pathname || '';
        var s = result.search || '';
        result.path = p + s;
      }
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    }

    var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/',
        isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/',
        mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname,
        removeAllDots = mustEndAbs,
        srcPath = result.pathname && result.pathname.split('/') || [],
        relPath = relative.pathname && relative.pathname.split('/') || [],
        psychotic = result.protocol && !slashedProtocol[result.protocol];

    // if the url is a non-slashed url, then relative
    // links like ../.. should be able
    // to crawl up to the hostname, as well.  This is strange.
    // result.protocol has already been set by now.
    // Later on, put the first path part into the host field.
    if (psychotic) {
      result.hostname = '';
      result.port = null;
      if (result.host) {
        if (srcPath[0] === '') srcPath[0] = result.host;else srcPath.unshift(result.host);
      }
      result.host = '';
      if (relative.protocol) {
        relative.hostname = null;
        relative.port = null;
        if (relative.host) {
          if (relPath[0] === '') relPath[0] = relative.host;else relPath.unshift(relative.host);
        }
        relative.host = null;
      }
      mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
    }

    if (isRelAbs) {
      // it's absolute.
      result.host = relative.host || relative.host === '' ? relative.host : result.host;
      result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
      result.search = relative.search;
      result.query = relative.query;
      srcPath = relPath;
      // fall through to the dot-handling below.
    } else if (relPath.length) {
      // it's relative
      // throw away the existing file, and take the new path instead.
      if (!srcPath) srcPath = [];
      srcPath.pop();
      srcPath = srcPath.concat(relPath);
      result.search = relative.search;
      result.query = relative.query;
    } else if (!util.isNullOrUndefined(relative.search)) {
      // just pull out the search.
      // like href='?foo'.
      // Put this after the other two cases because it simplifies the booleans
      if (psychotic) {
        result.hostname = result.host = srcPath.shift();
        //occationaly the auth can get stuck only in host
        //this especially happens in cases like
        //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
        var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.host = result.hostname = authInHost.shift();
        }
      }
      result.search = relative.search;
      result.query = relative.query;
      //to support http.request
      if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
        result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
      }
      result.href = result.format();
      return result;
    }

    if (!srcPath.length) {
      // no path at all.  easy.
      // we've already handled the other stuff above.
      result.pathname = null;
      //to support http.request
      if (result.search) {
        result.path = '/' + result.search;
      } else {
        result.path = null;
      }
      result.href = result.format();
      return result;
    }

    // if a url ENDs in . or .., then it must get a trailing slash.
    // however, if it ends in anything else non-slashy,
    // then it must NOT get a trailing slash.
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === '.' || last === '..') || last === '';

    // strip single dots, resolve double dots to parent dir
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = srcPath.length; i >= 0; i--) {
      last = srcPath[i];
      if (last === '.') {
        srcPath.splice(i, 1);
      } else if (last === '..') {
        srcPath.splice(i, 1);
        up++;
      } else if (up) {
        srcPath.splice(i, 1);
        up--;
      }
    }

    // if the path is allowed to go above the root, restore leading ..s
    if (!mustEndAbs && !removeAllDots) {
      for (; up--; up) {
        srcPath.unshift('..');
      }
    }

    if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
      srcPath.unshift('');
    }

    if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') {
      srcPath.push('');
    }

    var isAbsolute = srcPath[0] === '' || srcPath[0] && srcPath[0].charAt(0) === '/';

    // put the host back
    if (psychotic) {
      result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }

    mustEndAbs = mustEndAbs || result.host && srcPath.length;

    if (mustEndAbs && !isAbsolute) {
      srcPath.unshift('');
    }

    if (!srcPath.length) {
      result.pathname = null;
      result.path = null;
    } else {
      result.pathname = srcPath.join('/');
    }

    //to support request.http
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
    }
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  };

  Url.prototype.parseHost = function () {
    var host = this.host;
    var port = portPattern.exec(host);
    if (port) {
      port = port[0];
      if (port !== ':') {
        this.port = port.substr(1);
      }
      host = host.substr(0, host.length - port.length);
    }
    if (host) this.hostname = host;
  };
});
System.register('theatlantic/js/constants/url.js', ['url'], function (_export, _context) {
  "use strict";

  var url, parsedUrl, debug, disable, preview;


  /**
   * Convert non array value to array containing that value
   * @param  {String} val The value to convert
   * @return {Array}      The converted array
   */
  function toArray(val) {
    if (Array.isArray(val)) {
      return val;
    }
    return [].concat(val).filter(function (v) {
      return v !== undefined;
    });
  }

  /**
   * The parsed url of the page
   */
  /**
   * Widely used global variables and constants
   * @module constants/url
   */
  return {
    setters: [function (_url) {
      url = _url.default;
    }],
    execute: function () {
      _export('parsedUrl', parsedUrl = url.parse(window.location.href, true));

      _export('parsedUrl', parsedUrl);

      _export('debug', debug = toArray(parsedUrl.query.debug));

      _export('debug', debug);

      _export('disable', disable = toArray(parsedUrl.query.disable));

      _export('disable', disable);

      _export('preview', preview = toArray(parsedUrl.query.preview));

      _export('preview', preview);
    }
  };
});
System.register('theatlantic/js/utils/events.js', ['../constants/url'], function (_export, _context) {
  "use strict";

  var debug, styles;


  /**
   * Dispatch a custom event on a specified element
   *
   * @param  {Node}   elem            The DOM node to fire the event on
   * @param  {Object} event           Custom Event object
   * @return {void}
   * @see    https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent
   */
  function customEvent(elem, event) {
    elem.dispatchEvent(event);
  }

  /**
   * Dispatch a data event on a specified element
   *
   * @param  {Node}   elem            The DOM node to fire the event on
   * @param  {String} typeArg         What the event will be referred to
   * @param  {Object} customEventInit An object of event options
   * @return {void}
   */
  /**
   * Utilities for using custom events
   * @module utils/events
   */

  function dataEvent(elem, typeArg, customEventInit) {
    var event = new window.CustomEvent(typeArg, customEventInit);

    customEvent(elem, event);

    //
    // If the debug string includes data,
    // log details to console
    //
    if (debug.includes('data')) {
      /* eslint-disable no-console */
      var type = event.type,
          detail = event.detail;

      console.info('%c ' + type, styles.event);
      console.table(detail);
    }
  }
  _export('dataEvent', dataEvent);

  return {
    setters: [function (_constantsUrl) {
      debug = _constantsUrl.debug;
    }],
    execute: function () {
      styles = {
        event: 'color: red; font-size: 18px'
      };
    }
  };
});
System.register("theatlantic/js/globals/dataLayer.js", [], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      /**
       * Export a live-binding of the dataLayer so we don't have to typecheck it everywhere.
       */
      window.dataLayer = window.dataLayer || [];

      _export("default", window.dataLayer);
    }
  };
});
System.register('theatlantic/js/paywall/non-metered-nudge.js', ['npm:systemjs-plugin-babel@0.0.25/regenerator-runtime.js', 'npm:systemjs-plugin-babel@0.0.25/babel-helpers/asyncToGenerator.js', 'hippo/components/non-metered-nudge', '../utils/nunjucks', '../utils/events', '../globals/dataLayer', 'pageInfo'], function (_export, _context2) {
  "use strict";

  var _regeneratorRuntime, _asyncToGenerator, render, dataEvent, dataLayer, pageInfo, _this, dispatchDataEvent, activateCloseButton, activateClickLinkListener, isHidden, showNonMeteredNudge, handleHiddenNonMeteredNudge, renderNonMeteredNudge;

  return {
    setters: [function (_npmSystemjsPluginBabel0025RegeneratorRuntimeJs) {
      _regeneratorRuntime = _npmSystemjsPluginBabel0025RegeneratorRuntimeJs.default;
    }, function (_npmSystemjsPluginBabel0025BabelHelpersAsyncToGeneratorJs) {
      _asyncToGenerator = _npmSystemjsPluginBabel0025BabelHelpersAsyncToGeneratorJs.default;
    }, function (_hippoComponentsNonMeteredNudge) {}, function (_utilsNunjucks) {
      render = _utilsNunjucks.render;
    }, function (_utilsEvents) {
      dataEvent = _utilsEvents.dataEvent;
    }, function (_globalsDataLayer) {
      dataLayer = _globalsDataLayer.default;
    }, function (_pageInfo) {
      pageInfo = _pageInfo;
    }],
    execute: function () {
      _this = this;

      dispatchDataEvent = function dispatchDataEvent(action) {
        var detail = {
          action: action,
          label: 'non-metered nudge',
          value: ''
        };
        dataEvent(window, 'nudge:interaction', { detail: detail });
      };

      activateCloseButton = function activateCloseButton(container) {
        var closeButton = container.getElementsByClassName('js-non-metered-nudge-close')[0];
        closeButton.addEventListener('click', function () {
          dispatchDataEvent('nudge:user_close');
          container.remove();
        });
      };

      activateClickLinkListener = function activateClickLinkListener(container) {
        var clickLink = container.getElementsByClassName('js-non-metered-nudge-link')[0];
        clickLink.addEventListener('click', function () {
          dispatchDataEvent('nudge:click');
        });
      };

      isHidden = function isHidden() {
        // nudge is revealed upon switch to slim nav, which requires IntersectionObserver support.
        return pageInfo.primary_channel === 'homepage' && window.IntersectionObserver;
      };

      showNonMeteredNudge = function showNonMeteredNudge(container) {
        container.classList.add('is-visible');

        var dataObject = {
          nudgeTemplate: 'non-metered nudge',
          event: 'Nudge Template Set'
        };
        dataLayer.push(dataObject);
      };

      _export('handleHiddenNonMeteredNudge', handleHiddenNonMeteredNudge = function handleHiddenNonMeteredNudge() {
        var nudge = document.getElementsByClassName('js-non-metered-nudge')[0];
        if (nudge && !nudge.classList.contains('is-visible')) showNonMeteredNudge(nudge);
      });

      _export('handleHiddenNonMeteredNudge', handleHiddenNonMeteredNudge);

      _export('renderNonMeteredNudge', renderNonMeteredNudge = function () {
        var _ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee() {
          var coronaCoverage, nudgeContainer;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  coronaCoverage = pageInfo.categories && pageInfo.categories.indexOf('Coronavirus: COVID-19') !== -1;
                  nudgeContainer = document.createElement('div');

                  nudgeContainer.className = 'c-non-metered-nudge js-non-metered-nudge';
                  nudgeContainer.tabIndex = -1;
                  if (!isHidden()) showNonMeteredNudge(nudgeContainer);
                  if (pageInfo.primary_channel !== 'homepage') nudgeContainer.classList.add('c-non-metered-nudge--non-homepage');
                  if (coronaCoverage) nudgeContainer.classList.add('c-non-metered-nudge--article');
                  _context.next = 9;
                  return render('non-metered-nudge', { coronaCoverage: coronaCoverage });

                case 9:
                  nudgeContainer.innerHTML = _context.sent;

                  document.body.appendChild(nudgeContainer);
                  activateClickLinkListener(nudgeContainer);
                  activateCloseButton(nudgeContainer);

                case 13:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }));

        return function renderNonMeteredNudge() {
          return _ref.apply(this, arguments);
        };
      }());

      _export('renderNonMeteredNudge', renderNonMeteredNudge);
    }
  };
});
System.register('theatlantic/js/lacroix/components/navigation.js', ['../../utils/sticky-support', '../../paywall/non-metered-nudge'], function (_export, _context) {
  "use strict";

  var positionStickySupport, handleHiddenNonMeteredNudge, navHiddenClass, overlayHiddenClass, activeClass, expandedClass, menuIcon, hamburger, navigation, navList, overlay, expandedNav, openNav, handleBodyClick, closeNav, supportsSticky, bigA, menuItems, hamburgerMenu, navLines, smallA, isHomepage, cineflexAdjustment, observeNav;
  return {
    setters: [function (_utilsStickySupport) {
      positionStickySupport = _utilsStickySupport.positionStickySupport;
    }, function (_paywallNonMeteredNudge) {
      handleHiddenNonMeteredNudge = _paywallNonMeteredNudge.handleHiddenNonMeteredNudge;
    }],
    execute: function () {
      navHiddenClass = 'u-hidden';
      overlayHiddenClass = 'is-hidden';
      activeClass = 'is-active';
      expandedClass = 'is-expanded';
      menuIcon = document.getElementById('hamburger-menu');
      hamburger = document.getElementById('hamburger-icon');
      navigation = document.getElementById('main-navigation--lacroix');
      navList = document.getElementById('nav-list');
      overlay = document.querySelector('.js-overlay');
      expandedNav = document.getElementById('expanded-nav');

      openNav = function openNav(expandedNavContainer) {
        menuIcon.setAttribute('aria-expanded', true);
        document.body.classList.add('js-nav-menu-open');
        overlay.classList.remove(overlayHiddenClass);
        expandedNavContainer.classList.remove(navHiddenClass);
        navigation.classList.add(expandedClass);
        navList.classList.add(expandedClass);
        hamburger.classList.add(activeClass);
        document.body.addEventListener('click', handleBodyClick);
      };

      handleBodyClick = function handleBodyClick(e) {
        if (e.target.classList.contains('js-overlay')) {
          closeNav(expandedNav);
        }
      };

      closeNav = function closeNav(expandedNavContainer) {
        menuIcon.setAttribute('aria-expanded', false);
        document.body.classList.remove('js-nav-menu-open');
        overlay.classList.add(overlayHiddenClass);
        expandedNavContainer.classList.add(navHiddenClass);
        navigation.classList.remove(expandedClass);
        navList.classList.remove(expandedClass);
        hamburger.classList.remove(activeClass);
        document.body.removeEventListener('click', handleBodyClick);
      };

      menuIcon.addEventListener('click', function () {
        var isHidden = expandedNav.classList.contains(navHiddenClass);
        if (isHidden) {
          openNav(expandedNav);
        } else {
          closeNav(expandedNav);
        }
      });

      /* add intersection observer to slide lefthand nav elements into slim nav on scroll */
      supportsSticky = positionStickySupport();
      bigA = document.getElementById('big-a');
      menuItems = document.getElementById('nav-list');
      hamburgerMenu = document.querySelector('.c-expanded-nav');
      navLines = document.querySelector('.c-nav__before');
      smallA = document.getElementById('small-a');
      isHomepage = Atlantic.page_info.view === 'homepage' || Atlantic.page_info.view === 'international_homepage';


      // if it's NOT a legacy browser (aka IE 11), remove the 'legacy' class
      if (supportsSticky) {
        navigation.classList.remove('legacy');
      }

      // if the cineflex ad is present, we need position the lines on the big A nav differently

      cineflexAdjustment = function cineflexAdjustment() {
        var navLinesPositioned = navLines.classList.contains('c-nav__before--cineflex');
        if (navLinesPositioned) {
          navLines.classList.remove('c-nav__before--cineflex');
        } else {
          navLines.classList.add('c-nav__before--cineflex');
        }
      };

      observeNav = function observeNav() {
        var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            var isMobile = window.innerWidth >= 576;
            var cineflexAd = false;

            if (entry.isIntersecting && isMobile) {
              cineflexAd = document.querySelector('.js-cineflex-ad').classList.contains('ad-loaded');
              menuItems.classList.remove('c-nav__list--menu--sticky');
              hamburgerMenu.classList.remove('is-slim');
              smallA.classList.remove('c-nav__item--small-a--displayed');
              if (cineflexAd) {
                cineflexAdjustment();
              }
            } else if (isMobile) {
              cineflexAd = document.querySelector('.js-cineflex-ad').classList.contains('ad-loaded');
              menuItems.classList.add('c-nav__list--menu--sticky');
              hamburgerMenu.classList.add('is-slim');
              smallA.classList.add('c-nav__item--small-a--displayed');
              if (cineflexAd) {
                cineflexAdjustment();
              }
            }
            if (!entry.isIntersecting) handleHiddenNonMeteredNudge();
          });
        }, { rootMargin: '0px 0px 0px 0px' });

        observer.observe(bigA);
      };

      // run the observer only if it's the homepage and supports both sticky and intersectionObserver
      if (supportsSticky && isHomepage && window.IntersectionObserver) {
        observeNav();
      }
    }
  };
});
System.register('theatlantic/js/main.js', ['css', 'nunjucks/browser/nunjucks-slim', './constants/globals', './utils/ads', './utils/analytics', './utils/lazysizes', './utils/log', './utils/endpoints', './utils/user', './utils/namespace', './paywall/paywall', './paywall/onboarding', './components/breaking-news', './components/authentication', './lacroix/components/share-social', './lacroix/components/navigation'], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_css) {}, function (_nunjucksBrowserNunjucksSlim) {}, function (_constantsGlobals) {}, function (_utilsAds) {}, function (_utilsAnalytics) {}, function (_utilsLazysizes) {}, function (_utilsLog) {}, function (_utilsEndpoints) {}, function (_utilsUser) {}, function (_utilsNamespace) {}, function (_paywallPaywall) {}, function (_paywallOnboarding) {}, function (_componentsBreakingNews) {}, function (_componentsAuthentication) {}, function (_lacroixComponentsShareSocial) {}, function (_lacroixComponentsNavigation) {}],
    execute: function () {}
  };
});
(function injectStyle(css) {
    var style = document.createElement('style');
    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(style);
  })
([
"/* Gulp b2b must be run in order for changes to this file to be relected in",
"   breakpoints.json. This task is part of the build and also can be run independently */",
"/* stylelint-disable max-nesting-depth */",
".c-ad.ad-loaded--standard::before, .c-ad.ad-loaded--responsive::before {",
"  font-size: 10px;",
"  font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;",
"  display: block;",
"  color: #5e6a74;",
"  content: 'Advertisement';",
"  font-family: \"Graphik\", -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;",
"  letter-spacing: 0.5px;",
"  padding-bottom: 4px;",
"  text-align: center;",
"  text-transform: uppercase;",
"}",
".no-js .c-ad.ad-loaded--standard::before,",
".fonts-loaded .c-ad.ad-loaded--standard::before, .no-js .c-ad.ad-loaded--responsive::before,",
".fonts-loaded .c-ad.ad-loaded--responsive::before {",
"  font-family: \"Graphik\", -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;",
"}",
".ad-boxrr-wrapper .c-ad.ad-loaded {",
"  margin-bottom: 64px;",
"  position: relative;",
"}",
".ad-boxrr-wrapper .c-ad.ad-loaded::before {",
"  content: none;",
"}",
".c-ad.c-ad--full-width.ad-loaded--standard, .c-ad.c-ad--full-width.ad-loaded--responsive {",
"  left: calc(50% + 0px);",
"  margin-left: calc(-50vw - 0px);",
"  margin-right: calc(-50vw - 0px);",
"  position: relative;",
"  right: calc(50% + 0px);",
"  width: calc(100vw - 0px);",
"}",
".c-ad.c-ad--full-width.ad-loaded--standard::before, .c-ad.c-ad--full-width.ad-loaded--standard::after, .c-ad.c-ad--full-width.ad-loaded--responsive::before, .c-ad.c-ad--full-width.ad-loaded--responsive::after {",
"  border-top: 1px solid #d3dce6;",
"  margin-left: auto;",
"  margin-right: auto;",
"  max-width: 1280px;",
"  width: calc(100% - 32px);",
"}",
".c-ad.c-ad--full-width.ad-loaded--standard::before, .c-ad.c-ad--full-width.ad-loaded--responsive::before {",
"  padding-top: 16px;",
"}",
".c-ad.c-ad--full-width.ad-loaded--standard::after, .c-ad.c-ad--full-width.ad-loaded--responsive::after {",
"  content: '';",
"  display: block;",
"  height: 0;",
"  margin-top: 16px;",
"}",
".c-ad.c-ad--article-width.ad-loaded--standard, .c-ad.c-ad--article-width.ad-loaded--responsive {",
"  left: calc(50% + 0px);",
"  margin-left: calc(-50vw - 0px);",
"  margin-right: calc(-50vw - 0px);",
"  position: relative;",
"  right: calc(50% + 0px);",
"  width: calc(100vw - 0px);",
"  clear: both;",
"}",
"@media (min-width: 576px) {",
"  .c-ad.c-ad--article-width.ad-loaded--standard, .c-ad.c-ad--article-width.ad-loaded--responsive {",
"    left: calc(50% + 32px);",
"    margin-left: calc(-50vw - 16px);",
"    margin-right: calc(-50vw - 16px);",
"    position: relative;",
"    right: calc(50% + 32px);",
"    width: calc(100vw - 32px);",
"  }",
"}",
".c-ad.c-ad--article-width.ad-loaded--standard::before, .c-ad.c-ad--article-width.ad-loaded--standard::after, .c-ad.c-ad--article-width.ad-loaded--responsive::before, .c-ad.c-ad--article-width.ad-loaded--responsive::after {",
"  border-top: 1px solid #d3dce6;",
"  margin-left: auto;",
"  margin-right: auto;",
"  max-width: 1036px;",
"  width: calc(100% - 32px);",
"}",
".c-ad.c-ad--article-width.ad-loaded--standard::before, .c-ad.c-ad--article-width.ad-loaded--responsive::before {",
"  padding-top: 16px;",
"}",
".c-ad.c-ad--article-width.ad-loaded--standard::after, .c-ad.c-ad--article-width.ad-loaded--responsive::after {",
"  content: '';",
"  display: block;",
"  height: 0;",
"  margin-top: 16px;",
"}",
".c-ad.c-ad--house.ad-loaded--house {",
"  left: calc(50% + 0px);",
"  margin-left: calc(-50vw - 0px);",
"  margin-right: calc(-50vw - 0px);",
"  position: relative;",
"  right: calc(50% + 0px);",
"  width: calc(100vw - 0px);",
"}",
"@media (min-width: 576px) {",
"  .c-ad.c-ad--house.ad-loaded--house {",
"    left: auto;",
"    margin-left: auto;",
"    margin-right: auto;",
"    position: static;",
"    right: auto;",
"    width: auto;",
"  }",
"}",
".c-ad.c-ad--unlabeled .ad-loaded::before {",
"  content: none;",
"}",
"/* stylelint-enable */",
".c-ad--full-width.ad-loaded {",
"  margin-bottom: 1.77778em;",
"  margin-top: 1.77778em;",
"}",
"/* Gulp b2b must be run in order for changes to this file to be relected in",
"   breakpoints.json. This task is part of the build and also can be run independently */",
".c-bottom-persistent-ad {",
"  background: #fff;",
"  border-top: 1px solid #d3dce6;",
"  bottom: 0;",
"  display: -ms-flexbox;",
"  display: flex;",
"  height: 58px;",
"  -ms-flex-pack: distribute;",
"      justify-content: space-around;",
"  left: 0;",
"  position: fixed;",
"  transition: bottom 250ms ease-out;",
"  width: 100%;",
"  z-index: 4000000;",
"}",
"@media (min-width: 976px) {",
"  .c-bottom-persistent-ad {",
"    height: 100px;",
"  }",
"}",
".c-bottom-persistent-ad--hidden {",
"  bottom: -90px;",
"}",
"@media (min-width: 976px) {",
"  .c-bottom-persistent-ad--hidden {",
"    bottom: -100px;",
"  }",
"}",
".c-bottom-persistent-ad__button {",
"  background: #fff;",
"  border-left: 1px solid #d3dce6;",
"  border-radius: 4px 0 0 0;",
"  border-top: 1px solid #d3dce6;",
"  cursor: pointer;",
"  height: 32px;",
"  padding: 8px;",
"  position: absolute;",
"  right: 0;",
"  text-align: center;",
"  top: -32px;",
"  width: 32px;",
"}",
".c-bottom-persistent-ad__button:hover {",
"  fill: #e3e9ef;",
"}",
"@media (min-width: 784px) {",
"  .c-bottom-persistent-ad__button {",
"    background: transparent;",
"    border: 0;",
"    height: 16px;",
"    margin: 8px 16px;",
"    padding: 0;",
"    top: 0;",
"    width: 32px;",
"  }",
"}",
".c-bottom-persistent-ad__close-icon {",
"  display: block;",
"  height: 16px;",
"  width: 16px;",
"}",
".c-bottom-persistent-ad gpt-ad {",
"  -ms-flex-item-align: center;",
"      -ms-grid-row-align: center;",
"      align-self: center;",
"  max-width: 728px;",
"  width: 100%;",
"}"
].join('\n'));

//# sourceMappingURL=hippo.js.map
