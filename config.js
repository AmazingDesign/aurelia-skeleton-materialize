System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.6",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-materialize-bridge": "npm:aurelia-materialize-bridge@0.28.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
    "aurelia-router": "npm:aurelia-router@1.3.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0",
    "bluebird": "npm:bluebird@3.4.1",
    "fetch": "github:github/fetch@1.0.0",
    "font-awesome": "npm:font-awesome@4.6.3",
    "jquery": "npm:jquery@3.2.1",
    "materialize": "github:Dogfalo/materialize@0.98.2",
    "text": "github:systemjs/plugin-text@0.0.8",
    "github:Dogfalo/materialize@0.98.2": {
      "css": "github:systemjs/plugin-css@0.1.35",
      "jquery": "npm:jquery@3.2.1"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-binding@1.2.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:aurelia-bootstrapper@1.0.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.6",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0"
    },
    "npm:aurelia-dependency-injection@1.3.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-event-aggregator@1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-framework@1.0.6": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-loader-default@1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.3.1"
    },
    "npm:aurelia-materialize-bridge@0.28.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-metadata@1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-pal-browser@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-polyfills@1.1.1": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.3.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-task-queue@1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.3.0"
    },
    "npm:aurelia-templating-binding@1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating-resources@1.1.1": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating-router@1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.3.0",
      "aurelia-templating": "npm:aurelia-templating@1.4.2"
    },
    "npm:aurelia-templating@1.4.2": {
      "aurelia-binding": "npm:aurelia-binding@1.2.1",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.3.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.3",
      "aurelia-pal": "npm:aurelia-pal@1.3.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.2.0"
    },
    "npm:bluebird@3.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.35"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  },
  depCache: {
    "github:Dogfalo/materialize@0.98.2.js": [
      "github:Dogfalo/materialize@0.98.2/js/materialize"
    ],
    "github:Dogfalo/materialize@0.98.2/js/materialize.js": [
      "jquery",
      "../css/materialize.css!"
    ],
    "npm:jquery@3.2.1.js": [
      "npm:jquery@3.2.1/dist/jquery.js"
    ],
    "github:github/fetch@1.0.0.js": [
      "github:github/fetch@1.0.0/fetch.js"
    ],
    "github:systemjs/plugin-text@0.0.8.js": [
      "github:systemjs/plugin-text@0.0.8/text"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/waves/waves.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "../common/attributeManager",
      "../common/attributes",
      "../config-builder"
    ],
    "npm:aurelia-templating@1.4.2.js": [
      "npm:aurelia-templating@1.4.2/aurelia-templating"
    ],
    "npm:aurelia-binding@1.2.1.js": [
      "npm:aurelia-binding@1.2.1/aurelia-binding"
    ],
    "npm:aurelia-dependency-injection@1.3.1.js": [
      "npm:aurelia-dependency-injection@1.3.1/aurelia-dependency-injection"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/config-builder.js": [
      "aurelia-pal",
      "./dropdown/dropdown-fix"
    ],
    "npm:aurelia-templating@1.4.2/aurelia-templating.js": [
      "aurelia-logging",
      "aurelia-metadata",
      "aurelia-pal",
      "aurelia-path",
      "aurelia-loader",
      "aurelia-dependency-injection",
      "aurelia-binding",
      "aurelia-task-queue"
    ],
    "npm:aurelia-binding@1.2.1/aurelia-binding.js": [
      "aurelia-logging",
      "aurelia-pal",
      "aurelia-task-queue",
      "aurelia-metadata"
    ],
    "npm:aurelia-dependency-injection@1.3.1/aurelia-dependency-injection.js": [
      "aurelia-metadata",
      "aurelia-pal"
    ],
    "npm:aurelia-pal@1.3.0.js": [
      "npm:aurelia-pal@1.3.0/aurelia-pal"
    ],
    "npm:aurelia-logging@1.3.1.js": [
      "npm:aurelia-logging@1.3.1/aurelia-logging"
    ],
    "npm:aurelia-metadata@1.0.3.js": [
      "npm:aurelia-metadata@1.0.3/aurelia-metadata"
    ],
    "npm:aurelia-path@1.1.1.js": [
      "npm:aurelia-path@1.1.1/aurelia-path"
    ],
    "npm:aurelia-loader@1.0.0.js": [
      "npm:aurelia-loader@1.0.0/aurelia-loader"
    ],
    "npm:aurelia-task-queue@1.2.0.js": [
      "npm:aurelia-task-queue@1.2.0/aurelia-task-queue"
    ],
    "npm:aurelia-metadata@1.0.3/aurelia-metadata.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-loader@1.0.0/aurelia-loader.js": [
      "aurelia-path",
      "aurelia-metadata"
    ],
    "npm:aurelia-task-queue@1.2.0/aurelia-task-queue.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/transitions/staggered-list.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "aurelia-logging"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/transitions/fadein-image.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "aurelia-logging"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/tooltip/tooltip.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "../common/attributeManager",
      "../common/attributes"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/tap-target/tap-target.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "aurelia-logging"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/tabs/tabs.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "aurelia-task-queue",
      "../common/events",
      "../common/attributeManager",
      "../common/attributes"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/common/events.js": [
      "./constants"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/switch/switch.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "../common/attributes",
      "../common/events"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/slider/slider.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "../common/attributes",
      "aurelia-logging"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/sidenav/sidenav.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "../common/attributes",
      "../common/attributeManager",
      "aurelia-logging"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/sidenav/sidenav-collapse.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "../common/attributes",
      "aurelia-logging"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/select/select.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "aurelia-task-queue",
      "aurelia-logging",
      "../common/events",
      "../common/attributes",
      "aurelia-pal"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/scrollspy/scrollspy.js": [
      "aurelia-templating",
      "aurelia-dependency-injection"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/scrollfire/scrollfire.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "aurelia-logging"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/scrollfire/scrollfire-target.js": [
      "aurelia-templating",
      "aurelia-dependency-injection"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/range/range.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "aurelia-logging"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/radio/radio.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "../common/attributeManager",
      "../common/attributes"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/pushpin/pushpin.js": [
      "aurelia-templating",
      "aurelia-dependency-injection"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/progress/progress.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/parallax/parallax.js": [
      "aurelia-templating",
      "aurelia-dependency-injection"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/pagination/pagination.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "../common/events",
      "../common/attributes"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/navbar/navbar.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "../common/attributes",
      "../common/attributeManager"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/modal/modal.js": [
      "aurelia-logging",
      "aurelia-templating",
      "aurelia-dependency-injection",
      "../common/attributes",
      "../common/attributeManager",
      "../common/events"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/modal/modal-trigger.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "../common/attributes",
      "../common/attributeManager",
      "../common/events"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/input/input.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "aurelia-task-queue",
      "../common/attributes",
      "./input-update-service",
      "../common/events"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/input/input-update-service.js": [
      "aurelia-task-queue",
      "aurelia-dependency-injection",
      "aurelia-logging"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/input/input-prefix.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "../common/attributeManager"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/index.js": [
      "./config-builder",
      "./scrollfire/scrollfire-patch",
      "./common/polyfills",
      "./exports"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/exports.js": [
      "./autocomplete/autocomplete",
      "./badge/badge",
      "./box/box",
      "./breadcrumbs/breadcrumbs",
      "./breadcrumbs/instructionFilter",
      "./button/button",
      "./card/card",
      "./carousel/carousel-item",
      "./carousel/carousel",
      "./char-counter/char-counter",
      "./checkbox/checkbox",
      "./chip/chip",
      "./chip/chips",
      "./collapsible/collapsible",
      "./collection/collection-header",
      "./collection/collection-item",
      "./collection/collection",
      "./collection/md-collection-selector",
      "./colors/colorValueConverters",
      "./colors/md-colors",
      "./common/attributeManager",
      "./common/attributes",
      "./common/constants",
      "./common/events",
      "./datepicker/datepicker-default-parser",
      "./datepicker/datepicker",
      "./dropdown/dropdown-element",
      "./dropdown/dropdown",
      "./dropdown/dropdown-fix",
      "./fab/fab",
      "./file/file",
      "./footer/footer",
      "./input/input-prefix",
      "./input/input-update-service",
      "./input/input",
      "./modal/modal",
      "./modal/modal-trigger",
      "./navbar/navbar",
      "./pagination/pagination",
      "./parallax/parallax",
      "./progress/progress",
      "./pushpin/pushpin",
      "./radio/radio",
      "./range/range",
      "./scrollfire/scrollfire-patch",
      "./scrollfire/scrollfire-target",
      "./scrollfire/scrollfire",
      "./scrollspy/scrollspy",
      "./select/select",
      "./sidenav/sidenav-collapse",
      "./sidenav/sidenav",
      "./slider/slider",
      "./switch/switch",
      "./tabs/tabs",
      "./tap-target/tap-target",
      "./toast/toastService",
      "./tooltip/tooltip",
      "./transitions/fadein-image",
      "./transitions/staggered-list",
      "./validation/validationRenderer",
      "./waves/waves"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/autocomplete/autocomplete.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "../common/events"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/badge/badge.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "../common/attributeManager",
      "../common/attributes"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/box/box.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "../common/attributeManager"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/breadcrumbs/breadcrumbs.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "aurelia-router"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/button/button.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "../common/attributeManager",
      "../common/attributes"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/card/card.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "aurelia-binding",
      "../common/attributes"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/carousel/carousel-item.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/carousel/carousel.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "aurelia-task-queue",
      "../common/attributes"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/char-counter/char-counter.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "../common/attributeManager"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/checkbox/checkbox.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "../common/attributeManager",
      "../common/attributes"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/chip/chip.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "../common/attributes",
      "../common/events"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/chip/chips.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "aurelia-logging",
      "../common/events"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/collapsible/collapsible.js": [
      "aurelia-event-aggregator",
      "aurelia-templating",
      "aurelia-dependency-injection",
      "../common/attributes",
      "../common/attributeManager"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/collection/collection-header.js": [
      "aurelia-templating",
      "aurelia-dependency-injection"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/collection/collection-item.js": [
      "aurelia-templating"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/collection/collection.js": [
      "aurelia-templating",
      "aurelia-dependency-injection"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/collection/md-collection-selector.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "aurelia-binding",
      "../common/events",
      "../common/attributes"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/colors/md-colors.js": [
      "aurelia-templating"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/datepicker/datepicker.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-task-queue",
      "aurelia-dependency-injection",
      "aurelia-logging",
      "../common/attributes",
      "./datepicker-default-parser",
      "../common/events"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/dropdown/dropdown-element.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "../common/attributes"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/dropdown/dropdown.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "../common/attributeManager",
      "../common/attributes"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/fab/fab.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "../common/attributes"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/file/file.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "../common/events",
      "../common/attributes"
    ],
    "npm:aurelia-materialize-bridge@0.28.0/footer/footer.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "../common/attributeManager"
    ],
    "npm:aurelia-router@1.3.0.js": [
      "npm:aurelia-router@1.3.0/aurelia-router"
    ],
    "npm:aurelia-event-aggregator@1.0.1.js": [
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator"
    ],
    "npm:aurelia-router@1.3.0/aurelia-router.js": [
      "aurelia-logging",
      "aurelia-route-recognizer",
      "aurelia-dependency-injection",
      "aurelia-history",
      "aurelia-event-aggregator"
    ],
    "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js": [
      "aurelia-logging"
    ],
    "npm:aurelia-route-recognizer@1.1.0.js": [
      "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer"
    ],
    "npm:aurelia-history@1.0.0.js": [
      "npm:aurelia-history@1.0.0/aurelia-history"
    ],
    "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js": [
      "aurelia-path"
    ],
    "npm:aurelia-materialize-bridge@0.28.0.js": [
      "npm:aurelia-materialize-bridge@0.28.0/index"
    ],
    "npm:aurelia-logging-console@1.0.0.js": [
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console"
    ],
    "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js": [
      "aurelia-logging"
    ],
    "npm:aurelia-history-browser@1.0.0.js": [
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser"
    ],
    "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js": [
      "aurelia-pal",
      "aurelia-history"
    ],
    "npm:aurelia-loader-default@1.0.0.js": [
      "npm:aurelia-loader-default@1.0.0/aurelia-loader-default"
    ],
    "npm:aurelia-loader-default@1.0.0/aurelia-loader-default.js": [
      "aurelia-loader",
      "aurelia-pal",
      "aurelia-metadata"
    ],
    "npm:aurelia-templating-router@1.0.0.js": [
      "npm:aurelia-templating-router@1.0.0/aurelia-templating-router"
    ],
    "npm:aurelia-templating-router@1.0.0/aurelia-templating-router.js": [
      "aurelia-router",
      "./route-loader",
      "./router-view",
      "./route-href"
    ],
    "npm:aurelia-templating-router@1.0.0/route-loader.js": [
      "aurelia-dependency-injection",
      "aurelia-templating",
      "aurelia-router",
      "aurelia-path",
      "aurelia-metadata"
    ],
    "npm:aurelia-templating-router@1.0.0/router-view.js": [
      "aurelia-dependency-injection",
      "aurelia-templating",
      "aurelia-router",
      "aurelia-metadata",
      "aurelia-pal"
    ],
    "npm:aurelia-templating-router@1.0.0/route-href.js": [
      "aurelia-templating",
      "aurelia-dependency-injection",
      "aurelia-router",
      "aurelia-pal",
      "aurelia-logging"
    ],
    "npm:aurelia-templating-resources@1.1.1.js": [
      "npm:aurelia-templating-resources@1.1.1/aurelia-templating-resources"
    ],
    "npm:aurelia-templating-resources@1.1.1/aurelia-templating-resources.js": [
      "./compose",
      "./if",
      "./with",
      "./repeat",
      "./show",
      "./hide",
      "./sanitize-html",
      "./replaceable",
      "./focus",
      "aurelia-templating",
      "./css-resource",
      "./html-sanitizer",
      "./attr-binding-behavior",
      "./binding-mode-behaviors",
      "./throttle-binding-behavior",
      "./debounce-binding-behavior",
      "./signal-binding-behavior",
      "./binding-signaler",
      "./update-trigger-binding-behavior",
      "./abstract-repeater",
      "./repeat-strategy-locator",
      "./html-resource-plugin",
      "./null-repeat-strategy",
      "./array-repeat-strategy",
      "./map-repeat-strategy",
      "./set-repeat-strategy",
      "./number-repeat-strategy",
      "./repeat-utilities",
      "./analyze-view-factory",
      "./aurelia-hide-style"
    ],
    "npm:aurelia-templating-resources@1.1.1/signal-binding-behavior.js": [
      "./binding-signaler"
    ],
    "npm:aurelia-templating-resources@1.1.1/repeat-strategy-locator.js": [
      "./null-repeat-strategy",
      "./array-repeat-strategy",
      "./map-repeat-strategy",
      "./set-repeat-strategy",
      "./number-repeat-strategy"
    ],
    "npm:aurelia-templating-resources@1.1.1/map-repeat-strategy.js": [
      "./repeat-utilities"
    ],
    "npm:aurelia-templating-resources@1.1.1/set-repeat-strategy.js": [
      "./repeat-utilities"
    ],
    "npm:aurelia-templating-resources@1.1.1/number-repeat-strategy.js": [
      "./repeat-utilities"
    ],
    "npm:aurelia-templating-resources@1.1.1/aurelia-hide-style.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-templating-resources@1.1.1/compose.js": [
      "aurelia-dependency-injection",
      "aurelia-task-queue",
      "aurelia-templating",
      "aurelia-pal"
    ],
    "npm:aurelia-templating-resources@1.1.1/if.js": [
      "aurelia-templating",
      "aurelia-dependency-injection"
    ],
    "npm:aurelia-templating-resources@1.1.1/with.js": [
      "aurelia-dependency-injection",
      "aurelia-templating",
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.1.1/repeat.js": [
      "aurelia-dependency-injection",
      "aurelia-binding",
      "aurelia-templating",
      "./repeat-strategy-locator",
      "./repeat-utilities",
      "./analyze-view-factory",
      "./abstract-repeater"
    ],
    "npm:aurelia-templating-resources@1.1.1/show.js": [
      "aurelia-dependency-injection",
      "aurelia-templating",
      "aurelia-pal",
      "./aurelia-hide-style"
    ],
    "npm:aurelia-templating-resources@1.1.1/hide.js": [
      "aurelia-dependency-injection",
      "aurelia-templating",
      "aurelia-pal",
      "./aurelia-hide-style"
    ],
    "npm:aurelia-templating-resources@1.1.1/replaceable.js": [
      "aurelia-dependency-injection",
      "aurelia-templating"
    ],
    "npm:aurelia-templating-resources@1.1.1/sanitize-html.js": [
      "aurelia-binding",
      "aurelia-dependency-injection",
      "./html-sanitizer"
    ],
    "npm:aurelia-templating-resources@1.1.1/focus.js": [
      "aurelia-templating",
      "aurelia-binding",
      "aurelia-dependency-injection",
      "aurelia-task-queue",
      "aurelia-pal"
    ],
    "npm:aurelia-templating-resources@1.1.1/css-resource.js": [
      "aurelia-templating",
      "aurelia-loader",
      "aurelia-dependency-injection",
      "aurelia-path",
      "aurelia-pal"
    ],
    "npm:aurelia-templating-resources@1.1.1/attr-binding-behavior.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.1.1/binding-mode-behaviors.js": [
      "aurelia-binding",
      "aurelia-metadata"
    ],
    "npm:aurelia-templating-resources@1.1.1/throttle-binding-behavior.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.1.1/debounce-binding-behavior.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.1.1/binding-signaler.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.1.1/update-trigger-binding-behavior.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.1.1/html-resource-plugin.js": [
      "aurelia-templating",
      "./dynamic-element"
    ],
    "npm:aurelia-templating-resources@1.1.1/array-repeat-strategy.js": [
      "./repeat-utilities",
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.1.1/repeat-utilities.js": [
      "aurelia-binding"
    ],
    "npm:aurelia-templating-resources@1.1.1/dynamic-element.js": [
      "aurelia-templating"
    ],
    "npm:aurelia-polyfills@1.1.1.js": [
      "npm:aurelia-polyfills@1.1.1/aurelia-polyfills"
    ],
    "npm:aurelia-polyfills@1.1.1/aurelia-polyfills.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-templating-binding@1.0.0.js": [
      "npm:aurelia-templating-binding@1.0.0/aurelia-templating-binding"
    ],
    "npm:aurelia-templating-binding@1.0.0/aurelia-templating-binding.js": [
      "aurelia-logging",
      "aurelia-binding",
      "aurelia-templating"
    ],
    "npm:aurelia-animator-css@1.0.1.js": [
      "npm:aurelia-animator-css@1.0.1/aurelia-animator-css"
    ],
    "npm:aurelia-animator-css@1.0.1/aurelia-animator-css.js": [
      "aurelia-templating",
      "aurelia-pal"
    ],
    "npm:aurelia-fetch-client@1.0.1.js": [
      "npm:aurelia-fetch-client@1.0.1/aurelia-fetch-client"
    ],
    "npm:aurelia-bootstrapper@1.0.0.js": [
      "npm:aurelia-bootstrapper@1.0.0/aurelia-bootstrapper"
    ],
    "npm:aurelia-bootstrapper@1.0.0/aurelia-bootstrapper.js": [
      "aurelia-pal",
      "aurelia-pal-browser",
      "aurelia-polyfills"
    ],
    "npm:aurelia-pal-browser@1.0.0.js": [
      "npm:aurelia-pal-browser@1.0.0/aurelia-pal-browser"
    ],
    "npm:aurelia-pal-browser@1.0.0/aurelia-pal-browser.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-framework@1.0.6.js": [
      "npm:aurelia-framework@1.0.6/aurelia-framework"
    ],
    "npm:aurelia-framework@1.0.6/aurelia-framework.js": [
      "aurelia-dependency-injection",
      "aurelia-binding",
      "aurelia-metadata",
      "aurelia-templating",
      "aurelia-loader",
      "aurelia-task-queue",
      "aurelia-path",
      "aurelia-pal",
      "aurelia-logging"
    ]
  },
  bundles: {
    "app-build-15fc2186bc.js": [
      "app.html!github:systemjs/plugin-text@0.0.8.js",
      "app.js",
      "dashboard.html!github:systemjs/plugin-text@0.0.8.js",
      "dashboard.js",
      "main.js"
    ],
    "aurelia-eda970540a.js": [
      "github:Dogfalo/materialize@0.98.2.js",
      "github:Dogfalo/materialize@0.98.2/css/materialize.css!github:systemjs/plugin-css@0.1.35.js",
      "github:Dogfalo/materialize@0.98.2/js/materialize.js",
      "github:github/fetch@1.0.0.js",
      "github:github/fetch@1.0.0/fetch.js",
      "github:systemjs/plugin-text@0.0.8.js",
      "github:systemjs/plugin-text@0.0.8/text.js",
      "npm:aurelia-animator-css@1.0.1.js",
      "npm:aurelia-animator-css@1.0.1/aurelia-animator-css.js",
      "npm:aurelia-binding@1.2.1.js",
      "npm:aurelia-binding@1.2.1/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0.js",
      "npm:aurelia-bootstrapper@1.0.0/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.3.1.js",
      "npm:aurelia-dependency-injection@1.3.1/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.1.js",
      "npm:aurelia-event-aggregator@1.0.1/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.1.js",
      "npm:aurelia-fetch-client@1.0.1/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.6.js",
      "npm:aurelia-framework@1.0.6/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0.js",
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0.js",
      "npm:aurelia-loader-default@1.0.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.3.1.js",
      "npm:aurelia-logging@1.3.1/aurelia-logging.js",
      "npm:aurelia-materialize-bridge@0.28.0.js",
      "npm:aurelia-materialize-bridge@0.28.0/autocomplete/autocomplete.js",
      "npm:aurelia-materialize-bridge@0.28.0/badge/badge.js",
      "npm:aurelia-materialize-bridge@0.28.0/box/box.js",
      "npm:aurelia-materialize-bridge@0.28.0/breadcrumbs/breadcrumbs.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/breadcrumbs/breadcrumbs.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/breadcrumbs/breadcrumbs.js",
      "npm:aurelia-materialize-bridge@0.28.0/breadcrumbs/instructionFilter.js",
      "npm:aurelia-materialize-bridge@0.28.0/button/button.js",
      "npm:aurelia-materialize-bridge@0.28.0/card/card.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/card/card.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/card/card.js",
      "npm:aurelia-materialize-bridge@0.28.0/carousel/carousel-item.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/carousel/carousel-item.js",
      "npm:aurelia-materialize-bridge@0.28.0/carousel/carousel.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/carousel/carousel.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/carousel/carousel.js",
      "npm:aurelia-materialize-bridge@0.28.0/char-counter/char-counter.js",
      "npm:aurelia-materialize-bridge@0.28.0/checkbox/checkbox.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/checkbox/checkbox.js",
      "npm:aurelia-materialize-bridge@0.28.0/chip/chip.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/chip/chip.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/chip/chip.js",
      "npm:aurelia-materialize-bridge@0.28.0/chip/chips.js",
      "npm:aurelia-materialize-bridge@0.28.0/click-counter.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/click-counter.js",
      "npm:aurelia-materialize-bridge@0.28.0/collapsible/collapsible.js",
      "npm:aurelia-materialize-bridge@0.28.0/collection/collection-header.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/collection/collection-header.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/collection/collection-header.js",
      "npm:aurelia-materialize-bridge@0.28.0/collection/collection-item.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/collection/collection-item.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/collection/collection-item.js",
      "npm:aurelia-materialize-bridge@0.28.0/collection/collection.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/collection/collection.js",
      "npm:aurelia-materialize-bridge@0.28.0/collection/md-collection-selector.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/collection/md-collection-selector.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/collection/md-collection-selector.js",
      "npm:aurelia-materialize-bridge@0.28.0/colors/colorValueConverters.js",
      "npm:aurelia-materialize-bridge@0.28.0/colors/md-colors.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/colors/md-colors.js",
      "npm:aurelia-materialize-bridge@0.28.0/common/attributeManager.js",
      "npm:aurelia-materialize-bridge@0.28.0/common/attributes.js",
      "npm:aurelia-materialize-bridge@0.28.0/common/constants.js",
      "npm:aurelia-materialize-bridge@0.28.0/common/events.js",
      "npm:aurelia-materialize-bridge@0.28.0/common/polyfills.js",
      "npm:aurelia-materialize-bridge@0.28.0/config-builder.js",
      "npm:aurelia-materialize-bridge@0.28.0/datepicker/datepicker-default-parser.js",
      "npm:aurelia-materialize-bridge@0.28.0/datepicker/datepicker.js",
      "npm:aurelia-materialize-bridge@0.28.0/dropdown/dropdown-element.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/dropdown/dropdown-element.js",
      "npm:aurelia-materialize-bridge@0.28.0/dropdown/dropdown-fix.js",
      "npm:aurelia-materialize-bridge@0.28.0/dropdown/dropdown.js",
      "npm:aurelia-materialize-bridge@0.28.0/exports.js",
      "npm:aurelia-materialize-bridge@0.28.0/fab/fab.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/fab/fab.js",
      "npm:aurelia-materialize-bridge@0.28.0/file/file.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/file/file.js",
      "npm:aurelia-materialize-bridge@0.28.0/footer/footer.js",
      "npm:aurelia-materialize-bridge@0.28.0/index.js",
      "npm:aurelia-materialize-bridge@0.28.0/input/input-prefix.js",
      "npm:aurelia-materialize-bridge@0.28.0/input/input-update-service.js",
      "npm:aurelia-materialize-bridge@0.28.0/input/input.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/input/input.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/input/input.js",
      "npm:aurelia-materialize-bridge@0.28.0/modal/modal-trigger.js",
      "npm:aurelia-materialize-bridge@0.28.0/modal/modal.js",
      "npm:aurelia-materialize-bridge@0.28.0/navbar/navbar.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/navbar/navbar.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/navbar/navbar.js",
      "npm:aurelia-materialize-bridge@0.28.0/pagination/pagination.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/pagination/pagination.js",
      "npm:aurelia-materialize-bridge@0.28.0/parallax/parallax.js",
      "npm:aurelia-materialize-bridge@0.28.0/progress/progress.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/progress/progress.js",
      "npm:aurelia-materialize-bridge@0.28.0/pushpin/pushpin.js",
      "npm:aurelia-materialize-bridge@0.28.0/radio/radio.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/radio/radio.js",
      "npm:aurelia-materialize-bridge@0.28.0/range/range.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/range/range.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/range/range.js",
      "npm:aurelia-materialize-bridge@0.28.0/scrollfire/scrollfire-patch.js",
      "npm:aurelia-materialize-bridge@0.28.0/scrollfire/scrollfire-target.js",
      "npm:aurelia-materialize-bridge@0.28.0/scrollfire/scrollfire.js",
      "npm:aurelia-materialize-bridge@0.28.0/scrollspy/scrollspy.js",
      "npm:aurelia-materialize-bridge@0.28.0/select/select.js",
      "npm:aurelia-materialize-bridge@0.28.0/sidenav/sidenav-collapse.js",
      "npm:aurelia-materialize-bridge@0.28.0/sidenav/sidenav.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/sidenav/sidenav.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/sidenav/sidenav.js",
      "npm:aurelia-materialize-bridge@0.28.0/slider/slider.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/slider/slider.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/slider/slider.js",
      "npm:aurelia-materialize-bridge@0.28.0/switch/switch.css!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/switch/switch.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/switch/switch.js",
      "npm:aurelia-materialize-bridge@0.28.0/tabs/tabs.js",
      "npm:aurelia-materialize-bridge@0.28.0/tap-target/tap-target.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-materialize-bridge@0.28.0/tap-target/tap-target.js",
      "npm:aurelia-materialize-bridge@0.28.0/toast/toastService.js",
      "npm:aurelia-materialize-bridge@0.28.0/tooltip/tooltip.js",
      "npm:aurelia-materialize-bridge@0.28.0/transitions/fadein-image.js",
      "npm:aurelia-materialize-bridge@0.28.0/transitions/staggered-list.js",
      "npm:aurelia-materialize-bridge@0.28.0/validation/validationRenderer.js",
      "npm:aurelia-materialize-bridge@0.28.0/waves/waves.js",
      "npm:aurelia-materialize-bridge@0.28.0/well/md-well.html!github:systemjs/plugin-text@0.0.8.js",
      "npm:aurelia-metadata@1.0.3.js",
      "npm:aurelia-metadata@1.0.3/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0.js",
      "npm:aurelia-pal-browser@1.0.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.3.0.js",
      "npm:aurelia-pal@1.3.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.1.1.js",
      "npm:aurelia-polyfills@1.1.1/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.1.0.js",
      "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.3.0.js",
      "npm:aurelia-router@1.3.0/aurelia-router.js",
      "npm:aurelia-task-queue@1.2.0.js",
      "npm:aurelia-task-queue@1.2.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0.js",
      "npm:aurelia-templating-binding@1.0.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.1.1.js",
      "npm:aurelia-templating-resources@1.1.1/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.1.1/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.1.1/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.1.1/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.1.1/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.1.1/binding-signaler.js",
      "npm:aurelia-templating-resources@1.1.1/compose.js",
      "npm:aurelia-templating-resources@1.1.1/css-resource.js",
      "npm:aurelia-templating-resources@1.1.1/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/dynamic-element.js",
      "npm:aurelia-templating-resources@1.1.1/focus.js",
      "npm:aurelia-templating-resources@1.1.1/hide.js",
      "npm:aurelia-templating-resources@1.1.1/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.1.1/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.1.1/if.js",
      "npm:aurelia-templating-resources@1.1.1/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.1.1/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.1.1/repeat.js",
      "npm:aurelia-templating-resources@1.1.1/replaceable.js",
      "npm:aurelia-templating-resources@1.1.1/sanitize-html.js",
      "npm:aurelia-templating-resources@1.1.1/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.1.1/show.js",
      "npm:aurelia-templating-resources@1.1.1/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.1.1/with.js",
      "npm:aurelia-templating-router@1.0.0.js",
      "npm:aurelia-templating-router@1.0.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0/router-view.js",
      "npm:aurelia-templating@1.4.2.js",
      "npm:aurelia-templating@1.4.2/aurelia-templating.js",
      "npm:jquery@3.2.1.js",
      "npm:jquery@3.2.1/dist/jquery.js"
    ]
  }
});